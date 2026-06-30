# Pilsen Patriots — Live App (self-updating)

A public, self-updating fan app for the Pilsen Patriots. Once deployed it
refreshes its own schedule, scores, record and standings every day by reading
the official **CAAF.cz** Snapbacks Liga page — **no manual editing during the
season.**

```
patriots-live/
├─ index.html                     ← the app (open this; it's the whole UI)
├─ data/
│  └─ patriots-data.json          ← live data the app fetches on launch
├─ scraper/
│  ├─ scrape.mjs                   ← reads CAAF.cz, rewrites patriots-data.json
│  ├─ config.json                 ← editorial content (roster, news, bios, staff)
│  └─ package.json
└─ .github/
   └─ workflows/
      └─ update-data.yml           ← daily cron that runs the scraper & commits
```

---

## How it works (the short version)

1. **`index.html`** is a single self-contained file. On launch it fetches
   `data/patriots-data.json` and renders from it. If the fetch fails (offline,
   file missing) it falls back to the data baked into the file, so it never
   shows a blank screen.
2. **`scraper/scrape.mjs`** fetches the CAAF division page, parses the Patriots'
   results and the league table, merges in the editorial content from
   `config.json`, and writes a fresh `data/patriots-data.json`.
3. **`update-data.yml`** runs that scraper on GitHub's servers once a day,
   commits the new JSON, and your hosted site serves it. The app updates itself.

What recomputes automatically from the scraped results: **record, last game,
next game, countdown, points, games played, the standings table, the ranking,
and the season-complete card.**

---

## Deploy it (free, ~10 minutes) — GitHub Pages

This is the recommended path because the scraper and the website live in the
same place, so the cron can update the site directly.

1. Create a new GitHub repository (e.g. `patriots-app`).
2. Upload the **contents** of this `patriots-live/` folder to the repo root
   (so `index.html` is at the top level).
3. In the repo: **Settings → Pages → Build and deployment → Source: "Deploy
   from a branch"**, branch `main`, folder `/ (root)`. Save.
4. Wait ~1 minute. Your app is live at
   `https://<your-username>.github.io/patriots-app/`.
5. In the repo: **Settings → Actions → General → Workflow permissions →**
   select **"Read and write permissions"**. Save. (This lets the daily job
   commit the refreshed data.)
6. Open the **Actions** tab → "Update Patriots data" → **Run workflow** to test
   it once. After it runs, `data/patriots-data.json` will be up to date and the
   site will reflect it.

That's it. From now on it updates every morning on its own. You can also hit
**Run workflow** any time you want an instant refresh after a game.

### Custom domain (optional)
In **Settings → Pages → Custom domain**, enter e.g. `app.pilsenpatriots.cz`
and add the matching DNS records your registrar shows. HTTPS is automatic.

---

## Alternative host: Netlify / Cloudflare Pages

You can host `index.html` + `data/` on any static host. The catch: the scraper
still needs to run *somewhere* on a schedule and write `patriots-data.json`.
Easiest is to keep the GitHub repo + Action as the data source and point your
host at the repo, or run the scraper locally/cron and upload the JSON. For most
clubs, **GitHub Pages above is the simplest all-in-one option.**

---

## Updating editorial content (news, bios, staff, roster)

The scraper only manages **results & standings** — the things that change every
week. Things it does *not* invent are kept in **`scraper/config.json`**:

- `roster` — players (number, name, position, `rookie: true`)
- `news` — article cards (tag, title, `ago`, `accent`: `"navy"` or `"red"`, body)
- `gameRecaps` — keyed by week number (`headline`, `body`)
- `playerBios` — keyed by jersey number
- `staff` — coaches & staff

Edit `config.json`, commit, and the next scraper run folds it into the live
JSON. (You can also edit `data/patriots-data.json` directly for a one-off, but
the next scraper run will overwrite the scraped fields.)

---

## Run the scraper locally (to test)

```bash
cd scraper
npm start          # needs Node 18+
# -> rewrites ../data/patriots-data.json
```

Then open `index.html` with any local server (e.g. `npx serve .` from the
`patriots-live` folder) and check it.

---

## A note on the scraper & the CAAF site

`scrape.mjs` parses the CAAF HTML table structure as it exists in the 2026
season. If CAAF redesigns their site, the parser may need a small tweak — the
two functions to look at are `parseGames()` and `parseStandings()`, both near
the bottom of the file and commented. Until then it will keep the Patriots app
current on autopilot.
