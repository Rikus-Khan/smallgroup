// Bakes the terrain maps for svg.map[data-terrain]: a shaded-relief picture (assets/maps/<name>.webp) and its coastline,
// lakes and rivers (assets/maps/<name>.js), both for the same lon/lat box.
//   node tools/terrain.mjs neareast | sinai | land | world | gospel | galilee | jerusalem | nineveh | all
// Elevation: AWS Terrain Tiles (terrarium PNGs, public). Coast, lakes, rivers: Natural Earth (public domain).
// Downloads are cached in the system temp folder. Needs Microsoft Edge to encode the WebP.
// If you change a box here, change OT_MAPS in assets/deck.js to match (the heights are printed at the end).
import fs from "node:fs";
import os from "node:os";
import zlib from "node:zlib";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const PRESETS = {   // name: [lon0, lon1, lat0, lat1, tile zoom, picture width, relief exaggeration, Natural Earth scale, options]
  neareast: [24, 50, 22, 40, 7, 2000, 7, "50m"],
  sinai: [29.5, 37, 26.8, 32.2, 9, 2000, 3.5, "10m"],
  land: [33.9, 37, 30.4, 33.6, 10, 1600, 2.2, "10m"],
  // the two New Testament maps keep the frames the older drawn maps used (svg[data-world] 908 × 576, svg[data-land] 400 × 560),
  // so every route and mark already drawn on them still lands in the right place
  world: [4, 40.0317, 29, 47, 7, 2300, 9, "50m", { frame: [908, 576], margin: 40, lush: 1 }],
  gospel: [34.1955, 36.2648, 31.0164, 33.4417, 11, 1600, 2.4, "10m", { frame: [400, 560], margin: 60 }],
  // close-ups: the Sea of Galilee, Jerusalem with the Mount of Olives, and Nineveh
  galilee: [35.42, 35.73, 32.62, 32.95, 13, 1600, 2, "10m", { wet: .35, near: 1, lake: { seed: [35.59, 32.82], from: -216, to: -208 }, rivers: [["Jordan",[[35.632,32.95],[35.629,32.93],[35.627,32.905],[35.626,32.895]]],["Jordan",[[35.572,32.708],[35.567,32.69],[35.57,32.67],[35.566,32.645],[35.57,32.62]]]] }],
  jerusalem: [35.212, 35.272, 31.758, 31.798, 15, 2000, 1.8, "10m", { wet: .05, near: .1, soften: 9, local: [610, 820] }],
  // Nineveh: the Tigris traced from the relief (its channel today), and the Khosr through the city
  nineveh: [43.09, 43.21, 36.32, 36.41, 14, 1600, 2.5, "10m", { wet: .35, near: .6, soften: 4, rivers: [["Tigris", [[43.09,36.398],[43.1148,36.3931],[43.1125,36.387],[43.1073,36.381],[43.108,36.3647],[43.1215,36.3599],[43.135,36.3466],[43.15,36.3345],[43.171,36.32]]], ["Khosr", [[43.21,36.376],[43.19,36.368],[43.175,36.362],[43.16,36.357],[43.148,36.355],[43.135,36.351],[43.128,36.354]]]] }]
};
const want = process.argv[2];
if (!PRESETS[want] && want !== "all") { console.error(`usage: node tools/terrain.mjs ${Object.keys(PRESETS).join(" | ")} | all`); process.exit(2); }
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cache = path.join(os.tmpdir(), "smallgroup-terrain");
const cacheDir = path.join(cache, "tiles");
fs.mkdirSync(cacheDir, { recursive: true });
fs.mkdirSync(path.join(cache, "ne"), { recursive: true });
for (const f of ["ne_50m_land", "ne_10m_land", "ne_10m_lakes", "ne_10m_rivers_lake_centerlines", "ne_50m_rivers_lake_centerlines"]) {
  const dest = path.join(cache, "ne", f + ".geojson");
  if (fs.existsSync(dest)) continue;
  console.log("downloading", f);
  const r = await fetch(`https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/${f}.geojson`);
  if (!r.ok) throw new Error(`${f}: ${r.status}`);
  fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer()));
}
for (const name of want === "all" ? Object.keys(PRESETS) : [want]) await bake(name, ...PRESETS[name]);

