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



## Notes

- The site is fully self-contained — it uses system fonts and makes no external
  requests, so it runs entirely offline in your browser.
- Keys and signatures in the examples are illustrative, generated from the
  names and messages — not real key material.

