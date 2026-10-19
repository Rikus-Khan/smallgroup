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
  }
];
