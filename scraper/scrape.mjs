// ============================================================================
//  Pilsen Patriots — live data scraper
//  Reads the CAAF.cz Snapbacks Liga page (schedule + standings) and writes
//  ../data/patriots-data.json, which the app fetches on launch.
//
//  Node 18+ (built-in fetch). Run:  npm start
//  Editorial content (news, bios, merch, staff) is kept in config.json and
//  merged in unchanged — the scraper only touches results & standings.
// ============================================================================

import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'data', 'patriots-data.json');
const CONFIG = join(__dirname, 'config.json');

// CAAF Snapbacks Liga 2026 division page (results + table)
const DIVISION_URL = 'https://www.caaf.cz/?path=divize/203/rozpisdivize/';

// Our team's name as it appears on CAAF, plus the short code used in the app.
const OUR_TEAM = 'Pilsen Patriots';
const SEASON_YEAR = 2026;

// Map full CAAF team names -> { short } used by the app UI.
const TEAM_SHORT = {
  'Pilsen Patriots': 'PIL',
  'Přerov Mammoths': 'PRE',
  'Znojmo Knights': 'ZNO',
  'Brno Sígrs': 'BRN',
  'Vysočina Gladiators': 'VYS',
  'Nitra Knights': 'NIT',
  'ISMM Ostrava Steelers': 'OST',
};
// Display-normalised names (strip sponsor prefixes for the UI).
const TEAM_DISPLAY = {
  'ISMM Ostrava Steelers': 'Ostrava Steelers',
};

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function short(name)   { return TEAM_SHORT[name] || name.slice(0, 3).toUpperCase(); }
function display(name) { return TEAM_DISPLAY[name] || name; }

// "28.3." -> "Mar 28"
function czDateToShort(cz) {
  const m = cz.match(/(\d{1,2})\.(\d{1,2})\./);
  if (!m) return cz;
  const day = parseInt(m[1], 10);
  const mon = parseInt(m[2], 10);
  return `${MONTHS[mon - 1]} ${String(day).padStart(2, '0')}`;
}

async function main() {
  console.log('Fetching', DIVISION_URL);
  const res = await fetch(DIVISION_URL, { headers: { 'User-Agent': 'PatriotsApp/1.0' } });
  if (!res.ok) throw new Error('CAAF fetch failed: HTTP ' + res.status);
  const html = await res.text();

  // ---- Parse result rows -------------------------------------------------
  // Each game row contains two team links and a "NN : NN" score.
  // We scan the raw HTML for our team's rows.
  const games = parseGames(html);
  const ourGames = games.filter(g => g.home === OUR_TEAM || g.away === OUR_TEAM);

  // Build the app schedule (one entry per week our team plays).
  const schedule = [];
  let week = 0;
  for (const g of ourGames) {
    week += 1;
    const weAreHome = g.home === OUR_TEAM;
    const opp = weAreHome ? g.away : g.home;
    const entry = {
      week, opp: display(opp), oppShort: short(opp),
      date: czDateToShort(g.date), home: weAreHome,
      played: g.played,
    };
    if (g.played) {
      const ours   = weAreHome ? g.homeScore : g.awayScore;
      const theirs = weAreHome ? g.awayScore : g.homeScore;
      entry.result = ours > theirs ? 'W' : ours < theirs ? 'L' : 'T';
      entry.ours = ours;
      entry.theirs = theirs;
    }
    schedule.push(entry);
  }

  // ---- Parse standings table ---------------------------------------------
  const standings = parseStandings(html).map((s, i) => ({
    rank: i + 1,
    team: display(s.team),
    w: s.w, l: s.l,
    ...(s.team === OUR_TEAM ? { us: true } : {}),
  }));

  // ---- Merge editorial config (news, bios, etc.) -------------------------
  let config = {};
  try { config = JSON.parse(await readFile(CONFIG, 'utf8')); }
  catch { console.warn('No config.json — writing results & standings only.'); }

  const out = {
    season: SEASON_YEAR,
    fetchedAt: new Date().toISOString().slice(0, 10),
    team: { name: OUR_TEAM, short: 'Patriots', ...(config.team || {}) },
    schedule,
    standings,
    ...(config.roster ? { roster: config.roster } : {}),
    ...(config.news ? { news: config.news } : {}),
    ...(config.gameRecaps ? { gameRecaps: config.gameRecaps } : {}),
    ...(config.playerBios ? { playerBios: config.playerBios } : {}),
    ...(config.staff ? { staff: config.staff } : {}),
  };

  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(out, null, 2) + '\n', 'utf8');
  const played = schedule.filter(g => g.played).length;
  console.log(`Wrote ${OUT}`);
  console.log(`  ${schedule.length} games (${played} played), ${standings.length} teams in table.`);
}

// --- Parsers ---------------------------------------------------------------
// The CAAF page is a server-rendered HTML table. We extract team links and
// the score cell from each <tr>. This is intentionally tolerant of layout.

function stripTags(s) { return s.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim(); }

function parseGames(html) {
  const games = [];
  // Split into table rows.
  const rows = html.split(/<tr[\s>]/i).slice(1);
  for (const row of rows) {
    // Team names from kluby links: ...kluby/NN-klub/...-tym/">TEAM</a>
    const teams = [...row.matchAll(/kluby\/[^"']*-tym\/[^>]*>([^<]+)<\/a>/g)].map(m => m[1].trim());
    if (teams.length < 2) continue;
    // Score "NN : NN" (optionally with OT marker after).
    const score = row.match(/>\s*(\d{1,3})\s*:\s*(\d{1,3})\s*(?:OT)?\s*</);
    // Date like "28.3."
    const date = (row.match(/(\d{1,2}\.\d{1,2}\.)/) || [])[1] || '';
    const homeScore = score ? parseInt(score[1], 10) : null;
    const awayScore = score ? parseInt(score[2], 10) : null;
    games.push({
      home: teams[0], away: teams[1], date,
      played: score != null,
      homeScore, awayScore,
    });
  }
  return games;
}

function parseStandings(html) {
  // The standings table rows contain a team link then Výhry / Remízy / Prohry.
  // Find the "Tabulka" section and parse rows with a team link followed by numbers.
  const tableStart = html.indexOf('Tabulka');
  const section = tableStart >= 0 ? html.slice(tableStart) : html;
  const rows = section.split(/<tr[\s>]/i).slice(1);
  const out = [];
  for (const row of rows) {
    const teamMatch = row.match(/kluby\/[^"']*-tym\/[^>]*>([^<]+)<\/a>/);
    if (!teamMatch) continue;
    // Numbers in the row: wins, ties, losses, then score "x:y", then ratio.
    const cells = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(m => stripTags(m[1]));
    // cells: [team, W, T, L, score, ratio]
    const nums = cells.map(c => c.replace(/[^\d]/g, '')).filter(c => c !== '');
    // Find W / T / L — first three standalone integers after the team cell.
    const ints = [];
    for (const c of cells) {
      if (/^\d+$/.test(c)) ints.push(parseInt(c, 10));
      if (ints.length === 3) break;
    }
    if (ints.length < 3) continue;
    out.push({ team: teamMatch[1].trim(), w: ints[0], l: ints[2] });
  }
  return out;
}

main().catch(err => { console.error(err); process.exit(1); });
