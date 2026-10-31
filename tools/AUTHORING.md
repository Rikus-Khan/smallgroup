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
- Write every study for one man: a new Christian who may have fallen yesterday, who carries regret, and who has to go to work today. Every chapter should leave him with:
  - **Sin**: named honestly, without shaming him.
  - **Regret**: what to do with it.
  - **Grace**: what God has already done about it.
  - **Hope**: why today is not the end of his story.
  - **The real world**: one concrete thing to do with this chapter today.

  Not every slide carries all five, but the study as a whole must. Find them in the chapter itself; don't bolt them on.

## The shape of every study

1. **Title**: `slide title`, with a short title, a subtitle, and one sentence.
2. **Things to watch for**: `slide watch`, with 5 or 6 numbered questions, each under a topic label. These are seeds planted for later. Pick what a pastor would want the men to remember: who God is, salvation, God's promises and commands, and the struggles these men face.
   - **The first chapter of every book** also gets a **setting** at the start, just before or after "Things to watch for": a `slide ex` with a map of where the book happens (`svg.map` or `svg.map[data-land]`) beside who wrote it, when, and to whom, then a `slide ex` with an `ol.timeline` that places the book among the events around it. Hosea 1 and Haggai 1 show the pattern. For a **letter**, the first setting slide is a `div.letter` beside an `svg.map[data-world]` (where it was written, where it was sent), and its timeline places the letter in Paul's life or the church's story, using the New Testament dates below. Later chapters add their own map or timeline whenever the place or time moves.
