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

  // ---------- Page chrome: background layers, controls, theme menu ----------
  const home = document.body.dataset.home || "../index.html";
  document.body.insertAdjacentHTML("afterbegin", `<div class="ambient" aria-hidden="true">
    <div class="sky"></div><div class="stars"></div>
    <div class="liquid"><svg viewBox="0 0 1200 18" preserveAspectRatio="none"><path d="M0 9 Q75 0 150 9 T300 9 T450 9 T600 9 T750 9 T900 9 T1050 9 T1200 9 V18 H0 Z"/></svg></div>
  </div>`);
  document.body.insertAdjacentHTML("beforeend", `
  <nav class="nav" aria-label="Slide controls">
    <a href="${home}" aria-label="All studies"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11l8-7 8 7M6 9.5V20h12V9.5"/></svg></a>
    <button type="button" id="prev" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M15 5l-7 7 7 7"/></svg></button>
    <button type="button" id="next" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 5l7 7-7 7"/></svg></button>
    <div class="horizon"><span id="bar"></span></div>
    <span class="count" id="count"></span>
    <button type="button" id="theme" aria-label="Change the look" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-.8 2-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r="1.2" fill="currentColor"/><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor"/><circle cx="15" cy="7.8" r="1.2" fill="currentColor"/></svg></button>
    <button type="button" id="full" aria-label="Full screen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg></button>
  </nav>
  <div class="theme-menu" id="theme-menu" role="menu" aria-label="Look" hidden></div>`);

  const menu = document.getElementById("theme-menu"), themeBtn = document.getElementById("theme");
  function drawMenu() {
    const current = root.dataset.theme;
    menu.innerHTML = `<p>Look for this slide show</p>` + THEMES.map(t =>
      `<button type="button" role="menuitemradio" aria-checked="${t.id === current}" data-theme-id="${t.id}">
        <span class="swatch" aria-hidden="true">${t.swatch.map(c => `<i style="background:${c}"></i>`).join("")}</span>
        ${t.name}${t.id === ownTheme ? " (its own)" : ""}</button>`).join("");
    menu.querySelectorAll("[data-theme-id]").forEach(b => b.addEventListener("click", () => {
      const id = b.dataset.themeId;
      applyTheme(id);
      store.set(id === ownTheme ? null : id);   // picking a study's own look clears the saved choice
      drawMenu();
      closeMenu();
    }));
    themeBtn.title = `Look: ${THEMES.find(t => t.id === current).name}`;
  }
  function openMenu() { drawMenu(); menu.hidden = false; themeBtn.setAttribute("aria-expanded", "true"); menu.querySelector("[aria-checked=true]")?.focus(); }
  function closeMenu() { menu.hidden = true; themeBtn.setAttribute("aria-expanded", "false"); }
  themeBtn.addEventListener("click", e => { e.stopPropagation(); menu.hidden ? openMenu() : closeMenu(); });
  document.addEventListener("click", e => { if (!menu.hidden && !menu.contains(e.target)) closeMenu(); });
  function cycleTheme() {
    const k = THEMES.findIndex(t => t.id === root.dataset.theme);
    const id = THEMES[(k + 1) % THEMES.length].id;
    applyTheme(id);
    store.set(id === ownTheme ? null : id);
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
