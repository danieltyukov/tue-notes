#!/usr/bin/env node
// Stages the vault into a Quartz content folder. The vault itself is not
// modified; only the staged copy is rewritten.
//
// - Notes and images are copied. PDFs and other documents are left out of the
//   site, and links or embeds pointing at them go to the file on GitHub.
// - Links are resolved the way Obsidian resolves them and rewritten to full
//   vault paths, so Quartz finds the same file Obsidian shows.
// - Links to files or notes that do not exist become plain text instead of
//   broken images or 404 links. The output lists the missing files.
// - Each note gets created/modified dates from git history.
// - README.md becomes the home page (index.md).
//
// Usage: node site/prepare-content.mjs <vault-dir> <content-dir>
// Env:   SITE_REPO   owner/name used for GitHub links (default: from git remote)
//        SITE_BRANCH branch used for GitHub links (default: master)

import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"

const [vaultArg, outArg] = process.argv.slice(2)
if (!vaultArg || !outArg) {
  console.error("usage: prepare-content.mjs <vault-dir> <content-dir>")
  process.exit(1)
}
const vault = path.resolve(vaultArg)
const out = path.resolve(outArg)

// Top-level folders that are part of the repository but not of the notes.
const NOT_NOTES = new Set(["site", "templates", ".github"])
const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".avif", ".bmp"])

const repo = process.env.SITE_REPO || repoFromRemote()
const branch = process.env.SITE_BRANCH || "master"

function repoFromRemote() {
  try {
    const url = execFileSync("git", ["remote", "get-url", "origin"], { cwd: vault }).toString().trim()
    const m = url.match(/github\.com[:/](.+?)(\.git)?$/)
    if (m) return m[1]
  } catch {}
  return "danieltyukov/tue-notes"
}

// Every file in the repository, as posix paths relative to the vault root.
function walk(dir, rel = "") {
  const files = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    // Skip .git, .obsidian, site/.build and other hidden folders, but keep
    // .github so links to the workflow resolve.
    if (entry.name.startsWith(".") && !(entry.name === ".github" && !rel)) continue
    if (entry.name === "node_modules") continue
    const relPath = rel ? `${rel}/${entry.name}` : entry.name
    if (entry.isDirectory()) {
      files.push(...walk(path.join(dir, entry.name), relPath))
    } else if (entry.isFile()) {
      files.push(relPath)
    }
  }
  return files
}

const allFiles = walk(vault)
const fileSet = new Set(allFiles)
const byBasename = new Map()
for (const f of allFiles) {
  const key = path.posix.basename(f).toLowerCase()
  if (!byBasename.has(key)) byBasename.set(key, [])
  byBasename.get(key).push(f)
}

const ext = (p) => path.posix.extname(p).toLowerCase()
const inNotes = (p) => p.includes("/") && !NOT_NOTES.has(p.split("/")[0])
const isNote = (p) => ext(p) === ".md" && inNotes(p)
const isImage = (p) => IMAGE_EXT.has(ext(p))
const isPublished = (p) => isNote(p) || (isImage(p) && inNotes(p)) || p === "README.md"

