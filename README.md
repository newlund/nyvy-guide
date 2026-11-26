# nyvy-guide

User manual, support page and privacy policy for **Nyvy**, an IPTV player for LG webOS TVs.
Published with GitHub Pages at <https://newlund.github.io/nyvy-guide/> in the app's 13 languages (da, de, en, es, fi, fr, it, nb, nl, pl, pt, sv, tr).

- `<language>/`: the pages, in Markdown: `index`, `manual`, `support`, `privacy` (Swedish: `stod`, `integritet`). Manual headings use the same anchors in every language (`{#getting-started}` …).
- `assets/screens/<language>/`: screenshots for the manuals (8 per language, 1280×720 JPEG), taken on the TV with demo data — no provider content, addresses or accounts. Remake them with `node scripts/guide-screenshots.mjs` in the app repo (TV on, Nyvy installed), then `node scripts/guide-screenshots-insert.mjs` to place them in the manuals.
- `_data/i18n.yml`: each language's name, menu labels, page names and footer; the start page lists the languages from it.
- `_layouts/default.html` and `assets/style.css`: the shared look. `assets/logo.svg` (header) and `assets/icon.png` (browser tab) are copies of the brand files in the app repo (`assets/nyvy-lockup-horizontal.svg`, `assets/nyvy-app-icon-400.png`).
- Support: Buy Me a Coffee (<https://buymeacoffee.com/nyvy>).
- The app's standard test (package suite) checks that every language has its pages and that the manuals use the app's own button and menu names.

The Nyvy app links here from *Settings → About* with a QR code.
