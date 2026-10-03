import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import EditLink from "./quartz/components/EditLink"

// Page layout for Quartz 4. Copied into the Quartz checkout by site/build.sh.
// Reference: https://quartz.jzhao.xyz/layout

const repoUrl = `https://github.com/${process.env.SITE_REPO || "danieltyukov/tue-notes"}`

// Areas and Topics come first in the sidebar, then the course folders.
// The function is sent to the browser as text, so it cannot use outside names
// or define inner functions (the bundler wraps those in a helper the browser
// does not have).
const explorer = Component.Explorer({
  sortFn: (a, b) => {
    const pinned = ["Areas", "Topics"]
    const ra = pinned.includes(a.slugSegment) ? pinned.indexOf(a.slugSegment) : 2
    const rb = pinned.includes(b.slugSegment) ? pinned.indexOf(b.slugSegment) : 2
    if (a.isFolder && b.isFolder && ra !== rb) return ra - rb
    if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
})

// Tags would add extra hub nodes; the graph is organised by areas and topics.
const graph = Component.Graph({
  localGraph: { showTags: false },
  globalGraph: { showTags: false },
})

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [EditLink()],
  footer: Component.Footer({
    links: {
      "Source on GitHub": repoUrl,
      "How to contribute": `${repoUrl}/blob/${process.env.SITE_BRANCH || "master"}/CONTRIBUTING.md`,
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    explorer,
  ],
  right: [
    graph,
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [{ Component: Component.Search(), grow: true }, { Component: Component.Darkmode() }],
    }),
    explorer,
  ],
  right: [],
}
