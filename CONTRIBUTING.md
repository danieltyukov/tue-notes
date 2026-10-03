# Contributing

Thanks for helping improve these notes. Anyone can contribute: fix a mistake, explain something better, add a worked example, or add notes for a course that is missing.

All changes go through pull requests, and every pull request builds the website so you can be sure nothing breaks.

## Fixing a mistake or improving a note

For a small change you don't need to install anything:

1. Open the page on the [website](https://danieltyukov.github.io/tue-notes/) and click **Edit this page on GitHub** at the bottom. You can also find the note in the repository and click the pencil icon.
2. Make your change. GitHub creates a fork for you.
3. Describe what you changed and open a pull request.

If you only want to report a problem, [open an issue](https://github.com/danieltyukov/tue-notes/issues/new/choose) instead.

## Larger changes

For anything bigger than a few lines, work locally in Obsidian:

```bash
git clone --depth 1 https://github.com/<your-username>/tue-notes.git
```

Open the folder in Obsidian (*Open folder as vault*), make your changes, commit them on a branch and open a pull request. The vault is already set up to save pasted images in an `attachments/` folder next to the note.

## Adding a course

1. Create a folder named after the course code, for example `5ESD0/`.
2. Create the main note as `Course Name - CODE.md`, for example `5ESD0/Control systems - 5ESD0.md`. In Obsidian you can start from the course template: run *Templates: Insert template* from the command palette and pick `Course Name - CODE`. The template is in [`templates/`](templates/).
3. Put images in `CODE/attachments/`. Use descriptive file names (`bode plot lead compensator.png`, not `Pasted image 20250101.png`) where you can.
4. Add a row for the course to the table in [README.md](README.md). The README is also the home page of the website.
5. Open a pull request.

Extra notes for the same course (resit notes, topic notes) can go in a subfolder, like `5ECC0/ec2-resit/`.

## Writing notes

- Write in Markdown with Obsidian syntax. Wikilinks (`[[Systems - 5ESB0]]`), image embeds (`![[diagram.png|400]]`), callouts (`> [!NOTE]`) and LaTeX math (`$...$`, `$$...$$`) all work in Obsidian and on the website.
- Link to related notes in other courses when it helps, for example from control systems to signals.
- Keep the course code in file names so notes with similar titles don't clash.
- PDFs and other documents are not shown on the website. Links to them open the file on GitHub instead.

## What not to add

Only add material you have the right to share:

- **Do** add your own notes, summaries, formula sheets, diagrams and solutions you worked out yourself.
- **Don't** add textbooks, lecture slides, course readers, official solutions or exams, or other people's notes without their permission. Link to the official source instead (the course page, Canvas, or the publisher).
- **Don't** add anything with personal data, such as student numbers, grades or other students' work.

## Previewing the website

You need Node.js 22 or newer.

```bash
./site/build.sh --serve
```

The site is served at http://localhost:8080. Run the command again after editing to see your changes. The build output lists any links to files that are not in the repository, which is a good way to spot broken image links.

## Licensing of contributions

By contributing you agree that your notes are licensed under [CC BY-SA 4.0](LICENSE) and code under the [MIT License](LICENSE-CODE), the same as the rest of the repository.
