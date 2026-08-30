# Wu Shuwen — personal site

[Live site](https://dajiaohuang.github.io/) · [GitHub profile](https://github.com/dajiaohuang)

A hand-built, zero-dependency, Chinese-first bilingual portfolio for Wu Shuwen. The site presents five connected bodies of work—SagaSmith, RepoStew, Archive & Apply, Evo Atlas, and Solar Atlas—alongside verified external open-source contributions, research, and experience.

## Design direction

- **Subject:** a software engineer working across agent systems, scientific interfaces, and open-source stewardship
- **Audience:** engineering teams, research collaborators, and open-source maintainers
- **Single job:** make the current role, five projects, verified contributions, research, and contact paths understandable in under a minute
- **Signature:** a compact technical index with one restrained animated contribution record

The palette uses cool fog, graphite, cobalt, and teal. Display typography is deliberately editorial; utility labels use a system monospace stack. No font, analytics, or JavaScript dependency is loaded from a third party. The only remote runtime asset is the first-party contribution SVG generated in the GitHub profile repository.

## Local preview

```bash
python -m http.server 4187
```

Open `http://127.0.0.1:4187/`.

## Structure

```text
index.html          content, semantics, metadata, and JSON-LD
styles.css          visual system, responsive layout, print, reduced motion
app.js              language, theme, and active navigation state
404.html            recovery page
assets/favicon.svg  first-party vector mark
tests/site-smoke.cjs optional Playwright smoke and responsive checks
```

GitHub Pages publishes the repository root from `main`. `.nojekyll` keeps delivery static and deterministic.

## License

MIT