// Resolve a link target the way Obsidian does: a path relative to the note
// or to the vault root first, then by file name anywhere in the vault,
// preferring the match closest to the linking note. Note links may omit ".md".
function resolve(target, noteDir) {
  let t = target.trim().replace(/^\.\//, "")
  if (!t) return null
  if (t.startsWith("/")) t = t.slice(1)
  const names = [t, `${t}.md`]
  for (const name of names) {
    for (const c of [path.posix.join(noteDir, name), path.posix.normalize(name)]) {
      if (fileSet.has(c)) return c
    }
  }
  for (const name of names) {
    const sameName = byBasename.get(path.posix.basename(name).toLowerCase()) || []
    const sameSuffix = sameName.filter((f) => f.toLowerCase().endsWith("/" + name.toLowerCase()))
    const pick = closest(sameSuffix.length ? sameSuffix : sameName, noteDir)
    if (pick) return pick
  }
  return null
}

function closest(candidates, noteDir) {
  const shared = (f) => {
    const a = f.split("/")
    const b = noteDir.split("/")
    let i = 0
    while (i < a.length - 1 && i < b.length && a[i] === b[i]) i++
    return i
  }
  return [...candidates].sort((x, y) => shared(y) - shared(x) || x.localeCompare(y))[0] ?? null
}

const githubUrl = (p) =>
  `https://github.com/${repo}/blob/${branch}/${p.split("/").map(encodeURIComponent).join("/")}`

// Targets with a file extension that is not a note or an image.
const looksLikeDocument = (t) => {
  const e = ext(t)
  return e !== "" && e !== ".md" && !IMAGE_EXT.has(e) && /^\.[a-z0-9]{1,5}$/.test(e)
}

const stats = { notes: 0, images: 0, rewritten: 0, missing: new Map() }

function noteMissing(target, note) {
  if (!stats.missing.has(target)) stats.missing.set(target, new Set())
  stats.missing.get(target).add(note)
}

const missingText = (name) => `*${name} (not included in the repository)*`
const isSize = (s) => /^\d+(x\d+)?$/.test(s ?? "")

// Links are rewritten to full vault paths because Quartz only resolves bare
// file names when they are unique across the whole vault, while Obsidian
// picks the closest file. Links to documents go to GitHub instead.
function rewriteLine(line, note) {
  const noteDir = path.posix.dirname(note)

  // Obsidian wikilinks and embeds: [[target#anchor|alias]] and ![[...]].
  // Inside tables the pipe is escaped as \|.
  line = line.replace(/(!?)\[\[([^\]|]+?)(\\?)(?:\|([^\]]*))?\]\]/g, (whole, bang, raw, escape, alias) => {
    const hash = raw.indexOf("#")
    const target = hash >= 0 ? raw.slice(0, hash) : raw
    const anchor = hash >= 0 ? raw.slice(hash) : ""
    if (!target) return whole
    const resolved = resolve(target, noteDir)
    const name = path.posix.basename(target)
    if (!resolved) {
      if (looksLikeDocument(target) || (bang && isImage(target))) {
        noteMissing(target, note)
        return bang ? missingText(name) : `${alias || name} (not included in the repository)`
      }
      // Obsidian shows links to notes that do not exist yet as placeholders;
      // on the site they would lead to a 404, so keep only the text.
      return bang ? missingText(name) : alias || raw
    }
    if (!isPublished(resolved)) {
      stats.rewritten++
      return `[${alias && !isSize(alias) ? alias : name}](${githubUrl(resolved)})`
    }
    const dest = resolved.replace(/\.md$/, "")
    // Without an alias, show the link the way Obsidian does: "Note > Heading".
    const label = alias ?? (bang ? undefined : raw.replace("#", " > "))
    return `${bang}[[${dest}${anchor}${label !== undefined ? `${escape}|${label}` : ""}]]`
  })

  // Markdown links and images: [text](target "title") and ![alt](target)
  line = line.replace(/(!?)\[([^\]]*)\]\((<[^>]+>|[^)\s]+)((?:\s+"[^"]*")?)\)/g, (whole, bang, text, raw, title) => {
    let target = raw.replace(/^<|>$/g, "")
    if (/^file:\/\//i.test(target)) return text || path.posix.basename(target)
    if (/^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith("#")) return whole
    try {
      target = decodeURI(target)
    } catch {}
    const hash = target.indexOf("#")
    const anchor = hash >= 0 ? target.slice(hash) : ""
    if (hash >= 0) target = target.slice(0, hash)
    const resolved = resolve(target, noteDir)
    const name = path.posix.basename(target)
    if (!resolved) {
      if (looksLikeDocument(target) || (bang && isImage(target))) {
        noteMissing(target, note)
        const caption = text.split("|")[0].trim()
        return bang ? missingText(caption && caption !== name ? `${name}: ${caption}` : name) : `${text || name} (not included in the repository)`
      }
      return whole
    }
    if (!isPublished(resolved)) {
      stats.rewritten++
      return `[${text || path.posix.basename(resolved)}](${githubUrl(resolved)})`
    }
    // Obsidian sizes markdown images with ![alt|500](...); Quartz only
    // understands that on wikilink embeds.
    const size = bang ? text.split("|").pop() : ""
    if (bang && isImage(resolved) && text.includes("|") && isSize(size)) return `![[${resolved}|${size}]]`
    return `${bang}[${text}](<${resolved}${anchor}>${title})`
  })

  return line
}

