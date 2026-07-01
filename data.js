
// Pilsen Patriots — sample data
window.PP_DATA = {
  venue: {
    name: 'Bukovec',
    address: 'Nad Koupalištěm 188/9, Plzeň 4 – Bukovec',
    city: 'Plzeň 312 00',
    mapsUrl: 'https://maps.google.com/?q=Nad+Koupali%C5%A1t%C4%9Bm+188%2F9+Plze%C5%88',
    parking: 'Free parking on-site · gates open 90 min before kickoff',
  },
  sponsors: [
    { name: 'Snapbacks Liga', tier: 'League',  short: 'SNAP' },
    { name: 'Tipsport',       tier: 'Title',   short: 'TIP'  },
    { name: 'Plzeňský Prazdroj', tier: 'Club', short: 'PRZD' },
    { name: 'Škoda Plzeň',    tier: 'Club',    short: 'ŠKD'  },
    { name: 'Adidas',         tier: 'Apparel', short: 'ADI'  },
    { name: 'Riddell',        tier: 'Gear',    short: 'RDL'  },
  ],
  team: {
    name: 'Pilsen Patriots',
    short: 'Patriots',
    record: '2-5',
    rank: '#5 Snapbacks Liga',
    nextGame: {
      opponent: 'Znojmo Knights',
      opponentShort: 'ZNO',
      date: 'Sat, May 30',
      time: '14:00',
      venue: 'Bukovec, Plzeň',
      home: true,
      countdownDays: 4,
    },
    lastResult: {
      opponent: 'Nitra Knights',
      opponentShort: 'NIT',
      ourScore: 10,
      theirScore: 31,
      result: 'L',
    },
  },
  schedule: [
    { week: 1, opp: 'Přerov Mammoths',     oppShort: 'PRE', date: 'Mar 28', home: true,  result: 'L', ours: 34, theirs: 35, played: true },
    { week: 2, opp: 'Znojmo Knights',      oppShort: 'ZNO', date: 'Apr 05', home: false, result: 'L', ours: 14, theirs: 51, played: true },
    { week: 3, opp: 'Brno Sígrs',          oppShort: 'BRN', date: 'Apr 11', home: true,  result: 'W', ours: 25, theirs: 24, played: true },
    { week: 4, opp: 'BYE WEEK',            oppShort: '—',   date: 'Apr 18', home: true,  bye: true, played: true },
    { week: 5, opp: 'Vysočina Gladiators', oppShort: 'VYS', date: 'Apr 26', home: false, result: 'L', ours:  6, theirs: 49, played: true },
    { week: 6, opp: 'Přerov Mammoths',     oppShort: 'PRE', date: 'May 03', home: false, result: 'L', ours:  3, theirs: 21, played: true },
    { week: 7, opp: 'Ostrava Steelers',    oppShort: 'OST', date: 'May 09', home: true,  result: 'W', ours: 29, theirs: 21, played: true },
    { week: 8, opp: 'Nitra Knights',       oppShort: 'NIT', date: 'May 17', home: false, result: 'L', ours: 10, theirs: 31, played: true },
    { week: 9, opp: 'BYE WEEK',            oppShort: '—',   date: 'May 23', home: true,  bye: true, played: true },
    { week:10, opp: 'Znojmo Knights',      oppShort: 'ZNO', date: 'May 30', home: true,  result: 'L', ours: 16, theirs: 39, played: true },
    { week:11, opp: 'BYE WEEK',            oppShort: '—',   date: 'Jun 06', home: true,  bye: true, played: true },
    { week:12, opp: 'Brno Sígrs',          oppShort: 'BRN', date: 'Jun 13', home: false, result: 'L', ours: 17, theirs: 28, played: true },
    { week:13, opp: 'Vysočina Gladiators', oppShort: 'VYS', date: 'Jun 21', home: true,  result: 'L', ours: 0, theirs: 52, played: true },
  ],
  roster: [
    { num:  1, name: 'Tomáš Vokurka',       pos: 'TE' },
    { num:  2, name: 'Jakub Mathauser',     pos: 'RB', rookie: true },
    { num:  3, name: 'Jonáš Beneš',         pos: 'QB' },
    { num:  4, name: 'Jakub Brejcha',       pos: 'FS' },
    { num:  5, name: 'David Hlaváček',      pos: 'WR' },
    { num:  7, name: 'Robert Chroustovský', pos: 'CB' },
    { num:  9, name: 'Václav Šedivý',       pos: 'CB' },
    { num: 11, name: 'Patrik Vainer',       pos: 'QB' },
    { num: 12, name: 'Griffin Smith',       pos: 'CB' },
    { num: 14, name: 'Oliver Slavík',       pos: 'FS' },
    { num: 15, name: 'Tomáš Chadraba',      pos: 'FS' },
    { num: 16, name: 'David Krása',         pos: 'TE' },
    { num: 17, name: 'David Kaňok',         pos: 'CB' },
    { num: 18, name: 'Matěj Urban',         pos: 'WR' },
    { num: 19, name: 'Jakub Krasa',         pos: 'FS' },
    { num: 22, name: 'Josef Drmal',         pos: 'WR' },
    { num: 23, name: 'Adam Heller',         pos: 'K'  },
    { num: 24, name: 'Charles Arnold',      pos: 'RB' },
    { num: 26, name: 'Vratislav Novák',     pos: 'LB' },
    { num: 28, name: 'Matej Roan Gregorík', pos: 'CB', rookie: true },
    { num: 29, name: 'Josef Legát',         pos: 'SS' },
    { num: 30, name: 'Jonáš Novák',         pos: 'RB', rookie: true },
    { num: 32, name: 'Daniel Vokurka',      pos: 'DE' },
    { num: 33, name: 'Eric Coale',          pos: 'DB', rookie: true },
    { num: 34, name: 'Ondřej Němec',        pos: 'RB', rookie: true },
    { num: 44, name: 'Gerald Raab',         pos: 'LB' },
    { num: 50, name: 'Uriel Zizumbo',       pos: 'OL' },
    { num: 52, name: 'Jan Čapek',           pos: 'OL' },
    { num: 54, name: 'Jakub Juraj Pažický', pos: 'LB' },
    { num: 60, name: 'Tuan Nguyen',         pos: 'OL' },
    { num: 63, name: 'Tomáš Hájek',         pos: 'DT' },
    { num: 64, name: 'Tomáš Michalec',      pos: 'OL' },
    { num: 68, name: 'Petr Černohorský',    pos: 'DT' },
    { num: 69, name: 'Martin Holek',        pos: 'DT' },
    { num: 71, name: 'Martin Dušek',        pos: 'OL' },
    { num: 72, name: 'Martin Partha',       pos: 'OL' },
    { num: 73, name: 'Štepán Křížek',       pos: 'LB' },
    { num: 74, name: 'Matěj Putík',         pos: 'DT' },
    { num: 77, name: 'Oliver Slezák',       pos: 'OL' },
    { num: 80, name: 'Jiří Urban',          pos: 'DE' },
    { num: 82, name: 'Matěj Šlehofer',      pos: 'WR' },
    { num: 83, name: 'Petr Zapletal',       pos: 'WR' },
    { num: 85, name: 'Stanislav Bicán',     pos: 'DE' },
    { num: 87, name: 'Bruno Svatuška',      pos: 'DE' },
    { num: 90, name: 'Michael Bárta',       pos: 'DE' },
  ],
  news: [
    { id: 1, tag: 'GAME RECAP',  title: 'Gladiators close out Patriots 52-0 in season finale',  ago: '2d', accent: 'navy',
      body: 'Division champions Vysočina were too much in the Bukovec finale, handing Pilsen a 52-0 loss to end the 2026 regular season. The Patriots finish 2-8, sixth in the Snapbacks Liga.' },
    { id: 2, tag: 'SEASON',      title: '2026 wrap: a young roster takes its lumps',            ago: '1d', accent: 'red',
      body: 'Pilsen close the year at 2-8 with wins over Brno Sígrs and Ostrava. Five rookies logged significant snaps — a foundation to build on heading into the offseason.' },
    { id: 3, tag: 'COMMUNITY',   title: 'Youth camp registration opens this Monday',            ago: '5d', accent: 'navy',
      body: 'Two summer youth camps return to Bukovec this July — U12 flag and U15 tackle. Spots are limited and last year\'s sessions sold out within a week. Registration goes live Monday morning at pilsenpatriots.cz/nabor.' },
    { id: 4, tag: 'INJURY',      title: 'WR Dvořák cleared to return for the Knights matchup',  ago: '3d', accent: 'navy',
      body: 'Wide receiver Marek Dvořák has been fully cleared by team medical staff and will be available for Saturday\'s game. He\'s expected to slot back into the rotation alongside Šlehofer, Hlaváček, and Urban.' },
    { id: 5, tag: 'PLAYER',      title: 'Šlehofer leads team in receiving despite playing only 4 games', ago: '1w', accent: 'red',
      body: 'Matěj Šlehofer has racked up 275 receiving yards and 4 touchdowns in just four games — the most on the team. His 124-yard performance at Přerov in Week 1 remains the team\'s single-game receiving high.' },
    { id: 6, tag: 'COACHING',    title: 'Head Coach Levi Sturgis on the rebuild season',         ago: '2w', accent: 'navy',
      body: 'In a sit-down interview, head coach William Levi Sturgis discussed the team\'s 2-7 season, the influx of five rookies, and his expectations heading into the finale. "We\'re a young team that\'s learning to finish games."' },
  ],
  gameRecaps: {
    1: { headline: 'Mammoths edge Patriots in shootout opener',  body: 'A back-and-forth season opener that came down to the final drive. Vainer threw four touchdown passes and 257 yards but Přerov answered with a late score to win 35-34. Šlehofer led receivers with 124 yards on 7 catches.' },
    2: { headline: 'Knights overwhelm Patriots at home',          body: 'Znojmo\'s passing attack carved up the defense for 297 yards and 6 touchdowns. The Patriots managed just 91 passing yards and turned the ball over four times. A reset week is coming.' },
    3: { headline: 'Arnold runs over Sígrs for first win',        body: 'Charles Arnold piled up 105 rushing yards and the defense forced three turnovers in a hard-fought 25-24 road win. Vainer added three touchdown passes through the air.' },
    5: { headline: 'Gladiators roll Patriots in Jihlava',         body: 'Vysočina\'s ground game went off for 328 rushing yards. The Patriots offense was held to 45 passing yards and never found a rhythm.' },
    6: { headline: 'Defense battles but offense stalls',          body: 'Adam Heller\'s 50-yard field goal was the only score of the day for Pilsen. The Mammoths\' ground attack ate clock and the defense couldn\'t get off the field on third down.' },
    7: { headline: 'Patriots grind out road win over Steelers',   body: 'Vainer threw for 218 yards and Arnold rushed for 82 with two scores. The defense added two interceptions in a complete team win — the second of the season.' },
    8: { headline: 'Knights pull away from Patriots',             body: 'A tight first half gave way to a Nitra surge in the third quarter. The Patriots offense managed just 159 total yards. Slavík forced two takeaways but the offense couldn\'t convert them into points.' },
    10: { headline: 'Znojmo too strong in Bukovec homecoming',    body: 'The Knights brought their high-powered offense to Bukovec and pulled away 39-16. Pilsen hung tough early but couldn\'t keep pace with one of the division\'s top two teams.' },
    12: { headline: 'Patriots fall at Brno in road battle',       body: 'A back-and-forth game at Brněnské Ivanovice ended 28-17 for the Sígrs, splitting the season series after Pilsen\'s Week 3 win. The result leaves both clubs near the bottom of the Snapbacks table.' },
    13: { headline: 'Gladiators shut out Patriots in finale',     body: 'Division-leading Vysočina closed Pilsen\'s 2026 season with a 52-0 win at Bukovec. The Patriots finish 2-8 and sixth in the Snapbacks Liga. Vysočina advance to the playoffs.' },
  },
  playerBios: {
    1: 'Veteran tight end and one of the team captains. Reliable target across the middle.',
    11: 'Starting quarterback. Threw for 1,130 yards and 12 touchdowns over the 2026 season.',
    24: 'Lead running back. Team-leading 697 rushing yards and 4 touchdowns; also returns kicks.',
    82: 'Big-play wide receiver. Team-leading 6 receiving touchdowns and 485 yards in just 7 games.',
    19: 'Hard-hitting free safety and one of the team\'s leading tacklers with 36 total stops.',
    73: 'Edge rusher with a team-leading 7 tackles for loss. Also handles kickoffs.',
    14: 'Ball-hawking safety with 2 interceptions and 42 return yards. Versatile defensive piece.',
    23: 'Reliable kicker. A perfect 3-for-3 on field goals including a 50-yarder vs Přerov.',
  },
  stats: {
    games: 10,
    teamAvg: [
      { label: 'Points / game',    ptr: '15.4', opp: '35.1' },
      { label: 'Rushing yds / G',  ptr: '98.7', opp: '184.0'},
      { label: 'Passing yds / G',  ptr: '133.2',opp: '198.2'},
      { label: 'Total offense / G',ptr: '231.9',opp: '382.2'},
      { label: 'Sacks',            ptr: '11',   opp: '6'    },
      { label: 'Interceptions',    ptr: '8',    opp: '23'   },
      { label: '3rd-down %',       ptr: '35%',  opp: '47%'  },
      { label: 'Red-zone scoring', ptr: '84%',  opp: '73%'  },
    ],
    scoreByQ: {
      pilsen: [18, 50, 48, 38, 154],
      opp:    [70, 131, 64, 86, 351],
    },
    leaders: [
      { cat: 'Passing',    name: 'Patrik Vainer',         num: 11, big: '1130', unit: 'YDS', sub: '12 TD · 52.2% comp' },
      { cat: 'Rushing',    name: 'Charles Arnold',        num: 24, big: '697',  unit: 'YDS', sub: '4 TD · 4.4 avg' },
      { cat: 'Receiving',  name: 'Matěj Šlehofer',        num: 82, big: '485',  unit: 'YDS', sub: '6 TD · 37 rec' },
      { cat: 'Tackles',    name: 'Václav Šedivý',         num: 9,  big: '36.5', unit: 'TOT', sub: '28 solo · 17 ast' },
      { cat: 'Sacks',      name: 'Jakub Juraj Pažický',   num: 54, big: '3.5',  unit: 'SACK',sub: '10.5 TFL · 31 yds' },
      { cat: 'INTs',       name: 'Oliver Slavík',         num: 14, big: '2',    unit: 'INT', sub: '42 return yards' },
    ],
  },
  standings: [
    { rank: 1, team: 'Vysočina Gladiators',  w: 9, l: 1 },
    { rank: 2, team: 'Znojmo Knights',       w: 9, l: 1 },
    { rank: 3, team: 'Nitra Knights',        w: 7, l: 3 },
    { rank: 4, team: 'Přerov Mammoths',      w: 6, l: 4 },
    { rank: 5, team: 'Brno Sígrs',           w: 2, l: 8 },
    { rank: 6, team: 'Pilsen Patriots',      w: 2, l: 8, us: true },
    { rank: 7, team: 'Ostrava Steelers',     w: 0, l: 10 },
  ],
  staff: [
    { name: 'William Levi Sturgis', role: 'Head Coach',                short: 'WS', accent: 'red'  },
    { name: 'Daniel Kokoška',       role: 'Defensive Coordinator',     short: 'DK',  accent: 'navy' },
    { name: 'Libor Kurfirst',       role: 'Offensive Coordinator',     short: 'LK',  accent: 'navy' },
    { name: 'Larry Lewis',          role: 'Special Teams Coordinator', short: 'LL',  accent: 'navy' },
    { name: 'Jan Hutter',           role: 'Team Photographer',         short: 'JH',  accent: 'navy' },
    { name: 'Vladimír Duda',        role: 'Graphic Designer',          short: 'VD',  accent: 'navy' },
  ],
  merch: [
    { id: 'jersey-home',    name: 'Home Jersey · Navy',     price: '1 990',  short: '#11' },
    { id: 'jersey-away',    name: 'Away Jersey · White',    price: '1 990',  short: '#11' },
    { id: 'hoodie',         name: 'Patriots Hoodie',        price: '1 290',  short: 'PP'  },
    { id: 'snapback',       name: 'Snapback · Navy/Red',    price: '590',    short: 'PP'  },
    { id: 'beanie',         name: 'Beanie · Navy',          price: '390',    short: 'PP'  },
    { id: 'tshirt',         name: 'Star Tee · Cream',       price: '590',    short: '★'   },
  ],
  // User profile (mock)
  fan: {
    name: 'Jan Svoboda',
    member: 'Season Ticket Holder · Gold',
    since: 'Member since 2019',
    seat: 'Section A · Row 4 · Seat 12',
    points: 2480,
  },
};

