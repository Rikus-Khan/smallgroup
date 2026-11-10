// The shared slide-show engine. A study page defines BOOK and V (its KJV verses), marks up
// its slides, then loads this file. The overview page builds its slides first, then loads it.
(() => {
  // ---------- Themes: every theme works on every slide show ----------
  const THEMES = [
    { id: "night", name: "Night to dawn", swatch: ["#0d1030", "#f2b24c", "#f1e6cf"] },
    { id: "stone", name: "Stone and wine", swatch: ["#ece3d2", "#7b1e30", "#3f86a1"] },
    { id: "slate", name: "Slate and brass", swatch: ["#15211e", "#d1a54a", "#efe8d8"] },
    { id: "scribe", name: "Scribe’s page", swatch: ["#eef0e8", "#2f3d8f", "#a1302a"] }
  ];
  const root = document.documentElement;
  const ownTheme = root.dataset.theme || THEMES[0].id;   // the look this slide show was designed in
  const STORE = "deck-theme";
  const store = {
    get() { try { return localStorage.getItem(STORE); } catch { return null; } },
    set(v) { try { v ? localStorage.setItem(STORE, v) : localStorage.removeItem(STORE); } catch { /* private mode */ } }
  };
  const valid = id => THEMES.some(t => t.id === id);
  function applyTheme(id) { root.dataset.theme = valid(id) ? id : ownTheme; }
  // ?theme=stone wins (handy for sharing a link), then the viewer's last choice, then the study's own look
  const asked = new URLSearchParams(location.search).get("theme");
  applyTheme(valid(asked) ? asked : store.get() || ownTheme);

  // ---------- Scripture helpers ----------
  // A chapter study sets BOOK = "John 2" and keys V by verse: { 1: "...", 2: "..." }, refs like "3-5".
  // A topic study sets BOOK = "Proverbs" and keys V by chapter:verse: { "3:13": "..." }, refs like "3:13-18".
  const verses = typeof V !== "undefined" ? V : null;
  const bookRef = typeof BOOK !== "undefined" ? BOOK : "";
  const chapter = (bookRef.match(/(\d+)$/) || [])[1] || "";
  function range(spec) {
    const m = String(spec).match(/^(?:(\d+):)?(\d+)(?:-(\d+))?$/);
    if (!m) throw new Error(`Bad verse reference "${spec}"`);
    const out = [];
    for (let n = Number(m[2]); n <= Number(m[3] || m[2]); n++) out.push(m[1] ? `${m[1]}:${n}` : n);
    return out;
  }
  const verseNo = key => String(key).split(":").pop();
  // "3:13–18" in a topic study, "13–18" in a chapter study
  const span = keys => {
    const first = String(keys[0]), last = verseNo(keys[keys.length - 1]);
    return keys.length > 1 ? `${first}–${last}` : first;
  };
  const refText = keys => String(keys[0]).includes(":") ? `${bookRef} ${span(keys)}` : `${bookRef}:${span(keys)}`;
  function highlight(text, hl) {
    if (!hl) return text;
    for (const phrase of hl.split("|")) {
      const at = text.indexOf(phrase);
      if (at >= 0) text = text.slice(0, at) + "<mark>" + phrase + "</mark>" + text.slice(at + phrase.length);
    }
    return text;
  }

  // Old KJV words, and what they mean in plain English today. A verse slide lists the ones its verses use
  // ("Old words: verily = truly, surely"), so no man is left guessing. Forms: "shew|shewed" all share one meaning.
  const OLD_WORDS = [
    ["verily", "truly, surely"], ["shew|shewed|sheweth|shewing|shewn", "show"], ["beseech|beseeching|besought", "beg, plead with"],
    ["howbeit", "but, even so"], ["whence", "from where"], ["whither|whithersoever", "to where"], ["hither", "here, to this place"],
    ["thither", "there, to that place"], ["nigh", "near"], ["raiment|apparel", "clothing"], ["countenance", "face, look"],
    ["divers", "various, of many kinds"], ["withal", "also, as well"], ["corn", "grain (wheat or barley)"], ["meat|meats", "food"],
    ["froward|frowardness", "stubborn, twisted"], ["residue", "the rest"], ["infirmity|infirmities", "weakness, sickness"],
    ["wax|waxed|waxeth|waxen", "grow, become"], ["travail|travaileth", "hard labour, birth pains"], ["haply", "perhaps, by chance"],
    ["peradventure", "perhaps"], ["vex|vexed|vexation", "trouble, torment"], ["conversation", "way of life, conduct"],
    ["straitly", "strictly, sternly"], ["strait", "narrow, hard-pressed"], ["wont", "used to, in the habit of"],
    ["estate", "condition, standing"], ["abhor|abhorred|abhorreth", "hate, find disgusting"], ["grievous", "heavy, hard to bear"],
    ["wroth", "very angry"], ["sometime|sometimes", "once, at one time"], ["quick|quicken|quickened|quickeneth", "alive; make alive"],
    ["whit", "the least bit"], ["husbandman|husbandmen", "farmer, vine-grower"], ["bowels", "the inner man, deep feelings"],
    ["impotent", "weak, disabled"], ["wot|wotteth|wist|trow", "know, think"], ["instant|instantly", "urgent; urgently"],
    ["unawares", "without knowing"], ["delicately", "in luxury"], ["letteth", "holds back, hinders"],
    ["prevent|prevented", "go before, come first"], ["charity", "self-giving love"], ["suffer|suffered|suffereth", "allow (or endure)"],
    ["abode", "stayed, lived"], ["anon", "at once"], ["holden", "held"],
    ["publican|publicans", "tax collector"], ["centurion|centurions", "Roman officer over about 100 men"],
    ["tetrarch", "ruler of part of a land"], ["scrip", "traveller's bag"], ["farthing|farthings|mite|mites", "the smallest coin"],
    ["penny|pence", "a day's wage (a silver denarius)"], ["cubit|cubits", "about 18 inches"], ["furlong|furlongs", "about an eighth of a mile"],
    ["kine", "cows"], ["victuals", "food, supplies"], ["ensample|ensamples", "example"], ["lucre", "money, gain"],
    ["concupiscence", "strong evil desire"], ["lasciviousness", "shameless lust"], ["chambering", "sexual sin"],
    ["wantonness", "lust without restraint"], ["emulations", "jealous rivalry"], ["revellings", "wild drunken parties"],
    ["surfeiting", "overindulgence"], ["gainsay|gainsayers|gainsaying", "speak against, contradict"],
    ["reprobate", "rejected, failing the test"], ["propitiation", "the sacrifice that turns away God's wrath"],
    ["mammon", "money, riches"], ["unction", "anointing"], ["usury", "interest on a loan"], ["vaunteth", "boasts"],
    ["vesture", "robe, clothing"], ["tares", "weeds that look like wheat"], ["superfluity", "overflow, excess"],
    ["succour|succoured", "help, rescue"], ["sundry", "various"], ["stablish|stablished|stablisheth", "make firm"],
    ["shambles", "meat market"], ["seemly|comely", "fitting, proper; pleasing"], ["leasing", "lies"],
    ["quaternions", "squads of four soldiers"], ["firkins", "jars of about 9 gallons"], ["tribute", "tax"],
    ["jot", "the smallest letter"], ["tittle", "the smallest stroke of a letter"], ["outlandish", "foreign"],
    ["bishoprick", "the office of an overseer"], ["sod|sodden", "boiled"], ["kinsman|kinsmen", "relative"],
    ["afore|aforetime", "before, in the past"], ["ere", "before"], ["hitherto", "until now"],
    ["sith", "since"], ["twain", "two"], ["fain", "gladly"],
    ["brasen", "made of bronze"], ["sackcloth", "rough goat-hair cloth worn in grief"], ["firstfruits", "the first of the harvest, given to God"],
    ["earnest", "a down payment, a pledge (or: eager)"], ["stripes", "lashes of a whip"], ["scourge|scourged", "whip, whipped"],
    ["tidings", "news"], ["slothful", "lazy"], ["chasten|chastened|chasteneth|chastening", "discipline, train"], ["mete|meted", "measure out"],
    ["firmament", "the expanse of the sky"], ["fowl|fowls", "birds"], ["replenish", "fill"],
    ["bdellium", "a sweet-smelling resin (some think pearls)"], ["thence", "from there"], ["compass|compassed|compasseth", "go around, surround"],
    ["begat|beget", "became the father of"], ["renown", "fame"], ["selfsame", "the very same"],
    ["asswaged", "sank, calmed (assuaged)"], ["pluckt", "plucked"], ["spake", "spoke"],
    ["builded", "built"], ["savour", "smell, scent"], ["smite|smote|smitten|smiteth", "strike, struck"],
    ["seedtime", "planting season"], ["whoso", "whoever"], ["similitude", "likeness"],
    ["bondmen|bondman", "slaves"], ["hewers", "cutters (of wood or stone)"], ["isles", "coastlands across the sea"],
    ["throughly", "thoroughly"], ["morter", "mortar"], ["nativity", "birth; the land of his birth"],
    ["sojourn|sojourned|sojourneth|sojourner", "live somewhere as a stranger"], ["asses", "donkeys"], ["heathen", "the nations (people outside Israel)"],
    ["herdmen", "herdsmen"], ["vale|dale", "valley"], ["slime|slimepits", "tar, tar pits"],
    ["confederate", "allies"], ["shoelatchet", "a sandal strap"], ["brake", "broke"],
    ["betwixt", "between"], ["hearken|hearkened|hearkeneth", "listen (and obey)"], ["fourscore", "eighty"],
    ["handmaid|handmaiden", "a woman servant"], ["carcases|carcase", "dead bodies"], ["turtledove|turtledoves", "a small wild dove"],
    ["heifer", "a young cow"], ["surety", "a guarantee; (of a surety) for certain"], ["abated", "went down, grew less"],
    ["perdition", "ruin, destruction"], ["iniquity|iniquities", "sin, wrongdoing"], ["wherefore", "so, therefore; (asking) why"]
  ].map(([forms, means]) => ({ re: new RegExp(`\\b(${forms})\\b`, "i"), word: forms.split("|")[0], means }));
  const oldWords = text => OLD_WORDS.filter(o => o.re.test(text)).slice(0, 4)
    .map(o => `<span><b>${o.word}</b> = ${o.means}</span>`).join("");

  if (verses) {
    // Full-verse slides
    document.querySelectorAll(".slide.verse").forEach(s => {
      const nums = range(s.dataset.v);
      const chars = nums.reduce((t, n) => t + verses[n].length, 0);
      const vs = chars < 260 ? 1 : chars < 420 ? .88 : chars < 600 ? .78 : .7;
      const body = nums.map((n, k) =>
        `<p class="v rise" style="--d:${k * 2 + 1}"><span class="vn">${verseNo(n)}</span>${highlight(verses[n], s.dataset.hl)}</p>`).join("");
      const carved = String(nums[0]).includes(":") ? span(nums) : `${chapter}:${span(nums)}`;
      const old = oldWords(nums.map(n => verses[n]).join(" "));
      s.innerHTML = `<div class="inner"><p class="carved rise" aria-hidden="true">${carved}</p>` +
        `<div class="vtext" style="--vs:${vs}">${body}</div><p class="vref rise" style="--d:${nums.length * 2 + 1}">${refText(nums)}</p>` +
        (old ? `<p class="oldwords rise" style="--d:${nums.length * 2 + 2}"><em>Old words</em>${old}</p>` : "") + `</div>`;
    });
    // Verse quotes on explanation and question slides
    document.querySelectorAll("blockquote[data-q]").forEach(q => {
      const nums = range(q.dataset.q);
      const text = nums.map(n => (nums.length > 1 ? `<span class="vn">${verseNo(n)}</span>` : "") + verses[n]).join(" ");
      q.innerHTML = `<p>${highlight(text, q.dataset.hl)}</p><cite>${refText(nums)}</cite>`;
    });
  }

  // ---------- Built-in graphics ----------
  // svg[data-jars]: six stone waterpots
  const JAR = "M24 26 L22 34 Q8 40 9 70 L11 196 Q12 222 46 222 Q80 222 81 196 L83 70 Q84 40 70 34 L68 26 Z";
  document.querySelectorAll("svg[data-jars]").forEach((svg, n) => {
    const clip = `jar-clip-${n}`;
    let g = `<defs><clipPath id="${clip}"><path d="${JAR}"/></clipPath></defs>`;
    for (let k = 0; k < 6; k++) {
      g += `<g transform="translate(${8 + k * 105} 6)">
        <path class="jar-body" d="${JAR}"/>
        <rect class="jar-liquid" style="--k:${k}" x="0" y="22" width="92" height="205" clip-path="url(#${clip})"/>
        <path class="jar-edge" d="${JAR}"/>
        <rect class="jar-rim" x="20" y="18" width="52" height="10" rx="3"/>
      </g>`;
    }
    svg.innerHTML = g;
  });
  // [data-flock="48" data-chosen="18"]: a flock of lambs, one of them chosen
  const flocks = document.querySelectorAll("[data-flock]");
  if (flocks.length) {
    document.body.insertAdjacentHTML("afterbegin", `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
      <symbol id="lamb" viewBox="0 0 60 44"><g fill="currentColor"><circle cx="17" cy="19" r="9"/><circle cx="27" cy="13" r="10"/><circle cx="37" cy="17" r="9"/><circle cx="27" cy="24" r="10"/><ellipse cx="48" cy="15" rx="6.5" ry="5"/></g>
      <g stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="19" y1="29" x2="19" y2="41"/><line x1="35" y1="29" x2="35" y2="41"/></g></symbol></svg>`);
    flocks.forEach(f => {
      const count = Number(f.dataset.flock), chosen = Number(f.dataset.chosen);
      f.innerHTML = Array.from({ length: count }, (_, k) =>
        `<svg class="lamb${k === chosen ? " chosen" : ""}" style="--i:${k}" viewBox="0 0 60 44"><use href="#lamb"/></svg>`).join("");
    });
  }

  // [data-dots="38"]: a dot counter with 38 dots; data-keep="4 10 17" marks those dots (counting from 1) as kept
  document.querySelectorAll("[data-dots]").forEach(box => {
    const keep = new Set(String(box.dataset.keep || "").split(/[\s,]+/).filter(Boolean).map(Number));
    box.innerHTML = Array.from({ length: Number(box.dataset.dots) }, (_, k) =>
      `<i${keep.has(k + 1) ? ' class="keep"' : ""} style="--k:${k}"></i>`).join("");
  });

  // svg.map[data-land]: the land in Jesus' day in a 400 × 560 box, north at the top (about 230 units to a degree of latitude).
  // data-towns="Jerusalem, Sychar*, Bethlehem!:r" adds towns from TOWNS: * lights one, ! lights it and adds a pulse,
  // :l :r :t or :b puts its name on the left, right, top or bottom. Draw your own .map-way and .map-route paths inside the svg, using
  // the town positions below; they sit above the land and below the towns. To show only part of the land, larger,
  // give the svg its own viewBox inside the box (like "96 70 220 410" for the land west of the Jordan).
  const TOWNS = {
    "Caesarea": [136, 218, "r"], "Joppa": [108, 321, "r"], "Hebron": [175, 442, "l"],
    "Capernaum": [268, 131, "l"], "Bethsaida": [280, 124, "r"], "Magdala": [257, 144, "l"], "Tiberias": [258, 153, "l"],
    "Cana": [212, 152, "l"], "Gath-hepher": [219, 164, "r"], "Nazareth": [214, 172, "l"],
    "Samaria": [193, 270, "l"], "Sychar": [211, 285, "r"], "Ephraim": [214, 344, "l"],
    "Jericho": [243, 363, "l"], "Bethabara": [271, 368, "r"], "Jerusalem": [202, 385, "l"], "Bethany": [207, 386, "r"], "Bethlehem": [195, 401, "l"]
  };
  const LAND = `<rect class="map-land" x="0" y="0" width="400" height="560" rx="6"/>
    <path class="map-sea" d="M0 0 H209 L195 41 L176 83 L170 122 L168 145 L148 143 L144 175 L140 193 L135 218 L127 258 L107 322 L86 380 L72 409 L49 444 L10 494 L0 513 Z"/>
    <text class="map-water" x="66" y="262" text-anchor="middle" transform="rotate(-72 66 262)">the Great Sea</text>
    <path class="map-border" d="M136 219 C 180 212, 230 222, 266 214"/><path class="map-border" d="M110 316 C 160 310, 220 322, 266 312"/>
    <path class="map-river" d="M279 40 C 274 70, 282 100, 273 128"/><path class="map-river" d="M266 171 C 260 210, 274 245, 264 285 S 272 350, 258 387"/>
    <ellipse class="map-lake" cx="270" cy="150" rx="13" ry="22"/>
    <path class="map-lake" d="M250 386 C 262 384, 270 392, 268 420 C 266 460, 268 500, 266 560 L 244 560 C 240 520, 232 470, 234 430 C 234 400, 240 388, 250 386 Z"/>
    <text class="map-region" x="178" y="100">GALILEE</text><text class="map-region" x="126" y="246">SAMARIA</text>
    <text class="map-region" x="100" y="470">JUDAEA</text><text class="map-region" x="282" y="420">PEREA</text>`;
  document.querySelectorAll("svg[data-land]").forEach(svg => {
    if (!svg.hasAttribute("viewBox")) svg.setAttribute("viewBox", "0 0 400 560");
    svg.classList.add("map");
    svg.insertAdjacentHTML("afterbegin", LAND);
    const towns = String(svg.dataset.towns || "").split(",").map(s => s.trim()).filter(Boolean).map(spec => {
      const [, name, mark, side] = spec.match(/^(.+?)([*!]?)(?::([lrtb]))?$/);
      if (!TOWNS[name]) { console.warn(`No town "${name}" on the map`); return ""; }
      const [x, y, own] = TOWNS[name];
      const [tx, ty, anchor] = { l: [x - 11, y + 5, "end"], r: [x + 11, y + 5, "start"], t: [x, y - 12, "middle"], b: [x, y + 24, "middle"] }[side || own];
      return `<g class="map-town${mark ? " here" : ""}"><circle cx="${x}" cy="${y}" r="6"/>` +
        (mark === "!" ? `<circle class="map-ping" cx="${x}" cy="${y}" r="8"/>` : "") +
        `<text x="${tx}" y="${ty}" text-anchor="${anchor}">${name}</text></g>`;
    });
    svg.insertAdjacentHTML("beforeend", towns.join(""));
  });

  // svg.map[data-world]: the Roman world of Acts and the letters, from Gaul to the Euphrates and Pontus to Egypt, in a 908 × 576 box
  // (lon 4°–40° E, lat 29°–47° N). data-towns works as on the land map, with the PLACES below. A path with data-via="Troas, Neapolis,
  // Philippi" (or data-journey="1" | "2" | "3" | "rome") gets its line drawn through those places; "@25.5 40.3" adds a lon/lat waypoint,
  // which keeps a sea route off the land. Text and dots keep the same size on screen when you crop with your own viewBox
  // (try "425 170 210 170" for the Aegean, or "540 225 140 105" for the seven churches of Asia).
  const WX = lon => (lon - 4) * 25.2, WY = lat => (47 - lat) * 32;
  const PLACES = {
    "Rome": [12.5, 41.9, "r"], "Appii forum": [13.1, 41.45, "r"], "Puteoli": [14.1, 40.82, "r"], "Rhegium": [15.65, 38.11, "r"],
    "Syracuse": [15.29, 37.07, "r"], "Melita": [14.4, 35.9, "b"], "Nicopolis": [20.73, 38.99, "l"], "Illyricum": [17.6, 43.6, "t"],
    "Corinth": [22.93, 37.9, "l"], "Cenchrea": [23.0, 37.86, "b"], "Athens": [23.73, 37.98, "r"], "Berea": [22.2, 40.52, "l"],
    "Thessalonica": [22.95, 40.64, "t"], "Amphipolis": [23.85, 40.82, "b"], "Philippi": [24.29, 41.01, "t"], "Neapolis": [24.41, 40.94, "r"],
    "Samothracia": [25.53, 40.48, "r"], "Troas": [26.15, 39.75, "r"], "Assos": [26.34, 39.49, "r"], "Mitylene": [26.55, 39.1, "l"],
    "Pergamos": [27.18, 39.12, "r"], "Thyatira": [27.84, 38.92, "r"], "Smyrna": [27.14, 38.42, "l"], "Sardis": [28.04, 38.49, "r"],
    "Philadelphia": [28.52, 38.35, "r"], "Ephesus": [27.34, 37.94, "l"], "Miletus": [27.28, 37.53, "l"], "Laodicea": [29.11, 37.84, "l"],
    "Colosse": [29.26, 37.79, "r"], "Hierapolis": [29.13, 37.93, "t"], "Patmos": [26.55, 37.31, "l"], "Coos": [27.15, 36.85, "l"],
    "Cnidus": [27.37, 36.69, "b"], "Rhodes": [28.22, 36.44, "r"], "Patara": [29.32, 36.27, "b"], "Myra": [29.98, 36.26, "b"],
    "Fair havens": [24.75, 34.93, "b"], "Clauda": [24.08, 34.84, "b"], "Paphos": [32.4, 34.76, "b"], "Salamis": [33.9, 35.18, "r"],
    "Perga": [30.85, 36.96, "t"], "Attalia": [30.7, 36.88, "b"], "Antioch in Pisidia": [31.19, 38.31, "t"], "Iconium": [32.49, 37.87, "r"],
    "Lystra": [32.32, 37.58, "r"], "Derbe": [33.36, 37.35, "r"], "Tarsus": [34.9, 36.92, "t"], "Antioch": [36.16, 36.2, "r"],
    "Seleucia": [35.93, 36.12, "l"], "Damascus": [36.29, 33.51, "b"], "Sidon": [35.37, 33.56, "r"], "Tyre": [35.2, 33.27, "l"],
    "Ptolemais": [35.07, 32.92, "l"], "Caesarea": [34.89, 32.5, "l"], "Joppa": [34.75, 32.05, "l"], "Jerusalem": [35.23, 31.78, "r"],
    "Gaza": [34.45, 31.5, "l"], "Alexandria": [29.92, 31.2, "b"], "Cyrene": [21.86, 32.82, "b"], "Crete": [24.9, 35.25, "t"]
  };
  const JOURNEYS = {
    "1": "Antioch, Seleucia, Salamis, Paphos, @31.3 36.3, Perga, Antioch in Pisidia, Iconium, Lystra, Derbe, Lystra, Iconium, Antioch in Pisidia, Perga, Attalia, @32.5 35.9, @34.5 35.9, Seleucia, Antioch",
    "2": "Antioch, @36.2 36.9, Tarsus, Derbe, Lystra, Iconium, Antioch in Pisidia, Troas, @26.0 39.7, @25.6 40.05, Samothracia, Neapolis, Philippi, Amphipolis, Thessalonica, Berea, @22.85 40.2, @23.2 39.75, @24.0 39.3, @24.2 38.75, @24.72 38.12, @24.45 37.85, @24.1 37.55, @23.6 37.85, Athens, Corinth, Cenchrea, @24.3 37.4, @25.35 37.3, @26.0 37.45, @26.45 37.72, @26.6 37.95, @27.15 37.9, Ephesus, @27.15 37.9, @26.6 37.95, @26.45 37.72, @26.0 37.45, @26.8 36.6, @27.4 35.8, @29 35.3, @32.5 34.2, Caesarea, Jerusalem, @35.6 33.0, Antioch",
    "3": "Antioch, @36.2 36.9, Derbe, Lystra, Iconium, Antioch in Pisidia, Ephesus, @27.5 38.5, @27.0 39.4, Troas, @26.0 39.7, @25.6 40.05, @25.2 40.75, @24.5 40.84, Neapolis, Philippi, Thessalonica, Berea, Corinth, Berea, Thessalonica, Philippi, Neapolis, @24.5 40.84, @25.2 40.75, @25.6 40.05, @26.0 39.7, Troas, Assos, Mitylene, @26.2 38.4, @26.6 37.95, @27.0 37.6, Miletus, Coos, @27.5 36.55, @27.9 36.6, Rhodes, Patara, @31 35.0, @33.5 34.3, Tyre, Ptolemais, Caesarea, Jerusalem",
    "rome": "Caesarea, Sidon, @34.5 35.95, @33 36.0, Myra, @29.5 36.05, @28.6 36.5, @27.6 36.55, Cnidus, @26.3 34.95, Fair havens, Clauda, Melita, @15.3 36.6, Syracuse, Rhegium, Puteoli, Appii forum, Rome"
  };
  // the land, from Natural Earth (public domain, 1:50m), clipped to the box and projected; and two rivers as lon/lat points
  const WORLD_LAND = "M500.3 366.9L504.4 367.1L506.3 365L508.2 364.9L509 366.8L506.7 368.2L508.5 369.3L510.4 369L510.9 371.7L511.9 372.4L515.2 372.3L522.1 370.4L529.3 370.9L531.8 372.9L536.7 373.2L541.2 374.2L547.6 372.8L548.3 373.6L547.7 378.1L548 379.4L549.2 380L550.3 379.8L551.7 378.3L555.1 377.1L558.6 377.1L561.6 374.1L562.5 373.9L560.6 382.5L558.6 383.4L550.1 383.2L534.4 385.3L524.1 386.1L522.8 385.6L522.5 382.2L521.9 381.2L518.7 380.3L515.7 378.9L501.1 376.1L494.9 376.5L493.7 375.8L492.9 374.5L492.6 370.7L493.2 366.9L494.1 365.9L494.6 367.1L495.7 367.6L496.8 366.4L497.4 363.1L498.2 363.7L498.8 366.2L500.3 366.9ZM489.3 257.3L490.7 260.8L492 261.9L500.9 266.1L506.5 266.5L507.3 267.2L507.9 269.2L509.1 270.7L509.3 271.9L508.7 273.2L509.5 277.2L511 280.9L513.1 282.8L518.2 283.3L518.9 284.1L518.6 287.3L517.5 288.7L516.7 288.9L514.5 287.4L513.1 287.4L512 286.1L509.3 284.2L508.8 281.4L507.6 280.2L506.6 277.8L505.6 277.2L505 275.5L497.9 275.2L495.2 273.8L494.4 270.3L491.6 268.4L487.9 264.5L485.1 262.3L482.4 260.9L479.5 260.1L477.1 261.1L475.8 260.9L475.5 260.2L482.5 255.9L485.3 255L486.7 254.9L489.3 257.3ZM767.7 365L754.6 374.7L753.7 377.5L754.3 379.5L756.6 382.5L757.3 384.4L754.4 384.9L748.4 384.9L743.8 390.2L741.2 392L732.3 394.4L731.4 395.6L731 397.8L729.3 397.5L728.6 395.7L727.4 394.8L723.1 395.2L716.9 392.7L716 391.1L713.6 385.5L713.2 381.3L715.5 382.4L717.5 381.1L719.6 379L722.1 378.2L725.1 378.9L727.8 378.2L729 375.1L729.3 371.5L738.6 373.1L742.4 373.3L746.1 372.7L757.6 368.8L760.8 366.6L766.4 363.9L770 362.8L767.7 365ZM-21.6 230.7L-19.1 231.8L-16.6 230.8L-13.8 231.6L-13.6 233.7L-17.8 240.7L-19 243.6L-21.3 245.3L-23.4 246.3L-27.7 244.2L-30.3 243.7L-31 242.9L-31.6 239.7L-32.7 238.7L-34.4 238.2L-37.8 240.7L-37.8 234L-30.6 228.7L-27.6 226.9L-21.2 224.9L-20.2 225.2L-21 226.4L-21 226.9L-20.2 227.5L-21.6 230.7ZM141.9 195.8L143.2 197.8L146.3 208L145.7 209.9L142.2 215.4L143.8 223.4L141.6 244.7L140.2 250.7L138.3 251.6L132.7 249.1L129.8 249.7L127.4 248.3L126.6 254.6L125.1 257.2L123.1 258.8L117.2 258.3L115.8 257.2L111.4 249.4L110.9 240.6L112.1 238L112.4 235.3L112.2 232.9L112.7 232.1L113.7 232.9L114.4 232.6L114.6 229.2L113.3 227.3L111.1 226.7L111.1 222.8L112.3 221.5L112.6 219.8L112.7 214.6L111.1 212.7L109.7 208L105.5 203.2L105.4 199.3L105.9 196.1L106.5 194.8L108.6 196.6L112.6 197.3L115.3 196.8L118.4 195.3L121.5 193.6L126 188.5L128.7 187.5L130.1 186.1L130.6 184.2L131.8 183.8L133.1 185.6L134.8 185.7L137.5 187.2L139.6 190.3L141.5 191.5L141.7 191.8L140.8 192.2L139.9 194.2L141.9 195.8ZM138.1 134.2L137.5 138.9L139.3 142.3L140 154.8L139.8 155.8L136.1 162.3L135.9 168.6L135.4 170.3L134.3 172L132.4 177.3L130.7 179.7L123.3 175.5L121.1 173.2L123 170.6L123.1 169.6L118.9 167.6L118.9 166.3L119.9 164.2L119.4 162.4L116.4 162.2L116.3 161.3L118.5 158.6L118.4 157L115.6 154.8L115.1 153L116.2 151.7L117.8 150.9L116.6 149L115.1 148.6L116.9 146.3L118.8 142.4L121.3 140.6L127.1 138.8L129.5 136.6L130.9 136.7L133.2 137.8L133.9 137.2L134.5 135.5L134.1 134L134.3 129.8L135.1 127.5L136.5 127.3L137.7 128.6L138.1 134.2ZM291.7 280.9L289.2 286L283.1 294.9L279.7 305.3L280.2 309.3L283 312.2L281.5 313.3L284.4 316.9L284.6 318.2L284.6 319.6L280.8 323.4L280.1 325.2L280 330L277.3 329.8L274.4 328.8L271.6 329.3L264.7 326.4L261.2 320.9L255.6 316.7L249.6 316.8L247 315.7L241.6 311.9L235.9 308.8L231.1 304.7L227.8 303.8L224.8 301.7L219.2 301.7L217.8 301L214.9 298.6L212.6 293.8L215.4 286.3L218.3 284.6L220.1 282.2L223 285.9L224.4 286.9L228 285.3L228.2 283.8L230.8 281.9L235.6 282.2L236.5 283.9L239.2 284.7L244 288L246.7 288.6L250.4 287.2L253.2 286.7L259.2 287.4L262.5 286.6L264.8 286.6L268 285.3L270.6 283.2L271.9 282.7L276.7 282.6L280.2 283.1L281.6 282.6L282.8 281.2L284.3 280.6L285.8 281.1L289.8 278.7L291.5 278.6L293.2 279.4L291.7 280.9ZM945 -48L945 624L794.9 624L791.8 616.5L785.8 606.9L783.1 605.2L774.2 603.8L771.7 605.9L771.5 603.3L773.3 599.5L775.6 591.8L776.2 584.9L780.8 560.5L780.5 558.3L777.4 562.1L774.5 567.3L771.5 583.8L767.3 596.6L766.8 604.6L766.1 607.5L761.5 615.5L757.1 613.5L749.9 606.5L745.8 599.8L741.3 595.5L737.1 589.8L735.9 585.8L736 583.1L734.1 576.7L732.7 573.6L727.5 566.8L726.1 563.2L723.8 559.3L721.9 550.4L719.8 544.8L717.5 546.4L717.9 548.8L715.9 552L714.6 555.8L715.6 558.9L719.8 563.6L720.7 565.7L721.7 570.1L721.5 576.3L722.2 578.3L725.3 582.8L728.3 589.9L731.3 593.9L735.9 601.3L740.1 606.4L743.3 608.8L744.6 611.3L744.7 620.6L746.3 624L-37.8 624L-37.8 332.7L-35.4 332.8L-29.1 328.3L-25.9 326.9L-12.1 326.6L-5.6 323.3L19.1 323.3L22.1 324.4L25.1 326.2L30.2 330.3L32.6 331.3L35.9 330.4L43.5 326.4L52 324.3L56.6 322L58.6 318.6L62.6 317.3L64.9 319.9L73.8 322.6L79.2 321.8L81.6 321L80.8 317.1L86.5 318.1L90.9 320L95.6 323.8L98.6 324.6L104 322.9L115.3 322L121.5 320.1L127.5 315L129.6 313.8L143.4 309.1L147.1 310.1L145.7 313.2L146.9 315.7L148.5 314.2L148.1 311.9L153.4 311.9L156.2 313.4L156 318.9L159.6 324.3L158.6 327L161.6 328.6L164.2 326.7L165.6 323.8L170.5 322.2L175.2 318.1L177.8 317.7L178.3 321.1L179.6 324.1L177.8 325.1L175.6 328.2L171.3 336.2L167.4 338.6L164.4 341.7L163.5 343.8L163.2 346.4L164 350.9L166.1 355.6L168.6 358.4L171 359.3L176.5 363.7L176.4 366.3L177.2 369.5L177.5 373.3L179.4 376.3L175.3 382.9L173 387.7L168.6 394.3L164.7 398.5L156.3 404.9L152.8 409.2L152.2 411.5L152.4 414.2L155.2 420.8L158.9 424.7L162.6 426.8L169.1 425.9L169 428.5L169.4 431.5L173.9 430.9L175.3 427.9L178.6 430L180.2 436.2L182.9 438.1L183.2 438.8L181.5 440L184.9 441.3L186.5 440.8L193 444.2L196.9 445L208.7 452.5L212.3 453.5L220.6 454.4L230.3 451.3L233.9 450.7L240.4 453.6L243.2 454.4L247.9 454.7L256 457.3L258 458.2L262.7 462.4L264.9 463.7L281.6 467.5L283.9 470L286.3 474.9L286.4 480.9L289.7 491L295 498.4L298.1 500.4L305.5 503.5L313.7 504.7L322.1 505.2L336.4 509.4L348.5 514.3L351.5 516.8L357.6 519.2L369.7 530.7L376.4 534.7L381.2 535.5L385.3 534.8L392.9 530.8L395.9 528.4L403.6 518.4L406 513.2L407 509.5L406.7 505.8L405.8 502.4L403.7 498.9L402.2 494.2L401.4 485.8L402.6 480L404 476.5L406.3 473L412.5 466.2L418.9 461.4L430 455.2L436.4 455.1L439.1 454.4L444.4 450L446.6 449.8L449.6 450.9L458.4 450.6L462.2 451.8L466.8 454.6L472.6 456.3L481 460.2L482 465.7L481.5 469.4L486 473.2L498.9 474.9L501.5 475.9L505 478.8L507.3 479.7L516.1 480.1L521.2 479.5L526.1 480.5L527.9 481.5L529.8 483.7L534.9 494.9L538.8 495.6L551.7 492.2L566 495.6L573.8 496.9L585.8 499.9L593.2 505.2L595.3 505.9L600.5 505.8L604 508.9L617.8 510.4L625.1 513.8L629.3 516.6L631.8 517.4L634 517.3L640.8 514.3L644.9 511.7L653.4 504.7L656.4 503.5L660.8 503.7L665.2 497.4L669.6 496.9L678.4 493.9L677.4 495.3L669.4 498.7L672.8 499.1L680.4 497.2L681.7 493L682.5 492.7L685.3 493.2L693.6 497.3L695.7 497.4L702.8 494.7L704.7 495.9L709 501.1L707.5 501L702.9 496.5L702.5 498.8L699.9 502.7L703.1 504.3L705.8 504.9L708.2 509L710.8 508.2L712.7 505.6L711 502.6L711.9 502.5L719 508.8L720.8 509.8L722.8 509.7L727.2 508.2L728.3 508.4L734.1 506.6L735.7 509.3L740.3 507.8L747.6 507.8L753.6 506.2L760.5 502.3L765.7 496.5L768.2 493L773.1 483.3L776.2 473.7L779.2 460.3L783.1 449L784 445.3L786.3 439.7L787.5 435.4L789.7 431.9L794.1 419.8L796.7 415L797.6 408L801.5 402L804.5 400.2L805.8 398.5L805.8 395.9L803.8 388.7L803.6 385.7L803.6 382L805 376.8L803.9 370.6L800.5 365.7L802.4 356.8L805.3 352.1L801.6 342.1L803.5 339L811.2 330.9L810.9 326.2L807.6 322.9L804 324.9L801.4 327.1L799.7 327.6L797.8 328.8L796.9 331.1L794.8 332.9L791.1 333.6L785.7 331.7L779.8 328.8L776.4 326.4L773.7 325.9L771.2 326.9L763.5 332.7L756.6 341.1L754.8 342.6L748.3 346.2L743.9 347.4L742 347.1L733.3 348.7L729 348.9L725.6 350.8L719.1 348.8L715.1 346.1L712.7 343.4L708.9 337.6L706.1 334.9L700 332.4L689.2 326.4L686.4 325.7L671.5 324.3L669.8 326.5L669.3 335.2L667.9 337.6L667.4 342.1L666.5 343.4L664.9 344.2L661 342.2L657.3 344L649.9 346.6L647.3 347L638.8 343.7L635.6 341.6L633.6 339.3L632.9 335.3L631.6 333.1L631 329.8L629.3 329.1L627.4 330.4L625.4 330.4L622.9 329.6L617 326.3L612.5 326L609.8 330.1L607.6 331.3L605.3 331.7L605.1 330.6L607 327.9L599.9 328.4L596.2 330.4L593.3 330.1L591.1 329.2L591.4 328.1L595.5 326.8L603.1 326.1L605 325.4L606.9 322.6L610.5 320.1L611 319.1L596.4 319.8L588.4 319.4L587.5 320.6L586.2 320.8L585.9 317.4L587.2 315.9L588.9 316.1L593.1 314.8L592.7 312.1L589.7 310.2L589.1 309.1L586.9 308.8L585.1 307.6L584.7 304.3L583.4 300.7L581.3 298.9L581.6 298L585.3 296.8L586 291.8L585.5 288.7L583.6 288.4L578.2 286L576.6 286.2L574.8 283.6L571.6 281.7L569 283.2L562.8 280.2L561.7 279.1L563.1 276.2L564.9 276.2L565.2 273.9L563.8 270L564 268L565.5 267.5L567.3 267.8L569.2 270.2L569.8 272.4L569.4 274.6L570.6 276.7L571.4 277.3L571.9 275L572.8 274.6L573.8 275.6L576.1 276.1L582.1 274.7L583.2 273.6L578.8 273.7L577.3 272.6L575.5 270.2L573.7 265.3L574.3 264.4L577.3 263.2L579.9 259.6L577.6 258.1L576.2 258.4L574.9 257.2L574.8 255.6L575.8 254.2L575.9 252.3L571.6 246.7L572.3 245.1L577.4 239.4L577 238.4L575.2 238L566.6 239.3L563.2 240.5L557.2 241.1L556.8 239.3L557 237.8L558.3 235L558.2 228.1L559 224.3L562.3 223.2L566.4 217.7L573 211.2L579.9 211.3L582.6 209.5L586.7 209.4L588 211.9L591.6 213.8L598 213.5L601 211.8L598.1 208.6L599 207.7L601.6 207.6L604.5 208.3L604.7 209.1L603 211.8L603.9 212.2L612 211.1L620.7 211.9L623.4 211.5L630.2 211.5L631.4 210.4L624.6 206.9L628.9 203.8L642.8 201.3L651.3 200.4L651.4 199.7L639.2 198.1L636.5 196.9L632.9 194L631.2 191.8L632.4 186.3L633.7 185L638.1 184.7L653.1 187.2L663.9 185.7L675.6 189.3L686.8 188.6L689.2 187L692 181.8L707.8 173.1L713.3 168.7L719.3 166.2L729.4 163.5L738 159.8L740.4 159.5L760.8 161.2L774.9 161.4L781.3 158L785.1 159.1L784 161.4L784.3 163.5L786.5 166.6L788.7 168.7L795.3 171.7L804.4 169.2L807.7 170.2L810.9 178.3L813.4 181.2L816.6 183.2L819.2 183.6L821.2 181.6L822.7 180.7L826 180.4L831.4 183.2L833.3 186.1L842.5 188.3L850.9 189.5L854.5 192L866.4 194.4L870.9 194L878.3 191.5L892.7 188.6L902.3 192.6L905 193.1L907.2 192.7L910.4 193.8L913.9 193.2L924.5 188.6L927.8 185.9L931.4 185.2L934.5 183.6L942.8 178.5L945 175.8L945 140L943 136.4L935.6 133.5L933.9 130.2L928.3 126L920.4 124.1L918.9 123.3L912 118L904 112.8L895 104.7L890.3 99.3L874.9 86.8L872.9 85.8L864.7 84L861.3 82.6L853.1 73.6L849.4 74.8L846 74.5L844.1 73.7L841.9 72.5L840.5 70.8L838.8 67L836.8 64.9L830.2 61.8L822.8 60L822.2 59.2L822 58.1L828.4 56L830.1 54.7L824.6 52.1L828.2 50.3L831 51.7L834.2 54.3L837 55.3L838.3 54.1L847.9 51.9L848.5 50.2L848.5 48.3L847.6 48.5L847 48L847 45.9L848.5 43.1L852.8 38.4L855.1 32L857.2 30.5L858.6 31.5L858.8 34.1L861.4 29L866.9 29.5L869.2 29.1L864.8 24.2L858.8 19.4L856.3 19.7L854.6 19L852 15L850.9 11.6L856 12.2L860.8 9.9L862.6 9.6L869.4 10.7L869.1 8.6L867.9 6L872.7 4.1L876.9 3L885.2 -0.8L888.8 -1.4L889.4 -3.4L886.9 -8.6L882.6 -8.7L880.2 -5.6L873.7 -4.6L870.7 -4.8L873 -6.8L875.3 -7.5L876 -8.4L871.3 -7.6L869.1 -5.6L861.2 -2.6L852.4 -3.1L845.3 -2.4L840.2 2.7L837.1 2.6L832.8 4L829.9 5.6L826.4 9.1L823.8 7.6L820.5 7.6L817.3 8.6L813.4 10.9L811.3 11.4L807 10.7L802 12L791.3 19.8L787.7 25.5L784.5 28L782.6 28.7L781.6 28.6L788.2 23.1L788.6 20.1L787 17.9L782.8 23.5L777.4 25.9L777.6 32.4L781.8 41.6L787.8 49.7L790.6 52.7L792.8 53.9L795.3 54.1L800.1 51.5L802.2 51.1L806.7 52.1L808.4 50.4L810.7 49.5L813.7 49.4L820.9 51.4L817.8 56.6L816.3 61.9L812.2 63.2L807.8 63L803.1 63.8L798.3 60.7L795.6 60.2L793.1 60.8L790.2 64.7L785.1 67.3L783.4 70.3L778.3 69.6L774.1 70.2L767.8 72.9L763.1 78.8L757.9 82.5L753.7 83.6L749.8 83.2L747.3 82.1L742.1 78.3L744.1 74.2L746.2 67L744.8 60.9L740.7 58L737.4 58.5L735.5 57.8L728.7 52.8L725.1 52.5L721 53.5L719.5 52.8L718.4 51.1L726.4 45L734.4 40L737.9 39.5L742.6 37.2L747.6 33.7L745.8 28.9L741.6 30.2L737.4 28L735.9 26.3L729.3 28L725.7 27.8L717.6 29.3L713.9 27.8L706.5 23.6L703.8 22.8L701.3 23L700 21.6L701.7 20.9L705.4 20.3L705.9 19.6L705.8 18.2L701.9 17.2L698.4 16.9L694.4 14.2L698.4 14.2L702.5 15.3L708.9 15.7L714.7 16.8L720.2 12.3L714.6 13.9L708.8 12.9L706.8 11.5L704.9 9.3L704.2 6.9L704.7 4.6L704.1 0.6L701.5 -5L699.5 -6.8L703.4 2.4L703.1 8.9L702.4 11.2L700 11.8L693.8 10.7L694.6 7.1L693 8.4L690.5 11.9L688.4 12.4L683.9 12L675.3 14.4L673.4 20.3L671.7 23.5L668.1 28.6L660.8 36.2L650.7 40.6L647.2 39.8L645.9 40.9L645.2 42.2L645.2 44.8L646.9 46.7L648.3 53L646 64.6L644.1 69L631.2 71.7L632 70.5L631.2 66.4L632.4 64.8L629.5 64.2L628.3 65.1L627.3 66.6L628.1 70.1L626.2 73.1L626.1 75.6L625.3 76.7L625.1 77.9L627.2 77.6L626.3 79.8L622.4 84L621 86.5L621.4 96.5L619.7 102.5L618.9 112L616.5 115.6L612.9 114.3L608.1 115.3L605.7 119.4L603 122.1L602.2 127.3L602 136L600.2 137.1L598.6 137.4L591.8 145L595.7 147.2L597.4 148.8L604.3 158.5L605.1 161L604.5 164.6L606.1 168.7L609.8 174.2L613.5 177.1L628.6 184.1L631.5 184.7L629.9 190.1L628.9 191.7L624.5 192.8L612.2 189.7L609.1 189.4L607 190.1L602.9 192.3L598.4 191.6L592.2 192.8L590.4 197.1L586.1 202L578.9 205.9L573.8 208.1L566.2 215.6L562.7 220.1L559.5 221.6L561 217.5L560.8 213.9L565.7 209.8L572.6 206.6L574.4 203.9L563.5 204.6L557.1 204.4L554.7 199.4L550.8 197L541.7 195.6L537.4 193.8L535.5 194.2L531.8 192.2L529.3 193.1L523.9 196.6L521.1 196.2L518.1 194.1L516.1 193.7L513.7 194.8L509.9 198.8L506.1 200.8L502.6 200.1L498 200.1L497.5 202.3L500.9 206.6L499.7 208.6L500.6 210.6L504.8 210.9L509.3 213.5L511.3 216.3L512.6 219.3L508 215.1L501.8 212.5L499.5 212.2L497.2 213.4L496.9 214.8L503.2 220.3L504 223.2L502.6 225.1L499.8 223.3L495.6 216.8L489.6 215.6L488.6 216.9L490.6 221.6L495.8 225.3L494.6 226.4L488.7 224.3L487 221.1L486.7 217.1L476.2 211.2L475.1 208.3L476.1 207.2L476.9 205.1L474.1 205.5L472.3 206.8L469.4 208.1L469.8 212.3L468 220.2L468.5 222.8L474.7 230.4L476.8 235.9L478.2 237.9L481.4 240.3L484.7 244.5L486 246.8L487 250.4L484.3 252.7L482.7 252.8L481.9 251.7L483 249.3L482.9 247.7L478.6 245.4L476.8 246.2L474.8 247.7L476 250.6L477.2 252.4L478 255L480.5 254.8L477 257.7L473.9 259.2L468.6 259.5L468 260.2L471 260.8L473.1 262.4L479.3 264.3L482.3 266.6L485.2 266.8L488.1 271.2L493.2 272.3L496 276.7L499.9 277.6L503.2 279.2L504.2 280.7L504.6 283.5L505.5 295.2L505.4 297.3L504.5 298.3L503.3 298.3L500.9 295.1L492.4 286.9L491.5 286.9L489.4 288.3L483.7 289.3L480 291.1L479.7 291.9L482.5 294.6L482.5 297.1L483.8 300.2L485.4 300.9L487.6 300.9L488.7 301.4L489.1 302.7L491.2 305.2L491.1 305.9L485.1 307.9L482.9 309.3L481.3 308.3L481.2 305.9L477.3 303.4L475.1 302.9L473.1 301.3L471.9 302.7L472.9 307.4L475.1 310.7L480.3 324.7L480.7 327.2L479.9 331.4L482.9 337.7L481.5 337.6L478.4 335.1L474.6 330L473.2 326.8L471.7 326.6L469 327.1L465.9 333.8L466 337.7L463.1 335.6L463.1 329.6L459.4 323.8L457.7 323.1L455.6 319.1L452.5 320.3L451.9 326.3L450.9 328.4L447 324.4L443.1 317.4L443 313.6L445.8 310.1L445.5 307.6L442.8 302.7L438.9 299.5L436.7 298.6L435.7 295.2L431.9 292.7L431.5 291.4L436.1 287.1L438.6 281.7L439.8 281.4L442.2 282.7L445 282.4L447.3 279.2L449.2 277.5L452.5 277.7L459.7 281.9L467.6 284.4L471.5 286.5L473.8 288.6L476.8 289.3L476.1 286.4L477.7 285.6L481.9 285.7L483.4 283.7L482.6 282.4L478.7 281.1L477.1 281.6L474.6 280.5L472.6 278.7L468.3 276.9L464.3 273.9L463.3 275.7L461.6 276.6L459.4 276.7L452.7 274.8L448.7 276.3L440.3 277.7L438.2 274.9L437.4 272.8L436.8 272.4L436.7 274.4L436 276.1L433 276.9L431.2 275.7L428.2 267.1L425.2 263.2L422.8 262.2L422.5 260L422.8 258.3L425.7 257.9L430.2 259.7L431.2 259.3L432.2 258.5L431.4 255.1L426.4 254.8L422.9 255.7L421.2 254.9L415 247.8L410.8 245.6L408 238.6L405.7 235.5L403.2 233.3L403.1 230.4L399.5 222.6L390.2 217.3L388 214.9L386.1 210.9L387.1 210.9L389.1 212L389.6 211L386.5 202.8L389.6 194.1L389.5 188.6L390.1 184.5L389.1 178.4L390.5 174L392.5 171.5L392.6 166.8L389.8 164.6L386.6 164.2L382.7 161.6L381.1 158.1L375.3 152L368.7 147.9L368.4 147.2L369.1 145.8L365.8 146.1L356.8 139.7L348.4 134.5L342.3 133.2L334.1 129L328.7 127.5L333.2 127.2L345.9 132.8L344.4 131.3L341.1 129.2L335.9 124.3L330.9 121.2L325.2 115.5L317.6 113.2L312.3 110.6L305.7 111.8L303.6 111.8L302 111.3L301 109.8L301 107L289.8 98.9L281.9 90.5L280.3 87.8L284.4 86.7L289.1 87.3L284 83.7L276.7 76.7L274.6 73.4L274.3 69.8L274.8 64.9L273.6 61.4L267.9 56.8L265.8 54.5L261.8 53.1L259.9 53.2L258.8 55L258 58.9L251.2 69.2L248.5 69.2L242.6 60.5L239.8 48.6L242.9 46.8L246.5 43.9L242.6 39.3L240.9 39.3L238.5 41.3L232 39.3L227.6 43.6L224.4 44.5L220.8 46.6L214.1 49.2L212.5 49L215.1 46.6L214 46.5L208.5 49.7L207.2 56.3L208.8 57.3L211.5 62.7L214.8 65L213.3 69L211.3 70.5L209.6 69.3L208.6 69.3L207.9 72.9L209.3 82.2L211.6 88.8L213.9 91.7L219 96.2L224.5 98.5L234.3 106.1L239.6 108.4L241 109.7L244.3 115.5L247.1 122.2L250.1 132.7L252.2 138L256.6 143.8L265.7 152.2L273.8 158.3L281.5 162.1L287.4 162.8L301.5 162L304 162.3L306.6 163.3L307.1 166L306.2 167.7L300.2 172.1L299.9 175.6L302.7 178.1L316.3 184.6L330.2 190L334.5 192.8L339.5 197.1L351.7 203.1L353.7 205.9L361.1 212.1L364.4 216.9L365 220.7L361.5 229.7L358.3 228.7L354.8 226L349.4 215.1L339.6 213.9L334.1 211.2L333.9 210L332.2 207.9L328.4 207.6L325.8 209.3L322.7 213.6L319.3 219.6L315.7 228.5L315.6 232.1L317.5 235.6L323.2 237.5L327.5 240.6L330.4 243.8L330.7 251.6L332 256.1L330.1 258.6L326.4 257.9L321.5 259.6L317.9 262.4L316.5 265.1L316.8 272.2L316.1 274.9L309.5 280L306 285.2L303.9 289.9L295.4 289.9L293.5 286.9L293.4 282.4L294.9 279.6L298 278.3L300 272.5L299.3 268.3L301.7 265.2L307.4 263.7L307.7 257.9L305.1 255.2L303 244.7L298.7 235.9L296.4 228.2L294.7 224.3L292 222.3L287.1 222.3L284.6 221.8L275.9 216.3L275.4 215.5L275.4 214.1L276.8 211.9L275.9 209L274.8 206.2L273.2 203.8L271.3 202.6L266 203.9L263.6 203.7L261.7 204.8L260.6 204.8L263.6 200.7L262.8 199.7L259.8 198L254.6 197.5L253.9 198.6L253.1 198L253.2 196.2L248.4 187.8L245.3 184.5L243.7 183.8L240.8 184.6L235.9 183.1L233 182.7L229 184.2L227.8 183.5L227.4 182.4L223 178.9L217.5 177L206.8 166L203.5 161.9L196.7 157.4L192.5 150.8L188.9 148.4L183.8 146.5L179.9 147.5L179 146.7L181 145.4L180.7 142.9L174.9 136.3L171.4 134.3L169 130.1L167.4 129.3L164.2 129.1L164.6 123.5L164.3 121.5L162.5 116.1L159.3 111.6L157.4 100.7L155.9 97.7L152.4 95.3L144.4 92.8L133.3 85.8L130.9 85.7L124.2 83L120.1 82.5L114.7 84.9L108.2 91.6L102.8 98.6L100.9 100L94.1 102.3L88 103.5L82.2 105.7L80.1 106.9L72.2 114L68.4 116.1L67 119.6L64.8 121.6L62.8 122.6L58.1 123.6L53.3 125.7L51.2 124.8L45.6 124.8L42.1 122.3L35.4 120.7L33.2 117L28.3 116.8L27.1 116.3L26.7 113.8L23 114.3L21.3 115.4L20.4 115L19.8 115.2L19.9 115.9L17.9 116.1L9.5 113.4L5.7 112.7L4.1 111.9L2.8 110L1.3 109L-2.2 110L-5.4 113.2L-18.7 121.8L-23.9 130.7L-24.1 133.2L-22.9 141.1L-20.2 145.2L-19.2 148.2L-17.9 149L-17.5 150.7L-21 151.8L-21.4 154.8L-19.6 156.5L-19.2 157.3L-18.9 161.8L-25.1 167.5L-37.8 174.4L-37.8 -48ZM259.9 351.1L258.4 351.6L256.5 350.1L258.6 349.6L259.7 350L259.9 351.1ZM250.4 201.4L249.3 201.7L248.7 201.3L248.3 200.8L248.8 199.6L251.1 200.3L250.4 201.4ZM202.9 327.8L201.7 328.1L200.1 327.1L200.3 325L202.3 325.7L202.9 327.8ZM318.8 128.1L323.5 129L326.9 128.6L330 129.1L332.3 130.7L327 130.3L323.8 131.3L321 130.8L319.9 130.1L318.8 128.1ZM332.5 124L330.7 124.3L319.6 124.1L316.3 123.4L311.8 121.2L315.6 120.7L318.9 121.2L320 122.4L332.5 124ZM322.2 119.3L318.2 119.4L314.7 118.8L313 117.8L313.7 115.6L317.6 115.8L323.5 116.8L324.8 118L322.2 119.3ZM705.9 25.5L709.4 27.1L705.8 26.6L698 25.1L694.6 23.7L693.7 22.2L693.2 20.1L696.5 23.3L705.9 25.5ZM600.9 354.3L598.4 354.8L597.6 353.4L598.7 349.8L597.6 346.5L599.2 345.2L600.2 343.2L602.6 340.9L610.7 338.1L610.6 340.2L608.4 345.3L606.5 347.8L607 349.9L604 350.5L600.9 354.3ZM584 369.1L583.1 370.9L582.1 369.4L582.6 367.7L581.4 364.9L583.6 360.8L583.6 358.8L585.2 357.7L584.8 361.2L583.6 363.9L584.8 366.1L585.5 368.7L584 369.1ZM601.2 334.3L600.7 334.8L599.4 333.3L599.4 332.6L601.3 331.5L601.2 334.3ZM580.1 321.3L577.6 321.8L578 319.2L576.8 317.2L580.7 319.9L580.1 321.3ZM578.3 328.7L577.6 328.8L578.5 327.2L581.1 325.1L585 323.2L586.3 323.1L588.5 324.2L584.5 326.1L583.4 327.1L580.5 327.3L578.3 328.7ZM543 321.1L540.7 322.3L539.2 320.5L538.3 317.7L542.5 313.7L543.5 314.1L544 315.1L543.9 318.7L543 321.1ZM536.2 317.8L534.2 320.3L532.6 320L531.8 318.9L532.9 316.6L535.1 315.2L536.1 315.6L536.2 317.8ZM541.4 339.4L540.2 341.1L538.6 340.5L539.6 339.1L539.5 336.8L541 338.1L541.4 339.4ZM538.8 330.4L538.4 330.9L535.7 327.7L536.7 326.7L539.5 329.1L538.8 330.4ZM575.2 294.1L578.3 295.1L580.6 295.3L581 297.3L579 297.6L575.7 299.4L574.3 299L572.6 297.4L569 296.8L570.5 295L573.1 294.1L575.2 294.1ZM555.2 303.1L554 303.2L554.3 301.9L556.6 299.7L559.7 299.6L563.2 298.4L561.9 300.2L559.6 301.8L555.2 303.1ZM550.9 326.7L547.9 326.7L550.3 325.6L554.4 322L556.1 323.1L554 323.8L550.9 326.7ZM566 333.3L564 334.1L562.8 335.7L561.2 334.5L561.2 332.9L562.9 333.4L564 332.6L563.7 331.6L565 332.1L566 333.3ZM513 301.6L511.2 303.1L511 300.8L512.1 298.3L513.5 298.2L514.1 299.2L513 301.6ZM515 309L513.5 309.9L514.1 307.7L513.3 306.6L514.9 304.8L516.1 306.9L515 309ZM517.5 327.6L517.4 330.1L512.2 331L513 328.2L514.7 329.2L515.6 328.1L517.5 327.6ZM527.8 304.2L527.7 307.6L526.9 307.5L526.6 307L526.9 303.7L527.8 304.2ZM529 295.7L528.2 297.8L526.3 295.3L524.1 293.6L523.3 292.1L522 291.2L521.7 289.2L523.9 288.3L525.6 290.8L528.1 291.1L527.9 292.6L529 295.7ZM535.7 300.8L534.7 302.9L533.1 302.6L530.5 300.3L529.1 298.3L530.2 298.2L531.5 299.3L534.8 299.8L535.7 300.8ZM522.1 322.5L521.7 322.7L521 321.3L521.1 319.3L522 319.2L523.2 321.6L522.1 322.5ZM556.8 281L554.3 282.8L551.7 280.2L551.3 279.4L553.2 278.3L554.2 276.7L553.4 274.7L550.6 271.7L550.5 269.6L554.7 268.7L557.2 270.6L558.4 270.7L558 272.4L558.3 278.3L557.2 279.1L556.8 281ZM564.8 245.4L564.3 247.3L567.8 250.5L568.9 252.5L569.4 254.4L569.1 255L566.7 253.6L567 255L568.2 256.2L566.2 256.9L564.2 256.8L558.4 255.2L557.2 253.4L560.6 250.7L561.3 249.7L558.9 249.8L556.2 252.9L552.1 251.6L550.4 249.6L552.2 246.8L555.1 246.9L556.6 246.3L558.5 245.4L558.6 244.1L563.1 243.7L564.8 245.4ZM498.5 252.3L497.4 253.4L495.6 252.9L493.7 249.3L498.5 252.3ZM501.2 250.9L500 251.3L501.2 248.8L503.3 247.4L502.4 249.6L501.2 250.9ZM521 262.1L517.6 262.8L518.2 261.4L515.6 259.6L516.2 256.6L518.2 257.8L518.7 259.9L521 262.1ZM546.4 210.3L543.6 211.2L540.5 208.6L543.5 207.5L545.9 209.2L546.4 210.3ZM540.2 224.6L538.6 227.5L538.2 230.1L536.7 230.2L535.8 229.7L535.5 227.4L534.8 227.4L533.8 229.4L532.4 229.6L530.8 228.7L530.7 224L535.1 223.8L536.4 225.4L538 224.5L538.6 223.5L540.6 222.9L540.2 224.6ZM523.5 204.3L520.3 205.4L517 203.3L517.1 202L519.7 198.6L522.1 198.8L523.5 200.6L523.9 201.4L523.5 204.3ZM553.6 219.6L547.8 220.6L546.1 219.7L547.9 217.7L552.3 216.4L553.8 218.3L553.6 219.6ZM183.4 391.9L179.5 394.2L180.3 392.2L182.8 389.8L183.5 390.3L183.4 391.9ZM175.3 424.9L172.8 426L169.4 424.4L170 419.5L174.4 419.4L176.9 421.7L177.3 422.9L175.3 424.9ZM161.2 132.6L162 133.8L161.5 135.3L161.8 137.2L159.6 135.6L156.4 136.4L154.5 136.2L154 134.9L154.4 134.1L160.2 133.7L161.2 132.6ZM112.9 253.8L111.4 257L109.9 254.8L109.8 252.8L110.1 252.3L112.9 253.8ZM108 190.7L107.2 192.2L106 192.1L107.5 188.8L108.9 188.1L109.4 188.7L108 190.7ZM7.4 229.1L6.9 229.4L-0.8 225.7L-3.3 225.3L-4 224.8L-3.7 222L1.5 221.6L5.7 222.9L8.1 227.3L7.4 229.1ZM266.3 356.7L265.4 357.8L263 357.7L260.9 356.1L260.9 352.7L263.3 353.4L266.3 356.7ZM283 94L283.4 95.1L280.3 93L278.8 91L283 94ZM272.4 64.7L269.3 65.4L267.8 64.2L267.5 63.2L264.9 62.8L263 60.8L265.2 59.3L266.4 56.8L270.7 61.9L272.4 64.7ZM272.9 71.7L273.6 73.1L271.2 71.8L269.1 71.3L268.7 70.4L269.4 68.8L271 69L272.9 71.7ZM281.9 85.2L281.3 86.1L275 80.5L274.3 78.6L270.7 73.7L273.6 76.2L274.6 76.5L283.3 84.8L281.9 85.2ZM282 98.5L282.3 99.3L280.6 99L274.5 92L273.8 90.6L276 92.2L282 98.5ZM286.5 96.8L288.3 99.2L286.6 98.7L285 97.2L284 95.7L286.5 96.8ZM264.3 74.9L264.1 76.1L262.6 74.6L259.9 67.2L259.6 65.9L260.6 64.6L260.6 63.3L259.2 59.3L260.3 58.7L261 58.6L261.9 63L263.8 65L263.4 68.2L264.3 74.9ZM343 135.4L346.3 137.6L336.2 134.7L338.5 134.4L343 135.4ZM418.6 275.7L419 279.4L420.7 280.1L423.1 283.4L422.9 285.2L422.3 285.7L418.4 284.2L417.5 284.9L416.4 284.6L415.8 282.1L414.6 280.5L413.1 281.9L412.1 282.2L412.1 280.9L413.5 277.2L414.2 276.6L415.4 277.8L416.3 277.4L417.4 272.8L418.6 275.7ZM425.6 294.2L428.2 297.3L426.2 296.6L423.8 298.7L421 296.2L418.8 292.7L420.6 290.3L422.3 292.7L424.3 293.1L425.6 294.2ZM420.5 268.5L417.9 268.7L417.2 269.3L417.3 266.8L418.2 263.7L419.2 261.8L420.7 261L421.3 262.4L421.3 267.6L420.5 268.5ZM422.3 277.4L421.1 277.8L418.9 272.6L420.2 272.8L420.9 273.6L421.2 275.2L422.3 277.4ZM405.2 242.2L405.7 243.9L402.6 242.8L400.3 241.2L398.4 237.3L394.3 232.8L394.3 231.4L395.9 230.4L399.1 229.8L401.3 231.2L401.6 232.1L399.3 234.6L400.8 236.2L401.4 239.8L402.1 240.9L405.2 242.2ZM492.7 290.4L491.7 291.2L490.6 291.1L489.4 290.2L491 288.3L492.3 288.9L492.7 290.4ZM480.1 345.9L479.9 347.3L477.3 346.4L476.6 344.9L476.4 341.8L477.6 339.7L481.2 344.1L480.1 345.9ZM539.4 306.6L536.9 306.8L537.1 304.3L538 303.7L540.8 304.9L540.7 305.7L539.4 306.6ZM517.2 316L516.2 316.5L514.7 315.8L515.1 314L516.1 313.3L517.3 313.8L517.2 316Z";
  const RIVERS = [[[31.2, 30.1], [31.25, 29.5], [31.2, 29]], [[38, 39.2], [38.6, 37.6], [38.2, 36.8], [39, 36], [40, 35.1]]];
  const curve = (pts, closed) => {   // Catmull-Rom through the points, as cubic Béziers
    const P = pts.map(([lon, lat]) => [WX(lon), WY(lat)]), n = P.length, at = k => P[closed ? (k + n) % n : Math.max(0, Math.min(n - 1, k))];
    let d = `M${P[0][0].toFixed(1)} ${P[0][1].toFixed(1)}`;
    for (let k = 0; k < (closed ? n : n - 1); k++) {
      const [a, b, c, e] = [at(k - 1), at(k), at(k + 1), at(k + 2)];
      d += ` C${(b[0] + (c[0] - a[0]) / 6).toFixed(1)} ${(b[1] + (c[1] - a[1]) / 6).toFixed(1)} ${(c[0] - (e[0] - b[0]) / 6).toFixed(1)} ${(c[1] - (e[1] - b[1]) / 6).toFixed(1)} ${c[0].toFixed(1)} ${c[1].toFixed(1)}`;
    }
    return d + (closed ? " Z" : "");
  };
  const lbl = (lon, lat, text, cls, rot) => `<text class="${cls}" x="${WX(lon).toFixed(0)}" y="${WY(lat).toFixed(0)}" text-anchor="middle"${rot ? ` transform="rotate(${rot} ${WX(lon).toFixed(0)} ${WY(lat).toFixed(0)})"` : ""}>${text}</text>`;
  const WORLD = `<rect class="map-land" x="0" y="0" width="908" height="576"/>
    <rect class="map-sea" x="0" y="0" width="908" height="576"/><path class="map-coast" d="${WORLD_LAND}"/>
    ${RIVERS.map(r => `<path class="map-river" d="${curve(r, false)}"/>`).join("")}
    ${lbl(19.5, 34.4, "the Great Sea", "map-water")}${lbl(20, 36.2, "Adria", "map-water")}${lbl(34.5, 43.3, "Black Sea", "map-water")}
    ${[[14.8, 41.3, "ITALY", -55], [22.4, 41.6, "MACEDONIA"], [22.2, 37.4, "ACHAIA"], [28.6, 39.6, "ASIA"], [33, 39.3, "GALATIA"], [30.6, 40.7, "BITHYNIA"],
       [36.6, 40.5, "PONTUS"], [36.2, 38.6, "CAPPADOCIA"], [31.3, 37.6, "PISIDIA"], [34.3, 37.45, "CILICIA"], [37.6, 34.8, "SYRIA"], [35.9, 31.2, "JUDAEA"],
       [30.6, 29.7, "EGYPT"], [38, 30.5, "ARABIA"], [22.5, 31.5, "LIBYA"]].map(([lon, lat, t, rot]) => lbl(lon, lat, t, "map-region", rot)).join("")}`;
  const where = s => {
    const ll = s.match(/^@\s*(-?[\d.]+)\s+(-?[\d.]+)$/);
    if (ll) return [WX(+ll[1]), WY(+ll[2])];
    const p = PLACES[s];
    if (!p) { console.warn(`No place "${s}" on the world map`); return null; }
    return [WX(p[0]), WY(p[1])];
  };
  document.querySelectorAll("svg[data-world]").forEach(svg => {
    if (!svg.hasAttribute("viewBox")) svg.setAttribute("viewBox", "0 0 908 576");
    const u = svg.viewBox.baseVal.width / 908;   // keeps text and dots the same size on screen when cropped
    svg.classList.add("map", "world");
    svg.style.setProperty("--u", u.toFixed(3));
    svg.insertAdjacentHTML("afterbegin", WORLD);
    svg.querySelectorAll("path[data-via], path[data-journey]").forEach(p => {
      const via = p.dataset.via || JOURNEYS[p.dataset.journey] || "";
      const pts = via.split(",").map(s => where(s.trim())).filter(Boolean);
      p.setAttribute("d", pts.map(([x, y], k) => `${k ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" "));
      if (!p.hasAttribute("pathLength")) p.setAttribute("pathLength", "1");
    });
    const r = 7 * u;
    const towns = String(svg.dataset.towns || "").split(",").map(s => s.trim()).filter(Boolean).map(spec => {
      const [, name, mark, side] = spec.match(/^(.+?)([*!]?)(?::([lrtb]))?$/);
      if (!PLACES[name]) { console.warn(`No place "${name}" on the world map`); return ""; }
      const [lon, lat, own] = PLACES[name], x = WX(lon), y = WY(lat), g = 13 * u;
      const [tx, ty, anchor] = { l: [x - g, y + 6 * u, "end"], r: [x + g, y + 6 * u, "start"], t: [x, y - g, "middle"], b: [x, y + 2.2 * g, "middle"] }[side || own];
      return `<g class="map-town${mark ? " here" : ""}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}"/>` +
        (mark === "!" ? `<circle class="map-ping" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(r * 1.3).toFixed(1)}"/>` : "") +
        `<text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="${anchor}">${name}</text></g>`;
    });
    svg.insertAdjacentHTML("beforeend", towns.join(""));
  });

  // ================= Old Testament graphics =================
  // where deck.js lives, so the terrain maps can find their pictures and coastlines
  const ASSETS = (document.currentScript && document.currentScript.src || "").replace(/[^/]*$/, "");
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const f1 = n => n.toFixed(1);

  // ---------- Terrain maps ----------
  // svg.map[data-terrain="neareast" | "sinai" | "land"]: real shaded relief (elevation data from AWS Terrain Tiles, coast from Natural Earth),
  // with the green of watered land along the rivers. Every map is 1000 units wide (heights below); crop with your own viewBox and
  // text and dots keep their size. data-towns works as on the other maps, using OT_PLACES; data-regions="EGYPT, CANAAN" picks the
  // region names (each map has its own defaults; data-regions="" shows none). A path.map-route takes data-via (place names and
  // "@lon lat" waypoints) or data-journey (OT_JOURNEYS). On the land map, data-tribes="all" (or "Judah*, Benjamin*") colors the tribes.
  const OT_MAPS = {
    neareast: { box: [24, 50, 22, 40], h: 807.5,
      regions: { EGYPT: [30.4, 27.4], CANAAN: [35.55, 30.6], ISRAEL: [36.05, 32.75], JUDAH: [35.7, 31.25], MESOPOTAMIA: [44.9, 33.9, 40], ASSYRIA: [43.7, 37.0], BABYLONIA: [45.6, 31.9, 38],
        CHALDEA: [46.6, 30.5, 38], ARAM: [37.7, 34.5], SYRIA: [37.7, 34.5], ARABIA: [40.6, 29.2], "ARABIAN DESERT": [40.6, 29.2], ELAM: [48.0, 31.4], MEDIA: [48.3, 35.9], PERSIA: [49.2, 29.6],
        MIDIAN: [36.3, 27.7], EDOM: [36.2, 30.15], MOAB: [36.5, 31.3], PHILISTIA: [34.2, 31.2], "ASIA MINOR": [31.5, 38.6] },
      defaults: "EGYPT, CANAAN, MESOPOTAMIA, ARAM, ARABIAN DESERT",
      waters: [[30.5, 33.6, "the Great Sea"], [36.9, 24.6, "Red sea", 58], [42.45, 34.3, "Euphrates", 30, "r"], [44.05, 35.3, "Tigris", 62, "r"], [31.0, 26.9, "Nile", 78, "r"], [48.8, 28.9, "the Gulf", 40]] },
    sinai: { box: [29.5, 37, 26.8, 32.2], h: 827,
      regions: { EGYPT: [30.45, 29.0], GOSHEN: [31.55, 30.42], "WILDERNESS OF SHUR": [33.4, 30.85], "WILDERNESS OF PARAN": [34.2, 30.05], "WILDERNESS OF SIN": [33.5, 28.9], SINAI: [33.9, 29.1],
        MIDIAN: [36.1, 27.95], EDOM: [35.75, 30.4], MOAB: [35.95, 31.35], CANAAN: [35.05, 31.6], ARABIA: [36.3, 29.2], NEGEV: [34.75, 30.8] },
      defaults: "EGYPT, GOSHEN, MIDIAN, EDOM, CANAAN",
      waters: [[31.6, 31.85, "the Great Sea"], [34.35, 27.15, "Red sea", 60], [33.05, 28.95, "Gulf of Suez", 62], [34.47, 28.42, "Gulf of Aqaba", -74], [31.15, 29.2, "Nile", 82, "r"]] },
    land: { box: [33.9, 37, 30.4, 33.6], h: 1217.5,
      regions: { PHILISTIA: [34.42, 31.42, -60], PHOENICIA: [35.12, 33.45], GILEAD: [35.95, 32.3], BASHAN: [36.25, 32.85], AMMON: [36.25, 31.95], MOAB: [35.9, 31.25], EDOM: [35.65, 30.6],
        NEGEV: [34.75, 30.85], CANAAN: [35.05, 31.95], ISRAEL: [35.15, 32.45], JUDAH: [35.0, 31.45], SAMARIA: [35.12, 32.32], GALILEE: [35.35, 32.95], ARAM: [36.55, 33.4], SYRIA: [36.55, 33.4],
        "WILDERNESS OF ZIN": [34.75, 30.55], "WILDERNESS OF JUDAH": [35.3, 31.4, -80] },
      defaults: "PHILISTIA, GILEAD, BASHAN, AMMON, MOAB, EDOM",
      waters: [[34.32, 32.55, "the Great Sea", -70], [35.86, 32.86, "Sea of Chinnereth"], [35.5, 31.5, "Salt Sea", -86], [35.585, 32.3, "Jordan", -84, "r"], [35.75, 33.07, "waters of Merom"],
        [36.0, 32.12, "Jabbok", -20, "r"], [35.85, 31.42, "Arnon", 0, "r"], [35.2, 32.73, "Kishon", -40, "r"], [35.78, 30.98, "Zered", 0, "r"]] }
  };
  // [lon, lat, side the name goes on (l r t b), "m" for a mountain]. Places follow the usual identifications;
  // Mount Sinai is Jabal al-Lawz in Arabia and the crossing is at Nuweiba, after Ron Wyatt (Rick's choice; the map credits him).
  const OT_PLACES = {
    "Ur": [46.10, 30.96, "r"], "Erech": [45.64, 31.32, "r"], "Babel": [44.42, 32.54, "r"], "Babylon": [44.42, 32.54, "r"], "Nineveh": [43.15, 36.36, "r"],
    "Calah": [43.33, 36.10, "r"], "Asshur": [43.26, 35.46, "r"], "Mari": [40.89, 34.55, "r"], "Haran": [39.03, 36.86, "t"], "Carchemish": [38.01, 36.83, "l"],
    "Gozan": [40.04, 36.84, "t"], "Tadmor": [38.27, 34.55, "b"], "Hamath": [36.75, 35.13, "r"], "Riblah": [36.55, 34.45, "r"], "Damascus": [36.29, 33.51, "r"],
    "Shushan": [48.25, 32.19, "l"], "Achmetha": [48.52, 34.80, "l"], "Ararat": [44.30, 39.70, "l", "m"],
    "Tyre": [35.20, 33.27, "l"], "Sidon": [35.37, 33.56, "l"], "Zarephath": [35.30, 33.46, "l"], "Accho": [35.07, 32.92, "l"],
    "Memphis": [31.25, 29.85, "l"], "On": [31.31, 30.13, "l"], "Zoan": [31.88, 30.98, "l"], "Rameses": [31.82, 30.80, "l"], "Pithom": [31.96, 30.55, "l"],
    "Succoth": [32.10, 30.55, "r"], "No (Thebes)": [32.65, 25.70, "r"],
    "Nuweiba": [34.66, 28.98, "l"], "Mount Sinai": [35.31, 28.65, "r", "m"], "Ezion-geber": [34.98, 29.55, "r"], "Kadesh-barnea": [34.42, 30.69, "l"],
    "Mount Nebo": [35.73, 31.77, "r", "m"], "Mount Hor": [35.40, 30.32, "r", "m"],
    "Beersheba": [34.80, 31.25, "l"], "Sodom": [35.42, 31.10, "r"], "Zoar": [35.50, 30.98, "r"], "Salem": [35.23, 31.78, "l"], "Gerar": [34.61, 31.38, "l"], "Hebron": [35.10, 31.53, "l"], "Bethlehem": [35.20, 31.70, "l"], "Jerusalem": [35.23, 31.78, "r"],
    "Bethel": [35.22, 31.93, "l"], "Ai": [35.26, 31.92, "r"], "Shechem": [35.28, 32.21, "r"], "Shiloh": [35.29, 32.06, "r"], "Samaria": [35.19, 32.28, "l"],
    "Dothan": [35.24, 32.42, "l"], "Megiddo": [35.18, 32.58, "l"], "Jezreel": [35.33, 32.56, "r"], "Gibeon": [35.18, 31.85, "l"], "Gibeah": [35.24, 31.82, "r"],
    "Ramah": [35.23, 31.85, "r"], "Mizpah": [35.22, 31.88, "l"], "Anathoth": [35.26, 31.81, "r"], "Michmash": [35.28, 31.87, "r"], "Jericho": [35.44, 31.87, "r"],
    "Gilgal": [35.48, 31.84, "b"], "Kirjath-jearim": [35.10, 31.80, "l"], "Beth-shemesh": [34.98, 31.75, "l"], "Lachish": [34.85, 31.56, "l"], "Gath": [34.85, 31.70, "l"],
    "Ekron": [34.85, 31.78, "l"], "Ashdod": [34.65, 31.80, "l"], "Ashkelon": [34.55, 31.66, "l"], "Gaza": [34.45, 31.50, "l"], "Joppa": [34.75, 32.05, "l"],
    "Adullam": [34.97, 31.65, "r"], "En-gedi": [35.39, 31.46, "l"], "Arad": [35.13, 31.28, "r"], "Tekoa": [35.22, 31.63, "r"], "Tirzah": [35.37, 32.29, "r"],
    "Beth-shan": [35.50, 32.50, "r"], "Jabesh-gilead": [35.65, 32.40, "r"], "Mahanaim": [35.68, 32.18, "r"], "Ramoth-gilead": [36.00, 32.55, "r"], "Rabbah": [35.93, 31.95, "r"],
    "Heshbon": [35.80, 31.80, "r"], "Dibon": [35.78, 31.50, "r"], "Kir-hareseth": [35.70, 31.18, "r"], "Bozrah": [35.60, 30.73, "r"], "Dan": [35.65, 33.25, "r"],
    "Hazor": [35.57, 33.02, "r"], "Endor": [35.38, 32.64, "r"], "Shunem": [35.33, 32.61, "l"], "Gath-hepher": [35.32, 32.74, "r"],
    "Mount Carmel": [35.05, 32.70, "l", "m"], "Mount Tabor": [35.39, 32.69, "r", "m"], "Mount Gilboa": [35.42, 32.45, "r", "m"], "Mount Hermon": [35.86, 33.42, "r", "m"],
    "Mount Ebal": [35.27, 32.24, "t", "m"], "Mount Gerizim": [35.27, 32.19, "b", "m"]
  };
  const OT_JOURNEYS = {
    abraham: "Ur, @45.2 31.6, Babel, @43.4 33.6, Mari, @39.6 35.9, Haran, @37.16 36.2, Hamath, Damascus, @35.6 32.9, Shechem, Bethel, Hebron, @34.8 31.0, @33.6 30.9, @32.4 30.7",
    jacob: "Beersheba, Hebron, Bethel, Shechem, @35.6 32.9, Damascus, Hamath, @37.16 36.2, Haran",
    joseph: "Hebron, Shechem, Dothan, @34.95 32.2, @34.55 31.55, @34.1 31.25, @33.2 31.05, @32.4 30.75, Rameses",
    exodus: "Rameses, Succoth, @32.55 30.3, @33.2 30.0, @33.9 29.62, @34.35 29.27, @34.56 29.05, Nuweiba, @34.83 28.9, @35.05 28.78, Mount Sinai",
    "exile-israel": "Samaria, @35.6 32.9, Damascus, @36.9 34.6, @37.6 35.6, @38.5 36.45, Gozan, @41.6 36.6, Nineveh",
    "exile-judah": "Jerusalem, @35.55 32.5, Damascus, Riblah, Hamath, @37.4 35.9, Carchemish, @38.6 36.0, @39.9 35.4, Mari, @41.6 34.35, @42.9 33.9, @43.9 33.1, Babylon",
    "return": "Babylon, @43.9 33.1, @42.9 33.9, @41.6 34.35, Mari, @39.9 35.4, @38.6 36.0, Carchemish, @37.4 35.9, Hamath, Riblah, Damascus, @35.55 32.5, Jerusalem"
  };
  const OT_CREDIT = { exodus: "Route after Ron Wyatt: the crossing at Nuweiba, Mount Sinai in Arabia (Galatians 4:25)" };
  // little rivers and the old lake of Merom (drained in the 1950s), as lon/lat points
  const OT_STREAMS = {
    land: [[[36.05, 32.02], [35.9, 32.17], [35.75, 32.2], [35.58, 32.18]], [[36.05, 31.45], [35.85, 31.45], [35.7, 31.47], [35.585, 31.46]],
      [[35.42, 32.55], [35.3, 32.62], [35.17, 32.71], [35.08, 32.8]], [[35.95, 30.95], [35.75, 31.0], [35.55, 31.05]]],
    sinai: [[[33.95, 30.0], [33.85, 30.6], [33.8, 31.13]]]
  };
  const OT_LAKES = { land: [[35.613, 33.08, .025, .035]] };
  // The tribes (Joshua 13–19), drawn from seed points: each tribe owns the land nearer its seeds than any other tribe's,
  // west or east of the Jordan. [name, color, label lon/lat, seeds]
  const TRIBES_WEST = [
    ["Asher", "#d0743c", [35.17, 33.1], [[35.18, 33.15], [35.12, 32.95], [35.25, 33.38]]],
    ["Naphtali", "#3f8f6b", [35.5, 33.12], [[35.5, 33.15], [35.48, 32.92], [35.55, 33.38]]],
    ["Zebulun", "#c9a227", [35.27, 32.79], [[35.28, 32.78]]],
    ["Issachar", "#7b5ea7", [35.43, 32.62], [[35.45, 32.6], [35.36, 32.64]]],
    ["Manasseh", "#4f7fb5", [35.17, 32.4], [[35.1, 32.45], [35.3, 32.36], [35.45, 32.3], [34.95, 32.55]]],
    ["Ephraim", "#b5485c", [35.2, 32.1], [[35.2, 32.1], [35.0, 32.15], [35.4, 32.05]]],
    ["Dan", "#5c9fa8", [34.84, 31.98], [[34.85, 31.95], [34.8, 32.05]]],
    ["Benjamin", "#a8743a", [35.32, 31.86], [[35.3, 31.85]]],
    ["Judah", "#b13a2c", [35.0, 31.42], [[35.1, 31.55], [34.9, 31.4], [35.25, 31.35], [35.15, 31.05], [34.75, 31.7]]],
    ["Simeon", "#6f8a3a", [34.72, 31.12], [[34.72, 31.2], [34.6, 31.0]]],
    ["Dan", "#5c9fa8", [35.66, 33.29], [[35.66, 33.27]]]
  ];
  const TRIBES_EAST = [
    ["Reuben", "#8a5a9e", [35.8, 31.62], [[35.75, 31.6], [35.85, 31.5]]],
    ["Gad", "#3d7a8a", [35.75, 32.05], [[35.7, 32.1], [35.75, 31.9], [35.65, 32.35]]],
    ["Manasseh", "#4f7fb5", [36.15, 32.68], [[35.9, 32.7], [36.2, 32.9], [35.75, 32.62], [36.3, 32.6]]]
  ];
  const RIFT = [[35.76, 33.42], [35.68, 33.22], [35.62, 33.05], [35.6, 32.97], [35.62, 32.88], [35.59, 32.8], [35.57, 32.7], [35.56, 32.45], [35.55, 32.2], [35.53, 31.95], [35.53, 31.77], [35.48, 31.5], [35.42, 31.2], [35.4, 30.95]];
  const WEST_BOUND = [[33.9, 33.5], [35.72, 33.5], ...RIFT, [35.15, 30.75], [34.8, 30.62], [34.42, 30.66], [34.1, 30.85], [33.9, 31.1]];
  const EAST_BOUND = [[35.66, 33.12], [35.95, 33.2], [36.25, 33.12], [36.5, 32.88], [36.48, 32.55], [36.32, 32.22], [36.18, 31.92], [36.12, 31.65], [36.02, 31.42], [35.58, 31.42], ...RIFT.slice(0, 11).reverse().filter(p => p[1] > 31.42 && p[1] < 33.12)];

  const terrainData = {};   // name → Promise of the coastline data
  const loadTerrain = name => terrainData[name] || (terrainData[name] = new Promise((ok, no) => {
    if (window.TERRAIN?.[name]) return ok(window.TERRAIN[name]);
    const s = document.createElement("script");
    s.src = `${ASSETS}maps/${name}.js`;
    s.onload = () => window.TERRAIN?.[name] ? ok(window.TERRAIN[name]) : no(new Error(`maps/${name}.js has no data`));
    s.onerror = () => no(new Error(`Could not load maps/${name}.js`));
    document.head.appendChild(s);
  }));
  // Voronoi cells by half-planes, clipped to a (possibly concave) bounding polygon, Sutherland–Hodgman style
  const clipHalf = (poly, a, b) => {   // keep the side of the bisector nearer a
    const nx = b[0] - a[0], ny = b[1] - a[1], c = (b[0] * b[0] + b[1] * b[1] - a[0] * a[0] - a[1] * a[1]) / 2;
    const side = p => nx * p[0] + ny * p[1] - c;   // < 0 is a's side
    const out = [];
    for (let k = 0; k < poly.length; k++) {
      const p = poly[k], q = poly[(k + 1) % poly.length], sp = side(p), sq = side(q);
      if (sp <= 0) out.push(p);
      if ((sp < 0 && sq > 0) || (sp > 0 && sq < 0)) { const t = sp / (sp - sq); out.push([p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])]); }
    }
    return out;
  };
  function tribeCells(list, bound, P) {
    const seeds = list.flatMap((t, ti) => t[3].map(s => ({ ti, p: P(s[0], s[1]) })));
    const B = bound.map(([lon, lat]) => P(lon, lat));
    const cells = seeds.map((s, i) => seeds.reduce((poly, o, j) => i === j || poly.length < 3 ? poly : clipHalf(poly, s.p, o.p), B));
    // borders: an edge of cell i that lies on the bisector with a seed j of another tribe
    const borders = [];
    cells.forEach((poly, i) => poly.forEach((p, k) => {
      const q = poly[(k + 1) % poly.length];
      seeds.forEach((o, j) => {
        if (j <= i || o.ti === seeds[i].ti) return;
        const a = seeds[i].p, b = o.p, nx = b[0] - a[0], ny = b[1] - a[1], n = Math.hypot(nx, ny), c = (b[0] * b[0] + b[1] * b[1] - a[0] * a[0] - a[1] * a[1]) / 2;
        if (Math.abs(nx * p[0] + ny * p[1] - c) / n < .6 && Math.abs(nx * q[0] + ny * q[1] - c) / n < .6) borders.push(`M${f1(p[0])} ${f1(p[1])}L${f1(q[0])} ${f1(q[1])}`);
      });
    }));
    return { cells: cells.map((poly, i) => ({ ti: seeds[i].ti, d: poly.length > 2 ? "M" + poly.map(p => f1(p[0]) + " " + f1(p[1])).join("L") + "Z" : "" })), borders: borders.join("") };
  }
  const smooth = P2 => {   // Catmull-Rom through projected points
    const n = P2.length, at = k => P2[Math.max(0, Math.min(n - 1, k))];
    let d = `M${f1(P2[0][0])} ${f1(P2[0][1])}`;
    for (let k = 0; k < n - 1; k++) {
      const [a, b, c, e] = [at(k - 1), at(k), at(k + 1), at(k + 2)];
      d += ` C${f1(b[0] + (c[0] - a[0]) / 6)} ${f1(b[1] + (c[1] - a[1]) / 6)} ${f1(c[0] - (e[0] - b[0]) / 6)} ${f1(c[1] - (e[1] - b[1]) / 6)} ${f1(c[0])} ${f1(c[1])}`;
    }
    return d;
  };
  document.querySelectorAll("svg[data-terrain]").forEach((svg, n) => {
    const name = svg.dataset.terrain, M = OT_MAPS[name];
    if (!M) { console.warn(`No terrain map "${name}"`); return; }
    const [L0, L1, B0, B1] = M.box, W = 1000, H = M.h;
    const P = (lon, lat) => [(lon - L0) * W / (L1 - L0), (B1 - lat) * H / (B1 - B0)];
    if (!svg.hasAttribute("viewBox")) svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    const vb = svg.viewBox.baseVal, u = vb.width / W;
    svg.classList.add("map", "terrain");
    svg.style.setProperty("--u", u.toFixed(3));
    const where = s => {
      const ll = s.match(/^@\s*(-?[\d.]+)\s+(-?[\d.]+)$/);
      if (ll) return P(+ll[1], +ll[2]);
      const p = OT_PLACES[s];
      if (!p) { console.warn(`No place "${s}" on the Old Testament maps`); return null; }
      return P(p[0], p[1]);
    };
    // routes: a smooth line through the places, with a pale edge drawn under it
    let credit = "";
    svg.querySelectorAll("path[data-via], path[data-journey]").forEach(p => {
      const via = p.dataset.via || OT_JOURNEYS[p.dataset.journey] || "";
      if (!p.dataset.via && !OT_JOURNEYS[p.dataset.journey]) console.warn(`No journey "${p.dataset.journey}"`);
      credit ||= OT_CREDIT[p.dataset.journey] || "";
      const pts = via.split(",").map(s => where(s.trim())).filter(Boolean);
      if (pts.length < 2) return;
      p.setAttribute("d", smooth(pts));
      if (!p.hasAttribute("pathLength")) p.setAttribute("pathLength", "1");
      const under = p.cloneNode();
      under.classList.add("under");
      under.removeAttribute("id");
      p.before(under);
    });
    const own = [...svg.childNodes];
    const r = 7 * u, g = 13 * u;
    const towns = String(svg.dataset.towns || "").split(",").map(s => s.trim()).filter(Boolean).map(spec => {
      const [, nm, mark, side] = spec.match(/^(.+?)([*!]?)(?::([lrtb]))?$/);
      const p = OT_PLACES[nm];
      if (!p) { console.warn(`No place "${nm}" on the Old Testament maps`); return ""; }
      const [x, y] = P(p[0], p[1]);
      const [tx, ty, anchor] = { l: [x - g, y + 6 * u, "end"], r: [x + g, y + 6 * u, "start"], t: [x, y - g, "middle"], b: [x, y + 2.2 * g, "middle"] }[side || p[2]];
      const dot = p[3] === "m"
        ? `<path class="mount" d="M${f1(x - 9 * u)} ${f1(y + 6 * u)}L${f1(x)} ${f1(y - 9 * u)}L${f1(x + 9 * u)} ${f1(y + 6 * u)}Z"/>`
        : `<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(r)}"/>`;
      return `<g class="map-town${mark ? " here" : ""}">${dot}` + (mark === "!" ? `<circle class="map-ping" cx="${f1(x)}" cy="${f1(y)}" r="${f1(r * 1.3)}"/>` : "") +
        `<text x="${f1(tx)}" y="${f1(ty)}" text-anchor="${anchor}">${esc(nm)}</text></g>`;
    }).join("");
    const lbl = ([lon, lat, text, rot = 0, kind], cls) => { const [x, y] = P(lon, lat);
      return `<text class="${kind === "r" ? "river-name" : cls}" x="${f1(x)}" y="${f1(y)}" text-anchor="middle"${rot ? ` transform="rotate(${rot} ${f1(x)} ${f1(y)})"` : ""}>${esc(text)}</text>`; };
    const pick = svg.hasAttribute("data-regions") ? svg.dataset.regions : M.defaults;
    const regions = pick.split(",").map(s => s.trim()).filter(Boolean).map(k => {
      const at = M.regions[k];
      if (!at) { console.warn(`No region "${k}" on the ${name} map`); return ""; }
      return lbl([at[0], at[1], k, at[2] || 0], "map-region");
    }).join("");
    const waters = svg.dataset.waters === "" ? "" : M.waters.map(w => lbl(w, "map-water")).join("");
    const streams = (OT_STREAMS[name] || []).map(s => `<path d="${smooth(s.map(([lon, lat]) => P(lon, lat)))}"/>`).join("");
    const lakes2 = (OT_LAKES[name] || []).map(([lon, lat, rx, ry]) => { const [x, y] = P(lon, lat), [x2, y2] = P(lon + rx, lat - ry);
      return `<ellipse cx="${f1(x)}" cy="${f1(y)}" rx="${f1(x2 - x)}" ry="${f1(y2 - y)}"/>`; }).join("");
    let tribes = "", tribeNames = "";
    if (name === "land" && svg.dataset.tribes) {
      const want = svg.dataset.tribes.trim() === "all" ? null : new Map(svg.dataset.tribes.split(",").map(s => s.trim()).filter(Boolean).map(s => [s.replace(/\*$/, ""), s.endsWith("*")]));
      const lit = want && [...want.values()].some(Boolean);
      const draw = (list, bound) => {
        const { cells, borders } = tribeCells(list, bound, P);
        const fill = cells.map(c => { const t = list[c.ti], on = !want || want.has(t[0]), hot = want?.get(t[0]);
          return c.d && on ? `<path class="tribe${hot ? " hot" : lit ? " dim" : ""}" d="${c.d}" fill="${t[1]}" stroke="${t[1]}"/>` : ""; }).join("");
        tribeNames += list.map(t => { if (want && !want.has(t[0])) return ""; const [x, y] = P(t[2][0], t[2][1]);
          return `<text class="tribe-name${want?.get(t[0]) ? " hot" : ""}" x="${f1(x)}" y="${f1(y)}" text-anchor="middle">${esc(t[0])}</text>`; }).join("");
        return fill + `<path class="tribe-border" d="${borders}"/>`;
      };
      tribes = `<g class="tribes" clip-path="url(#tr-land-${n})">${draw(TRIBES_WEST, WEST_BOUND)}${draw(TRIBES_EAST, EAST_BOUND)}</g>`;
    }
    svg.innerHTML = `<rect class="sea" x="${vb.x}" y="${vb.y}" width="${vb.width}" height="${vb.height}"/>`;
    svg.append(...own);
    loadTerrain(name).then(D => {
      const rivers = D.rivers.map(rv => `<path d="${rv.d}"/>`).join("");
      svg.insertAdjacentHTML("afterbegin", `<defs><clipPath id="tr-land-${n}"><path d="${D.land}"/></clipPath>
        <filter id="tr-glow-${n}" x="-5%" y="-5%" width="110%" height="110%"><feMorphology in="SourceAlpha" operator="dilate" radius="${f1(4 * u)}" result="d"/>
          <feGaussianBlur in="d" stdDeviation="${f1(5 * u)}" result="b"/><feFlood flood-color="#eef7f9" flood-opacity=".85"/><feComposite in2="b" operator="in" result="glow"/>
          <feMerge><feMergeNode in="glow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <pattern id="tr-waves-${n}" width="${f1(36 * u)}" height="${f1(14 * u)}" patternUnits="userSpaceOnUse"><path d="M0 ${f1(7 * u)} q${f1(9 * u)} ${f1(-4.5 * u)} ${f1(18 * u)} 0 t${f1(18 * u)} 0" fill="none" stroke="#fff" stroke-opacity=".2" stroke-width="${f1(u)}"/></pattern></defs>`);
      svg.querySelector(".sea").insertAdjacentHTML("afterend", `<rect class="waves" x="${vb.x}" y="${vb.y}" width="${vb.width}" height="${vb.height}" fill="url(#tr-waves-${n})"/>
        <g filter="url(#tr-glow-${n})"><image href="${ASSETS}maps/${name}.webp" x="0" y="0" width="${W}" height="${H}" clip-path="url(#tr-land-${n})" preserveAspectRatio="none"/></g>
        <path class="coast" d="${D.land}"/>${tribes}<path class="lake" d="${D.lakes}"/><g class="lake">${lakes2}</g><g class="rivers">${rivers}</g><g class="streams">${streams}</g>
        ${tribes ? "" : regions}${waters}${tribeNames}`);
      svg.insertAdjacentHTML("beforeend", towns + (credit ? `<text class="map-credit" x="${f1(vb.x + 14 * u)}" y="${f1(vb.y + vb.height - 14 * u)}">${esc(credit)}</text>` : ""));
    }).catch(e => console.warn(e.message));
  });

  // ---------- The tabernacle and Solomon's temple, in 3D ----------
  // svg[data-tabernacle] (Exodus 26–27, 36–38) or svg[data-temple] (1 Kings 6–7, 2 Chronicles 3–4), drawn to scale in cubits,
  // seen from the south-east, the gate (east) nearest you. The pieces arrive in the order a priest meets them coming in from the east.
  // Add "steps" to the attribute (data-tabernacle="steps") to bring each piece on a click instead; "inside" (tabernacle) takes the
  // roof and the near walls off to show the furniture: the ark, the vail, the table, the candlestick and the altar of incense.
  // "nolabels" leaves the names off.
  function iso(S, OX, OY) {
    const C = Math.cos(Math.PI / 6);
    const pr = (x, y, z) => [OX + (x - y) * C * S, OY + (x + y) * .5 * S - z * S];
    const pt = p => pr(...p).map(f1).join(" ");
    const poly = (pts, fill, extra = "") => `<path d="M${pts.map(pt).join("L")}Z" fill="${fill}" ${extra}/>`;
    const tone = (hex, f) => { const v = parseInt(hex.slice(1), 16); return `rgb(${[v >> 16, (v >> 8) & 255, v & 255].map(c => Math.max(0, Math.min(255, Math.round(c * f)))).join(",")})`; };
    const EDGE = `stroke="rgba(40,25,10,.32)" stroke-width=".6" stroke-linejoin="round"`;
    // a box shows its top, its south (+y) face and its east (+x) face
    const box = (x, y, z, w, d, h, col, o = {}) =>
      poly([[x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h]], o.south || tone(col, .9), EDGE) +
      poly([[x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h]], o.east || tone(col, .72), EDGE) +
      (o.noTop ? "" : poly([[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]], o.top || tone(col, 1.08), EDGE));
    // an upright cylinder (pillars, the laver, the molten sea)
    const cyl = (x, y, z, r, h, col, top) => {
      const [cx, cy] = pr(x, y, z), [, ty] = pr(x, y, z + h), rx = r * C * S * Math.SQRT2, ry = rx / 2 / C * .87;
      const id = `cg${Math.round(x * 7 + y * 13 + z * 17 + r * 19)}`;
      return `<defs><linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="${tone(col, 1.15)}"/><stop offset=".45" stop-color="${tone(col, 1)}"/><stop offset="1" stop-color="${tone(col, .62)}"/></linearGradient></defs>
        <path d="M${f1(cx - rx)} ${f1(ty)}V${f1(cy)}A${f1(rx)} ${f1(ry)} 0 0 0 ${f1(cx + rx)} ${f1(cy)}V${f1(ty)}Z" fill="url(#${id})" ${EDGE}/>
        <ellipse cx="${f1(cx)}" cy="${f1(ty)}" rx="${f1(rx)}" ry="${f1(ry)}" fill="${top || tone(col, 1.1)}" ${EDGE}/>`;
    };
    return { pr, pt, poly, box, cyl, tone, C };
  }
  const BUILD_LABEL = (I, x, y, z, dx, dy, text) => {
    const [a, b] = I.pr(x, y, z);
    return `<g class="iso-label"><circle cx="${f1(a)}" cy="${f1(b)}" r="2.2"/><path d="M${f1(a)} ${f1(b)}L${f1(a + dx)} ${f1(b + dy)}"/>` +
      `<text x="${f1(a + dx + (dx < 0 ? -5 : 5))}" y="${f1(b + dy + 5)}" text-anchor="${dx < 0 ? "end" : "start"}">${esc(text)}</text></g>`;
  };
  function buildIso(svg, pieces, vb) {
    // pieces: [{ key, html, label, order }] in drawing order (back to front); order says when each one arrives
    const opts = (svg.dataset.tabernacle ?? svg.dataset.temple ?? "").split(/\s+/);
    const steps = opts.includes("steps"), labels = !opts.includes("nolabels");
    svg.setAttribute("viewBox", vb);
    svg.classList.add("iso", steps ? "iso-steps" : "iso-auto");
    const glossy = `<defs><radialGradient id="iso-glory"><stop offset="0" stop-color="#fff6d8" stop-opacity=".95"/><stop offset=".55" stop-color="#ffe9a8" stop-opacity=".45"/><stop offset="1" stop-color="#fff6d8" stop-opacity="0"/></radialGradient>
      <linearGradient id="iso-screen" x1="0" x2="1"><stop offset="0" stop-color="#2e4f9c"/><stop offset=".33" stop-color="#2e4f9c"/><stop offset=".33" stop-color="#6b2f7a"/><stop offset=".66" stop-color="#6b2f7a"/><stop offset=".66" stop-color="#b3261e"/><stop offset="1" stop-color="#b3261e"/></linearGradient>
      <linearGradient id="iso-screen-v" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2e4f9c"/><stop offset=".33" stop-color="#2e4f9c"/><stop offset=".33" stop-color="#6b2f7a"/><stop offset=".66" stop-color="#6b2f7a"/><stop offset=".66" stop-color="#b3261e"/><stop offset="1" stop-color="#b3261e"/></linearGradient></defs>`;
    svg.innerHTML = glossy + pieces.map(p => `<g class="iso-piece" data-i="${p.order}" style="--i:${p.order}">${p.html}</g>`).join("") +
      (labels ? pieces.filter(p => p.label).map(p => `<g class="iso-piece iso-names" data-i="${p.order}" style="--i:${p.order}">${p.label}</g>`).join("") : "") +
      (steps ? [...new Set(pieces.map(p => p.order))].filter(o => o > 0).sort((a, b) => a - b).map(o => `<g class="step iso-go" data-i="${o}"></g>`).join("") : "");
  }
  document.querySelectorAll("svg[data-tabernacle]").forEach(svg => {
    const P = [], add = (order, html, label = "") => P.push({ order, html, label });
    const GOLD = "#c9a24a", BRIGHT = "#d9b44a";
    if (svg.dataset.tabernacle.split(/\s+/).includes("inside")) {
      // ----- inside: the tent alone, close up, its roof off and its near walls cut low (a dashed line shows their full height).
      // A priest meets the holy place first, then the vail; only the high priest goes on to the ark.
      const I = iso(11, 270, 150), { box, poly, pr } = I, L = (...a) => BUILD_LABEL(I, ...a);
      const ghost = pts => poly(pts, "none", `stroke="rgba(120,90,30,.55)" stroke-dasharray="4 4" stroke-width="1.1"`);
      add(0, poly([[-4, -4, 0], [34, -4, 0], [34, 14, 0], [-4, 14, 0]], "#e2cfa3", `opacity=".28"`) + poly([[0, 0, 0], [30, 0, 0], [30, 10, 0], [0, 10, 0]], "#d8c49a") +
        box(0, -.4, 0, 30, .4, 10, GOLD) + box(-.4, -.4, 0, .4, 10.4, 10, GOLD), L(5, 10, 0, -24, 50, "the most holy place") + L(25, 10, 0, 34, 56, "the holy place"));
      // the ark of the covenant, the mercy seat and the two cherubim (Exodus 25:10–22), in the glory
      const ax = 3.75, ay = 4.25;
      let ark = box(ax, ay, 0, 2.5, 1.5, 1.5, BRIGHT) + box(ax - .05, ay - .05, 1.5, 2.6, 1.6, .15, "#f0cf63");
      const wing = (x, dir) => { const [a, b] = pr(x, ay + .75, 1.65); return `<path d="M${f1(a)} ${f1(b)}q${f1(dir * 5)} -14 ${f1(dir * 19)} -17q${f1(-dir * 3)} 9 ${f1(-dir * 13)} 17z" fill="#f0cf63" stroke="#8a6a1c" stroke-width=".8"/>`; };
      ark += wing(ax + .45, 1) + wing(ax + 2.05, -1);
      const [gx, gy] = pr(ax + 1.25, ay + .75, 3.2);
      add(3, `<ellipse class="glory" cx="${f1(gx)}" cy="${f1(gy)}" rx="80" ry="58" fill="url(#iso-glory)"/>` + ark, L(ax + 1.25, ay, 1.6, -40, -96, "the ark and the mercy seat"));
      // the vail between the holy place and the most holy (26:31–33), cut low like the walls
      add(2, poly([[10, 0, 0], [10, 10, 0], [10, 10, 2.6], [10, 0, 2.6]], "url(#iso-screen-v)") + ghost([[10, 0, 2.6], [10, 0, 10], [10, 10, 10], [10, 10, 2.6]]),
        L(10, 2, 6, -40, -150, "the vail"));
      // the table of shewbread on the north side, the candlestick on the south, the golden altar before the vail (40:22–27)
      let table = box(15, 1.2, 0, 2, 1, 1.5, BRIGHT);
      for (let k = 0; k < 6; k++) table += box(15.15, 1.35, 1.5 + k * .2, .75, .7, .19, "#ead6a4") + box(16.1, 1.35, 1.5 + k * .2, .75, .7, .19, "#ead6a4");
      const [sx, sy] = pr(12.5, 5, 2.1);
      const incense = box(12, 4.5, 0, 1, 1, 2, BRIGHT) + box(11.95, 4.45, 2, 1.1, 1.1, .12, "#f0cf63") +
        `<path class="smoke" d="M${f1(sx)} ${f1(sy)}c-5 -8 6 -12 0 -22s5 -13 0 -22" fill="none" stroke="#c9c2b4" stroke-width="2.4" stroke-linecap="round"/>`;
      const cy0 = 8.6, cx0 = 17, cp = (dx, z) => pr(cx0 + dx, cy0, z).map(f1).join(" ");
      let can = `<path d="M${cp(-.55, 0)}L${cp(.55, 0)}L${cp(0, .45)}Z" fill="${BRIGHT}"/><path d="M${cp(0, .3)}L${cp(0, 3.1)}" stroke="${BRIGHT}" stroke-width="4"/>`;
      for (const k of [1, 2, 3]) { const w = k * .45; can += `<path d="M${cp(-w, 3.1)}Q${cp(-w, 3.1 - k * .55)} ${cp(0, 3.1 - k * .7)}Q${cp(w, 3.1 - k * .55)} ${cp(w, 3.1)}" fill="none" stroke="${BRIGHT}" stroke-width="3"/>`; }
      for (const dx of [-1.35, -.9, -.45, 0, .45, .9, 1.35]) { const [a, b] = pr(cx0 + dx, cy0, 3.25); can += `<ellipse class="flame" cx="${f1(a)}" cy="${f1(b - 3)}" rx="2.6" ry="4.2" fill="#ffcf5a"/>`; }
      add(1, table + incense + can, L(16, 1.2, 3, 30, -100, "the table of shewbread") + L(12.5, 5, 2.1, 70, -70, "the altar of incense") + L(cx0, cy0, 1.5, -30, 120, "the candlestick"));
      // the near walls, cut low, the dashed line of the roof, and the five pillars of the door
      let near = box(0, 10, 0, 30, .4, 1.8, GOLD) + ghost([[0, 10.4, 1.8], [0, 10.4, 10], [30, 10.4, 10], [30, 10.4, 1.8]]) + ghost([[0, 0, 10], [30, 0, 10], [30, 10.4, 10], [0, 10.4, 10]]);
      for (let k = 0; k <= 4; k++) near += box(29.8, k * 2.5 - .2, 0, .4, .4, 9.4, BRIGHT);
      add(0, near, L(30, 7.5, 5, 50, 20, "the door"));
      buildIso(svg, P, "0 0 800 470");
      return;
    }
    // ----- the court and the tent, from outside
    const I = iso(4.7, 300, 70), { box, poly, pr, cyl } = I, L = (...a) => BUILD_LABEL(I, ...a);
    const LINEN = "#f4efe2", POST = "#b8925a", T = .4, tx = 10, ty = 20;
    add(0, poly([[-8, -8, 0], [108, -8, 0], [108, 58, 0], [-8, 58, 0]], "#e2cfa3", `opacity=".28"`) + poly([[0, 0, 0], [100, 0, 0], [100, 50, 0], [0, 50, 0]], "#ecdcb3"));
    // the back hangings of the court, north and west: fine linen, five cubits high, on pillars five cubits apart
    let back = box(0, 0, 0, 100, T, 5, LINEN) + box(0, 0, 0, T, 50, 5, LINEN);
    for (let x = 0; x <= 100; x += 5) back += box(x - .2, -.2, 0, .4, .4, 5.3, POST);
    for (let y = 5; y <= 50; y += 5) back += box(-.2, y - .2, 0, .4, .4, 5.3, POST);
    add(0, back, L(50, 0, 5, 14, -36, "linen hangings, 5 cubits high"));
    // the most holy place (10 × 10 × 10) and the holy place (20 × 10 × 10): boards of gold under the coverings
    const tent = (x0, len) => {
      let h = box(x0, ty, 0, len, 10, 10, GOLD, { top: "#4f4033", south: "#d4ad55", east: "#a9832f" });
      for (let k = 1; k < len / 1.5; k++) { const x = x0 + k * 1.5; h += `<path d="M${I.pt([x, ty + 10, .2])}L${I.pt([x, ty + 10, 6])}" stroke="rgba(90,60,10,.35)" stroke-width=".7"/>`; }
      const swag = (y, z1, col) => { let d = "M" + I.pt([x0, y, 10.3]); for (let k = 0; k <= len; k++) d += "L" + I.pt([x0 + k, y, k % 3 ? z1 : z1 - .35]); return `<path d="${d}L${I.pt([x0 + len, y, 10.3])}Z" fill="${col}"/>`; };
      return h + swag(ty + 10.15, 6.2, "#8e3326") + swag(ty + 10.25, 7.6, "#5d4b3b") + poly([[x0, ty - .3, 10.3], [x0 + len, ty - .3, 10.3], [x0 + len, ty + 10.3, 10.3], [x0, ty + 10.3, 10.3]], "#4f4033", `stroke="rgba(0,0,0,.3)" stroke-width=".6"`);
    };
    const [gx, gy] = pr(tx + 5, ty + 5, 15);
    add(5, tent(tx, 10) + `<ellipse class="glory" cx="${f1(gx)}" cy="${f1(gy)}" rx="64" ry="44" fill="url(#iso-glory)"/>`, L(tx + 3, ty, 10.3, -34, -64, "the most holy place"));
    let holy = tent(tx + 10, 20) + poly([[tx + 30.05, ty, 0], [tx + 30.05, ty + 10, 0], [tx + 30.05, ty + 10, 9], [tx + 30.05, ty, 9]], "url(#iso-screen)");
    for (let k = 0; k <= 4; k++) holy += box(tx + 30.05, ty + k * 2.4 - .15, 0, .3, .3, 9.2, "#d9b45a");
    add(4, holy, L(tx + 22, ty, 10.3, 30, -78, "the holy place") + L(tx + 30, ty + 6, 5, 52, -14, "the door"));
    // the laver of brass, between the altar and the door (Exodus 30:18), and the altar of burnt offering (27:1): 5 × 5 × 3 cubits
    add(3, cyl(52, 25, 0, .9, 1, "#b07d3c") + cyl(52, 25, 1, 1.6, .5, "#b07d3c", "#9fc3cf"), L(52, 25, 1.2, 30, 68, "the laver"));
    add(2, box(62.5, 22.5, 0, 5, 5, 3, "#b07d3c") + box(62, 22, 3, 6, 6, .3, "#8a5e2b") +
      [[62, 22], [67.6, 22], [62, 27.6], [67.6, 27.6]].map(([a, b]) => box(a, b, 3, .4, .4, .9, "#8a5e2b")).join(""),
      L(65, 27.5, 1.5, 30, 92, "the altar of burnt offering"));
    // the front hangings (south and east), with the gate of the court: twenty cubits of blue, purple and scarlet (Exodus 27:16)
    let front = box(0, 50 - T, 0, 100, T, 5, LINEN) + box(100 - T, 0, 0, T, 15, 5, LINEN) + box(100 - T, 35, 0, T, 15, 5, LINEN) +
      poly([[100, 15, 0], [100, 35, 0], [100, 35, 5], [100, 15, 5]], "url(#iso-screen)");
    for (let x = 0; x <= 100; x += 5) front += box(x - .2, 50 - .2, 0, .4, .4, 5.3, POST);
    for (let y = 0; y < 50; y += 5) front += box(100 - .2, y - .2, 0, .4, .4, 5.3, POST);
    add(1, front, L(100, 22, 5, 56, -30, "the gate (east)"));
    // P is already back to front: ground, back walls, the tent, laver, altar, front hangings
    buildIso(svg, P, "0 0 800 470");
  });
  document.querySelectorAll("svg[data-temple]").forEach(svg => {
    const I = iso(2.9, 345, 118), { box, poly, pr, cyl } = I;
    const P = [], L = (...a) => BUILD_LABEL(I, ...a);
    const add = (order, html, label = "") => P.push({ order, html, label });
    const STONE = "#e6dcc6", CEDAR = "#8a5a32", BRASS = "#b07d3c", GOLD = "#d9b44a";
    // the inner court: three rows of hewed stone and a row of cedar beams (1 Kings 6:36)
    const X0 = -24, X1 = 150, Y0 = 0, Y1 = 90, Wt = 1;
    add(0, poly([[X0 - 8, Y0 - 8, 0], [X1 + 8, Y0 - 8, 0], [X1 + 8, Y1 + 8, 0], [X0 - 8, Y1 + 8, 0]], "#e2cfa3", `opacity=".28"`) +
      poly([[X0, Y0, 0], [X1, Y0, 0], [X1, Y1, 0], [X0, Y1, 0]], "#e9dcc0") +
      box(X0, Y0, 0, X1 - X0, Wt, 4, STONE) + box(X0, Y0, 4, X1 - X0, Wt, 1, CEDAR) + box(X0, Y0, 0, Wt, Y1 - Y0, 4, STONE) + box(X0, Y0, 4, Wt, Y1 - Y0, 1, CEDAR),
      L(X0 + 40, Y0, 5, 10, -30, "the inner court"));
    // ten lavers on bases (1 Kings 7:27–39): five on the north side of the house
    const laver = (x, y) => box(x - 2, y - 2, 0, 4, 4, 3, BRASS) + cyl(x, y, 3, 1.9, 1.2, BRASS, "#9fc3cf");
    add(4, [10, 20, 30, 40, 50].map(x => laver(x, 15)).join(""));
    // the house: 60 cubits long, 20 wide, 30 high, the oracle (most holy place) its west 20 cubits; side chambers three storeys high
    // around it (1 Kings 6:2–10); the porch, 20 cubits across and 10 deep, on the east
    const hy = 35;
    let house = box(-7, hy - 7, 0, 7, 34, 16, STONE) + box(0, hy - 7, 0, 60, 7, 16, STONE);   // west and north side chambers
    house += box(0, hy, 0, 60, 20, 30, "#efe6d2", { top: "#c9b48c" });
    for (const z of [5.3, 10.6]) house += `<path d="M${I.pt([0, hy + 27, z])}L${I.pt([60, hy + 27, z])}" stroke="rgba(90,70,40,.35)" stroke-width=".8"/>`;
    for (let k = 0; k < 8; k++) { const x = 4 + k * 7.3; house += poly([[x, hy + 20, 22], [x + 2.2, hy + 20, 22], [x + 2.2, hy + 20, 26], [x, hy + 20, 26]], "#5b4630"); }   // windows of narrow lights (6:4)
    house += box(0, hy + 20, 0, 60, 7, 16, STONE);   // south side chambers
    for (const z of [5.3, 10.6]) house += `<path d="M${I.pt([0, hy + 27, z])}L${I.pt([60, hy + 27, z])}" stroke="rgba(90,70,40,.35)" stroke-width=".8"/>`;
    for (let k = 0; k < 12; k++) for (const z of [1.5, 6.8, 12.1]) { const x = 2.5 + k * 4.8; house += poly([[x, hy + 27, z], [x + 1.4, hy + 27, z], [x + 1.4, hy + 27, z + 2.4], [x, hy + 27, z + 2.4]], "#7c6448"); }
    house += box(60, hy, 0, 10, 20, 30, "#f2ead8", { top: "#c9b48c" });   // the porch
    house += poly([[70.02, hy + 6, 0], [70.02, hy + 14, 0], [70.02, hy + 14, 16], [70.02, hy + 6, 16]], "#3c2a1a") +
      poly([[70.02, hy + 6.6, 0], [70.02, hy + 13.4, 0], [70.02, hy + 13.4, 15.4], [70.02, hy + 6.6, 15.4]], GOLD, `opacity=".9"`);   // doors overlaid with gold
    const [gx, gy] = pr(10, hy + 10, 34);
    house += `<ellipse class="glory" cx="${f1(gx)}" cy="${f1(gy)}" rx="70" ry="44" fill="url(#iso-glory)"/>`;
    add(6, house, L(30, hy, 30, 30, -70, "the holy place") + L(10, hy, 30, -30, -50, "the most holy place (the oracle)") +
      L(30, hy + 27, 16, -30, 70, "side chambers, three storeys") + L(65, hy, 30, 40, -60, "the porch"));
    // the two pillars of brass, eighteen cubits high with chapiters of five (1 Kings 7:15–22): Boaz on the north, Jachin on the south
    const pillar = (y) => cyl(73, y, 0, 1.9, 18, BRASS) + cyl(73, y, 18, 2.3, 5, "#c79a4f") + cyl(73, y, 23, 2.0, .6, "#d9b44a");
    add(5, pillar(hy + 4) + pillar(hy + 16), L(73, hy + 4, 23, 40, -40, "Boaz") + L(73, hy + 16, 23, 46, -6, "Jachin"));
    // the molten sea on twelve oxen, at the south-east (7:23–26, 39), and the other five lavers on the south side
    let sea = "";
    for (let k = 0; k < 12; k++) { const a = k / 12 * Math.PI * 2, x = 90 + Math.cos(a) * 3.6, y = 72 + Math.sin(a) * 3.6; sea += box(x - .9, y - .9, 0, 1.8, 1.8, 2.4, "#9b6b33"); }
    sea += cyl(90, 72, 2.4, 5, 5, BRASS, "#8fbccb");
    add(4, [10, 20, 30, 40, 50].map(x => laver(x, 80)).join("") + sea,
      L(90, 72, 7.4, -40, 70, "the molten sea") + L(30, 80, 4, -20, 64, "ten lavers, five on each side"));
    // the brasen altar, 20 × 20 × 10 cubits (2 Chronicles 4:1), before the house
    add(2, box(100, hy, 0, 20, 20, 10, BRASS) + box(102, hy + 2, 10, 16, 16, .6, "#7a4f22") + `<path d="M${I.pt([110, hy + 10, 10.6])}c-3 -6 4 -8 0 -16s3 -9 -1 -15" fill="none" stroke="#c9c2b4" stroke-width="2.2" stroke-linecap="round" class="smoke"/>`,
      L(110, hy + 20, 3, 24, 84, "the brasen altar"));
    // the front walls of the court with the east gate
    add(1, box(X0, Y1 - Wt, 0, X1 - X0, Wt, 4, STONE) + box(X0, Y1 - Wt, 4, X1 - X0, Wt, 1, CEDAR) +
      box(X1 - Wt, Y0, 0, Wt, 37, 4, STONE) + box(X1 - Wt, Y0, 4, Wt, 37, 1, CEDAR) + box(X1 - Wt, 53, 0, Wt, Y1 - 53, 4, STONE) + box(X1 - Wt, 53, 4, Wt, Y1 - 53, 1, CEDAR) +
      box(X1 - Wt, 36, 0, Wt + .5, 1.5, 7, STONE) + box(X1 - Wt, 51.5, 0, Wt + .5, 1.5, 7, STONE),
      L(X1, 45, 3, 30, -40, "the gate (east)"));
    // P is back to front: ground and back walls, north lavers, house, pillars, south lavers and sea, altar, front walls
    buildIso(svg, P, "0 0 860 520");
  });

  // ---------- Small drawn icons: data-icon="tent" on any element puts the icon before its text ----------
  const ICONS = {
    tent: "M3 20 12 5l9 15ZM12 5v15M9.5 20l2.5-5 2.5 5", crown: "M3.5 18h17M4.5 18 3 8l5 4 4-7 4 7 5-4-1.5 10", scroll: "M8 4h10a2 2 0 0 1 0 4H8M8 4a2 2 0 0 0 0 4v10a2 2 0 0 0 2 2h9a2 2 0 0 0 0-4h-9M18 8v8",
    staff: "M10 21V8a4 4 0 1 1 8 0v1", ark: "M2 14h20l-3 5H5ZM6 14V9h12v5M9 9V6h6v3", altar: "M5 11h14v9H5ZM3 11h18M12 3c-2 2 2 3 0 6M8 15h8",
    star: "M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6Z", sheaf: "M12 21V9M12 13 7 5M12 13l5-8M12 11 9.5 3M12 11l2.5-8M8 15h8",
    harp: "M6 21V5c6 0 12 4 12 12v4ZM9.5 9v12M13 11v10", sword: "M12 2.5l1.5 2V15h-3V4.5ZM7 15h10M12 15v6", lamp: "M3.5 13c4 0 7-3 16-3-2 4-6 6-12 6-2 0-4-1-4-3ZM19 10c0-2 1-3 2-4",
    tablets: "M4 20V8a4 4 0 0 1 8 0v12ZM12 20V8a4 4 0 0 1 8 0v12M6 11h4M6 14h4M14 11h4M14 14h4", well: "M5 11h14v9H5ZM7 11V5h10v6M12 5v7", ladder: "M8 3v18M16 3v18M8 7h8M8 11h8M8 15h8M8 19h8",
    coat: "M8 3 3 7l2 4 3-2v12h8V9l3 2 2-4-5-4c-1 2-7 2-8 0ZM8 13h8M8 17h8", heart: "M12 20C4 14 2 10 4 7a4 4 0 0 1 8 0 4 4 0 0 1 8 0c2 3 0 7-8 13Z",
    person: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c0-4 4-7 8-7s8 3 8 7", rainbow: "M3 18a9 9 0 0 1 18 0M6 18a6 6 0 0 1 12 0M9 18a3 3 0 0 1 6 0",
    cross: "M12 3v18M7 8h10", water: "M3 9c3-2 6 2 9 0s6-2 9 0M3 14c3-2 6 2 9 0s6-2 9 0M3 19c3-2 6 2 9 0s6-2 9 0", city: "M3 21V10l4-3 4 3v11M11 21V6l5-3 5 3v15M3 21h18M14 9h3M14 13h3M6 13h2"
  };
  document.querySelectorAll("[data-icon]").forEach(el => {
    const d = ICONS[el.dataset.icon];
    if (!d) { console.warn(`No icon "${el.dataset.icon}"`); return; }
    el.insertAdjacentHTML("afterbegin", `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`);
  });
  // a family tree (div.tree > ul > li > span, nested): each generation arrives in turn
  document.querySelectorAll(".tree").forEach(t => t.querySelectorAll("li").forEach(li => {
    let depth = 0; for (let p = li.parentElement; p && p !== t; p = p.parentElement) if (p.tagName === "UL") depth++;
    li.style.setProperty("--g", depth - 1);
  }));

  // ---------- How long they lived (Genesis 5 and 11), years after creation ----------
  // div[data-lives="adam-noah" | "noah-jacob" | "all"], data-mark="Methuselah, Noah" lights some. The years add up the ages the
  // KJV gives (Abram born when Terah was 130, from Genesis 11:32, 12:4 and Acts 7:4).
  const LIVES = [["Adam", 0, 930], ["Seth", 130, 912], ["Enos", 235, 905], ["Cainan", 325, 910], ["Mahalaleel", 395, 895], ["Jared", 460, 962], ["Enoch", 622, 365, "God took him"],
    ["Methuselah", 687, 969], ["Lamech", 874, 777], ["Noah", 1056, 950], ["Shem", 1558, 600], ["Arphaxad", 1658, 438], ["Salah", 1693, 433], ["Eber", 1723, 464], ["Peleg", 1757, 239],
    ["Reu", 1787, 239], ["Serug", 1819, 230], ["Nahor", 1849, 148], ["Terah", 1878, 205], ["Abraham", 2008, 175], ["Isaac", 2108, 180], ["Jacob", 2168, 147]];
  document.querySelectorAll("[data-lives]").forEach(box => {
    const span = { "adam-noah": ["Adam", "Noah"], "noah-jacob": ["Noah", "Jacob"], all: ["Adam", "Jacob"] }[box.dataset.lives] || ["Adam", "Jacob"];
    const a = LIVES.findIndex(l => l[0] === span[0]), b = LIVES.findIndex(l => l[0] === span[1]), rows = LIVES.slice(a, b + 1);
    const mark = new Set(String(box.dataset.mark || "").split(",").map(s => s.trim()).filter(Boolean));
    const y0 = Math.floor(rows[0][1] / 100) * 100, y1 = Math.ceil(Math.max(...rows.map(r => r[1] + r[2])) / 100) * 100;
    const L = 150, R = 980, X = y => L + (y - y0) / (y1 - y0) * (R - L), rowH = rows.length > 14 ? 26 : 34, top = 40, H = top + rows.length * rowH + 30;
    let s = "";
    for (let y = y0; y <= y1; y += 100) s += `<line class="lv-grid" x1="${f1(X(y))}" y1="${top - 8}" x2="${f1(X(y))}" y2="${H - 26}"/><text class="lv-year" x="${f1(X(y))}" y="${H - 8}" text-anchor="middle">${y}</text>`;
    if (1656 >= y0 && 1656 <= y1) s += `<rect class="lv-flood" x="${f1(X(1656) - 3)}" y="${top - 18}" width="6" height="${H - top - 8}"/><text class="lv-flood-name" x="${f1(X(1656))}" y="${top - 24}" text-anchor="middle">the flood, year 1656</text>`;
    rows.forEach(([nm, born, age, note], k) => {
      const y = top + k * rowH, h = rowH * .58, x1 = X(born), x2 = X(born + age);
      s += `<g class="lv-row${mark.has(nm) ? " hot" : ""}" style="--k:${k}"><text class="lv-name" x="${L - 12}" y="${f1(y + h * .78)}" text-anchor="end">${nm}</text>` +
        `<rect class="lv-bar" x="${f1(x1)}" y="${f1(y)}" width="${f1(x2 - x1)}" height="${f1(h)}" rx="${f1(h / 2)}"/>` +
        `<text class="lv-age" x="${f1(x2 + 7)}" y="${f1(y + h * .78)}">${age}${note ? ` · ${note}` : ""}</text></g>`;
    });
    box.innerHTML = `<svg class="lives" viewBox="0 0 1000 ${H}" role="img" aria-label="How long they lived, from ${span[0]} to ${span[1]}">${s}</svg>` +
      `<p class="lv-caption">Years after creation, adding up the ages in Genesis ${span[0] === "Adam" ? "5" : "11"}${span[1] === "Jacob" && span[0] === "Adam" ? " and 11" : ""}.</p>`;
  });

  // ---------- The kings of Israel and Judah, and the prophets ----------
  // div[data-kings] (931–586 BC, the divided kingdom); data-kings="1050-586" adds Saul, David and Solomon; data-kings="760-680" zooms in.
  // data-mark="Hezekiah, Isaiah" lights some; data-prophets="off" leaves the prophets out. Dates (BC) follow Edwin Thiele;
  // a faint lead-in shows a son ruling beside his father. Verdicts are the books' own: "did that which was right (or evil) in the sight of the LORD".
  const KINGS = {
    united: [["Saul", 1050, 1010, "mixed"], ["David", 1010, 970, "right"], ["Solomon", 970, 931, "mixed"]],
    israel: [["Jeroboam", 931, 910, "evil"], ["Nadab", 910, 909, "evil"], ["Baasha", 909, 886, "evil"], ["Elah", 886, 885, "evil"], ["Zimri", 885, 884.9, "evil"], ["Omri", 885, 874, "evil"],
      ["Ahab", 874, 853, "evil"], ["Ahaziah", 853, 852, "evil"], ["Joram", 852, 841, "evil"], ["Jehu", 841, 814, "mixed"], ["Jehoahaz", 814, 798, "evil"], ["Jehoash", 798, 782, "evil"],
      ["Jeroboam II", 782, 753, "evil", 793], ["Zachariah", 753, 752.5, "evil"], ["Shallum", 752.5, 752, "evil"], ["Menahem", 752, 742, "evil"], ["Pekahiah", 742, 740, "evil"],
      ["Pekah", 740, 732, "evil", 752], ["Hoshea", 732, 722, "evil"]],
    judah: [["Rehoboam", 931, 913, "evil"], ["Abijam", 913, 911, "evil"], ["Asa", 911, 870, "right"], ["Jehoshaphat", 870, 848, "right", 873], ["Jehoram", 848, 841, "evil", 853],
      ["Ahaziah", 841, 840, "evil"], ["Athaliah", 841, 835, "evil"], ["Joash", 835, 796, "mixed"], ["Amaziah", 796, 767, "mixed"], ["Uzziah", 767, 740, "right", 792],
      ["Jotham", 740, 732, "right", 750], ["Ahaz", 732, 715, "evil", 735], ["Hezekiah", 715, 686, "right"], ["Manasseh", 686, 642, "evil", 696], ["Amon", 642, 640, "evil"],
      ["Josiah", 640, 609, "right"], ["Jehoahaz", 609, 608.7, "evil"], ["Jehoiakim", 609, 598, "evil"], ["Jehoiachin", 598, 597, "evil"], ["Zedekiah", 597, 586, "evil"]]
  };
  const PROPHETS = {
    israel: [["Elijah", 870, 848], ["Elisha", 848, 797], ["Jonah", 785, 775], ["Amos", 760, 750], ["Hosea", 755, 715]],
    judah: [["Isaiah", 740, 681], ["Micah", 735, 700], ["Nahum", 660, 650], ["Zephaniah", 640, 620], ["Jeremiah", 627, 586], ["Habakkuk", 609, 598], ["Daniel", 605, 536], ["Ezekiel", 593, 571],
      ["Haggai", 520, 520], ["Zechariah", 520, 518], ["Malachi", 435, 430]]
  };
  const KING_EVENTS = [[931, "the kingdom divides"], [722, "Samaria falls to Assyria"], [605, "the first captives taken to Babylon"], [586, "Jerusalem falls to Babylon"], [538, "Cyrus lets the Jews go home"], [516, "the temple is built again"]];
  document.querySelectorAll("[data-kings]").forEach(box => {
    const m = String(box.dataset.kings).match(/(\d+)\s*-\s*(\d+)/);
    const from = m ? +m[1] : 931, to = m ? +m[2] : 586;
    const mark = new Set(String(box.dataset.mark || "").split(",").map(s => s.trim()).filter(Boolean));
    const prophets = box.dataset.prophets !== "off";
    const Lx = 110, Rx = 965, X = y => Lx + (from - y) / (from - to) * (Rx - Lx);
    const visible = (a, b) => Math.min(a, from) > Math.max(b, to);   // a is the start (larger), b the end
    const FS = 15, cw = FS * .56;
    // rows of prophets: each takes the first row where its bar and its name fit
    const stack = list => { const rows = []; return list.filter(p => visible(p[1], Math.min(p[2], p[1] - .01))).map(p => {
      const x1 = X(Math.min(p[1], from)), x2 = Math.max(X(Math.max(p[2], to)), x1 + 6), len = p[0].length * cw + 10;
      const right = x1 + len > 995;   // a name that would run off the edge ends at its bar's end instead
      const start = right ? Math.min(x1, x2 - len) : x1, end = right ? x2 : Math.max(x2, x1 + len);
      let r = rows.findIndex(e => e < start - 6); if (r < 0) { r = rows.length; rows.push(0); } rows[r] = end; return { p, x1, x2, r, right }; }); };
    const pIs = prophets ? stack(PROPHETS.israel) : [], pJu = prophets ? stack(PROPHETS.judah) : [];
    const nIs = pIs.reduce((a, q) => Math.max(a, q.r + 1), 0), nJu = pJu.reduce((a, q) => Math.max(a, q.r + 1), 0);
    const PR = 24, LBL = 92, BAR = 30;
    let y = 46;   // events row above
    const yPI = y; y += nIs * PR + (nIs ? 8 : 0);
    const yLI = y; y += LBL;
    const yBI = y; y += BAR;
    const yAx = y + 22; y += 44;
    const yBJ = y; y += BAR;
    const yLJ = y; y += LBL;
    const yPJ = y; y += nJu * PR + 16;
    const H = y;
    let s = `<defs><pattern id="kg-mixed" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" class="kg-fill-right"/><rect width="4" height="8" class="kg-fill-evil"/></pattern></defs>`;
    // axis
    const step = from - to > 200 ? 50 : from - to > 80 ? 20 : 10;
    for (let yr = Math.ceil(to / step) * step; yr <= from; yr += step) s += `<line class="kg-tick" x1="${f1(X(yr))}" y1="${yBI - 6}" x2="${f1(X(yr))}" y2="${yBJ + BAR + 6}"/><text class="kg-year" x="${f1(X(yr))}" y="${yAx + 5}" text-anchor="middle">${yr} BC</text>`;
    // events
    KING_EVENTS.filter(([yr]) => yr <= from && yr >= to).forEach(([yr, t], k) => {
      const x = X(yr), anchor = x > Rx - 120 ? "end" : x < Lx + 120 ? "start" : "middle";
      s += `<line class="kg-event" x1="${f1(x)}" y1="${26 + (k % 2) * 17}" x2="${f1(x)}" y2="${H - 6}"/><text class="kg-event-name" x="${f1(x + (anchor === "start" ? 4 : anchor === "end" ? -4 : 0))}" y="${20 + (k % 2) * 17}" text-anchor="${anchor}">${t} (${yr})</text>`;
    });
    // lane names
    s += `<text class="kg-lane" x="${Lx - 12}" y="${yBI + 21}" text-anchor="end">Israel</text><text class="kg-lane" x="${Lx - 12}" y="${yBJ + 21}" text-anchor="end">Judah</text>`;
    if (from > 931) s += `<text class="kg-lane soft" x="${Lx - 12}" y="${(yBI + yBJ + BAR) / 2 + 6}" text-anchor="end">one kingdom</text>`;
    // kings: a bar per reign; a name that will not fit inside goes outside, slanted, with a hairline to its bar.
    // Israel's names lean up and to the right, Judah's down and to the left, so both stay inside the frame.
    const GAP = 19;
    const spread = (out, dir) => {   // push the names apart (dir 1: rightward, -1: leftward), then pull back half the drift
      const seq = dir > 0 ? out : [...out].reverse(), push = (o, prev) => dir > 0 ? Math.max(o.lx, prev.lx + GAP) : Math.min(o.lx, prev.lx - GAP);
      seq.forEach((o, k) => { o.lx = o.x; if (k) o.lx = push(o, seq[k - 1]); });
      const drift = seq.length ? (seq[seq.length - 1].lx - seq[seq.length - 1].x) / 2 : 0;
      seq.forEach((o, k) => { o.lx -= drift; if (k) o.lx = push(o, seq[k - 1]); });
    };
    const lane = (list, yB, up) => {
      const out = [];
      let html = "";
      list.filter(k => visible(k[1], k[2])).forEach(([nm, a, b, v, co]) => {
        const x1 = X(Math.min(a, from)), x2 = Math.max(X(Math.max(b, to)), x1 + 3), hot = mark.has(nm) ? " hot" : "";
        if (co && co > a) html += `<rect class="kg-co" x="${f1(X(Math.min(co, from)))}" y="${yB + 9}" width="${f1(x1 - X(Math.min(co, from)))}" height="${BAR - 18}" rx="3"/>`;
        html += `<rect class="kg-bar kg-${v}${hot}" x="${f1(x1)}" y="${yB}" width="${f1(x2 - x1)}" height="${BAR}" rx="4"><title>${nm}, ${a}–${Math.round(b)} BC</title></rect>`;
        if (x2 - x1 >= nm.length * cw + 12) html += `<text class="kg-name in${hot}" x="${f1((x1 + x2) / 2)}" y="${yB + 20}" text-anchor="middle">${nm}</text>`;
        else out.push({ nm, x: (x1 + x2) / 2, hot });
      });
      spread(out, up ? 1 : -1);
      out.forEach(({ nm, x, lx, hot }) => {
        const yA = up ? yB - 4 : yB + BAR + 4, yL = up ? yB - 18 : yB + BAR + 18;
        html += `<path class="kg-lead" d="M${f1(x)} ${yA}L${f1(lx)} ${yL}"/>` + (up
          ? `<text class="kg-name out${hot}" transform="translate(${f1(lx + 2)} ${yL - 2}) rotate(-42)">${nm}</text>`
          : `<text class="kg-name out${hot}" transform="translate(${f1(lx - 2)} ${yL + 6}) rotate(-42)" text-anchor="end">${nm}</text>`);
      });
      return html;
    };
    s += lane(KINGS.israel, yBI, true) + lane(KINGS.judah, yBJ, false);
    // before the split, one kingdom across both lanes
    KINGS.united.filter(k => visible(k[1], k[2])).forEach(([nm, a, b, v]) => {
      const x1 = X(Math.min(a, from)), x2 = X(Math.max(b, to)), hot = mark.has(nm) ? " hot" : "";
      s += `<rect class="kg-bar kg-${v}${hot}" x="${f1(x1)}" y="${yBI}" width="${f1(x2 - x1)}" height="${yBJ + BAR - yBI}" rx="5"/>` +
        (x2 - x1 > nm.length * cw + 10 ? `<text class="kg-name in${hot}" x="${f1((x1 + x2) / 2)}" y="${(yBI + yBJ + BAR) / 2 + 6}" text-anchor="middle">${nm}</text>` : "");
    });
    const pRow = (list, y0) => list.map(({ p, x1, x2, r, right }) => { const yy = y0 + r * PR, hot = mark.has(p[0]) ? " hot" : "";
      return `<g class="kg-prophet${hot}"><rect x="${f1(x1)}" y="${yy}" width="${f1(x2 - x1)}" height="8" rx="4"/><text x="${f1(right ? x2 : x1)}" y="${yy + 21}"${right ? ` text-anchor="end"` : ""}>${p[0]}</text></g>`; }).join("");
    s += pRow(pIs, yPI) + pRow(pJu, yPJ - 4);
    if (prophets && (nIs || nJu)) s += `<text class="kg-lane soft" x="${Lx - 12}" y="${yPJ + 12}" text-anchor="end">prophets</text>` + (nIs ? `<text class="kg-lane soft" x="${Lx - 12}" y="${yPI + 12}" text-anchor="end">prophets</text>` : "");
    box.innerHTML = `<svg class="kings" viewBox="0 0 1000 ${H}" role="img" aria-label="The kings of Israel and Judah, ${from} to ${to} BC">${s}</svg>
      <p class="kg-key"><span class="kg-right"></span>did right in the sight of the LORD <span class="kg-mixed"></span>did right, but not with a perfect heart <span class="kg-evil"></span>did evil in the sight of the LORD</p>`;
  });

  // ---------- Hebrew poetry: one thought said twice ----------
  // div.parallel with a p for each line, each cut into b pieces that match line for line:
  // <div class="parallel" data-kind="same"><p><b>The heavens</b> <b>declare</b> <b>the glory of God;</b></p><p><b>and the firmament</b> <b>sheweth</b> <b>his handywork.</b></p></div>
  // data-kind="same" (says it again), "opposite" (says the other side), "more" (builds on it). The pieces line up in columns, one color each.
  const KINDS = { same: "says it again", opposite: "the other side", more: "builds on it" };
  document.querySelectorAll(".parallel").forEach(box => {
    const lines = [...box.querySelectorAll(":scope > p")];
    const n = Math.max(...lines.map(p => p.querySelectorAll(":scope > b").length));
    box.style.setProperty("--n", n);
    lines.forEach((p, r) => [...p.querySelectorAll(":scope > b")].forEach((b, c) => {
      b.style.setProperty("--r", r + 1); b.style.setProperty("--c", c + 1); b.dataset.c = c % 6;
    }));
    const kind = box.dataset.kind;
    if (KINDS[kind]) box.insertAdjacentHTML("afterbegin", `<span class="pl-kind">${KINDS[kind]}</span>`);
  });


  // ---------- Page chrome: background layers, controls, theme menu ----------
  const home = document.body.dataset.home || "../index.html";
  // A chapter study ("Hosea 1") links back to its book's contents on the home page,
  // and its title slide links to the chapter overview (overview.html?id=<this file's name>)
  const chapterOf = bookRef.match(/^(.+) (\d+)$/);
  const studyId = location.pathname.split("/").pop().replace(/\.html$/, "");
  const topical = /^(topic|doctrine|concept)-/.test(studyId);   // topic studies get the same links
  // a long title ("1 Corinthians 15", "Song of Solomon 2") steps down a size so it stays on one or two lines
  document.querySelectorAll(".slide.title h1").forEach(h => { if (h.textContent.trim().length > 12) h.classList.add("long"); });
  const contents = chapterOf ? `${home}#book=${encodeURIComponent(chapterOf[1])}` : topical ? `${home}#study=${encodeURIComponent(studyId)}` : "";
  if ((chapterOf || topical) && studyId) document.querySelector(".slide.title .inner")?.insertAdjacentHTML("beforeend",
    `<a class="to-overview rise" style="--d:7" href="${home.replace(/index\.html$/, "")}overview.html?id=${encodeURIComponent(studyId)}">${topical ? "Overview" : "Chapter overview"}</a>`);
  document.body.insertAdjacentHTML("afterbegin", `<div class="ambient" aria-hidden="true">
    <div class="sky"></div><div class="stars"></div>
    <div class="liquid"><svg viewBox="0 0 1200 18" preserveAspectRatio="none"><path d="M0 9 Q75 0 150 9 T300 9 T450 9 T600 9 T750 9 T900 9 T1050 9 T1200 9 V18 H0 Z"/></svg></div>
  </div>`);
  document.body.insertAdjacentHTML("beforeend", `
  <nav class="nav" aria-label="Slide controls">
    <a href="${home}" aria-label="All studies"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11l8-7 8 7M6 9.5V20h12V9.5"/></svg></a>
    ${contents ? `<a href="${contents}" aria-label="${chapterOf ? chapterOf[1] : "Topic"}: contents"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5zM12 6.5v13"/></svg></a>` : ""}
    <button type="button" id="prev" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M15 5l-7 7 7 7"/></svg></button>
    <button type="button" id="next" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 5l7 7-7 7"/></svg></button>
    <div class="horizon"><span id="bar"></span></div>
    <span class="count" id="count"></span>
    <button type="button" id="theme" aria-label="Change the look" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-.8 2-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r="1.2" fill="currentColor"/><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor"/><circle cx="15" cy="7.8" r="1.2" fill="currentColor"/></svg></button>
    <button type="button" id="full" aria-label="Full screen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg></button>
  </nav>
  <div class="theme-menu" id="theme-menu" role="menu" aria-label="Look" hidden></div>`);

  const menu = document.getElementById("theme-menu"), themeBtn = document.getElementById("theme");
  // A picked look is saved and used for every slide show; "Each study's own look" clears it
  function drawMenu() {
    const current = root.dataset.theme, saved = valid(store.get()) ? store.get() : null;
    menu.innerHTML = `<p>Look for every slide show</p>
      <button type="button" role="menuitemradio" aria-checked="${!saved}" data-theme-id="">
        <span class="swatch" aria-hidden="true">${THEMES.find(t => t.id === ownTheme).swatch.map(c => `<i style="background:${c}"></i>`).join("")}</span>
        Each study’s own look</button>` + THEMES.map(t =>
      `<button type="button" role="menuitemradio" aria-checked="${t.id === saved}" data-theme-id="${t.id}">
        <span class="swatch" aria-hidden="true">${t.swatch.map(c => `<i style="background:${c}"></i>`).join("")}</span>
        ${t.name}${t.id === ownTheme ? " (this one’s own)" : ""}</button>`).join("");
    menu.querySelectorAll("[data-theme-id]").forEach(b => b.addEventListener("click", () => {
      const id = b.dataset.themeId;
      store.set(id || null);
      applyTheme(id || ownTheme);
      drawMenu();
      closeMenu();
    }));
    themeBtn.title = `Look: ${THEMES.find(t => t.id === current).name}${saved ? "" : " (its own)"}`;
  }
  function openMenu() { drawMenu(); menu.hidden = false; themeBtn.setAttribute("aria-expanded", "true"); menu.querySelector("[aria-checked=true]")?.focus(); }
  function closeMenu() { menu.hidden = true; themeBtn.setAttribute("aria-expanded", "false"); }
  themeBtn.addEventListener("click", e => { e.stopPropagation(); menu.hidden ? openMenu() : closeMenu(); });
  document.addEventListener("click", e => { if (!menu.hidden && !menu.contains(e.target)) closeMenu(); });
  function cycleTheme() {
    const k = THEMES.findIndex(t => t.id === root.dataset.theme);
    const id = THEMES[(k + 1) % THEMES.length].id;
    applyTheme(id);
    store.set(id);
    drawMenu();
  }
  drawMenu();

  // ---------- Deck engine ----------
  let slides = [], i = 0, step = 0, turnAt = -1;
  const stepsOf = s => [...s.querySelectorAll(".step")];

  function go(n, revealAll = false) {
    if (n < 0 || n >= slides.length) return;
    slides.forEach(s => { s.classList.remove("active"); s.setAttribute("aria-hidden", "true"); });
    i = n;
    const s = slides[i];
    const st = stepsOf(s);
    st.forEach(e => e.classList.toggle("on", revealAll));
    step = revealAll ? st.length : 0;
    s.querySelector(".inner").scrollTop = 0;
    s.classList.add("active");
    s.removeAttribute("aria-hidden");
    fit(s);
    render();
  }
  // On a wide screen (the shared screen), a slide too tall for the window shrinks to fit, down to 70%,
  // so nothing hides below the controls. Steps keep their space while hidden, so this holds for every step.
  // Phones keep their normal size and scroll instead.
  function fit(s) {
    const inner = s.querySelector(".inner");
    if (!inner) return;
    inner.style.zoom = inner.style.maxHeight = "";
    if (innerWidth < 700) return;
    const cs = getComputedStyle(s);
    const room = s.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    const tall = inner.scrollHeight;
    if (tall <= room + 2) return;
    const z = Math.max(.7, room / tall);
    inner.style.zoom = z.toFixed(3);
    inner.style.maxHeight = (room / z).toFixed(1) + "px";   // lengths inside a zoomed box are scaled by the zoom
  }
  function next() {
    const st = stepsOf(slides[i]);
    if (step < st.length) {
      st[step].classList.add("on");
      st[step].scrollIntoView({ block: "nearest", behavior: "smooth" });
      step++;
      render();
    } else go(i + 1);
  }
  function prev() {
    if (step > 0) {
      step--;
      stepsOf(slides[i])[step].classList.remove("on");
      render();
    } else go(i - 1, true);
  }
  function render() {
    const p = slides.length > 1 ? i / (slides.length - 1) : 1;
    root.style.setProperty("--p", p.toFixed(3));
    document.body.classList.toggle("past-turn", turnAt >= 0 && i >= turnAt);
    document.getElementById("bar").style.width = (p * 100) + "%";
    document.getElementById("count").textContent = `${i + 1} / ${slides.length}`;
    history.replaceState(null, "", location.search + "#" + (i + 1));
    const btn = slides[i].querySelector(".reveal");
    if (btn) {
      const upcoming = stepsOf(slides[i])[step];
      btn.textContent = !upcoming ? (slides[i + 1]?.classList.contains("qa") ? "Next question" : "Continue")
        : upcoming.classList.contains("answer") ? "Show the answer" : "Show a verse";
    }
  }

  // Controls
  document.getElementById("next").addEventListener("click", next);
  document.getElementById("prev").addEventListener("click", prev);
  document.getElementById("full").addEventListener("click", () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  });
  document.querySelectorAll(".reveal").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); next(); }));
  document.addEventListener("keydown", e => {
    if (!menu.hidden) { if (e.key === "Escape") { closeMenu(); themeBtn.focus(); } return; }
    if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(e.key)) {
      if ((e.key === "Enter" || e.key === " ") && e.target.closest("button, a")) return;
      e.preventDefault(); next();
    } else if (["ArrowLeft", "ArrowUp", "PageUp", "Backspace"].includes(e.key)) { e.preventDefault(); prev(); }
    else if (e.key === "Home") go(0);
    else if (e.key === "End") go(slides.length - 1, true);
    else if (e.key === "f") document.getElementById("full").click();
    else if (e.key === "t") cycleTheme();
  });
  // Click or tap: right side goes forward, left third goes back
  document.getElementById("deck").addEventListener("click", e => {
    if (e.target.closest("button, a")) return;
    if (window.getSelection().toString()) return;
    e.clientX < window.innerWidth * 0.3 ? prev() : next();
  });
  // Swipe on phones
  let tx = null, ty = null;
  document.addEventListener("touchstart", e => {
    if (e.target.closest?.(".tree")) { tx = ty = null; return; }   // a wide family tree scrolls sideways; that's not a swipe
    tx = e.touches[0].clientX; ty = e.touches[0].clientY;
  }, { passive: true });
  document.addEventListener("touchend", e => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) dx < 0 ? next() : prev();
    tx = ty = null;
  });

  // Start: #12 opens slide 12; #v15 opens the slide that reads verse 15 (used by the glossary)
  slides = [...document.querySelectorAll(".slide")];
  turnAt = slides.findIndex(s => s.classList.contains("turn"));
  const verse = location.hash.match(/^#v(\d+)$/);
  const atVerse = verse ? slides.findIndex(s => s.dataset.v && range(s.dataset.v).includes(Number(verse[1]))) : -1;
  const fromHash = parseInt(location.hash.slice(1), 10);
  go(atVerse >= 0 ? atVerse : Number.isFinite(fromHash) ? Math.min(Math.max(fromHash - 1, 0), slides.length - 1) : 0);
  // refit when the window changes, the web fonts arrive, or the look changes the type
  let fitQueued = false;
  const refit = () => { if (fitQueued) return; fitQueued = true; requestAnimationFrame(() => { fitQueued = false; fit(slides[i]); }); };
  addEventListener("resize", refit);
  document.fonts?.ready.then(refit);
  new MutationObserver(refit).observe(root, { attributes: true, attributeFilter: ["data-theme"] });

  // For testing and for pages that need it
  window.Deck = { go, next, prev, fit, get index() { return i; }, get step() { return step; }, get slides() { return slides; }, themes: THEMES, applyTheme };
})();
