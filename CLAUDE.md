# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`bikefit.me` — a single-page static bike-fitting site. The user enters body
measurements (height, inseam, torso, arm; plus optional crank/cleat/shoulder)
and gets a cockpit setup for three riding profiles (endurance, aero, relaxed).
Pure vanilla HTML/CSS/JS — **no build step, no framework, no dependencies**
(only two Google Fonts loaded via `<link>`). Three source files do everything:
`index.html`, `styles.css`, `script.js`.

## Run / preview

```bash
python3 -m http.server 8000      # then open http://localhost:8000
```

There is no test suite, linter, or package manager. "Verifying" means loading
the page and looking at it. A `.claude/launch.json` (in the repo parent dir for
the Claude preview tool) serves the folder on port 4178.

Note: browsers aggressively cache `script.js`/`styles.css`. After edits, hard-
refresh, or cache-bust the asset URL, to see changes.

## Deploy

Two paths, both SSH to a single server (`185.227.111.59:8822`, nginx, webroot
`/var/www/bikefit`):

- **GitHub Actions (`.github/workflows/deploy.yml`)** is the real deployer. It
  fires on push to the `claude/bikefit-me-website-Pfle1` branch when
  `index.html`, `styles.css`, `script.js`, `assets/**`, or the workflow itself
  change (or via manual `workflow_dispatch`). Uses repo secrets
  `SSH_PRIVATE_KEY` / `SSH_PASSPHRASE`. **So: committing + pushing to that
  branch is what deploys.**
- **`deploy.sh`** does the same from a local machine; needs an SSH key.

Deploy gotchas learned the hard way:
- The nginx config uses `try_files $uri $uri/ /index.html`, so a **missing
  asset returns index.html with HTTP 200** (Content-Type `text/html`) instead
  of a 404. To check a real deploy, verify `Content-Type`, e.g.
  `curl -sI http://185.227.111.59/assets/bike.png` should be `image/png`.
- Any new static asset must be added to the upload steps in **both**
  `deploy.sh` and `deploy.yml` (and to the workflow's `paths:` filter), or it
  won't reach the server.
- `deploy.sh` reads `USER` from the env; a local shell's `USER` (e.g. `eugene`)
  overrides the intended `root`. Run it as `USER=root ./deploy.sh`.

## Architecture (script.js)

`script.js` is one ordered file; understanding these cross-cutting systems
matters more than any single function:

- **i18n (EN/RU).** `I18N` holds every string by key; `t(key, vars)` resolves
  against the active `lang`. Markup opts in via `data-i18n` (textContent) and
  `data-i18n-html` (innerHTML). `applyI18n()` is the central re-render: it
  re-translates the DOM, **re-renders the bike SVG**, and calls `recalc()`.
  It runs on init and on every language switch — so anything language-dependent
  must be regenerated there, not cached.

- **Inputs.** Each measurement is a synced `range` + `number` pair wired by
  `syncPair()`; any change calls `recalc()`. The "detailed bikefit" toggle
  (`detailedOn`) reveals crank/cleat/shoulder inputs that refine some outputs.

- **Fit math.** `PROFILES` holds per-profile factors; `calcFit(profile, inputs)`
  returns the result-grid items. Saddle height uses the LeMond inseam×0.883
  method. **Reach and Stack are frame geometry** (BB → top of head tube),
  computed from body proportions via the per-profile `fReach`/`fStack` factors
  and clamped to realistic frame ranges — they are frame properties and are
  deliberately NOT changed by the crank/cleat detail tweaks (saddle height and
  bar width are). `recalc()` renders the grid; results are estimates (see the
  on-page disclaimer).

- **The bike diagram is a photo with an SVG overlay.** `bikeSVG()` returns an
  SVG whose `<image href="assets/bike.png">` fills a `600 × 375` viewBox (the
  photo's 1586×992 aspect ratio). The lime measurement callouts (saddle height,
  setback, reach, stack, crank length) are drawn on top in that same coordinate
  space. Named anchor constants (`BB`, `SAD`, `SADNOSE`, `HEADTOP`, `PEDAL`) are
  **hand-calibrated pixel positions of features in the photo** — if the photo
  changes, these must be re-picked. The diagram is otherwise static (it does not
  reflect entered numbers); only its labels are language-dependent.

### Recalibrating the photo anchor points

Anchors are tuned by clicking the live page in the Claude preview: brighten the
`<image>` (CSS filter) so dark-on-dark features show, attach a click handler
that maps `clientX/Y → viewBox` coords via `svg.getScreenCTM().inverse()`,
collect the picks, then write them into the anchor constants. This click-to-pick
loop is the intended way to place `BB`, `PEDAL`, `HEADTOP`, etc.

## Styling (styles.css)

Dark theme driven by CSS variables in `:root`. Two soft-UI token families power
the whole look — reuse them rather than hand-rolling shadows:

- **Clay/neumorphic** (`--clay-face`, `--clay-well`, `--clay-raise`,
  `--clay-raise-hi`, `--clay-inset`): raised tiles (cards, tabs, buttons) vs
  recessed wells (inputs, slider tracks, result cells, bike canvas). Borders are
  expressed as shadows, not `1px` outlines.
- **Hero** uses an animated gradient-mesh backdrop (`.aura*`) plus claymorphic
  buttons/chips and a gradient-clipped accent headline.

The accent colour is `--accent` (lime `#d7ff3a`); a complementary cyan/violet
appears only in hero gradients. SVG diagram element classes are prefixed
`bike-*` (overlay measurement classes) and `illu-*` (body-measurement figures).
