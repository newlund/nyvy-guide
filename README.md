# nyvy-guide

User manual, support page and privacy policy for **Nyvy**, an IPTV player for LG webOS TVs.
Published with GitHub Pages at <https://newlund.github.io/nyvy-guide/> in the app's 13 languages (da, de, en, es, fi, fr, it, nb, nl, pl, pt, sv, tr).

- `<language>/`: the pages, in Markdown: `index`, `install`, `manual`, `support`, `privacy` (Swedish: `installera`, `stod`, `integritet`). Manual headings use the same anchors in every language (`{#getting-started}` …).
- `assets/screens/<language>/`: screenshots for the manuals (8 per language, 1280×720 JPEG), taken on the TV with demo data — no provider content, addresses or accounts. Remake them with `node scripts/guide-screenshots.mjs` in the app repo (TV on, Nyvy installed), then `node scripts/guide-screenshots-insert.mjs` to place them in the manuals.
- `_data/i18n.yml`: each language's name, menu labels, page names and footer; the start page lists the languages from it.
- Languages other than Swedish and English are machine-translated: their `machine_note` and `read_english` labels show a note on every page with a link to the English page. Remove a language's two labels once a native speaker has reviewed it.
- `_layouts/default.html` and `assets/style.css`: the shared look. `assets/logo.svg` (header) and `assets/icon.png` (browser tab) are copies of the brand files in the app repo (`assets/nyvy-lockup-horizontal.svg`, `assets/nyvy-app-icon-400.png`).
- Support: Buy Me a Coffee (<https://buymeacoffee.com/nyvy>).
- The app's standard test (package suite) checks that every language has its pages and that the manuals use the app's own button and menu names.

The Nyvy app links here from *Settings → About* with a QR code.

**Downloads:** the Nyvy app repo is private, so each release's `.ipk` is also published as a GitHub release here (`v<version>`, same file and notes). The install pages link to `releases/download/v{{ site.app_version }}/com.nyvy.tv_{{ site.app_version }}_all.ipk`, so the release must exist before `app_version` is raised.

Until the app is out, every page shows a "not released yet" banner (text per language: `notice` in `_data/i18n.yml`). Set `prerelease: false` in `_config.yml` at launch to remove it everywhere.