async function bake(name, L0, L1, B0, B1, Z, W, EX, scale, opt = {}) {
// a framed map can bake a margin of terrain around its frame, so a slide that shows more than the frame still shows land and sea
const M0 = opt.frame && opt.margin || 0, F = opt.frame || [1000, 0];
if (M0) { const fx = F[0] / (L1 - L0), fy = F[1] / (B1 - B0); L0 -= M0 / fx; L1 += M0 / fx; B0 -= M0 / fy; B1 += M0 / fy; }
// equirectangular, true scale at the middle latitude (or the frame's own shape, for the older maps)
const latMid = (B0 + B1) / 2, kx = W / (L1 - L0);
const H = opt.frame ? Math.round(W * (F[1] + 2 * M0) / (F[0] + 2 * M0)) : Math.round((B1 - B0) * kx / Math.cos(latMid * Math.PI / 180)), ky = H / (B1 - B0);
const PX = lon => (lon - L0) * kx, PY = lat => (B1 - lat) * ky;

// ---------- PNG decode / encode ----------
function decodePNG(buf) {
  let p = 8, w, h, ct, idat = [];
  while (p < buf.length) {
    const len = buf.readUInt32BE(p), type = buf.toString("ascii", p + 4, p + 8), data = buf.subarray(p + 8, p + 8 + len);
    if (type === "IHDR") { w = data.readUInt32BE(0); h = data.readUInt32BE(4); ct = data[9]; }
    if (type === "IDAT") idat.push(data);
    p += 12 + len;
  }
  const bpp = ct === 6 ? 4 : ct === 2 ? 3 : (() => { throw new Error("png color type " + ct); })();
  const raw = zlib.inflateSync(Buffer.concat(idat)), stride = w * bpp, out = Buffer.alloc(h * stride);
  for (let y = 0; y < h; y++) {
    const f = raw[y * (stride + 1)], src = y * (stride + 1) + 1, o = y * stride;
    for (let x = 0; x < stride; x++) {
      const a = x >= bpp ? out[o + x - bpp] : 0, b = y ? out[o - stride + x] : 0, c = x >= bpp && y ? out[o - stride + x - bpp] : 0;
      let v = raw[src + x];
      if (f === 1) v += a; else if (f === 2) v += b; else if (f === 3) v += (a + b) >> 1;
      else if (f === 4) { const pp = a + b - c, pa = Math.abs(pp - a), pb = Math.abs(pp - b), pc = Math.abs(pp - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c; }
      out[o + x] = v & 255;
    }
  }
  return { w, h, bpp, px: out };
}
const crcT = new Int32Array(256).map((_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c; });
const crc = b => { let c = -1; for (const x of b) c = crcT[(c ^ x) & 255] ^ (c >>> 8); return (c ^ -1) >>> 0; };
function encodePNG(w, h, rgb) {
  const chunk = (t, d) => { const l = Buffer.alloc(4); l.writeUInt32BE(d.length); const td = Buffer.concat([Buffer.from(t), d]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([l, td, c]); };
  const ih = Buffer.alloc(13); ih.writeUInt32BE(w, 0); ih.writeUInt32BE(h, 4); ih[8] = 8; ih[9] = 2;
  const raw = Buffer.alloc(h * (w * 3 + 1));
  for (let y = 0; y < h; y++) { raw[y * (w * 3 + 1)] = 0; rgb.copy(raw, y * (w * 3 + 1) + 1, y * w * 3, (y + 1) * w * 3); }
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk("IHDR", ih), chunk("IDAT", zlib.deflateSync(raw, { level: 9 })), chunk("IEND", Buffer.alloc(0))]);
}

// ---------- tiles ----------
const N = 2 ** Z, T = 256;
const mx = lon => (lon + 180) / 360 * N * T;
const my = lat => { const f = lat * Math.PI / 180; return (1 - Math.log(Math.tan(f) + 1 / Math.cos(f)) / Math.PI) / 2 * N * T; };
const tx0 = Math.floor(mx(L0) / T), tx1 = Math.floor(mx(L1) / T), ty0 = Math.floor(my(B1) / T), ty1 = Math.floor(my(B0) / T);
const tiles = new Map();
const jobs = [];
for (let ty = ty0; ty <= ty1; ty++) for (let tx = tx0; tx <= tx1; tx++) jobs.push([tx, ty]);
console.log(`${name}: ${jobs.length} tiles at z${Z}, output ${W}×${H}`);
await Promise.all(jobs.map(async ([tx, ty]) => {
  const f = path.join(cacheDir, `${Z}-${tx}-${ty}.png`);
  if (!fs.existsSync(f)) {
    const r = await fetch(`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${Z}/${tx}/${ty}.png`);
    if (!r.ok) throw new Error(`tile ${Z}/${tx}/${ty}: ${r.status}`);
    fs.writeFileSync(f, Buffer.from(await r.arrayBuffer()));
  }
  const t = decodePNG(fs.readFileSync(f)), e = new Float32Array(T * T);
  for (let k = 0; k < T * T; k++) { const o = k * t.bpp; e[k] = t.px[o] * 256 + t.px[o + 1] + t.px[o + 2] / 256 - 32768; }
  tiles.set(`${tx},${ty}`, e);
}));
const elevAt = (gx, gy) => {
  const x = Math.min(Math.max(gx, 0), N * T - 1), y = Math.min(Math.max(gy, 0), N * T - 1);
  const t = tiles.get(`${Math.floor(x / T)},${Math.floor(y / T)}`);
  return t ? t[(Math.floor(y) % T) * T + (Math.floor(x) % T)] : 0;
};
const sample = (gx, gy) => {   // bilinear
  const x0 = Math.floor(gx), y0 = Math.floor(gy), fx = gx - x0, fy = gy - y0;
  return elevAt(x0, y0) * (1 - fx) * (1 - fy) + elevAt(x0 + 1, y0) * fx * (1 - fy) + elevAt(x0, y0 + 1) * (1 - fx) * fy + elevAt(x0 + 1, y0 + 1) * fx * fy;
};

// ---------- elevation grid in output space ----------
const E = new Float32Array(W * H);
for (let y = 0; y < H; y++) {
  const lat = B1 - (y + .5) / ky, gy = my(lat);
  for (let x = 0; x < W; x++) E[y * W + x] = sample(mx(L0 + (x + .5) / kx), gy);
}

// a lake found from the elevation itself: the flat water surface (opt.lake = { seed: [lon, lat], from, to } in metres), flood-filled from a seed
const water = new Uint8Array(W * H);
if (opt.lake) { const { seed, from, to } = opt.lake, st = [Math.round((B1 - seed[1]) * ky) * W + Math.round((seed[0] - L0) * kx)];
  while (st.length) { const k = st.pop(); if (water[k] || E[k] < from || E[k] > to) continue; water[k] = 1; const x = k % W;
    if (x > 0) st.push(k - 1); if (x < W - 1) st.push(k + 1); if (k >= W) st.push(k - W); if (k < W * (H - 1)) st.push(k + W); }
  // smooth the shore: open (drop specks and thin tongues), then close (fill little holes), with a round brush
  const R = 4, morph = (src, grow) => { const out = new Uint8Array(W * H);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { let v = grow ? 0 : 1;
      for (let j = -R; j <= R && v === (grow ? 0 : 1); j++) for (let i = -R; i <= R; i++) { if (i * i + j * j > R * R) continue;
        const X = Math.min(W - 1, Math.max(0, x + i)), Y = Math.min(H - 1, Math.max(0, y + j)), w = src[Y * W + X];
        if (grow && w) { v = 1; break; } if (!grow && !w) { v = 0; break; } }
      out[y * W + x] = v; }
    return out; };
  water.set(morph(morph(morph(morph(water, false), true), true), false)); }
// close-ups: the elevation data is coarser than the picture, so soften it (box blur, opt.soften pixels) before shading
if (opt.soften) { const R = opt.soften, t = new Float32Array(W * H);
  for (let pass = 0; pass < 2; pass++) {
    for (let y = 0; y < H; y++) { let a = 0, n = 0; for (let x = -R; x < W; x++) { if (x + R < W) { a += E[y * W + x + R]; n++; } if (x - R - 1 >= 0) { a -= E[y * W + x - R - 1]; n--; } if (x >= 0) t[y * W + x] = a / n; } }
    for (let x = 0; x < W; x++) { let a = 0, n = 0; for (let y = -R; y < H; y++) { if (y + R < H) { a += t[(y + R) * W + x]; n++; } if (y - R - 1 >= 0) { a -= t[(y - R - 1) * W + x]; n--; } if (y >= 0) E[y * W + x] = a / n; } } } }
// ---------- hillshade (several light directions) ----------
const dxm = 111320 * Math.cos(latMid * Math.PI / 180) / kx, dym = 110574 / ky;
const lights = [[315, .55], [270, .2], [0, .15], [225, .1]].map(([az, w]) => { const a = (360 - az + 90) * Math.PI / 180; return [Math.cos(a), Math.sin(a), w]; });
const alt = 45 * Math.PI / 180;
const shade = new Float32Array(W * H);
const at = (x, y) => E[Math.min(H - 1, Math.max(0, y)) * W + Math.min(W - 1, Math.max(0, x))];
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
  const dzdx = ((at(x + 1, y - 1) + 2 * at(x + 1, y) + at(x + 1, y + 1)) - (at(x - 1, y - 1) + 2 * at(x - 1, y) + at(x - 1, y + 1))) / (8 * dxm) * EX;
  const dzdy = ((at(x - 1, y + 1) + 2 * at(x, y + 1) + at(x + 1, y + 1)) - (at(x - 1, y - 1) + 2 * at(x, y - 1) + at(x + 1, y - 1))) / (8 * dym) * EX;
  const slope = Math.atan(Math.hypot(dzdx, dzdy));
  let s = 0;
  for (const [lx, ly, w] of lights) {
    // surface normal (-dzdx, dzdy, 1) with y pointing north (image y grows south)
    const nx = -dzdx, ny = dzdy, nz = 1, len = Math.hypot(nx, ny, nz);
    const L = [lx * Math.cos(alt), ly * Math.cos(alt), Math.sin(alt)];
    s += w * Math.max(0, (nx * L[0] + ny * L[1] + nz * L[2]) / len);
  }
  shade[y * W + x] = s / Math.sin(alt) * (1 - .15 * slope);   // flat ground = about 1
}