3. **The reading**: split into 2–4 parts, each opening with a `slide part` divider.
   - **Every verse of the chapter** is read on screen, in order, on `slide verse` slides of 1–5 verses each. A verse appears on exactly one verse slide.
   - **Every archaic word gets a plain definition on a slide** (Rick's rule): bishoprick, wist, wot, letteth, prevent, conversation, charity, quick, and the like. The glossary only links verses; it does not define, so the definition must be in the study itself. Several old words can share one slide (`.rename`, `.morph` or a word list).
   - After the verses they explain, add **explanation slides** (`slide ex`). Explain old words, customs, places, and hard ideas, using the building blocks below or a new graphic. Aim for roughly one explanation per 2–4 verses where there's something worth explaining, and vary the kinds of graphics.
4. **Points to remember**: `slide remember`, one item per "Things to watch for" question, in the same order, each with a short quote and its reference.
5. **Questions**: one `slide qa` per "Things to watch for" question. The `h2` repeats that question **word for word**. 2–4 verses step in one at a time (`blockquote class="quote step"`), then the answer (`div class="answer step"`).
6. **Prayer requests**: `slide prayer`, asking "What can we pray about for you today?" with one KJV verse. The group meets **daily**, so never say "this week" or "tonight."

### Exceptions to the shape

- **Short psalms (8 verses or fewer)** are just shorter studies. Skip "Things to watch for", "Points to remember" and the question slides. After the title come the verses with their explanation slides. Then add one or two slides on how the psalm speaks to these men: sin, regret, grace, hope and the real world. Close with the prayer slide.
- **Genealogy and census chapters** (Genesis 5, 10 and 36; Numbers 1–4 and 26; 1 Chronicles 1–9; Ezra 2; Nehemiah 7, and the like) still read every verse, but keep the study short. Build it around a family-tree or tally graphic. Bring out the one or two bright spots in it, such as Enoch who "walked with God" or Jabez's prayer, and why a list of names matters: God knows every man by name.
- **Song of Solomon**: do the full study. Rick reads it as his pastor taught him, as wisdom for women, the way Proverbs is wisdom for a son. Teach it that way, through the bride's own counsel to the daughters of Jerusalem: "that ye stir not up, nor awake my love, till he please." Keep it modest: explain the images plainly and never dwell on them. Rick may hold this book back until the men are further along.

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
| `.daybreak > div` ×3 (`i`, `b`, `p`, `p.kjv`; `.climb`) | three stages from dark to light: night, dawn, day (Nicodemus coming out of the dark). `.climb` raises them like steps | John 3 slide 5, John 7 slide 34, John 19 slide 33 (climb) |
| `svg.map` (`.map-land`, `.map-sea`, `.map-lake`, `.map-river`, `.map-border`, `.map-region`, `.map-water`, `.map-soft`, `.map-town(.here)`, `.map-ping`, `.map-way`, `.map-route`) | any hand-drawn map. A `.map-route` (with `pathLength="1"`) draws itself when the slide opens; `.map-route.r1`–`.r4` wait for a `.map-go1`–`.map-go4` step | John 6 slide 5 (on a step), John 10 slide 36 (on open), John 18 slide 5 (three legs) |
| `svg.map[data-land]` + `data-towns="Jerusalem, Sychar*, Bethlehem!:b"` | the whole land (Galilee, Samaria, Judaea, Perea, the lake, the Jordan, the Dead Sea), drawn by deck.js in a 400 × 560 box. Towns come from the list in deck.js: `*` lights one, `!` adds a pulse, `:l :r :t :b` places its name. Draw your routes inside the svg using those town positions. Give the svg its own `viewBox` to show part of the land, larger | John 4 slide 5 (whole land, a route on a step), John 7 slide 33 (cropped) |
| `svg.map[data-world]` + `data-towns="Rome!, Corinth*, Ephesus:l"` | the Roman world of Acts and the letters (Italy to the Euphrates, the Black Sea to Egypt), with a real coastline, drawn by deck.js in a 908 × 576 box. Places come from PLACES in deck.js (Rome, Corinth, Ephesus, Philippi, Troas, the seven churches, Patmos, Melita, Antioch, Tarsus, Jerusalem, and more). A `<path class="map-route" data-journey="1">` draws Paul's first journey (also `"2"`, `"3"`, `"rome"`); add class `j1`–`j4` to color several on one map. `data-via="Troas, Neapolis, Philippi"` draws your own route; put `@lon lat` waypoints in it to keep a sea route off the land. Crop with your own `viewBox` (`"425 170 210 170"` the Aegean, `"540 225 140 105"` the seven churches): text and dots stay the same size on screen | new for the New Testament letters; no study uses it yet |
| `div.letter` (`p.from`, then `dl` of `dt`/`dd`) | the opening of a letter: a sealed page with who wrote it ("Paul … to the saints which are at Ephesus", KJV from the letter's first verses), then Written from / When / To whom / Why, appearing in turn (`dd class="step"` holds one for a click). Put it in a `.split` beside an `svg.map[data-world]` on the first chapter's setting slide | new for the letters |
| `svg.wells` (`.wells-pit`, `.wells-water.wells-drain`, `.wells-crack`, `.wells-drip`, `.wells-rock`, `.wells-spring`, `.wells-bubble`) | a broken cistern that leaks dry beside a spring that never stops (Jeremiah 2:13). Clip the drain to the pit with a study-prefixed clip id | John 4 slide 12, John 7 slide 26 |
| `.walls > div` (`b`, `i`, `b`, `small`) | walls coming down between two kinds of people, one row per step | John 4 slide 10 |
| `[data-dots="38"].dots` (`.rows` + `--cols`, `.fill`, `.fish`, `--dot`, `--pace`, `--wait`; `data-keep` + `.dots-go`) and `.dots-num` (`--to`), `.dots-cap` | a dot counter: dots that pop in, fill, or fade until a few are left, and a number that counts up | John 5 slide 8 (fill, count up), John 6 slide 9 (on a step), John 6 slide 47 (kept few), John 21 slide 15 (fish), John 4 slide 31 (rows) |
| `.talk > p` (`small`, `p.reply`, `.flag`) | a conversation in speech bubbles | John 5 slide 9 |
| `.ifthen` (`div.if`, `.arrow`, `div.then`, `small`) | if … then: a condition and what follows | John 7 slide 14 |
| `svg.clock` (`.clock-face`, `.clock-tick`, `.clock-hour`, `.clock-hand`; `--stop`, `--from`, `--at`) | a clock hand sweeping toward "the hour" and stopping short ("not yet"); `--stop: 0deg` for "the hour is come" | John 7 slide 9 |
| `ol.timeline > li` (`b`, `span`, `small`; `.lit`, `.wait`, `data-n`, `--k`) | a timeline with any number of evenly spaced points (`.hours` is fixed at five) | John 10 slide 24, John 11 slide 7 (numbered) |
| `.iam` (`.big`, `div` + `cite`, `div.now`) | the seven "I am" sayings, the current one lit. (`.signs li.now` also works for them as a grid of cards: John 8, 10, 11, 14, 15) | John 6 slide 31 |
| `svg.tomb` (`.tomb-door`, `.tomb-light`, `.tomb-stone`, `.tomb-word`, `.tomb-sun`, `.tomb-man`; `.now`, `.open`, `.tomb-roll`, `.tomb-forth`; `--roll`, `--turn`) | a tomb whose stone rolls away: on a step, when the slide opens, or already open; the dead walk out | John 11 slides 28, 31; John 20 slide 5 (at dawn) |
| `svg.seed` (`.seed-fall`, `.seed-husk`, `.seed-alone`, `.seed-roots`, `.seed-stalk`, `.seed-head`; `.seed-die`, `.seed-grow`) | a seed that falls, dies, and comes up as a harvest | John 12 slide 24 |
| `ol.stairs > li` (`b`; `--n`, `--k`; `.down`) | steps going down: a humbling, or (`.down`) a slide into the night | John 13 slides 7, 25 (down) |
| `svg.spirit` (`.spirit-body`, `.spirit-move` + `--to`, `.spirit-pulse`, `.spirit-one`, `.spirit-halo`, `.spirit-few`, `.spirit-many`, `.spirit-cap`, `.before`/`.after`; `.spirit-go`) | the Spirit with a man, then in him; one presence, then in believers everywhere | John 14 slide 20, John 16 slide 7 |
| `svg.still` (`.still-roll`, `.still-chop`, `.still-calm`, `.before`/`.after`; `.still-go`) | troubled water growing calm | John 14 slide 28 |
| `svg.curve` (`.curve-base`, `.curve-line`, `.curve-pt(.low/.high)`, `text.q`, `text.ref`; `--at` or `--k`) | a line that falls and rises again: sorrow to joy, a fall and a restoring | John 16 slide 16, John 21 slide 23 |
| `svg.kept` (`.kept-wall(.inner)`, `.kept-in`, `.kept-tag`, `.kept-foe`, `.kept-dart`; `--dx`, `--dy`, `--w`) | kept safe, with attacks bouncing off (eternal security) | John 10 slide 28 (two hands), John 17 slide 14 (darts) |
| `.swap` (`h3` + `span`, `div.a`, `div.b`; `.swap-go`) | two people trading places (substitution) | John 18 slide 37 |
| `.ledger` (`h3`, `ul li` + `--k`, `.total`, `.ledger-stamp`; `.ledger-paid`) | a bill of debts struck through and stamped paid | John 19 slide 27 |
| `ol.checks > li.step` (`.tick`, `q`, `small`, `b`) | a checklist ticked off one by one (prophecies fulfilled) | John 19 slide 31 |
| `.tally span(.hit)` (`i`, `--k`) | how often a key word appears, verse by verse | John 15 slide 10 |

### Making a new graphic

You're encouraged to invent new ways to show an idea. A new graphic is another study's future building block, so:

- Put its CSS in a `<style>` in your study's `<head>`, after the stylesheet links. Prefix every class with the study id, like `.prv03-scale`.
- **No fixed colors anywhere**: no `#hex`, `rgb()`, or color names. Use the theme tokens: `--bg --surface --surface-2 --ink --ink-soft --line --line-strong --accent --accent-hot --on-accent --cool --warm --danger --wine --glow --on-glow --leather --leather-light`. You may use `color-mix(in srgb, var(--accent) 20%, transparent)` for tints.
- In SVG, color with `style="fill:var(--accent)"` or with classes, never `fill="#..."`. Text on `--accent` uses `--on-accent`. Text on a glow uses `--on-glow`.
- **Need real night and real light?** `--glow` stays light and `--on-glow` stays dark in every theme, even the pale ones. So a panel filled with `--on-glow`, with `--glow` text, is a night sky in every theme, and the reverse is daylight. `.daybreak` and `.stairs.down` use this.
- Give SVG gradient and clip ids a study prefix (`prv03-glow`), so they're unique.
- Check it in all four themes.
- List it in your report so it can be moved into `deck.css` for everyone.

## New Testament dates

Use these, always with "about", so every study agrees. They are the common conservative dates.

| Event | About |
|---|---|
| Jesus crucified, risen, ascended; Pentecost (Acts 1–2) | AD 30 to 33 |
| Saul converted on the Damascus road (Acts 9) | AD 34 to 35 |
| First missionary journey: Cyprus and Galatia (Acts 13–14) | AD 46 to 48 |
| Galatians written, to the churches of that first journey | AD 48 to 49 |
| The Jerusalem council (Acts 15) | AD 49 |
| Second journey: Philippi, Thessalonica, Athens, Corinth (Acts 15:36–18:22) | AD 49 to 52 |
| 1 and 2 Thessalonians written, from Corinth | AD 50 to 51 |
| James written (the earliest letter, by some counts) | AD 45 to 50 |
| Third journey: three years at Ephesus, then Macedonia and Greece (Acts 18:23–21:16) | AD 53 to 57 |
| 1 Corinthians, from Ephesus | AD 55 |
| 2 Corinthians, from Macedonia | AD 56 |
| Romans, from Corinth | AD 57 |
| Paul arrested in Jerusalem; two years in prison at Caesarea (Acts 21–26) | AD 57 to 59 |
| The voyage and shipwreck; Rome (Acts 27–28) | AD 59 to 60 |
| Under house arrest in Rome: Ephesians, Philippians, Colossians, Philemon | AD 60 to 62 |
| Acts finished by Luke | AD 62 |
| 1 Peter, from "Babylon" (Rome) | AD 62 to 64 |
| Paul released: 1 Timothy and Titus | AD 62 to 64 |
| Rome burns; Nero turns on the Christians | AD 64 |
| 2 Peter; Hebrews; Jude | AD 64 to 68 |
| 2 Timothy, Paul's last letter, from a Roman prison | AD 66 to 67 |
| Paul and Peter put to death in Rome, by tradition | AD 67 to 68 |
| Rome destroys Jerusalem and the temple | AD 70 |
| John's letters, from Ephesus | AD 85 to 95 |
| Revelation, from Patmos, under Domitian | AD 95 |

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
5. Too tall? On a wide screen, deck.js shrinks a slide that doesn't fit, down to 70%, so nothing is ever hidden under the controls (phones scroll instead). Still aim to fit at full size: the stone theme leaves the least room because of its rising water band. If a slide shrinks below about 85%, split it.
