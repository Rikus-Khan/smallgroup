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
    ["perdition", "ruin, destruction"], ["iniquity|iniquities", "sin, wrongdoing"], ["wherefore", "so, therefore; (asking) why"],
    ["aileth", "is troubling (what aileth thee = what's wrong?)"], ["badest", "told, commanded (bade)"], ["bondwoman", "a slave woman"],
    ["brimstone", "burning sulphur"], ["buryingplace", "a burial place"], ["chode", "quarrelled, scolded"],
    ["clave", "clung to, held fast (or: split)"], ["commune|communed", "talk together"], ["concubine|concubines", "a secondary wife"],
    ["damsel", "a young woman"], ["digged", "dug"], ["endued", "gifted, given"],
    ["eventide", "evening"], ["fetcht", "fetched"], ["gat", "got, went"],
    ["hasted", "hurried"], ["hindermost", "last, at the back"], ["innocency", "innocence"],
    ["intreat|intreated", "plead, pray (or: treat)"], ["lentiles", "lentils"], ["lien", "lain"],
    ["merchantmen", "merchants, traders"], ["milch", "giving milk"], ["morrow", "the next day"],
    ["obeisance", "a bow of respect"], ["pilled", "peeled"], ["pottage", "thick soup, stew"],
    ["provender", "animal feed"], ["ringstraked", "striped (ring-streaked)"], ["grisled", "spotted, speckled"],
    ["spicery", "spices"], ["stead", "place (in his stead = in his place)"], ["stript", "stripped"],
    ["subtilty", "cunning, craftiness"], ["supplanted", "tripped up, took the place of"], ["sware|swear", "took an oath"],
    ["tabret", "a small hand drum"], ["tarry|tarried|tarrieth", "stay, wait"], ["threescore", "sixty"],
    ["to wit", "that is, namely"], ["ungirded", "unharnessed"], ["vail", "veil"],
    ["venison", "wild game"], ["whoredom|whoredoms", "prostitution; unfaithfulness"], ["yesternight", "last night"],
    ["sepulchre|sepulchres", "a tomb"], ["signet", "a seal ring"], ["lo", "look! see!"],
    ["forgat", "forgot"], ["bakemeats", "baked foods, pastries"], ["well favoured", "good-looking"],
    ["ill favoured", "ugly, sickly"], ["fatfleshed", "plump, well fed"], ["leanfleshed", "thin, skin and bone"],
    ["plenteous|plenteousness", "plentiful; plenty"], ["dearth", "famine, scarcity"], ["forasmuch", "since, seeing that"],
    ["lade|laded|laden", "load, loaded"], ["espied", "caught sight of"], ["traffick", "trade"],
    ["bade", "told, commanded"], ["messes", "portions of food"], ["earing", "ploughing"],
    ["wittingly", "knowingly"], ["begettest", "you become the father of"], ["whelp|whelps", "a cub, a young lion"],
    ["couched|coucheth", "crouched, lay down"], ["ravin", "tear prey"], ["progenitors", "ancestors"],
    ["dainties", "delicacies, rich food"], ["threshingfloor", "flat ground where grain is beaten out"], ["requite|requited", "pay back"],
    ["goodly", "fine, handsome"], ["heretofore", "until now, before this"], ["wherewith", "with which"],
    ["minish|minished", "make less, cut down"], ["lothe|lothed", "loathe, find too foul to touch"], ["kneadingtroughs", "bowls where bread dough is kneaded"],
    ["murrain", "a deadly cattle plague"], ["blains", "blisters, open sores"], ["bolled", "in the seed pod, nearly ripe"],
    ["rie", "rye, a grain"], ["wrought", "made, worked, did"], ["purtenance", "the inner parts"],
    ["bason|basons", "basin, bowl"], ["victual", "food, provisions"], ["firstling|firstlings", "firstborn young of an animal"],
    ["frontlets", "a band worn on the forehead"], ["drave", "drove"], ["timbrel|timbrels", "hand drum, tambourine"],
    ["seethe", "boil"], ["hoar frost|hoarfrost", "white frost"], ["chide|chid", "quarrel, find fault"],
    ["discomfited", "routed, defeated"], ["nether", "lower"], ["graven", "carved"],
    ["hallowed|hallow", "made holy, set apart"], ["aul", "awl, a pointed tool"], ["usurer", "moneylender charging interest"],
    ["shittim", "acacia wood"], ["ephod", "the priest's vest"], ["shewbread", "the holy bread set before God"],
    ["knops", "ornamental knobs"], ["snuffdishes|snuffers", "wick trays, wick trimmers"], ["staves", "staffs, poles"],
    ["cherubims|cherub", "angels of God's throne"], ["taches", "clasps"], ["twined", "twisted together"],
    ["fleshhooks", "meat forks"], ["firepans", "coal pans"], ["fillets", "bands joining pillars"],
    ["foursquare", "square"], ["ouches", "gold settings for stones"], ["wreathen", "twisted"],
    ["habergeon", "coat of mail"], ["ligure", "a precious stone"], ["broidered", "embroidered"],
    ["mitre", "the high priest's turban"], ["caul", "the fat over the liver"], ["inwards", "inner parts"],
    ["apothecary", "perfume maker"], ["stacte|onycha|galbanum", "incense spices"], ["hin", "about a gallon"],
    ["gerah", "1/20 of a shekel"], ["cunning", "skilful"], ["chapiters", "tops of pillars"],
    ["handbreadth", "a hand's width"], ["lookingglasses", "bronze mirrors"], ["bekah", "half a shekel"],
    ["sardius", "a red stone"], ["carbuncle", "a red gem"], ["girdle|girdles", "belt, sash"],
    ["bullock|bullocks", "young bull"],
    ["ague", "a burning fever"], ["asunder", "apart, in pieces"], ["baken", "baked"],
    ["beeves", "oxen, cattle"], ["bondmaid|bondmaids", "a woman slave"], ["bondservant", "a slave"],
    ["bonnets", "the linen caps of Aaron's sons"], ["brokenfooted", "with a broken foot, crippled"], ["brokenhanded", "with a broken hand, crippled"],
    ["censer|censers", "a small pan for carrying burning coals, with incense laid on them"], ["clovenfooted", "with the hoof split in two"], ["coney", "a small beast that lives in the rocks"],
    ["convocation", "a calling together, a holy gathering"], ["crookbackt", "with a bent, humped back"], ["cuckow", "the cuckoo"],
    ["ephah", "a dry measure, about half a bushel"], ["fretting|fret", "eating away, spreading"], ["fryingpan", "a deep pan for baking or frying"],
    ["gier eagle", "an eagle of the vulture kind"], ["girded", "belted, with a sash tied on"], ["gleaning|gleanings", "what is left in the field after the reapers"],
    ["hard by", "close beside"], ["hoary", "grey or white with age"], ["homer", "a large dry measure of grain"],
    ["jubile", "the fiftieth year, when the trumpet sounds and every man goes home"], ["kinswoman", "a woman relative"], ["lapwing", "a crested bird of the fields"],
    ["meteyard", "a measuring rod"], ["oblation|oblations", "a gift offered to God"], ["ospray", "a hawk that dives for fish"],
    ["ossifrage", "a great bird of prey ('bone-breaker')"], ["overplus", "the extra, what is left over"], ["plaister|plaistered", "plaster; plastered"],
    ["scall", "a scaly sore on the head or the beard"], ["scurvy", "a scaly, itching skin disease"], ["servile", "slaves' work; the ordinary toil of the week"],
    ["spue|spued", "spit out, vomit"], ["strakes", "streaks or hollows in a wall"], ["talebearer", "a gossip who carries stories about people"],
    ["tenth deal|tenth deals", "a tenth part of an ephah, about two quarts"], ["turtles", "turtledoves, small wild doves"], ["unwittingly", "without knowing it"],
    ["wen", "a lump or growth on the skin"], ["flay", "to strip off the skin"],
    ["polls", "heads: every male counted one head at a time"], ["ensign", "a banner or flag marking a family or tribe"], ["hindmost", "last, at the rear"],
    ["rereward", "the rear guard"], ["matrix", "the womb"], ["pertaineth", "belongs to"],
    ["on this wise", "in this way"], ["charger", "a large dish, a platter"], ["forbeareth", "holds back, refuses (to forbear is to refrain)"],
    ["alway", "always"], ["mixt", "mixed"], ["swarest", "swore (thou swarest: you swore)"],
    ["footmen", "men on foot, the fighting men"], ["apparently", "plainly, openly, with nothing hidden"], ["firstripe", "the first grapes to ripen"],
    ["ribband", "a ribbon, a cord"], ["appertain|appertained", "to belong to"], ["yonder", "over there"],
    ["unadvisedly", "without thinking it through, rashly"], ["unicorn|unicorns", "a strong horned beast that no man could tame"], ["lign aloes", "aloe trees (lign means wood)"],
    ["advertise", "tell beforehand, give warning"],
    ["loatheth", "is sick of, cannot stand"], ["sunrising", "the east, where the sun rises"], ["beguiled", "deceived, led astray by a trick"],
    ["midianitish", "of Midian"], ["notwithstanding", "nevertheless, even so"], ["several", "separate, each one its own"],
    ["disallow|disallowed", "refuse to allow, forbid"], ["pricks", "sharp points, goads"], ["molten", "melted and cast in a mould"],
    ["goings out", "the places where a journey or a border ends or turns"], ["outmost", "outermost, the farthest edge"], ["suburbs", "the open ground round a city, for cattle and goods"],
    ["revenger", "one who takes revenge: the dead man's nearest kinsman (the avenger of blood)"], ["manslayer", "a man who has killed someone"], ["laying of wait", "lying in ambush"],
    ["helve", "the handle of an axe"],
    ["cumbrance", "a heavy load, a burden that weighs a man down"], ["beforetime", "in the days before, long ago"], ["bedstead", "a bed frame"],
    ["assayed", "tried, attempted"], ["buildedst", "you built (thou buildedst)"], ["filledst", "you filled (thou filledst)"],
    ["diggedst", "you dug (thou diggedst)"], ["plantedst", "you planted (thou plantedst)"], ["affrighted", "frightened, terrified"],
    ["scarceness", "scarcity, running short"], ["stiffnecked", "like an ox that locks its neck and will not turn when the driver pulls; stubborn"], ["champaign", "open, level country"],
    ["roebuck", "a kind of deer"], ["hart", "a male deer"], ["lusteth", "desires strongly"],
    ["nought", "nothing"], ["pygarg", "a wild grazing beast; the name means 'white rump'"], ["glede", "a bird of prey of the kite kind"],
    ["wrest", "to twist, to bend out of shape"], ["evilfavouredness", "anything ugly or faulty about an animal"], ["in any wise", "by all means, without fail"],
    ["maw", "the stomach of a beast"], ["patrimony", "what came down to a man from his father's house"], ["observer of times", "one who keeps lucky and unlucky days"],
    ["familiar spirits", "spirits a medium calls on for answers"], ["succeedest", "take the place of (thou succeedest them)"], ["tributaries", "people who pay tribute to another nation and serve it"],
    ["bulwarks", "siege works built up against a city's walls"], ["eared", "ploughed"], ["bewail", "weep aloud over"],
    ["amerce", "fine, make him pay a penalty"], ["chanceth", "happens"], ["liketh", "pleases"],
    ["forbear", "hold back, refrain"], ["privy", "private, hidden"], ["avouched", "declared openly as one's own, owned before witnesses"],
    ["terribleness", "awesome, fearful deeds that make men tremble"], ["perverteth", "twists, bends out of its straight course"], ["setteth light by", "makes light of, despises"],
    ["botch", "a boil, an angry sore"], ["emerods", "painful swellings"], ["fray", "frighten off"],
    ["straitness", "a squeeze: no way out, no food"], ["blasting", "a scorching wind that withers the crop"], ["solemnity", "a set time kept with ceremony"],
    ["distil", "fall in drops, like dew"], ["mischiefs", "harms, disasters"], ["suckling", "a nursing baby"],
    ["unmindful", "forgetful"]
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

  // ================= Maps of the New Testament =================
  // svg.map[data-world] (the Roman world of Acts and the letters) and svg.map[data-land] (the land in Jesus' day) are drawn by the
  // terrain renderer below, on real shaded relief, in the frames these maps have always used, so routes and marks drawn by hand
  // inside them stay where they were:
  //   data-world: 908 × 576 units, lon 4°–40° E, lat 29°–47° N (25.2 units to a degree of longitude, 32 to a degree of latitude).
  //   data-land: 400 × 560 units, north at the top (about 193 units to a degree of longitude, 231 to a degree of latitude).
  // data-towns="Jerusalem, Sychar*, Bethlehem!:r": * lights a town, ! lights it and adds a pulse, :l :r :t :b puts its name on that side.
  // A path.map-route with data-via="Troas, Neapolis, Philippi" (places and "@lon lat" waypoints) or data-journey="1" | "2" | "3" | "rome"
  // is drawn through those places. Crop with your own viewBox ("425 170 210 170" for the Aegean, "540 225 140 105" for the seven
  // churches; "96 70 220 410" for the land west of the Jordan). Places not in these tables are looked up in OT_PLACES.
  const NT_PLACES = {
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
  const NT_JOURNEYS = {
    "1": "Antioch, Seleucia, Salamis, Paphos, @31.3 36.3, Perga, Antioch in Pisidia, Iconium, Lystra, Derbe, Lystra, Iconium, Antioch in Pisidia, Perga, Attalia, @32.5 35.9, @34.5 35.9, Seleucia, Antioch",
    "2": "Antioch, @36.2 36.9, Tarsus, Derbe, Lystra, Iconium, Antioch in Pisidia, Troas, @26.0 39.7, @25.6 40.05, Samothracia, Neapolis, Philippi, Amphipolis, Thessalonica, Berea, @22.85 40.2, @23.2 39.75, @24.0 39.3, @24.2 38.75, @24.72 38.12, @24.45 37.85, @24.1 37.55, @23.6 37.85, Athens, Corinth, Cenchrea, @24.3 37.4, @25.35 37.3, @26.0 37.45, @26.45 37.72, @26.6 37.95, @27.15 37.9, Ephesus, @27.15 37.9, @26.6 37.95, @26.45 37.72, @26.0 37.45, @26.8 36.6, @27.4 35.8, @29 35.3, @32.5 34.2, Caesarea, Jerusalem, @35.6 33.0, Antioch",
    "3": "Antioch, @36.2 36.9, Derbe, Lystra, Iconium, Antioch in Pisidia, Ephesus, @27.5 38.5, @27.0 39.4, Troas, @26.0 39.7, @25.6 40.05, @25.2 40.75, @24.5 40.84, Neapolis, Philippi, Thessalonica, Berea, Corinth, Berea, Thessalonica, Philippi, Neapolis, @24.5 40.84, @25.2 40.75, @25.6 40.05, @26.0 39.7, Troas, Assos, Mitylene, @26.2 38.4, @26.6 37.95, @27.0 37.6, Miletus, Coos, @27.5 36.55, @27.9 36.6, Rhodes, Patara, @31 35.0, @33.5 34.3, Tyre, Ptolemais, Caesarea, Jerusalem",
    "rome": "Caesarea, Sidon, @34.5 35.95, @33 36.0, Myra, @29.5 36.05, @28.6 36.5, @27.6 36.55, Cnidus, @26.3 34.95, Fair havens, Clauda, Melita, @15.3 36.6, Syracuse, Rhegium, Puteoli, Appii forum, Rome"
  };
  // the towns of the Gospels, where the older land map put them (they agree with the real places to a unit or two)
  const GOSPEL_PLACES = {
    "Caesarea": [34.8991, 32.4976, "r"], "Joppa": [34.7542, 32.0515, "r"], "Hebron": [35.1008, 31.5274, "l"], "Capernaum": [35.5819, 32.8744, "l"],
    "Bethsaida": [35.644, 32.9047, "r"], "Magdala": [35.525, 32.8181, "l"], "Tiberias": [35.5302, 32.7791, "l"], "Cana": [35.2922, 32.7834, "l"],
    "Gath-hepher": [35.3284, 32.7314, "r"], "Nazareth": [35.3026, 32.6968, "l"], "Samaria": [35.1939, 32.2724, "l"], "Sychar": [35.2871, 32.2074, "r"],
    "Ephraim": [35.3026, 31.9519, "l"], "Jericho": [35.4526, 31.8696, "l"], "Bethabara": [35.5975, 31.8479, "r"], "Jerusalem": [35.2405, 31.7743, "l"],
    "Bethany": [35.2664, 31.77, "r"], "Bethlehem": [35.2043, 31.705, "l"]
  };
  const NT_MAPS = {
    world: { box: [4, 40.0317, 29, 47], w: 908, h: 576, u: vb => Math.max(vb.width, 1.25 * vb.height) / 908, places: NT_PLACES, journeys: NT_JOURNEYS,
      regions: { ITALY: [14.8, 41.3, -55], MACEDONIA: [22.4, 41.6], ACHAIA: [22.2, 37.4], ASIA: [28.6, 39.6], GALATIA: [33, 39.3], BITHYNIA: [30.6, 40.7],
        PONTUS: [36.6, 40.5], CAPPADOCIA: [36.2, 38.6], PISIDIA: [31.3, 37.6], CILICIA: [34.3, 37.45], SYRIA: [37.6, 34.8], JUDAEA: [35.9, 31.2],
        EGYPT: [30.6, 29.7], ARABIA: [38, 30.5], LIBYA: [22.5, 31.5] },
      defaults: "ITALY, MACEDONIA, ACHAIA, ASIA, GALATIA, BITHYNIA, PONTUS, CAPPADOCIA, PISIDIA, CILICIA, SYRIA, JUDAEA, EGYPT, ARABIA, LIBYA",
      waters: [[19.5, 34.4, "the Great Sea"], [20, 36.2, "Adria"], [34.5, 43.3, "Black Sea"]] },
    // the older land map's labels never shrank when it was cropped; these keep that size, except on a tight crop, where they shrink with it
    gospel: { box: [34.1955, 36.2648, 31.0164, 33.4417], w: 400, h: 560, u: vb => Math.min(.74, Math.max(vb.width, 1.25 * vb.height) * .0016), places: GOSPEL_PLACES,
      regions: { GALILEE: [35.3491, 33.0086], SAMARIA: [35.106, 32.3763], JUDAEA: [34.9301, 31.4062], PEREA: [35.8251, 31.6227], DECAPOLIS: [35.9027, 32.6188], IDUMAEA: [34.8163, 31.1247], PHOENICIA: [35.1008, 33.3118] },
      defaults: "GALILEE, SAMARIA, JUDAEA, PEREA",
      waters: [[34.5369, 32.307, "the Great Sea", -72], [35.5509, 32.3373, "Jordan", -84, "r"]] },
    // ---- close-ups (data-terrain="galilee" | "jerusalem" | "nineveh"), each 1000 units wide, with their own places ----
    galilee: { box: [35.42, 35.73, 32.62, 32.95], h: 1266.25,
      places: { "Capernaum": [35.5751, 32.8807, "t"], "Bethsaida": [35.6305, 32.91, "r"], "Chorazin": [35.5636, 32.9114, "l"], "Magdala": [35.517, 32.825, "l"],
        "Tiberias": [35.542, 32.794, "l"], "Gergesa": [35.6505, 32.827, "r"], "Hippos": [35.659, 32.7795, "r"], "Gadara": [35.679, 32.655, "r"],
        "Mount of Beatitudes": [35.556, 32.8812, "l", "m"] },   // the mount of the sermon, by long tradition; Gergesa is Kursi, "the country of the Gergesenes"
      regions: { GALILEE: [35.47, 32.9], GENNESARET: [35.505, 32.86], DECAPOLIS: [35.68, 32.69], "COUNTRY OF THE GADARENES": [35.7, 32.8, -72] },
      defaults: "GALILEE, DECAPOLIS",
      waters: [[35.59, 32.82, "Sea of Galilee", -75], [35.628, 32.93, "Jordan", -70, "r"], [35.565, 32.672, "Jordan", -80, "r"]] },
    // Golgotha is marked at Gordon's Calvary, by the Garden Tomb, north of the city (Rick's choice); Pilate's hall at the Antonia fortress (by tradition)
    jerusalem: { box: [35.212, 35.272, 31.758, 31.798], h: 784.38,
      places: { "Temple": [35.2354, 31.778, "l"], "Mount of Olives": [35.245, 31.7785, "r", "m"], "Gethsemane": [35.2397, 31.7794, "r"], "Bethphage": [35.2537, 31.7795, "r"],
        "Bethany": [35.2614, 31.7713, "b"], "Pool of Siloam": [35.2353, 31.7707, "b"], "Pool of Bethesda": [35.2361, 31.7815, "t"], "Golgotha": [35.23, 31.7842, "l"],
        "Garden Tomb": [35.2297, 31.7836, "b"], "Upper room": [35.2289, 31.7717, "l"], "High priest's house": [35.2318, 31.7716, "b"], "Pilate's hall": [35.2347, 31.7802, "t"],
        "Herod's palace": [35.228, 31.7762, "l"], "Fish gate": [35.2325, 31.7808, "t"], "Gihon spring": [35.2365, 31.7733, "r"] },
      regions: { "CITY OF DAVID": [35.2358, 31.7733, -78], "UPPER CITY": [35.2305, 31.7742] }, defaults: "",
      waters: [[35.2383, 31.7752, "Kidron", -80, "r"], [35.2296, 31.7697, "valley of Hinnom", -10, "r"]],
      // the city in Jesus' day (the first and second walls; Agrippa's third wall came after) and the temple platform; data-walls="" hides them
      walls: [["city-wall", [[35.2276, 31.7768], [35.2296, 31.779], [35.231, 31.7812], [35.2338, 31.7806], [35.2367, 31.7808], [35.2369, 31.7765], [35.2362, 31.7735],
        [35.2356, 31.7712], [35.2352, 31.77], [35.232, 31.7698], [35.229, 31.7702], [35.2276, 31.7718]]],
        ["temple-mount", [[35.2343, 31.776], [35.2369, 31.7765], [35.2367, 31.7808], [35.2338, 31.7806]]]] },
    nineveh: { box: [43.09, 43.21, 36.32, 36.41], h: 931.25,
      places: { "Kuyunjik": [43.153, 36.3605, "r"], "Nebi Yunus": [43.1605, 36.349, "r"] },   // Sennacherib's palace mound; the mound of "Jonah's tomb"
      regions: { NINEVEH: [43.163, 36.372] }, defaults: "NINEVEH",
      waters: [[43.112, 36.372, "Tigris", -78, "r"], [43.186, 36.366, "Khosr", -22, "r"]],
      walls: [["city-wall", [[43.148, 36.383], [43.158, 36.386], [43.176, 36.368], [43.177, 36.35], [43.163, 36.341], [43.15, 36.345], [43.146, 36.362]]]] }
  };

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
      regions: { EGYPT: [30.45, 29.0], GOSHEN: [31.55, 30.42], "WILDERNESS OF SHUR": [33.4, 30.85], "WILDERNESS OF PARAN": [34.2, 30.05], "WILDERNESS OF SIN": [35.1, 28.25], SINAI: [33.9, 29.1],
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
    "Shushan": [48.25, 32.19, "l"], "Achmetha": [48.52, 34.80, "l"], "Ararat": [44.234, 39.441, "l", "m"], // where Noah's ark rested "upon the mountains of Ararat" (Genesis 8:4): Durupinar, after Ron Wyatt (Rick's ruling)
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
    "Mount Ebal": [35.27, 32.24, "t", "m"], "Mount Gerizim": [35.27, 32.19, "b", "m"],
    // added for the prophets' maps: the usual identifications (Kirioth = el-Qereiyat; Calneh = Kullania near Arpad; Hadrach = Hatarikka, Tell Afis;
    // Teman = Tawilan in Edom; Sela = Petra; Moresheth-gath = Tell el-Judeideh; Beth-aven by Bethel); Beer-sheba and Zidon as the KJV spells them
    "Kirioth": [35.77, 31.58, "r"], "Calneh": [36.95, 36.3, "r"], "Hadrach": [36.8, 35.97, "r"], "Teman": [35.47, 30.32, "r"], "Sela": [35.44, 30.33, "b"],
    "Moresheth-gath": [34.92, 31.6, "r"], "Mareshah": [34.9, 31.59, "b"], "Beth-aven": [35.26, 31.9, "r"], "Beer-sheba": [34.8, 31.25, "l"], "Zidon": [35.37, 33.56, "l"],
    // New Testament towns, for the land map and as a fallback on the others (Emmaus and Dalmanutha: the sites are uncertain)
    "Capernaum": [35.5751, 32.8807, "r"], "Nazareth": [35.3035, 32.7019, "l"], "Nain": [35.352, 32.633, "r"], "Cana": [35.34, 32.75, "l"],
    "Bethany": [35.2614, 31.7713, "r"], "Emmaus": [35.132, 31.809, "l"], "Caesarea": [34.89, 32.5, "l"], "Antipatris": [34.9306, 32.1119, "l"],
    "Caesarea Philippi": [35.695, 33.248, "r"], "Dalmanutha": [35.52, 32.83, "l"], "Taanach": [35.2217, 32.5236, "l"]
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
  document.querySelectorAll("svg[data-terrain], svg[data-world], svg[data-land]").forEach((svg, n) => {
    const name = svg.dataset.terrain || (svg.hasAttribute("data-world") ? "world" : "gospel"), M = OT_MAPS[name] || NT_MAPS[name];
    if (!M) { console.warn(`No terrain map "${name}"`); return; }
    const [L0, L1, B0, B1] = M.box, W = M.w || 1000, H = M.h;
    const placeOf = s => M.places?.[s] || OT_PLACES[s], journeyOf = j => M.journeys?.[j] || OT_JOURNEYS[j];
    const P = (lon, lat) => [(lon - L0) * W / (L1 - L0), (B1 - lat) * H / (B1 - B0)];
    if (!svg.hasAttribute("viewBox")) svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    const vb = svg.viewBox.baseVal, u = M.u ? M.u(vb) : Math.max(vb.width, 1.25 * vb.height) / W;
    svg.classList.add("map", "terrain");
    svg.style.setProperty("--u", u.toFixed(3));
    const where = s => {
      const ll = s.match(/^@\s*(-?[\d.]+)\s+(-?[\d.]+)$/);
      if (ll) return P(+ll[1], +ll[2]);
      const p = placeOf(s);
      if (!p) { console.warn(`No place "${s}" on the Old Testament maps`); return null; }
      return P(p[0], p[1]);
    };
    // routes: a smooth line through the places, with a pale edge drawn under it
    let credit = "";
    svg.querySelectorAll("path[data-via], path[data-journey]").forEach(p => {
      const via = p.dataset.via || journeyOf(p.dataset.journey) || "";
      if (!p.dataset.via && !journeyOf(p.dataset.journey)) console.warn(`No journey "${p.dataset.journey}"`);
      credit ||= OT_CREDIT[p.dataset.journey] || "";
      const pts = via.split(",").map(s => where(s.trim())).filter(Boolean);
      if (pts.length < 2) return;
      p.setAttribute("d", smooth(pts));
      if (!p.hasAttribute("pathLength") && p.classList.contains("map-route")) p.setAttribute("pathLength", "1");
      const under = p.cloneNode();
      under.classList.add("under");
      under.removeAttribute("id");
      p.before(under);
    });
    const own = [...svg.childNodes];
    const r = 7 * u, g = 13 * u, fs = 23 * u, ext = [];
    const towns = String(svg.dataset.towns || "").split(",").map(s => s.trim()).filter(Boolean).map(spec => {
      const [, nm, mark, side] = spec.match(/^(.+?)([*!]?)(?::([lrtb]))?$/);
      const p = placeOf(nm);
      if (!p) { console.warn(`No place "${nm}" on the Old Testament maps`); return ""; }
      const [x, y] = P(p[0], p[1]);
      const [tx, ty, anchor] = { l: [x - g, y + 6 * u, "end"], r: [x + g, y + 6 * u, "start"], t: [x, y - g, "middle"], b: [x, y + 2.2 * g, "middle"] }[side || p[2]];
      const tw = nm.length * .56 * fs, t0 = anchor === "end" ? tx - tw : anchor === "middle" ? tx - tw / 2 : tx;
      ext.push([Math.min(t0, x - 2 * r), Math.min(ty - .8 * fs, y - 2 * r), Math.max(t0 + tw, x + 2 * r), Math.max(ty + .3 * fs, y + 2 * r)]);
      const dot = p[3] === "m"
        ? `<path class="mount" d="M${f1(x - 9 * u)} ${f1(y + 6 * u)}L${f1(x)} ${f1(y - 9 * u)}L${f1(x + 9 * u)} ${f1(y + 6 * u)}Z"/>`
        : `<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(r)}"/>`;
      return `<g class="map-town${mark ? " here" : ""}">${dot}` + (mark === "!" ? `<circle class="map-ping" cx="${f1(x)}" cy="${f1(y)}" r="${f1(r * 1.3)}"/>` : "") +
        `<text x="${f1(tx)}" y="${f1(ty)}" text-anchor="${anchor}">${esc(nm)}</text></g>`;
    }).join("");
    // a town name that would hang past the edge of the map widens the map to take it in, so no name is ever cut off
    if (ext.length) {
      const pad = 8 * u, X0 = Math.min(vb.x, ...ext.map(e => e[0] - pad)), Y0 = Math.min(vb.y, ...ext.map(e => e[1] - pad)),
        X1 = Math.max(vb.x + vb.width, ...ext.map(e => e[2] + pad)), Y1 = Math.max(vb.y + vb.height, ...ext.map(e => e[3] + pad));
      if (X0 < vb.x || Y0 < vb.y || X1 > vb.x + vb.width || Y1 > vb.y + vb.height) svg.setAttribute("viewBox", `${f1(X0)} ${f1(Y0)} ${f1(X1 - X0)} ${f1(Y1 - Y0)}`);
    }
    svg.style.aspectRatio = `${vb.width} / ${vb.height}`;
    const lbl = ([lon, lat, text, rot = 0, kind], cls) => { const [x, y] = P(lon, lat);
      const k = kind === "r" ? "river-name" : cls, size = (k === "river-name" ? 16 : 19) * u, w = String(text).length * (k === "map-region" ? .82 : .5) * size / 2, h = .45 * size;
      const c = Math.abs(Math.cos(rot * Math.PI / 180)), sn = Math.abs(Math.sin(rot * Math.PI / 180)), bx = c * w + sn * h, by = sn * w + c * h, m = 4 * u;
      if (x - bx < vb.x + m || x + bx > vb.x + vb.width - m || y - by < vb.y + m || y + by > vb.y + vb.height - m) return "";
      if (k === "map-region" && ext.some(e => x + bx > e[0] && x - bx < e[2] && y + by > e[1] && y - by < e[3])) return "";
      return `<text class="${kind === "r" ? "river-name" : cls}" x="${f1(x)}" y="${f1(y)}" text-anchor="middle"${rot ? ` transform="rotate(${rot} ${f1(x)} ${f1(y)})"` : ""}>${esc(text)}</text>`; };
    const pick = svg.hasAttribute("data-regions") ? svg.dataset.regions : M.defaults;
    const regions = pick.split(",").map(s => s.trim()).filter(Boolean).map(k => {
      const at = M.regions[k];
      if (!at) { console.warn(`No region "${k}" on the ${name} map`); return ""; }
      return lbl([at[0], at[1], k, at[2] || 0], "map-region");
    }).join("");
    const waters = svg.dataset.waters === "" ? "" : M.waters.map(w => lbl(w, "map-water")).join("");
    const walls = svg.dataset.walls === "" ? "" : (M.walls || []).map(([cls, pts]) => `<path class="${cls}" d="M${pts.map(([lon, lat]) => P(lon, lat).map(f1).join(" ")).join("L")}Z"/>`).join("");
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
        <g filter="url(#tr-glow-${n})"><image href="${ASSETS}maps/${name}.webp" x="${D.ox || 0}" y="${D.oy || 0}" width="${D.w}" height="${D.h}" clip-path="url(#tr-land-${n})" preserveAspectRatio="none"/></g>
        <path class="coast" d="${D.land}"/>${tribes}<path class="lake" d="${D.lakes}"/><g class="lake">${lakes2}</g><g class="rivers">${rivers}</g><g class="streams">${streams}</g>${walls}
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