// ---------- colour: hypsometric tint for dry lands ----------
const ramp = [   // metres → colour (desert-and-highland palette)
  [-500, [196, 190, 150]], [0, [205, 200, 160]], [150, [214, 204, 166]], [400, [222, 206, 165]], [800, [214, 190, 148]],
  [1300, [196, 168, 130]], [2000, [178, 152, 122]], [2800, [170, 160, 150]], [3800, [222, 220, 216]], [5000, [250, 250, 250]]];
// a close-up can tint by its own height range instead (opt.local = [low, high] metres): valleys darker, ridges lighter
const tint = opt.local ? e => { const t = Math.min(1, Math.max(0, (e - opt.local[0]) / (opt.local[1] - opt.local[0]))); return [168, 146, 108].map((v, i) => v + ([238, 226, 192][i] - v) * Math.pow(t, .8)); } : e => { let k = 0; while (k < ramp.length - 2 && e > ramp[k + 1][0]) k++; const [a, ca] = ramp[k], [b, cb] = ramp[k + 1], t = Math.min(1, Math.max(0, (e - a) / (b - a))); return ca.map((c, i) => c + (cb[i] - c) * t); };
// ---------- the green of watered land: river valleys, the Nile delta, the Mesopotamian plain ----------
const fert = new Float32Array(W * H), near = new Uint8Array(W * H);
{
  const kmPx = 111.32 * Math.cos(latMid * Math.PI / 180) / kx, r = Math.max(2, (opt.wet ?? 7) / kmPx);
  const stamp = (x, y, rad) => { for (let j = Math.floor(y - rad); j <= y + rad; j++) for (let i = Math.floor(x - rad); i <= x + rad; i++)
    if (i >= 0 && j >= 0 && i < W && j < H && (i - x) ** 2 + (j - y) ** 2 <= rad * rad) fert[j * W + i] = 1; };
  const stampNear = (x, y, rad) => { for (let j = Math.floor(y - rad); j <= y + rad; j++) for (let i = Math.floor(x - rad); i <= x + rad; i++)
    if (i >= 0 && j >= 0 && i < W && j < H && (i - x) ** 2 + (j - y) ** 2 <= rad * rad) near[j * W + i] = 1; };
  const WET = /Nile|Rosetta|Damietta|Euphrates|Firat|Furat|Tigris|Dicle|Jordan|Karkheh|Shatt al Arab|Orontes|Asi/i;
  const rv = opt.rivers ? opt.rivers.map(([name, line]) => ({ properties: { name }, geometry: { type: "LineString", coordinates: line } })) : JSON.parse(fs.readFileSync(path.join(cache, "ne", `ne_${scale === "10m" ? "10m" : "50m"}_rivers_lake_centerlines.geojson`))).features;
  for (const f of rv) if (WET.test(f.properties.name || "")) for (const l of (f.geometry.type === "LineString" ? [f.geometry.coordinates] : f.geometry.coordinates))
    for (let k = 1; k < l.length; k++) { const [a, b] = [l[k - 1], l[k]], n = Math.ceil(Math.hypot((b[0] - a[0]) * kx, (b[1] - a[1]) * ky) / 2) + 1;
      for (let s = 0; s <= n; s++) { const X = PX(a[0] + (b[0] - a[0]) * s / n), Y = PY(a[1] + (b[1] - a[1]) * s / n); stamp(X, Y, r); if (/Euphrates|Firat|Furat|Tigris|Dicle|Shatt/i.test(f.properties.name)) stampNear(X, Y, (opt.near ?? 45) / kmPx); } }
  const inTri = (lon, lat, P) => { let c = false; for (let i = 0, j = P.length - 1; i < P.length; j = i++) if ((P[i][1] > lat) !== (P[j][1] > lat) && lon < (P[j][0] - P[i][0]) * (lat - P[i][1]) / (P[j][1] - P[i][1]) + P[i][0]) c = !c; return c; };
  const DELTA = [[31.25, 29.95], [29.85, 31.15], [30.4, 31.5], [31.9, 31.55], [32.35, 31.25]];
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const lon = L0 + (x + .5) / kx, lat = B1 - (y + .5) / ky, e = E[y * W + x];
    if (e < 30 && inTri(lon, lat, DELTA)) fert[y * W + x] = 1;
    if (e < 70 && near[y * W + x] && lat < 34.3) fert[y * W + x] = Math.max(fert[y * W + x], .55 + .45 * Math.max(0, (70 - e) / 70));
    if (e > 500) fert[y * W + x] = 0;
  }
  const blur = (a, rad) => { const t = new Float32Array(W * H);
    for (let y = 0; y < H; y++) { let s = 0; for (let x = -rad; x < W; x++) { if (x + rad < W) s += a[y * W + x + rad]; if (x - rad - 1 >= 0) s -= a[y * W + x - rad - 1]; if (x >= 0) t[y * W + x] = s / (2 * rad + 1); } }
    for (let x = 0; x < W; x++) { let s = 0; for (let y = -rad; y < H; y++) { if (y + rad < H) s += t[(y + rad) * W + x]; if (y - rad - 1 >= 0) s -= t[(y - rad - 1) * W + x]; if (y >= 0) a[y * W + x] = s / (2 * rad + 1); } } };
  const br = Math.max(2, Math.round(r * 1.1)); blur(fert, br); blur(fert, br); blur(fert, Math.max(1, br >> 1));
}
const GREEN = [150, 166, 108];
const noise = (x, y) => { const h = (a, b) => { const n = Math.sin(a * 127.1 + b * 311.7) * 43758.5453; return n - Math.floor(n); };
  let v = 0, amp = .5, f = 1 / 24; for (let o = 0; o < 4; o++, amp /= 2, f *= 2) { const X = x * f, Y = y * f, i = Math.floor(X), j = Math.floor(Y), u = X - i, w = Y - j, sm = t => t * t * (3 - 2 * t);
    v += amp * (h(i, j) * (1 - sm(u)) * (1 - sm(w)) + h(i + 1, j) * sm(u) * (1 - sm(w)) + h(i, j + 1) * (1 - sm(u)) * sm(w) + h(i + 1, j + 1) * sm(u) * sm(w)); } return v; };
