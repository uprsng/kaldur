# bikefit.me

A single-page bike-fitting website with a **black-vibes** design. Enter four
body measurements and get a complete cockpit setup for three riding profiles:
**endurance**, **aero** and **relaxed**.

## Features

- **Intro / hero** explaining the concept and how it works.
- **Measurement form** with synced sliders + number inputs for:
  - Height
  - Inseam
  - Torso
  - Arm
- **Illustrations for every measurement** — inline SVG figures that mark the
  exact **FROM -> TO** points (e.g. floor -> crotch for inseam).
- **Live fit calculations** for endurance, aero and relaxed positions:
  - Saddle height
  - Saddle setback
  - Frame size
  - Handlebar reach
  - Bar drop
  - Stem length

## Run it

It's a static site — no build step. Just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

| File         | Purpose                                        |
| ------------ | ---------------------------------------------- |
| `index.html` | Markup: hero, measurement form, results.       |
| `styles.css` | Black theme, layout, slider & card styling.    |
| `script.js`  | SVG diagrams, input sync, fit math, rendering. |

## A note on the numbers

The figures are calculated estimates (saddle height uses the classic LeMond
inseam × 0.883 method; reach, drop, setback and stem are derived from torso, arm
and height with per-profile factors). They get you most of the way to a great
position — treat them as a starting point and fine-tune on the bike. For pain or
medical conditions, see a professional fitter.
