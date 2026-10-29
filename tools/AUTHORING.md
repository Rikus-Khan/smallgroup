# Writing a study

Every study is one HTML file in `studies/`. It holds the slides and the KJV verses, and nothing else.
How it looks comes from the shared files in `assets/`, so it works in every theme.

## Who it's for

- A daily small group of new, adult, male believers. Many have lives of trouble and addiction behind them.
- Rick shares the slides over Discord, and the men may also open them on their phones.
- Talk to them like grown men: plain, direct, warm, and respectful. Don't be childish, preachy, or churchy.
- Theology: non-reformed Southern Baptist. Salvation is offered to everyone and received by faith in Jesus. Believers are secure, and the Holy Spirit lives in every believer from salvation on. Avoid Calvinist framing, and avoid prosperity-gospel readings.
- Scripture is **always the King James Version, word for word**. That includes cross-references: download every verse you quote from bible-api.com and copy it exactly.
- Be accurate. If a fact is uncertain (a date, a custom), say "about," or leave it out.

## The shape of every study

1. **Title**: `slide title`, with a short title, a subtitle, and one sentence.
2. **Things to watch for**: `slide watch`, with 5 or 6 numbered questions, each under a topic label. These are seeds planted for later. Pick what a pastor would want the men to remember: who God is, salvation, God's promises and commands, and the struggles these men face.
3. **The reading**: split into 2–4 parts, each opening with a `slide part` divider.
   - **Every verse of the chapter** is read on screen, in order, on `slide verse` slides of 1–5 verses each. A verse appears on exactly one verse slide.
   - After the verses they explain, add **explanation slides** (`slide ex`). Explain old words, customs, places, and hard ideas, using the building blocks below or a new graphic. Aim for roughly one explanation per 2–4 verses where there's something worth explaining, and vary the kinds of graphics.
4. **Points to remember**: `slide remember`, one item per "Things to watch for" question, in the same order, each with a short quote and its reference.
5. **Questions**: one `slide qa` per "Things to watch for" question. The `h2` repeats that question **word for word**. 2–4 verses step in one at a time (`blockquote class="quote step"`), then the answer (`div class="answer step"`).
6. **Prayer requests**: `slide prayer`, asking "What can we pray about for you today?" with one KJV verse. The group meets **daily**, so never say "this week" or "tonight."

## File template (chapter study)

```html
<!doctype html>
<html lang="en" data-theme="scribe">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Proverbs 3</title>
<link rel="stylesheet" href="../assets/fonts.css">
<link rel="stylesheet" href="../assets/deck.css">
<link rel="stylesheet" href="../assets/themes.css">
</head>
<body>
<main class="deck" id="deck">
  ...slides...
</main>

<script>
// King James Version, Proverbs chapter 3
const V = {
  1: "My son, forget not my law; but let thine heart keep my commandments:",
  ...
};
const BOOK = "Proverbs 3";
</script>
<script src="../assets/deck.js"></script>
</body>
</html>
```

- `data-theme` is the study's own look: `night`, `stone`, `slate`, or `scribe`. Viewers can switch, so every slide has to work in all four.
- Keep `const V = {` … `\n};` and `const BOOK = "<Book> <chapter>";` exactly in this form, because the glossary reads them.
- **Topic study:** set `BOOK = "Proverbs"` and key V by chapter and verse: `"3:13": "Happy is the man..."`. References then read `data-v="3:13-18"` and `data-q="9:10"`.

## Slide markup

Copy patterns from `studies/john-01.html` and `studies/john-02.html`. These are the essentials:

```html
<section class="slide verse" data-v="5-7" data-hl="Trust in the LORD|lean not"></section>   <!-- filled in automatically -->
<blockquote class="quote rise" data-q="5" data-hl="with all thine heart"></blockquote>       <!-- a verse quote -->
<blockquote class="quote step"><p>“Exact KJV text.”</p><cite>John 20:31</cite></blockquote>  <!-- a cross-reference -->
```

- `data-hl` phrases must appear in the KJV text **exactly** (case and punctuation).
- `rise` animates in when the slide opens, with `style="--d:2"` for a stagger. `step` appears on the next click, in order.
- Text: `h2`, `p class="note"` (use `<em>` for emphasis), `span class="gk"` for a Hebrew or Greek word.

### Building blocks in `assets/deck.css`