const OLIVE = [168, 172, 122];
const lushAt = (k, c) => { if (!opt.lush) return c; const lat = B1 - (((k / W) | 0) + .5) / ky, e = E[k];
  // the deserts of Egypt, Libya and Arabia stay sand; the lands round the northern sea are scrub and olive groves
  const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const lon = L0 + (k % W + .5) / kx, desert = ss(36.0, 37.6, lon) * (1 - ss(35.2, 37.2, lat));
  const t = opt.lush * ss(31.2, 34.8, lat) * (1 - desert) * (1 - .5 * ss(900, 2200, e)) * (.55 + .3 * noise(k % W, (k / W) | 0));
  return c.map((v, i) => v + (OLIVE[i] - v) * t); };
const col = Buffer.alloc(W * H * 3);
for (let k = 0; k < W * H; k++) {
  const s = shade[k], c0 = tint(E[k]), g0 = Math.min(1, fert[k] * 1.25) * (.6 + .35 * noise(k % W, (k / W) | 0)), c = lushAt(k, c0.map((v, i) => v + (GREEN[i] - v) * g0));
  // soft light: lift highlights a little, keep shadows warm
  for (let i = 0; i < 3; i++) col[k * 3 + i] = Math.max(0, Math.min(255, c[i] * (.22 + .86 * s) + (s > 1 ? (s - 1) * 60 : 0)));
  if (water[k]) { const x = k % W, edge = !water[k - 1] || !water[k + 1] || !water[k - W] || !water[k + W] || !water[k - 2] || !water[k + 2] || !water[k - 2 * W] || !water[k + 2 * W];
    (edge ? [79, 117, 132] : [143, 188, 203]).forEach((v, i) => col[k * 3 + i] = v); }
}
const pngPath = path.join(cache, `${name}.png`);
fs.writeFileSync(pngPath, encodePNG(W, H, col));

