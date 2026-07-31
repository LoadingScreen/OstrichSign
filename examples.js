/* OstrichSign — example ring-signed messages.
   This one file drives BOTH the homepage hero and examples.html. No build step:
   edit, save, refresh.

   HOW IT WORKS
   • The homepage hero rotates through the FIRST FOUR examples below.
   • examples.html shows ALL of them, in order, with their "about" notes.
   • To reorder (or change what's in the hero), cut a whole { ... } block and
     paste it elsewhere in the list. Trailing commas are fine.

   EACH EXAMPLE
   • title   — optional heading for the examples page.
   • msg     — the signed message itself. Line breaks in it are preserved.
   • about   — optional explanation for the examples page. A string, or an
               array of strings for multiple paragraphs. Not shown in the hero.
               title and about are independent: a scenario may have either,
               both, or neither.
   • members — the ring, in display order. Each member is { name, title? }:
       { name: "Grace Adeyemi", title: "RN" }
       { name: "Joan Pereira" }
     name is required; title is optional and shown on its own line.

   Keys and signatures are illustrative and generated automatically from the
   names and message — never add real key material here.
*/
window.OS_EXAMPLES = [

// { title: "Anonymous reference",
//     msg: "I've worked with this candidate for years and I'll vouch for them — anonymously, but verifiably. One of the keys in this ring is mine.",
//     about: "A professional reference from someone who won't attach their name.",
//     members: [
//       { name: "James Whitfield", title: "Eng. Director"},
//       { name: "Aisha Khan"},
//       { name: "Dr. Priya Nair"},
//       { name: "Tom Bradley", pic: "initials" },
//       { name: "Daniel Osei", pic: "initials" },
//       { name: "Charlotte Hughes"},
//       { name: "Raj Patel", pic: "initials" },
//       { name: "Megan Doyle", pic: "initials" },
//     ] },

  { title: "Safety commitments dropped",
    msg: "Our safety policy doesn't reflect what's happening inside. The eval commitments we published were skipped for the last two versions in order to meet the launch schedule. I'm one of the following people on the alignment team.",
    about: "An AI-safety whistleblower to an external auditor.",
    members: [
      { name: "Daniel Okonkwo", title: "Research Lead"},
      { name: "Anika Iyer" },
      { name: "Thomas Reilly" },
      { name: "Wei Zhang" },
      { name: "Sophie Marchetti" },
      { name: "Hannah Brooks"},
      { name: "Arjun Mehta"},
      { name: "Lena Fischer" },
    ] },

  { title: "Won't survive replication",
    msg: "I'm an author on the paper you're replicating. The effect in Figure 3 is far more fragile than the paper admits, and we all knew it before we submitted. You can save yourselves weeks of effort by starting there.",
    about: "A warning against wasted replication, from inside the author list.",
    members: [
      { name: "Dr. Yuki Tanaka" },
      { name: "Marcus Webb"},
      { name: "Elena Petrova" },
      { name: "Jason Liu" },
      { name: "Dr. Sandra Okafor"},
      { name: "Kevin Braithwaite" },
      { name: "Priya Venkataraman" },
    ] },

  { title: "Out-of-process bans",
    msg: "I'm one of the mods. When tildeharp got banned, the log said 'spam.' But she wasn't spamming, at least not more than anyone else here does. She got banned the night after she pushed back on an admin in the staff channel, and the 'spam' line was written afterward, so there'd be something to point to. She's been saying so in her own server and in a few DMs, and I'm corroborating it.",
    about: "A moderator flagging bans that skipped the team's own process.",
    members: [
      { name: "velvetnoise" },
      { name: "arp2600@nostrcheck.me" },
      { name: "cv_gate" },
      { name: "polyphonic_kate"},
      { name: "modwheel" },
      { name: "sawtoothsam" },
    ] },

  // { title: "Understaffed ward (to an inspector)",
  //   msg: "The staffing returns you've been shown don't match the shifts we're working — tonight it's two RNs to thirty-one patients.",
  //   about: "The same report, directed at an external inspector.",
  //   members: [
  //     { name: "Grace Adeyemi", title: "RN"},
  //     { name: "Maria Santos", title: "RN"},
  //     { name: "Sister Bridget Flynn", title: "Charge Nurse", pic: "initials" },
  //     { name: "Dr. Omar Haddad"},
  //     { name: "Joan Pereira", title: "RN", pic: "initials" },
  //     { name: "Lewis Tan", pic: "avatar" },
  //     { name: "Priya Sharma", title: "RN", pic: "initials" },
  //     { name: "Kwame Mensah"},
  //   ] },

  // { title: "Leak channel authentication",
  //   msg: "One of these keys belongs to someone on the team — proof a real insider stands behind the documents you've received.",
  //   about: "Authenticating a document-leak channel to the receiving editor.",
  //   members: [
  //     { name: "Niamh O'Sullivan", title: "Compliance"},
  //     { name: "Conor Walsh", pic: "initials" },
  //     { name: "Aoife Byrne"},
  //     { name: "David Kelly", pic: "initials" },
  //     { name: "Sinéad Doyle", pic: "initials" },
  //     { name: "Patrick Nolan", pic: "avatar" },
  //     { name: "Tomasz Kowalski", pic: "initials" },
  //     { name: "Liam Murphy"},
  //   ] },

  // { title: "Responsible disclosure",
  //   msg: "Before you read the details: this isn't noise from a scanner. One of these keys belongs to someone at a customer org — proof the report is real and worth your time.",
  //   about: "A security disclosure, provably from a genuine customer.",
  //   members: [
  //     { name: "Sanne de Vries", title: "Security Lead"},
  //     { name: "Daan Bakker", pic: "initials" },
  //     { name: "Lotte Jansen"},
  //     { name: "Thomas Visser", pic: "initials" },
  //     { name: "Femke Smit", pic: "initials" },
  //     { name: "Bram Mulder"},
  //     { name: "Pieter van Dijk", pic: "avatar" },
  //     { name: "Julia Hendriks", pic: "initials" },
  //   ] },

  { title: "Objection to an invitation",
    msg: "To: the festival board\n From: an anonymous committee member\nThere are public allegations against the headliner but the booking was summarily approved anyway. For the sake of accountability, we really ought to record a secret ballot vote before the lineup goes public. If his slot survives the vote, so be it. But it shouldn't survive on the assumption that nobody minded.",
    about: "Committee dissent over a controversial booking.",
    members: [
      { name: "Meredith Osborne"},
      { name: "Jasmine Persaud" },
      { name: "Michael D'Souza"},
      { name: "Erin Callahan" },
      { name: "Samir Chaudhry" },
      { name: "Kate Mackenzie"},
      { name: "Devon Clarke" },
      { name: "Olivia Tremblay" },
    ] },

  { title: "The room's gone quiet",
    msg: "Someone needs to say this ahead of the general meeting: We've ejected three players this year due to completely unrelated social media posts. People have completely stopped joking around in the band room, and a lot of conversations are only happening in the parking lot now, including some important ones. This isn't inclusivity, it's cancel culture.",
    about: "A committee member protesting expulsions from a club.",
    members: [
      { name: "Keith Sutcliffe", title: "Chair"},
      { name: "Janet Hargreaves", title: "Band Secretary" },
      { name: "Brian Ackroyd" },
      { name: "Susan Whitaker"},
      { name: "Colin Dyson" },
      { name: "Margaret Ogden" },
      { name: "David Broadbent"},
      { name: "Pauline Metcalfe" },
    ] },

  { title: "MMO Guild drama",
    msg: "One of the loot council signed this. The Mythic-track chest didn't drop the way you were told in the recap — the item went to an officer's alt before anyone else was considered, and the 'contested roll' never happened. I'm on the council, I was in the channel, and I'm not willing to keep quiet about it.",
    about: "A guild officer flagging bank discrepancies members can't see.",
    members: [
      { name: "Kaedrix", title: "Raid Lead" },
      { name: "SirGrindalot" },
      { name: "luna_bt" },
      { name: "zairyn" },
      { name: "mossbite" },
      { name: "Hadrix"},
      { name: "veyra" },
    ] },

/*  { title: "Recording corroboration",
    msg: "The recording is authentic. One of the people in this ring was in the room.",
    about: "Authenticating a recording to a journalist, from someone present.",
    members: [
      { name: "Robert Hanley"},
      { name: "Susan Albright", pic: "initials" },
      { name: "Mark Delgado", pic: "avatar" },
      { name: "Emily Carter", pic: "initials" },
      { name: "Frank Russo"},
      { name: "Diane Foster", pic: "initials" },
      { name: "Greg Sullivan"},
      { name: "Patricia Nolan", pic: "initials" },
    ] },*/

  { title: "Open-letter signatory",
    msg: "I'm one of the people who helped draft today's open letter. I stand by every word, but signing it openly would cost me my job.",
    about: "A letter signatory proving membership without going public.",
    members: [
      { name: "Prof. Margaret Ellison"},
      { name: "Dr. Stephen Walsh" },
      { name: "David Cho"},
      { name: "Hannah Levin", title: "Lecturer" },
      { name: "Robert Feldman" },
      // { name: "Karen Liu"},
      // { name: "Thomas Reed" },
      // { name: "Angela Pierce" },
    ] },

  { title: "Bob the whistleblower",
    msg: "You asked for proof. The Prime Minister personally ordered the contract audit buried, and the file that proves it still exists. I am one of the following cabinet members, and for the purposes of this disclosure you may call me Bob.",
    about: "An illustration of original example from the 2001 paper 'How to Leak a Secret'.",
    members: [
      { name: "Katarina Molnar", title: "Minister of Finance"},
      { name: "Stefan Brankovic", title: "LK Minister of Defense" },
      { name: "Irena Kovac", title: "Minister of Education"},
      { name: "Tomas Herzeg", title: "LK Minister of Transportation"},
      { name: "Milena Petran", title: "Minister of the Interior, Lower Kryptonia"},
      { name: "Andrej Vlasic", title: "Department of Energy"},
      { name: "Petra Simun", title: "Minister of Culture, RLK"},
    ] },



];
