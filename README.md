# TU/e Electrical Engineering Notes

Course notes from the Electrical Engineering bachelor at Eindhoven University of Technology (TU/e), written in [Obsidian](https://obsidian.md). You can read them on the website or open the repository as an Obsidian vault.

**Website: https://danieltyukov.github.io/tue-notes/**

Corrections, better explanations and notes for new courses are welcome. See [Contributing](#contributing).

## Courses

| Area | Code | Course |
| --- | --- | --- |
| [Mathematics](Areas/Mathematics.md) | 2DE20 | [Math I (linear algebra)](2DE20/Math%20I%20-%202DE20.md) |
| [Mathematics](Areas/Mathematics.md) | 2WBB0 | [Calculus](2WBB0/Calculus%20-%202WBB0.md) |
| [Mathematics](Areas/Mathematics.md) | 5EMA0 | [Math II (optimization and probability)](5EMA0/Math%20II%20-%205EMA0.md) |
| [Signals and Systems](Areas/Signals%20and%20Systems.md) | 5ESB0 | [Systems](5ESB0/Systems%20-%205ESB0.md) (+ notes by a friend) |
| [Signals and Systems](Areas/Signals%20and%20Systems.md) | 5ESC0 | [Signals II (DSP fundamentals)](5ESC0/Signals%20II%20%28DSP%20Fundamentals%29%20-%205ESC0.md) (+ notes by a friend) |
| [Signals and Systems](Areas/Signals%20and%20Systems.md) | 5ESD0 | [Control Systems](5ESD0/Control%20Systems%20-%205ESD0.md) |
| [Electronics](Areas/Electronics.md) | 5ECB0 | [Electronics I](5ECB0/Electronics%20I%20-%205ECB0.md) |
| [Electronics](Areas/Electronics.md) | 5ECC0 | [Electronics II](5ECC0/Electronics%20II%20-%205ECC0.md) (+ resit notes) |
| [Electronics](Areas/Electronics.md) | 5XCC0 | [Biopotential and Neural Interface Circuits](5XCC0/Biopotential%20and%20Neural%20Interface%20Circuits%20-%205XCC0.md) |
| [Electronics](Areas/Electronics.md) | 5XIC0 | [Electronic Systems Engineering](5XIC0/Electronic%20Systems%20Engineering%20-%205XIC0.md) |
| [Electronics](Areas/Electronics.md) | BEP | [Bachelor end project: gold-bump flip-chip bonding for RF ICs](BEP/Bachelor%20End%20Project%20-%20BEP.md) |
| [Electromagnetics and Waves](Areas/Electromagnetics%20and%20Waves.md) | 5EPA0 | [Electromagnetics I](5EPA0/Electromagnetics%20I%20-%205EPA0.md) |
| [Electromagnetics and Waves](Areas/Electromagnetics%20and%20Waves.md) | 5EPB0 | [Electromagnetics II](5EPB0/Electromagnetics%20II%20-%205EPB0.md) |
| [Electromagnetics and Waves](Areas/Electromagnetics%20and%20Waves.md) | 5XTB0 | [Photonics](5XTB0/Photonics%20-%205XTB0.md) |
| [Electromagnetics and Waves](Areas/Electromagnetics%20and%20Waves.md) | 5XTC0 | [Components in Wireless Technologies](5XTC0/Components%20in%20Wireless%20Technologies%20-%205XTC0.md) |
| [Communications and Networking](Areas/Communications%20and%20Networking.md) | 5ETB0 | [Communication Theory](5ETB0/Communication%20Theory%20-%205ETB0.md) |
| [Communications and Networking](Areas/Communications%20and%20Networking.md) | 5ETC0 | [Communication 1](5ETC0/Communication%201%20-%205ETC0.md) |
| [Communications and Networking](Areas/Communications%20and%20Networking.md) | 5XTA0 | [Telecommunications Systems](5XTA0/Telecommunications%20Systems%20-%205XTA0.md) |
| [Computer Engineering](Areas/Computer%20Engineering.md) | 2INC0 | [Operating Systems](2INC0/Operating%20Systems%20-%202INC0.md) |
| [Computer Engineering](Areas/Computer%20Engineering.md) | 5EIB0 | [Computation II](5EIB0/Computation%20II%20-%205EIB0.md) (+ resit notes) |
| [Computer Engineering](Areas/Computer%20Engineering.md) | 5XIE0 | [Computation Modeling](5XIE0/Computation%20Modeling%20-%205XIE0.md) |
| [Power and Energy](Areas/Power%20and%20Energy.md) | 5EWA0 | [Electromechanics](5EWA0/Electromechanics%20-%205EWA0.md) |
| [Power and Energy](Areas/Power%20and%20Energy.md) | 5EWB0 | [Electric Power Systems](5EWB0/Electric%20Power%20Systems%20-%205EWB0.md) |

Each course has its own folder named after the course code. The main note is `Course Name - CODE.md`, images are in `attachments/`, and some courses have extra notes in a subfolder (resit notes, a friend's notes). Every course note starts with the same header: its area, the topics it covers and related courses.

## Areas and topics

The notes are linked into one map, which you can see in the graph view on the website or in Obsidian:

- **Areas** (`Areas/`) group the courses into seven fields, such as Signals and Systems or Electronics.
- **Topics** (`Topics/`) are concepts that come up in more than one course, such as the Fourier transform, transmission lines or op-amps. Each topic note has a short definition and links to the exact section of every course that covers it, so you can compare how different courses explain the same thing.
- **Courses** link to their area and topics, and each section that covers a topic links back to it.

When the same topic appears in several courses, it has one topic note instead of being repeated. The explanations stay in the courses, since each course looks at the topic from its own angle.

## Reading the notes

**On the website.** It has full-text search, a graph of links between notes, and backlinks. PDFs that notes link to open on GitHub.

**In Obsidian.** Clone the repository and open the folder as a vault:

```bash
git clone https://github.com/danieltyukov/tue-notes.git
```

Then in Obsidian choose *Open folder as vault* and select `tue-notes`. The vault comes with the Minimal theme and a few community plugins (LaTeX Suite, Omnisearch, Paste Image Rename, Auto Link Title, Better Word Count). Obsidian asks whether to trust them the first time; the notes read fine either way.

The repository is large (about 1.5 GB, mostly images and PDFs). If you only want the notes, a shallow clone skips the history:

```bash
git clone --depth 1 https://github.com/danieltyukov/tue-notes.git
```

## Contributing

Fixes and additions go through pull requests. Small fixes can be made straight from the website: every page has an *Edit this page on GitHub* link. For larger changes or a new course, read [CONTRIBUTING.md](CONTRIBUTING.md).

Found a mistake but don't want to fix it yourself? [Open an issue](https://github.com/danieltyukov/tue-notes/issues/new/choose).

## Using this repository for your own notes

You can fork the repository and publish your own notes with the same setup:

1. Fork the repository on GitHub.
2. In your fork, go to **Settings > Pages** and set **Source** to **GitHub Actions**.
3. Go to the **Actions** tab and enable workflows (GitHub turns them off on new forks).
4. Push a commit, or run the **Website** workflow by hand. Your site appears at `https://<your-username>.github.io/<repository-name>/`.
5. Change the site title in [`site/quartz.config.ts`](site/quartz.config.ts).

Add or remove course folders as you like. Links to GitHub, the site address and the "Edit this page" links all follow your fork automatically.

## Building the website locally

You need Node.js 22 or newer and git.

```bash
./site/build.sh --serve
```

This serves the site at http://localhost:8080. The first run downloads [Quartz](https://quartz.jzhao.xyz) and its dependencies into `site/.build/` (about 450 MB). Run the command again after editing notes to see the changes.

How it works: `site/build.sh` copies the notes and images into a staging folder, rewrites links to PDFs and other documents so they point to GitHub, and builds the site with Quartz 4. GitHub Actions ([`.github/workflows/site.yml`](.github/workflows/site.yml)) runs the same script and deploys the result to GitHub Pages on every push to `master`. Pull requests are built but not deployed.

## License

- **Notes** written for this repository are licensed under [CC BY-SA 4.0](LICENSE). You can share and adapt them, including commercially, as long as you give credit and share your changes under the same license.
- **Website code and scripts** (`site/`, `.github/`) are licensed under the [MIT License](LICENSE-CODE).
- **Not covered:** textbooks, lecture slides, course readers, official exercise and exam solutions, published papers, and notes written by other people (such as `5ESC0/friends-notes/`). These belong to their authors and are not licensed by this repository.

## Disclaimer

These are student notes and may contain mistakes. They are not affiliated with or endorsed by TU/e. Use them alongside the official course material, not instead of it.
