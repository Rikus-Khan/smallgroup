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
    "id": "john-03",
    "type": "chapter",
    "book": "John",
    "ch": 3,
    "date": "2026-10-29",
    "title": "John 3",
    "sub": "Born again",
    "about": "A respected teacher comes to Jesus by night and hears the best news in the world: God so loved the world.",
    "tags": [
      "New birth",
      "Salvation",
      "God's love",
      "Light and darkness",
      "Assurance",
      "Humility"
    ],
    "url": "studies/john-03.html",
    "overview": {
      "where": "Jerusalem by night, then the Judaean countryside and Aenon near Salim",
      "when": "Soon after the Passover of John 2",
      "people": [
        "jesus",
        "nicodemus",
        "pharisees",
        "disciples",
        "john-the-baptist",
        "the-jews"
      ],
      "places": [
        "judaea",
        "aenon",
        "jordan"
      ],
      "story": [
        "Nicodemus, a Pharisee and a ruler of the Jews, comes to Jesus by night. Jesus tells him, “Ye must be born again” (1–8).",
        "The teacher of Israel can't understand it. Jesus says the Son of man must be lifted up, like the serpent in the wilderness (9–15).",
        "“For God so loved the world.” Whoever believes is not condemned, but men who love darkness stay away from the light (16–21).",
        "Jesus' disciples baptize in Judaea while John baptizes at Aenon. John's disciples complain that everyone is going to Jesus (22–26).",
        "John rejoices like the best man at a wedding: “He must increase, but I must decrease.” Whoever believes on the Son has everlasting life (27–36)."
      ],
      "key": {
        "ref": "John 3:16",
        "text": "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
      },
      "big": "No one can fix himself. Every man needs a new birth from above, and God offers it to whosoever believes in His Son. Believers have everlasting life now."
    }
  },
  {
    "id": "john-04",
    "type": "chapter",
    "book": "John",
    "ch": 4,
    "date": "2026-10-29",
    "title": "John 4",
    "sub": "Living water",
    "about": "A tired Jesus sits at a well, meets a thirsty woman with a past, and a whole town finds the Saviour of the world.",
    "tags": [
      "Salvation",
      "Grace",
      "Shame",
      "Worship",
      "Witnessing",
      "Faith"
    ],
    "url": "studies/john-04.html",
    "overview": {
      "where": "Jacob's well at Sychar in Samaria, then Cana of Galilee",
      "when": "On the way from Judaea back to Galilee, then two days later",
      "people": [
        "jesus",
        "woman-of-samaria",
        "disciples",
        "samaritans",
        "galilaeans",
        "nobleman"
      ],
      "places": [
        "judaea",
        "samaria",
        "sychar",
        "jacobs-well",
        "mount-gerizim",
        "galilee",
        "cana",
        "capernaum"
      ],
      "story": [
        "Jesus leaves Judaea and must go through Samaria. Tired from the road, He sits on Jacob's well at noon (1–6).",
        "He asks a Samaritan woman for a drink and offers her living water: whoever drinks it will never thirst again (7–15).",
        "He tells her about her five husbands, teaches that the Father seeks worship in spirit and in truth, and says, “I that speak unto thee am he” (16–26).",
        "She leaves her waterpot and brings the town: “Come, see a man.” Many Samaritans believe He is the Saviour of the world (27–42).",
        "Back in Cana, a nobleman begs Jesus to heal his dying son. “Go thy way; thy son liveth.” He believes, and the boy is healed that same hour (43–54)."
      ],
      "key": {
        "ref": "John 4:14",
        "text": "But whosoever drinketh of the water that I shall give him shall never thirst; but the water that I shall give him shall be in him a well of water springing up into everlasting life."
      },
      "big": "Jesus crosses every wall to reach thirsty, ashamed people, and gives them living water that never runs dry. Faith takes Him at His word."
    }
  },
  {
    "id": "john-05",
    "type": "chapter",
    "book": "John",
    "ch": 5,
    "date": "2026-10-29",
    "title": "John 5",
    "sub": "Wilt thou be made whole?",
    "about": "Jesus heals a man who had been sick for thirty-eight years, then tells the leaders exactly who He is.",
    "tags": [
      "Healing",
      "Grace",
      "Deity of Christ",
      "Assurance",
      "Scripture",
      "Recovery"
    ],
    "url": "studies/john-05.html",
    "overview": {
      "where": "The pool of Bethesda and the temple in Jerusalem",
      "when": "At a feast of the Jews, on a sabbath day",
      "people": [
        "jesus",
        "impotent-man",
        "the-jews",
        "the-father",
        "john-the-baptist",
        "moses"
      ],
      "places": [
        "jerusalem",
        "sheep-market",
        "bethesda",
        "temple"
      ],
      "story": [
        "At the pool of Bethesda, Jesus finds a man who has been sick thirty-eight years and asks, “Wilt thou be made whole?” (1–7).",
        "Jesus says, “Rise, take up thy bed, and walk,” and the man is healed at once. But it is the sabbath, and the leaders object (8–13).",
        "Jesus finds the man in the temple: “Sin no more, lest a worse thing come unto thee.” The leaders begin to persecute Jesus (14–16).",
        "Jesus calls God His Father, making Himself equal with God. The Son gives life and judges, and whoever believes has everlasting life (17–30).",
        "Jesus names His witnesses: John, His works, the Father, the Scriptures, and Moses. Yet they will not come to Him for life (31–47)."
      ],
      "key": {
        "ref": "John 5:24",
        "text": "Verily, verily, I say unto you, He that heareth my word, and believeth on him that sent me, hath everlasting life, and shall not come into condemnation; but is passed from death unto life."
      },
      "big": "Jesus makes whole the man who could not help himself, and He claims to be equal with God. Whoever hears His word and believes has everlasting life now, and will never come into condemnation."
    }
  },
  {
    "id": "john-06",
    "type": "chapter",
    "book": "John",
    "ch": 6,
    "date": "2026-10-29",
    "title": "John 6",
    "sub": "The bread of life",
    "about": "Jesus feeds five thousand, walks on a stormy sea, and tells the crowd He is the bread they've really been hungry for.",
    "tags": [
      "Signs",
      "Provision",
      "Fear",
      "Salvation",
      "Security",
      "Following Jesus"
    ],
    "url": "studies/john-06.html",
    "overview": {
      "where": "The hills by the Sea of Galilee, the sea itself, then the synagogue in Capernaum",
      "when": "Near the Passover, over an evening, a night, and the next day",
      "people": [
        "jesus",
        "philip",
        "andrew",
        "the-lad",
        "disciples",
        "the-jews",
        "simon-peter",
        "the-twelve",
        "judas-iscariot"
      ],
      "places": [
        "sea-of-galilee",
        "tiberias",
        "capernaum",
        "synagogue"
      ],
      "story": [
        "With five barley loaves and two small fishes from a boy, Jesus feeds about five thousand men, and twelve baskets are left over (1–13).",
        "The crowd wants to make Him king by force, so He goes up a mountain alone (14–15).",
        "In the dark, on a stormy sea, Jesus comes walking on the water: “It is I; be not afraid” (16–21).",
        "The crowd follows for more bread. Jesus says, “I am the bread of life”: whoever comes to Him and believes on Him has everlasting life (22–59).",
        "Many disciples walk away. Peter answers, “Lord, to whom shall we go? thou hast the words of eternal life” (60–71)."
      ],
      "key": {
        "ref": "John 6:35",
        "text": "And Jesus said unto them, I am the bread of life: he that cometh to me shall never hunger; and he that believeth on me shall never thirst."
      },
      "big": "Jesus is the bread that gives everlasting life. The work God asks is to believe on Him, and He will never cast out anyone who comes."
    }
  },
  {
    "id": "john-07",
    "type": "chapter",
    "book": "John",
    "ch": 7,
    "date": "2026-10-29",
    "title": "John 7",
    "sub": "Rivers of living water",
    "about": "At the Feast of Tabernacles the crowd argues about who Jesus is, and on the last great day He calls out to anyone who is thirsty.",
    "tags": [
      "Who Jesus is",
      "God's timing",
      "Truth",
      "Judging",
      "Holy Spirit",
      "Courage"
    ],
    "url": "studies/john-07.html",
    "overview": {
      "where": "Galilee, then the temple in Jerusalem",
      "when": "The Feast of Tabernacles, in the fall, about six months before the cross",
      "people": [
        "jesus",
        "brethren",
        "disciples",
        "the-jews",
        "moses",
        "pharisees",
        "chief-priests",
        "officers",
        "nicodemus",
        "holy-spirit",
        "david"
      ],
      "places": [
        "galilee",
        "judaea",
        "jerusalem",
        "temple",
        "bethlehem"
      ],
      "story": [
        "Jesus' own brothers, who don't believe in Him, dare Him to show Himself at the feast. He says, “My time is not yet come,” then goes up quietly (1–13).",
        "Halfway through the feast He teaches in the temple: “If any man will do his will, he shall know of the doctrine” (14–24).",
        "The crowd argues about where He came from. The leaders send officers to arrest Him, but “his hour was not yet come” (25–36).",
        "On the last great day He cries out, “If any man thirst, let him come unto me, and drink,” promising rivers of living water, the Holy Spirit (37–39).",
        "The people split over Him. The officers come back saying, “Never man spake like this man,” and Nicodemus speaks up for a fair hearing (40–53)."
      ],
      "key": {
        "ref": "John 7:37",
        "text": "In the last day, that great day of the feast, Jesus stood and cried, saying, If any man thirst, let him come unto me, and drink."
      },
      "big": "Jesus divides opinion, but His invitation is open to anyone: come to Him and drink, and the Holy Spirit will flow out of you like a river."
    }
  },
  {
    "id": "john-08",
    "type": "chapter",
    "book": "John",
    "ch": 8,
    "date": "2026-10-29",
    "title": "John 8",
    "sub": "The light of the world",
    "about": "Jesus refuses to condemn a woman caught in sin, offers freedom to slaves, and claims the very name of God: “Before Abraham was, I am.”",
    "tags": [
      "Grace",
      "Light",
      "Freedom",
      "Who Jesus is",
      "Spiritual warfare",
      "Eternal life"
    ],
    "url": "studies/john-08.html",
    "overview": {
      "where": "The Mount of Olives, then the temple in Jerusalem, in the treasury",
      "when": "Just after the Feast of Tabernacles, about six months before the cross",
      "people": [
        "jesus",
        "scribes",
        "pharisees",
        "woman-taken-in-adultery",
        "the-father",
        "the-jews",
        "abraham",
        "moses"
      ],
      "places": [
        "mount-of-olives",
        "temple",
        "treasury"
      ],
      "story": [
        "The scribes and Pharisees bring Jesus a woman taken in adultery to trap Him. He answers, “He that is without sin among you, let him first cast a stone at her” (1–9).",
        "The accusers leave one by one, and Jesus tells her, “Neither do I condemn thee: go, and sin no more” (10–11).",
        "In the treasury He says, “I am the light of the world,” and warns that whoever won't believe He is the I AM will die in his sins (12–30).",
        "Jesus promises, “the truth shall make you free.” Whoever sins is sin's slave, but if the Son sets you free you are free indeed. The devil is a liar and a murderer (31–47).",
        "“Before Abraham was, I am.” They pick up stones, but Jesus walks out of the temple untouched (48–59)."
      ],
      "key": {
        "ref": "John 8:12",
        "text": "Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life."
      },
      "big": "Jesus is the light of the world and the great I AM. He doesn't condemn the sinner who comes to Him: He sets slaves free and gives a life that never sees death."
    }
  },
  {
    "id": "john-09",
    "type": "chapter",
    "book": "John",
    "ch": 9,
    "date": "2026-10-29",
    "title": "John 9",
    "sub": "Once blind, now I see",
    "about": "Jesus gives sight to a man born blind. The man sees more clearly every hour, while the religious experts go blind.",
    "tags": [
      "Suffering",
      "Light",
      "Obedience",
      "Testimony",
      "Rejection",
      "Spiritual blindness"
    ],
    "url": "studies/john-09.html",
    "overview": {
      "where": "Jerusalem: a street near the temple, the pool of Siloam, and before the Pharisees",
      "when": "A sabbath day, probably in the autumn, not long after the Feast of Tabernacles (John 7–8)",
      "people": [
        "jesus",
        "disciples",
        "man-born-blind",
        "his-parents",
        "pharisees",
        "the-jews",
        "moses"
      ],
      "places": [
        "jerusalem",
        "siloam"
      ],
      "story": [
        "Jesus sees a man blind from birth. The disciples ask whose sin caused it; Jesus says it's so the works of God can be shown (1–5).",
        "He puts clay on the man's eyes and sends him to wash in the pool of Siloam. The man comes back seeing (6–12).",
        "It was the sabbath. The Pharisees question the man, then his frightened parents, and argue over who Jesus is (13–23).",
        "Pressed again, the man says, “One thing I know, that, whereas I was blind, now I see,” and they throw him out (24–34).",
        "Jesus finds him. The man believes and worships Him, while the Pharisees who say “We see” stay blind (35–41)."
      ],
      "key": {
        "ref": "John 9:25",
        "text": "He answered and said, Whether he be a sinner or no, I know not: one thing I know, that, whereas I was blind, now I see."
      },
      "big": "Jesus is the light of the world. He opens the eyes of anyone who admits he can't see, and when people throw you out for following Him, He comes looking for you."
    }
  },
  {
    "id": "john-10",
    "type": "chapter",
    "book": "John",
    "ch": 10,
    "date": "2026-10-29",
    "title": "John 10",
    "sub": "The Good Shepherd",
    "about": "Jesus is the door to the fold and the Shepherd who lays down His life for the sheep. No one can pluck them out of His hand.",
    "tags": [
      "The door",
      "His voice",
      "Abundant life",
      "The Good Shepherd",
      "Eternal security",
      "Deity of Christ"
    ],
    "url": "studies/john-10.html",
    "overview": {
      "where": "Jerusalem, then the temple in Solomon's porch, then beyond the Jordan",
      "when": "Soon after the blind man was healed, then at the feast of the dedication in winter (about December)",
      "people": [
        "jesus",
        "the-father",
        "the-jews",
        "pharisees",
        "john-the-baptist"
      ],
      "places": [
        "jerusalem",
        "temple",
        "solomons-porch",
        "jordan",
        "bethabara"
      ],
      "story": [
        "The true shepherd comes in by the door, calls his own sheep by name, and they follow because they know his voice (1–6).",
        "Jesus says, “I am the door”: whoever enters by Him is saved. The thief comes to steal, kill, and destroy; He came to give abundant life (7–10).",
        "“I am the good shepherd.” Unlike the hireling, He lays down His life for the sheep, and takes it again by His own power (11–21).",
        "At the feast of the dedication He promises His sheep eternal life: no man can pluck them out of His hand or the Father's. “I and my Father are one” (22–30).",
        "They take up stones for blasphemy. He points to His works, escapes, and goes beyond Jordan, where many believe on Him (31–42)."
      ],
      "key": {
        "ref": "John 10:28",
        "text": "And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand."
      },
      "big": "Jesus is the only door and the Good Shepherd who gave His life for His sheep. Whoever comes through Him is saved, and held so securely that no one can pluck him out of His hand."
    }
  },
  {
    "id": "john-11",
    "type": "chapter",
    "book": "John",
    "ch": 11,
    "date": "2026-10-29",
    "title": "John 11",
    "sub": "I am the resurrection",
    "about": "Jesus waits, weeps at His friend's grave, and calls Lazarus out four days dead. The miracle sets the plot to kill Him in motion.",
    "tags": [
      "Resurrection",
      "God's timing",
      "Grief",
      "Hope",
      "Freedom",
      "The cross"
    ],
    "url": "studies/john-11.html",
    "overview": {
      "where": "Beyond the Jordan, then Bethany near Jerusalem, then Ephraim near the wilderness",
      "when": "Shortly before Jesus' last Passover",
      "people": [
        "jesus",
        "lazarus",
        "martha",
        "mary-of-bethany",
        "disciples",
        "thomas",
        "the-jews",
        "pharisees",
        "chief-priests",
        "caiaphas"
      ],
      "places": [
        "bethany",
        "judaea",
        "jerusalem",
        "ephraim",
        "wilderness",
        "temple"
      ],
      "story": [
        "Word comes that Lazarus is sick. Jesus loves the family, and so He waits two more days before going (1–16).",
        "Lazarus has been in the grave four days. Jesus tells Martha, “I am the resurrection, and the life… Believest thou this?” (17–27).",
        "Mary falls at His feet in tears, and “Jesus wept” (28–37).",
        "At the tomb He says, “Lazarus, come forth.” The dead man walks out, and Jesus says, “Loose him, and let him go” (38–44).",
        "Many believe, but the council plots His death. Caiaphas says one man should die for the people, more true than he knows (45–57)."
      ],
      "key": {
        "ref": "John 11:25",
        "text": "Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live:"
      },
      "big": "Jesus doesn't just promise resurrection someday. He is the resurrection and the life, and no one is too far gone for His voice."
    }
  },
  {
    "id": "john-12",
    "type": "chapter",
    "book": "John",
    "ch": 12,
    "date": "2026-10-29",
    "title": "John 12",
    "sub": "The hour is come",
    "about": "Mary pours costly perfume on Jesus' feet, the crowds hail Him as King, and He explains why a seed has to die to bear fruit.",
    "tags": [
      "Worship",
      "The heart",
      "King",
      "Dying to live",
      "The cross",
      "Courage"
    ],
    "url": "studies/john-12.html",
    "overview": {
      "where": "Bethany, the road into Jerusalem, and the temple courts",
      "when": "Six days before Passover, the last week before the cross",
      "people": [
        "jesus",
        "mary-of-bethany",
        "martha",
        "lazarus",
        "judas-iscariot",
        "disciples",
        "chief-priests",
        "pharisees",
        "greeks",
        "philip",
        "andrew",
        "isaiah"
      ],
      "places": [
        "bethany",
        "jerusalem",
        "sion",
        "bethsaida",
        "galilee"
      ],
      "story": [
        "At a supper in Bethany, Mary anoints Jesus' feet with a pound of costly spikenard. Judas complains, but he is a thief (1–11).",
        "Crowds wave palm branches and cry “Hosanna” as Jesus rides into Jerusalem on a young ass, as Zechariah foretold (12–19).",
        "Greeks ask to see Jesus. He says His hour has come: “Except a corn of wheat fall into the ground and die, it abideth alone” (20–26).",
        "A voice from heaven answers His prayer, and He says that, lifted up, He will draw all men to Himself (27–36).",
        "Many still won't believe, and some rulers believe but keep quiet. Jesus makes His last public call to believe and live (37–50)."
      ],
      "key": {
        "ref": "John 12:32",
        "text": "And I, if I be lifted up from the earth, will draw all men unto me."
      },
      "big": "Jesus' death is the seed that brings a harvest of life. Lifted up on the cross, He calls everyone to come to Him and walk in the light."
    }
  },
  {
    "id": "john-13",
    "type": "chapter",
    "book": "John",
    "ch": 13,
    "date": "2026-10-29",
    "title": "John 13",
    "sub": "The towel and the night",
    "about": "Jesus washes His disciples' feet, sends Judas out into the night, and gives a new commandment: love one another as I have loved you.",
    "tags": [
      "Humility",
      "Cleansing",
      "Serving",
      "Betrayal",
      "Love",
      "Failure"
    ],
    "url": "studies/john-13.html",
    "overview": {
      "where": "A room in Jerusalem, at supper with the Twelve",
      "when": "The night before the cross, just before the Passover",
      "people": [
        "jesus",
        "the-father",
        "disciples",
        "simon-peter",
        "judas-iscariot",
        "beloved-disciple",
        "satan",
        "the-jews"
      ],
      "places": [
        "jerusalem"
      ],
      "story": [
        "Knowing His hour has come, Jesus rises from supper, takes a towel, and washes His disciples' feet (1–5).",
        "Peter refuses, then asks for a full bath. Jesus says a man who is washed needs only his feet washed: “ye are clean, but not all” (6–11).",
        "Jesus tells them He has given them an example: “ye also ought to wash one another's feet” (12–17).",
        "Troubled in spirit, He says one of them will betray Him. He hands the sop to Judas, who goes out: “and it was night” (18–30).",
        "Jesus gives a new commandment: love one another as I have loved you. Peter vows to die for Him, and Jesus foretells his three denials (31–38)."
      ],
      "key": {
        "ref": "John 13:34",
        "text": "A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another."
      },
      "big": "The Lord of all took a towel and served His friends, even the one who betrayed Him. He calls us to love each other the same way, and He knows our failures before they happen and still plans our way back."
    }
  },
  {
    "id": "john-14",
    "type": "chapter",
    "book": "John",
    "ch": 14,
    "date": "2026-10-29",
    "title": "John 14",
    "sub": "Let not your heart be troubled",
    "about": "The night before the cross, Jesus steadies frightened men: a place in His Father's house, the only way there, and a Comforter who will live inside them.",
    "tags": [
      "Peace",
      "Heaven",
      "The only way",
      "Seeing God",
      "Love",
      "The Holy Spirit"
    ],
    "url": "studies/john-14.html",
    "overview": {
      "where": "The same supper room in Jerusalem",
      "when": "The night before the cross, right after Judas leaves",
      "people": [
        "jesus",
        "the-father",
        "holy-spirit",
        "disciples",
        "thomas",
        "philip",
        "judas-not-iscariot",
        "satan"
      ],
      "places": [
        "jerusalem",
        "heaven"
      ],
      "story": [
        "“Let not your heart be troubled.” Jesus is going to prepare a place in His Father's house, and He will come again for them (1–4).",
        "Thomas asks how they can know the way. Jesus answers, “I am the way, the truth, and the life” (5–7).",
        "Philip asks to see the Father. Jesus says, “he that hath seen me hath seen the Father,” and promises greater works and answered prayer in His name (8–14).",
        "He promises another Comforter, the Spirit of truth, who will live in them for ever. He will not leave them orphans (15–24).",
        "He leaves them His peace, says the prince of this world has nothing in Him, and leads them out: “Arise, let us go hence” (25–31)."
      ],
      "key": {
        "ref": "John 14:6",
        "text": "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me."
      },
      "big": "Jesus is the only way to the Father, and He shows us exactly what God is like. He gives His own peace, a place in His Father's house, and the Holy Spirit to live in every believer for ever."
    }
  },
  {
    "id": "john-15",
    "type": "chapter",
    "book": "John",
    "ch": 15,
    "date": "2026-10-29",
    "title": "John 15",
    "sub": "The vine and the branches",
    "about": "Jesus is the true vine. He tells His men to abide in Him, calls them friends, and warns them the world will hate them.",
    "tags": [
      "Abiding",
      "Fruit",
      "Pruning",
      "Love",
      "Friendship",
      "The world"
    ],
    "url": "studies/john-15.html",
    "overview": {
      "where": "Jerusalem, as Jesus and the eleven leave the supper for the garden",
      "when": "The night before the cross, after the Last Supper",
      "people": [
        "jesus",
        "the-father",
        "disciples",
        "holy-spirit"
      ],
      "places": [
        "jerusalem"
      ],
      "story": [
        "Jesus says, “I am the true vine,” and the Father is the husbandman who prunes every branch so it bears more fruit (1–3).",
        "A branch can only bear fruit by staying on the vine: “Without me ye can do nothing” (4–8).",
        "He loves them as the Father loves Him, and commands them to love one another (9–12).",
        "“Greater love hath no man than this.” He calls them friends, not servants, and chose them to bear lasting fruit (13–17).",
        "The world will hate them because it hated Him first, but the Comforter will testify of Him, and so will they (18–27)."
      ],
      "key": {
        "ref": "John 15:5",
        "text": "I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing."
      },
      "big": "All the life a believer has comes from Jesus. We don't bear fruit by trying harder; we bear it by staying close to Him, held secure in His love."
    }
  },
  {
    "id": "john-16",
    "type": "chapter",
    "book": "John",
    "ch": 16,
    "date": "2026-10-29",
    "title": "John 16",
    "sub": "Sorrow turned to joy",
    "about": "Jesus promises the Comforter, tells His men their sorrow will turn to joy, and says, “Be of good cheer; I have overcome the world.”",
    "tags": [
      "Holy Spirit",
      "Conviction",
      "Truth",
      "Joy",
      "Prayer",
      "Peace"
    ],
    "url": "studies/john-16.html",
    "overview": {
      "where": "Jerusalem, on the way from the supper to the garden",
      "when": "The night before the cross, after the Last Supper",
      "people": [
        "jesus",
        "the-father",
        "disciples",
        "holy-spirit",
        "prince-of-this-world"
      ],
      "places": [
        "jerusalem",
        "synagogue"
      ],
      "story": [
        "Jesus warns that His followers will be put out of the synagogues and even killed, so they won't be caught off guard (1–4).",
        "It's better that He goes away, because then He will send the Comforter, who will reprove the world of sin, righteousness, and judgment (5–11).",
        "The Spirit of truth will guide them into all truth and glorify Jesus (12–15).",
        "“A little while”: they will weep while the world rejoices, but their sorrow will be turned into joy no man can take (16–24).",
        "They will scatter and leave Him alone, but He is not alone: “Be of good cheer; I have overcome the world” (25–33)."
      ],
      "key": {
        "ref": "John 16:33",
        "text": "These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world."
      },
      "big": "Jesus didn't promise His people an easy road. He promised the Comforter living in them, sorrow turned into joy, and peace in Him, because He has already overcome the world."
    }
  },
  {
    "id": "john-17",
    "type": "chapter",
    "book": "John",
    "ch": 17,
    "date": "2026-10-29",
    "title": "John 17",
    "sub": "Jesus prays for His own",
    "about": "On the night before the cross, Jesus prays for Himself, for His disciples, and for everyone who would ever believe.",
    "tags": [
      "Prayer",
      "Eternal life",
      "Security",
      "In the world",
      "Unity",
      "Glory"
    ],
    "url": "studies/john-17.html",
    "overview": {
      "where": "Jerusalem, before Jesus crosses the brook Cedron to the garden",
      "when": "The night before the cross, after the Last Supper",
      "people": [
        "jesus",
        "the-father",
        "disciples",
        "judas-iscariot"
      ],
      "places": [
        "heaven",
        "jerusalem"
      ],
      "story": [
        "Jesus lifts His eyes to heaven: “Father, the hour is come; glorify thy Son.” Eternal life is to know the only true God and Jesus Christ (1–3).",
        "He has finished the work the Father gave Him, and asks for the glory He had before the world was (4–5).",
        "He prays for His disciples: He kept them, none is lost but the son of perdition, and He asks the Father to keep them still (6–12).",
        "He doesn't ask that they be taken out of the world, but kept from the evil and sanctified by the word, then sent into the world (13–19).",
        "He prays for all who will believe through their word: that they may be one, so the world may believe, and be with Him where He is (20–26)."
      ],
      "key": {
        "ref": "John 17:3",
        "text": "And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent."
      },
      "big": "Hours before the cross, Jesus prayed for every believer who would ever live: that we'd know God, be kept safe, be set apart, be one, and be with Him forever. He still prays for us today."
    }
  },
  {
    "id": "john-18",
    "type": "chapter",
    "book": "John",
    "ch": 18,
    "date": "2026-10-29",
    "title": "John 18",
    "sub": "The King on trial",
    "about": "Jesus walks out to meet the men who came to arrest Him, Peter denies Him three times at the wrong fire, and Pilate asks, “What is truth?”",
    "tags": [
      "Who Jesus is",
      "His choice",
      "Failure",
      "His kingdom",
      "Truth",
      "In our place"
    ],
    "url": "studies/john-18.html",
    "overview": {
      "where": "A garden over the brook Cedron, the high priest's palace, then Pilate's hall of judgment in Jerusalem",
      "when": "The night after the last supper, through early the next morning, at Passover",
      "people": [
        "jesus",
        "disciples",
        "judas-iscariot",
        "simon-peter",
        "malchus",
        "annas",
        "caiaphas",
        "high-priest",
        "officers",
        "chief-priests",
        "pilate",
        "barabbas",
        "the-jews"
      ],
      "places": [
        "cedron",
        "garden",
        "jerusalem",
        "hall-of-judgment"
      ],
      "story": [
        "Judas brings soldiers and officers to the garden. Jesus steps out and says, “I am he,” and they fall to the ground (1–9).",
        "Peter cuts off Malchus's ear. Jesus tells him to put up his sword and drinks the cup His Father gave Him (10–11).",
        "Jesus is taken bound to Annas, then Caiaphas, and is struck for telling the truth (12–14, 19–24).",
        "Out by a fire of coals, Peter denies Him three times, and the cock crows (15–18, 25–27).",
        "Before Pilate, Jesus says, “My kingdom is not of this world.” Pilate asks, “What is truth?” and finds no fault in Him (28–38).",
        "Offered Jesus, the crowd chooses Barabbas, a robber, instead (39–40)."
      ],
      "key": {
        "ref": "John 18:37",
        "text": "Pilate therefore said unto him, Art thou a king then? Jesus answered, Thou sayest that I am a king. To this end was I born, and for this cause came I into the world, that I should bear witness unto the truth. Every one that is of the truth heareth my voice."
      },
      "big": "Jesus wasn't caught. He gave Himself up, a King whose kingdom runs on truth, and He took the place of the guilty. Even Peter's worst failure wasn't the end of his story."
    }
  },
  {
    "id": "john-19",
    "type": "chapter",
    "book": "John",
    "ch": 19,
    "date": "2026-10-29",
    "title": "John 19",
    "sub": "It is finished",
    "about": "Pilate finds no fault in Jesus and hands Him over anyway. Jesus is crucified at Golgotha, cries “It is finished,” and is laid in a garden tomb.",
    "tags": [
      "In our place",
      "Who's in charge",
      "God's word",
      "Family",
      "Finished",
      "Courage"
    ],
    "url": "studies/john-19.html",
    "overview": {
      "where": "Pilate's hall and Gabbatha in Jerusalem, then Golgotha and a garden tomb just outside the city",
      "when": "The preparation of the Passover, the day before a high sabbath",
      "people": [
        "jesus",
        "pilate",
        "soldiers",
        "chief-priests",
        "officers",
        "the-jews",
        "caesar",
        "mary",
        "mary-of-cleophas",
        "mary-magdalene",
        "beloved-disciple",
        "joseph-of-arimathaea",
        "nicodemus"
      ],
      "places": [
        "hall-of-judgment",
        "gabbatha",
        "golgotha",
        "jerusalem",
        "garden",
        "sepulchre"
      ],
      "story": [
        "Pilate has Jesus scourged. The soldiers crown Him with thorns, and Pilate brings Him out: “Behold the man!” (1–6).",
        "Pilate finds no fault in Him, but the crowd threatens, “Thou art not Caesar's friend,” and he hands Jesus over to be crucified (7–16).",
        "Jesus carries His cross to Golgotha and is crucified between two others under the title “The King of the Jews” (17–22).",
        "The soldiers cast lots for His coat, and from the cross Jesus gives His mother into the care of the disciple He loved (23–27).",
        "He says, “I thirst,” then “It is finished,” and gives up the ghost (28–30).",
        "His legs are not broken, His side is pierced, and Joseph and Nicodemus bury Him in a new tomb in a garden (31–42)."
      ],
      "key": {
        "ref": "John 19:30",
        "text": "When Jesus therefore had received the vinegar, he said, It is finished: and he bowed his head, and gave up the ghost."
      },
      "big": "The innocent Lamb of God died in our place, just as the Scriptures said. When He cried “It is finished,” the debt for our sin was paid in full."
    }
  },
  {
    "id": "john-20",
    "type": "chapter",
    "book": "John",
    "ch": 20,
    "date": "2026-10-29",
    "title": "John 20",
    "sub": "The empty tomb",
    "about": "Mary finds the stone rolled away, meets the risen Lord in the garden, and a week later Thomas falls at His feet: “My Lord and my God.”",
    "tags": [
      "Resurrection",
      "Your past",
      "Peace",
      "The Holy Spirit",
      "Doubt",
      "Believe"
    ],
    "url": "studies/john-20.html",
    "overview": {
      "where": "The tomb outside Jerusalem, then a locked room in the city",
      "when": "Sunday, the first day of the week, from before dawn until evening, and again eight days later",
      "people": [
        "jesus",
        "mary-magdalene",
        "simon-peter",
        "beloved-disciple",
        "angels",
        "disciples",
        "thomas",
        "the-father",
        "holy-spirit",
        "the-jews"
      ],
      "places": [
        "jerusalem",
        "sepulchre"
      ],
      "story": [
        "Before dawn Mary Magdalene finds the stone taken away. Peter and John run to the tomb, see the linen clothes lying and the napkin by itself, and John believes (1–10).",
        "Mary stays, weeping. Two angels speak to her, then Jesus calls her by name, “Mary,” and sends her to tell His brethren (11–18).",
        "That evening He stands in the midst of the frightened disciples behind shut doors: “Peace be unto you.” He shows His hands and side, sends them out, and breathes on them (19–23).",
        "Thomas wasn't there and won't believe without touching the nail prints. Eight days later Jesus invites him to, and Thomas says, “My Lord and my God” (24–29).",
        "John says why he wrote: that we might believe that Jesus is the Christ, the Son of God, and have life through His name (30–31)."
      ],
      "key": {
        "ref": "John 20:31",
        "text": "But these are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name."
      },
      "big": "Jesus is risen. He meets a grieving woman with a past, frightened men behind a locked door, and an honest doubter, and gives each one what they need: His voice, His peace, and Himself. This book was written so that we would believe and have life."
    }
  },
  {
    "id": "john-21",
    "type": "chapter",
    "book": "John",
    "ch": 21,
    "date": "2026-10-29",
    "title": "John 21",
    "sub": "Follow thou me",
    "about": "Breakfast on the shore. After a miraculous catch, Jesus asks Peter three times, “Lovest thou me?” and restores the man who denied Him three times.",
    "tags": [
      "Going back",
      "Grace",
      "Restoration",
      "Love",
      "Comparison",
      "The Word"
    ],
    "url": "studies/john-21.html",
    "overview": {
      "where": "The shore of the Sea of Tiberias (the Sea of Galilee)",
      "when": "Some days after the resurrection, the third time Jesus showed Himself to His disciples",
      "people": [
        "jesus",
        "simon-peter",
        "thomas",
        "nathanael",
        "sons-of-zebedee",
        "beloved-disciple",
        "disciples",
        "jona"
      ],
      "places": [
        "sea-of-galilee",
        "galilee",
        "cana"
      ],
      "story": [
        "Peter and six others go fishing and catch nothing all night. At dawn a man on the shore tells them to cast on the right side, and the net fills (1–6).",
        "John says, “It is the Lord.” Peter throws himself into the sea, and the others drag in the net: 153 great fish, and the net isn't broken (7–11).",
        "Jesus has a fire of coals with fish and bread ready. “Come and dine.” He serves them Himself (12–14).",
        "Three times He asks Peter, “Lovest thou me?” and three times gives him a charge: “Feed my sheep.” He tells Peter how he will die, and says, “Follow me” (15–19).",
        "Peter asks about John. “What is that to thee? follow thou me.” John closes: his testimony is true, and the world couldn't hold all the books (20–25)."
      ],
      "key": {
        "ref": "John 21:17",
        "text": "He saith unto him the third time, Simon, son of Jonas, lovest thou me? Peter was grieved because he said unto him the third time, Lovest thou me? And he said unto him, Lord, thou knowest all things; thou knowest that I love thee. Jesus saith unto him, Feed my sheep."
      },
      "big": "Failure isn't the end. Jesus meets the men who ran with breakfast, answers Peter's three denials with three questions, and hands him work to do. Then He says to every one of us, “Follow thou me.”"
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
  },
  {
    "id": "hosea-01",
    "type": "chapter",
    "book": "Hosea",
    "ch": 1,
    "date": "2026-10-29",
    "title": "Hosea 1",
    "sub": "A marriage that preached",
    "about": "God tells a prophet to marry a woman who will break his heart, so a whole nation can see what its sin has done to God, and how far His mercy reaches.",
    "tags": [
      "God's heart",
      "Sin",
      "God's word",
      "Salvation",
      "Mercy",
      "Hope"
    ],
    "url": "studies/hosea-01.html",
    "overview": {
      "where": "Israel, the northern kingdom, with its capital at Samaria",
      "when": "About 755 BC, in the last prosperous years of Jeroboam II, before Assyria carried the north into exile",
      "people": [
        "hosea",
        "beeri",
        "gomer",
        "diblaim",
        "lo-ruhamah",
        "lo-ammi",
        "jehu",
        "jeroboam-ii",
        "joash-king-of-israel",
        "uzziah",
        "jotham",
        "ahaz",
        "hezekiah"
      ],
      "places": [
        "israel",
        "judah",
        "jezreel"
      ],
      "story": [
        "The word of the LORD comes to Hosea in the days of Jeroboam II of Israel and four kings of Judah (1).",
        "God tells Hosea to marry “a wife of whoredoms,” because the land has gone after other gods. He marries Gomer (2–3).",
        "Their first son is named Jezreel: God will avenge the blood Jehu shed there and end Israel's kingdom (4–5).",
        "A daughter, Lo-ruhamah, “no mercy,” for Israel; but Judah will be saved by the LORD, not by bow or sword (6–7).",
        "A second son, Lo-ammi, “not my people” (8–9). Yet one day they will be called “the sons of the living God,” and Judah and Israel will be gathered under one head (10–11)."
      ],
      "key": {
        "ref": "Hosea 1:10",
        "text": "Yet the number of the children of Israel shall be as the sand of the sea, which cannot be measured nor numbered; and it shall come to pass, that in the place where it was said unto them, Ye are not my people, there it shall be said unto them, Ye are the sons of the living God."
      },
      "big": "Sin is unfaithfulness to a God who loves us like a husband. His judgment is real, and He keeps His word, but His last word is “Yet”: those who were “not my people” can be called the sons of the living God."
    }
  },
  {
    "id": "hosea-02",
    "type": "chapter",
    "book": "Hosea",
    "ch": 2,
    "date": "2026-10-29",
    "title": "Hosea 2",
    "sub": "A door of hope",
    "about": "God takes His unfaithful wife to court, strips away everything she trusted, and then leads her into the wilderness to speak to her heart.",
    "tags": [
      "Sin's lies",
      "God's provision",
      "Hedged in",
      "Hope",
      "God's love",
      "Belonging"
    ],
    "url": "studies/hosea-02.html",
    "overview": {
      "where": "Israel, the northern kingdom, pictured as Hosea's unfaithful wife",
      "when": "About 750 BC, before Assyria carried the north into exile",
      "people": [
        "lo-ammi",
        "lo-ruhamah",
        "baal"
      ],
      "places": [
        "wilderness",
        "valley-of-achor",
        "egypt",
        "jezreel"
      ],
      "story": [
        "The children are told to plead with their mother to put away her unfaithfulness before she is left bare and dry (1–5).",
        "She says her lovers give her bread and water. God hedges her way with thorns until she says, “I will go and return to my first husband” (5–7).",
        "She never knew it was God who gave her corn, wine and oil. He takes His gifts back and ends her feasts, because she forgot Him (8–13).",
        "“Therefore, behold, I will allure her.” In the wilderness He speaks to her heart and makes the valley of Achor a door of hope (14–15).",
        "She will call Him Ishi, not Baali. He betroths her for ever in faithfulness, and says to those who were not His people, “Thou art my people” (16–23)."
      ],
      "key": {
        "ref": "Hosea 2:15",
        "text": "And I will give her her vineyards from thence, and the valley of Achor for a door of hope: and she shall sing there, as in the days of her youth, and as in the day when she came up out of the land of Egypt."
      },
      "big": "Sin takes the credit for what God gave, then takes everything else. God's hedge of thorns is mercy that turns us toward home, and He meets us in the valley of trouble with a door of hope and a love that is for ever."
    }
  },
  {
    "id": "hosea-03",
    "type": "chapter",
    "book": "Hosea",
    "ch": 3,
    "date": "2026-10-29",
    "title": "Hosea 3",
    "sub": "Bought back",
    "about": "Hosea's wife has sold herself into the gutter. God tells him to go and get her, pay the price, and bring her home. That is how God loves.",
    "tags": [
      "God's love",
      "Redemption",
      "Sin's slavery",
      "New life",
      "Life without God",
      "The King"
    ],
    "url": "studies/hosea-03.html",
    "overview": {
      "where": "Israel, the northern kingdom",
      "when": "About 750 BC, before the Assyrian exile; looking ahead to “the latter days”",
      "people": [
        "hosea",
        "gomer",
        "david"
      ],
      "places": [
        "israel"
      ],
      "story": [
        "God tells Hosea, “Go yet, love a woman… an adulteress,” just as the LORD loves Israel while they look to other gods (1).",
        "Hosea buys her back for fifteen pieces of silver and a homer and a half of barley (2).",
        "She is to stay with him many days and be faithful, and he will be faithful to her (3).",
        "Israel will live many days without king or sacrifice, without idols too (4).",
        "Afterward they will return and seek the LORD and “David their king” in the latter days (5)."
      ],
      "key": {
        "ref": "Hosea 3:1",
        "text": "Then said the LORD unto me, Go yet, love a woman beloved of her friend, yet an adulteress, according to the love of the LORD toward the children of Israel, who look to other gods, and love flagons of wine."
      },
      "big": "Sin promises freedom and ends in slavery. God loves us while we are still running, and in Christ He paid the price to buy us back and bring us home."
    }
  },
  {
    "id": "hosea-04",
    "type": "chapter",
    "book": "Hosea",
    "ch": 4,
    "date": "2026-10-29",
    "title": "Hosea 4",
    "sub": "The LORD's case against Israel",
    "about": "Hosea moves from his own home to the courtroom. God brings charges against a nation that has forgotten Him, starting with the men who were supposed to teach it.",
    "tags": [
      "Knowing God",
      "Sin's spread",
      "Leaders",
      "Wine",
      "Backsliding",
      "Let alone"
    ],
    "url": "studies/hosea-04.html",
    "overview": {
      "where": "Israel, the northern kingdom, with a warning to Judah; the idol shrines at Gilgal and Bethel (Beth-aven)",
      "when": "About 750 BC, in Israel's last decades before Assyria",
      "people": [
        "priests",
        "ephraim-kingdom"
      ],
      "places": [
        "israel",
        "judah",
        "gilgal",
        "beth-aven"
      ],
      "story": [
        "The LORD has a controversy with the land: no truth, no mercy, no knowledge of God, only swearing, lying, killing, stealing and adultery (1–3).",
        "“My people are destroyed for lack of knowledge.” The priests rejected it and fed on the people's sin: “like people, like priest” (4–10).",
        "Whoredom and wine take away the heart. The people ask counsel of wooden idols and worship at the hilltop shrines (11–13).",
        "God holds the men to account for leading their families astray, and warns Judah not to follow Israel to Gilgal and Beth-aven (14–15).",
        "Israel is a backsliding heifer. “Ephraim is joined to idols: let him alone,” and a wind will sweep them away (16–19)."
      ],
      "key": {
        "ref": "Hosea 4:6",
        "text": "My people are destroyed for lack of knowledge: because thou hast rejected knowledge, I will also reject thee, that thou shalt be no priest to me: seeing thou hast forgotten the law of thy God, I will also forget thy children."
      },
      "big": "When people reject the knowledge of God, everything falls apart: homes, leaders, the land itself. Sin takes away the heart, and the worst judgment is to be left to it. But God still calls backsliders to return."
    }
  },
  {
    "id": "hosea-05",
    "type": "chapter",
    "book": "Hosea",
    "ch": 5,
    "date": "2026-10-29",
    "title": "Hosea 5",
    "sub": "Till they seek my face",
    "about": "God calls out Israel's priests and kings, sounds the alarm of war, and then steps back and waits for His people to come home.",
    "tags": [
      "God sees",
      "Bondage",
      "Empty religion",
      "The wrong cure",
      "Judgment",
      "Hope"
    ],
    "url": "studies/hosea-05.html",
    "overview": {
      "where": "Israel (Ephraim) and Judah, from Mizpah and Tabor to the border towns of Benjamin: Gibeah, Ramah and Beth-aven",
      "when": "About 734 BC, as Israel and Judah fought each other and Assyria moved in",
      "people": [
        "priests",
        "ephraim-kingdom",
        "jareb"
      ],
      "places": [
        "israel",
        "judah",
        "mizpah",
        "tabor",
        "benjamin",
        "gibeah",
        "ramah",
        "beth-aven",
        "assyria"
      ],
      "story": [
        "God calls out the priests, the people and the king's house: they have been a snare on Mizpah and a net on Tabor (1–2).",
        "“I know Ephraim.” The spirit of whoredoms has them, and they will not frame their doings to turn to God (3–5).",
        "They come with flocks and herds to seek the LORD, but He has withdrawn Himself from them (6–7).",
        "Sound the alarm in Gibeah, Ramah and Beth-aven. God will be to Ephraim as a moth and to Judah as rottenness (8–12).",
        "Sick and wounded, Ephraim goes to Assyria, who cannot heal. God will tear like a lion, then wait “till they acknowledge their offence, and seek my face” (13–15)."
      ],
      "key": {
        "ref": "Hosea 5:15",
        "text": "I will go and return to my place, till they acknowledge their offence, and seek my face: in their affliction they will seek me early."
      },
      "big": "Sin becomes a master, and no false cure can heal its wound. God's discipline is real and comes after many warnings, but its purpose is to bring His people home. He is waiting for us to own what we did and seek His face."
    }
  },
  {
    "id": "hosea-06",
    "type": "chapter",
    "book": "Hosea",
    "ch": 6,
    "date": "2026-10-29",
    "title": "Hosea 6",
    "sub": "Come, and let us return",
    "about": "A beautiful call to come back to the LORD, a goodness that burns off like morning fog, and the words Jesus would quote twice: “I desired mercy, and not sacrifice.”",
    "tags": [
      "Returning",
      "God's faithfulness",
      "Shallow repentance",
      "What God wants",
      "Broken trust",
      "Hope"
    ],
    "url": "studies/hosea-06.html",
    "overview": {
      "where": "Israel (Ephraim) and Judah, with Gilead east of the Jordan",
      "when": "About 735–730 BC, in the troubled last years before Samaria fell",
      "people": [
        "ephraim-kingdom",
        "priests"
      ],
      "places": [
        "israel",
        "judah",
        "gilead"
      ],
      "story": [
        "“Come, and let us return unto the LORD: for he hath torn, and he will heal us” (1–2).",
        "If we follow on to know the LORD, He will come as surely as the morning and the rain (3).",
        "But Israel's goodness is like a morning cloud and the early dew. It goes away (4–5).",
        "“For I desired mercy, and not sacrifice; and the knowledge of God more than burnt offerings” (6).",
        "They broke the covenant. Gilead is stained with blood, and the priests murder on the road like robbers. Yet God will one day return the captivity of His people (7–11)."
      ],
      "key": {
        "ref": "Hosea 6:6",
        "text": "For I desired mercy, and not sacrifice; and the knowledge of God more than burnt offerings."
      },
      "big": "God wants a real turning and a loyal heart, not ritual and feelings that burn off by noon. The hand that wounds is the hand that heals, and He comes as surely as sunrise to those who keep seeking Him."
    }
  },
  {
    "id": "hosea-07",
    "type": "chapter",
    "book": "Hosea",
    "ch": 7,
    "date": "2026-10-29",
    "title": "Hosea 7",
    "sub": "A cake not turned",
    "about": "Kings murdered one after another, a nation half-baked, a man going gray without noticing, and a God who says, “I have redeemed them.”",
    "tags": [
      "God sees",
      "Desire",
      "Half-hearted",
      "Unnoticed loss",
      "Real prayer",
      "Turning"
    ],
    "url": "studies/hosea-07.html",
    "overview": {
      "where": "Samaria and the royal court of Israel, caught between Egypt and Assyria",
      "when": "About 735–725 BC, when four of Israel's kings were murdered in about twenty years",
      "people": [
        "ephraim-kingdom"
      ],
      "places": [
        "israel",
        "samaria",
        "egypt",
        "assyria"
      ],
      "story": [
        "When God would have healed Israel, their sin came to light. They forget that He remembers it all (1–2).",
        "The princes are hot as a baker's oven, plotting all night. They make the king sick with wine, and their kings fall one by one. None calls on God (3–7).",
        "Ephraim is a cake not turned. Strangers devour his strength, and gray hairs come, yet he knows it not (8–10).",
        "Like a silly dove, Ephraim calls to Egypt and runs to Assyria, and God spreads His net (11–12).",
        "God redeemed them, but they howl on their beds instead of crying to Him with their heart. They return, but not to the most High, like a deceitful bow (13–16)."
      ],
      "key": {
        "ref": "Hosea 7:9",
        "text": "Strangers have devoured his strength, and he knoweth it not: yea, gray hairs are here and there upon him, yet he knoweth not."
      },
      "big": "Sin drains a man quietly while he tells himself he's fine, and half-hearted faith ruins him. Swapping one master for another isn't turning. Real turning means coming with the whole heart to the God who redeemed us."
    }
  },
  {
    "id": "hosea-08",
    "type": "chapter",
    "book": "Hosea",
    "ch": 8,
    "date": "2026-10-29",
    "title": "Hosea 8",
    "sub": "Sown the wind",
    "about": "Kings God never chose, a golden calf a craftsman made, love bought with silver, and a harvest far bigger than the seed.",
    "tags": [
      "Knowing God",
      "Idols",
      "Sowing and reaping",
      "Bought love",
      "God's word",
      "Forgetting God"
    ],
    "url": "studies/hosea-08.html",
    "overview": {
      "where": "Samaria and the northern kingdom of Israel, with Assyria and Egypt looming, and a word to Judah",
      "when": "About 735–725 BC, as Assyria closed in on Samaria",
      "people": [
        "ephraim-kingdom"
      ],
      "places": [
        "israel",
        "samaria",
        "assyria",
        "egypt",
        "judah"
      ],
      "story": [
        "Blow the trumpet: an eagle is coming. Israel cries, “My God, we know thee,” but has cast off the good (1–3).",
        "They made kings without God and a calf of silver and gold. “The workman made it; therefore it is not God” (4–6).",
        "“They have sown the wind, and they shall reap the whirlwind.” Ephraim went to Assyria and hired lovers (7–10).",
        "Many altars became altars to sin, and God's great law was counted a strange thing (11–12).",
        "Israel forgot his Maker and built palaces, and Judah built fenced cities, but fire will come (13–14)."
      ],
      "key": {
        "ref": "Hosea 8:7",
        "text": "For they have sown the wind, and they shall reap the whirlwind: it hath no stalk: the bud shall yield no meal: if so be it yield, the strangers shall swallow it up."
      },
      "big": "A god a man makes can't save him, and love bought from the world never lasts. We reap what we sow, and more. So remember your Maker and start sowing to the Spirit today."
    }
  },
  {
    "id": "hosea-09",
    "type": "chapter",
    "book": "Hosea",
    "ch": 9,
    "date": "2026-10-29",
    "title": "Hosea 9",
    "sub": "Rejoice not",
    "about": "The party is over. Israel will be carried off, the feasts will stop, and the people named “fruitful” will bear no fruit. Yet God remembers when He first found them, like grapes in the wilderness.",
    "tags": [
      "False joy",
      "Exile",
      "God's messengers",
      "First love",
      "Fruit",
      "Hope"
    ],
    "url": "studies/hosea-09.html",
    "overview": {
      "where": "Israel at harvest time, with exile ahead in Assyria and Egypt; memories of Gibeah, Baal-peor and Gilgal",
      "when": "About 730–725 BC, shortly before Samaria fell to Assyria (about 722 BC)",
      "people": [
        "ephraim-kingdom",
        "baal"
      ],
      "places": [
        "israel",
        "egypt",
        "assyria",
        "memphis",
        "gibeah",
        "baal-peor",
        "tyre-and-zidon",
        "gilgal"
      ],
      "story": [
        "“Rejoice not, O Israel.” They thanked Baal for the harvest, and the floor and the winepress will fail them (1–2).",
        "They will leave the LORD's land: Ephraim to Egypt and to Assyria, with no offerings and no feast days. Memphis shall bury them (3–6).",
        "The days of visitation have come. Israel calls the prophet a fool and is as corrupt as in the days of Gibeah (7–9).",
        "God found Israel like grapes in the wilderness, but they went to Baal-peor. Their glory will fly away like a bird (10–14).",
        "All their wickedness is in Gilgal. Ephraim's root is dried up, and they will be wanderers among the nations (15–17)."
      ],
      "key": {
        "ref": "Hosea 9:10",
        "text": "I found Israel like grapes in the wilderness; I saw your fathers as the firstripe in the fig tree at her first time: but they went to Baal-peor, and separated themselves unto that shame; and their abominations were according as they loved."
      },
      "big": "A party that leaves God out always runs dry, and a people cut off from Him bears no fruit. Judgment on Israel was real. But God's first thought of His people was delight, and Hosea's book ends with “I will love them freely.”"
    }
  },
  {
    "id": "hosea-10",
    "type": "chapter",
    "book": "Hosea",
    "ch": 10,
    "date": "2026-10-29",
    "title": "Hosea 10",
    "sub": "Break up your fallow ground",
    "about": "The richer Israel got, the more idols it built. Now its golden calf will be hauled off to Assyria. But God still says: it is time to seek the LORD.",
    "tags": [
      "A divided heart",
      "False trust",
      "Sowing and reaping",
      "Seeking God",
      "God's discipline"
    ],
    "url": "studies/hosea-10.html",
    "overview": {
      "where": "The northern kingdom of Israel (Ephraim): Samaria, Bethel (Beth-aven), and its farmland",
      "when": "About 730–722 BC, in Israel's last years before Assyria took Samaria",
      "people": [
        "the-lord",
        "jacob",
        "jareb",
        "shalman"
      ],
      "places": [
        "israel",
        "ephraim-kingdom",
        "samaria",
        "beth-aven",
        "bethel",
        "assyria",
        "gibeah",
        "beth-arbel",
        "judah"
      ],
      "story": [
        "Israel is an empty vine: the more God blessed it, the more altars and images it built. Their heart is divided (1–2).",
        "Kings come and go, oaths are broken, and judgment springs up like hemlock in a plowed field (3–4).",
        "The golden calf of Beth-aven will be carried to Assyria as a gift for king Jareb. Men will beg the hills, “Cover us” (5–8).",
        "Israel has sinned since the days of Gibeah, and God will chastise them. Ephraim, the heifer who loved the easy work, will be put to the plow (9–11).",
        "“Sow to yourselves in righteousness, reap in mercy; break up your fallow ground: for it is time to seek the LORD” (12).",
        "They plowed wickedness and reaped iniquity. War is coming, and Israel's king will be cut off (13–15)."
      ],
      "key": {
        "ref": "Hosea 10:12",
        "text": "Sow to yourselves in righteousness, reap in mercy; break up your fallow ground: for it is time to seek the LORD, till he come and rain righteousness upon you."
      },
      "big": "What we sow comes up. A heart split between God and idols ends up empty, but even a field gone hard can be broken open. It is time to seek the LORD, and He sends mercy and righteousness like rain."
    }
  },
  {
    "id": "hosea-11",
    "type": "chapter",
    "book": "Hosea",
    "ch": 11,
    "date": "2026-10-29",
    "title": "Hosea 11",
    "sub": "How shall I give thee up?",
    "about": "God remembers Israel as a little boy He taught to walk. The boy ran off. But the Father's heart will not let him go.",
    "tags": [
      "A Father's love",
      "Christ in Hosea",
      "Backsliding",
      "Mercy",
      "Coming home"
    ],
    "url": "studies/hosea-11.html",
    "overview": {
      "where": "The northern kingdom of Israel (Ephraim), with Egypt and Assyria on either side",
      "when": "About 730–722 BC, before Samaria fell to Assyria; looking back to the exodus from Egypt",
      "people": [
        "the-lord",
        "baal"
      ],
      "places": [
        "israel",
        "ephraim-kingdom",
        "egypt",
        "assyria",
        "admah-and-zeboim",
        "judah"
      ],
      "story": [
        "“When Israel was a child, then I loved him, and called my son out of Egypt.” But the more God called, the further they went, to the Baals (1–2).",
        "God taught Ephraim to walk, held them by the arms, healed them, and drew them with cords of love (3–4).",
        "They refused to return, so Assyria will rule them. God's people are bent to backsliding (5–7).",
        "“How shall I give thee up, Ephraim?” God will not destroy them like Admah and Zeboim: “for I am God, and not man” (8–9).",
        "The LORD will roar like a lion, and His children will come trembling home from Egypt and Assyria (10–11).",
        "Ephraim surrounds God with lies, while Judah still rules with God (12)."
      ],
      "key": {
        "ref": "Hosea 11:8",
        "text": "How shall I give thee up, Ephraim? how shall I deliver thee, Israel? how shall I make thee as Admah? how shall I set thee as Zeboim? mine heart is turned within me, my repentings are kindled together."
      },
      "big": "God loves like a father. Israel kept running, and judgment was real, but His mercy is greater because He is God and not man. Matthew shows that Hosea 11:1 is fulfilled in Jesus, the Son who walked Israel's road without failing."
    }
  },
  {
    "id": "hosea-12",
    "type": "chapter",
    "book": "Hosea",
    "ch": 12,
    "date": "2026-10-29",
    "title": "Hosea 12",
    "sub": "Turn thou to thy God",
    "about": "Ephraim chases the wind and cheats on the scales. God points them back to their father Jacob: a schemer who wept, held on, and came out changed.",
    "tags": [
      "Chasing wind",
      "Jacob's story",
      "Turning back",
      "Honest dealing",
      "God speaks"
    ],
    "url": "studies/hosea-12.html",
    "overview": {
      "where": "The northern kingdom of Israel (Ephraim), with a look back at Jacob's life at Bethel, in Syria, and at Israel's exodus from Egypt",
      "when": "About 730–722 BC, before Samaria fell to Assyria",
      "people": [
        "the-lord",
        "jacob"
      ],
      "places": [
        "ephraim-kingdom",
        "judah",
        "assyria",
        "egypt",
        "bethel",
        "gilead",
        "gilgal",
        "syria"
      ],
      "story": [
        "Ephraim feeds on wind, making a covenant with Assyria while sending oil to Egypt. The LORD has a case against Judah too (1–2).",
        "Remember Jacob: he grabbed his brother's heel, wrestled with the angel, wept, and begged for a blessing; God met him at Bethel (3–5).",
        "“Therefore turn thou to thy God: keep mercy and judgment, and wait on thy God continually” (6).",
        "Ephraim cheats with false balances and says, “I am become rich.” God will put them back in tents, as in the wilderness (7–9).",
        "God spoke by the prophets, but Gilead and Gilgal are full of idols. Jacob kept sheep for a wife; by a prophet God brought Israel out of Egypt (10–13).",
        "Ephraim has provoked God bitterly, and its guilt will come back on it (14)."
      ],
      "key": {
        "ref": "Hosea 12:6",
        "text": "Therefore turn thou to thy God: keep mercy and judgment, and wait on thy God continually."
      },
      "big": "Schemes and double deals are wind: they never fill a man. Jacob was changed when he held on to God and asked for a blessing. God asks His people to turn, deal fairly, and keep waiting on Him."
    }
  },
  {
    "id": "hosea-13",
    "type": "chapter",
    "book": "Hosea",
    "ch": 13,
    "date": "2026-10-29",
    "title": "Hosea 13",
    "sub": "O death, I will be thy plagues",
    "about": "Israel forgot the God who fed them in the desert. Judgment is coming like a lion. And right in the middle of it, God makes a promise bigger than death.",
    "tags": [
      "Forgetting God",
      "Idols",
      "Our help",
      "God's patience",
      "Victory over death"
    ],
    "url": "studies/hosea-13.html",
    "overview": {
      "where": "The northern kingdom of Israel (Ephraim) and its capital, Samaria",
      "when": "About 725–722 BC, just before Assyria took Samaria",
      "people": [
        "the-lord",
        "baal"
      ],
      "places": [
        "ephraim-kingdom",
        "israel",
        "egypt",
        "wilderness",
        "samaria"
      ],
      "story": [
        "Ephraim was once respected, but turned to Baal and died. Men melt down silver into idols and kiss the calves (1–2).",
        "So they will pass away like morning cloud, early dew, chaff, and smoke (3).",
        "God fed them in the wilderness, but when they were filled, they grew proud and forgot Him. There is no saviour beside Him (4–6).",
        "Now He will meet them like a lion, a leopard, and a bear robbed of her cubs (7–8).",
        "“O Israel, thou hast destroyed thyself; but in me is thine help.” Their kings could not save them, and their sin is stored up (9–13).",
        "“I will ransom them from the power of the grave … O death, I will be thy plagues.” But Samaria will fall to the sword (14–16)."
      ],
      "key": {
        "ref": "Hosea 13:9",
        "text": "O Israel, thou hast destroyed thyself; but in me is thine help."
      },
      "big": "Full men forget God, and idols always fail. Israel destroyed itself, yet God was still its help. In the darkest chapter God promises to ransom His people from death, and Paul shows that Jesus kept that promise when He rose (1 Corinthians 15:55)."
    }
  },
  {
    "id": "hosea-14",
    "type": "chapter",
    "book": "Hosea",
    "ch": 14,
    "date": "2026-10-29",
    "title": "Hosea 14",
    "sub": "I will heal their backsliding",
    "about": "Hosea's last chapter is an invitation: come home, bring honest words instead of offerings, and find a God who loves freely.",
    "tags": [
      "Returning",
      "Confession",
      "Free love",
      "New growth",
      "Wisdom"
    ],
    "url": "studies/hosea-14.html",
    "overview": {
      "where": "The northern kingdom of Israel (Ephraim), pictured as a garden growing again like Lebanon",
      "when": "About 725–722 BC, Hosea's closing call before the fall of Samaria",
      "people": [
        "the-lord"
      ],
      "places": [
        "israel",
        "ephraim-kingdom",
        "assyria",
        "lebanon"
      ],
      "story": [
        "“O Israel, return unto the LORD thy God.” God gives them the words: “Take away all iniquity, and receive us graciously” (1–2).",
        "They will no longer trust Assyria, horses, or idols: “in thee the fatherless findeth mercy” (3).",
        "“I will heal their backsliding, I will love them freely” (4).",
        "God will be as the dew. Israel will grow like the lily, with roots like Lebanon, and others will rest in its shade (5–7).",
        "Ephraim says, “What have I to do any more with idols?” God answers, “From me is thy fruit found” (8).",
        "Who is wise? The ways of the LORD are right: the just walk in them, and transgressors fall (9)."
      ],
      "key": {
        "ref": "Hosea 14:4",
        "text": "I will heal their backsliding, I will love them freely: for mine anger is turned away from him."
      },
      "big": "However far a man has fallen, the way back is the same: return to the LORD with honest words. God heals backsliding and loves freely, and the life He grows lasts. The God of Hosea goes after His people and brings them home."
    }
  },
  {
    "id": "joel-01",
    "type": "chapter",
    "book": "Joel",
    "ch": 1,
    "date": "2026-10-29",
    "title": "Joel 1",
    "sub": "When the locusts came",
    "about": "A plague strips Judah bare, and a prophet calls the whole nation to stop, weep, and cry out to the LORD.",
    "tags": [
      "Telling the story",
      "Wake-up calls",
      "Joy",
      "Humility",
      "The day of the LORD",
      "Prayer"
    ],
    "url": "studies/joel-01.html",
    "overview": {
      "where": "Judah and Jerusalem, the southern kingdom, with its fields and vineyards stripped bare",
      "when": "Uncertain: about 835 BC in one view, or after the exile, about 500–400 BC, in another",
      "people": [
        "joel",
        "pethuel",
        "the-lord",
        "priests",
        "elders"
      ],
      "places": [
        "judah",
        "jerusalem",
        "wilderness"
      ],
      "story": [
        "The word of the LORD comes to Joel. Nothing like this has happened before: tell your children, and theirs (1–3).",
        "Wave after wave of locusts eats everything. The drunkards wake to find the wine cut off, and the vines and fig trees are stripped white (4–7).",
        "The grain, wine, and oil are gone, so even the offerings at the house of the LORD stop. Joy withers away (8–12).",
        "Joel calls the priests to put on sackcloth, set apart a fast, gather everyone, and cry to the LORD, for the day of the LORD is at hand (13–18).",
        "With the pastures burned and the rivers dry, Joel prays: “O LORD, to thee will I cry” (19–20)."
      ],
      "key": {
        "ref": "Joel 1:19",
        "text": "O LORD, to thee will I cry: for the fire hath devoured the pastures of the wilderness, and the flame hath burned all the trees of the field."
      },
      "big": "God sometimes lets what we lean on be stripped away to wake us up. A disaster can be a warning, and the right answer is to get low before God, together, and cry out to Him."
    }
  },
  {
    "id": "joel-02",
    "type": "chapter",
    "book": "Joel",
    "ch": 2,
    "date": "2026-10-29",
    "title": "Joel 2",
    "sub": "I will restore",
    "about": "The locusts march like an army, God calls His people to turn, and He promises to give back the years the locust ate and to pour out His Spirit.",
    "tags": [
      "God's warnings",
      "Repentance",
      "God's character",
      "Restoration",
      "The Holy Spirit",
      "Salvation"
    ],
    "url": "studies/joel-02.html",
    "overview": {
      "where": "Zion, the temple hill in Jerusalem, and the land of Judah",
      "when": "Right after the locust plague of Joel 1; the date of Joel is uncertain",
      "people": [
        "joel",
        "the-lord",
        "priests",
        "elders",
        "holy-spirit"
      ],
      "places": [
        "sion",
        "jerusalem",
        "israel"
      ],
      "story": [
        "Blow the trumpet in Zion: the locusts come like a disciplined army, and the LORD leads it. “Who can abide it?” (1–11).",
        "“Therefore also now” turn to the LORD with all your heart. Rend your heart, not your garments, for He is gracious and merciful (12–14).",
        "Gather everyone, from elders to babies to newlyweds, and let the priests weep and pray, “Spare thy people” (15–17).",
        "The LORD pities His people, drives off the northern army, sends the rain, and promises: “I will restore to you the years that the locust hath eaten” (18–27).",
        "Afterward He will pour out His Spirit on all flesh, and whosoever calls on the name of the LORD will be delivered. Peter quotes it at Pentecost (28–32)."
      ],
      "key": {
        "ref": "Joel 2:25",
        "text": "And I will restore to you the years that the locust hath eaten, the cankerworm, and the caterpiller, and the palmerworm, my great army which I sent among you."
      },
      "big": "It isn't too late to turn. God is gracious and slow to anger, He restores what was lost, and He gives His Spirit to everyone who calls on the name of the Lord."
    }
  },
  {
    "id": "joel-03",
    "type": "chapter",
    "book": "Joel",
    "ch": 3,
    "date": "2026-10-29",
    "title": "Joel 3",
    "sub": "The valley of decision",
    "about": "God calls the nations to account for how they treated His people, and the book ends with a fountain, and the LORD at home in Zion.",
    "tags": [
      "God's justice",
      "Payback",
      "God's patience",
      "The day of the LORD",
      "Hope",
      "God's presence"
    ],
    "url": "studies/joel-03.html",
    "overview": {
      "where": "The valley of Jehoshaphat, Tyre and Zidon, the Philistine coast, and Jerusalem",
      "when": "The future day of the LORD; the date of Joel is uncertain",
      "people": [
        "the-lord",
        "heathen",
        "grecians",
        "sabeans"
      ],
      "places": [
        "valley-of-jehoshaphat",
        "tyre-and-zidon",
        "palestine",
        "valley-of-decision",
        "sion",
        "jerusalem",
        "judah",
        "valley-of-shittim",
        "egypt",
        "edom"
      ],
      "story": [
        "God will bring His people home and gather the nations in the valley of Jehoshaphat, for they scattered His people and sold boys and girls for a harlot and a drink (1–3).",
        "Tyre, Zidon, and the Philistines sold Judah's children to the Greeks. God will raise His people up and turn their payback on their own heads (4–8).",
        "The nations are dared to beat their plowshares into swords and come. The harvest is ripe, and multitudes stand in the valley of decision (9–15).",
        "The LORD roars from Zion and heaven and earth shake, but He is the hope of His people (16–17).",
        "The hills drip with new wine, a fountain flows from the house of the LORD, Judah dwells for ever, “for the LORD dwelleth in Zion” (18–21)."
      ],
      "key": {
        "ref": "Joel 3:16",
        "text": "The LORD also shall roar out of Zion, and utter his voice from Jerusalem; and the heavens and the earth shall shake: but the LORD will be the hope of his people, and the strength of the children of Israel."
      },
      "big": "God sees every wrong done to His people and will settle it Himself. His patience is long, but His verdict is coming, and those who trust Him are safe. The story ends with God living among His people."
    }
  },
  {
    "id": "amos-01",
    "type": "chapter",
    "book": "Amos",
    "ch": 1,
    "date": "2026-10-29",
    "title": "Amos 1",
    "sub": "The lion roars",
    "about": "A herdman from the hills of Judah walks north with a message from God, and starts with the neighbors everyone already hates.",
    "tags": [
      "God's call",
      "God's patience",
      "God's justice",
      "Human worth",
      "Resentment"
    ],
    "overview": {
      "where": "Preached at Bethel in Israel, the northern kingdom, by a man from Tekoa in Judah; the oracles range over the nations around Israel",
      "when": "About 760 BC, before the exile, in the days of Uzziah of Judah and Jeroboam II of Israel, two years before the earthquake",
      "people": [
        "amos",
        "uzziah",
        "jeroboam-ii",
        "joash-king-of-israel",
        "hazael",
        "ben-hadad",
        "philistines",
        "the-lord"
      ],
      "places": [
        "tekoa",
        "israel",
        "sion",
        "carmel",
        "damascus",
        "gilead",
        "kir",
        "gaza",
        "tyre-and-zidon",
        "edom",
        "ammon",
        "rabbah"
      ],
      "story": [
        "Amos, a herdman from Tekoa, sees God's word for Israel two years before the earthquake: the LORD will roar from Zion (1–2).",
        "“For three transgressions, and for four”: Damascus, capital of Syria, will burn for threshing Gilead with iron, and its people will go captive to Kir (3–5).",
        "Gaza and the Philistine cities sold whole towns to Edom as slaves; Tyre did the same and broke its brotherly covenant (6–10).",
        "Edom chased his brother Israel with the sword and kept his anger for ever; fire will fall on Teman and Bozrah (11–12).",
        "Ammon cut open pregnant women in Gilead to gain land; Rabbah will burn and its king go into captivity (13–15)."
      ],
      "key": {
        "ref": "Amos 1:2",
        "text": "And he said, The LORD will roar from Zion, and utter his voice from Jerusalem; and the habitations of the shepherds shall mourn, and the top of Carmel shall wither."
      },
      "big": "God is patient, but He is not silent. He sees every cruelty, even among nations that never had His law, and He calls ordinary men to speak for Him."
    },
    "url": "studies/amos-01.html"
  },
  {
    "id": "amos-02",
    "type": "chapter",
    "book": "Amos",
    "ch": 2,
    "date": "2026-10-29",
    "title": "Amos 2",
    "sub": "The circle closes",
    "about": "Moab, then Judah, and then the crowd at Bethel hears its own name. The longest charge sheet is for God's own people.",
    "tags": [
      "God's word",
      "Justice",
      "God's grace",
      "Temptation",
      "Self-reliance"
    ],
    "overview": {
      "where": "Bethel in Israel; the oracles name Moab, Judah, and finally Israel",
      "when": "About 760 BC, before the exile, while Israel was rich under Jeroboam II",
      "people": [
        "amos",
        "nazarites",
        "amorites",
        "the-lord"
      ],
      "places": [
        "moab",
        "kirioth",
        "edom",
        "judah",
        "jerusalem",
        "israel",
        "egypt",
        "wilderness"
      ],
      "story": [
        "Moab burned the bones of Edom's king to lime; fire will fall on Kirioth (1–3).",
        "Judah despised the law of the LORD and followed the lies their fathers walked after; fire will devour Jerusalem's palaces (4–5).",
        "Then Israel: they sold the righteous for silver and the poor for a pair of shoes, used a servant girl, and lounged at the altar on poor men's coats (6–8).",
        "God reminds them He destroyed the Amorite, brought them out of Egypt, and raised up prophets and Nazarites; but they gave the Nazarites wine and told the prophets, “Prophesy not” (9–12).",
        "Their sin weighs on God like an overloaded cart. In that day not even the swift, the strong, or the brave will escape (13–16)."
      ],
      "key": {
        "ref": "Amos 2:6",
        "text": "Thus saith the LORD; For three transgressions of Israel, and for four, I will not turn away the punishment thereof; because they sold the righteous for silver, and the poor for a pair of shoes;"
      },
      "big": "It's easy to cheer when God judges other people's sins. God's word always comes around to us, and the more of it we've been given, the more He expects."
    },
    "url": "studies/amos-02.html"
  },
  {
    "id": "amos-03",
    "type": "chapter",
    "book": "Amos",
    "ch": 3,
    "date": "2026-10-29",
    "title": "Amos 3",
    "sub": "The lion hath roared",
    "about": "Why God is speaking, why His own people are on trial, and why He always warns before He acts.",
    "tags": [
      "Privilege",
      "Walking with God",
      "God's warnings",
      "Hidden wealth",
      "The remnant",
      "False refuge"
    ],
    "overview": {
      "where": "Bethel and Samaria, in Israel, the northern kingdom",
      "when": "About 760 BC, before the exile, some forty years before Assyria took Samaria",
      "people": [
        "amos",
        "the-lord",
        "jacob"
      ],
      "places": [
        "israel",
        "egypt",
        "ashdod",
        "samaria",
        "damascus",
        "bethel"
      ],
      "story": [
        "God speaks to the family He brought out of Egypt: “You only have I known … therefore I will punish you” (1–2).",
        "A string of questions: two walking together, a lion's roar, a bird in a snare, a trumpet in the city. Nothing happens without a cause (3–6).",
        "God reveals His plans to His prophets first. The lion has roared; who can keep from prophesying? (7–8).",
        "Ashdod and Egypt are called to the hills of Samaria to see the violence and robbery stored in its palaces (9–10).",
        "An enemy will surround the land. Like a shepherd pulling two legs or a piece of an ear from a lion's mouth, only scraps will be rescued (11–12).",
        "God will cut off the horns of Bethel's altar and tear down the winter houses, summer houses, and houses of ivory (13–15)."
      ],
      "key": {
        "ref": "Amos 3:2",
        "text": "You only have I known of all the families of the earth: therefore I will punish you for all your iniquities."
      },
      "big": "Being close to God is a privilege, not a pass. He warns long and plainly before He judges, and only He is a safe refuge."
    },
    "url": "studies/amos-03.html"
  },
  {
    "id": "amos-04",
    "type": "chapter",
    "book": "Amos",
    "ch": 4,
    "date": "2026-10-29",
    "title": "Amos 4",
    "sub": "Prepare to meet thy God",
    "about": "Five times God tried to get Israel's attention. Five times He had to say, “Yet have ye not returned unto me.”",
    "tags": [
      "Comfort",
      "Empty religion",
      "Hard times",
      "Repentance",
      "Rescue",
      "Meeting God"
    ],
    "overview": {
      "where": "Samaria, and the shrines at Bethel and Gilgal, in Israel",
      "when": "About 760 BC, before the exile, in Israel's boom years under Jeroboam II",
      "people": [
        "amos",
        "the-lord"
      ],
      "places": [
        "bashan",
        "samaria",
        "bethel",
        "gilgal",
        "egypt",
        "sodom-and-gomorrah",
        "israel"
      ],
      "story": [
        "Amos calls the rich women of Samaria “kine of Bashan”: they crush the poor and call for drinks. God swears they will be led away with hooks (1–3).",
        "“Come to Bethel, and transgress”: their busy worship, tithes, and announced offerings please themselves, not God (4–5).",
        "God sent famine and drought, rain on one city and not the next: “yet have ye not returned unto me” (6–8).",
        "Blight, locusts, plague, war, and cities overthrown like Sodom; they were a firebrand plucked out of the burning, and still did not return (9–11).",
        "“Prepare to meet thy God, O Israel”: the God who forms the mountains and creates the wind, the LORD, the God of hosts (12–13)."
      ],
      "key": {
        "ref": "Amos 4:12",
        "text": "Therefore thus will I do unto thee, O Israel: and because I will do this unto thee, prepare to meet thy God, O Israel."
      },
      "big": "God uses hard things to call us home, not to destroy us. Every man will meet God; the way to meet Him in peace is to return to Him now, through Christ."
    },
    "url": "studies/amos-04.html"
  },
  {
    "id": "amos-05",
    "type": "chapter",
    "book": "Amos",
    "ch": 5,
    "date": "2026-10-29",
    "title": "Amos 5",
    "sub": "Seek me, and ye shall live",
    "about": "A funeral song for a nation that's still walking around, a call to seek God and live, and a cry for justice to roll like a river.",
    "tags": [
      "Repentance",
      "Who God is",
      "Justice",
      "God's mercy",
      "The day of the LORD",
      "Real worship"
    ],
    "url": "studies/amos-05.html",
    "overview": {
      "where": "Spoken to the northern kingdom of Israel, likely at Bethel",
      "when": "About 760 BC, under Jeroboam II, about forty years before Assyria carried Israel away",
      "people": [
        "amos"
      ],
      "places": [
        "israel",
        "bethel",
        "gilgal",
        "beer-sheba",
        "damascus",
        "wilderness"
      ],
      "story": [
        "Amos sings a funeral song for Israel: a town that sends out a thousand men will have a hundred left (1–3).",
        "“Seek ye me, and ye shall live”: not the famous shrines at Bethel, Gilgal, and Beer-sheba, but the God who made the seven stars and Orion (4–9).",
        "Israel's courts hate the truth, take bribes, and trample the poor. They will not live in the stone houses they built. “Hate the evil, and love the good” (10–15).",
        "Wailing will fill the streets, because God will pass through them (16–17).",
        "The day of the LORD that they long for will be darkness, not light (18–20).",
        "God refuses their feasts and songs: “let judgment run down as waters.” Israel will go into captivity beyond Damascus (21–27)."
      ],
      "key": {
        "ref": "Amos 5:4",
        "text": "For thus saith the LORD unto the house of Israel, Seek ye me, and ye shall live:"
      },
      "big": "God's judgment was coming, but His first word after the funeral song was “live.” He wants us to seek Him, not religious places or rituals, and to let right living flow like a stream that never runs dry."
    }
  },
  {
    "id": "amos-06",
    "type": "chapter",
    "book": "Amos",
    "ch": 6,
    "date": "2026-10-29",
    "title": "Amos 6",
    "sub": "At ease in Zion",
    "about": "Rich men on ivory couches, with the best food, music, and drink, and not one of them grieving for a nation that's coming apart.",
    "tags": [
      "Comfort",
      "Warning",
      "Compassion",
      "Pride",
      "Strength"
    ],
    "url": "studies/amos-06.html",
    "overview": {
      "where": "Spoken to the leaders of Samaria, and of Zion too",
      "when": "About 760 BC, under Jeroboam II, about forty years before Assyria carried Israel away",
      "people": [
        "amos",
        "jacob",
        "philistines"
      ],
      "places": [
        "sion",
        "samaria",
        "calneh",
        "hamath",
        "gath",
        "israel"
      ],
      "story": [
        "Woe to the comfortable leaders in Zion and Samaria. Look at Calneh, Hamath, and Gath: are you better than they were? (1–2).",
        "They push the evil day away while they lounge on ivory beds, feast, sing, drink wine by the bowlful, and feel nothing for the ruin of their people (3–6).",
        "They will go captive first, and the party will end (7).",
        "God swears by Himself that He hates Israel's pride. When the city falls, the survivors will be afraid to say His name (8–11).",
        "They have turned justice into poison and bragged about their own strength. God will raise up a nation against them (12–14)."
      ],
      "key": {
        "ref": "Amos 6:1",
        "text": "Woe to them that are at ease in Zion, and trust in the mountain of Samaria, which are named chief of the nations, to whom the house of Israel came!"
      },
      "big": "Comfort can make a man careless, numb, and proud. God wants men who stay awake, who still grieve for people who are hurting, and who know their strength comes from Him."
    }
  },
  {
    "id": "amos-07",
    "type": "chapter",
    "book": "Amos",
    "ch": 7,
    "date": "2026-10-29",
    "title": "Amos 7",
    "sub": "A plumbline",
    "about": "Twice Amos prays and God holds back. The third time God holds up a plumbline. Then a priest tells the farmer-prophet to go home.",
    "tags": [
      "Prayer",
      "God's standard",
      "God's patience",
      "Calling",
      "Courage"
    ],
    "url": "studies/amos-07.html",
    "overview": {
      "where": "Bethel, the king's shrine in the northern kingdom of Israel",
      "when": "About 760 BC, under Jeroboam II, about forty years before Assyria carried Israel away",
      "people": [
        "amos",
        "amaziah",
        "jeroboam-ii",
        "isaac",
        "jacob"
      ],
      "places": [
        "bethel",
        "israel",
        "judah"
      ],
      "story": [
        "God shows Amos locusts eating the land. Amos prays, “forgive,” and the LORD holds back (1–3).",
        "God shows him a fire eating up the deep. Amos prays, “cease,” and the LORD holds back again (4–6).",
        "God stands on a wall with a plumbline: Israel is out of true, and He will not pass them by any more (7–9).",
        "Amaziah, the priest of Bethel, reports Amos to King Jeroboam and tells him to go home to Judah (10–13).",
        "Amos answers: I was a herdman and a fig picker, and the LORD sent me. He gives Amaziah God's word anyway (14–17)."
      ],
      "key": {
        "ref": "Amos 7:8",
        "text": "And the LORD said unto me, Amos, what seest thou? And I said, A plumbline. Then said the Lord, Behold, I will set a plumbline in the midst of my people Israel: I will not again pass by them any more:"
      },
      "big": "God listens when we pray for others, and His patience is long, but He measures us by His own straight line. He still calls ordinary men, and no one can silence His word."
    }
  },
  {
    "id": "amos-08",
    "type": "chapter",
    "book": "Amos",
    "ch": 8,
    "date": "2026-10-29",
    "title": "Amos 8",
    "sub": "A famine of the word",
    "about": "A basket of ripe fruit, merchants who can't wait for the Sabbath to end, and a hunger worse than any famine: no word from the LORD.",
    "tags": [
      "God's timing",
      "Honesty",
      "The poor",
      "God's memory",
      "God's Word",
      "False gods"
    ],
    "url": "studies/amos-08.html",
    "overview": {
      "where": "Spoken to the northern kingdom of Israel",
      "when": "About 760 BC, under Jeroboam II, about forty years before Assyria carried Israel away",
      "people": [
        "amos"
      ],
      "places": [
        "israel",
        "samaria",
        "dan",
        "beer-sheba",
        "egypt"
      ],
      "story": [
        "God shows Amos a basket of summer fruit: the end has come for Israel (1–3).",
        "Merchants wait for the holy days to end so they can cheat with small measures and false scales, and sell the poor for a pair of shoes (4–6).",
        "God swears He will never forget it. The land will heave like the Nile, the sun will set at noon, and feasts will turn to mourning (7–10).",
        "God will send a famine, not of bread, but of hearing His words. People will search from sea to sea and not find it (11–12).",
        "Those who swear by the idols of Samaria, Dan, and Beer-sheba will fall and never rise again (13–14)."
      ],
      "key": {
        "ref": "Amos 8:11",
        "text": "Behold, the days come, saith the Lord GOD, that I will send a famine in the land, not a famine of bread, nor a thirst for water, but of hearing the words of the LORD:"
      },
      "big": "God sees cheating and cruelty toward the poor, and unrepented sin stays on His books. The worst famine is a silent heaven, so feed on His Word while it's in your hand."
    }
  },
  {
    "id": "amos-09",
    "type": "chapter",
    "book": "Amos",
    "ch": 9,
    "date": "2026-10-29",
    "title": "Amos 9",
    "sub": "I will raise up",
    "about": "Nobody can hide from God's judgment, but He will not utterly destroy. The book that opened with a lion's roar ends with a fallen house rebuilt and a harvest too big to bring in.",
    "tags": [
      "God sees",
      "Who God is",
      "God's mercy",
      "Christ",
      "The nations",
      "Restoration"
    ],
    "url": "studies/amos-09.html",
    "overview": {
      "where": "Amos's last vision, at the altar, likely at Bethel",
      "when": "About 760 BC, under Jeroboam II, about forty years before Assyria carried Israel away",
      "people": [
        "amos",
        "david",
        "philistines",
        "syrians",
        "ethiopians"
      ],
      "places": [
        "israel",
        "carmel",
        "egypt",
        "caphtor",
        "kir",
        "edom"
      ],
      "story": [
        "Amos sees the LORD by the altar. No one can escape His judgment, not in the grave, the sky, Carmel, or the sea (1–4).",
        "The LORD of hosts touches the land and it melts: “The LORD is his name” (5–6).",
        "Israel is no more safe than any other nation, yet God will not utterly destroy the house of Jacob. He will sift them, and not the least grain will be lost (7–10).",
        "God will raise up the fallen tabernacle of David, and the nations will be called by His name. James quotes this in Acts 15 (11–12).",
        "The plowman will overtake the reaper. God will bring His people home and plant them, never to be pulled up again (13–15)."
      ],
      "key": {
        "ref": "Amos 9:11",
        "text": "In that day will I raise up the tabernacle of David that is fallen, and close up the breaches thereof; and I will raise up his ruins, and I will build it as in the days of old:"
      },
      "big": "God's judgment is real, but His mercy has the last word. He raised up David's fallen house in Jesus, called the nations by His name, and keeps every promise He makes."
    }
  },
  {
    "id": "obadiah-01",
    "type": "chapter",
    "book": "Obadiah",
    "ch": 1,
    "date": "2026-10-29",
    "title": "Obadiah 1",
    "sub": "The pride of thine heart",
    "about": "The shortest book in the Old Testament: a proud nation cheers while its brother falls, and God says the high will come down and deliverance will come on mount Zion.",
    "tags": [
      "Pride",
      "Brothers",
      "Reaping",
      "Deliverance",
      "The kingdom"
    ],
    "url": "studies/obadiah-01.html",
    "overview": {
      "where": "Edom, the mountain country south and east of the Dead Sea, and Jerusalem in Judah",
      "when": "Most likely soon after Babylon took Jerusalem, about 586 BC",
      "people": [
        "obadiah",
        "esau",
        "jacob",
        "heathen",
        "philistines"
      ],
      "places": [
        "edom",
        "mount-esau",
        "teman",
        "jerusalem",
        "judah",
        "sion",
        "gilead",
        "zarephath",
        "sepharad"
      ],
      "story": [
        "The LORD sends word among the nations to rise up against Edom. Edom lives high in the rocks and says, “Who shall bring me down?” God answers: “thence will I bring thee down” (1–4).",
        "Edom will be stripped bare, its hidden treasures found, its allies turned against it, and its wise men left without understanding (5–9).",
        "Edom's sin: when strangers broke into Jerusalem, Edom stood by, cheered, looted, and handed over the survivors (10–14).",
        "The day of the LORD is near: “as thou hast done, it shall be done unto thee” (15–16).",
        "On mount Zion there will be deliverance. Jacob's house will take back its land on every side, and “the kingdom shall be the LORD’S” (17–21)."
      ],
      "key": {
        "ref": "Obadiah 1:3",
        "text": "The pride of thine heart hath deceived thee, thou that dwellest in the clefts of the rock, whose habitation is high; that saith in his heart, Who shall bring me down to the ground?"
      },
      "big": "Pride lies to the man who has it, and God brings the high down. He sees how we treat a brother who is falling, and He keeps His word: deliverance is found with Him, and the last word is His."
    }
  },
  {
    "id": "jonah-01",
    "type": "chapter",
    "book": "Jonah",
    "ch": 1,
    "date": "2026-10-29",
    "title": "Jonah 1",
    "sub": "Running from God",
    "about": "God tells Jonah to go east to Nineveh. Jonah buys a ticket west, and finds out there's nowhere a man can run where God can't reach him.",
    "tags": [
      "Running from God",
      "The way down",
      "Storms",
      "Owning it",
      "God's reach",
      "The sign of Jonas"
    ],
    "url": "studies/jonah-01.html",
    "overview": {
      "where": "Joppa on the coast of Israel, then a ship on the Great Sea bound for Tarshish",
      "when": "About 785 BC, in the days of Jeroboam II of Israel, when Assyria was the great power",
      "people": [
        "jonah",
        "amittai",
        "mariners",
        "shipmaster"
      ],
      "places": [
        "nineveh",
        "tarshish",
        "joppa"
      ],
      "story": [
        "The word of the LORD tells Jonah to go and cry against Nineveh, that great city. Jonah flees the other way, down to Joppa and onto a ship for Tarshish (1–3).",
        "The LORD sends a great storm. The sailors pray to their gods and throw cargo overboard, while Jonah sleeps below until the shipmaster wakes him (4–6).",
        "The lot falls on Jonah. He tells them he is a Hebrew who fears the LORD, the God who made the sea, and that he is running from Him (7–10).",
        "Jonah tells them to throw him overboard. They row hard but can't reach land, so they pray to the LORD and cast him in, and the sea goes calm (11–15).",
        "The sailors fear the LORD and offer sacrifice. The LORD has prepared a great fish, and Jonah is in its belly three days and three nights (16–17)."
      ],
      "key": {
        "ref": "Jonah 1:3",
        "text": "But Jonah rose up to flee unto Tarshish from the presence of the LORD, and went down to Joppa; and he found a ship going to Tarshish: so he paid the fare thereof, and went down into it, to go with them unto Tarshish from the presence of the LORD."
      },
      "big": "No man can outrun God. Running only takes a man lower, but God's storms are His love coming after a runaway, and His mercy reaches even the people we ran from. Jesus called Jonah's three days in the fish the sign of His own death and resurrection."
    }
  },
  {
    "id": "jonah-02",
    "type": "chapter",
    "book": "Jonah",
    "ch": 2,
    "date": "2026-10-29",
    "title": "Jonah 2",
    "sub": "Salvation is of the LORD",
    "about": "From inside a fish, at the bottom of the sea, a runaway prophet prays. And God hears him.",
    "tags": [
      "Prayer",
      "Rock bottom",
      "Remembering",
      "Idols",
      "Salvation",
      "A fresh start"
    ],
    "url": "studies/jonah-02.html",
    "overview": {
      "where": "In the belly of a great fish, in the depths of the sea",
      "when": "About 785 BC, during Jonah's three days and three nights in the fish",
      "people": [
        "jonah"
      ],
      "places": [
        "hell",
        "temple"
      ],
      "story": [
        "Jonah prays to the LORD from the fish's belly: “out of the belly of hell cried I, and thou heardest my voice” (1–2).",
        "He describes being cast into the deep, waves over him, feeling cast out of God's sight, yet looking again toward God's holy temple (3–4).",
        "Down to the bottoms of the mountains, weeds around his head, locked in, yet God brought his life up from the pit (5–6).",
        "When his soul fainted he remembered the LORD. Those who cling to lying vanities forsake their own mercy. “Salvation is of the LORD” (7–9).",
        "The LORD speaks to the fish, and it puts Jonah out on dry land (10)."
      ],
      "key": {
        "ref": "Jonah 2:9",
        "text": "But I will sacrifice unto thee with the voice of thanksgiving; I will pay that that I have vowed. Salvation is of the LORD."
      },
      "big": "No place is too low to pray from. Idols promise and leak dry, but God hears a man at the bottom and brings him up. Salvation is God's gift, not something we earn, and He rescues a man to give him a new start."
    }
  },
  {
    "id": "jonah-03",
    "type": "chapter",
    "book": "Jonah",
    "ch": 3,
    "date": "2026-10-29",
    "title": "Jonah 3",
    "sub": "The second time",
    "about": "God gives Jonah another chance. Jonah preaches one short warning, and a violent city falls on its face before God.",
    "tags": [
      "Second chances",
      "God's word",
      "Repentance",
      "Humility",
      "God's mercy",
      "Jesus"
    ],
    "url": "studies/jonah-03.html",
    "overview": {
      "where": "Nineveh, the great city of Assyria, on the Tigris River",
      "when": "About 785 BC, after Jonah's rescue from the fish",
      "people": [
        "jonah",
        "king-of-nineveh"
      ],
      "places": [
        "nineveh"
      ],
      "story": [
        "The word of the LORD comes to Jonah a second time: go to Nineveh. This time Jonah goes (1–3).",
        "A day's walk into that great city he cries, “Yet forty days, and Nineveh shall be overthrown” (4).",
        "The people believe God, fast, and put on sackcloth, from the greatest to the least. The king leaves his throne and sits in ashes (5–6).",
        "The king orders man and beast to fast, cry to God, and turn from evil and violence: “Who can tell if God will turn?” (7–9).",
        "God sees that they turn from their evil way, and He relents from the disaster He had warned of (10)."
      ],
      "key": {
        "ref": "Jonah 3:10",
        "text": "And God saw their works, that they turned from their evil way; and God repented of the evil, that he had said that he would do unto them; and he did it not."
      },
      "big": "God gives a failed man the same call again. When His word is believed, even a violent city turns, and God spares those who turn. Jesus said the men of Nineveh repented at Jonah's preaching, and a greater than Jonah has come."
    }
  },
  {
    "id": "jonah-04",
    "type": "chapter",
    "book": "Jonah",
    "ch": 4,
    "date": "2026-10-29",
    "title": "Jonah 4",
    "sub": "Angry at mercy",
    "about": "Nineveh is spared, and Jonah is furious. God answers His angry prophet with a plant, a worm, a hot wind, and a question.",
    "tags": [
      "Anger",
      "God's character",
      "Despair",
      "Grace",
      "What we care about",
      "God's heart"
    ],
    "url": "studies/jonah-04.html",
    "overview": {
      "where": "Outside Nineveh, on the east side of the city",
      "when": "About 785 BC, after God spared Nineveh",
      "people": [
        "jonah"
      ],
      "places": [
        "nineveh",
        "tarshish"
      ],
      "story": [
        "God's mercy to Nineveh makes Jonah very angry. He says this is why he fled to Tarshish: he knew God was gracious, merciful, slow to anger, and of great kindness (1–2).",
        "Jonah asks God to take his life. The LORD answers, “Doest thou well to be angry?” (3–4).",
        "Jonah sits east of the city in a booth to see what will happen. God prepares a gourd to shade him, and Jonah is exceeding glad (5–6).",
        "God prepares a worm that withers the gourd, then a scorching east wind. Jonah faints and wishes to die (7–9).",
        "God asks: you pitied a plant you didn't grow; should not I spare Nineveh, with more than 120,000 people and much cattle? (10–11)."
      ],
      "key": {
        "ref": "Jonah 4:2",
        "text": "And he prayed unto the LORD, and said, I pray thee, O LORD, was not this my saying, when I was yet in my country? Therefore I fled before unto Tarshish: for I knew that thou art a gracious God, and merciful, slow to anger, and of great kindness, and repentest thee of the evil."
      },
      "big": "God is gracious and merciful to anyone who turns, even our enemies. He meets an angry, despairing man with patience and a question. Self-pity shrinks the world to our comfort, but God's heart is for lost people, and He wants all men to be saved."
    }
  },
  {
    "id": "micah-01",
    "type": "chapter",
    "book": "Micah",
    "ch": 1,
    "date": "2026-10-29",
    "title": "Micah 1",
    "sub": "The LORD comes down",
    "about": "A country preacher sees the LORD step out of heaven to judge His own people, and he weeps over every town on the road.",
    "tags": [
      "God's holiness",
      "Sin",
      "Sin's wages",
      "God's heart",
      "Hope"
    ],
    "url": "studies/micah-01.html",
    "overview": {
      "where": "Judah and Israel: Samaria, Jerusalem, and the towns of Judah's low hills around Micah's home, Moresheth-gath",
      "when": "About 740–700 BC, before the exile, under Jotham, Ahaz and Hezekiah of Judah, as Assyria rose to power",
      "people": [
        "micah",
        "jotham",
        "ahaz",
        "hezekiah",
        "jacob"
      ],
      "places": [
        "samaria",
        "jerusalem",
        "judah",
        "israel",
        "moresheth-gath",
        "gath",
        "lachish",
        "adullam",
        "mareshah"
      ],
      "story": [
        "The word of the LORD comes to Micah of Moresheth about Samaria and Jerusalem, in the days of Jotham, Ahaz and Hezekiah (1).",
        "The LORD comes out of His holy temple as a witness against His people. The mountains melt under Him like wax (2–4).",
        "Samaria, Israel's capital, is the root of its sin, and it will become a heap of stones. Its idols, bought with a harlot's hire, will go back to the same use (5–7).",
        "Micah wails and goes stripped like a captive, because the wound has reached Judah, even the gate of Jerusalem (8–9).",
        "Town by town, with a play on each name, Micah mourns the cities of the low hills as the enemy comes, and their children go into captivity (10–16)."
      ],
      "key": {
        "ref": "Micah 1:3",
        "text": "For, behold, the LORD cometh forth out of his place, and will come down, and tread upon the high places of the earth."
      },
      "big": "God is holy, and He judges sin even among His own people, but only after long patience. His prophets grieve over judgment, and even rock bottom can be the place a man meets the King."
    }
  },
  {
    "id": "micah-02",
    "type": "chapter",
    "book": "Micah",
    "ch": 2,
    "date": "2026-10-29",
    "title": "Micah 2",
    "sub": "Plotting in the dark",
    "about": "Powerful men lie awake planning how to take their neighbors' land, and they want a preacher who will tell them it's fine. God has a word for them, and a promise for His flock.",
    "tags": [
      "Temptation",
      "Greed",
      "God's justice",
      "Truth",
      "Hope"
    ],
    "url": "studies/micah-02.html",
    "overview": {
      "where": "Judah, among the farms and homes of ordinary families",
      "when": "About 735–700 BC, before the exile, while Assyria threatened the land",
      "people": [
        "micah",
        "jacob"
      ],
      "places": [
        "israel",
        "bozrah"
      ],
      "story": [
        "Woe to the men who plan evil on their beds and do it at dawn, taking fields and houses by force (1–2).",
        "So the LORD plans a disaster against them: their own fields will be divided up, and they will have no share among His people (3–5).",
        "The people tell the prophets to stop preaching. God answers that His words do good to the man who walks uprightly (6–7).",
        "His people rob peaceful travelers and throw widows out of their homes. This land is not their rest (8–10).",
        "They would gladly follow a lying prophet who promised wine and strong drink (11).",
        "Yet God promises to gather the remnant of Israel like a flock. The breaker goes before them, their king passes before them, and the LORD is at their head (12–13)."
      ],
      "key": {
        "ref": "Micah 2:13",
        "text": "The breaker is come up before them: they have broken up, and have passed through the gate, and are gone out by it: and their king shall pass before them, and the LORD on the head of them."
      },
      "big": "Sin is planned in the dark before the hands move, and a man reaps what he sows. God's word does good to the upright, and the Shepherd goes ahead of His scattered flock to open the way home."
    }
  },
  {
    "id": "micah-03",
    "type": "chapter",
    "book": "Micah",
    "ch": 3,
    "date": "2026-10-29",
    "title": "Micah 3",
    "sub": "Shepherds who ate the sheep",
    "about": "Judges, priests and prophets who sell out God's people for money, and one man full of the Spirit who tells them the truth.",
    "tags": [
      "Leadership",
      "Prayer",
      "Truth",
      "The Holy Spirit",
      "Mercy"
    ],
    "url": "studies/micah-03.html",
    "overview": {
      "where": "Jerusalem (Zion), before the rulers, priests and prophets of Judah",
      "when": "About 700 BC, in the days of King Hezekiah (Jeremiah 26:18), before the exile",
      "people": [
        "micah",
        "heads-of-jacob",
        "priests",
        "jacob",
        "hezekiah"
      ],
      "places": [
        "sion",
        "jerusalem",
        "israel"
      ],
      "story": [
        "Micah calls out the heads of Jacob. They should know justice, but they hate good and treat the people like meat for the pot (1–3).",
        "When trouble comes they will cry to the LORD, but He will hide His face, because of what they have done (4).",
        "The prophets cry “Peace” to whoever feeds them and declare war on whoever doesn't. Night will fall on them, with no answer from God (5–7).",
        "But Micah is full of power by the Spirit of the LORD, to tell Israel its sin (8).",
        "Rulers judge for bribes, priests teach for hire, prophets divine for money, and still they say the LORD is among them (9–11).",
        "So Zion will be plowed like a field and Jerusalem become heaps (12). A century later, Jeremiah 26 recalls that Hezekiah heard this warning and turned to the LORD."
      ],
      "key": {
        "ref": "Micah 3:8",
        "text": "But truly I am full of power by the spirit of the LORD, and of judgment, and of might, to declare unto Jacob his transgression, and to Israel his sin."
      },
      "big": "God holds leaders to account and won't be used by men who want rescue without repentance. Real courage comes from His Spirit, and His warnings are an open door to turn."
    }
  },
  {
    "id": "micah-04",
    "type": "chapter",
    "book": "Micah",
    "ch": 4,
    "date": "2026-10-29",
    "title": "Micah 4",
    "sub": "Swords into plowshares",
    "about": "Right after the ruins of chapter 3, God shows Micah where history is headed: a mountain the nations climb to learn His ways, and a limping people made strong.",
    "tags": [
      "God's plan",
      "God's word",
      "Peace",
      "The broken",
      "Suffering"
    ],
    "url": "studies/micah-04.html",
    "overview": {
      "where": "Zion and Jerusalem, looking ahead to the exile in Babylon and to the last days",
      "when": "Spoken about 700 BC, before the exile. It looks ahead to Babylon (586 BC), the return (539 BC), and the last days",
      "people": [
        "micah",
        "jacob"
      ],
      "places": [
        "sion",
        "jerusalem",
        "tower-of-the-flock",
        "babylon"
      ],
      "story": [
        "In the last days the mountain of the LORD's house will stand above all, and many nations will come up to learn His ways (1–2).",
        "He will judge among the nations. They will beat their swords into plowshares, and every man will sit under his vine and fig tree, unafraid (3–4).",
        "Others walk in the names of their gods, but “we will walk in the name of the LORD our God for ever and ever” (5).",
        "The LORD will gather the lame and the outcast, make them a strong nation, and reign over them in mount Zion for ever. The kingdom will come back to the tower of the flock (6–8).",
        "Like a woman in labor, Zion will go out to Babylon, and there the LORD will redeem her (9–10).",
        "The nations gather to gloat over Zion, not knowing God is gathering them like sheaves to the threshing floor (11–13)."
      ],
      "key": {
        "ref": "Micah 4:3",
        "text": "And he shall judge among many people, and rebuke strong nations afar off; and they shall beat their swords into plowshares, and their spears into pruninghooks: nation shall not lift up a sword against nation, neither shall they learn war any more."
      },
      "big": "History is headed for the LORD's reign. He teaches the nations His ways, turns weapons into tools, gathers the limping, and redeems His people even in the place of their captivity."
    }
  },
  {
    "id": "micah-05",
    "type": "chapter",
    "book": "Micah",
    "ch": 5,
    "date": "2026-10-29",
    "title": "Micah 5",
    "sub": "Out of Bethlehem",
    "about": "Jerusalem's king is struck in the face. Then God points to a little town and promises a Ruler who never had a beginning.",
    "tags": [
      "Christ foretold",
      "Who Jesus is",
      "The Shepherd",
      "Peace",
      "Small things",
      "Crutches"
    ],
    "url": "studies/micah-05.html",
    "overview": {
      "where": "Judah, the southern kingdom, with Jerusalem under siege and little Bethlehem a few miles south",
      "when": "About 710 BC, while Assyria threatened Judah, before the Babylonian exile",
      "people": [
        "ruler-in-israel",
        "judge-of-israel",
        "jacob",
        "the-lord"
      ],
      "places": [
        "bethlehem",
        "ephratah",
        "judah",
        "israel",
        "assyria",
        "nimrod"
      ],
      "story": [
        "Jerusalem, the “daughter of troops,” is besieged, and her ruler, the judge of Israel, is struck on the cheek (1).",
        "But out of little Bethlehem Ephratah will come a Ruler in Israel “whose goings forth have been from of old, from everlasting” (2). Matthew 2:6 shows it was fulfilled in Jesus.",
        "God gives His people up until she that travails brings forth; then the Ruler stands and feeds His flock in the LORD's strength, great to the ends of the earth (3–4).",
        "“This man shall be the peace” when the Assyrian comes; seven shepherds and eight principal men will be raised up (5–6).",
        "The remnant of Jacob will be like dew from the LORD and like a lion among the nations (7–9).",
        "In that day God will cut off horses, chariots, strongholds, witchcraft, idols and groves, and bring judgment on the nations that refuse Him (10–15)."
      ],
      "key": {
        "ref": "Micah 5:2",
        "text": "But thou, Bethlehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting."
      },
      "big": "God picked the little town over the palace. The Ruler born in Bethlehem had no beginning, rules like a shepherd, and is Himself our peace, and He clears away everything we lean on in His place."
    }
  },
  {
    "id": "micah-06",
    "type": "chapter",
    "book": "Micah",
    "ch": 6,
    "date": "2026-10-29",
    "title": "Micah 6",
    "sub": "What doth the LORD require?",
    "about": "God takes His people to court with the mountains as witnesses, and then tells them, plainly, what He has wanted all along.",
    "tags": [
      "God's faithfulness",
      "Remembering",
      "Grace",
      "Walking with God",
      "Honesty",
      "Sin's emptiness"
    ],
    "url": "studies/micah-06.html",
    "overview": {
      "where": "Judah and Jerusalem, “the city,” pictured as a court with the mountains as witnesses",
      "when": "About 710 BC, in the days of Hezekiah, while Assyria was the great power and before the Babylonian exile",
      "people": [
        "the-lord",
        "moses",
        "aaron",
        "miriam",
        "balak",
        "balaam",
        "omri",
        "ahab"
      ],
      "places": [
        "egypt",
        "moab",
        "shittim",
        "gilgal",
        "israel"
      ],
      "story": [
        "The LORD brings a lawsuit against His people and calls the mountains to hear it (1–2).",
        "“O my people, what have I done unto thee?” He reminds them how He redeemed them from Egypt, led them, and turned Balaam's curse into a blessing (3–5).",
        "A man asks what he can bring to God: calves, rams, rivers of oil, even his firstborn (6–7).",
        "God has already shown him: “to do justly, and to love mercy, and to walk humbly with thy God” (8).",
        "The city is full of crooked scales, violence and lies, so God's rod will fall: they will eat and not be satisfied, sow and not reap (9–15).",
        "They keep the ways of Omri and Ahab, and will become a desolation and an hissing (16)."
      ],
      "key": {
        "ref": "Micah 6:8",
        "text": "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?"
      },
      "big": "God has never done His people wrong, and His favor can't be bought. Having redeemed us, He asks us to do justly, love mercy, and walk humbly with Him, because sin's crooked gains never satisfy."
    }
  },
  {
    "id": "micah-07",
    "type": "chapter",
    "book": "Micah",
    "ch": 7,
    "date": "2026-10-29",
    "title": "Micah 7",
    "sub": "When I fall, I shall arise",
    "about": "Micah looks around and finds no one to trust. So he looks up, and his book ends with the best question in the Bible: “Who is a God like unto thee?”",
    "tags": [
      "Disappointment",
      "Falling",
      "Owning it",
      "Who God is",
      "Forgiveness",
      "God's promises"
    ],
    "url": "studies/micah-07.html",
    "overview": {
      "where": "Judah and Jerusalem, looking ahead to ruin and then to walls rebuilt",
      "when": "About 700 BC, in the days of Hezekiah, looking past the Babylonian exile to the return and beyond",
      "people": [
        "micah",
        "the-lord",
        "watchmen",
        "abraham",
        "jacob"
      ],
      "places": [
        "assyria",
        "egypt",
        "the-river",
        "carmel",
        "bashan",
        "gilead"
      ],
      "story": [
        "Micah is like a man in a picked-over vineyard: the good man has perished, and everyone hunts his brother (1–2).",
        "Rulers and judges take bribes and wrap it up together; no friend can be trusted, and a man's enemies are in his own house (3–6).",
        "“Therefore I will look unto the LORD … my God will hear me.” “When I fall, I shall arise; when I sit in darkness, the LORD shall be a light unto me” (7–8).",
        "He bears God's indignation because he has sinned, until God pleads his cause and brings him to the light; the gloating enemy is shamed (9–10).",
        "A day of building comes: people stream in from Assyria to the river, from sea to sea; Micah prays for God to shepherd His flock, and God promises wonders like the Exodus (11–17).",
        "“Who is a God like unto thee, that pardoneth iniquity?” He delights in mercy, casts all their sins into the depths of the sea, and keeps His oath to Abraham and Jacob (18–20)."
      ],
      "key": {
        "ref": "Micah 7:18",
        "text": "Who is a God like unto thee, that pardoneth iniquity, and passeth by the transgression of the remnant of his heritage? he retaineth not his anger for ever, because he delighteth in mercy."
      },
      "big": "When people fail us and we fail God, we look up. A fall is not the end for God's people: the LORD is our light, He pleads our cause, and He casts forgiven sins into the depths of the sea. No one is like Him."
    }
  },
  {
    "id": "nahum-01",
    "type": "chapter",
    "book": "Nahum",
    "ch": 1,
    "date": "2026-10-29",
    "title": "Nahum 1",
    "sub": "A strong hold in the day of trouble",
    "about": "More than a hundred years after Nineveh repented at Jonah's preaching, it has gone back to its cruelty. God's patience is long, but it has an end, and so does the yoke Assyria laid on His people.",
    "tags": [
      "Who God is",
      "Patience",
      "Refuge",
      "Justice",
      "Freedom",
      "Good news"
    ],
    "url": "studies/nahum-01.html",
    "overview": {
      "where": "Nineveh, the capital of Assyria, on the Tigris; the message is carried to Judah, the southern kingdom",
      "when": "About 650 BC, before the exile, after Assyria had carried off the northern kingdom (722) and more than a hundred years after Jonah preached to Nineveh",
      "people": [
        "nahum",
        "the-lord"
      ],
      "places": [
        "nineveh",
        "elkosh",
        "bashan",
        "carmel",
        "lebanon",
        "judah"
      ],
      "story": [
        "“The burden of Nineveh”: a vision given to Nahum, whose name means comfort (1).",
        "The LORD is jealous and avenges; He is slow to anger and great in power, and will not at all acquit the wicked (2–3).",
        "The sea, the rivers, Bashan, Carmel, Lebanon and the mountains all shake and wither before Him: who can stand? (4–6).",
        "The LORD is good, a strong hold in the day of trouble, and He knows those who trust Him; His enemies He overruns like a flood (7–8).",
        "Affliction will not rise a second time; the plotters against the LORD are tangled thorns and dry stubble (9–11).",
        "God will break Assyria's yoke off Judah, cut off Nineveh's name and idols, and make its grave (12–14).",
        "Behold on the mountains the feet of him that brings good tidings: Judah, keep your feasts and your vows (15)."
      ],
      "key": {
        "ref": "Nahum 1:7",
        "text": "The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him."
      },
      "big": "God is jealous and just, and slow to anger, but slow is not never. To His enemies He is a flood; to those who trust Him He is good, a strong hold in the day of trouble, and He breaks yokes His people cannot break."
    }
  },
  {
    "id": "nahum-02",
    "type": "chapter",
    "book": "Nahum",
    "ch": 2,
    "date": "2026-10-29",
    "title": "Nahum 2",
    "sub": "The lion's den left empty",
    "about": "Nahum watches Nineveh's fall as if it were already happening: red shields, racing chariots, the river gates thrown open, and the richest city on earth carried off.",
    "tags": [
      "God's power",
      "Restoration",
      "Riches",
      "Pride",
      "Courage"
    ],
    "url": "studies/nahum-02.html",
    "overview": {
      "where": "Nineveh, the capital of Assyria, on the Tigris, under siege",
      "when": "Written about 650 BC; it describes Nineveh's fall to the Babylonians and Medes in 612 BC",
      "people": [
        "huzzab",
        "jacob",
        "the-lord"
      ],
      "places": [
        "nineveh",
        "israel"
      ],
      "story": [
        "The destroyer comes up against Nineveh; God taunts it to man the walls (1).",
        "The LORD takes up the cause of Jacob and Israel, whom the emptiers had stripped like a vine (2).",
        "Red shields, scarlet soldiers, and chariots like torches race through the streets (3–4).",
        "The defenders stumble to the wall; the river gates are opened and the palace dissolves (5–6).",
        "Huzzab is led away; the people drain out like a pool and no one looks back (7–8).",
        "The endless treasure is plundered: empty, void and waste (9–10).",
        "Where is the lions' den now? The LORD of hosts says, “I am against thee,” and Nineveh's messengers are silenced (11–13)."
      ],
      "key": {
        "ref": "Nahum 2:13",
        "text": "Behold, I am against thee, saith the LORD of hosts, and I will burn her chariots in the smoke, and the sword shall devour thy young lions: and I will cut off thy prey from the earth, and the voice of thy messengers shall no more be heard."
      },
      "big": "When the LORD of hosts says “I am against thee,” no wall, river, army or treasure can stand. He takes up the cause of His robbed people, and the God who was against proud Nineveh is for those who trust Him."
    }
  },
  {
    "id": "nahum-03",
    "type": "chapter",
    "book": "Nahum",
    "ch": 3,
    "date": "2026-10-29",
    "title": "Nahum 3",
    "sub": "Woe to the bloody city",
    "about": "Nahum reads out the charges against Nineveh, points to a great city it had already destroyed, and ends with a question that answers the question at the end of Jonah.",
    "tags": [
      "Sin",
      "Hidden sin",
      "Lessons",
      "Strength",
      "Shepherds",
      "Mercy"
    ],
    "url": "studies/nahum-03.html",
    "overview": {
      "where": "Nineveh, the capital of Assyria; with a look back at No (Thebes) in Egypt",
      "when": "About 650 BC, after Assyria sacked Thebes (663) and before Nineveh fell (612)",
      "people": [
        "the-lord"
      ],
      "places": [
        "nineveh",
        "no-amon",
        "egypt",
        "ethiopians",
        "put-and-lubim",
        "assyria"
      ],
      "story": [
        "Woe to the bloody city, full of lies and robbery, with the battle noise of whips, wheels and swords (1–3).",
        "Nineveh is a good-looking harlot and sorceress who sells nations and families (4).",
        "The LORD will uncover her shame before the nations, and no one will mourn her (5–7).",
        "Is she better than No (Thebes), with its rivers and allies? Thebes still fell (8–10).",
        "Nineveh's forts are like ripe figs that fall at a shake; her gates stand open to fire (11–13).",
        "Store water and bake bricks all you like: fire, sword and locust-like swarms will consume you (14–15).",
        "Her merchants and officers vanish like locusts at sunrise (16–17).",
        "Her shepherds slumber, her people are scattered, and her wound has no healing; everyone who hears claps (18–19)."
      ],
      "key": {
        "ref": "Nahum 3:1",
        "text": "Woe to the bloody city! it is all full of lies and robbery; the prey departeth not;"
      },
      "big": "God judged Nineveh for real blood, lies and robbery, after giving it every chance since Jonah. Hidden sin comes out, no preparation saves a man from God, and the world's shepherds sleep, but the Good Shepherd never does, and by His stripes we can be healed."
    }
  },
  {
    "id": "habakkuk-01",
    "type": "chapter",
    "book": "Habakkuk",
    "ch": 1,
    "date": "2026-10-29",
    "title": "Habakkuk 1",
    "sub": "How long, LORD?",
    "about": "A prophet looks at the wrong all around him and asks God why He does nothing. God's answer is harder than the question.",
    "tags": [
      "Honest prayer",
      "God's silence",
      "God's ways",
      "Who God is",
      "Correction",
      "False gods"
    ],
    "url": "studies/habakkuk-01.html",
    "overview": {
      "where": "Judah and Jerusalem, the southern kingdom, with Babylon rising far to the east",
      "when": "About 610–600 BC, before the exile, as Babylon (the Chaldeans) rose to power after Assyria fell",
      "people": [
        "habakkuk",
        "the-lord",
        "chaldeans",
        "heathen"
      ],
      "places": [
        "judah",
        "jerusalem",
        "babylon"
      ],
      "story": [
        "Habakkuk cries out: how long will God let violence, strife, and crooked justice go on in Judah (1–4)?",
        "God answers: He is already at work. He is raising up the Chaldeans of Babylon, a fierce and fast nation, to judge Judah (5–11).",
        "Habakkuk holds on to who God is: everlasting, holy, “my God.” Judah will not die; Babylon is sent for correction (12).",
        "But he asks again: how can a holy God use men worse than the ones He judges, who catch nations like fish and worship their own net (13–17)?"
      ],
      "key": {
        "ref": "Habakkuk 1:2",
        "text": "O LORD, how long shall I cry, and thou wilt not hear! even cry out unto thee of violence, and thou wilt not save!"
      },
      "big": "God welcomes honest questions. He may answer in ways we don't expect, but when we can't see what He is doing, we can stand on who He is."
    }
  },
  {
    "id": "habakkuk-02",
    "type": "chapter",
    "book": "Habakkuk",
    "ch": 2,
    "date": "2026-10-29",
    "title": "Habakkuk 2",
    "sub": "The just shall live by his faith",
    "about": "Habakkuk climbs his watchtower and waits. God tells him to write the answer down plainly: the proud will fall, and the just will live by faith.",
    "tags": [
      "Waiting",
      "God's timing",
      "Faith",
      "Never enough",
      "Reaping",
      "God's glory"
    ],
    "url": "studies/habakkuk-02.html",
    "overview": {
      "where": "Judah, with Habakkuk on his watchtower; the woes are aimed at Babylon",
      "when": "About 610–600 BC, before the exile, with Babylon on the rise",
      "people": [
        "habakkuk",
        "the-lord",
        "chaldeans"
      ],
      "places": [
        "babylon",
        "lebanon",
        "temple"
      ],
      "story": [
        "Habakkuk stands on his watch to see how God will answer (1).",
        "God says to write the vision plainly. It has an appointed time: though it tarry, wait for it (2–3).",
        "The proud man is not upright, but the just shall live by his faith. The proud man's appetite, like the grave, is never satisfied (4–5).",
        "The nations Babylon crushed sing five woes over it: for plunder, greed, a city built with blood, getting a neighbour drunk to shame him, and dumb idols (6–19).",
        "The earth will be filled with the knowledge of the glory of the LORD. The LORD is in His holy temple; let all the earth keep silence (14, 20)."
      ],
      "key": {
        "ref": "Habakkuk 2:4",
        "text": "Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith."
      },
      "big": "A man is made right with God by faith, not by works, and he keeps living that way while he waits. God's word comes on time, the proud reap what they sow, and the LORD reigns."
    }
  },
  {
    "id": "habakkuk-03",
    "type": "chapter",
    "book": "Habakkuk",
    "ch": 3,
    "date": "2026-10-29",
    "title": "Habakkuk 3",
    "sub": "Yet I will rejoice",
    "about": "Habakkuk ends with a song. He remembers what God has done, trembles at what's coming, and decides to rejoice in the LORD even if everything is lost.",
    "tags": [
      "Mercy",
      "Remembering",
      "Salvation",
      "Fear",
      "Joy",
      "Strength"
    ],
    "url": "studies/habakkuk-03.html",
    "overview": {
      "where": "Judah, looking back to God's march from Sinai, Teman, and Paran, and the Red Sea and the Jordan",
      "when": "About 610–600 BC, before the exile, as Babylon's invasion drew near",
      "people": [
        "habakkuk",
        "the-lord",
        "heathen"
      ],
      "places": [
        "teman",
        "paran",
        "cushan",
        "midian"
      ],
      "story": [
        "Habakkuk has heard God's answer and is afraid. He prays: revive Your work, and in wrath remember mercy (1–2).",
        "He remembers God coming from Teman and Paran in blazing glory, shaking the mountains and the nations (3–7).",
        "He retells the sea, the rivers, the trembling mountains, and the sun and moon standing still: God went out for the salvation of His people (8–15).",
        "He trembles at the coming invasion, but chooses to rest in the day of trouble (16).",
        "Even if the fig tree, vine, olive, fields, flock, and herd all fail, “yet I will rejoice in the LORD.” The LORD is his strength (17–19)."
      ],
      "key": {
        "ref": "Habakkuk 3:18",
        "text": "Yet I will rejoice in the LORD, I will joy in the God of my salvation."
      },
      "big": "Joy in the Lord doesn't depend on circumstances. Remember what God has done, ask for mercy, rest in Him when afraid, and choose to rejoice in the God of your salvation."
    }
  },
  {
    "id": "zephaniah-01",
    "type": "chapter",
    "book": "Zephaniah",
    "ch": 1,
    "date": "2026-10-29",
    "title": "Zephaniah 1",
    "sub": "The great day of the LORD",
    "about": "A prophet with a king's blood tells Jerusalem the truth: the day of the LORD is near, and nobody can buy his way out of it.",
    "tags": [
      "The day of the LORD",
      "A divided heart",
      "Drifting",
      "Complacency",
      "Money",
      "Refuge"
    ],
    "url": "studies/zephaniah-01.html",
    "overview": {
      "where": "Judah and Jerusalem, the southern kingdom",
      "when": "In the days of King Josiah, about 630 BC, before the exile",
      "people": [
        "zephaniah",
        "hizkiah",
        "josiah",
        "amon",
        "the-lord",
        "chemarims",
        "malcham",
        "priests"
      ],
      "places": [
        "judah",
        "jerusalem",
        "fish-gate",
        "the-second-quarter",
        "maktesh"
      ],
      "story": [
        "The word of the LORD comes to Zephaniah, four generations down from Hizkiah, in the days of King Josiah (1).",
        "God will sweep the land like the flood, then names what's in Jerusalem: Baal, the idol priests, rooftop star worship, men who swear by the LORD and by Malcham, and men who turned back (2–6).",
        "Hush: the day of the LORD is at hand. God has prepared a sacrifice, and Judah is it. He will punish the princes, the foreign fashions, and the violent (7–9).",
        "A cry rises from the fish gate to the market. God will search Jerusalem with candles for the men settled on their lees who say He won't do anything (10–13).",
        "The great day is near: a day of wrath, darkness, and the trumpet. Neither silver nor gold will deliver them (14–18)."
      ],
      "key": {
        "ref": "Zephaniah 1:14",
        "text": "The great day of the LORD is near, it is near, and hasteth greatly, even the voice of the day of the LORD: the mighty man shall cry there bitterly."
      },
      "big": "The day of the LORD is real, and nothing a man owns can buy him out of it. God won't share a divided heart, and He isn't asleep. The only safe place is in Him, through the blood of Christ."
    }
  },
  {
    "id": "zephaniah-02",
    "type": "chapter",
    "book": "Zephaniah",
    "ch": 2,
    "date": "2026-10-29",
    "title": "Zephaniah 2",
    "sub": "Seek ye the LORD",
    "about": "Before the day comes, God calls the humble to come and hide in Him. Then He turns to the nations on every side of Judah.",
    "tags": [
      "Seeking God",
      "Meekness",
      "Being mocked",
      "Idols",
      "Pride",
      "God's word kept"
    ],
    "url": "studies/zephaniah-02.html",
    "overview": {
      "where": "Judah, and the nations around it: Philistia, Moab, Ammon, Ethiopia, and Assyria",
      "when": "Under King Josiah, about 630 BC, about twenty years before Nineveh fell",
      "people": [
        "zephaniah",
        "the-lord",
        "philistines",
        "cherethites",
        "ethiopians"
      ],
      "places": [
        "judah",
        "gaza",
        "ashkelon",
        "ashdod",
        "ekron",
        "canaan",
        "moab",
        "ammon",
        "sodom-and-gomorrah",
        "assyria",
        "nineveh"
      ],
      "story": [
        "Gather together before the day passes like chaff. Seek the LORD, seek righteousness, seek meekness: it may be ye shall be hid (1–3).",
        "West: the Philistine cities will be emptied, and the coast will become pasture for the remnant of Judah, whose captivity God will turn (4–7).",
        "East: God has heard Moab and Ammon mock His people. They will become like Sodom and Gomorrah (8–10).",
        "God will starve every idol, and men will worship Him from every place. South: the Ethiopians fall by His sword (11–12).",
        "North: Assyria will be destroyed and proud Nineveh, which said “I am, and there is none beside me,” left to the birds and beasts (13–15)."
      ],
      "key": {
        "ref": "Zephaniah 2:3",
        "text": "Seek ye the LORD, all ye meek of the earth, which have wrought his judgment; seek righteousness, seek meekness: it may be ye shall be hid in the day of the LORD’S anger."
      },
      "big": "While the day is still coming, the door is open: seek the LORD now, humbly. Every nation answers to God, every idol will starve, and pride that plays God is headed for a fall."
    }
  },
  {
    "id": "zephaniah-03",
    "type": "chapter",
    "book": "Zephaniah",
    "ch": 3,
    "date": "2026-10-29",
    "title": "Zephaniah 3",
    "sub": "He will joy over thee with singing",
    "about": "The city that wouldn't listen hears one more hard word. Then comes one of the most tender promises in the Bible: God Himself, singing over His people.",
    "tags": [
      "Correction",
      "God's faithfulness",
      "Shame",
      "Humility",
      "God's joy",
      "Restoration"
    ],
    "url": "studies/zephaniah-03.html",
    "overview": {
      "where": "Jerusalem",
      "when": "Under King Josiah, about 630 BC, looking ahead past the exile",
      "people": [
        "zephaniah",
        "the-lord",
        "priests",
        "suppliants"
      ],
      "places": [
        "jerusalem",
        "sion",
        "israel",
        "ethiopians"
      ],
      "story": [
        "Woe to the oppressing city: she wouldn't obey, take correction, trust, or draw near. Her leaders are lions and wolves (1–4).",
        "The just LORD is in her midst and never fails, every morning. He warned her by the fall of nations, but she rose early to sin (5–7).",
        "After the fire on the nations, God gives the peoples a pure language to call on His name, even from beyond the rivers of Ethiopia (8–10).",
        "He takes away shame and pride, and leaves an afflicted and poor people who trust in His name, with none to make them afraid (11–13).",
        "Sing, O daughter of Zion! The LORD has taken away her judgments. He will rejoice over her with singing, save the lame, and bring His people home (14–20)."
      ],
      "key": {
        "ref": "Zephaniah 3:17",
        "text": "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing."
      },
      "big": "God's judgment is real, but it isn't His last word. He takes away shame, keeps the humble, gathers the limping, and rejoices over His people with singing."
    }
  },
  {
    "id": "haggai-01",
    "type": "chapter",
    "book": "Haggai",
    "ch": 1,
    "date": "2026-10-29",
    "title": "Haggai 1",
    "sub": "Consider your ways",
    "about": "God's people came home from exile, roofed their own houses, and left His house in rubble. God tells them to stop and look at where that has got them.",
    "tags": [
      "Priorities",
      "Taking stock",
      "Never enough",
      "God's discipline",
      "Obedience",
      "God's presence"
    ],
    "url": "studies/haggai-01.html",
    "overview": {
      "where": "Jerusalem and Judah, a small Persian province, where the temple lay in ruins",
      "when": "About 520 BC, after the exile, in the second year of Darius king of Persia",
      "people": [
        "haggai",
        "the-lord",
        "darius",
        "zerubbabel",
        "joshua-the-high-priest"
      ],
      "places": [
        "judah",
        "jerusalem"
      ],
      "story": [
        "In about 520 BC, Haggai brings God's word to Zerubbabel the governor and Joshua the high priest. The people say it isn't time to build the LORD's house (1–2).",
        "God asks: is it time for you to live in panelled houses while My house lies waste (3–4)?",
        "“Consider your ways.” They sow much and reap little, and earn wages into a bag with holes (5–7).",
        "Go up, bring wood, and build, and God will take pleasure in it. The drought came because they ran to their own houses and left His in ruins (8–11).",
        "The leaders and the remnant obey and fear the LORD. God says, “I am with you,” stirs up their spirits, and in 23 days the work begins (12–15)."
      ],
      "key": {
        "ref": "Haggai 1:5",
        "text": "Now therefore thus saith the LORD of hosts; Consider your ways."
      },
      "big": "Take an honest look at the road you're on and put God first. When His people turn back and obey, He meets them at once: “I am with you.”"
    }
  },
  {
    "id": "haggai-02",
    "type": "chapter",
    "book": "Haggai",
    "ch": 2,
    "date": "2026-10-29",
    "title": "Haggai 2",
    "sub": "Be strong, and work",
    "about": "The new temple looks like nothing next to the old one. God tells the builders to keep going: He is with them, and the best is still to come.",
    "tags": [
      "Small beginnings",
      "Courage",
      "God's provision",
      "Clean and unclean",
      "Blessing",
      "God's promises"
    ],
    "url": "studies/haggai-02.html",
    "overview": {
      "where": "Jerusalem, at the half-built second temple",
      "when": "About 520 BC, after the exile, from October to December in Darius's second year",
      "people": [
        "haggai",
        "the-lord",
        "zerubbabel",
        "joshua-the-high-priest",
        "priests"
      ],
      "places": [
        "temple",
        "egypt"
      ],
      "story": [
        "The old men think the new house is nothing next to Solomon's. God says: be strong, and work, for I am with you, and My Spirit remains among you (1–5).",
        "God will shake heaven, earth and the nations. The silver and gold are His, and the glory of this latter house will be greater than the former (6–9).",
        "Haggai asks the priests: holiness doesn't spread by touch, but uncleanness does. So the people's offerings were unclean (10–14).",
        "Their harvests had come up half or less, and still they didn't turn. But from the day the foundation was laid, God will bless them (15–19).",
        "God will overthrow the thrones of kingdoms, and He will make Zerubbabel as a signet, for He has chosen him (20–23)."
      ],
      "key": {
        "ref": "Haggai 2:4",
        "text": "Yet now be strong, O Zerubbabel, saith the LORD; and be strong, O Joshua, son of Josedech, the high priest; and be strong, all ye people of the land, saith the LORD, and work: for I am with you, saith the LORD of hosts:"
      },
      "big": "Don't despise a small start. The strength to keep going comes from the God who is with us, His blessing begins the day we turn back, and He keeps His promises, as He did in Jesus."
    }
  },
  {
    "id": "zechariah-01",
    "type": "chapter",
    "book": "Zechariah",
    "ch": 1,
    "date": "2026-10-29",
    "title": "Zechariah 1",
    "sub": "Turn ye unto me",
    "about": "God calls His people to turn back to Him. Then, in the night, a prophet sees horsemen among the myrtle trees, and hears God say He has come back to Jerusalem with mercy.",
    "tags": [
      "Turning back",
      "The past",
      "God's word",
      "Someone pleading",
      "God's heart",
      "The enemy"
    ],
    "url": "studies/zechariah-01.html",
    "overview": {
      "where": "Jerusalem and Judah, being rebuilt after the exile; the visions look out over the whole earth",
      "when": "About 520–519 BC, after the exile, in the second year of Darius king of Persia, alongside Haggai",
      "people": [
        "zechariah",
        "berechiah-and-iddo",
        "the-lord",
        "darius",
        "angel-of-the-lord",
        "angel-that-talked-with-me"
      ],
      "places": [
        "jerusalem",
        "judah",
        "sion",
        "israel"
      ],
      "story": [
        "God tells Zechariah to call the people back: “Turn ye unto me, and I will turn unto you.” Don't be like your fathers, who would not listen (1–4).",
        "The fathers and the prophets are gone, but God's words took hold of them, just as He said (5–6).",
        "In a night vision, a man on a red horse stands among the myrtle trees. His riders report that all the earth is at rest (7–11).",
        "The angel of the LORD pleads: how long, after seventy years, before You have mercy on Jerusalem? God answers with comfortable words (12–13).",
        "God is jealous for Jerusalem, angry with the nations that made her suffering worse, and has returned to her with mercies. He will yet comfort Zion and choose Jerusalem (14–17).",
        "Four horns that scattered Judah, and four carpenters sent to terrify them and cast them out (18–21)."
      ],
      "key": {
        "ref": "Zechariah 1:3",
        "text": "Therefore say thou unto them, Thus saith the LORD of hosts; Turn ye unto me, saith the LORD of hosts, and I will turn unto you, saith the LORD of hosts."
      },
      "big": "God calls His people to turn back, and He turns toward them. His word stands, His correction ends, and He comes back to His people with mercy."
    }
  },
  {
    "id": "zechariah-02",
    "type": "chapter",
    "book": "Zechariah",
    "ch": 2,
    "date": "2026-10-29",
    "title": "Zechariah 2",
    "sub": "A wall of fire",
    "about": "A young man sets out to measure Jerusalem's walls. God says the city will overflow its walls, and He Himself will be the wall around it.",
    "tags": [
      "Protection",
      "God's presence",
      "Getting out",
      "God's care",
      "The nations",
      "Reverence"
    ],
    "url": "studies/zechariah-02.html",
    "overview": {
      "where": "Jerusalem, still without walls, and Babylon, “the land of the north”",
      "when": "About 519 BC, after the exile, in Zechariah's night visions under Darius king of Persia",
      "people": [
        "zechariah",
        "angel-that-talked-with-me",
        "the-lord",
        "heathen"
      ],
      "places": [
        "jerusalem",
        "sion",
        "babylon",
        "land-of-the-north",
        "judah",
        "holy-land"
      ],
      "story": [
        "A man with a measuring line goes to measure Jerusalem (1–2).",
        "An angel runs to say Jerusalem will spill out like towns without walls, and the LORD will be a wall of fire around her and the glory in her midst (3–5).",
        "God calls His people to flee from Babylon, the land of the north. Whoever touches them touches the apple of His eye (6–9).",
        "Sing and rejoice: the LORD is coming to dwell among His people, and many nations will be joined to Him (10–11).",
        "The LORD will inherit Judah as His portion in the holy land and choose Jerusalem again. Be silent, all flesh, before the LORD (12–13)."
      ],
      "key": {
        "ref": "Zechariah 2:5",
        "text": "For I, saith the LORD, will be unto her a wall of fire round about, and will be the glory in the midst of her."
      },
      "big": "God Himself is the wall around His people and the glory in their midst. He calls us out of the old life, treasures us as the apple of His eye, and opens His door to every nation."
    }
  },
  {
    "id": "zechariah-03",
    "type": "chapter",
    "book": "Zechariah",
    "ch": 3,
    "date": "2026-10-29",
    "title": "Zechariah 3",
    "sub": "A brand plucked out of the fire",
    "about": "Joshua the high priest stands before God in filthy clothes while Satan accuses him. God rebukes the accuser, takes the filth away, and dresses him clean.",
    "tags": [
      "Accused",
      "Rescued",
      "Cleansed",
      "New clothes",
      "Walking",
      "The BRANCH"
    ],
    "url": "studies/zechariah-03.html",
    "overview": {
      "where": "Jerusalem, in a vision of God's courtroom",
      "when": "About 520–519 BC, after the exile, under Persian rule, while the temple was being rebuilt",
      "people": [
        "zechariah",
        "joshua-the-high-priest",
        "angel-of-the-lord",
        "satan",
        "the-lord",
        "the-branch"
      ],
      "places": [
        "jerusalem"
      ],
      "story": [
        "Zechariah sees Joshua the high priest standing before the angel of the LORD, with Satan at his right hand to accuse him (1).",
        "The LORD rebukes Satan: Joshua is a brand plucked out of the fire (2).",
        "Joshua's filthy garments are taken away, his iniquity is made to pass from him, and he is clothed with change of raiment and a fair mitre (3–5).",
        "The angel of the LORD charges him: if he walks in God's ways, he will keep God's house and have a place among those that stand by (6–7).",
        "Joshua and his fellows are a sign: God will bring forth His servant the BRANCH, remove the iniquity of the land in one day, and bring peace under the vine and fig tree (8–10)."
      ],
      "key": {
        "ref": "Zechariah 3:4",
        "text": "And he answered and spake unto those that stood before him, saying, Take away the filthy garments from him. And unto him he said, Behold, I have caused thine iniquity to pass from thee, and I will clothe thee with change of raiment."
      },
      "big": "God answers the accuser, takes away our filth, and clothes us clean, before we have done a thing. Then He calls us to walk in His ways. It all points to the BRANCH, who would take sin away in one day."
    }
  },
  {
    "id": "zechariah-04",
    "type": "chapter",
    "book": "Zechariah",
    "ch": 4,
    "date": "2026-10-29",
    "title": "Zechariah 4",
    "sub": "Not by might, nor by power",
    "about": "Zechariah sees a golden lampstand fed by two olive trees. The word to a tired builder: the work will be finished, not by human strength, but by God's Spirit.",
    "tags": [
      "God's Spirit",
      "Mountains",
      "Grace",
      "Finishing",
      "Small things",
      "God's eyes"
    ],
    "url": "studies/zechariah-04.html",
    "overview": {
      "where": "Jerusalem, where the temple stood half built",
      "when": "About 520–519 BC, after the exile, under Persian rule",
      "people": [
        "zechariah",
        "angel-that-talked-with-me",
        "zerubbabel",
        "the-lord"
      ],
      "places": [
        "temple"
      ],
      "story": [
        "The angel wakes Zechariah, and he sees a golden candlestick with a bowl and seven lamps, and an olive tree on each side (1–3).",
        "Zechariah honestly says he doesn't know what they mean (4–5).",
        "The word to Zerubbabel: not by might, nor by power, but by my spirit. The great mountain will become a plain, and the headstone will go up with shouts of “Grace, grace” (6–7).",
        "Zerubbabel's hands laid the foundation and will finish it. No one should despise the day of small things; the eyes of the LORD run through the whole earth (8–10).",
        "The two olive trees are the two anointed ones who stand by the LORD of the whole earth (11–14)."
      ],
      "key": {
        "ref": "Zechariah 4:6",
        "text": "Then he answered and spake unto me, saying, This is the word of the LORD unto Zerubbabel, saying, Not by might, nor by power, but by my spirit, saith the LORD of hosts."
      },
      "big": "God's work is done by His Spirit, not by human strength. He finishes what He starts, it is grace from first to last, and no beginning is too small for Him."
    }
  },
  {
    "id": "zechariah-05",
    "type": "chapter",
    "book": "Zechariah",
    "ch": 5,
    "date": "2026-10-29",
    "title": "Zechariah 5",
    "sub": "The flying roll",
    "about": "Two strange visions: a giant flying scroll that brings God's curse into the houses of thieves and liars, and a woman called Wickedness, sealed in a basket and carried far away.",
    "tags": [
      "Hidden sin",
      "Stealing",
      "Truth",
      "Wickedness",
      "Removed",
      "The curse"
    ],
    "url": "studies/zechariah-05.html",
    "overview": {
      "where": "Jerusalem, in two visions that reach out to Shinar",
      "when": "About 520–519 BC, after the exile, under Persian rule",
      "people": [
        "zechariah",
        "angel-that-talked-with-me",
        "the-lord"
      ],
      "places": [
        "shinar"
      ],
      "story": [
        "Zechariah sees a flying roll, twenty cubits by ten (1–2).",
        "It is the curse going out over the land against everyone who steals and everyone who swears falsely by God's name. It enters their houses and consumes them (3–4).",
        "He sees an ephah with a woman sitting in it: this is wickedness. The angel thrusts her back and seals it with a talent of lead (5–8).",
        "Two women with wings like a stork carry the ephah away to build it a house in the land of Shinar (9–11)."
      ],
      "key": {
        "ref": "Zechariah 5:4",
        "text": "I will bring it forth, saith the LORD of hosts, and it shall enter into the house of the thief, and into the house of him that sweareth falsely by my name: and it shall remain in the midst of his house, and shall consume it with the timber thereof and the stones thereof."
      },
      "big": "Sin hidden at home doesn't stay hidden, and God's law pronounces a curse on it. But God also removes wickedness from His people, and in Christ, who became a curse for us, the guilty are set free."
    }
  },
  {
    "id": "zechariah-06",
    "type": "chapter",
    "book": "Zechariah",
    "ch": 6,
    "date": "2026-10-29",
    "title": "Zechariah 6",
    "sub": "A priest upon his throne",
    "about": "The last night vision sends God's chariots out across the earth. Then Zechariah puts a crown on Joshua the high priest: a living picture of the BRANCH, who will be both priest and King.",
    "tags": [
      "God's rule",
      "Judgment",
      "The BRANCH",
      "Priest and King",
      "Far off",
      "Obeying"
    ],
    "url": "studies/zechariah-06.html",
    "overview": {
      "where": "Jerusalem, with God's chariots going out to the north and south countries",
      "when": "About 520–519 BC, after the exile, under Persian rule",
      "people": [
        "zechariah",
        "angel-that-talked-with-me",
        "joshua-the-high-priest",
        "heldai",
        "tobijah",
        "jedaiah",
        "josiah-son-of-zephaniah",
        "the-branch",
        "the-lord"
      ],
      "places": [
        "babylon",
        "land-of-the-north",
        "south-country",
        "temple"
      ],
      "story": [
        "Four chariots with red, black, white, and grisled and bay horses come out from between two mountains of brass (1–3).",
        "They are the four spirits of the heavens, sent from the Lord of all the earth. Those that go to the north country have quieted God's spirit there (4–8).",
        "Zechariah is told to take silver and gold from the returned exiles, make crowns, and set them on Joshua the high priest (9–11).",
        "Behold the man whose name is The BRANCH: he will build the temple of the LORD and be a priest upon his throne (12–13).",
        "The crowns are kept as a memorial. Those far off will come and build, if the people diligently obey the LORD (14–15)."
      ],
      "key": {
        "ref": "Zechariah 6:13",
        "text": "Even he shall build the temple of the LORD; and he shall bear the glory, and shall sit and rule upon his throne; and he shall be a priest upon his throne: and the counsel of peace shall be between them both."
      },
      "big": "God rules all the earth and deals fully with evil. The BRANCH, Jesus, is both Priest and King: He offered Himself for us and now reigns, and He brings the far-off near."
    }
  },
  {
    "id": "zechariah-07",
    "type": "chapter",
    "book": "Zechariah",
    "ch": 7,
    "date": "2026-10-29",
    "title": "Zechariah 7",
    "sub": "Did ye at all fast unto me?",
    "about": "Men come asking whether to keep an old fast. God answers with a better question: who was it all for? And He reminds them what He wanted all along.",
    "tags": [
      "The heart",
      "For whom?",
      "Mercy",
      "A hard heart",
      "Not hearing",
      "Hope"
    ],
    "url": "studies/zechariah-07.html",
    "overview": {
      "where": "Jerusalem, where the temple is being rebuilt; men are sent to ask the priests and prophets",
      "when": "About 518 BC, the fourth year of King Darius of Persia, after the exile",
      "people": [
        "zechariah",
        "darius",
        "sherezer-and-regem-melech",
        "priests",
        "the-lord"
      ],
      "places": [
        "jerusalem",
        "temple"
      ],
      "story": [
        "In the ninth month, Chisleu, men are sent to the house of God to ask: should we keep weeping and fasting in the fifth month, as we have for so many years? (1–3)",
        "God asks the people: when you fasted for seventy years, was it for Me? When you ate and drank, wasn't it for yourselves? (4–6)",
        "The former prophets had already said it, back when Jerusalem was full and prosperous (7).",
        "God's word was always: judge truly, show mercy, don't oppress the widow, the fatherless, the stranger or the poor, and don't plot evil in your heart (8–10).",
        "Their fathers refused, shrugged, stopped their ears, and made their hearts as an adamant stone, so great wrath came (11–12).",
        "As they would not hear God, He would not hear them. He scattered them with a whirlwind, and the pleasant land was left desolate (13–14)."
      ],
      "key": {
        "ref": "Zechariah 7:5",
        "text": "Speak unto all the people of the land, and to the priests, saying, When ye fasted and mourned in the fifth and seventh month, even those seventy years, did ye at all fast unto me, even to me?"
      },
      "big": "God wants our hearts, not empty rituals: mercy and justice toward people, and ears that listen to Him. A heart hardens one \"no\" at a time, but God still calls, and He can give a new heart."
    }
  },
  {
    "id": "zechariah-08",
    "type": "chapter",
    "book": "Zechariah",
    "ch": 8,
    "date": "2026-10-29",
    "title": "Zechariah 8",
    "sub": "I am returned unto Zion",
    "about": "Ten promises from the LORD of hosts: a city full of old men and playing children, a curse turned into a blessing, and sad fasts turned into feasts.",
    "tags": [
      "God's love",
      "Too hard?",
      "Courage",
      "A fresh start",
      "Truth",
      "Joy"
    ],
    "url": "studies/zechariah-08.html",
    "overview": {
      "where": "Jerusalem and Zion, half rebuilt, with God's people still scattered east and west",
      "when": "About 518 BC, under Persia, after the exile, while the temple was being rebuilt",
      "people": [
        "zechariah",
        "the-lord",
        "remnant",
        "heathen"
      ],
      "places": [
        "sion",
        "jerusalem",
        "judah",
        "temple"
      ],
      "story": [
        "God is jealous for Zion with great jealousy. He returns to dwell in Jerusalem, the city of truth (1–3).",
        "Old men and women will sit in the streets, and boys and girls will play there. What seems marvellous to the remnant is not too hard for God (4–6).",
        "He will gather His people from east and west: they shall be His people, and He their God (7–8).",
        "Let your hands be strong. Before the foundation was laid there was no wage and no peace, but now the seed will prosper (9–12).",
        "As they were a curse among the nations, they will be a blessing. As God kept His word to punish, He will keep it to do good: fear not (13–15).",
        "Speak the truth, judge with truth and peace, plot no evil, love no false oath (16–17).",
        "The four fasts will become joy, gladness and cheerful feasts (18–19).",
        "Many nations will come to seek the LORD in Jerusalem. Ten men will take hold of a Jew's robe: “We will go with you: for we have heard that God is with you” (20–23)."
      ],
      "key": {
        "ref": "Zechariah 8:3",
        "text": "Thus saith the LORD; I am returned unto Zion, and will dwell in the midst of Jerusalem: and Jerusalem shall be called a city of truth; and the mountain of the LORD of hosts the holy mountain."
      },
      "big": "God loves His people with a fierce, faithful love. Nothing is too hard for Him: He turns a curse into a blessing and mourning into joy, and He calls us to build on truth."
    }
  },
  {
    "id": "zechariah-09",
    "type": "chapter",
    "book": "Zechariah",
    "ch": 9,
    "date": "2026-10-29",
    "title": "Zechariah 9",
    "sub": "Behold, thy King cometh",
    "about": "Proud cities fall, but Jerusalem's King comes riding on a donkey, bringing peace. And God calls to men stuck in a dry pit: “ye prisoners of hope.”",
    "tags": [
      "Riches",
      "Mercy",
      "The King",
      "Peace",
      "Hope",
      "Worth"
    ],
    "url": "studies/zechariah-09.html",
    "overview": {
      "where": "The lands around Israel, from Hadrach, Hamath and Damascus in Syria to Tyre, Zidon and the Philistine cities, with Jerusalem at the center",
      "when": "Undated, after the exile (Zechariah preached about 520–518 BC), looking ahead to Alexander the Great (about 332 BC), the wars with the Greeks, and the coming King",
      "people": [
        "the-lord",
        "philistines",
        "jebusite"
      ],
      "places": [
        "hadrach",
        "damascus",
        "hamath",
        "tyre-and-zidon",
        "ashkelon",
        "gaza",
        "ekron",
        "ashdod",
        "sion",
        "jerusalem",
        "greece"
      ],
      "story": [
        "The burden of the LORD falls on Hadrach, Damascus and Hamath, and on rich Tyre and Zidon. Tyre's strong hold and silver cannot save her (1–4).",
        "The Philistine cities will fear and fall, yet a remnant of them will belong to God, like the Jebusites (5–7).",
        "God will encamp about His house, so that no oppressor passes through (8).",
        "Rejoice, daughter of Zion: your King comes, just and having salvation, lowly and riding upon an ass (9; Matthew 21:5, John 12:15).",
        "He will cut off the chariot and the war horse and speak peace to the nations; His rule will reach to the ends of the earth (10).",
        "By the blood of the covenant God frees prisoners from the waterless pit: “Turn you to the strong hold, ye prisoners of hope” (11–12).",
        "God will use Judah and Ephraim like a bow against the sons of Greece, and He will defend and save His people (13–15).",
        "They will be like the stones of a crown on His land. How great is His goodness, and how great is His beauty (16–17)."
      ],
      "key": {
        "ref": "Zechariah 9:9",
        "text": "Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an ass."
      },
      "big": "Walls and riches can't save, but God guards His own. Jesus is the just, saving, lowly King who rode into Jerusalem as Zechariah foretold, and He calls men in the pit “prisoners of hope.”"
    }
  },
  {
    "id": "zechariah-10",
    "type": "chapter",
    "book": "Zechariah",
    "ch": 10,
    "date": "2026-10-29",
    "title": "Zechariah 10",
    "sub": "I will bring them again",
    "about": "Sheep without a shepherd, scattered to far countries. God whistles for them, gathers them, and brings them home as though He had never cast them off.",
    "tags": [
      "Prayer",
      "False comfort",
      "The Shepherd",
      "Taken back",
      "Far country",
      "Strength"
    ],
    "url": "studies/zechariah-10.html",
    "overview": {
      "where": "Judah and the scattered northern tribes (the house of Joseph, Ephraim), called home from Egypt and Assyria to Gilead and Lebanon",
      "when": "Undated, after the exile (Zechariah preached about 520–518 BC), looking ahead to a full gathering of God's people",
      "people": [
        "the-lord",
        "house-of-joseph",
        "ephraim-kingdom"
      ],
      "places": [
        "judah",
        "egypt",
        "assyria",
        "gilead",
        "lebanon"
      ],
      "story": [
        "Ask the LORD for rain in the time of the latter rain; He sends the showers (1).",
        "Idols and diviners comfort in vain, so the people wandered like sheep with no shepherd (2).",
        "God is angry with the bad shepherds. He visits His flock and makes Judah His goodly horse. From Judah come the corner, the nail, the battle bow and every ruler (3–5).",
        "God will strengthen Judah and save Joseph. They will be as though He had not cast them off, for He has mercy on them, and Ephraim's heart will rejoice in the LORD (6–7).",
        "He will hiss for them and gather them, for He has redeemed them. Scattered far, they will remember Him and turn again (8–9).",
        "He will bring them out of Egypt and Assyria into Gilead and Lebanon, through the sea of affliction, and bring down the pride of their oppressors (10–11).",
        "He will strengthen them in the LORD, and they will walk up and down in His name (12)."
      ],
      "key": {
        "ref": "Zechariah 10:6",
        "text": "And I will strengthen the house of Judah, and I will save the house of Joseph, and I will bring them again to place them; for I have mercy upon them: and they shall be as though I had not cast them off: for I am the LORD their God, and will hear them."
      },
      "big": "False comfort leaves men scattered like sheep, but God is the Shepherd who calls, gathers and restores, as though He had never cast them off. However far a man has gone, he can remember God and turn again."
    }
  },
  {
    "id": "zechariah-11",
    "type": "chapter",
    "book": "Zechariah",
    "ch": 11,
    "date": "2026-10-29",
    "title": "Zechariah 11",
    "sub": "Thirty pieces of silver",
    "about": "God sends a true shepherd to a flock that is being sold for slaughter. They pay Him off with the price of a slave.",
    "tags": [
      "Shepherds",
      "God's name",
      "Rejected",
      "Christ",
      "Broken",
      "The Good Shepherd"
    ],
    "url": "studies/zechariah-11.html",
    "overview": {
      "where": "Judah and Jerusalem after the exile; the picture sweeps from Lebanon and Bashan down to the Jordan",
      "when": "Undated; probably later in Zechariah's ministry, some time after 520 BC, when the Jews were back from Babylon under Persian rule. It looks far ahead.",
      "people": [
        "zechariah",
        "the-lord",
        "shepherds",
        "idol-shepherd",
        "potter"
      ],
      "places": [
        "lebanon",
        "bashan",
        "jordan",
        "judah",
        "israel"
      ],
      "story": [
        "Fire sweeps down from the cedars of Lebanon to the oaks of Bashan and the thickets of the Jordan, and the shepherds howl (1–3).",
        "God tells Zechariah to feed the flock of the slaughter, sheep that buyers kill, sellers profit from, and their own shepherds don't pity (4–6).",
        "He takes two staffs, Beauty and Bands, cuts off three shepherds, and gives up on a flock that hates him (7–9).",
        "He breaks Beauty, and the poor of the flock who were watching know it is the word of the LORD (10–11).",
        "They weigh out his wages, thirty pieces of silver, and the LORD has him cast them to the potter in the house of the LORD (12–13).",
        "He breaks Bands, the brotherhood between Judah and Israel (14).",
        "Zechariah plays a foolish shepherd, and God pronounces woe on the idol shepherd who leaves the flock (15–17)."
      ],
      "key": {
        "ref": "Zechariah 11:12",
        "text": "And I said unto them, If ye think good, give me my price; and if not, forbear. So they weighed for my price thirty pieces of silver."
      },
      "big": "God sent His people a true Shepherd, and they valued Him at the price of a dead slave. Jesus was sold for those very thirty pieces. The world's shepherds use the sheep and leave; the Good Shepherd seeks the lost, heals the broken, and gives His life for the sheep."
    }
  },
  {
    "id": "zechariah-12",
    "type": "chapter",
    "book": "Zechariah",
    "ch": 12,
    "date": "2026-10-29",
    "title": "Zechariah 12",
    "sub": "They shall look upon me",
    "about": "The nations gather against Jerusalem, and God defends her. Then He pours out grace, and His people look on the One they pierced and weep.",
    "tags": [
      "Who God is",
      "Protection",
      "Weakness",
      "Grace",
      "Christ",
      "Repentance"
    ],
    "url": "studies/zechariah-12.html",
    "overview": {
      "where": "Jerusalem and Judah, with the nations gathered around; a look back at Megiddo",
      "when": "Undated; probably later in Zechariah's ministry, some time after 520 BC, when the Jews were back from Babylon under Persian rule. It looks far ahead.",
      "people": [
        "zechariah",
        "the-lord",
        "david",
        "nathan-son-of-david",
        "levi",
        "shimei"
      ],
      "places": [
        "jerusalem",
        "judah",
        "israel",
        "megiddo",
        "hadadrimmon"
      ],
      "story": [
        "The LORD who made the heavens, the earth and the spirit of man speaks a burden for Israel (1).",
        "Jerusalem will be a cup of trembling and a burdensome stone to the nations that come against her (2–3).",
        "In that day God strikes their horses and riders, and Judah's leaders find their strength in the LORD of hosts and burn through their enemies (4–6).",
        "The LORD saves the tents of Judah first, makes the feeble like David, and destroys the nations that come against Jerusalem (7–9).",
        "He pours out the spirit of grace and supplications, and they look on the One they pierced and mourn as for an only son (10).",
        "The mourning is like the mourning at Megiddo, and every family mourns apart, husbands and wives each by themselves (11–14)."
      ],
      "key": {
        "ref": "Zechariah 12:10",
        "text": "And I will pour upon the house of David, and upon the inhabitants of Jerusalem, the spirit of grace and of supplications: and they shall look upon me whom they have pierced, and they shall mourn for him, as one mourneth for his only son, and shall be in bitterness for him, as one that is in bitterness for his firstborn."
      },
      "big": "God defends His people and makes the feeble strong. Then He pours out grace first, and they look on the One they pierced: Jesus, the LORD Himself. True sorrow for sin flows from grace, and every man must look to the cross for himself."
    }
  },
  {
    "id": "zechariah-13",
    "type": "chapter",
    "book": "Zechariah",
    "ch": 13,
    "date": "2026-10-29",
    "title": "Zechariah 13",
    "sub": "A fountain opened",
    "about": "God opens a fountain to wash away sin and uncleanness, clears out the idols and the liars, and strikes His own Shepherd so that His people can be refined and brought home.",
    "tags": [
      "Cleansing",
      "Idols",
      "Honesty",
      "Christ",
      "Trials",
      "Belonging"
    ],
    "url": "studies/zechariah-13.html",
    "overview": {
      "where": "Jerusalem and the land of Judah",
      "when": "Undated; probably later in Zechariah's ministry, some time after 520 BC, when the Jews were back from Babylon under Persian rule. It looks far ahead.",
      "people": [
        "zechariah",
        "the-lord",
        "david",
        "false-prophets"
      ],
      "places": [
        "jerusalem"
      ],
      "story": [
        "In that day a fountain is opened to the house of David and Jerusalem for sin and for uncleanness (1).",
        "The LORD cuts off the names of the idols and drives out the false prophets and the unclean spirit (2).",
        "Even a false prophet's own parents will not cover for his lies (3).",
        "False prophets are ashamed, drop their rough garments, claim to be farmers, and explain away the wounds in their hands (4–6).",
        "The LORD calls the sword against His Shepherd, the man who is His fellow: smite the shepherd, and the sheep shall be scattered (7).",
        "Two parts are cut off, and the third is brought through the fire and refined: “It is my people … The LORD is my God” (8–9)."
      ],
      "key": {
        "ref": "Zechariah 13:1",
        "text": "In that day there shall be a fountain opened to the house of David and to the inhabitants of Jerusalem for sin and for uncleanness."
      },
      "big": "God opens a fountain that never runs dry for sin and for uncleanness. He clears out the idols and the lies, and He struck His own Shepherd, Jesus, so that His people could be refined, not destroyed, and hear Him say, “It is my people.”"
    }
  },
  {
    "id": "zechariah-14",
    "type": "chapter",
    "book": "Zechariah",
    "ch": 14,
    "date": "2026-10-29",
    "title": "Zechariah 14",
    "sub": "King over all the earth",
    "about": "The day of the LORD comes. In Jerusalem's darkest hour the LORD Himself stands on the Mount of Olives, living water flows, and He reigns as King over all the earth.",
    "tags": [
      "The day of the LORD",
      "His coming",
      "Hope",
      "The King",
      "Worship",
      "Holiness"
    ],
    "url": "studies/zechariah-14.html",
    "overview": {
      "where": "Jerusalem, the Mount of Olives, and all the nations of the earth",
      "when": "Undated; probably later in Zechariah's ministry, some time after 520 BC, when the Jews were back from Babylon under Persian rule. It looks far ahead.",
      "people": [
        "zechariah",
        "the-lord",
        "saints",
        "uzziah",
        "heathen",
        "canaanite"
      ],
      "places": [
        "jerusalem",
        "mount-of-olives",
        "judah",
        "azal",
        "geba",
        "rimmon",
        "benjamin",
        "tower-of-hananeel",
        "former-and-hinder-sea",
        "egypt"
      ],
      "story": [
        "The day of the LORD comes: all nations gather against Jerusalem, and the city is taken (1–2).",
        "Then the LORD goes out to fight; His feet stand on the Mount of Olives, and it splits to open a great valley of escape (3–5).",
        "A day like no other: not day, nor night, but at evening time it shall be light (6–7).",
        "Living waters flow from Jerusalem east and west, summer and winter, and the LORD is King over all the earth (8–9).",
        "The land is leveled, Jerusalem is lifted up, and it will be safely inhabited with no more utter destruction (10–11).",
        "A plague and panic strike the armies that fought against Jerusalem (12–15).",
        "The nations that are left come up every year to worship the King and keep the Feast of Tabernacles, or have no rain (16–19).",
        "HOLINESS UNTO THE LORD is on the horse bells and every pot, and no trader is left in the house of the LORD (20–21)."
      ],
      "key": {
        "ref": "Zechariah 14:9",
        "text": "And the LORD shall be king over all the earth: in that day shall there be one LORD, and his name one."
      },
      "big": "The darkest hour ends when the LORD Himself steps in. Jesus will come back in person to the Mount of Olives and reign as King over all the earth. At evening time there will be light, enemies will become worshippers, and everything, even the ordinary, will belong to God."
    }
  },
  {
    "id": "malachi-01",
    "type": "chapter",
    "book": "Malachi",
    "ch": 1,
    "date": "2026-10-29",
    "title": "Malachi 1",
    "sub": "I have loved you",
    "about": "God tells His people He loves them. They answer “Wherein?”, then bring Him blind, lame, and sick sacrifices.",
    "tags": [
      "God's love",
      "Jacob and Esau",
      "Honour",
      "Our best",
      "Going through the motions",
      "His name"
    ],
    "url": "studies/malachi-01.html",
    "overview": {
      "where": "Jerusalem and the temple, in the Persian province of Judah; Edom to the south-east",
      "when": "About 430 BC, after the exile, around the time of Nehemiah",
      "people": [
        "the-lord",
        "malachi",
        "jacob",
        "esau",
        "priests",
        "governor",
        "heathen"
      ],
      "places": [
        "israel",
        "edom",
        "temple"
      ],
      "story": [
        "The burden of the LORD by Malachi: “I have loved you.” The people answer, “Wherein hast thou loved us?” (1–2).",
        "God points to Jacob and Esau: Edom's land lies waste and will not be rebuilt, but the LORD will be magnified from the border of Israel (2–5).",
        "A son honours his father. Where is God's honour? The priests despise His name and offer polluted bread on His altar (6–7).",
        "They bring the blind, the lame, and the sick. They would never offer that to the governor. Better to shut the temple doors (8–10).",
        "God's name will be great among the Gentiles, from the rising of the sun to its going down. But the priests sniff, “What a weariness,” and the deceiver keeps his best for himself (11–14)."
      ],
      "key": {
        "ref": "Malachi 1:2",
        "text": "I have loved you, saith the LORD. Yet ye say, Wherein hast thou loved us? Was not Esau Jacob’s brother? saith the LORD: yet I loved Jacob,"
      },
      "big": "God loves His people, and the cross proves it. A man who knows he is loved gives God his first and best, not his leftovers."
    }
  },
  {
    "id": "malachi-02",
    "type": "chapter",
    "book": "Malachi",
    "ch": 2,
    "date": "2026-10-29",
    "title": "Malachi 2",
    "sub": "Keep faith",
    "about": "God rebukes priests who caused many to stumble, and husbands who dealt treacherously with the wife of their youth.",
    "tags": [
      "Leaders",
      "A faithful man",
      "Broken faith",
      "Marriage",
      "After divorce",
      "God's justice"
    ],
    "url": "studies/malachi-02.html",
    "overview": {
      "where": "Jerusalem and the temple, in the Persian province of Judah",
      "when": "About 430 BC, after the exile, around the time of Nehemiah",
      "people": [
        "priests",
        "levi",
        "the-lord",
        "jacob"
      ],
      "places": [
        "judah",
        "israel",
        "jerusalem"
      ],
      "story": [
        "A commandment for the priests: if they won't lay it to heart, God will curse their blessings and spread on their faces the dung of their feasts (1–4).",
        "God's covenant with Levi was life and peace. The law of truth was in his mouth, and he turned many from iniquity (5–7).",
        "These priests have left the way, caused many to stumble, and been partial in the law (8–9).",
        "One Father, one God, yet Judah deals treacherously and marries the daughter of a strange god (10–12).",
        "They weep at the altar, but God won't accept their offerings, because He witnessed their covenant with the wife of their youth. He hates putting away (13–16).",
        "They weary the LORD by saying evil is good, and asking, “Where is the God of judgment?” (17)."
      ],
      "key": {
        "ref": "Malachi 2:10",
        "text": "Have we not all one father? hath not one God created us? why do we deal treacherously every man against his brother, by profaning the covenant of our fathers?"
      },
      "big": "God keeps His covenants and expects His people to keep theirs, with Him, with each other, and in marriage. Where faith has been broken, He forgives those who confess and helps them keep faith from here."
    }
  },
  {
    "id": "malachi-03",
    "type": "chapter",
    "book": "Malachi",
    "ch": 3,
    "date": "2026-10-29",
    "title": "Malachi 3",
    "sub": "I change not",
    "about": "God promises a messenger and then the Lord Himself, coming like a refiner's fire, and calls His people to return.",
    "tags": [
      "The messenger",
      "The refiner",
      "God never changes",
      "Coming back",
      "Giving",
      "Remembered"
    ],
    "url": "studies/malachi-03.html",
    "overview": {
      "where": "Jerusalem and the temple, in the Persian province of Judah",
      "when": "About 430 BC, after the exile, around the time of Nehemiah",
      "people": [
        "the-lord",
        "my-messenger",
        "messenger-of-the-covenant",
        "john-the-baptist",
        "levi",
        "jacob"
      ],
      "places": [
        "temple",
        "judah",
        "jerusalem"
      ],
      "story": [
        "“Behold, I will send my messenger.” Then the Lord will suddenly come to His temple, the messenger of the covenant (1). Jesus said the messenger was John the Baptist.",
        "Who can stand when He appears? He is like a refiner's fire and fullers' sope. He will purify the sons of Levi (2–4).",
        "He will be a swift witness against sorcerers, adulterers, liars, and those who cheat workers and crush the widow, the fatherless, and the stranger (5).",
        "“I am the LORD, I change not.” Return unto Me, and I will return unto you. But they have robbed God in tithes and offerings (6–9).",
        "Bring the tithes into the storehouse, and God will open the windows of heaven and rebuke the devourer (10–12).",
        "Some say, “It is vain to serve God.” Those who fear the LORD speak often to one another, and God writes a book of remembrance: they shall be His jewels (13–18)."
      ],
      "key": {
        "ref": "Malachi 3:6",
        "text": "For I am the LORD, I change not; therefore ye sons of Jacob are not consumed."
      },
      "big": "God never changes. That is why His people are not consumed. He purifies those He loves, calls them back, and remembers every man who fears Him."
    }
  },
  {
    "id": "malachi-04",
    "type": "chapter",
    "book": "Malachi",
    "ch": 4,
    "date": "2026-10-29",
    "title": "Malachi 4",
    "sub": "The Sun of righteousness",
    "about": "The last chapter of the Old Testament: the day of the LORD, the Sun of righteousness with healing in His wings, and Elijah sent first.",
    "tags": [
      "The day",
      "Healing",
      "Remember",
      "Elijah",
      "Fathers and children",
      "The curse"
    ],
    "url": "studies/malachi-04.html",
    "overview": {
      "where": "Spoken to Judah and Jerusalem; looking back to Horeb and ahead to the coming day",
      "when": "About 430 BC, after the exile. About four hundred years of silence follow, until John the Baptist",
      "people": [
        "the-lord",
        "moses",
        "elijah",
        "john-the-baptist"
      ],
      "places": [
        "horeb",
        "israel"
      ],
      "story": [
        "The day is coming that will burn like an oven. The proud and the wicked will be stubble, with neither root nor branch (1).",
        "But to those who fear His name, the Sun of righteousness will rise with healing in His wings, and they will go out like calves from the stall (2–3).",
        "Remember the law of Moses, given at Horeb (4).",
        "God will send Elijah the prophet before the great and dreadful day of the LORD, to turn the hearts of fathers and children to each other (5–6). Jesus said John the Baptist was that Elias (Matthew 11:14).",
        "The Old Testament ends with the word “curse.” After about four hundred quiet years, John the Baptist comes preaching, and points to the Lamb of God (Matthew 3, John 1)."
      ],
      "key": {
        "ref": "Malachi 4:2",
        "text": "But unto you that fear my name shall the Sun of righteousness arise with healing in his wings; and ye shall go forth, and grow up as calves of the stall."
      },
      "big": "God will set all things right. For those who fear Him, that day is a sunrise. The Old Testament ends with a curse and a promise, and Jesus, who took the curse on Himself, keeps the promise."
    }
  },
  {
    "id": "matthew-01",
    "type": "chapter",
    "book": "Matthew",
    "ch": 1,
    "date": "2026-10-29",
    "title": "Matthew 1",
    "sub": "The King's family tree",
    "about": "Matthew opens with Jesus' family line, sinners and outsiders included, and an angel tells Joseph the name that says what Jesus came to do.",
    "tags": [
      "Who Jesus is",
      "God's promises",
      "Grace",
      "A godly man",
      "Salvation",
      "God with us"
    ],
    "url": "studies/matthew-01.html",
    "overview": {
      "where": "Bethlehem in Judaea, through Joseph's family line back to Abraham",
      "when": "About 5 BC, just before Jesus is born",
      "people": [
        "jesus",
        "abraham",
        "david",
        "thamar",
        "rachab",
        "ruth",
        "bathsheba",
        "manasses",
        "joseph",
        "mary"
      ],
      "places": [
        "babylon"
      ],
      "story": [
        "“The son of David, the son of Abraham”: Matthew traces Jesus' family line from Abraham through King David (1–6).",
        "The line runs through good kings and wicked ones, down to the carrying away into Babylon, and on to Joseph, the husband of Mary (7–16).",
        "Three sets of fourteen generations: from Abraham to David, from David to Babylon, and from Babylon to Christ (17).",
        "Mary, espoused to Joseph, is found with child of the Holy Ghost. Joseph, a just man, plans to put her away quietly (18–19).",
        "An angel tells him in a dream: “thou shalt call his name JESUS: for he shall save his people from their sins” (20–21).",
        "It fulfils Isaiah: a virgin's son, called Emmanuel, “God with us.” Joseph obeys, and names the child JESUS (22–25)."
      ],
      "key": {
        "ref": "Matthew 1:21",
        "text": "And she shall bring forth a son, and thou shalt call his name JESUS: for he shall save his people from their sins."
      },
      "big": "Jesus is the promised King, born into real history and a family full of sinners and outsiders. His name says why He came: to save His people from their sins. In Him, God is with us."
    }
  },
  {
    "id": "matthew-02",
    "type": "chapter",
    "book": "Matthew",
    "ch": 2,
    "date": "2026-10-29",
    "title": "Matthew 2",
    "sub": "Born King of the Jews",
    "about": "Wise men travel far to worship the young King, Herod plots to kill Him, and God guards His Son all the way to Egypt and home to Nazareth.",
    "tags": [
      "Seeking Jesus",
      "Worship",
      "God's word",
      "God's protection",
      "Grief",
      "Obedience"
    ],
    "url": "studies/matthew-02.html",
    "overview": {
      "where": "Jerusalem and Bethlehem in Judaea, then Egypt, then Nazareth in Galilee",
      "when": "About 5 to 4 BC, in the last days of Herod the king",
      "people": [
        "jesus",
        "herod-the-great",
        "wise-men",
        "chief-priests",
        "scribes",
        "joseph",
        "mary",
        "archelaus",
        "rachel"
      ],
      "places": [
        "bethlehem",
        "jerusalem",
        "judaea",
        "egypt",
        "ramah",
        "galilee",
        "nazareth"
      ],
      "story": [
        "Wise men from the east come to Jerusalem asking, “Where is he that is born King of the Jews?” Herod is troubled (1–3).",
        "The chief priests and scribes know the answer from Micah: Bethlehem. Herod sends the wise men there, pretending he wants to worship too (4–8).",
        "The star leads them to the house. They fall down, worship the young child, and give gold, frankincense, and myrrh, then go home another way (9–12).",
        "Warned in a dream, Joseph takes the child and His mother by night into Egypt: “Out of Egypt have I called my son” (13–15).",
        "Herod, furious, kills the little boys of Bethlehem, and Rachel weeps for her children, as Jeremiah said (16–18).",
        "After Herod dies, God brings the family back. Avoiding Archelaus in Judaea, they settle in Nazareth: “He shall be called a Nazarene” (19–23)."
      ],
      "key": {
        "ref": "Matthew 2:11",
        "text": "And when they were come into the house, they saw the young child with Mary his mother, and fell down, and worshipped him: and when they had opened their treasures, they presented unto him gifts; gold, and frankincense, and myrrh."
      },
      "big": "Outsiders came a long way to worship Jesus while the insiders stayed home. No king could touch God's Son before His time. God keeps His word, sees the suffering of the innocent, and leads those who obey Him one step at a time."
    }
  },
  {
    "id": "matthew-03",
    "type": "chapter",
    "book": "Matthew",
    "ch": 3,
    "date": "2026-10-29",
    "title": "Matthew 3",
    "sub": "The voice in the wilderness",
    "about": "John the Baptist calls the nation to repent, warns the religious leaders, and baptizes Jesus, as the Spirit descends and the Father speaks from heaven.",
    "tags": [
      "Repentance",
      "Fruit",
      "Religious pride",
      "Who Jesus is",
      "Baptism",
      "The Father's love"
    ],
    "url": "studies/matthew-03.html",
    "overview": {
      "where": "The wilderness of Judaea and the Jordan River",
      "when": "About AD 27, some thirty years after Jesus' birth",
      "people": [
        "john-the-baptist",
        "jesus",
        "isaiah",
        "pharisees",
        "sadducees",
        "abraham",
        "holy-spirit"
      ],
      "places": [
        "wilderness",
        "judaea",
        "jerusalem",
        "jordan",
        "galilee"
      ],
      "story": [
        "John the Baptist preaches in the wilderness of Judaea: “Repent ye: for the kingdom of heaven is at hand,” the voice Isaiah foretold (1–3).",
        "Dressed in camel's hair like Elijah, he baptizes crowds from Jerusalem and Judaea in the Jordan as they confess their sins (4–6).",
        "He calls the Pharisees and Sadducees a generation of vipers: bring forth fruits meet for repentance, and don't lean on Abraham (7–10).",
        "One mightier is coming, who will baptize with the Holy Ghost and with fire, and separate the wheat from the chaff (11–12).",
        "Jesus comes to be baptized. John objects, but Jesus says, “thus it becometh us to fulfil all righteousness” (13–15).",
        "The heavens open, the Spirit descends like a dove, and the Father says, “This is my beloved Son, in whom I am well pleased” (16–17)."
      ],
      "key": {
        "ref": "Matthew 3:17",
        "text": "And lo a voice from heaven, saying, This is my beloved Son, in whom I am well pleased."
      },
      "big": "Repentance means turning from sin to God, and a turned heart shows its fruit. No family line or religion can save. Jesus, the mightier One, stood in the sinners' place, and the Father declared His love for His Son."
    }
  },
  {
    "id": "matthew-04",
    "type": "chapter",
    "book": "Matthew",
    "ch": 4,
    "date": "2026-10-29",
    "title": "Matthew 4",
    "sub": "Tested, then sent",
    "about": "Jesus answers the devil's three temptations with the Word of God, brings light to dark Galilee, and calls four fishermen to follow Him.",
    "tags": [
      "Temptation",
      "The Word of God",
      "Light and darkness",
      "Repentance",
      "Following Jesus",
      "Fulfilled prophecy"
    ],
    "url": "studies/matthew-04.html",
    "overview": {
      "where": "The wilderness of Judaea and the temple in Jerusalem, then Capernaum by the Sea of Galilee",
      "when": "Right after Jesus' baptism; then, some months later, when John the Baptist was put in prison (about A.D. 27–28)",
      "people": [
        "jesus",
        "holy-spirit",
        "satan",
        "angels",
        "john-the-baptist",
        "isaiah",
        "simon-peter",
        "andrew",
        "sons-of-zebedee"
      ],
      "places": [
        "wilderness",
        "pinnacle-of-the-temple",
        "nazareth",
        "capernaum",
        "zabulon",
        "nephthalim",
        "sea-of-galilee",
        "galilee",
        "syria",
        "decapolis",
        "jerusalem",
        "judaea",
        "beyond-jordan"
      ],
      "story": [
        "The Spirit leads Jesus into the wilderness. After forty days without food, the devil tells Him to turn stones into bread. Jesus answers, “It is written” (1–4).",
        "On the pinnacle of the temple the devil quotes a psalm, and on a high mountain he offers all the kingdoms of the world for one act of worship. Jesus answers from Scripture each time and sends him away, and angels minister to Him (5–11).",
        "When John is put in prison, Jesus leaves Nazareth for Capernaum. Isaiah's promise comes true: the people in darkness see a great light. Jesus begins to preach, “Repent” (12–17).",
        "By the Sea of Galilee, Jesus calls Simon Peter, Andrew, James and John: “Follow me, and I will make you fishers of men.” They leave their nets at once (18–22).",
        "Jesus teaches, preaches and heals all through Galilee, and great crowds follow Him from every direction (23–25)."
      ],
      "key": {
        "ref": "Matthew 4:4",
        "text": "But he answered and said, It is written, Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God."
      },
      "big": "Jesus beat temptation where we fall, with the Word of God, and He was tempted without sin. He brings light to the darkest places, and He calls ordinary men to follow Him and makes them into something new."
    }
  },
  {
    "id": "matthew-05",
    "type": "chapter",
    "book": "Matthew",
    "ch": 5,
    "date": "2026-10-29",
    "title": "Matthew 5",
    "sub": "The Sermon on the Mount",
    "about": "On a hillside by the lake, Jesus tells who is truly blessed, calls His people salt and light, and shows that God's law reaches all the way down into the heart.",
    "tags": [
      "Blessed",
      "Humility",
      "Salt and light",
      "The heart",
      "Anger and lust",
      "Making peace",
      "Loving enemies"
    ],
    "url": "studies/matthew-05.html",
    "overview": {
      "where": "A hillside in Galilee, near Capernaum on the Sea of Galilee",
      "when": "Early in Jesus' Galilean ministry, soon after He called His first disciples (about A.D. 28)",
      "people": [
        "jesus",
        "disciples",
        "the-father",
        "scribes",
        "pharisees",
        "publicans"
      ],
      "places": [
        "the-mountain",
        "galilee",
        "jerusalem",
        "heaven",
        "hell"
      ],
      "story": [
        "Jesus goes up a mountain, sits down, and teaches His disciples. He calls blessed the poor in spirit, the mourners, the meek, the hungry for righteousness, the merciful, the pure in heart, the peacemakers, and the persecuted (1–12).",
        "His people are the salt of the earth and the light of the world. Their good works should shine so that men glorify the Father (13–16).",
        "Jesus came not to destroy the law and the prophets but to fulfil them, and the righteousness that enters the kingdom must exceed that of the scribes and Pharisees (17–20).",
        "Six times He says, “Ye have heard… But I say unto you”: anger is the root of murder, lust is adultery in the heart, marriage is meant to last, a man's plain word should be good, and he should not take revenge (21–42).",
        "Love your enemies and pray for them, as the Father sends sun and rain on the evil and the good. “Be ye therefore perfect” (43–48)."
      ],
      "key": {
        "ref": "Matthew 5:3",
        "text": "Blessed are the poor in spirit: for theirs is the kingdom of heaven."
      },
      "big": "God's blessing rests on men who know they need Him. Jesus looks past the outside to the heart, and no man's own righteousness is enough; the righteousness that saves is God's gift through faith in Christ, and it shows in mercy, honesty, peacemaking, and love for enemies."
    }
  },
  {
    "id": "matthew-06",
    "type": "chapter",
    "book": "Matthew",
    "ch": 6,
    "date": "2026-10-29",
    "title": "Matthew 6",
    "sub": "Thy Father which seeth in secret",
    "about": "Jesus teaches us to give, pray, and fast for God's eyes alone, to store treasure in heaven, and to stop worrying about tomorrow.",
    "tags": [
      "Motives",
      "Prayer",
      "Temptation",
      "Forgiveness",
      "Treasure",
      "Worry"
    ],
    "url": "studies/matthew-06.html",
    "overview": {
      "where": "On a mountain in Galilee near Capernaum, in the middle of the Sermon on the Mount",
      "when": "Early in Jesus' ministry, about AD 28",
      "people": [
        "jesus",
        "disciples",
        "the-father",
        "hypocrites",
        "heathen",
        "gentiles",
        "solomon"
      ],
      "places": [
        "the-mountain",
        "capernaum",
        "synagogue",
        "closet",
        "heaven"
      ],
      "story": [
        "Don't give, pray, or fast to be seen by men. Their applause is the whole reward; the Father who sees in secret rewards openly (1–6, 16–18).",
        "Pray simply, without vain repetitions. Jesus gives the pattern: “Our Father which art in heaven” (7–13).",
        "Forgive others, as we ask God to forgive us (14–15).",
        "Lay up treasure in heaven, keep a single eye, and serve one master: “Ye cannot serve God and mammon” (19–24).",
        "Take no thought for food or clothes. The Father feeds the birds and dresses the lilies. Seek His kingdom first, and live one day at a time (25–34)."
      ],
      "big": "The Christian life is lived before the Father's eyes. He sees what's done in secret, forgives the forgiving, and knows what we need, so we can stop performing, stop hoarding, and stop worrying.",
      "key": {
        "ref": "Matthew 6:33",
        "text": "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you."
      }
    }
  },
  {
    "id": "matthew-07",
    "type": "chapter",
    "book": "Matthew",
    "ch": 7,
    "date": "2026-10-29",
    "title": "Matthew 7",
    "sub": "Upon a rock",
    "about": "Jesus ends the Sermon on the Mount with a choice: two gates, two trees, two kinds of followers, and two houses in the same storm.",
    "tags": [
      "Judging",
      "Prayer",
      "The golden rule",
      "The narrow way",
      "False prophets",
      "Foundation"
    ],
    "url": "studies/matthew-07.html",
    "overview": {
      "where": "The mountain near Capernaum, at the end of the Sermon on the Mount",
      "when": "Early in Jesus' ministry, about AD 28",
      "people": [
        "jesus",
        "the-father",
        "hypocrites",
        "false-prophets",
        "scribes"
      ],
      "places": [
        "the-mountain",
        "capernaum",
        "heaven"
      ],
      "story": [
        "Judge not: get the beam out of your own eye before the mote in your brother's. Don't cast pearls before swine (1–6).",
        "Ask, seek, knock. If sinful fathers give good gifts, how much more the Father in heaven. Do to others what you'd want done to you (7–12).",
        "Enter the strait gate. Many take the broad way to destruction; few find the narrow way to life (13–14).",
        "Beware of false prophets; you'll know them by their fruits. Not everyone who says “Lord, Lord” enters; to some He'll say, “I never knew you” (15–23).",
        "The wise man hears and does, and his house on the rock stands; the foolish man's house on the sand falls. The people are astonished at His authority (24–29)."
      ],
      "big": "Hearing Jesus isn't enough. The way to life is narrow and runs through Him alone, and the life built on Him, hearing and doing His words, stands when the storm comes.",
      "key": {
        "ref": "Matthew 7:24",
        "text": "Therefore whosoever heareth these sayings of mine, and doeth them, I will liken him unto a wise man, which built his house upon a rock:"
      }
    }
  },
  {
    "id": "matthew-08",
    "type": "chapter",
    "book": "Matthew",
    "ch": 8,
    "date": "2026-10-29",
    "title": "Matthew 8",
    "sub": "What manner of man is this?",
    "about": "Jesus comes down the mountain and shows His authority over leprosy, sickness, the wind and the sea, and demons.",
    "tags": [
      "Compassion",
      "Faith",
      "Prophecy fulfilled",
      "Following",
      "Storms",
      "Freedom"
    ],
    "url": "studies/matthew-08.html",
    "overview": {
      "where": "Capernaum, the Sea of Galilee, and the country of the Gergesenes on the east shore",
      "when": "Early in Jesus' ministry, about AD 28",
      "people": [
        "jesus",
        "the-leper",
        "centurion",
        "simon-peter",
        "simons-wifes-mother",
        "isaiah",
        "scribes",
        "disciples",
        "abraham",
        "isaac",
        "jacob",
        "moses"
      ],
      "places": [
        "the-mountain",
        "capernaum",
        "israel",
        "gergesenes",
        "tombs"
      ],
      "story": [
        "Coming down the mountain, Jesus touches a leper and makes him clean (1–4).",
        "A Roman centurion asks Jesus only to speak the word. Jesus marvels at his faith, and the servant is healed that same hour (5–13).",
        "Jesus heals Peter's wife's mother and many more that evening, fulfilling Isaiah: “Himself took our infirmities” (14–17).",
        "Two would-be followers learn the cost: the Son of man has nowhere to lay His head, and He comes first (18–22).",
        "Jesus sleeps through a great tempest, then rebukes the wind and the sea: “What manner of man is this” (23–27).",
        "Among the tombs of the Gergesenes, He sends the devils out of two men into a herd of swine, and the city begs Him to leave (28–34)."
      ],
      "big": "Jesus has authority over sickness, nature, and demons, and He uses it with compassion. No one is too unclean, too foreign, or too far gone for His word and His touch.",
      "key": {
        "ref": "Matthew 8:27",
        "text": "But the men marvelled, saying, What manner of man is this, that even the winds and the sea obey him!"
      }
    }
  },
  {
    "id": "matthew-09",
    "type": "chapter",
    "book": "Matthew",
    "ch": 9,
    "date": "2026-10-29",
    "title": "Matthew 9",
    "sub": "The Physician",
    "about": "Jesus forgives a paralyzed man, calls a tax collector, eats with sinners, raises a dead girl, and looks at the crowds with compassion.",
    "tags": [
      "Forgiveness",
      "Mercy",
      "New life",
      "Faith",
      "Compassion",
      "Prayer"
    ],
    "url": "studies/matthew-09.html",
    "overview": {
      "where": "Capernaum, Jesus' own city on the Sea of Galilee, then the towns and villages of Galilee",
      "when": "Early in Jesus' work in Galilee, about AD 28",
      "people": [
        "jesus",
        "scribes",
        "levi-matthew",
        "publicans",
        "sinners",
        "pharisees",
        "disciples",
        "john-the-baptist",
        "jairus",
        "woman-with-issue"
      ],
      "places": [
        "capernaum",
        "galilee",
        "israel"
      ],
      "story": [
        "Back in Capernaum, friends carry a paralyzed man to Jesus. He forgives the man's sins, then proves His authority by telling him to walk (1–8).",
        "Jesus calls Matthew from his tax booth and eats with publicans and sinners: “They that be whole need not a physician” (9–13).",
        "Asked why His disciples don't fast, He calls Himself the bridegroom and says new wine needs new bottles (14–17).",
        "A ruler's daughter dies. On the way, a woman sick for twelve years touches His hem and is made whole. Jesus takes the girl by the hand, and she arises (18–26).",
        "Two blind men call Him the Son of David and see; a dumb man speaks. The crowds marvel, but the Pharisees blame the prince of the devils (27–34).",
        "Moved with compassion for people scattered like sheep with no shepherd, Jesus tells His disciples to pray for labourers (35–38)."
      ],
      "key": {
        "ref": "Matthew 9:12",
        "text": "But when Jesus heard that, he said unto them, They that be whole need not a physician, but they that are sick."
      },
      "big": "Jesus came for the sick, not the healthy. He has authority to forgive every sin, He makes new men instead of patching old ones, and He looks at hurting people with compassion."
    }
  },
  {
    "id": "matthew-10",
    "type": "chapter",
    "book": "Matthew",
    "ch": 10,
    "date": "2026-10-29",
    "title": "Matthew 10",
    "sub": "Sent out",
    "about": "Jesus names twelve ordinary men, gives them His power, and sends them out like sheep among wolves, with a Father who counts every hair.",
    "tags": [
      "Calling",
      "Grace",
      "Wisdom",
      "Fear",
      "Confession",
      "The cross"
    ],
    "url": "studies/matthew-10.html",
    "overview": {
      "where": "Galilee, as Jesus sends the twelve out to the towns of Israel",
      "when": "Right after Matthew 9, in Jesus' work in Galilee, about AD 28",
      "people": [
        "jesus",
        "the-twelve",
        "simon-peter",
        "andrew",
        "sons-of-zebedee",
        "philip",
        "bartholomew",
        "thomas",
        "levi-matthew",
        "james-son-of-alphaeus",
        "judas-not-iscariot",
        "simon-the-zealot",
        "judas-iscariot",
        "samaritans"
      ],
      "places": [
        "israel",
        "sodom-and-gomorrah"
      ],
      "story": [
        "Jesus gives His twelve disciples power over unclean spirits and every sickness. Their names: fishermen, a publican, a zealot, and Judas Iscariot (1–4).",
        "He sends them to the lost sheep of Israel to preach and heal: “freely ye have received, freely give.” They travel light and offer peace to every house (5–15).",
        "Sheep among wolves: they will face councils, scourging, and divided families, but the Spirit of their Father will give them words, and he that endureth to the end shall be saved (16–25).",
        "Fear not: not one sparrow falls without the Father, and the hairs of their heads are all numbered (26–31).",
        "Confess Him before men. He brings a sword that can divide a home. Take up the cross, lose your life for Him and find it. Not even a cup of cold water goes unrewarded (32–42)."
      ],
      "key": {
        "ref": "Matthew 10:31",
        "text": "Fear ye not therefore, ye are of more value than many sparrows."
      },
      "big": "Jesus sends ordinary men out with His power and His message. It will cost them, but the Father watches over every hair, and whoever loses his life for Christ finds it."
    }
  },
  {
    "id": "matthew-11",
    "type": "chapter",
    "book": "Matthew",
    "ch": 11,
    "date": "2026-10-29",
    "title": "Matthew 11",
    "sub": "Come unto me",
    "about": "John doubts in Herod's prison, Jesus defends him, the crowds and three favored towns won't repent, and Jesus invites every weary man to come and find rest.",
    "tags": [
      "Doubt",
      "John the Baptist",
      "Repentance",
      "Humility",
      "Invitation",
      "Rest"
    ],
    "url": "studies/matthew-11.html",
    "overview": {
      "where": "The towns of Galilee around the Sea of Galilee; John in Herod's prison",
      "when": "About A.D. 28, during Jesus' work in Galilee",
      "people": [
        "jesus",
        "john-the-baptist",
        "disciples",
        "elijah",
        "publicans",
        "sinners",
        "the-father"
      ],
      "places": [
        "capernaum",
        "bethsaida",
        "chorazin",
        "tyre-and-zidon",
        "sodom-and-gomorrah",
        "wilderness"
      ],
      "story": [
        "Jesus finishes instructing the twelve and goes on preaching in the cities of Galilee (1).",
        "John, in prison, sends two disciples to ask, “Art thou he that should come?” Jesus answers with what they see: the blind see, the lame walk, the poor hear the gospel (2–6).",
        "Jesus tells the crowds John is more than a prophet: the messenger Malachi promised, the Elias who was to come (7–15).",
        "This generation is like children who won't play: John was too strict for them, and Jesus, the friend of publicans and sinners, too loose (16–19).",
        "Jesus grieves over Chorazin, Bethsaida, and Capernaum, which saw His mighty works and repented not (20–24).",
        "He thanks the Father for revealing these things to babes, and invites all who labour and are heavy laden to come to Him for rest (25–30)."
      ],
      "key": {
        "ref": "Matthew 11:28",
        "text": "Come unto me, all ye that labour and are heavy laden, and I will give you rest."
      },
      "big": "Jesus meets honest doubt with evidence, not scolding. Seeing much and not repenting is dangerous, but the door is open to every humble, weary man: come to Him, take His yoke, and find rest for your soul."
    }
  },
  {
    "id": "matthew-12",
    "type": "chapter",
    "book": "Matthew",
    "ch": 12,
    "date": "2026-10-29",
    "title": "Matthew 12",
    "sub": "A greater is here",
    "about": "The Pharisees fight Jesus over the sabbath and say His power is from the devil. He shows Himself the merciful Lord of the sabbath, the gentle Servant, the One stronger than Satan, and the head of a new family.",
    "tags": [
      "Mercy",
      "The sabbath",
      "Gentleness",
      "Spiritual warfare",
      "Forgiveness",
      "Recovery",
      "Family"
    ],
    "url": "studies/matthew-12.html",
    "overview": {
      "where": "The grainfields and a synagogue in Galilee",
      "when": "About A.D. 28, during Jesus' work in Galilee",
      "people": [
        "jesus",
        "disciples",
        "pharisees",
        "scribes",
        "david",
        "isaiah",
        "withered-hand",
        "satan",
        "beelzebub",
        "holy-spirit",
        "jonah",
        "solomon",
        "queen-of-the-south",
        "mary",
        "brethren",
        "the-father"
      ],
      "places": [
        "synagogue",
        "temple",
        "house-of-god",
        "nineveh"
      ],
      "story": [
        "The disciples pluck grain on the sabbath. Jesus answers the Pharisees with David and the shewbread, the priests in the temple, and Hosea: “I will have mercy, and not sacrifice.” He is Lord of the sabbath (1–8).",
        "In the synagogue Jesus heals a man's withered hand on the sabbath. The Pharisees go out and plot to destroy Him (9–14).",
        "Jesus withdraws and heals them all quietly, fulfilling Isaiah: “A bruised reed shall he not break” (15–21).",
        "He heals a blind and dumb man held by a devil. The Pharisees say He works by Beelzebub. Jesus answers: a divided kingdom can't stand, and He has bound the strong man (22–30).",
        "All manner of sin can be forgiven, but not blasphemy against the Holy Ghost. A tree is known by its fruit, and words show the heart (31–37).",
        "Asked for a sign, Jesus gives the sign of Jonas. He warns of the house swept and left empty, and names as His family whoever does the will of His Father (38–50)."
      ],
      "key": {
        "ref": "Matthew 12:20",
        "text": "A bruised reed shall he not break, and smoking flax shall he not quench, till he send forth judgment unto victory."
      },
      "big": "Jesus cares more for mercy than for rule-keeping, treats the broken gently, and is stronger than Satan. Any sin can be forgiven to the man who comes, and an emptied life must be filled with Christ. Whoever does the Father's will is family."
    }
  },
  {
    "id": "matthew-13",
    "type": "chapter",
    "book": "Matthew",
    "ch": 13,
    "date": "2026-10-29",
    "title": "Matthew 13",
    "sub": "Treasure hid in a field",
    "about": "From a boat by the lake, Jesus tells seven stories of the kingdom of heaven, from a sower's seed to a net full of fish. Then His hometown can't see past the carpenter's son.",
    "tags": [
      "Hearing",
      "Parables",
      "Patience",
      "Small beginnings",
      "Treasure",
      "Unbelief"
    ],
    "url": "studies/matthew-13.html",
    "overview": {
      "where": "By the Sea of Galilee, most likely near Capernaum, then Nazareth, His own country",
      "when": "The same day as Matthew 12, in Jesus' work in Galilee, about AD 28",
      "people": [
        "jesus",
        "disciples",
        "isaiah",
        "mary",
        "brothers-of-jesus"
      ],
      "places": [
        "sea-of-galilee",
        "own-country",
        "synagogue"
      ],
      "story": [
        "From a boat, Jesus tells the crowd of a sower whose seed falls on the way side, stony places, thorns, and good ground. He tells His disciples why He speaks in parables, as Isaiah foretold, and explains the four kinds of hearers (1–23).",
        "An enemy sows tares among the wheat, and the owner lets both grow until the harvest. A mustard seed becomes a tree, and a little leaven works through the whole batch (24–35).",
        "In the house Jesus explains the tares: the field is the world, the enemy is the devil, and the angels will sort at the end. Then three more: a treasure hid in a field, a pearl of great price, and a net that is sorted on the shore (36–52).",
        "In His own country the people are astonished but offended: “Is not this the carpenter's son?” He did not many mighty works there because of their unbelief (53–58)."
      ],
      "key": {
        "ref": "Matthew 13:44",
        "text": "Again, the kingdom of heaven is like unto treasure hid in a field; the which when a man hath found, he hideth, and for joy thereof goeth and selleth all that he hath, and buyeth that field."
      },
      "big": "The kingdom of heaven starts small and grows quietly, good and evil grow side by side until God sorts them at the end, and Christ is worth more than everything a man owns. The word bears fruit in the heart that hears it and takes it in."
    }
  },
  {
    "id": "matthew-14",
    "type": "chapter",
    "book": "Matthew",
    "ch": 14,
    "date": "2026-10-29",
    "title": "Matthew 14",
    "sub": "It is I; be not afraid",
    "about": "Herod's foolish oath costs John the Baptist his life. Jesus feeds five thousand men from five loaves, walks on a stormy sea, and catches Peter when he sinks.",
    "tags": [
      "Conscience",
      "Fear of man",
      "Grief",
      "Provision",
      "Faith",
      "Rescue"
    ],
    "url": "studies/matthew-14.html",
    "overview": {
      "where": "Herod Antipas' court; a lonely place near Bethsaida; the Sea of Galilee at night; the land of Gennesaret",
      "when": "About AD 29, in the spring, with the Passover near (John 6:4), soon after John the Baptist was killed",
      "people": [
        "jesus",
        "herod-antipas",
        "herodias",
        "daughter-of-herodias",
        "philip-herodias-husband",
        "john-the-baptist",
        "disciples",
        "simon-peter"
      ],
      "places": [
        "desert-place",
        "bethsaida",
        "sea-of-galilee",
        "gennesaret"
      ],
      "story": [
        "Herod the tetrarch hears of Jesus and fears John the Baptist has risen. Herod had jailed John for saying he could not have his brother Philip's wife. At Herod's birthday, a rash oath and a girl's request cost John his head (1–12).",
        "Jesus withdraws by ship to a desert place, but the crowds follow on foot. Moved with compassion, He heals them, then feeds about five thousand men, besides women and children, with five loaves and two fishes, and twelve baskets are left over (13–21).",
        "He sends the disciples across the lake and prays alone on a mountain. In the fourth watch He comes walking on the sea: “It is I; be not afraid.” Peter walks on the water, sinks when he sees the wind, and cries, “Lord, save me.” Jesus catches him, and they worship Him as the Son of God (22–33).",
        "At Gennesaret the sick are brought from all around, and as many as touch the hem of His garment are made perfectly whole (34–36)."
      ],
      "key": {
        "ref": "Matthew 14:27",
        "text": "But straightway Jesus spake unto them, saying, Be of good cheer; it is I; be not afraid."
      },
      "big": "A king who feared men killed a prophet, but Jesus, moved with compassion, feeds the hungry from almost nothing and walks on the storm to reach His men. When a sinking man cries out to Him, He reaches out immediately."
    }
  },
  {
    "id": "matthew-15",
    "type": "chapter",
    "book": "Matthew",
    "ch": 15,
    "date": "2026-10-29",
    "title": "Matthew 15",
    "sub": "From the heart",
    "about": "Jesus exposes religion that washes hands but leaves hearts far from God, then a Gentile mother's humble, stubborn faith wins her daughter's healing, and four thousand are fed.",
    "tags": [
      "God's word",
      "The heart",
      "Prayer",
      "Faith",
      "Grace for outsiders",
      "Compassion"
    ],
    "url": "studies/matthew-15.html",
    "overview": {
      "where": "By the Sea of Galilee, then north in the coasts of Tyre and Sidon, then back to the lake and across to Magdala",
      "when": "Late in Jesus' work in Galilee, about AD 29",
      "people": [
        "jesus",
        "scribes",
        "pharisees",
        "disciples",
        "simon-peter",
        "isaiah",
        "woman-of-canaan"
      ],
      "places": [
        "jerusalem",
        "tyre-and-zidon",
        "sea-of-galilee",
        "magdala"
      ],
      "story": [
        "Scribes and Pharisees from Jerusalem complain that the disciples eat with unwashed hands, against the tradition of the elders (1–2).",
        "Jesus shows how their tradition cancels God's command to honour father and mother, and quotes Esaias: “their heart is far from me” (3–9).",
        "What goes into the mouth doesn't defile a man; what comes out of the heart does. The Pharisees are blind leaders of the blind (10–20).",
        "In the coasts of Tyre and Sidon a woman of Canaan begs mercy for her daughter. Met with silence and hard words, she asks for the crumbs (21–27).",
        "“O woman, great is thy faith”: her daughter is healed from that very hour (28).",
        "By the Sea of Galilee He heals the lame, blind, dumb and maimed, and the crowds glorify the God of Israel (29–31).",
        "Moved with compassion, He feeds four thousand men, besides women and children, with seven loaves and a few fishes; seven baskets are left (32–39)."
      ],
      "key": {
        "ref": "Matthew 15:18",
        "text": "But those things which proceed out of the mouth come forth from the heart; and they defile the man."
      },
      "big": "God looks at the heart. Rules and rituals can't make a man clean, because sin comes from inside, and only God can give a new heart. That mercy is open to outsiders too: whoever comes to Jesus humbly, asking for mercy, finds Him more than willing."
    }
  },
  {
    "id": "matthew-16",
    "type": "chapter",
    "book": "Matthew",
    "ch": 16,
    "date": "2026-10-29",
    "title": "Matthew 16",
    "sub": "Thou art the Christ",
    "about": "Far north at Caesarea Philippi, Peter confesses Jesus as the Christ, the Son of the living God, and Jesus begins to show His disciples the cross ahead and what it means to follow Him.",
    "tags": [
      "Who Jesus is",
      "False teaching",
      "The church",
      "The cross",
      "Following Jesus",
      "The soul"
    ],
    "url": "studies/matthew-16.html",
    "overview": {
      "where": "By the Sea of Galilee, then north to the coasts of Caesarea Philippi, below Mount Hermon",
      "when": "Late in Jesus' work in Galilee, about AD 29, as He turns toward Jerusalem and the cross",
      "people": [
        "jesus",
        "pharisees",
        "sadducees",
        "disciples",
        "simon-peter",
        "john-the-baptist",
        "elijah",
        "jeremiah",
        "jonah",
        "satan"
      ],
      "places": [
        "caesarea-philippi",
        "jerusalem"
      ],
      "story": [
        "Pharisees and Sadducees demand a sign from heaven. They can read the sky but not the times; they'll get only the sign of Jonas (1–4).",
        "The disciples forget bread and misunderstand His warning. Jesus reminds them of the five thousand and the four thousand: beware the doctrine of the Pharisees and Sadducees (5–12).",
        "At Caesarea Philippi He asks, “Whom say ye that I am?” Peter answers, “Thou art the Christ, the Son of the living God” (13–17).",
        "On this rock Jesus will build His church, and the gates of hell won't prevail; He gives Peter the keys of the kingdom (18–20).",
        "From that time He shows them He must suffer, be killed, and rise the third day. Peter rebukes Him and is told, “Get thee behind me, Satan” (21–23).",
        "Whoever follows Him must deny himself and take up his cross. What profit is the whole world if a man loses his soul? (24–28)"
      ],
      "key": {
        "ref": "Matthew 16:16",
        "text": "And Simon Peter answered and said, Thou art the Christ, the Son of the living God."
      },
      "big": "Every man has to answer who Jesus is. He is the Christ, the Son of the living God, and He builds His church on that rock. But He is a Messiah who goes by way of the cross, and those who follow Him give up running their own lives, because one soul is worth more than the whole world."
    }
  },
  {
    "id": "matthew-17",
    "type": "chapter",
    "book": "Matthew",
    "ch": 17,
    "date": "2026-10-29",
    "title": "Matthew 17",
    "sub": "Jesus only",
    "about": "On a high mountain Peter, James and John see Jesus transfigured in glory and hear the Father say, “hear ye him”; below, Jesus frees a boy His disciples couldn't help, and provides the temple tax from a fish.",
    "tags": [
      "Who Jesus is",
      "Listening to Jesus",
      "Fear",
      "Faith",
      "The cross",
      "Freedom"
    ],
    "url": "studies/matthew-17.html",
    "overview": {
      "where": "A high mountain (perhaps Hermon, near Caesarea Philippi, or Tabor), then Galilee and Capernaum",
      "when": "Six days after Peter's confession, about AD 29",
      "people": [
        "jesus",
        "simon-peter",
        "sons-of-zebedee",
        "moses",
        "elijah",
        "john-the-baptist",
        "disciples"
      ],
      "places": [
        "high-mountain",
        "galilee",
        "capernaum"
      ],
      "story": [
        "Jesus takes Peter, James and John up an high mountain and is transfigured: His face shines as the sun (1–2).",
        "Moses and Elias talk with Him. Peter offers to build three tabernacles (3–4).",
        "A bright cloud overshadows them and the Father says, “This is my beloved Son … hear ye him.” Jesus touches the frightened men; they see no man, save Jesus only (5–8).",
        "Coming down, Jesus explains that Elias has already come, in John the Baptist, and that the Son of man will suffer too (9–13).",
        "A father brings his lunatick son, whom the disciples couldn't cure. Jesus rebukes the devil and the child is cured (14–18).",
        "Their failure came from unbelief: faith as a grain of mustard seed can move a mountain; this kind goes out only by prayer and fasting (19–21).",
        "In Galilee He foretells again His betrayal, death, and rising (22–23).",
        "At Capernaum, though the King's children are free, He has Peter pay the temple tax with a coin from a fish's mouth (24–27)."
      ],
      "key": {
        "ref": "Matthew 17:5",
        "text": "While he yet spake, behold, a bright cloud overshadowed them: and behold a voice out of the cloud, which said, This is my beloved Son, in whom I am well pleased; hear ye him."
      },
      "big": "Jesus is the beloved Son of God, greater than the law and the prophets, and the Father's command is simple: hear Him. He lifts up the afraid, frees those no one else can help, and asks for faith in Him, not in ourselves. He is headed to the cross, and He pays what His people owe."
    }
  },
  {
    "id": "matthew-18",
    "type": "chapter",
    "book": "Matthew",
    "ch": 18,
    "date": "2026-10-29",
    "title": "Matthew 18",
    "sub": "Seventy times seven",
    "about": "The disciples argue about who is greatest. Jesus sets a little child among them, warns against causing believers to fall, goes after the one lost sheep, shows how to win back a brother, and tells of a forgiven servant who would not forgive.",
    "tags": [
      "Humility",
      "Temptation",
      "The lost sheep",
      "Restoring a brother",
      "Forgiveness",
      "Grace"
    ],
    "url": "studies/matthew-18.html",
    "overview": {
      "where": "Capernaum, in a house, back from the road (17:24; Mark 9:33)",
      "when": "About AD 29, late in Jesus' ministry in Galilee",
      "people": [
        "jesus",
        "disciples",
        "simon-peter",
        "the-father"
      ],
      "places": [
        "capernaum",
        "galilee"
      ],
      "story": [
        "The disciples ask who is greatest in the kingdom of heaven. Jesus sets a little child among them: except ye be converted, and become as little children, ye shall not enter in (1–5).",
        "Whoever causes one of these little ones to fall would be better off drowned with a millstone. Cut off whatever makes you fall: better to enter life maimed than be cast into hell fire (6–9).",
        "Despise not the little ones. The Son of man came to save the lost, and a shepherd leaves the ninety and nine to seek the one gone astray (10–14).",
        "If a brother trespasses, go to him alone, then with one or two witnesses, then tell the church. Where two or three gather in His name, He is in the midst (15–20).",
        "Peter asks if seven times is enough to forgive. Jesus says, “Until seventy times seven” (21–22).",
        "A king forgives a servant ten thousand talents. That servant chokes a fellowservant over a hundred pence, and the king hands him to the tormentors. So forgive from the heart (23–35)."
      ],
      "key": {
        "ref": "Matthew 18:22",
        "text": "Jesus saith unto him, I say not unto thee, Until seven times: but, Until seventy times seven."
      },
      "big": "In God's kingdom, greatness means going low like a child. Jesus guards the weakest believer, seeks the one who wanders, and teaches us to win back a brother. We have been forgiven a debt we could never pay, so we forgive others from the heart, without keeping score."
    }
  },
  {
    "id": "matthew-19",
    "type": "chapter",
    "book": "Matthew",
    "ch": 19,
    "date": "2026-10-29",
    "title": "Matthew 19",
    "sub": "With God all things are possible",
    "about": "Jesus leaves Galilee for Judaea beyond Jordan. He answers the Pharisees about divorce from God's plan in the beginning, blesses little children, and tells a rich young man to sell all and follow Him.",
    "tags": [
      "Marriage",
      "Divorce",
      "Children",
      "Riches",
      "Salvation",
      "Reward"
    ],
    "url": "studies/matthew-19.html",
    "overview": {
      "where": "Judaea beyond Jordan (Perea), east of the Jordan River, on the way to Jerusalem",
      "when": "About AD 30, in the months before the cross",
      "people": [
        "jesus",
        "pharisees",
        "moses",
        "disciples",
        "rich-young-ruler",
        "simon-peter"
      ],
      "places": [
        "galilee",
        "judaea",
        "beyond-jordan",
        "jordan"
      ],
      "story": [
        "Jesus leaves Galilee for the coasts of Judaea beyond Jordan, and great multitudes follow Him to be healed (1–2).",
        "Pharisees test Him: may a man put away his wife for every cause? Jesus points to the beginning: male and female, one flesh. What God hath joined, let not man put asunder (3–6).",
        "Moses allowed divorce because of the hardness of their hearts, but from the beginning it was not so. Jesus names fornication as the exception, and speaks of some who stay unmarried for the kingdom (7–12).",
        "The disciples turn away little children. Jesus says, “Suffer little children… to come unto me,” and lays His hands on them (13–15).",
        "A rich young man asks what good thing he must do for eternal life. Told to sell all and follow Jesus, he goes away sorrowful, for he had great possessions (16–22).",
        "A camel goes through a needle's eye more easily than a rich man enters the kingdom. With men it is impossible, but with God all things are possible. Those who leave all for Him receive an hundredfold and everlasting life (23–30)."
      ],
      "key": {
        "ref": "Matthew 19:26",
        "text": "But Jesus beheld them, and said unto them, With men this is impossible; but with God all things are possible."
      },
      "big": "God made marriage one man and one woman, joined by Him for life, and His grace covers our failures. Jesus welcomes the small and the helpless. No one can save himself by money or rule-keeping, but with God all things are possible, and nothing given up to follow Jesus is lost."
    }
  },
  {
    "id": "mark-01",
    "type": "chapter",
    "book": "Mark",
    "ch": 1,
    "date": "2026-10-29",
    "title": "Mark 1",
    "sub": "Straightway",
    "about": "No birth story, no warm-up: the Son of God is baptized, tempted, calls four fishermen, drives out an unclean spirit, and touches a leper.",
    "tags": [
      "Who Jesus is",
      "Repentance and faith",
      "Temptation",
      "Following Jesus",
      "Power over evil",
      "Compassion"
    ],
    "url": "studies/mark-01.html",
    "overview": {
      "where": "The Jordan River and the wilderness, then Galilee: the lakeshore, Capernaum's synagogue and Simon's house, and the towns around",
      "when": "About AD 27, at the start of Jesus' ministry",
      "people": [
        "jesus",
        "john-the-baptist",
        "holy-spirit",
        "satan",
        "angels",
        "simon-peter",
        "andrew",
        "sons-of-zebedee",
        "scribes",
        "simons-wifes-mother",
        "the-leper"
      ],
      "places": [
        "jordan",
        "wilderness",
        "judaea",
        "jerusalem",
        "nazareth",
        "galilee",
        "sea-of-galilee",
        "capernaum",
        "synagogue"
      ],
      "story": [
        "The beginning of the gospel: John the Baptist, the messenger the prophets promised, preaches repentance and baptizes in the Jordan (1–8).",
        "Jesus is baptized. The heavens open, the Spirit comes down like a dove, and the Father says, “Thou art my beloved Son” (9–11).",
        "The Spirit drives Him into the wilderness for forty days, tempted of Satan, and angels minister to Him (12–13).",
        "In Galilee He preaches, “repent ye, and believe the gospel,” and calls Simon, Andrew, James and John to become fishers of men (14–20).",
        "In Capernaum's synagogue He teaches with authority and casts out an unclean spirit. He heals Simon's wife's mother, and at sunset the whole city comes to the door (21–34).",
        "He rises before day to pray, then goes on to preach in the next towns (35–39).",
        "A leper begs, “If thou wilt, thou canst make me clean.” Jesus touches him and says, “I will.” Then Jesus is the one left outside in desert places (40–45)."
      ],
      "key": {
        "ref": "Mark 1:15",
        "text": "And saying, The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel."
      },
      "big": "Jesus is the Son of God, and He moves fast: He calls men to turn and believe, makes fishermen into fishers of men, drives out evil with a word, and is willing to touch the man everyone else keeps away from."
    }
  },
  {
    "id": "mark-02",
    "type": "chapter",
    "book": "Mark",
    "ch": 2,
    "date": "2026-10-29",
    "title": "Mark 2",
    "sub": "Not the righteous, but sinners",
    "about": "Four friends tear open a roof, a tax man gets up from his table, and Jesus says He came for the sick, not the healthy.",
    "tags": [
      "Friends",
      "Forgiveness",
      "Salvation",
      "New life",
      "The sabbath",
      "Who Jesus is"
    ],
    "url": "studies/mark-02.html",
    "overview": {
      "where": "Capernaum: a crowded house, Levi's tax booth and his table, then the grain fields on a sabbath",
      "when": "About AD 27 or 28, early in Jesus' ministry in Galilee",
      "people": [
        "jesus",
        "sick-of-the-palsy",
        "scribes",
        "levi-matthew",
        "publicans",
        "sinners",
        "pharisees",
        "disciples",
        "john-the-baptist",
        "david",
        "abiathar"
      ],
      "places": [
        "capernaum",
        "receipt-of-custom",
        "house-of-god"
      ],
      "story": [
        "Back home in Capernaum, the house is packed. Four men carry a paralyzed friend, dig through the roof, and let him down in front of Jesus (1–4).",
        "Jesus sees their faith and says, “Son, thy sins be forgiven thee.” The scribes think, “who can forgive sins but God only?” (5–7).",
        "To show the Son of man has power on earth to forgive sins, Jesus tells the man to take up his bed and walk, and he does (8–12).",
        "Jesus calls Levi from the tax booth and eats with publicans and sinners: “I came not to call the righteous, but sinners to repentance” (13–17).",
        "Asked why His disciples don't fast, He speaks of the bridegroom, new cloth, and new wine in new bottles (18–22).",
        "His disciples pluck grain on the sabbath. Jesus answers with David and the shewbread: “The sabbath was made for man,” and the Son of man is its Lord (23–28)."
      ],
      "key": {
        "ref": "Mark 2:17",
        "text": "When Jesus heard it, he saith unto them, They that are whole have no need of the physician, but they that are sick: I came not to call the righteous, but sinners to repentance."
      },
      "big": "Jesus has God's own power to forgive sins, and He came for people who know they're sick. He doesn't patch up an old life; He makes a new one, and He is Lord even of the sabbath."
    }
  },
  {
    "id": "mark-03",
    "type": "chapter",
    "book": "Mark",
    "ch": 3,
    "date": "2026-10-29",
    "title": "Mark 3",
    "sub": "Stronger than the strong man",
    "about": "A withered hand made whole on the sabbath, twelve men chosen, a slander answered, and a new family for whosoever will.",
    "tags": [
      "Mercy",
      "Obedience",
      "Called",
      "Spiritual battle",
      "Forgiveness",
      "Family of God"
    ],
    "url": "studies/mark-03.html",
    "overview": {
      "where": "A synagogue in Galilee, the shore of the Sea of Galilee, a mountain, and a crowded house",
      "when": "Early in Jesus' ministry in Galilee, about A.D. 28",
      "people": [
        "jesus",
        "withered-hand",
        "pharisees",
        "herodians",
        "disciples",
        "the-twelve",
        "simon-peter",
        "sons-of-zebedee",
        "andrew",
        "philip",
        "bartholomew",
        "levi-matthew",
        "thomas",
        "james-son-of-alphaeus",
        "thaddaeus",
        "simon-the-zealot",
        "judas-iscariot",
        "scribes",
        "beelzebub",
        "satan",
        "mary",
        "brethren"
      ],
      "places": [
        "synagogue",
        "sea-of-galilee",
        "galilee",
        "judaea",
        "jerusalem",
        "idumaea",
        "beyond-jordan",
        "tyre-and-zidon"
      ],
      "story": [
        "On the sabbath the Pharisees watch to see if Jesus will heal a man with a withered hand. He asks whether it is lawful to do good or evil, then tells the man, “Stretch forth thine hand,” and it is made whole (1–5).",
        "The Pharisees and the Herodians begin to plot how they might destroy Him (6).",
        "Crowds come from Galilee, Judaea, Jerusalem, Idumaea, beyond Jordan, and Tyre and Sidon. Unclean spirits cry out that He is the Son of God, and He orders them silent (7–12).",
        "On a mountain Jesus ordains twelve, that they should be with Him and be sent to preach. He names Simon Peter, and James and John Boanerges (13–19).",
        "His family says He is beside Himself. Scribes from Jerusalem say He casts out devils by Beelzebub. Jesus answers that Satan can't cast out Satan, that the strong man must first be bound, and that all sins can be forgiven except blasphemy against the Holy Ghost (20–30).",
        "His mother and brethren call for Him from outside. Looking at those around Him, He says whosoever does the will of God is His brother, sister and mother (31–35)."
      ],
      "key": {
        "ref": "Mark 3:35",
        "text": "For whosoever shall do the will of God, the same is my brother, and my sister, and mother."
      },
      "big": "Jesus is stronger than the strong man. He heals, He calls ordinary men to be with Him, He forgives every sin of the man who comes, and He makes whosoever trusts Him part of His family."
    }
  },
  {
    "id": "mark-04",
    "type": "chapter",
    "book": "Mark",
    "ch": 4,
    "date": "2026-10-29",
    "title": "Mark 4",
    "sub": "Seed, soil, and a storm",
    "about": "Jesus teaches from a boat about a sower and his seed, then sleeps through a storm that only He can stop.",
    "tags": [
      "Hearing the word",
      "Temptation",
      "Witness",
      "Spiritual growth",
      "Small beginnings",
      "Fear and faith"
    ],
    "url": "studies/mark-04.html",
    "overview": {
      "where": "On and beside the Sea of Galilee: Jesus teaches from a boat, then crosses to the other side",
      "when": "During Jesus' ministry in Galilee, about A.D. 28. The storm comes that same evening",
      "people": [
        "jesus",
        "disciples",
        "the-twelve",
        "satan"
      ],
      "places": [
        "sea-of-galilee"
      ],
      "story": [
        "The crowd is so large that Jesus teaches from a boat. He tells of a sower whose seed falls by the way side, on stony ground, among thorns, and on good ground (1–9).",
        "Alone with those about Him, He explains: the seed is the word. Satan takes it from some, some have no root, some are choked by cares, riches and lusts, and some bear fruit thirty, sixty and a hundredfold (10–20).",
        "A candle is set on a candlestick, not hidden under a bushel. With what measure ye mete, it shall be measured to you (21–25).",
        "The kingdom of God is like seed that grows while the farmer sleeps, “he knoweth not how,” and like a mustard seed that grows greater than all herbs (26–34).",
        "Crossing the lake at evening, a great storm fills the boat while Jesus sleeps. They wake Him: “carest thou not that we perish?” He says to the sea, “Peace, be still,” and there is a great calm (35–41)."
      ],
      "key": {
        "ref": "Mark 4:39",
        "text": "And he arose, and rebuked the wind, and said unto the sea, Peace, be still. And the wind ceased, and there was a great calm."
      },
      "big": "God's word is good seed, and it bears fruit in a heart that hears, receives and keeps it. The kingdom starts small and grows by God's power, and the One in our boat is Lord of the wind and the sea."
    }
  },
  {
    "id": "mark-05",
    "type": "chapter",
    "book": "Mark",
    "ch": 5,
    "date": "2026-10-29",
    "title": "Mark 5",
    "sub": "Clothed, and in his right mind",
    "about": "A man no chains could hold, a woman no doctor could heal, and a girl it was already too late for. Jesus meets all three.",
    "tags": [
      "Freedom",
      "Bondage",
      "Witness",
      "Faith",
      "Fear and faith",
      "Resurrection"
    ],
    "url": "studies/mark-05.html",
    "overview": {
      "where": "The country of the Gadarenes on the east shore of the Sea of Galilee, then back across the lake to the crowd, the road, and Jairus' house",
      "when": "About AD 28, in Jesus' ministry in Galilee, right after He stilled the storm (4:35–41)",
      "people": [
        "jesus",
        "legion",
        "jairus",
        "woman-with-issue",
        "simon-peter",
        "sons-of-zebedee",
        "disciples"
      ],
      "places": [
        "gergesenes",
        "tombs",
        "decapolis",
        "sea-of-galilee",
        "synagogue"
      ],
      "story": [
        "Across the lake, a man with an unclean spirit lives among the tombs. No chains can hold him; night and day he cries and cuts himself (1–5).",
        "He runs to Jesus. The spirits call themselves Legion, “for we are many,” and beg to go into a herd of about two thousand swine, which rush into the sea (6–13).",
        "The town finds the man “sitting, and clothed, and in his right mind,” and begs Jesus to leave. Jesus sends the man home to tell what the Lord has done for him, and he preaches in Decapolis (14–20).",
        "Back across the lake, Jairus, a ruler of the synagogue, falls at Jesus' feet: his little daughter is dying (21–24).",
        "On the way, a woman who has bled for twelve years and spent all she had touches His clothes and is healed. Jesus calls her “Daughter” and sends her away in peace (25–34).",
        "News comes that the girl is dead. Jesus says, “Be not afraid, only believe,” takes her by the hand, says “Talitha cumi,” and she gets up and walks (35–43)."
      ],
      "key": {
        "ref": "Mark 5:36",
        "text": "As soon as Jesus heard the word that was spoken, he saith unto the ruler of the synagogue, Be not afraid, only believe."
      },
      "big": "No bondage is too strong, no trouble too long, and no case too late for Jesus. He sets the captive free, makes the outcast whole, and speaks life over death, and He sends the ones He frees to tell what He has done."
    }
  },
  {
    "id": "mark-06",
    "type": "chapter",
    "book": "Mark",
    "ch": 6,
    "date": "2026-10-29",
    "title": "Mark 6",
    "sub": "It is I; be not afraid",
    "about": "His hometown won't believe, the twelve are sent out, a king kills a prophet to save face, five thousand eat, and Jesus walks out to His men on a stormy sea.",
    "tags": [
      "Unbelief",
      "Conscience",
      "Fear of man",
      "Compassion",
      "Provision",
      "Storms"
    ],
    "url": "studies/mark-06.html",
    "overview": {
      "where": "Nazareth, the villages of Galilee, Herod's court and prison, a lonely place near Bethsaida, the Sea of Galilee at night, and the plain of Gennesaret",
      "when": "About AD 29, near Passover, in Jesus' ministry in Galilee, while Herod Antipas ruled Galilee and Perea for Rome",
      "people": [
        "jesus",
        "mary",
        "brothers-of-jesus",
        "the-twelve",
        "apostles",
        "herod-antipas",
        "john-the-baptist",
        "herodias",
        "daughter-of-herodias",
        "philip-herodias-husband",
        "elijah",
        "disciples"
      ],
      "places": [
        "nazareth",
        "synagogue",
        "desert-place",
        "bethsaida",
        "sea-of-galilee",
        "gennesaret"
      ],
      "story": [
        "In Nazareth, His hometown asks, “Is not this the carpenter?” and stumbles over Him. He does few mighty works there and marvels at their unbelief (1–6).",
        "He sends the twelve out two by two with nothing but a staff, sandals, and power over unclean spirits. They preach that men should repent (7–13).",
        "Herod hears of Jesus and says, “It is John, whom I beheaded.” Mark tells how John rebuked Herod's marriage to Herodias, and how a rash oath at a birthday feast cost John his head (14–29).",
        "The apostles come back, and Jesus takes them apart to rest. The crowd gets there first, and He has compassion on them “as sheep not having a shepherd” (30–34).",
        "With five loaves and two fishes He feeds about five thousand men. Twelve baskets of pieces are left over (35–44).",
        "That night He comes to His men walking on the sea in the fourth watch: “Be of good cheer: it is I; be not afraid.” The wind stops. At Gennesaret all who touch Him are made whole (45–56)."
      ],
      "key": {
        "ref": "Mark 6:50",
        "text": "For they all saw him, and were troubled. And immediately he talked with them, and saith unto them, Be of good cheer: it is I; be not afraid."
      },
      "big": "People who knew Jesus best missed Him, and a king who heard the truth gladly still chose his pride. But to all who come, Jesus is the compassionate Shepherd who feeds the hungry with little, sees His men rowing in the dark, and comes to them saying, “It is I; be not afraid.”"
    }
  },
  {
    "id": "mark-07",
    "type": "chapter",
    "book": "Mark",
    "ch": 7,
    "date": "2026-10-29",
    "title": "Mark 7",
    "sub": "From within",
    "about": "Religious men fuss over washed hands. Jesus points to the heart, then a Gentile mother and a deaf man find Him.",
    "tags": [
      "The heart",
      "Worship",
      "God's Word",
      "Faith",
      "Outsiders",
      "Who Jesus is"
    ],
    "url": "studies/mark-07.html",
    "overview": {
      "where": "Galilee by the lake, then the borders of Tyre and Sidon, then the Decapolis on the far side of the Sea of Galilee",
      "when": "About AD 29, the summer after the feeding of the five thousand, about a year before the cross",
      "people": [
        "jesus",
        "pharisees",
        "scribes",
        "disciples",
        "isaiah",
        "moses",
        "woman-of-canaan",
        "deaf-man"
      ],
      "places": [
        "jerusalem",
        "tyre-and-zidon",
        "decapolis",
        "sea-of-galilee"
      ],
      "story": [
        "Pharisees and scribes from Jerusalem find fault: some of Jesus' disciples eat with unwashen hands, against the tradition of the elders (1–5).",
        "Jesus quotes Esaias: “This people honoureth me with their lips, but their heart is far from me.” With “Corban” they set aside God's command to honour father and mother (6–13).",
        "He calls the people: nothing that goes into a man can defile him; what comes out of him does (14–16).",
        "In the house He explains: food goes to the belly, but evil thoughts, adulteries, thefts, pride and more come from within, out of the heart (17–23).",
        "In the borders of Tyre and Sidon, a Greek woman begs Him to free her daughter: “Yes, Lord: yet the dogs under the table eat of the children’s crumbs.” She goes home and finds the devil gone (24–30).",
        "In the Decapolis He takes a deaf man aside, touches his ears and tongue, and says, “Ephphatha, that is, Be opened.” The people say, “He hath done all things well” (31–37)."
      ],
      "key": {
        "ref": "Mark 7:15",
        "text": "There is nothing from without a man, that entering into him can defile him: but the things which come out of him, those are they that defile the man."
      },
      "big": "The real problem isn't dirt on the hands but sin in the heart, and no rule can wash that. Jesus puts God's Word above man's traditions, welcomes a humble Gentile's faith, and opens deaf ears. He does all things well."
    }
  },
  {
    "id": "mark-08",
    "type": "chapter",
    "book": "Mark",
    "ch": 8,
    "date": "2026-10-29",
    "title": "Mark 8",
    "sub": "Whom say ye that I am?",
    "about": "Seven loaves feed four thousand, a blind man sees in two touches, and Peter says it: Thou art the Christ. Then Jesus tells them what following Him will cost.",
    "tags": [
      "Compassion",
      "Remembering",
      "Growing",
      "Who Jesus is",
      "The cross",
      "Following"
    ],
    "url": "studies/mark-08.html",
    "overview": {
      "where": "The Decapolis, across the lake to Dalmanutha and Bethsaida, then north to the towns of Caesarea Philippi",
      "when": "About AD 29, about a year before the cross, when Jesus first tells His disciples plainly that He must die and rise again",
      "people": [
        "jesus",
        "disciples",
        "pharisees",
        "herod-antipas",
        "blind-man-of-bethsaida",
        "simon-peter",
        "john-the-baptist",
        "elijah",
        "satan",
        "chief-priests",
        "scribes",
        "elders"
      ],
      "places": [
        "wilderness",
        "dalmanutha",
        "bethsaida",
        "caesarea-philippi"
      ],
      "story": [
        "Three days into the wilderness, a great crowd has nothing to eat. Jesus has compassion and feeds about four thousand with seven loaves and a few small fishes, and seven baskets are left (1–9).",
        "At Dalmanutha the Pharisees demand a sign from heaven. He sighs deeply in His spirit and refuses (10–13).",
        "In the ship He warns, “beware of the leaven of the Pharisees, and of the leaven of Herod.” They think He means bread, and He reminds them of the twelve baskets and the seven (14–21).",
        "At Bethsaida He leads a blind man out of town. After one touch he sees “men as trees, walking”; after a second he sees every man clearly (22–26).",
        "Near Caesarea Philippi He asks, “But whom say ye that I am?” Peter answers, “Thou art the Christ.” Jesus teaches that He must suffer, be killed, and rise again, and rebukes Peter: “Get thee behind me, Satan” (27–33).",
        "“Whosoever will come after me, let him deny himself, and take up his cross, and follow me.” What does the whole world profit a man who loses his own soul? (34–38)"
      ],
      "key": {
        "ref": "Mark 8:29",
        "text": "And he saith unto them, But whom say ye that I am? And Peter answereth and saith unto him, Thou art the Christ."
      },
      "big": "Jesus is the Christ, the promised King, and He came to suffer, die and rise again. He feeds the hungry, finishes what He starts, and calls every man to deny himself, take up his cross, and follow Him, because one soul is worth more than the whole world."
    }
  },
  {
    "id": "mark-09",
    "type": "chapter",
    "book": "Mark",
    "ch": 9,
    "date": "2026-10-29",
    "title": "Mark 9",
    "sub": "Hear him",
    "about": "Three men see Jesus shining in glory on a mountain. At the bottom, a desperate father prays, “Lord, I believe; help thou mine unbelief,” and Jesus teaches that the way up is down.",
    "tags": [
      "Transfiguration",
      "Weak faith",
      "Prayer",
      "Humility",
      "Temptation",
      "Hell"
    ],
    "url": "studies/mark-09.html",
    "overview": {
      "where": "A high mountain (perhaps Hermon), then down through Galilee to Capernaum",
      "when": "In the last year of Jesus' ministry, six days after Peter's confession near Caesarea Philippi",
      "people": [
        "jesus",
        "simon-peter",
        "sons-of-zebedee",
        "moses",
        "elijah",
        "scribes",
        "disciples",
        "the-twelve"
      ],
      "places": [
        "high-mountain",
        "galilee",
        "capernaum"
      ],
      "story": [
        "Jesus takes Peter, James and John up a high mountain and is transfigured. Moses and Elias talk with Him, and the Father says, “This is my beloved Son: hear him” (1–8).",
        "Coming down, Jesus tells them Elias has already come (John the Baptist), and that the Son of man must suffer (9–13).",
        "At the bottom the disciples can't help a boy with a dumb spirit. His father cries, “Lord, I believe; help thou mine unbelief,” and Jesus casts it out: “This kind can come forth by nothing, but by prayer and fasting” (14–29).",
        "Jesus again foretells His death and rising. The twelve argue about who is greatest, and He sets a child among them: the first must be servant of all (30–41).",
        "Cut off whatever causes you to stumble: better to enter life maimed than be cast into hell. “Have salt in yourselves, and have peace one with another” (42–50)."
      ],
      "key": {
        "ref": "Mark 9:24",
        "text": "And straightway the father of the child cried out, and said with tears, Lord, I believe; help thou mine unbelief."
      },
      "big": "Jesus is God's beloved Son, and the Father tells us to hear Him. He doesn't turn away weak faith that's honest; He helps it. In His kingdom the greatest is the servant, and sin is to be dealt with ruthlessly."
    }
  },
  {
    "id": "mark-10",
    "type": "chapter",
    "book": "Mark",
    "ch": 10,
    "date": "2026-10-29",
    "title": "Mark 10",
    "sub": "The road up to Jerusalem",
    "about": "On the way to the cross, Jesus teaches about marriage, blesses little children, loves a rich man who walks away, gives His life a ransom, and stops for a blind beggar who won't keep quiet.",
    "tags": [
      "Marriage",
      "Childlike faith",
      "Riches",
      "Servanthood",
      "Ransom",
      "Mercy"
    ],
    "url": "studies/mark-10.html",
    "overview": {
      "where": "Beyond the Jordan in Perea, then Jericho, on the road up to Jerusalem",
      "when": "The last journey to Jerusalem, shortly before Jesus' final Passover",
      "people": [
        "jesus",
        "pharisees",
        "moses",
        "disciples",
        "rich-young-ruler",
        "simon-peter",
        "the-twelve",
        "sons-of-zebedee",
        "bartimaeus"
      ],
      "places": [
        "beyond-jordan",
        "judaea",
        "jordan",
        "jerusalem",
        "jericho"
      ],
      "story": [
        "Pharisees test Jesus about divorce. He goes back to the beginning: God made them male and female, the two become one flesh, and “What therefore God hath joined together, let not man put asunder” (1–12).",
        "Jesus is displeased when the disciples turn children away: “Whosoever shall not receive the kingdom of God as a little child, he shall not enter therein” (13–16).",
        "A rich man asks how to inherit eternal life. Jesus loves him and says, “One thing thou lackest,” but he goes away grieved. It is easier for a camel to go through the eye of a needle, but with God all things are possible (17–31).",
        "Going up to Jerusalem, Jesus tells the twelve a third time that He will die and rise. James and John ask for the best seats; Jesus came “to give his life a ransom for many” (32–45).",
        "At Jericho blind Bartimaeus cries, “Jesus, thou Son of David, have mercy on me,” receives his sight, and follows Jesus in the way (46–52)."
      ],
      "key": {
        "ref": "Mark 10:45",
        "text": "For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many."
      },
      "big": "Jesus walked toward the cross on purpose, to serve and to pay the ransom for our freedom. Nobody can save himself, but with God all things are possible. Whoever comes to Him as a child, or cries out to Him like a blind beggar, is received."
    }
  },
  {
    "id": "luke-01",
    "type": "chapter",
    "book": "Luke",
    "ch": 1,
    "date": "2026-10-29",
    "title": "Luke 1",
    "sub": "Nothing shall be impossible",
    "about": "After four hundred quiet years God speaks again: an old priest is promised a son, and a virgin in Nazareth is told she will bear the Son of God.",
    "tags": [
      "God's Word",
      "Prayer",
      "Faith and doubt",
      "Who Jesus is",
      "God's power",
      "Salvation"
    ],
    "url": "studies/luke-01.html",
    "overview": {
      "where": "The temple in Jerusalem, Nazareth in Galilee, and a town in the hill country of Judaea",
      "when": "About 6 to 5 BC, in the days of Herod the Great",
      "people": [
        "theophilus",
        "zacharias",
        "elisabeth",
        "gabriel",
        "mary",
        "joseph",
        "jesus",
        "john-the-baptist",
        "herod-the-great"
      ],
      "places": [
        "temple",
        "judaea",
        "galilee",
        "nazareth",
        "hill-country"
      ],
      "story": [
        "Luke writes to Theophilus an orderly account, checked with the eyewitnesses, so that he may know the certainty of what he was taught (1–4).",
        "The angel Gabriel meets the old priest Zacharias at the altar of incense: his barren wife Elisabeth will bear a son, John. Zacharias doubts and is struck dumb (5–25).",
        "Six months later Gabriel tells Mary, a virgin in Nazareth, that she will bear Jesus, the Son of God, by the Holy Ghost. “Be it unto me according to thy word” (26–38).",
        "Mary visits Elisabeth, the babe leaps in Elisabeth's womb, and Mary sings, “My soul doth magnify the Lord” (39–56).",
        "John is born. Zacharias writes, “His name is John,” gets his voice back, and prophesies of salvation, the remission of sins, and the dayspring from on high (57–80)."
      ],
      "key": {
        "ref": "Luke 1:37",
        "text": "For with God nothing shall be impossible."
      },
      "big": "God keeps every promise, even after long silence and long waiting. Nothing is too hard for Him, and He sent His Son to send our sins away and bring light to men sitting in darkness."
    }
  },
  {
    "id": "luke-02",
    "type": "chapter",
    "book": "Luke",
    "ch": 2,
    "date": "2026-10-29",
    "title": "Luke 2",
    "sub": "Unto you is born a Saviour",
    "about": "Jesus is born in Bethlehem and laid in a manger. Shepherds hear the news first, Simeon and Anna see God's promise in a baby, and at twelve Jesus is found in His Father's house.",
    "tags": [
      "The birth of Jesus",
      "Good news",
      "Telling others",
      "Waiting on God",
      "Salvation",
      "Growing"
    ],
    "url": "studies/luke-02.html",
    "overview": {
      "where": "From Nazareth to Bethlehem, the fields outside Bethlehem, the temple in Jerusalem, and home to Nazareth",
      "when": "About 5 BC, when Jesus was born, to about AD 7, when He was twelve",
      "people": [
        "jesus",
        "mary",
        "joseph",
        "caesar",
        "cyrenius",
        "the-shepherds",
        "angels",
        "simeon",
        "anna",
        "doctors"
      ],
      "places": [
        "nazareth",
        "galilee",
        "judaea",
        "bethlehem",
        "city-of-david",
        "jerusalem",
        "temple"
      ],
      "story": [
        "Caesar Augustus orders a census, and Joseph takes Mary, great with child, from Nazareth to Bethlehem, the city of David. Jesus is born and laid in a manger, because there is no room in the inn (1–7).",
        "An angel tells shepherds keeping watch by night: “Unto you is born this day in the city of David a Saviour, which is Christ the Lord.” A heavenly host praises God (8–14).",
        "The shepherds hurry to Bethlehem, find the babe, and spread the word. Mary keeps all these things in her heart (15–20).",
        "Jesus is circumcised and named, then presented at the temple with the poor family's offering. Simeon takes Him in his arms: “Mine eyes have seen thy salvation” (21–35).",
        "Anna, a widowed prophetess, gives thanks and tells all who looked for redemption. The family goes home to Nazareth, and the child grows strong (36–40).",
        "At twelve, Jesus stays behind at the Passover. After three days His parents find Him in the temple: “Wist ye not that I must be about my Father’s business?” He grows in wisdom and stature (41–52)."
      ],
      "key": {
        "ref": "Luke 2:11",
        "text": "For unto you is born this day in the city of David a Saviour, which is Christ the Lord."
      },
      "big": "God's Son came as a baby in a feed trough, and the good news went first to working men in the dark. He is the Saviour, the Christ, and the Lord, and His salvation is for all people."
    }
  },
  {
    "id": "luke-03",
    "type": "chapter",
    "book": "Luke",
    "ch": 3,
    "date": "2026-10-29",
    "title": "Luke 3",
    "sub": "Prepare ye the way of the Lord",
    "about": "John the Baptist calls the nation to repent, Jesus is baptized while the Spirit descends and the Father speaks, and Luke traces Jesus' family all the way back to Adam.",
    "tags": [
      "Repentance",
      "John the Baptist",
      "Humility",
      "The baptism of Jesus",
      "Father, Son, and Holy Ghost",
      "For everyone"
    ],
    "url": "studies/luke-03.html",
    "overview": {
      "where": "The wilderness and the country along the Jordan River",
      "when": "About AD 27–29, the fifteenth year of Tiberius Caesar",
      "people": [
        "john-the-baptist",
        "jesus",
        "caesar",
        "pilate",
        "herod-antipas",
        "philip-the-tetrarch",
        "lysanias",
        "annas",
        "caiaphas",
        "publicans",
        "herodias",
        "holy-spirit",
        "adam"
      ],
      "places": [
        "judaea",
        "galilee",
        "ituraea",
        "trachonitis",
        "abilene",
        "wilderness",
        "jordan"
      ],
      "story": [
        "In the fifteenth year of Tiberius Caesar, with Pilate, Herod, Philip, and Lysanias ruling and Annas and Caiaphas high priests, the word of God comes to John in the wilderness (1–2).",
        "John preaches the baptism of repentance for the remission of sins, fulfilling Isaiah: “Prepare ye the way of the Lord” (3–6).",
        "He warns the crowds that being Abraham's children won't save them. When the people, publicans, and soldiers ask, “What shall we do?”, he gives each a plain answer (7–14).",
        "John points to One mightier than he, who will baptize with the Holy Ghost and with fire. Herod shuts John up in prison for rebuking him over Herodias (15–20).",
        "Jesus is baptized and praying; the heaven opens, the Holy Ghost descends like a dove, and the Father says, “Thou art my beloved Son” (21–22).",
        "Jesus begins His work at about thirty. Luke traces His line back through David and Abraham to Adam, “which was the son of God” (23–38)."
      ],
      "key": {
        "ref": "Luke 3:22",
        "text": "And the Holy Ghost descended in a bodily shape like a dove upon him, and a voice came from heaven, which said, Thou art my beloved Son; in thee I am well pleased."
      },
      "big": "Repentance is a turned heart that shows up in a changed life, and no family name can stand in for it. Jesus is the Father's beloved Son, and He came as a son of Adam for every man."
    }
  },
  {
    "id": "luke-04",
    "type": "chapter",
    "book": "Luke",
    "ch": 4,
    "date": "2026-10-29",
    "title": "Luke 4",
    "sub": "The Spirit of the Lord is upon me",
    "about": "Jesus beats the devil with the word of God, is thrown out of His hometown, and sets people free in Capernaum.",
    "tags": [
      "Temptation",
      "God's word",
      "Freedom",
      "Grace",
      "Authority",
      "Prayer"
    ],
    "url": "studies/luke-04.html",
    "overview": {
      "where": "The wilderness of Judaea and the temple in Jerusalem, then Galilee: the synagogue at Nazareth, and Capernaum by the lake",
      "when": "Right after His baptism, at the start of His ministry, about AD 27–29",
      "people": [
        "jesus",
        "holy-spirit",
        "satan",
        "isaiah",
        "elijah",
        "widow-of-sarepta",
        "elisha",
        "naaman",
        "simon-peter",
        "simons-wifes-mother"
      ],
      "places": [
        "jordan",
        "wilderness",
        "jerusalem",
        "pinnacle-of-the-temple",
        "galilee",
        "nazareth",
        "synagogue",
        "zarephath",
        "capernaum"
      ],
      "story": [
        "Full of the Holy Ghost, Jesus is led into the wilderness and tempted by the devil for forty days. Three times He answers, “It is written,” and the devil leaves Him for a season (1–13).",
        "Back in Galilee, Jesus reads Isaiah in the synagogue at Nazareth: “The Spirit of the Lord is upon me.” He says, “This day is this scripture fulfilled” (14–21).",
        "His hometown wonders at Him but asks, “Is not this Joseph’s son?” He reminds them of the widow of Sarepta and Naaman the Syrian, and they try to throw Him off a cliff. He walks through the middle of them (22–30).",
        "In Capernaum His word has power. He casts an unclean devil out of a man in the synagogue and heals Simon’s wife’s mother of a great fever (31–39).",
        "At sunset He lays His hands on every sick person brought to Him. At daybreak He goes to a desert place, and won’t be kept: He must preach the kingdom of God to other cities also (40–44)."
      ],
      "key": {
        "ref": "Luke 4:18",
        "text": "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives, and recovering of sight to the blind, to set at liberty them that are bruised,"
      },
      "big": "Jesus beat temptation with the word of God, and He came for the poor, the brokenhearted, the captive, the blind, and the bruised. He still sets captives free, one man at a time."
    }
  },
  {
    "id": "luke-05",
    "type": "chapter",
    "book": "Luke",
    "ch": 5,
    "date": "2026-10-29",
    "title": "Luke 5",
    "sub": "Launch out into the deep",
    "about": "Fishermen leave their nets, a leper is touched, a crippled man walks home forgiven, and a tax collector throws a feast for sinners.",
    "tags": [
      "Obedience",
      "Calling",
      "Cleansing",
      "Forgiveness",
      "Grace for sinners",
      "New life"
    ],
    "url": "studies/luke-05.html",
    "overview": {
      "where": "The shore of the lake of Gennesaret (the Sea of Galilee), towns of Galilee, a crowded house, and Levi's tax booth and home",
      "when": "Early in Jesus' ministry in Galilee, soon after Luke 4",
      "people": [
        "jesus",
        "simon-peter",
        "sons-of-zebedee",
        "pharisees",
        "doctors",
        "scribes",
        "sick-of-the-palsy",
        "levi-matthew",
        "publicans",
        "sinners",
        "john-the-baptist"
      ],
      "places": [
        "sea-of-galilee",
        "galilee",
        "judaea",
        "jerusalem",
        "wilderness",
        "receipt-of-custom"
      ],
      "story": [
        "Jesus teaches from Simon’s boat, then tells him to launch out into the deep. After a night of catching nothing, Simon obeys: “nevertheless at thy word.” The nets break and two boats nearly sink (1–7).",
        "Simon falls at Jesus’ knees: “Depart from me; for I am a sinful man, O Lord.” Jesus says, “Fear not; from henceforth thou shalt catch men,” and they forsake all to follow Him (8–11).",
        "A man full of leprosy says, “If thou wilt, thou canst make me clean.” Jesus touches him: “I will: be thou clean.” Then He withdraws into the wilderness to pray (12–16).",
        "Friends let a paralyzed man down through the roof. Jesus forgives his sins, and to prove He has that power, tells him to rise. He walks home carrying his bed, glorifying God (17–26).",
        "Levi the publican leaves all to follow Jesus and throws a feast. To the grumbling Pharisees Jesus says the sick need a physician, and new wine must go into new bottles (27–39)."
      ],
      "key": {
        "ref": "Luke 5:32",
        "text": "I came not to call the righteous, but sinners to repentance."
      },
      "big": "Jesus came for sinners, not for people who think they're fine. He cleanses the untouchable, forgives what no one else can, and makes a man new, not patched."
    }
  },
  {
    "id": "luke-06",
    "type": "chapter",
    "book": "Luke",
    "ch": 6,
    "date": "2026-10-29",
    "title": "Luke 6",
    "sub": "Hear, and do",
    "about": "Jesus is Lord of the sabbath, prays all night before choosing twelve ordinary men, and teaches a crowd on the plain to love their enemies and build on the rock.",
    "tags": [
      "Sabbath",
      "Prayer",
      "Blessing",
      "Enemies",
      "Mercy",
      "Obedience"
    ],
    "url": "studies/luke-06.html",
    "overview": {
      "where": "Galilee: grain fields and a synagogue on two sabbaths, a mountain where Jesus prayed, then a level place, probably near Capernaum, with crowds from Judaea, Jerusalem, Tyre and Sidon",
      "when": "Early in Jesus' work in Galilee, about AD 28",
      "people": [
        "jesus",
        "pharisees",
        "scribes",
        "disciples",
        "apostles",
        "simon-peter",
        "andrew",
        "sons-of-zebedee",
        "philip",
        "bartholomew",
        "levi-matthew",
        "thomas",
        "james-son-of-alphaeus",
        "simon-the-zealot",
        "judas-not-iscariot",
        "judas-iscariot",
        "david",
        "withered-hand"
      ],
      "places": [
        "synagogue",
        "house-of-god",
        "judaea",
        "jerusalem",
        "tyre-and-zidon"
      ],
      "story": [
        "His disciples pick grain on the sabbath. Jesus answers the Pharisees with David and the shewbread: “The Son of man is Lord also of the sabbath” (1–5).",
        "On another sabbath, with the scribes and Pharisees watching, He heals a man's withered hand. They are filled with madness (6–11).",
        "Jesus prays all night on a mountain, then chooses twelve and names them apostles (12–16).",
        "On a level place, crowds from Judaea, Jerusalem, Tyre and Sidon come to hear Him and be healed (17–19).",
        "He blesses the poor, the hungry, the weeping and the hated, and warns the rich and the full (20–26).",
        "Love your enemies, do as you would be done by, be merciful as your Father is merciful, judge not, forgive, and give (27–38).",
        "Blind guides, the mote and the beam, trees known by their fruit, and two houses: one dug deep to the rock, one with no foundation (39–49)."
      ],
      "key": {
        "ref": "Luke 6:46",
        "text": "And why call ye me, Lord, Lord, and do not the things which I say?"
      },
      "big": "Calling Jesus Lord means doing what He says. He meets people at the bottom, teaches us to love as God loved us when we were His enemies, and a life built on His word stands when the flood comes."
    }
  },
  {
    "id": "luke-07",
    "type": "chapter",
    "book": "Luke",
    "ch": 7,
    "date": "2026-10-29",
    "title": "Luke 7",
    "sub": "Thy faith hath saved thee",
    "about": "A Roman officer trusts a word, a widow gets her son back at the gate of Nain, John asks from prison, and a woman who was a sinner is forgiven and sent home in peace.",
    "tags": [
      "Faith",
      "Compassion",
      "Doubt",
      "Forgiveness",
      "Grace",
      "Salvation"
    ],
    "url": "studies/luke-07.html",
    "overview": {
      "where": "Capernaum, then the gate of Nain in lower Galilee, and a Pharisee's house; John the Baptist sends word from Herod's prison",
      "when": "Soon after the teaching on the plain, about AD 28",
      "people": [
        "jesus",
        "centurion",
        "elders",
        "widow-of-nain",
        "john-the-baptist",
        "disciples",
        "publicans",
        "pharisees",
        "lawyers",
        "simon-the-pharisee",
        "woman-who-was-a-sinner"
      ],
      "places": [
        "capernaum",
        "nain",
        "synagogue",
        "judaea",
        "wilderness"
      ],
      "story": [
        "A centurion in Capernaum, a Gentile who built the synagogue, sends word: “I am not worthy… say in a word.” Jesus marvels at his faith, and the servant is healed (1–10).",
        "At the gate of Nain, Jesus meets a widow burying her only son. He has compassion, touches the bier, and says, “Young man, I say unto thee, Arise” (11–17).",
        "John, in prison, sends two disciples to ask, “Art thou he that should come?” Jesus heals many and sends back what they have seen and heard (18–23).",
        "Jesus calls John more than a prophet, and says this generation is like children who won't play: they said John had a devil, and called Jesus a glutton and a friend of sinners (24–35).",
        "At Simon the Pharisee's table, a woman who was a sinner washes Jesus' feet with her tears. He tells of two debtors, both forgiven (36–43).",
        "Simon gave Him no water, no kiss, no oil. She loved much. “Thy sins are forgiven… Thy faith hath saved thee; go in peace” (44–50)."
      ],
      "key": {
        "ref": "Luke 7:50",
        "text": "And he said to the woman, Thy faith hath saved thee; go in peace."
      },
      "big": "Jesus' word is enough. He sees grief nobody brings to Him, answers honest doubt with evidence, and is the friend of sinners. Faith in Him saves, and those forgiven much love much."
    }
  }
];
