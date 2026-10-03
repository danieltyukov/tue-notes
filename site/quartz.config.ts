import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

// Site configuration for Quartz 4. site/build.sh copies this file into a
// Quartz checkout before building, so imports are relative to that checkout.
// Reference: https://quartz.jzhao.xyz/configuration
//
// SITE_BASE_URL is set by the GitHub Actions workflow from the repository's
// Pages URL, so forks build with the right address without editing this file.

const config: QuartzConfig = {
  configuration: {
    pageTitle: "TU/e EE Notes",
    pageTitleSuffix: " | TU/e EE Notes",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: (process.env.SITE_BASE_URL || "danieltyukov.github.io/tue-notes").replace(/^https?:\/\//, ""),
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      // prepare-content.mjs writes each note's git dates into its frontmatter.
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      // Obsidian shows a single line break as a break; do the same here.
      Plugin.HardLineBreaks(),
      Plugin.TableOfContents(),
      // prettyLinks would cut link text at the last "/" (e.g. "MOSFET/MOST").
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", prettyLinks: false }),
      Plugin.Description(),
      // MathJax matches what Obsidian uses, so formulas render the same.
      Plugin.Latex({ renderEngine: "mathjax" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
