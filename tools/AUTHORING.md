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

  Not every slide carries all five, but the study as a whole must.
- **The text, the tradition, the spelling** (Rick's rulings, 2026-11-13):
  - **Side with the KJV and traditional teaching, never with modern scholarship.** We hold to the Majority Text and the traditional reading. Never correct or second-guess the KJV: no "some translators read…", no "the Hebrew really says…", no Septuagint, "oldest manuscripts" or critical-text appeals, no "scholars think", no Josephus or historians cited as the authority. A KJV word, stone, animal or place is not "uncertain": badgers' skins are badgers' skins. A Hebrew or Greek note that *explains* the KJV is fine.
  - **Authorship and dates as traditionally taught, stated plainly**: Moses wrote the Pentateuch, Isaiah all of Isaiah, Daniel wrote Daniel, Paul wrote Hebrews (the KJV title says so), Matthew is the first Gospel.
  - **Traditional typology may be taught plainly** (the tabernacle, the sacrifices, the brasen serpent, Isaac on the altar point to Christ). Just don't claim a verse says what it doesn't: "this is a picture of the cross", not "the New Testament says this altar is the cross".
  - **Biblical names only.** Use the name the Bible gives (Jannes and Jambres, 2 Timothy 3:8). If the Bible doesn't name a person or a god, leave them unnamed: no Heqet, Apis, Thutmose, Salome. A modern place name may stand only to say where a biblical place was (Nuweiba, Jabal al-Lawz).
  - **KJV spelling and grammar in the teaching text too**: vail (Old Testament), cherubims, Saviour, honour, neighbour, devils (not demons), the council (not Sanhedrin), JEHOVAH (never YHWH or Yahweh). Pronouns for God are **lower case** (he, his, him), as the KJV prints them.
  - **Dates and places by exegesis**: take them from what the text says ("the mountains of Ararat", "in the days of Uzziah", "the 480th year"), never from a chronologist's or an atlas-maker's guess (see "Old Testament dates"). The one outside source Rick accepts is **Ron Wyatt's** research, because it never contradicts the Bible, only the "experts" who make its miracles "more digestible": the Red sea crossing at Nuweiba, Mount Sinai at Jabal al-Lawz in Arabia, Golgotha and the Garden Tomb north of the Damascus Gate, Noah's ark at Durupinar in the mountains of Ararat, and the ark of the covenant, which he reached through the caves by Jeremiah's Grotto, in a chamber beneath Calvary, where Christ's blood ran down through the earthquake crack onto the mercy seat. The maps already follow him.
  - **Counts are the Bible's own count**, counted from the KJV file with a script ("as the LORD commanded Moses": 7 times in Exodus 39 and 7 in Exodus 40), never estimated.
  - Saying honestly what the text doesn't tell us is still right ("Moses doesn't say why"). The rule is against doubting Scripture, not against refusing to add to it.
- **When a passage touches despair, suicide or a man at the end of himself** (Judas, the jailor, Jonah, "men shall seek death"), point him to his **brothers in Christ and his church leaders**: "call or text your brothers in Christ, and your pastor." Never give a hotline number (Rick's rule). Giving a man both a refuge and a purpose makes him part of a larger company of men fighting the same enemy, and that belonging lifts him up. Find them in the chapter itself; don't bolt them on.

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
| `svg.map[data-land]` + `data-towns="Jerusalem, Sychar*, Bethlehem!:b"` | the land in Jesus' day (Galilee, Samaria, Judaea, Perea, the lake, the Jordan, the Dead Sea) on **real shaded relief**, like the Old Testament maps, drawn by deck.js in a 400 × 560 box. Towns come from GOSPEL_PLACES in deck.js (then OT_PLACES): `*` lights one, `!` adds a pulse, `:l :r :t :b` places its name. `data-via="Nazareth, Capernaum"` on a `path.map-route` draws a route; or draw your own paths in the box's units. Give the svg its own `viewBox` to show part of the land, larger; names keep one size, the card takes the map's shape, and a name that would hang off the edge widens the map to fit. `data-regions` picks the names (GALILEE, SAMARIA, JUDAEA, PEREA by default; also DECAPOLIS, IDUMAEA, PHOENICIA) | John 4 slide 5 (whole land, a route on a step), John 7 slide 33 (cropped) |
| `svg.map[data-world]` + `data-towns="Rome!, Corinth*, Ephesus:l"` | the Roman world of Acts and the letters (Italy to the Euphrates, the Black Sea to Egypt) on **real shaded relief**, drawn by deck.js in a 908 × 576 box. Places come from NT_PLACES in deck.js (Rome, Corinth, Ephesus, Philippi, Troas, the seven churches, Patmos, Melita, Antioch, Tarsus, Jerusalem, and more; then OT_PLACES). A `<path class="map-route" data-journey="1">` draws Paul's first journey (also `"2"`, `"3"`, `"rome"`); add class `j1`–`j4` to color several on one map. `data-via="Troas, Neapolis, Philippi"` draws your own route; put `@lon lat` waypoints in it to keep a sea route off the land. Crop with your own `viewBox` (`"425 170 210 170"` the Aegean, `"540 225 140 105"` the seven churches): text and dots stay the same size on screen | Acts 13 slide 5, Revelation 1 |
| `div.letter` (`p.from`, then `dl` of `dt`/`dd`) | the opening of a letter: a sealed page with who wrote it ("Paul … to the saints which are at Ephesus", KJV from the letter's first verses), then Written from / When / To whom / Why, appearing in turn (`dd class="step"` holds one for a click). Put it in a `.split` beside an `svg.map[data-world]` on the first chapter's setting slide | new for the letters |
| `svg.map[data-terrain="neareast"]` (or `"sinai"`, `"land"`) + `data-towns="Ur!, Haran*, Shechem:l"` | **The Old Testament maps**: real shaded relief (the mountains, the Jordan rift, the deserts), with the green of watered land along the rivers. `neareast` is Egypt to Persia (the patriarchs, the empires, the exile); `sinai` is Goshen, the Sinai and Midian to Canaan (the Exodus); `land` is the land itself, Dan to Kadesh-barnea, the coast to Bashan (the conquest, the tribes, the kings). Each is 1000 units wide (heights 807, 827, 1217); crop with your own `viewBox` and text stays one size. Places come from OT_PLACES in deck.js (towns, plus mountains drawn as a triangle: Mount Sinai, Nebo, Carmel, Tabor, Gilboa, Hermon, Ebal, Gerizim, Hor, Ararat). `data-regions="EGYPT, CANAAN"` chooses the region names (each map has a sensible default; `data-regions=""` shows none). A `<path class="map-route" data-journey="abraham">` draws a journey: `abraham`, `jacob`, `joseph`, `exodus`, `exile-israel`, `exile-judah`, `return`; or `data-via="Shechem, @35.4 32.0, Jericho"` for your own; `j2`–`j4` color more routes; `r1`–`r4` + `.map-go1`–`4` wait for a step, as on the other maps. On the land map, `data-tribes="all"` colors the twelve tribes' inheritance (Joshua 13–19), or `data-tribes="Judah*, Benjamin*, Ephraim"` shows some and lights the starred. The colors are the map's own in every theme. On every terrain map (these, the close-ups, `data-world`, `data-land`), a region, sea or river name that would not fit inside your crop, or a region name that would sit on a town, is left out by itself; a town name that would hang off the edge widens the map. Names are sized to the map's shape, so a tall crop gets larger names. Colors a study adds must be named CSS colors (`firebrick`, `saddlebrown`, `steelblue`), since the checker refuses hex. **The Exodus follows Ron Wyatt** (Rick's ruling): the crossing at Nuweiba and Mount Sinai at Jabal al-Lawz in Arabia; the `exodus` journey adds the credit line itself. To rebuild a map's picture and coastline: `node tools/terrain.mjs land` (or `neareast`, `sinai`, `all`) | `mockups/ot-graphics.html` slides 1–4, 12 (a local demo, not published) |
| `svg.map[data-terrain="galilee"]`, `"jerusalem"`, `"nineveh"` | **Close-ups** on the same real relief (keep a Jerusalem crop at least about 450 units wide: closer than that, the elevation data has nothing more to show), each 1000 units wide with its **own places** (then OT_PLACES). `galilee`: the Sea of Galilee, its shoreline traced from the elevation itself, with Capernaum, Bethsaida, Chorazin, Magdala, Tiberias, Gergesa (Kursi, the country of the Gergesenes/Gadarenes), Hippos, Gadara and the Mount of Beatitudes (traditional); regions GALILEE, GENNESARET, DECAPOLIS, COUNTRY OF THE GADARENES. `jerusalem`: the city in Jesus' day (its walls and the temple platform drawn for you; `data-walls=""` hides them, e.g. for an Old Testament scene, where you draw your own), the Kidron and Hinnom valleys, the Mount of Olives, with Temple, Gethsemane, Bethphage, Bethany, Pool of Siloam, Pool of Bethesda, Upper room, High priest's house, Pilate's hall (the Antonia, by tradition), Herod's palace, Fish gate, Gihon spring, and **Golgotha and the Garden Tomb at Gordon's Calvary, north of the city (Rick's ruling)**. `nineveh`: the city walls, the Tigris and the Khosr, the mounds Kuyunjik and Nebi Yunus. Rebuild with `node tools/terrain.mjs galilee` (etc.) | — |
| `svg[data-tabernacle]` | the tabernacle in its court, in 3D and to scale in cubits (Exodus 26–27): it builds itself in the order a priest meets it coming in from the east (gate, altar, laver, holy place, most holy place). `data-tabernacle="steps"` brings each piece on a click; `"inside"` shows the tent alone, roof off and near walls cut low, with the table of shewbread, the candlestick, the altar of incense, the vail and the ark (add `steps` to bring them in turn); `"nolabels"` drops the names | `mockups/ot-graphics.html` slides 5–6 |
| `svg[data-temple]` | Solomon's temple in 3D, to scale (1 Kings 6–7, 2 Chronicles 3–4): the court, the brasen altar, the molten sea on its oxen, the ten lavers, Jachin and Boaz, the porch, the house with its side chambers and the oracle. Takes `steps` and `nolabels` like the tabernacle | `mockups/ot-graphics.html` slide 7 |
| `div.done-pair` > `div.row.head` + `div.row` (`div.c`, `div.d`, `span.t`; `small` for a reference) | what was commanded beside what was done, row by row, with a tick: obedience checked against the word (Exodus 35–40, Numbers 8:20, Joshua 11:15) | Exodus 37 slides with "Commanded / Done" |
| `ol.plagues > li` (`.done`, `.now`, `.later`; `b`, `span`, `small`, `em.self` / `em.lord`) + `p.plagues-key` | the ten plagues of Egypt in a 5×2 grid (2×5 on phones): past plagues `done`, this chapter’s `now`, the rest `later` (dim, no `em`). Each `em` says what the text says of Pharaoh’s heart: `self` (he hardened it himself, 8:15, 8:32, 9:34), `lord` (the LORD hardened it, 9:12 on), plain ("was hardened"). Copy the cells from Exodus 10 so every chapter agrees | Exodus 9 slide 3, Exodus 10 slide 11 |
| `div.tree` > `ul` > `li` > `span` (nested `ul`; `span.hot`, `span.soft`, `small`, `data-icon`; `li.step`) | a family tree: Jacob's sons by their mothers, David's line, Abraham's sons. Each generation arrives in turn; up to about twelve names fit across. Put `small` inside a name for a note ("called Israel"), `data-icon` for an icon | `mockups/ot-graphics.html` slide 8 |
| `[data-icon="tent"]` on any element | a small drawn icon before the text: `tent crown scroll staff ark altar star sheaf harp sword lamp tablets well ladder coat heart person rainbow cross water city` | the tree above |
| `div[data-lives="adam-noah"]` (or `"noah-jacob"`, `"all"`) + `data-mark="Methuselah, Noah"` | how long they lived (Genesis 5 and 11), as bars on one line of years from creation, with the flood marked. It shows what the numbers hide: Methuselah dies the year of the flood; Shem outlives Abraham's call (Abram counted as born when Terah was 130) | `mockups/ot-graphics.html` slide 9 |
| `div[data-kings]` (or `data-kings="1050-586"` with Saul, David, Solomon, or a narrower range like `"760-680"`) + `data-mark="Hezekiah, Isaiah"`, `data-prophets="off"` | **Don't use until it is redrawn on the Bible's own reigns (see Old Testament dates); it still has a modern BC scale.** The kings of Israel and Judah side by side, each reign colored by the books' own verdict (did right / right but not with a perfect heart / did evil in the sight of the LORD), the prophets above and below the kings they spoke to, and the fall of Samaria (722) and of Jerusalem (586) marked | `mockups/ot-graphics.html` slide 10 |
| `div.parallel` > `p` > `b` pieces (`data-kind="same"`, `"opposite"`, `"more"`; `p.step`) | Hebrew poetry: two or three lines cut into pieces that line up in colored columns, with a badge saying how they pair (says it again / the other side / builds on it). Lighter than `.match`; use `.match` when each link needs its own label | `mockups/ot-graphics.html` slide 11 |
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

### Ready-made pictures to copy

These drawn (SVG) graphics live in one study each, with their own markup. When your chapter needs the same picture, copy the SVG and its `<style>` lines from that study, give the classes and ids your own prefix, and change the labels. Don't draw a second version from scratch.

| Picture | Use it for | Copy from |
|---|---|---|
| A door with blood on the two side posts and the lintel, and death passing over (`ex04-door`) | the Passover, the blood that shelters (Leviticus 17:11, Hebrews 11:28) | `exodus-12.html` |
| The pillar of cloud by day and of fire by night (`ex13-pillar`, `ex14-between`) | God leading and guarding (Numbers 9, 14:14; Nehemiah 9:12) | `exodus-13.html`, `exodus-14.html` |
| Walls of water and a dry path, the walls falling on a step (`ex14-sea`) | the Red sea, the Jordan (Joshua 3), Elijah and Elisha at Jordan (2 Kings 2) | `exodus-14.html` |
| The vail tearing from the top (`ex26-tear`) | the day of atonement (Leviticus 16), Matthew 27:51, Hebrews 10:20 | `exodus-26.html` |
| A man hidden in a cleft of the rock as the glory passes (`ex33-cleft`) | Elijah at Horeb (1 Kings 19), "hid with Christ" (Colossians 3:3) | `exodus-33.html` |
| A shining face, vailed and unvailed (`ex34-face`) | 2 Corinthians 3, Stephen (Acts 6:15) | `exodus-34.html` |
| Moses' hands held up by Aaron and Hur (`ex17-panels`) | holding up a tired brother | `exodus-17.html` |
| The same half shekel paid by rich and poor (`ex30-pay`) | redemption price, equal for all (1 Peter 1:18–19) | `exodus-30.html` |
| "Needed" against "brought", with a STOP (`ex36-gauge`) | more than enough (2 Corinthians 8–9) | `exodus-36.html` |
| Three tiers up a mountain: the people, the elders, Moses alone (`ex24-mount`) | approaching God in order; Hebrews 12:18–24 | `exodus-24.html` |

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

## Old Testament dates

**Rick's ruling (2026-11-13): "If the Bible gives a date, use that."** No BC dates from any chronologist (Thiele, Ussher or anyone else): they are interpretations, and some contradict the Bible's own counts. Date every Old Testament event the way the Bible dates it, and quote the reference. Plain Bible arithmetic is fine (Isaac was born 25 years after the call: Abram was 75, Abraham 100). Don't join verses into a number the Bible doesn't state when they can be read more than one way. `div[data-lives]` counts years from creation by the ages in Genesis 5 and 11, which is the Bible's own count.

| Event | The Bible's own date |
|---|---|
| The flood | Noah's six hundredth year (Genesis 7:6, 11) |
| Abram called out of Haran | at 75 (Genesis 12:4) |
| Isaac born | Abraham 100 (Genesis 21:5) |
| Jacob and Esau born | Isaac 60 (Genesis 25:26) |
| Joseph sold; stands before Pharaoh | at 17 (37:2); at 30 (41:46) |
| Jacob goes down to Egypt | at 130 (Genesis 47:9), in the second year of the famine (45:6) |
| Jacob dies; Joseph dies | at 147 (47:28); at 110 (50:26) |
| The affliction | "four hundred years" (Genesis 15:13; Acts 7:6) |
| The sojourning; the law | "four hundred and thirty years… even the selfsame day" (Exodus 12:40–41); the law "four hundred and thirty years after" the covenant (Galatians 3:17) |
| Moses | 40 when he went out to his brethren (Acts 7:23); 80, and Aaron 83, before Pharaoh (Exodus 7:7); 120 at his death (Deuteronomy 34:7) |
| Out of Egypt; at Sinai | the 15th day of the first month (Numbers 33:3); the third month (Exodus 19:1) |
| The tabernacle reared up | the first day of the first month of the second year (Exodus 40:17) |
| Forty years in the wilderness | Numbers 14:33; Deuteronomy 1:3 (the fortieth year) |
| Solomon begins the temple | the 480th year after the Exodus, the fourth year of Solomon (1 Kings 6:1) |
| The kings | by their reigns as the Bible gives them ("David… reigned forty years", 1 Kings 2:11; "Uzziah… reigned fifty and two years", 2 Chronicles 26:3) |
| The prophets | by the kings in their first verse (Hosea 1:1; Amos 1:1, "two years before the earthquake"; Micah 1:1; Zephaniah 1:1; Haggai 1:1, "the second year of Darius the king"; Zechariah 1:1). Jonah: the days of Jeroboam the son of Joash (2 Kings 14:25). A book that names no king doesn't date itself: say so |
| Samaria taken; Israel carried away | the ninth year of Hoshea, the sixth year of Hezekiah (2 Kings 17:6; 18:10) |
| Jerusalem burned | the nineteenth year of Nebuchadnezzar, the eleventh year of Zedekiah (2 Kings 25:2, 8) |
| The captivity | seventy years (Jeremiah 25:11; Daniel 9:2) |
| The return | the first year of Cyrus king of Persia (Ezra 1:1) |
| The second temple finished | the sixth year of Darius the king (Ezra 6:15) |
| Ezra; Nehemiah | the seventh year of Artaxerxes (Ezra 7:7); the twentieth year (Nehemiah 2:1) |

`div[data-kings]` in deck.js still draws a BC scale from a modern chronology. It must be redrawn on the Bible's own reigns before it is used (1–2 Kings, 1–2 Chronicles).

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
