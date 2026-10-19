// Checks a study before it's published.
//   node tools/check-study.mjs studies/proverbs-03.html <kjv.json> [more kjv.json ...]
// Each kjv.json is a download from https://bible-api.com/<book>+<chapter>?translation=kjv
// (a topic study passes one file per chapter it quotes). Exits 1 if anything must be fixed.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const [file, ...kjvFiles] = process.argv.slice(2);
if (!file || !kjvFiles.length) {
  console.error("usage: node tools/check-study.mjs <study.html> <kjv.json> [more kjv.json ...]");
  process.exit(2);
}
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const html = fs.readFileSync(file, "utf8");
const errors = [], warnings = [];
const err = m => errors.push(m), warn = m => warnings.push(m);
const norm = s => String(s).replace(/\s+/g, " ").trim();
const plain = s => norm(s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/[“”"]/g, '"').replace(/[‘’']/g, "'"));

// ---------- Scripture ----------
const bookM = html.match(/const BOOK = "([^"]+)";/);
const vM = html.match(/const V = (\{[\s\S]*?\n\});/);
if (!bookM || !vM) { console.error("Missing `const BOOK = \"...\";` or `const V = {...\\n};`"); process.exit(1); }
const BOOK = bookM[1];
const V = new Function(`return ${vM[1]}`)();
const topic = Object.keys(V).some(k => k.includes(":"));
const kjv = {};
for (const f of kjvFiles) {
  for (const v of JSON.parse(fs.readFileSync(f, "utf8")).verses) {
    kjv[topic ? `${v.chapter}:${v.verse}` : String(v.verse)] = norm(v.text);
    kjv.__book = v.book_name;
  }
}
const bookName = topic ? BOOK : BOOK.replace(/\s+\d+$/, "");
if (kjv.__book && kjv.__book !== bookName) err(`KJV file is ${kjv.__book}, but BOOK says ${bookName}`);
for (const [k, text] of Object.entries(V)) {
  if (!(k in kjv)) err(`V[${k}] isn't in the KJV file(s) given`);
  else if (norm(text) !== kjv[k]) err(`V[${k}] doesn't match the KJV word for word:\n    study: ${norm(text)}\n    KJV:   ${kjv[k]}`);
}
if (!topic) {
  for (const k of Object.keys(kjv)) if (k !== "__book" && !(k in V)) err(`Verse ${k} of ${BOOK} is missing from V (every verse must be included)`);
}

// ---------- References ----------
function range(spec) {
  const m = String(spec).match(/^(?:(\d+):)?(\d+)(?:-(\d+))?$/);
  if (!m) { err(`Bad reference "${spec}"`); return []; }
  const out = [];
  for (let n = Number(m[2]); n <= Number(m[3] || m[2]); n++) out.push(m[1] ? `${m[1]}:${n}` : String(n));
  return out;
}
const markup = html.replace(/<script[\s\S]*?<\/script>/g, "");
const covered = new Map();
for (const [, attrs] of markup.matchAll(/<section class="slide verse"([^>]*)>/g)) {
  const v = attrs.match(/data-v="([^"]+)"/)?.[1];
  if (!v) { err("A verse slide has no data-v"); continue; }
  const keys = range(v);
  for (const k of keys) {
    if (!(k in V)) err(`Verse slide data-v="${v}" uses ${k}, which isn't in V`);
    covered.set(k, (covered.get(k) || 0) + 1);
  }
  const hl = attrs.match(/data-hl="([^"]+)"/)?.[1];
  const text = keys.map(k => V[k] || "").join(" ");
  if (hl) for (const p of hl.split("|")) if (!text.includes(p)) err(`Highlight "${p}" isn't in verses ${v} (it must match the KJV text exactly)`);
}
for (const k of Object.keys(V)) {
  if (!covered.has(k)) err(`Verse ${k} never appears on a verse slide (every verse must be read on screen)`);
  else if (covered.get(k) > 1) warn(`Verse ${k} appears on ${covered.get(k)} verse slides`);
}
for (const [, attrs] of markup.matchAll(/<blockquote([^>]*data-q="[^"]*"[^>]*)>/g)) {
  const q = attrs.match(/data-q="([^"]+)"/)[1];
  const keys = range(q);
  for (const k of keys) if (!(k in V)) err(`Quote data-q="${q}" uses ${k}, which isn't in V`);
  const hl = attrs.match(/data-hl="([^"]+)"/)?.[1];
  const text = keys.map(k => V[k] || "").join(" ");
  if (hl) for (const p of hl.split("|")) if (!text.includes(p)) err(`Quote ${q}: highlight "${p}" isn't in the verse text`);
}