// ---------- vectors ----------
const MODERN = /Nasser|Assad|Ataturk|Keban|Tharthar|Habbaniyah|Razazah|Suez|Ismailiya|Gharraf|Hindiyah|Hillah|Saksak|Baraj/i;
const read = f => JSON.parse(fs.readFileSync(path.join(cache, "ne", f + ".geojson")));
const pad = 1.5, bx = [L0 - pad, L1 + pad, B0 - pad, B1 + pad];
function clipRing(ring) {   // Sutherland–Hodgman against the padded box
  const edges = [[p => p[0] >= bx[0], (a, b) => { const t = (bx[0] - a[0]) / (b[0] - a[0]); return [bx[0], a[1] + t * (b[1] - a[1])]; }],
    [p => p[0] <= bx[1], (a, b) => { const t = (bx[1] - a[0]) / (b[0] - a[0]); return [bx[1], a[1] + t * (b[1] - a[1])]; }],
    [p => p[1] >= bx[2], (a, b) => { const t = (bx[2] - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), bx[2]]; }],
    [p => p[1] <= bx[3], (a, b) => { const t = (bx[3] - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), bx[3]]; }]];
  let pts = ring;
  for (const [inside, cut] of edges) {
    const out = [];
    for (let i = 0; i < pts.length; i++) {
      const a = pts[(i + pts.length - 1) % pts.length], b = pts[i];
      if (inside(b)) { if (!inside(a)) out.push(cut(a, b)); out.push(b); } else if (inside(a)) out.push(cut(a, b));
    }
    pts = out;
    if (!pts.length) break;
  }
  return pts;
}
const FW = opt.frame ? F[0] + 2 * M0 : 1000, VS = FW / W, tol = .45 * FW / 1000;
const toD = (pts, closed) => {
  let d = "", last = null;
  for (const [lon, lat] of pts) {
    const x = PX(lon) * VS - M0, y = PY(lat) * VS - M0;
    if (last && Math.hypot(x - last[0], y - last[1]) < tol) continue;
    d += `${d ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`; last = [x, y];
  }
  return d && closed ? d + "Z" : d;
};
const polys = g => g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : [];
const lines = g => g.type === "LineString" ? [g.coordinates] : g.type === "MultiLineString" ? g.coordinates : [];
const inBox = pts => pts.some(([a, b]) => a > bx[0] && a < bx[1] && b > bx[2] && b < bx[3]);
const land = read(`ne_${scale}_land`).features.flatMap(f => polys(f.geometry)).flatMap(p => p.map(r => clipRing(r))).filter(r => r.length > 2).map(r => toD(r, true)).join("");
const lakes = opt.lake ? "" : read("ne_10m_lakes").features.filter(f => !MODERN.test(f.properties.name || "")).flatMap(f => polys(f.geometry)).flatMap(p => p).filter(inBox).map(r => toD(clipRing(r), true)).join("");
const rivers = opt.rivers ? opt.rivers.map(([n, l]) => ({ name: n, d: toD(l, false) })) : read(`ne_${scale}_rivers_lake_centerlines`).features.filter(f => !MODERN.test(f.properties.name || "") && f.properties.featurecla !== "Lake Centerline")
  .flatMap(f => lines(f.geometry).filter(inBox).map(l => ({ name: f.properties.name, rank: f.properties.scalerank, d: toD(l, false) })));
