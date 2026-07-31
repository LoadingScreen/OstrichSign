# OstrichSign

A static, browser-based demo of SAG ring signatures over Nostr keys. No build
step, no dependencies — just HTML, CSS, and a little vanilla JavaScript.

## Run it

**Quickest:** double-click `index.html` to open it in your browser.

**Recommended** (behaves exactly like it will when hosted, and avoids the odd
`file://` quirk): serve the folder over HTTP. From inside this folder:

    python3 -m http.server 8000

then open <http://localhost:8000> in your browser. (Any static server works —
`npx serve`, VS Code Live Server, etc.)

To stop the server, press `Ctrl+C`.

## What's here

- `index.html` — home, with the rotating example in the hero
- `examples.html` — all examples, with explanations
- `about.html`, `console.html`, `faq.html`, `reading.html` — the rest of the site
- `site.css` — all styling
- `examples.js` — **the only file you edit to change examples** (messages,
  titles, rings, order). The homepage hero shows the first four; the examples
  page shows them all. Edit, save, refresh.
- `signed-card.js` — shared renderer for the example cards (no need to edit)

## Notes

- Fonts load from Google Fonts, so the first load needs an internet connection;
  everything else is self-contained and runs entirely in the browser.
- Keys and signatures in the examples are illustrative, generated from the
  names and messages — not real key material.
- To publish: put these files at the root of a GitHub Pages repo (or any static
  host). No configuration needed.