// ═══════════════════════════════════════════════════════════════
//  AUTO-DERIVED — do not hand-edit the values below.
//  To update the app after a game, you ONLY touch the matching row
//  in PP_DATA.schedule: fill in result / ours / theirs and set
//  played: true. Everything here recalculates on its own —
//  record, last game, next game, countdown, points, games played,
//  the standings table, ranking, and the opponent's record.
// ═══════════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════════
//  LIVE DATA SOURCE
//  When PP_DATA_URL points to a hosted JSON file, the app fetches it
//  on launch and merges it over the built-in defaults below, then
//  re-derives everything. Leave it empty to use the built-in data.
//  The hosted JSON only needs the fields that change: schedule,
//  standings, team basics, roster, news. See patriots-live/README.
// ═══════════════════════════════════════════════════════════════
window.PP_DATA_URL = window.PP_DATA_URL || "";

(window.PP_DERIVE = function deriveData(D) {
  const MONTHS = { Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11 };
  const SEASON_YEAR = 2026;

  const played = D.schedule.filter(g => g.played && !g.bye && g.result);
  const wins   = played.filter(g => g.result === 'W').length;
  const losses = played.filter(g => g.result === 'L').length;
  const ties   = played.filter(g => g.result === 'T').length;

  // Record + season totals
  D.team.record        = ties ? `${wins}-${losses}-${ties}` : `${wins}-${losses}`;
  D.team.pointsFor     = played.reduce((s, g) => s + (g.ours   || 0), 0);
  D.team.pointsAgainst = played.reduce((s, g) => s + (g.theirs || 0), 0);
  D.stats.games        = played.length;

  // Last result = most recent played game
  const last = played[played.length - 1];
  if (last) {
    D.team.lastResult = {
      opponent: last.opp, opponentShort: last.oppShort,
      ourScore: last.ours, theirScore: last.theirs,
      result: last.result, date: last.date, home: last.home,
    };
  }

  // Standings: sync our row from the schedule, re-sort, re-rank
  const usRow = D.standings.find(s => s.us);
  if (usRow) { usRow.w = wins; usRow.l = losses; }
  D.standings.sort((a, b) => {
    const pa = a.w / ((a.w + a.l) || 1), pb = b.w / ((b.w + b.l) || 1);
    return pb - pa || b.w - a.w || a.l - b.l;
  });
  D.standings.forEach((s, i) => { s.rank = i + 1; });
  if (usRow) {
    const league = (D.team.rank || '').replace(/^#\d+\s*/, '') || 'Snapbacks Liga';
    D.team.rank = `#${usRow.rank} ${league}`;
  }

  // Next game = first unplayed non-bye row
  const next = D.schedule.find(g => !g.played && !g.bye);
  D.team.seasonComplete = !next;
  if (next) {
    const meta = D.team.nextGame || {};
    let countdown = meta.countdownDays;
    const [mon, day] = next.date.split(' ');
    if (MONTHS[mon] != null) {
      const target = new Date(SEASON_YEAR, MONTHS[mon], parseInt(day, 10));
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      countdown = Math.max(0, Math.round((target - today) / 86400000));
    }
    const oppRow = D.standings.find(s => s.team === next.opp);
    D.team.nextGame = {
      ...meta,
      opponent: next.opp, opponentShort: next.oppShort,
      date: next.date, home: next.home, week: next.week,
      countdownDays: countdown,
      oppRecord: oppRow ? `${oppRow.w}-${oppRow.l}` : (meta.oppRecord || ''),
    };
  } else {
    // Season over — record final placement for the Home summary
    const finalRow = D.standings.find(s => s.us);
    D.team.finalRank = finalRow ? finalRow.rank : null;
    D.team.seasonRecord = D.team.record;
  }

  // Stamp a human-readable "last synced" date for display
  D.lastUpdated = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
})(window.PP_DATA);

// Fetch hosted live data (if configured) and re-derive. Returns a promise.
window.PP_LOAD_LIVE = async function () {
  const url = window.PP_DATA_URL;
  if (!url) return false;
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const live = await res.json();
    // Merge only the fields the feed provides; keep built-in defaults otherwise.
    ['schedule', 'standings', 'roster', 'news', 'gameRecaps', 'playerBios', 'staff'].forEach(k => {
      if (live[k] != null) window.PP_DATA[k] = live[k];
    });
    if (live.team) Object.assign(window.PP_DATA.team, live.team);
    if (live.season) window.PP_DATA.season = live.season;
    window.PP_DERIVE(window.PP_DATA);
    if (live.fetchedAt) window.PP_DATA.lastUpdated = live.fetchedAt;
    return true;
  } catch (e) {
    console.warn('[Patriots] live data fetch failed, using built-in data:', e);
    return false;
  }
};

