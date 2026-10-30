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

  if (verses) {
    // Full-verse slides
    document.querySelectorAll(".slide.verse").forEach(s => {
      const nums = range(s.dataset.v);
      const chars = nums.reduce((t, n) => t + verses[n].length, 0);
      const vs = chars < 260 ? 1 : chars < 420 ? .88 : chars < 600 ? .78 : .7;
      const body = nums.map((n, k) =>
        `<p class="v rise" style="--d:${k * 2 + 1}"><span class="vn">${verseNo(n)}</span>${highlight(verses[n], s.dataset.hl)}</p>`).join("");
      const carved = String(nums[0]).includes(":") ? span(nums) : `${chapter}:${span(nums)}`;
      s.innerHTML = `<div class="inner"><p class="carved rise" aria-hidden="true">${carved}</p>` +
        `<div class="vtext" style="--vs:${vs}">${body}</div><p class="vref rise" style="--d:${nums.length * 2 + 1}">${refText(nums)}</p></div>`;
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

  // ---------- Page chrome: background layers, controls, theme menu ----------
  const home = document.body.dataset.home || "../index.html";
  // A chapter study ("Hosea 1") links back to its book's contents on the home page,
  // and its title slide links to the chapter overview (overview.html?id=<this file's name>)
  const chapterOf = bookRef.match(/^(.+) (\d+)$/);
  const studyId = location.pathname.split("/").pop().replace(/\.html$/, "");
  const contents = chapterOf ? `${home}#book=${encodeURIComponent(chapterOf[1])}` : "";
  if (chapterOf && studyId) document.querySelector(".slide.title .inner")?.insertAdjacentHTML("beforeend",
    `<a class="to-overview rise" style="--d:7" href="${home.replace(/index\.html$/, "")}overview.html?id=${encodeURIComponent(studyId)}">Chapter overview</a>`);
  document.body.insertAdjacentHTML("afterbegin", `<div class="ambient" aria-hidden="true">
    <div class="sky"></div><div class="stars"></div>
    <div class="liquid"><svg viewBox="0 0 1200 18" preserveAspectRatio="none"><path d="M0 9 Q75 0 150 9 T300 9 T450 9 T600 9 T750 9 T900 9 T1050 9 T1200 9 V18 H0 Z"/></svg></div>
  </div>`);
  document.body.insertAdjacentHTML("beforeend", `
  <nav class="nav" aria-label="Slide controls">
    <a href="${home}" aria-label="All studies"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11l8-7 8 7M6 9.5V20h12V9.5"/></svg></a>
    ${contents ? `<a href="${contents}" aria-label="${chapterOf[1]}: contents"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5zM12 6.5v13"/></svg></a>` : ""}
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
    render();
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
  document.addEventListener("touchstart", e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
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

  // For testing and for pages that need it
  window.Deck = { go, next, prev, get index() { return i; }, get step() { return step; }, get slides() { return slides; }, themes: THEMES, applyTheme };
})();
