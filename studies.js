// Every study on the site. The home page builds the bookshelf from this list,
// so publishing a new study means adding one entry here (any order is fine).
//
// type:     "chapter" | "topic" | "doctrine" | "concept" | "book"
// book:     Bible book name, spelled as in bible.js (chapters and book overviews)
// ch:       chapter number (chapters only)
// date:     the day it was added, YYYY-MM-DD; the newest one is featured on the home page
// tags:     themes, for future search and filtering
// overview: the chapter overview (chapters only). overview.html shows it on its own,
//           and strings every chapter's overview together, in order, as the book overview.
//   where, when: the setting in a phrase each
//   people:      who is in the chapter, as glossary ids (see glossary.js); plain text also works
//   places:      where it happens, as glossary ids
//   story:       what happens, 3 to 6 short beats, each ending with its verse range
//   key:         the one verse to remember, { ref, text } in KJV
//   big:         the main idea of the chapter in one or two sentences
window.STUDIES = [
  {
    id: "john-01",
    type: "chapter",
    book: "John",
    ch: 1,
    date: "2026-10-18",
    title: "John 1",
    sub: "The Word, the witness, and the Lamb",
    about: "John the Baptist tells the world who Jesus is, and what He came to do.",
    tags: ["Deity of Christ", "Salvation", "Witnessing", "Identity"],
    url: "studies/john-01.html",
    overview: {
      where: "Before creation, then Bethabara beyond the Jordan",
      when: "In the beginning, then over a few days at the start of Jesus' ministry",
      people: ["jesus", "john-the-baptist", "priests-and-levites", "the-jews", "andrew", "simon-peter", "philip", "nathanael"],
      places: ["bethabara", "jordan", "galilee", "bethsaida", "nazareth"],
      story: [
        "Before anything was made, the Word was with God and was God. He made all things, and His light shines in the darkness (1–5).",
        "The Word was made flesh and lived among us. Everyone who receives Him gets the right to become a child of God (6–18).",
        "John the Baptist tells the religious leaders he is not the Christ, only a voice preparing the way (19–28).",
        "John points to Jesus: “Behold the Lamb of God, which taketh away the sin of the world” (29–34).",
        "The first disciples follow Jesus, and each one goes and gets someone else: “Come and see” (35–51)."
      ],
      key: { ref: "John 1:14", text: "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth." },
      big: "Jesus is the eternal Word, God Himself made flesh, and the Lamb who takes away sin. Everyone who meets Him goes and tells someone."
    }
  },
  {
    id: "john-02",
    type: "chapter",
    book: "John",
    ch: 2,
    date: "2026-10-19",
    title: "John 2",
    sub: "New wine and a cleansed house",
    about: "Jesus turns water into wine, then clears the merchants out of His Father's house.",
    tags: ["Signs", "Obedience", "New life", "Worship", "Resurrection", "Faith"],
    url: "studies/john-02.html",
    overview: {
      where: "Cana in Galilee, Capernaum, then the temple in Jerusalem",
      when: "Three days after Nathanael met Jesus, then at Passover",
      people: ["jesus", "mary", "disciples", "servants", "governor-of-the-feast", "bridegroom", "money-changers", "the-jews"],
      places: ["cana", "galilee", "capernaum", "jerusalem", "temple"],
      story: [
        "At a wedding in Cana the wine runs out. Mary tells the servants, “Whatsoever he saith unto you, do it” (1–5).",
        "Jesus turns six stone jars of water into the best wine of the feast, His first sign, and His disciples believe (6–12).",
        "At Passover He drives the merchants out of the temple: “Make not my Father's house an house of merchandise” (13–17).",
        "Asked for a sign, He answers, “Destroy this temple, and in three days I will raise it up,” speaking of His body (18–22).",
        "Many believe because of the miracles, but Jesus doesn't trust Himself to them. He knows what is in every man (23–25)."
      ],
      key: { ref: "John 2:11", text: "This beginning of miracles did Jesus in Cana of Galilee, and manifested forth his glory; and his disciples believed on him." },
      big: "Jesus replaces empty religion with new life that shows His glory. He is looking for faith that trusts Him, not just people impressed by what He can do."
    }
  },
  {
    "id": "proverbs-01",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 1,
    "date": "2026-10-18",
    "title": "Proverbs 1",
    "sub": "Where wisdom starts",
    "about": "A father warns his son about the crowd, and Wisdom herself stands in the street and calls out to anyone who will listen.",
    "tags": [
      "wisdom",
      "fear of the LORD",
      "temptation",
      "peer pressure",
      "the wrong crowd",
      "today"
    ],
    "url": "studies/proverbs-01.html",
    "overview": {
      "where": "Israel, in the court of King Solomon in Jerusalem",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "david",
        "the-lord",
        "A father and his son",
        "Sinners who entice",
        "Wisdom, pictured as a woman calling out"
      ],
      "places": [
        "israel"
      ],
      "story": [
        "Solomon says why he wrote the book: so the simple and the young can get wisdom (1–6)",
        "Everything starts with the fear of the LORD; fools despise it (7–9)",
        "A father warns his son not to throw in with sinners who promise easy money (10–14)",
        "Their road runs to blood, and the trap they set catches them (15–19)",
        "Wisdom cries out in the streets, offering to pour out her spirit on anyone who turns (20–23)",
        "Those who refuse her eat the fruit of their own way, but whoever listens dwells safely (24–33)"
      ],
      "key": {
        "ref": "Proverbs 1:7",
        "text": "The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction."
      },
      "big": "Real wisdom starts with fearing the LORD. The crowd promises money and belonging but pays in blood, while Wisdom calls everyone, out loud, and the man who listens today finds safety."
    }
  },
  {
    "id": "proverbs-02",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 2,
    "date": "2026-10-18",
    "title": "Proverbs 2",
    "sub": "Dig for it",
    "about": "Wisdom is worth searching for like buried treasure, and the man who finds it is guarded from the roads that kill.",
    "tags": [
      "wisdom",
      "seeking God",
      "protection",
      "bad company",
      "sexual sin",
      "the strange woman"
    ],
    "url": "studies/proverbs-02.html",
    "overview": {
      "where": "Israel, in the court of King Solomon in Jerusalem",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord",
        "A father and his son",
        "The evil man who speaks froward things",
        "The strange woman"
      ],
      "places": [],
      "story": [
        "If a son searches for wisdom like hidden treasure, he will find the knowledge of God (1–5)",
        "The LORD gives wisdom and shields those who walk uprightly (6–9)",
        "When wisdom enters the heart, discretion stands guard (10–11)",
        "Wisdom delivers from the twisted man who loves doing evil (12–15)",
        "And from the strange woman, whose house slopes down to death (16–19)",
        "The upright stay rooted in the land; the wicked are rooted out (20–22)"
      ],
      "key": {
        "ref": "Proverbs 2:6",
        "text": "For the LORD giveth wisdom: out of his mouth cometh knowledge and understanding."
      },
      "big": "Seek wisdom as hard as men chase silver, because the LORD gives it, and every treasure of wisdom is found in Christ. Wisdom in the heart guards a man from the twisted man and the strange woman."
    }
  },
  {
    "id": "proverbs-03",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 3,
    "date": "2026-10-18",
    "title": "Proverbs 3",
    "sub": "Lean your whole weight on Him",
    "about": "A father teaches his son to trust the LORD, take His correction, prize wisdom above gold, and treat his neighbor right.",
    "tags": [
      "trust",
      "wisdom",
      "God's correction",
      "giving",
      "peace",
      "neighbors"
    ],
    "url": "studies/proverbs-03.html",
    "overview": {
      "where": "Israel, in the court of King Solomon in Jerusalem",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord",
        "A father and his son",
        "The neighbor",
        "The oppressor"
      ],
      "places": [],
      "story": [
        "Keep God's commands and write mercy and truth on your heart (1–4)",
        "Trust the LORD with all your heart, and He will direct your paths (5–8)",
        "Honor Him with the firstfruits, and don't despise His fatherly correction (9–12)",
        "Wisdom is worth more than rubies; she is a tree of life, the wisdom God used to make the world (13–20)",
        "Keep wisdom close, and you can walk safely and sleep in peace (21–26)",
        "Do good to your neighbor today, and don't envy the oppressor; God gives grace to the lowly (27–35)"
      ],
      "key": {
        "ref": "Proverbs 3:5",
        "text": "Trust in the LORD with all thine heart; and lean not unto thine own understanding."
      },
      "big": "Lean your whole weight on the LORD instead of your own understanding. He corrects His sons because He loves them, His wisdom is worth more than anything, and it shows in how we treat our neighbor."
    }
  },
  {
    "id": "proverbs-04",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 4,
    "date": "2026-10-18",
    "title": "Proverbs 4",
    "sub": "Two roads and a guarded heart",
    "about": "A father passes down what his own father taught him: get wisdom, stay off the wicked road, and guard your heart.",
    "tags": [
      "wisdom",
      "fathers",
      "temptation",
      "two paths",
      "the heart",
      "focus"
    ],
    "url": "studies/proverbs-04.html",
    "overview": {
      "where": "Israel, in the court of King Solomon in Jerusalem",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "david",
        "the-lord",
        "A father and his children",
        "Evil men"
      ],
      "places": [],
      "story": [
        "Solomon passes on what his own father taught him (1–4)",
        "Wisdom is the principal thing; get it whatever it costs (5–9)",
        "The way of wisdom gives room to walk and run without stumbling (10–13)",
        "Avoid the path of the wicked; turn from it and pass away (14–17)",
        "The path of the just grows brighter like the dawn; the way of the wicked is darkness (18–19)",
        "Keep your heart above all, and guard your mouth, eyes, and feet (20–27)"
      ],
      "key": {
        "ref": "Proverbs 4:23",
        "text": "Keep thy heart with all diligence; for out of it are the issues of life."
      },
      "big": "Wisdom comes first. Stay far from the wicked road, walk the path that grows brighter like the dawn, and guard your heart, because everything in life flows out of it."
    }
  },
  {
    "id": "proverbs-05",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 5,
    "date": "2026-10-18",
    "title": "Proverbs 5",
    "sub": "Honey now, wormwood later",
    "about": "A father warns his son about the strange woman, counts the cost of sexual sin, and points him home to the wife of his youth.",
    "tags": [
      "temptation",
      "sexual sin",
      "marriage",
      "faithfulness",
      "consequences",
      "freedom"
    ],
    "url": "studies/proverbs-05.html",
    "overview": {
      "where": "The father's talks to his son in Proverbs 1–9, collected under King Solomon in Jerusalem",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord",
        "The strange woman",
        "The wife of thy youth"
      ],
      "places": [],
      "story": [
        "A father asks his son to listen, then warns that the strange woman's honey turns to wormwood and her road goes down to death (1–6).",
        "Stay far from her door: she takes a man's honor, years, wealth, and health, and leaves him regretting that he never listened (7–14).",
        "Drink from your own well: God gives desire a home in marriage, so rejoice with the wife of your youth (15–20).",
        "The LORD sees every road, and sin ties a man up with his own cords (21–23)."
      ],
      "key": {
        "ref": "Proverbs 5:21",
        "text": "For the ways of man are before the eyes of the LORD, and he pondereth all his goings."
      },
      "big": "Sexual sin sells the first taste and hides the bitter end, but God gives desire a good home in marriage and sees every road a man walks. Sin binds a man with his own cords, and only the Son can set him free."
    }
  },
  {
    "id": "proverbs-06",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 6,
    "date": "2026-10-18",
    "title": "Proverbs 6",
    "sub": "Get loose, get up, and stay out of the fire",
    "about": "Co-signing debts, the ant and the sluggard, the seven things the LORD hates, and the fire of adultery.",
    "tags": [
      "debt",
      "surety",
      "work",
      "laziness",
      "pride",
      "God's Word",
      "lust",
      "adultery"
    ],
    "url": "studies/proverbs-06.html",
    "overview": {
      "where": "The father's talks to his son in Proverbs 1–9, collected under King Solomon in Jerusalem",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord",
        "The sluggard",
        "The naughty person",
        "The adulteress"
      ],
      "places": [],
      "story": [
        "If your own words have trapped you as surety for someone's debt, humble yourself and get free right away (1–5).",
        "Go to the ant, thou sluggard: she works without a boss, while poverty creeps up on the man who wants a little more sleep (6–11).",
        "The worthless troublemaker, and the seven things the LORD hates, from a proud look to sowing discord among brothers (12–19).",
        "Keep your father's commandment: it leads, keeps, and talks with you, and guards you from the evil woman (20–26).",
        "No man can carry fire in his lap unburned: adultery destroys a man's own soul, and no ransom buys it back (27–35)."
      ],
      "key": {
        "ref": "Proverbs 6:23",
        "text": "For the commandment is a lamp; and the law is light; and reproofs of instruction are the way of life:"
      },
      "big": "Wisdom shows up in ordinary life: get out of bad debts, get up and work, hate what God hates, and stay out of the fire of adultery. God's Word is the lamp that keeps a man all day long."
    }
  },
  {
    "id": "proverbs-07",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 7,
    "date": "2026-10-18",
    "title": "Proverbs 7",
    "sub": "One street, one night, one bad turn",
    "about": "A father watches a young man walk straight into the strange woman's trap, and shows his son how to stay out of her house.",
    "tags": [
      "temptation",
      "sexual sin",
      "flattery",
      "God's Word",
      "pride",
      "hope"
    ],
    "url": "studies/proverbs-07.html",
    "overview": {
      "where": "The father's talks to his son in Proverbs 1–9, collected under King Solomon in Jerusalem",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "The young man void of understanding",
        "The strange woman",
        "The goodman (her husband)"
      ],
      "places": [],
      "story": [
        "Keep my words like the apple of your eye, and make wisdom your sister, so she keeps you from the strange woman (1–5).",
        "From his window the father sees a young man with no sense walk near her corner as twilight turns to black night (6–12).",
        "She grabs him with a bold face, religious talk, flattery, and the promise that her husband is away and no one will know (13–20).",
        "He follows her straightway, like an ox to the slaughter or a bird to the snare (21–23).",
        "Don't let your heart turn toward her: many strong men have been slain, and her house is the way to death (24–27)."
      ],
      "key": {
        "ref": "Proverbs 7:25",
        "text": "Let not thine heart decline to her ways, go not astray in her paths."
      },
      "big": "A man rarely falls in one moment; he walks there, one choice at a time, believing flattering lies. Keep God's Word close, stay off her street, and take God's way of escape early."
    }
  },
  {
    "id": "proverbs-08",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 8,
    "date": "2026-10-18",
    "title": "Proverbs 8",
    "sub": "Wisdom calls out, and was there before the world",
    "about": "Wisdom calls to everyone in the streets, offers riches better than gold, and was with God before creation.",
    "tags": [
      "wisdom",
      "invitation",
      "fear of the LORD",
      "riches",
      "creation",
      "who Jesus is",
      "life"
    ],
    "url": "studies/proverbs-08.html",
    "overview": {
      "where": "The father's talks to his son in Proverbs 1–9, collected under King Solomon in Jerusalem",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "the-lord",
        "Wisdom (personified)"
      ],
      "places": [],
      "story": [
        "Wisdom stands on the hilltops, at the crossroads, and at the city gates, calling to everyone, even the simple and the fools (1–5).",
        "Her words are right and true, and she is worth more than silver, gold, or rubies (6–11).",
        "The fear of the LORD is to hate evil; wisdom gives good counsel and lasting riches to those who seek her early (12–21).",
        "God possessed wisdom from everlasting, before the depths, mountains, earth, and heavens; she rejoiced in His work and in the sons of men (22–31).",
        "Blessed is the man who waits daily at her doors: whoever finds her finds life, and whoever hates her loves death (32–36)."
      ],
      "key": {
        "ref": "Proverbs 8:35",
        "text": "For whoso findeth me findeth life, and shall obtain favour of the LORD."
      },
      "big": "God's wisdom calls out to everyone and is worth more than any treasure. God has always had His wisdom, and Christ is that wisdom in person and the Creator of all things; whoever finds Him finds life."
    }
  },
  {
    "id": "proverbs-09",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 9,
    "date": "2026-10-18",
    "title": "Proverbs 9",
    "sub": "Two houses, two invitations",
    "about": "Wisdom and Folly each set a table and call to the same passerby; the fear of the LORD is where wisdom begins.",
    "tags": [
      "Wisdom",
      "Fear of the LORD",
      "Temptation",
      "Correction",
      "Invitation"
    ],
    "url": "studies/proverbs-09.html",
    "overview": {
      "where": "A word picture: two houses on the high places of a city",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord",
        "Wisdom",
        "The foolish woman (Folly)",
        "The simple",
        "The scorner"
      ],
      "places": [],
      "story": [
        "Wisdom builds her house on seven pillars and prepares a feast (1–3)",
        "She calls the simple to come, eat her bread, and live (4–6)",
        "A scorner hates correction; a wise man loves it and grows wiser (7–9)",
        "The fear of the LORD is the beginning of wisdom (10–12)",
        "Folly sits at her door and copies Wisdom's invitation (13–16)",
        "Her stolen waters are sweet, but her guests are among the dead (17–18)"
      ],
      "key": {
        "ref": "Proverbs 9:10",
        "text": "The fear of the LORD is the beginning of wisdom: and the knowledge of the holy is understanding."
      },
      "big": "Two voices call to every man in almost the same words. Wisdom, which starts with the fear of the LORD, leads to life; Folly's secret pleasures lead to death."
    }
  },
  {
    "id": "proverbs-10",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 10,
    "date": "2026-10-18",
    "title": "Proverbs 10",
    "sub": "Two ways, two lines at a time",
    "about": "Solomon's two-line sayings begin, setting the wise against the fool and the righteous against the wicked in words, work, and what lasts.",
    "tags": [
      "Reading Proverbs",
      "The Tongue",
      "Work",
      "Money",
      "Righteousness",
      "Love"
    ],
    "url": "studies/proverbs-10.html",
    "overview": {
      "where": "Solomon's sayings, collected in Jerusalem",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord",
        "The wise son and the foolish son",
        "The righteous and the wicked",
        "The sluggard"
      ],
      "places": [],
      "story": [
        "“The proverbs of Solomon” begin: a wise son and a foolish son (1)",
        "Treasures of wickedness, slack hands, and the harvest (2–5)",
        "The just and the wicked: their names, mouths, and walk; love covers sins (6–12)",
        "Words and wealth: the rod, the strong city, lying lips, and many words (13–21)",
        "What lasts: the LORD's blessing, the whirlwind, and the everlasting foundation (22–32)"
      ],
      "key": {
        "ref": "Proverbs 10:25",
        "text": "As the whirlwind passeth, so is the wicked no more: but the righteous is an everlasting foundation."
      },
      "big": "Proverbs now come two lines at a time, and the lines answer each other. What a man says, how he works, and whether he is righteous decide what is still standing after the storm."
    }
  },
  {
    "id": "proverbs-11",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 11,
    "date": "2026-10-18",
    "title": "Proverbs 11",
    "sub": "Honest weights and open hands",
    "about": "God cares about honest scales, kept secrets, good counsel, and an open hand, and only righteousness delivers in the day of wrath.",
    "tags": [
      "Honesty",
      "Pride",
      "Counsel",
      "Generosity",
      "Money",
      "Salvation"
    ],
    "url": "studies/proverbs-11.html",
    "overview": {
      "where": "Solomon's sayings, set in the marketplace, the town, and the home",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord",
        "The upright and the transgressor",
        "The talebearer",
        "The liberal soul"
      ],
      "places": [],
      "story": [
        "A false balance and pride bring shame; a just weight is God's delight (1–3)",
        "Riches can't save in the day of wrath, but righteousness delivers (4–9)",
        "The upright bless their city; a faithful spirit keeps a secret (10–13)",
        "Many counsellors, the danger of surety, and the reward of kindness (14–22)",
        "The one who scatters increases; he that watereth is watered (23–26)",
        "Riches fall, the righteous flourish, and the wise win souls (27–31)"
      ],
      "key": {
        "ref": "Proverbs 11:25",
        "text": "The liberal soul shall be made fat: and he that watereth shall be watered also himself."
      },
      "big": "God watches how a man does business and what he does with what he has. Honest dealing, a kept confidence, good counsel, and an open hand mark the righteous, and only righteousness delivers in the day of wrath."
    }
  },
  {
    "id": "proverbs-12",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 12,
    "date": "2026-10-18",
    "title": "Proverbs 12",
    "sub": "Love correction, guard your mouth",
    "about": "A wise man loves correction, holds his temper, tells the truth, heals with his words, and finishes his work.",
    "tags": [
      "Correction",
      "The Tongue",
      "Truth",
      "Anger",
      "Work",
      "Eternal Life"
    ],
    "url": "studies/proverbs-12.html",
    "overview": {
      "where": "Solomon's sayings, set in the home, the field, and the hunt",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord",
        "The virtuous woman",
        "The prudent man and the fool",
        "The diligent and the slothful"
      ],
      "places": [],
      "story": [
        "Loving instruction, and a root that shall not be moved (1–3)",
        "A virtuous wife, honest counsel, and the house that stands (4–9)",
        "Kindness to animals, tilling your own land, and vain persons (10–12)",
        "Snared by the lips; the fool's way is right in his own eyes (13–15)",
        "A fool's wrath, a tongue like a sword, and the lip of truth (16–22)",
        "A heavy heart, the slothful hunter, and the path with no death (23–28)"
      ],
      "key": {
        "ref": "Proverbs 12:1",
        "text": "Whoso loveth instruction loveth knowledge: but he that hateth reproof is brutish."
      },
      "big": "The wise man can take a rebuke, guard his mouth, and finish what he starts. The way of righteousness, which Jesus opens to us, is the road with no death on it."
    }
  },
  {
    "id": "proverbs-13",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 13,
    "date": "2026-10-18",
    "title": "Proverbs 13",
    "sub": "Walk with wise men",
    "about": "Short sayings about listening, working, waiting, and the friends who shape the man we become.",
    "tags": [
      "wisdom",
      "friends",
      "words",
      "hope",
      "discipline",
      "work",
      "recovery"
    ],
    "url": "studies/proverbs-13.html",
    "overview": {
      "where": "Israel, in the court of King Solomon at Jerusalem",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord",
        "The wise son",
        "The scorner",
        "The sluggard",
        "The companion of fools"
      ],
      "places": [],
      "story": [
        "A wise son listens to correction, while a scorner won't, and a guarded mouth guards a man's life (1–3).",
        "The sluggard wants plenty but does nothing, and fast money gotten by vanity drains away while honest labour grows (4–11).",
        "Hope put off makes the heart sick, but the desire fulfilled is a tree of life (12).",
        "God's teaching is a fountain of life, and the road of the transgressor is hard (13–19).",
        "We become like the men we walk with, and a good man leaves an inheritance to his grandchildren (20–23).",
        "Love corrects a son early and carefully, as the heavenly Father corrects His own (24–25)."
      ],
      "key": {
        "ref": "Proverbs 13:20",
        "text": "He that walketh with wise men shall be wise: but a companion of fools shall be destroyed."
      },
      "big": "You become like the men you walk with. Walk with the wise, take correction, and build slowly and honestly, and God will grow you into a man who leaves something good behind."
    }
  },
  {
    "id": "proverbs-14",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 14,
    "date": "2026-10-18",
    "title": "Proverbs 14",
    "sub": "A way that seemeth right",
    "about": "Builders and wreckers, short fuses and long ones, and the road that feels right but ends in death.",
    "tags": [
      "wisdom",
      "fear of the LORD",
      "anger",
      "deception",
      "mercy",
      "hope",
      "recovery"
    ],
    "url": "studies/proverbs-14.html",
    "overview": {
      "where": "Israel, in the court of King Solomon at Jerusalem",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord",
        "The wise woman",
        "The fool",
        "The simple",
        "The backslider",
        "The poor"
      ],
      "places": [],
      "story": [
        "A wise woman builds her house and a fool tears it down with her own hands; a barn with no ox stays clean and empty (1–6).",
        "Fools laugh at sin, and every heart carries a bitterness no stranger fully knows (7–11).",
        "A way can seem right to a man and still end in death; laughter can hide a sorrowful heart (12–13).",
        "The simple believe every word and the backslider is filled with his own ways, while the prudent watch their steps (14–22).",
        "Work beats talk, and the fear of the LORD gives strong confidence and a fountain of life (23–28).",
        "Slow wrath is great understanding, mercy to the poor honors their Maker, and the righteous have hope even in death (29–35)."
      ],
      "key": {
        "ref": "Proverbs 14:12",
        "text": "There is a way which seemeth right unto a man, but the end thereof are the ways of death."
      },
      "big": "What feels right to us can still lead to death, so we need God's way, not our gut. The fear of the LORD gives a man solid ground, a calm spirit, a merciful heart, and hope that reaches past the grave."
    }
  },
  {
    "id": "proverbs-15",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 15,
    "date": "2026-10-18",
    "title": "Proverbs 15",
    "sub": "A soft answer",
    "about": "Words that cool a fight, eyes that see everywhere, and the low road that leads to honour.",
    "tags": [
      "wisdom",
      "words",
      "anger",
      "prayer",
      "contentment",
      "counsel",
      "humility"
    ],
    "url": "studies/proverbs-15.html",
    "overview": {
      "where": "Israel, in the court of King Solomon at Jerusalem",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord",
        "The scorner",
        "The slothful man",
        "The widow",
        "The proud"
      ],
      "places": [],
      "story": [
        "A soft answer turns away wrath, and the eyes of the LORD are in every place, seeing the evil and the good (1–5).",
        "God hates religious show from the wicked but delights in the prayer of the upright; even the grave lies open before Him (6–11).",
        "A merry heart is a continual feast, and a little with the fear of the LORD beats great treasure with trouble (12–17).",
        "The lazy man's road is a hedge of thorns, and plans succeed with many counsellors (18–23).",
        "The LORD tears down the proud, guards the widow's border, and hears the prayer of the righteous (24–30).",
        "The man who takes correction lives among the wise, and before honour comes humility (31–33)."
      ],
      "key": {
        "ref": "Proverbs 15:1",
        "text": "A soft answer turneth away wrath: but grievous words stir up anger."
      },
      "big": "God sees everything and hears the honest prayer of the upright. Gentle words, a contented heart, good counsel, and humility are the road He blesses."
    }
  },
  {
    "id": "proverbs-16",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 16,
    "date": "2026-10-18",
    "title": "Proverbs 16",
    "sub": "The LORD directeth his steps",
    "about": "Our plans and God's hand, the pride that comes before a fall, and the man who rules his own spirit.",
    "tags": [
      "wisdom",
      "God's sovereignty",
      "trust",
      "pride",
      "self-control",
      "words",
      "honesty"
    ],
    "url": "studies/proverbs-16.html",
    "overview": {
      "where": "Israel, in the court of King Solomon at Jerusalem",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord",
        "The king",
        "The proud",
        "The whisperer",
        "The violent man"
      ],
      "places": [],
      "story": [
        "Our ways look clean to us, but the LORD weighs the spirit; roll your works onto Him and your plans will stand (1–3).",
        "Everything serves God's purpose, sin is purged by mercy and truth, and while a man plans his way, the LORD directs his steps (4–9).",
        "Honest weights belong to the LORD, and a righteous king rules by justice and favour (10–15).",
        "Wisdom is better than gold, and pride goes before destruction (16–20).",
        "Pleasant words are like honey, while gossips, schemers, and violent men spread trouble (21–30).",
        "Ruling your own spirit beats taking a city, and even the lot is in the LORD's hand (31–33)."
      ],
      "key": {
        "ref": "Proverbs 16:9",
        "text": "A man’s heart deviseth his way: but the LORD directeth his steps."
      },
      "big": "We make our plans, but the LORD directs the steps and has the final word. Trust Him with your works, stay humble, rule your own spirit by His Spirit, and use your words to heal."
    }
  },
  {
    "id": "proverbs-17",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 17,
    "date": "2026-10-18",
    "title": "Proverbs 17",
    "sub": "A friend at all times",
    "about": "Short sayings about peace at home, hard hearts, true friends, and knowing when to keep quiet.",
    "tags": [
      "friendship",
      "strife",
      "correction",
      "joy",
      "words",
      "the heart"
    ],
    "url": "studies/proverbs-17.html",
    "overview": {
      "where": "Israel. Part of the collection headed “The proverbs of Solomon” (10:1 to 22:16).",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord"
      ],
      "places": [],
      "story": [
        "A dry crust in peace beats a feast full of fighting, and the LORD tests hearts the way fire tests silver and gold (1–3).",
        "Mocking the poor insults their Maker, and love covers an offense instead of repeating it (4–9).",
        "A wise man learns from one rebuke, a fool not from a hundred blows; strife starts like a leak in a dam (10–16).",
        "A friend loves at all times, and a brother is born for hard times; don't co-sign what you can't cover (17–20).",
        "A merry heart is good medicine, while bribes twist justice (21–26).",
        "A man of understanding spares his words; even a fool seems wise when he keeps quiet (27–28)."
      ],
      "key": {
        "ref": "Proverbs 17:17",
        "text": "A friend loveth at all times, and a brother is born for adversity."
      },
      "big": "Peace, faithful friendship, and a teachable heart are worth more than plenty. God tests the heart, a true friend stays when trouble comes, and a wise man listens more than he talks."
    }
  },
  {
    "id": "proverbs-18",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 18,
    "date": "2026-10-18",
    "title": "Proverbs 18",
    "sub": "A strong tower",
    "about": "Where to run when trouble comes, the power of the tongue, and a Friend who sticks closer than a brother.",
    "tags": [
      "refuge",
      "the tongue",
      "pride",
      "listening",
      "wounded spirit",
      "friendship"
    ],
    "url": "studies/proverbs-18.html",
    "overview": {
      "where": "Israel. Part of the collection headed “The proverbs of Solomon” (10:1 to 22:16).",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord"
      ],
      "places": [],
      "story": [
        "The man who cuts himself off follows his own desires, and a fool only wants to air his opinions (1–3).",
        "A man's words come from deep waters; a fool's mouth picks his fights, and gossip goes down deep (4–9).",
        "The name of the LORD is a strong tower; a rich man's wall exists only in his head, and pride comes before destruction (10–12).",
        "Hear before you answer, for a wounded spirit is hard to bear and every story has another side (13–17).",
        "An offended brother is hard to win back, and death and life are in the power of the tongue (18–21).",
        "A good wife is favour from the LORD, and there is a friend that sticketh closer than a brother (22–24)."
      ],
      "key": {
        "ref": "Proverbs 18:10",
        "text": "The name of the LORD is a strong tower: the righteous runneth into it, and is safe."
      },
      "big": "When trouble comes, run to the Lord, not to money or pride. Our words carry the power of death and life, so listen first, speak life, and hold on to the Friend who never leaves."
    }
  },
  {
    "id": "proverbs-19",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 19,
    "date": "2026-10-18",
    "title": "Proverbs 19",
    "sub": "Slow to anger",
    "about": "Honesty when you're broke, a long fuse, kindness God repays, and the one plan that always stands.",
    "tags": [
      "anger",
      "honesty",
      "the poor",
      "God's plans",
      "counsel",
      "laziness"
    ],
    "url": "studies/proverbs-19.html",
    "overview": {
      "where": "Israel. Part of the collection headed “The proverbs of Solomon” (10:1 to 22:16).",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord"
      ],
      "places": [],
      "story": [
        "An honest poor man beats a lying fool; a man wrecks his own way, then rages at the LORD, and money draws fair-weather friends (1–7).",
        "Getting wisdom is loving your own soul, and a liar will not escape (8–10).",
        "Good sense slows a man's anger and lets an offense pass; quarrels at home are like a leaking roof (11–15).",
        "Kindness to the poor is a loan to the LORD, and rescuing an angry man only starts the loop again (16–19).",
        "Many plans fill a man's heart, but the counsel of the LORD shall stand; the fear of the LORD leads to life (20–23).",
        "The sluggard won't even feed himself; stop listening to teaching that leads you astray (24–29)."
      ],
      "key": {
        "ref": "Proverbs 19:21",
        "text": "There are many devices in a man’s heart; nevertheless the counsel of the LORD, that shall stand."
      },
      "big": "A wise man owns his choices, tells the truth, lengthens his fuse, and is kind to the poor. Our plans come and go, but the LORD's purpose stands, and listening to His counsel leads to life."
    }
  },
  {
    "id": "proverbs-20",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 20,
    "date": "2026-10-18",
    "title": "Proverbs 20",
    "sub": "Wine is a mocker",
    "about": "What the bottle really does, a heart no man can clean himself, honest weights, and leaving revenge to the LORD.",
    "tags": [
      "drink",
      "recovery",
      "grace",
      "honesty",
      "revenge",
      "God's guidance"
    ],
    "url": "studies/proverbs-20.html",
    "overview": {
      "where": "Israel. Part of the collection headed “The proverbs of Solomon” (10:1 to 22:16).",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord"
      ],
      "places": [],
      "story": [
        "Wine is a mocker and strong drink is raging; whoever is deceived by it is not wise (1).",
        "It's an honour to walk away from strife; the sluggard won't plow in the cold and has nothing at harvest (2–8).",
        "No man can say he has made his own heart clean (9).",
        "God hates crooked weights; bread gotten by deceit turns to gravel, and a gossip can't keep secrets (10–19).",
        "Don't repay evil but wait on the LORD; a man's steps are of the LORD, so beware of rash vows (20–25).",
        "The spirit of man is the candle of the LORD, and grey hair is the beauty of old men (26–30)."
      ],
      "key": {
        "ref": "Proverbs 20:22",
        "text": "Say not thou, I will recompense evil; but wait on the LORD, and he shall save thee."
      },
      "big": "Drink and dishonesty promise sweetness and deliver gravel. No man can clean his own heart, but Christ can, and the LORD who orders our steps can be trusted with every wrong done to us."
    }
  },
  {
    "id": "proverbs-21",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 21,
    "date": "2026-10-18",
    "title": "Proverbs 21",
    "sub": "The LORD weighs the heart",
    "about": "Every road a man takes is weighed by the LORD, who turns even a king's heart and gives the victory.",
    "tags": [
      "God's sovereignty",
      "the heart",
      "worship",
      "mercy",
      "desire",
      "laziness",
      "trust"
    ],
    "url": "studies/proverbs-21.html",
    "overview": {
      "where": "Israel, in the court of King Solomon",
      "when": "Solomon's reign, about 970–930 B.C.",
      "people": [
        "solomon",
        "the-lord",
        "The king",
        "The diligent and the slothful",
        "The scorner"
      ],
      "places": [
        "israel"
      ],
      "story": [
        "The king's heart is a stream in the LORD's hand, and the LORD weighs every heart (1–3)",
        "Pride, haste, lies, and robbery all lead to ruin (4–8)",
        "Better a corner of the roof than a house full of fighting; the man who ignores the poor will not be heard (9–13)",
        "Bribes, wandering, pleasure, and strife: roads that end badly (14–19)",
        "The wise save and guard their tongues, while the slothful man's desire kills him (20–29)",
        "No wisdom stands against the LORD; prepare the horse, but safety is of the LORD (30–31)"
      ],
      "key": {
        "ref": "Proverbs 21:2",
        "text": "Every way of a man is right in his own eyes: but the LORD pondereth the hearts."
      },
      "big": "We always look right to ourselves, but the LORD weighs the heart and rules over all. Do right, show mercy, work faithfully, and trust Him for the outcome."
    }
  },
  {
    "id": "proverbs-22",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 22,
    "date": "2026-10-18",
    "title": "Proverbs 22",
    "sub": "A good name and the words of the wise",
    "about": "What a good name is worth, how a child is trained, and why the company you keep shapes the man you become.",
    "tags": [
      "character",
      "fathers",
      "children",
      "the poor",
      "excuses",
      "friends",
      "debt",
      "trust"
    ],
    "url": "studies/proverbs-22.html",
    "overview": {
      "where": "Israel, in the court of King Solomon",
      "when": "Solomon's reign, about 970–930 B.C. From 22:17 on, “the words of the wise,” whose writers aren't named.",
      "people": [
        "solomon",
        "the-lord",
        "The prudent and the simple",
        "The angry man",
        "The poor"
      ],
      "places": [
        "israel"
      ],
      "story": [
        "A good name beats riches; rich and poor have the same Maker (1–2)",
        "The prudent man sees trouble coming and turns aside; train up a child in the way he should go (3–6)",
        "Debt makes a servant, and generosity is blessed (7–9)",
        "The scorner, the lazy man's lion, the strange woman's pit, and loving correction (10–16)",
        "A new section, the words of the wise, written so our trust may be in the LORD (17–21)",
        "Don't rob the poor, befriend an angry man, co-sign debts, or move the old landmark (22–29)"
      ],
      "key": {
        "ref": "Proverbs 22:1",
        "text": "A good name is rather to be chosen than great riches, and loving favour rather than silver and gold."
      },
      "big": "A good name, wise friends, and a trust in the LORD are worth more than money. Proverbs gives wise principles, not guarantees, and it is never too late to start walking in them."
    }
  },
  {
    "id": "proverbs-23",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 23,
    "date": "2026-10-18",
    "title": "Proverbs 23",
    "sub": "Who hath woe?",
    "about": "A rich man's table, riches with wings, a father's plea for his son's heart, and an honest picture of the drunkard's trap and the way out.",
    "tags": [
      "appetite",
      "riches",
      "redeemer",
      "envy",
      "the heart",
      "addiction",
      "drunkenness",
      "recovery"
    ],
    "url": "studies/proverbs-23.html",
    "overview": {
      "where": "Israel. Sayings of wise teachers, added to Solomon's collection",
      "when": "“The words of the wise” (22:17–24:34). Their writers aren't named.",
      "people": [
        "solomon",
        "the-lord",
        "A ruler at his table",
        "The fatherless and their Redeemer",
        "The drunkard"
      ],
      "places": [
        "israel"
      ],
      "story": [
        "At the ruler's table, curb your appetite; his dainties are bait (1–3)",
        "Don't wear yourself out to be rich; riches fly away like an eagle (4–8)",
        "God is the mighty Redeemer of the fatherless; correct a child in love (9–14)",
        "Don't envy sinners, for surely there is an end; stay away from drunkards and gluttons (15–21)",
        "Buy the truth, honor your parents, and give God your heart (22–28)",
        "Who hath woe? The drunkard's cycle: it looks good, it bites, and he seeks it yet again (29–35)"
      ],
      "key": {
        "ref": "Proverbs 23:26",
        "text": "My son, give me thine heart, and let thine eyes observe my ways."
      },
      "big": "Every craving has a hook in it, and the drunkard's cycle is real. God asks for our heart, and in Christ the cycle can be broken with the Lord, His people, and real help."
    }
  },
  {
    "id": "proverbs-24",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 24,
    "date": "2026-10-18",
    "title": "Proverbs 24",
    "sub": "Seven times down, seven times up",
    "about": "A house built by wisdom, a just man who keeps getting up, and a field gone to thorns.",
    "tags": [
      "envy",
      "wisdom",
      "counsel",
      "rescue",
      "relapse",
      "revenge",
      "laziness"
    ],
    "url": "studies/proverbs-24.html",
    "overview": {
      "where": "Israel. Sayings of wise teachers, added to Solomon's collection",
      "when": "“The words of the wise” (22:17–24:34). Their writers aren't named.",
      "people": [
        "solomon",
        "the-lord",
        "Evil men",
        "The just man",
        "The slothful man"
      ],
      "places": [
        "israel"
      ],
      "story": [
        "Don't envy evil men; a house is built by wisdom and kept by counsel (1–7)",
        "Don't faint in adversity, and rescue those being drawn toward death (8–12)",
        "Wisdom is sweet as honey; a just man falls seven times and rises up again (13–16)",
        "No gloating, no fretting; fear the LORD and the king (17–22)",
        "More words of the wise: no favoritism, honest answers, first things first, no revenge (23–29)",
        "The field of the slothful: a little sleep, and poverty comes like an armed man (30–34)"
      ],
      "key": {
        "ref": "Proverbs 24:16",
        "text": "For a just man falleth seven times, and riseth up again: but the wicked shall fall into mischief."
      },
      "big": "What makes a man just isn't that he never falls, but that by God's grace he gets back up. Build your life on wisdom one faithful day at a time, and leave revenge to God."
    }
  },
  {
    "id": "proverbs-25",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 25,
    "date": "2026-10-18",
    "title": "Proverbs 25",
    "sub": "Words like apples of gold",
    "about": "King Hezekiah's men copy out Solomon's wisdom on humility, well-chosen words, knowing when to stop, feeding an enemy, and ruling your own spirit.",
    "tags": [
      "humility",
      "words",
      "enemies",
      "self-control",
      "Hezekiah"
    ],
    "url": "studies/proverbs-25.html",
    "overview": {
      "where": "The royal court of Judah in Jerusalem, where Hezekiah's scribes gathered Solomon's sayings",
      "when": "Spoken by Solomon about 970–930 B.C.; copied out under King Hezekiah about 715–686 B.C.",
      "people": [
        "solomon",
        "hezekiah",
        "the-lord"
      ],
      "places": ["judah"],
      "story": [
        "Hezekiah's men begin a new collection of Solomon's proverbs, about kings who search out a matter and God who conceals (1–5)",
        "Take the low seat, and settle a quarrel with your neighbour face to face (6–10)",
        "A word fitly spoken is like apples of gold; faithful men refresh, boasters are clouds without rain (11–15)",
        "Honey, visits, lies, and songs to a heavy heart: good things and bad things out of measure (16–20)",
        "Feed your enemy and heap coals of fire on his head; good news is like cold water (21–25)",
        "A man without rule over his own spirit is a city with its walls broken down (26–28)"
      ],
      "key": {
        "ref": "Proverbs 25:28",
        "text": "He that hath no rule over his own spirit is like a city that is broken down, and without walls."
      },
      "big": "Wisdom shows up in humility, well-timed words, knowing when to stop, and kindness to enemies. A man without self-control is a city without walls, and the Spirit is the one who rebuilds them."
    }
  },
  {
    "id": "proverbs-26",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 26,
    "date": "2026-10-18",
    "title": "Proverbs 26",
    "sub": "Fools, sluggards, and talebearers",
    "about": "Plain portraits of the fool, the sluggard, and the gossip, with honest words about going back to old ways and the hope of getting up again.",
    "tags": [
      "the fool",
      "relapse",
      "laziness",
      "gossip",
      "pride"
    ],
    "url": "studies/proverbs-26.html",
    "overview": {
      "where": "Part of the collection of Solomon's proverbs copied out by Hezekiah's men (25:1)",
      "when": "Spoken by Solomon about 970–930 B.C.; copied out under King Hezekiah about 715–686 B.C.",
      "people": [
        "solomon",
        "hezekiah"
      ],
      "places": [],
      "story": [
        "Honour doesn't fit a fool, and a causeless curse won't land (1–3)",
        "Answer not a fool, and answer a fool: wisdom knows which moment it is (4–9)",
        "A dog returns to his vomit, and the man wise in his own conceit is worse than a fool (10–12)",
        "The sluggard sees a lion in the way and turns on his bed like a door on its hinges (13–16)",
        "Meddlers, pranksters, and talebearers feed the fire; no wood, no fire (17–22)",
        "Smooth lips over a hateful heart, and the pit that catches the man who dug it (23–28)"
      ],
      "key": {
        "ref": "Proverbs 26:12",
        "text": "Seest thou a man wise in his own conceit? there is more hope of a fool than of him."
      },
      "big": "The fool, the sluggard, and the gossip are painted plainly so we can see ourselves. Folly is a loop that keeps going back, but a man who stops trusting his own wisdom, confesses, and gets up again has real hope."
    }
  },
  {
    "id": "proverbs-27",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 27,
    "date": "2026-10-18",
    "title": "Proverbs 27",
    "sub": "Iron sharpeneth iron",
    "about": "Living one day at a time, the faithful wounds of a friend, brothers who sharpen each other, eyes that are never satisfied, and steady care for what God has given.",
    "tags": [
      "friendship",
      "accountability",
      "tomorrow",
      "contentment",
      "work"
    ],
    "url": "studies/proverbs-27.html",
    "overview": {
      "where": "Part of the collection of Solomon's proverbs copied out by Hezekiah's men (25:1)",
      "when": "Spoken by Solomon about 970–930 B.C.; copied out under King Hezekiah about 715–686 B.C.",
      "people": [
        "solomon",
        "hezekiah"
      ],
      "places": [],
      "story": [
        "Boast not of tomorrow, and let another man praise you (1–4)",
        "Faithful are the wounds of a friend; a near neighbour beats a far-off brother (5–10)",
        "The prudent man sees trouble coming and hides himself (11–16)",
        "Iron sharpeneth iron, and as water reflects a face, one heart reflects another (17–19)",
        "Eyes never satisfied, praise as a refiner's fire, and folly that can't be pounded out (20–22)",
        "Know the state of your flocks: steady care outlasts riches (23–27)"
      ],
      "key": {
        "ref": "Proverbs 27:17",
        "text": "Iron sharpeneth iron; so a man sharpeneth the countenance of his friend."
      },
      "big": "We only have today, and we weren't meant to live it alone. Honest friends who wound faithfully and sharpen us keep us from going dull, and only Christ fills the hunger our eyes can never satisfy."
    }
  },
  {
    "id": "proverbs-28",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 28,
    "date": "2026-10-18",
    "title": "Proverbs 28",
    "sub": "Bold as a lion",
    "about": "Why guilty men run and forgiven men stand, why covered sin never prospers, and why confessing and forsaking it brings mercy.",
    "tags": [
      "confession",
      "courage",
      "money",
      "trust",
      "company"
    ],
    "url": "studies/proverbs-28.html",
    "overview": {
      "where": "Part of the collection of Solomon's proverbs copied out by Hezekiah's men (25:1)",
      "when": "Spoken by Solomon about 970–930 B.C.; copied out under King Hezekiah about 715–686 B.C.",
      "people": [
        "solomon",
        "hezekiah",
        "the-lord"
      ],
      "places": [],
      "story": [
        "The wicked flee when no man pursueth, but the righteous are bold as a lion (1–5)",
        "Better poor and upright than rich and crooked; your companions shape you (6–12)",
        "He that covereth his sins shall not prosper, but confessing and forsaking them brings mercy (13–14)",
        "Wicked rulers roar like lions; the upright walk safely (15–18)",
        "Haste to be rich, selling out for a piece of bread, and robbing your own family (19–24)",
        "Trusting your own heart is folly; trust the LORD and give to the poor (25–28)"
      ],
      "key": {
        "ref": "Proverbs 28:13",
        "text": "He that covereth his sins shall not prosper: but whoso confesseth and forsaketh them shall have mercy."
      },
      "big": "Hidden sin makes a man run from shadows, but confessed and forsaken sin finds mercy. Forgiven men can stand bold as lions, and they learn to trust the LORD instead of their own hearts."
    }
  },
  {
    "id": "proverbs-29",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 29,
    "date": "2026-10-18",
    "title": "Proverbs 29",
    "sub": "Stiff necks and safe places",
    "about": "Solomon's last collection ends with a warning about hard hearts, and a promise of safety for every man who trusts the LORD.",
    "tags": [
      "Correction",
      "Leadership",
      "Fathers",
      "God's Word",
      "Anger",
      "Pride",
      "Fear of man"
    ],
    "url": "studies/proverbs-29.html",
    "overview": {
      "where": "Jerusalem, in Solomon's court; copied out later by King Hezekiah's men (25:1)",
      "when": "Spoken by Solomon about 970–930 B.C.; copied out under King Hezekiah about 715–686 B.C.",
      "people": [
        "solomon",
        "hezekiah",
        "the-lord"
      ],
      "places": [
        "jerusalem"
      ],
      "story": [
        "A man who keeps refusing correction will be broken suddenly, with no remedy (1).",
        "Righteous leaders make people rejoice; bribes, flattery, and scoffers set snares for a whole land (2–8).",
        "A fool says everything he feels, a ruler who listens to lies corrupts his servants, and a child left to himself brings shame (9–17).",
        "Where God's Word isn't heard, people run wild; the man who keeps it is happy (18–21).",
        "Anger stirs up strife and pride brings a man low, but the humble are honored (22–24).",
        "The fear of man is a trap; the man who trusts the LORD is set safe on high (25–27)."
      ],
      "key": {
        "ref": "Proverbs 29:25",
        "text": "The fear of man bringeth a snare: but whoso putteth his trust in the LORD shall be safe."
      },
      "big": "God warns a stubborn man again and again, so bend while you can still hear Him. Living for people's approval is a snare; trusting the LORD puts a man somewhere it can't reach."
    }
  },
  {
    "id": "proverbs-30",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 30,
    "date": "2026-10-18",
    "title": "Proverbs 30",
    "sub": "The words of Agur",
    "about": "A humble man asks who made the world, trusts God's pure Word, prays for just enough, and learns from ants and lizards.",
    "tags": [
      "Humility",
      "Who God is",
      "God's Word",
      "Contentment",
      "Cravings",
      "Confession",
      "Anger"
    ],
    "url": "studies/proverbs-30.html",
    "overview": {
      "where": "Unknown; Agur's home is not recorded",
      "when": "Unknown; added to Proverbs by the time the book was finished",
      "people": [
        "agur",
        "jakeh",
        "ithiel-and-ucal",
        "the-lord"
      ],
      "places": [
        "heaven"
      ],
      "story": [
        "Agur admits how little he knows and asks who made the world, and what is His Son's name (1–4).",
        "Every word of God is pure, so don't add to it; Agur prays for honesty and for neither poverty nor riches (5–9).",
        "He describes proud, self-righteous, greedy people and appetites that never say “It is enough” (10–17).",
        "Four things leave no trace, and neither does the adulteress who wipes her mouth and claims innocence (18–20).",
        "What shakes the earth, four small but wise creatures, and four with a stately walk (21–31).",
        "If you've been foolish, put your hand over your mouth: pressing anger only brings strife (32–33)."
      ],
      "key": {
        "ref": "Proverbs 30:5",
        "text": "Every word of God is pure: he is a shield unto them that put their trust in him."
      },
      "big": "Wisdom starts with admitting we don't know, and trusting the God whose Word is pure and whose Son came down from heaven. Ask Him for daily bread, and don't feed cravings that are never satisfied."
    }
  },
  {
    "id": "proverbs-31",
    "type": "chapter",
    "book": "Proverbs",
    "ch": 31,
    "date": "2026-10-18",
    "title": "Proverbs 31",
    "sub": "A mother's counsel and a woman of strength",
    "about": "A king's mother tells him how a ruler should live, then paints the picture of a woman worth more than rubies.",
    "tags": [
      "Strong drink",
      "Justice",
      "Mothers",
      "Marriage",
      "Honoring women",
      "Character",
      "Fear of the LORD"
    ],
    "url": "studies/proverbs-31.html",
    "overview": {
      "where": "The court of King Lemuel; his kingdom isn't named",
      "when": "Unknown. King Lemuel isn't mentioned anywhere else in the Bible.",
      "people": [
        "lemuel",
        "Lemuel's mother",
        "the-lord"
      ],
      "places": [],
      "story": [
        "King Lemuel's mother warns him not to give his strength to women or his clear head to wine (1–5).",
        "Strong drink belongs with the dying, not with a king who must judge; he must speak up for the poor and needy (6–9).",
        "A poem from aleph to tav: a woman of strength whose husband can trust her, who works with joy and plans wisely (10–18).",
        "Her hands spin wool and reach out to the poor; her household is ready, and her husband is known in the gates (19–24).",
        "Strength and honour are her clothing, and kindness rules her tongue (25–27).",
        "Her family praises her, because a woman who fears the LORD is worth more than charm or beauty (28–31)."
      ],
      "key": {
        "ref": "Proverbs 31:30",
        "text": "Favour is deceitful, and beauty is vain: but a woman that feareth the LORD, she shall be praised."
      },
      "big": "A leader keeps a clear head so he can do justice for people who have no voice. Proverbs ends where it began: the fear of the LORD is the heart of a strong and honorable life."
    }
  },
  {
    "id": "topic-wisdom-proverbs",
    "type": "topic",
    "date": "2026-10-18",
    "title": "Wisdom",
    "sub": "Skill for living, from the God who gives it",
    "about": "Every verse in Proverbs that says “wisdom”: where it starts, what it's worth, how it points to Christ, and what it looks like on an ordinary day.",
    "tags": [
      "wisdom",
      "fear of the LORD",
      "Proverbs",
      "Jesus",
      "Jehovah's Witnesses",
      "pride",
      "the tongue",
      "isolation",
      "addiction"
    ],
    "url": "studies/topic-wisdom-proverbs.html",
    "overview": {
      "where": "All through the book of Proverbs",
      "when": "Mostly from Solomon's reign (about 970–930 B.C.), gathered into the book by about 700 B.C. (Proverbs 25:1)",
      "people": [
        "solomon",
        "the-lord",
        "jesus",
        "agur",
        "Bezaleel"
      ],
      "places": [],
      "story": [
        "Wisdom (Hebrew chokmah) is skill for living, and it starts with the fear of the LORD, who gives it as a gift (1:2–7, 9:10, 2:6, 30:3–4)",
        "Wisdom is pictured as a woman calling the simple and the fools in the streets, and a father urges his son to make her the principal thing (1:20, 8:1–14, 4:5–7, 5:1)",
        "Wisdom is worth more than gold, silver and rubies, and money can't buy it for a man with no heart for it (3:13, 8:11, 16:16, 17:16, 23:23)",
        "God made the world by wisdom; Proverbs 8 is poetry about His eternal wisdom, not proof that Jesus was created, and Christ is the wisdom of God and the Creator (3:19, 8:22–31; 1 Corinthians 1:24, 30; Colossians 2:3; John 1:3)",
        "Wisdom's house and folly's house call the same man with the same words, but one ends in life and the other in death (9:1–6, 9:16–18)",
        "Wisdom shows up in the mouth, in humility, in where a man's eyes are, in staying close to others, and in money, and God gives it to anyone who asks (10:21, 11:2, 17:24, 18:1, 23:4; James 1:5)"
      ],
      "key": {
        "ref": "Proverbs 9:10",
        "text": "The fear of the LORD is the beginning of wisdom: and the knowledge of the holy is understanding."
      },
      "big": "Wisdom is God's skill for living, and it starts with the fear of the LORD. Its fullest form is a Person: Jesus Christ, the eternal wisdom of God, who gives it to anyone who asks."
    }
  }
];
