import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// "Edit this page on GitHub" link shown under each note. Rendered at build
// time; SITE_REPO and SITE_BRANCH are set by site/build.sh.

export default (() => {
  const EditLink: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const source = fileData.relativePath === "index.md" ? "README.md" : fileData.relativePath
    if (!source) return null
    const repo = process.env.SITE_REPO || "danieltyukov/tue-notes"
    const branch = process.env.SITE_BRANCH || "master"
    const path = source.split("/").map(encodeURIComponent).join("/")
    return (
      <p class={`edit-link ${displayClass ?? ""}`}>
        <a href={`https://github.com/${repo}/edit/${branch}/${path}`}>Edit this page on GitHub</a>
        {" · "}
        <a href={`https://github.com/${repo}/commits/${branch}/${path}`}>History</a>
      </p>
    )
  }

  EditLink.css = `
.edit-link {
  margin-top: 3rem;
  font-size: 0.9rem;
  color: var(--gray);
}
`
  return EditLink
}) satisfies QuartzComponentConstructor