// Also smooths over two things Obsidian accepts but the site's Markdown
// parser does not: a closing code fence indented more than its opening one,
// and display math written as "$$formula" ... "formula$$" across lines.
function rewriteNote(source, note) {
  let fence = null
  let math = false
  return source
    .split("\n")
    .map((line) => {
      const m = line.match(/^(\s*)(```+|~~~+)(.*)$/)
      if (m) {
        if (!fence) fence = { indent: m[1], char: m[2][0] }
        else if (m[2][0] === fence.char && !m[3].trim()) {
          line = fence.indent + m[2]
          fence = null
        }
        return line
      }
      if (fence) return line
      const t = line.trim()
      const marks = t.split("$$").length - 1
      if (t === "$$") {
        math = !math
      } else if (!math && marks === 1 && t.startsWith("$$")) {
        math = true
        return "$$\n" + t.slice(2)
      } else if (math && marks === 1 && t.endsWith("$$")) {
        math = false
        return t.slice(0, -2) + "\n$$"
      }
      return math ? line : rewriteLine(line, note)
    })
    .join("\n")
}

// The staged copy lives outside git, so Quartz cannot look up dates itself.
function gitDates(rel) {
  try {
    const log = execFileSync("git", ["log", "--format=%cI", "--", rel], { cwd: vault })
      .toString()
      .split("\n")
      .filter(Boolean)
    if (log.length) return { created: log[log.length - 1], modified: log[0] }
  } catch {}
  return {}
}

// Obsidian plugins write dates like "Monday, January 1st 2024, 21:17:43".
function parseDate(value) {
  if (!value) return null
  const cleaned = value
    .replace(/^["']|["']$/g, "")
    .replace(/^[A-Za-z]+day,\s*/, "")
    .replace(/(\d)(st|nd|rd|th)\b/, "$1")
    .replace(/(\d{4}),/, "$1")
  const d = new Date(cleaned)
  return isNaN(d) ? null : d
}

// Writes ISO created/modified dates into the frontmatter: the earliest and
// latest of what the note already says and what git history says.
function withFrontmatter(source, rel, extra = {}) {
  let fm = []
  let body = source
  const m = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (m) {
    fm = m[1].split(/\r?\n/)
    body = source.slice(m[0].length)
  }
  const git = gitDates(rel)
  for (const key of ["created", "modified"]) {
    const i = fm.findIndex((l) => l.startsWith(`${key}:`))
    const candidates = [i >= 0 ? parseDate(fm[i].slice(key.length + 1).trim()) : null, parseDate(git[key])]
      .filter(Boolean)
      .map((d) => d.getTime())
    if (i >= 0) fm.splice(i, 1)
    if (candidates.length) {
      const t = key === "created" ? Math.min(...candidates) : Math.max(...candidates)
      fm.push(`${key}: ${new Date(t).toISOString()}`)
    }
  }
  // Quartz turns aliases into redirect pages at the site root. Notes use an
  // alias to keep a renamed note's old URL working, so put the redirect in
  // the note's own folder, where the old page was.
  const dir = path.posix.dirname(rel)
  let inAliases = false
  fm = fm.map((l) => {
    if (/^aliases:\s*$/.test(l)) inAliases = true
    else if (!/^\s+-/.test(l)) inAliases = false
    const item = inAliases && l.match(/^(\s+-\s+)(.+)$/)
    if (item && dir !== "." && !item[2].includes("/")) {
      return `${item[1]}${JSON.stringify(`${dir}/${item[2].replace(/^["']|["']$/g, "")}`)}`
    }
    return l
  })
  for (const [k, v] of Object.entries(extra)) {
    if (!fm.some((l) => l.startsWith(`${k}:`))) fm.push(`${k}: ${JSON.stringify(v)}`)
  }
  return fm.length ? `---\n${fm.join("\n")}\n---\n${body}` : body
}

function place(rel, data) {
  const dest = path.join(out, rel)
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  if (data !== undefined) {
    fs.writeFileSync(dest, data)
    return
  }
  const src = path.join(vault, rel)
  try {
    fs.linkSync(src, dest)
  } catch {
    fs.copyFileSync(src, dest)
  }
}

fs.rmSync(out, { recursive: true, force: true })
fs.mkdirSync(out, { recursive: true })

for (const f of allFiles) {
  if (f === "README.md") {
    // The README doubles as the site's home page; its first heading becomes
    // the page title so it is not shown twice.
    let home = rewriteNote(fs.readFileSync(path.join(vault, f), "utf8"), f)
    const heading = home.match(/^# (.+)\n+/)
    if (heading) home = home.slice(heading[0].length)
    place("index.md", withFrontmatter(home, f, { title: heading ? heading[1].trim() : "Home" }))
    stats.notes++
  } else if (isNote(f)) {
    place(f, withFrontmatter(rewriteNote(fs.readFileSync(path.join(vault, f), "utf8"), f), f))
    stats.notes++
  } else if (isImage(f) && inNotes(f)) {
    place(f)
    stats.images++
  }
}

console.log(`Staged ${stats.notes} notes and ${stats.images} images into ${path.relative(process.cwd(), out) || "."}`)
console.log(`Rewrote ${stats.rewritten} links to files on github.com/${repo} (${branch})`)
if (stats.missing.size) {
  console.log(`${stats.missing.size} linked files are not in the repository:`)
  for (const [target, notes] of [...stats.missing].sort()) {
    console.log(`  ${target}  <-  ${[...notes].join(", ")}`)
  }
}
