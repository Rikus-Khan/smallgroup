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
  }
];
