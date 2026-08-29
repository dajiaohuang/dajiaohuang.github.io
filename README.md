# Wu Shuwen — personal site

[Live site](https://dajiaohuang.github.io/) · [GitHub profile](https://github.com/dajiaohuang)

A hand-built, zero-dependency portfolio for Wu Shuwen. The site presents five connected bodies of work—SagaSmith, RepoStew, Archive & Apply, Evo Atlas, and Solar Atlas—alongside research and experience.

## Design direction

- **Subject:** a software engineer working across agent systems, scientific interfaces, and open-source stewardship
- **Audience:** engineering teams, research collaborators, and open-source maintainers
- **Single job:** make the work, the operating principles behind it, and the best next links understandable in under a minute
- **Signature:** an interactive system map connecting the five projects to a single evidence-and-authority thesis

The palette uses cool fog, graphite, cobalt, teal, solar orange, and research violet. Display typography is deliberately editorial; utility labels use a system monospace stack. No font, analytics, image, or JavaScript dependency is loaded from a third party. The only remote runtime asset is the public GitHub avatar.

## Local preview

```bash
python -m http.server 4187
```

Open `http://127.0.0.1:4187/`.

## Structure

```text
index.html          content, semantics, metadata, and JSON-LD
styles.css          visual system, responsive layout, print, reduced motion
app.js              theme, map readout, reveal, and navigation state
404.html            recovery page
assets/favicon.svg  first-party vector mark
tests/site-smoke.cjs optional Playwright smoke and responsive checks
```

GitHub Pages publishes the repository root from `main`. `.nojekyll` keeps delivery static and deterministic.

## License

MIT
