// Every study on the site. The home page builds the bookshelf from this list,
// so publishing a new study means adding one entry here (any order is fine).
//
// type:  "chapter" | "topic" | "doctrine" | "concept" | "book"
// book:  Bible book name, spelled as in BIBLE_BOOKS on the home page (chapters and book overviews)
// ch:    chapter number (chapters only)
// date:  the day it was added, YYYY-MM-DD; the newest one is featured on the home page
// tags:  themes, for future search and filtering
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
    url: "studies/john-01.html"
  }
];