// ---------- Structure ----------
const slides = [...markup.matchAll(/<section class="slide([^"]*)"/g)].map(m => m[1].trim().split(/\s+/));
if (!slides.length) err("No slides found");
else {
  if (!slides[0].includes("title")) err("The first slide must be the title slide (class=\"slide title\")");
  if (!slides[slides.length - 1].includes("prayer")) err("The last slide must be the prayer requests slide (class=\"slide prayer\")");
}
const section = cls => markup.match(new RegExp(`<section class="slide ${cls}"[\\s\\S]*?</section>`))?.[0] || "";
const watchQs = [...section("watch").matchAll(/<span class="seed-q">([\s\S]*?)<\/span>/g)].map(m => plain(m[1]));
const qaQs = [...markup.matchAll(/<section class="slide qa">[\s\S]*?<h2>([\s\S]*?)<\/h2>/g)].map(m => plain(m[1]));
const remembered = [...section("remember").matchAll(/<li class="step">/g)].length;
if (watchQs.length < 3) err(`"Things to watch for" needs at least 3 questions (found ${watchQs.length})`);
if (remembered !== watchQs.length) err(`"Points to remember" has ${remembered} items; "Things to watch for" has ${watchQs.length}. They must match one to one.`);
if (qaQs.length !== watchQs.length) err(`There are ${qaQs.length} question slides for ${watchQs.length} "Things to watch for" questions`);
watchQs.forEach((q, k) => { if (qaQs[k] !== undefined && qaQs[k] !== q) err(`Question ${k + 1} must repeat "Things to watch for" word for word:\n    watch:    ${q}\n    question: ${qaQs[k]}`); });
for (const qa of markup.matchAll(/<section class="slide qa">([\s\S]*?)<\/section>/g)) {
  const body = qa[1];
  if (!/class="reveal"/.test(body)) err("A question slide is missing its reveal button");
  if (!/class="answer step"/.test(body)) err("A question slide is missing its answer (class=\"answer step\")");
  if ((body.match(/<blockquote class="quote step"/g) || []).length < 2) err("A question slide needs at least 2 verses that step in");
}
if (!/today/.test(section("prayer"))) err('The prayer slide must ask about "today" (the group meets daily)');
for (const bad of ["this week", "tonight", "Key verses"]) if (markup.toLowerCase().includes(bad.toLowerCase())) err(`Remove "${bad}" (the group meets daily, and there is no key-verses version)`);

// ---------- Look ----------
const colorRe = /#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(/;
markup.split("\n").forEach((line, n) => {
  if (colorRe.test(line.replace(/href="[^"]*"/g, "").replace(/url\(#[^)]*\)/g, "")))
    err(`Line ${n + 1}: hard-coded color. Use theme tokens like var(--accent), var(--ink), var(--surface-2):\n    ${line.trim().slice(0, 140)}`);
});
const themeIds = [...fs.readFileSync(path.join(root, "assets/deck.js"), "utf8").matchAll(/\{ id: "([a-z]+)", name:/g)].map(m => m[1]);
const theme = html.match(/<html[^>]*data-theme="([^"]+)"/)?.[1];
if (!themeIds.includes(theme)) err(`<html data-theme="${theme}"> must be one of: ${themeIds.join(", ")}`);
for (const need of ['href="../assets/fonts.css"', 'href="../assets/deck.css"', 'href="../assets/themes.css"', 'src="../assets/deck.js"'])
  if (!html.includes(need)) err(`Missing ${need}`);
const ids = [...markup.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
for (const id of new Set(ids)) if (ids.filter(x => x === id).length > 1) err(`id="${id}" is used more than once`);
for (const tag of ["section", "div", "svg", "blockquote", "ol", "ul"]) {
  const open = (markup.match(new RegExp(`<${tag}[\\s>]`, "g")) || []).length, close = (markup.match(new RegExp(`</${tag}>`, "g")) || []).length;
  if (open !== close) err(`<${tag}> opened ${open} times but closed ${close} times`);
}

// ---------- Report ----------
const verseSlides = slides.filter(s => s.includes("verse")).length;
console.log(`${path.basename(file)}: ${BOOK}, ${Object.keys(V).length} verses, ${slides.length} slides (${verseSlides} reading), ${watchQs.length} questions, theme ${theme}`);
for (const w of warnings) console.log("  warning: " + w);
for (const e of errors) console.log("  ERROR: " + e);
console.log(errors.length ? `${errors.length} problem(s) to fix.` : "OK");
process.exit(errors.length ? 1 : 0);
