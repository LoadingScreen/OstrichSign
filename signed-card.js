/* OstrichSign — renders the "signed message" cards from examples.js.
   You shouldn't need to edit this file to change content: everything editable
   lives in examples.js. This file:
     • builds the card HTML (message, ring, signature, verdict)
     • generates stable illustrative npubs/signatures from the names/message
     • runs the homepage hero rotator (first four examples)
     • renders the full list, with notes, on examples.html
*/
(function () {
  "use strict";

  /* ---------- deterministic pseudo-randomness (stable across reloads) ---- */
  function hash(str) {
    var h = 2166136261 >>> 0;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  var BECH = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";
  function npubFor(name) {
    var r = rng(hash("npub:" + name)), s = "npub1";
    for (var i = 0; i < 58; i++) s += BECH[(r() * 32) | 0];
    return s.slice(0, 18) + "\u2026" + s.slice(-8);
  }
  function sigFor(ex) {
    var r = rng(hash("sig:" + ex.msg)), s = "";
    for (var i = 0; i < 322; i++) s += "0123456789abcdef"[(r() * 16) | 0];
    return s.slice(0, 40) + "\u2026" + s.slice(-8);
  }


  /* ---------- card construction ----------------------------------------- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;");
  }
  function shuffle(members, seed) {
    var arr = members.slice(), r = rng(hash("order:" + seed));
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(r() * (i + 1)), t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }
  function rowHTML(m) {
    var t = m.title ? '<span class="idtitle">' + esc(m.title) + "</span>" : "";
    var np = npubFor(m.name);
    var npHTML = '<span class="np-pfx">' + np.slice(0, 5) + "</span>" + np.slice(5);
    return '<li class="idrow"><span class="idmeta"><span class="idname">' + esc(m.name) + "</span>" + t
      + '<span class="idnpub">' + npHTML + "</span></span></li>";
  }
  function cardHTML(ex) {
    var members = shuffle(ex.members, ex.msg);
    var n = members.length;
    return '<div class="signed">'
      + '<p class="signed-msg">\u201C' + esc(ex.msg) + '\u201D</p>'
      + '<div class="signed-sec"><div class="signed-k">ring \u00b7 ' + n + ' public keys</div>'
      + '<ul class="signed-keys">' + members.map(rowHTML).join("") + "</ul></div>"
      + '<div class="signed-sec"><div class="signed-k">signature</div>'
      + '<div class="signed-sig"><span class="pfx">ringX</span>' + sigFor(ex) + "</div></div></div>";
  }

  /* ---------- homepage hero: rotate through the first four --------------- */
  function initHero(mount, examples) {
    var EX = examples.slice(0, 4);
    var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var card = document.createElement("div");
    card.className = "sx";
    var dotsEl = document.createElement("div");
    dotsEl.className = "sxdots";
    var dots = EX.map(function (_, k) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "sxdot";
      b.setAttribute("aria-label", "Show example " + (k + 1));
      b.addEventListener("click", function () { render(k); start(); });
      dotsEl.appendChild(b);
      return b;
    });
    mount.appendChild(card);
    mount.appendChild(dotsEl);
    var i = 0, timer = null;
    function render(n) {
      i = n; card.innerHTML = cardHTML(EX[n]);
      if (!reduce) { card.classList.remove("sx-anim"); void card.offsetWidth; card.classList.add("sx-anim"); }
      dots.forEach(function (d, k) {
        if (k === n) d.setAttribute("aria-selected", "true");
        else d.removeAttribute("aria-selected");
      });
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function start() {
      if (reduce) return;
      stop(); timer = setInterval(function () { render((i + 1) % EX.length); }, 7000);
    }
    card.addEventListener("mouseenter", stop);
    card.addEventListener("mouseleave", start);
    render(0); start();
  }

  /* ---------- examples page: all of them, with notes --------------------- */
  function initExamplesPage(mount, examples) {
    examples.forEach(function (ex) {
      var sec = document.createElement("section");
      sec.className = "exitem";
      var about = Array.isArray(ex.about) ? ex.about : (ex.about ? [ex.about] : []);
      var note = about.length
        ? '<div class="ex-about">' + about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>"
        : "";
      // Per-example title headings are disabled for now. To show them again, add:
      //   var head = ex.title ? "<h2>" + esc(ex.title) + "</h2>" : "";
      // and prepend `head +` to the line below.
      sec.innerHTML = cardHTML(ex) + note;
      mount.appendChild(sec);
    });
  }

  /* ---------- boot -------------------------------------------------------- */
  if (typeof document !== "undefined") {
    var data = (typeof window !== "undefined" && window.OS_EXAMPLES) || [];
    var hero = document.getElementById("hero-signed");
    if (hero && data.length) initHero(hero, data);
    var list = document.getElementById("examples-list");
    if (list && data.length) initExamplesPage(list, data);
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { cardHTML: cardHTML, npubFor: npubFor, sigFor: sigFor };
  }
})();
