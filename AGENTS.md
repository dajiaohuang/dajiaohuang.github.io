# Personal site maintenance

This repository is the static personal site for Wu Shuwen, published at `https://dajiaohuang.github.io/` from the root of `main`.

## Architecture

- `index.html` is the only content source and owns metadata, JSON-LD, navigation, projects, research, experience, and contact links.
- `styles.css` owns all visual tokens and responsive behavior.
- `app.js` progressively enhances Chinese/English selection, theme selection, and active navigation.
- `404.html` is a standalone recovery page that reuses the main stylesheet.
- `.nojekyll` is required. Do not reintroduce Jekyll, a package manager, a build system, or a deployment workflow without explicit approval.

## Content rules

- Keep public claims traceable to the linked repository, paper, organization profile, or the user’s current public biography.
- Keep Chinese as the default language and maintain equivalent English copy through the `data-i18n` dictionary. The no-JavaScript experience must remain complete in Chinese.
- List external open-source contributions only after verifying merged PRs and excluding repositories owned by `dajiaohuang` or `SagaSmithAI`; date any static counts.
- Preserve contribution boundaries such as “co-authored,” “built,” or “maintained.”
- Do not publish private employer details, credentials, analytics, or contact data beyond the email already present on the site.
- Keep SagaSmith maturity wording aligned with the current organization profile; do not turn alpha or experimental status into a production claim.
- Keep Evo and Solar scientific limits visible; do not present either as certified navigation, exhaustive fossil coverage, or ground truth.

## Visual rules

- Keep the site compact enough to scan as a one-page technical index. Long project narratives belong on the linked project sites and repositories.
- The contribution activity is the only ambient animation. Keep all other motion restrained and functional.
- Derive color changes from the custom properties at the top of `styles.css`.
- Maintain keyboard focus, semantic headings, reduced motion, dark mode, and mobile layouts down to 320 px.
- Avoid remote fonts, icon libraries, frontend frameworks, and decorative assets that do not carry information.

## Validation

Serve the repository over HTTP rather than opening `file://` so root-relative paths match GitHub Pages.

```bash
python -m http.server 4187
```

Verify at minimum:

- no console or page errors;
- every internal asset returns 200;
- navigation, project links, language and theme toggles, and 404 recovery work;
- the page-height compactness thresholds in `tests/site-smoke.cjs` remain satisfied;
- no horizontal overflow at 1440, 768, 390, and 320 px;
- all links have visible keyboard focus;
- the page remains readable with JavaScript disabled and reduced motion enabled;
- HTML metadata, JSON-LD, `robots.txt`, sitemap, and manifest use the production origin.
