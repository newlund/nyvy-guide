// Local preview without Jekyll: renders the Markdown pages into _preview/ with the site layout.
// Handles only what this site uses (front matter, {#id} headings, the layout's lang branches).
import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

const ROOT = dirname(new URL(import.meta.url).pathname);
const OUT = join(ROOT, '_preview');
const PAGES = ['index.md', 'sv/index.md', 'sv/manual.md', 'sv/stod.md', 'sv/integritet.md', 'en/index.md', 'en/manual.md', 'en/support.md', 'en/privacy.md'];
const layout = readFileSync(join(ROOT, '_layouts/default.html'), 'utf8');

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync(join(ROOT, 'assets'), join(OUT, 'assets'), { recursive: true });

for (const page of PAGES) {
  const src = readFileSync(join(ROOT, page), 'utf8');
  const [, fm, body] = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(src);
  const meta = Object.fromEntries(fm.split('\n').map((l) => l.split(/:\s*/, 2)));
  const md = body.replace(/^(#{1,6} .*?) \{#([\w-]+)\}$/gm, '$1 <a id="$2"></a>');
  const html = execFileSync('npx', ['-y', 'marked@15.0.12', '--gfm'], { input: md, encoding: 'utf8' });
  const outFile = join(OUT, page.replace(/\.md$/, '.html'));
  const toRoot = relative(dirname(outFile), OUT) || '.';
  const url = (p) => (p === '/' ? `${toRoot}/index.html` : `${toRoot}${p.endsWith('/') ? `${p}index.html` : p}`);
  let doc = layout
    // the layout's {% if page.lang == 'en' %} … {% elsif page.lang == 'sv' %} … {% endif %} branches
    .replace(/\{% if page\.lang == 'en' %\}([\s\S]*?)\{% elsif page\.lang == 'sv' %\}([\s\S]*?)\{% endif %\}/g, (_, en, sv) => (meta.lang === 'en' ? en : meta.lang === 'sv' ? sv : ''))
    .replace(/\{% if page\.lang == 'en' %\}([\s\S]*?)\{% else %\}([\s\S]*?)\{% endif %\}/g, (_, en, sv) => (meta.lang === 'en' ? en : sv))
    .replace(/\{% if page\.alt %\}([\s\S]*?)\{% endif %\}/g, (_, x) => (meta.alt ? x : ''))
    .replace(/\{% if page\.title %\}\{\{ page\.title \}\} · \{% endif %\}/, meta.title && meta.title !== 'Nyvo' ? `${meta.title} · ` : '')
    .replace(/\{\{ page\.lang \| default: 'sv' \}\}/, meta.lang ?? 'sv')
    .replace(/\{\{ '\/' \| append: page\.lang \| append: '\/' \| relative_url \}\}/, url(`/${meta.lang ?? ''}/`.replace('//', '/')))
    .replace(/\{\{ page\.alt \| relative_url \}\}/g, meta.alt ? url(meta.alt) : '')
    .replace(/\{\{ '([^']+)' \| relative_url \}\}/g, (_, p) => url(p))
    .replace(/\{\{ site\.description \}\}/, 'Nyvo')
    .replace('{{ content }}', html.replace(/href="(sv|en)\/"/g, 'href="$1/index.html"'));
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, doc);
  console.log('rendered', relative(ROOT, outFile));
}
