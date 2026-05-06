# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based academic personal homepage (forked from the "AcadHomepage" template), deployed via GitHub Pages at `dajiaohuang.github.io`. The site is for Wu Shuwen, a Master's student at NUS.

## Commands

```bash
# Start local dev server with live reload
bash run_server.sh
# Equivalent to:
bundle exec jekyll liveserve

# Install dependencies (if Gemfile.lock is missing or stale)
bundle install
```

The site is served at `http://127.0.0.1:4000`. Jekyll's `liveserve` auto-rebuilds on source changes.

## Architecture

**Build system**: Uses the `github-pages` gem (not standalone Jekyll), which locks the Jekyll version and included plugins to match GitHub Pages' production environment. The Gemfile also pulls in `hawkins` for live reload via `liveserve`.

**Page structure** (single-page site):
- `_layouts/default.html` — the only layout; assembles head, masthead, sidebar, content, and scripts
- `_pages/about.md` — the sole content page, mapped to `/` via `permalink: /`. All sections (About Me, News, Publications, etc.) live in this one Markdown file. Uses raw HTML mixed with Markdown.
- `_data/navigation.yml` — top nav links pointing to anchor fragments on the single page

**Key includes**:
- `_includes/author-profile.html` — sidebar with avatar, bio, and social/contact links configured in `_config.yml` under `author`
- `_includes/fetch_google_scholar_stats.html` — fetches `gs_data.json` from the `google-scholar-stats` branch via jsDelivr CDN (or raw GitHub if `google_scholar_stats_use_cdn: false`), renders total citations and per-paper citation counts for elements with class `show_paper_citations`
- `_includes/head.html`, `_includes/head/custom.html`, `_includes/seo.html` — meta tags, SEO, CSS
- `_includes/masthead.html` — top navigation bar
- `_includes/sidebar.html` — conditionally renders author profile

**Styling**: SCSS in `_sass/`, sourced from the Minimal Mistakes Jekyll theme. Entry point is `assets/css/main.scss`. Custom styles (`.paper-box`, `.badge`, anchor offset) are appended at the bottom of `assets/css/main.scss`.

**JavaScript**: jQuery-based. Entry point `assets/js/_main.js` initializes plugins (FitVids, Stickyfill, SmoothScroll, Magnific Popup). `assets/js/collapse.js` handles collapsible sections.

**Google Scholar integration**: A GitHub Actions workflow (`.github/workflows/google_scholar_crawler.yaml`) runs daily at 08:00 UTC and on each page build. It executes `google_scholar_crawler/main.py`, which crawls Google Scholar for the ID set in the `GOOGLE_SCHOLAR_ID` repository secret, then force-pushes the resulting JSON to the `google-scholar-stats` branch. The frontend loads this data client-side.

## Configuration

All site configuration is in `_config.yml`:
- `title`, `description`, `repository` — basic site identity
- `author` hash — name, avatar path (relative to repo root), bio, location, googlescholar URL, email, and optional social links
- `google_scholar_stats_use_cdn` — whether to fetch citation data via jsDelivr CDN or raw GitHub URLs
- `google_analytics_id` — optional GA tracking ID
- SEO verification keys (`google_site_verification`, `bing_site_verification`, `baidu_site_verification`)

## Content Editing

The main page is `_pages/about.md`. It supports:
- Standard Markdown and inline HTML
- `<span class='anchor' id='some-id'></span>` for navigation anchor points
- `<div class="paper-box">` with nested `paper-box-image`/`paper-box-text` for publication entries
- `<span class='show_paper_citations' data='PAPER_ID'></span>` to display per-paper Google Scholar citation counts (the `data` attribute holds the Google Scholar paper ID)

Images go in `images/`. The avatar is `images/avatar.png` (referenced as `image/avatar.png` in `_config.yml`).