| Block | Use it for | See |
|---|---|---|
| `.split` + `.stage svg` | a graphic beside the text | John 1 slides 8, 16 |
| `.pair .scroll` | two passages side by side | John 1 slide 5 |
| `.morph` | an original-language word, sound, and meaning | John 1 slide 6 |
| `.lamp` (`.shadow` + `.flame`) | light the darkness can't put out | John 1 slide 10 |
| `.nots` | wrong answers struck out, then the right one | John 1 slide 14 |
| `.columns .col.law / .col.grace` | two things compared | John 1 slide 20 |
| `.asks .ask` + `.stamp` | questions answered with a stamp | John 1 slide 24 |
| `.road` (`.hill`, `.crooked`, `.draw`, `.road-go`) | crooked made straight | John 1 slide 26 |
| `[data-flock="48" data-chosen="18"]` | many, then one chosen | John 1 slide 30 |
| `.tongues` (+ `.oil`) | one word in Hebrew, Greek, English | John 1 slide 39 |
| `.rename` (`.old`, `.new`) | a name or identity changed | John 1 slide 40 |
| `.chains .chain .who-chip .said` | who led whom, a sequence of people | John 1 slide 42 |
| `.week .day .jug i` | something running out over time | John 2 slide 5 |
| `.hours .hour(.come)` | a timeline of moments | John 2 slide 7 |
| `.saying` | one line set large | John 2 slide 8 |
| `svg[data-jars]` (`.jars-fill`, `.jars-full .jars-turn`) | containers filling or changing | John 2 slides 10, 12 |
| `.math` | numbers worked out | John 2 slide 10 |
| `.feasts .bars i` | two small bar charts compared | John 2 slide 13 |
| `.signs li(.now)` | a set or series, one highlighted | John 2 slide 16 |
| `.temples` | two big numbers compared | John 2 slide 24 |
| `.mirror` | one word, two directions | John 2 slide 28 |
| `svg.cycle` (`.cycle-ring`, `.cycle-stop`, `.cycle-spin`, `.cycle-way`, `.cycle-out` + `.cycle-go`) | a loop that keeps going round (addiction, relapse), and the way out. Set `--at` (center) and `--lap` on the svg | Proverbs 23 slides 29–30, Proverbs 26 slide 13 |
| `svg.scale` (`.scale-beam`, `.scale-pan.l / .r`) | things weighed against each other. On the svg: `--at` (pivot), `--arm`, `--tip`, `--from`, `--wait`. Tips with `.now` (on open) or a `.scale-go` step; `.rock` rocks and settles | Proverbs 8 slide 11 (pans), 16 slide 15 (settles level), 21 slide 6 (rocks), 29 slide 25 (seesaw) |
| `.sort > div` (`h3`, `.vs b`, `p`) | a chapter's sayings sorted into themes | Proverbs 17 slide 30 |
| `.match` (`.a`, `.b`, `.tag`, `.but`, `.w`, `.link`) | two parallel lines matched piece to piece. `--n` sets the number of pieces | Proverbs 10 slide 5 |
| `svg.lid` (`.lid-cover`, `.lid-cloud`, `.lid-pile`, `.lid-light` + `.lid-off`, `.lid-gone`) | something hidden, uncovered, then taken away (covered sin, confessed and forsaken) | Proverbs 28 slide 15 |
| `ol.abc li(.end)` (`b`, `span`, `i`, `--k`) | an acrostic: one letter of the alphabet per verse | Proverbs 31 slide 17 |

### Making a new graphic

You're encouraged to invent new ways to show an idea. A new graphic is another study's future building block, so:

- Put its CSS in a `<style>` in your study's `<head>`, after the stylesheet links. Prefix every class with the study id, like `.prv03-scale`.
- **No fixed colors anywhere**: no `#hex`, `rgb()`, or color names. Use the theme tokens: `--bg --surface --surface-2 --ink --ink-soft --line --line-strong --accent --accent-hot --on-accent --cool --warm --danger --wine --glow --on-glow --leather --leather-light`. You may use `color-mix(in srgb, var(--accent) 20%, transparent)` for tints.
- In SVG, color with `style="fill:var(--accent)"` or with classes, never `fill="#..."`. Text on `--accent` uses `--on-accent`. Text on a glow uses `--on-glow`.
- Give SVG gradient and clip ids a study prefix (`prv03-glow`), so they're unique.
- Check it in all four themes.
- List it in your report so it can be moved into `deck.css` for everyone.

## Proverbs notes

- Proverbs are wise sayings about how life generally works. They are not promises or guarantees. Say so where it matters (for example, 22:6).
- Point to Christ where the text honestly allows it: Christ is "the wisdom of God" (1 Corinthians 1:24, 30), and the fear of the LORD is where wisdom starts (1:7, 9:10).
- Wine and strong drink (20:1, 23:29–35, 31:4–7) need care for men in recovery. Be honest and compassionate, and point to the Lord, not willpower alone. 31:6–7 especially needs a careful explanation.
- The "strange woman," the sluggard, the angry man, the fool, and the companion of fools are real struggles for these men. Name them plainly and offer hope, not shame.

## Checking your work

1. Download the KJV for the chapter into **your own working folder**:
   `curl -s "https://bible-api.com/proverbs+3?translation=kjv" -o "<your folder>/proverbs-03.json"`
2. Copy every verse into `V` exactly as given (straight from the JSON, whitespace tidied).
3. Run the checker until it says OK:
   `node tools/check-study.mjs studies/proverbs-03.html "<your folder>/proverbs-03.json"`
4. Look at it. Copy the study into your folder, change `../assets/` to `file:///C:/Projects/SmallGroup/assets/`, and screenshot it with headless Edge using **your own** `--user-data-dir` inside your folder. Check several explanation slides in at least two themes (`?theme=night`, `?theme=scribe`, and so on). Check one phone frame by putting a 390px-wide iframe inside a wider page, because headless Edge won't make a window narrower than about 490px.