const data = { box: [L0, L1, B0, B1], w: FW, h: +(H * VS).toFixed(2), ...(M0 ? { ox: -M0, oy: -M0 } : {}), land, lakes, rivers: rivers.filter(r => r.d.includes("L")).map(r => ({ n: r.name || "", d: r.d })) };
fs.mkdirSync(path.join(root, "assets/maps"), { recursive: true });
fs.writeFileSync(path.join(root, "assets/maps", `${name}.js`), `// ${name}: coastline, lakes and rivers from Natural Earth (public domain), projected for the terrain map. Made by tools/terrain.mjs.\n(window.TERRAIN = window.TERRAIN || {})[${JSON.stringify(name)}] = ${JSON.stringify(data)};\n`);
toWebp(pngPath, path.join(root, "assets/maps", `${name}.webp`));
console.log(`${name}: done. OT_MAPS.${name}.h = ${data.h}`);
console.log(`${name}: land ${land.length} chars, lakes ${lakes.length}, rivers ${rivers.length}`);
}

// PNG → WebP through Edge's canvas encoder (headless), so no image library is needed
function toWebp(png, out, q = .8) {
  const tmp = path.join(cache, "towebp.html");
  fs.writeFileSync(tmp, `<!doctype html><body><pre id="o"></pre><script>
const i = new Image(); i.onload = () => { const c = document.createElement("canvas"); c.width = i.width; c.height = i.height; c.getContext("2d").drawImage(i, 0, 0);
document.getElementById("o").textContent = "WEBP:" + c.toDataURL("image/webp", ${q}).split(",")[1] + ":END"; };
i.src = "data:image/png;base64,${fs.readFileSync(png).toString("base64")}";</script>`);
  const edge = ["C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", "C:/Program Files/Microsoft/Edge/Application/msedge.exe"].find(f => fs.existsSync(f));
  if (!edge) throw new Error("Microsoft Edge not found; the PNG is at " + png);
  const dom = execFileSync(edge, ["--headless=new", "--disable-gpu", `--user-data-dir=${path.join(cache, "edge")}`, "--virtual-time-budget=20000", "--dump-dom",
    "file:///" + tmp.split(path.sep).join("/")], { maxBuffer: 1 << 28, stdio: ["ignore", "pipe", "ignore"] }).toString();
  const m = dom.match(/WEBP:([A-Za-z0-9+/=]+):END/);
  if (!m) throw new Error("Edge gave no WebP");
  fs.writeFileSync(out, Buffer.from(m[1], "base64"));
  console.log(out, (fs.statSync(out).size / 1024).toFixed(0) + " KB");
}
