/* ============================================================
   bikefit.me — measurement illustrations, controls & fit math
   ============================================================ */

/* ---------- 1. Measurement illustrations (inline SVG) ----------
   A simple front-view figure is drawn faintly, then each diagram
   highlights the exact FROM -> TO points for that measurement.    */

const BODY = `
  <circle class="illu-body" cx="60" cy="22" r="12"/>
  <path class="illu-body" d="
    M60 34 L60 40
    M40 47 L80 47
    M44 47 L50 110 L70 110 L76 47
    M40 47 L31 82 L29 114
    M80 47 L89 82 L91 114
    M50 110 L45 172 L44 198
    M70 110 L75 172 L76 198
    M37 198 L51 198
    M69 198 L83 198
  "/>`;

function point(x, y, label, anchor = "start", dx = 0, dy = 0) {
  return `
    <circle class="illu-point-ring" cx="${x}" cy="${y}" r="6"/>
    <circle class="illu-point" cx="${x}" cy="${y}" r="3"/>
    <text class="illu-label" x="${x + dx}" y="${y + dy}" text-anchor="${anchor}">${label}</text>`;
}

const ILLU = {
  height: `
    <svg viewBox="0 0 120 215" role="img" aria-label="Measure height from floor to top of head">
      ${BODY}
      <line class="illu-measure" x1="104" y1="10" x2="104" y2="198"/>
      <line class="illu-tick" x1="98" y1="10" x2="110" y2="10"/>
      <line class="illu-tick" x1="98" y1="198" x2="110" y2="198"/>
      ${point(60, 10, "TOP", "middle", 0, -4)}
      ${point(60, 198, "FLOOR", "middle", 0, 12)}
    </svg>`,

  inseam: `
    <svg viewBox="0 0 120 215" role="img" aria-label="Measure inseam from floor to crotch">
      ${BODY}
      <line class="illu-measure" x1="60" y1="120" x2="60" y2="198"/>
      <line class="illu-tick" x1="50" y1="120" x2="70" y2="120"/>
      <line class="illu-tick" x1="50" y1="198" x2="70" y2="198"/>
      ${point(60, 120, "CROTCH", "start", 14, 2)}
      ${point(60, 198, "FLOOR", "middle", 0, 12)}
    </svg>`,

  torso: `
    <svg viewBox="0 0 120 215" role="img" aria-label="Measure torso from hip to sternal notch">
      ${BODY}
      <line class="illu-measure" x1="60" y1="42" x2="60" y2="108"/>
      <line class="illu-tick" x1="52" y1="42" x2="68" y2="42"/>
      <line class="illu-tick" x1="52" y1="108" x2="68" y2="108"/>
      ${point(60, 42, "NOTCH", "start", 14, 0)}
      ${point(60, 108, "HIP", "start", 16, 4)}
    </svg>`,

  arm: `
    <svg viewBox="0 0 120 215" role="img" aria-label="Measure arm from shoulder to wrist">
      ${BODY}
      <polyline class="illu-measure" points="80,47 89,82 91,114"/>
      ${point(80, 47, "SHOULDER", "end", -8, 0)}
      ${point(91, 114, "WRIST", "start", 8, 4)}
    </svg>`,
};

document.querySelectorAll("[data-illu]").forEach((el) => {
  el.innerHTML = ILLU[el.dataset.illu] || "";
});

/* ---------- 2. Slider <-> number input sync ---------- */

const FIELDS = ["height", "inseam", "torso", "arm"];

function syncPair(id) {
  const range = document.getElementById(id);
  const num = document.getElementById(id + "-num");

  const clamp = (v) =>
    Math.min(Number(range.max), Math.max(Number(range.min), v));

  range.addEventListener("input", () => {
    num.value = range.value;
    recalc();
  });
  num.addEventListener("input", () => {
    if (num.value === "") return;
    const v = clamp(Number(num.value));
    range.value = v;
    recalc();
  });
  num.addEventListener("blur", () => {
    const v = clamp(Number(num.value) || Number(range.value));
    num.value = v;
    range.value = v;
    recalc();
  });
}
FIELDS.forEach(syncPair);

/* ---------- 3. Fit profiles & formulas ---------- */

const PROFILES = {
  endurance: {
    name: "endurance",
    blurb:
      "A balanced, sustainable position — moderate drop and reach for long days in the saddle without giving up efficiency.",
    setback: 0.075, // x inseam (cm)
    reach: 0.505, // x (torso + arm) (cm)
    drop: 0.035, // x height (cm), positive = bars below saddle
    stem: 0.82, // x (torso + arm) -> mm
    saddle: 0.883, // x inseam (LeMond method)
  },
  aero: {
    name: "aero",
    blurb:
      "Low and stretched for speed. More drop, a longer reach and a forward saddle to cut through the wind. Rewards good flexibility.",
    setback: 0.06,
    reach: 0.53,
    drop: 0.065,
    stem: 0.92,
    saddle: 0.885,
  },
  relaxed: {
    name: "relaxed",
    blurb:
      "Upright and forgiving. Bars near or above the saddle and a shorter reach to keep pressure off your back, neck and hands.",
    setback: 0.085,
    reach: 0.48,
    drop: -0.005,
    stem: 0.72,
    saddle: 0.88,
  },
};

let activeProfile = "endurance";

function readInputs() {
  const v = {};
  FIELDS.forEach((f) => (v[f] = Number(document.getElementById(f).value)));
  return v;
}

const round = (n, step = 1) => Math.round(n / step) * step;
const clampN = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

function calcFit(p, { height, inseam, torso, arm }) {
  const reachArm = torso + arm;

  const saddleHeight = round(inseam * p.saddle * 10); // mm
  const setback = round(inseam * p.setback * 10); // mm
  const frame = (inseam * 0.65).toFixed(1); // cm
  const reach = round(reachArm * p.reach * 10, 5); // mm
  const drop = round(height * p.drop * 10); // mm (+below / -above saddle)
  const stem = clampN(round(reachArm * p.stem, 5), 70, 140); // mm

  const dropText =
    drop > 0
      ? `${drop} mm below saddle`
      : drop < 0
      ? `${Math.abs(drop)} mm above saddle`
      : "level with saddle";

  return [
    {
      label: "Saddle height",
      value: saddleHeight,
      unit: "mm",
      note: "Bottom bracket centre to top of saddle, along the seat tube.",
    },
    {
      label: "Saddle setback",
      value: setback,
      unit: "mm",
      note: "Saddle nose set behind the bottom bracket (horizontal).",
    },
    {
      label: "Frame size",
      value: frame,
      unit: "cm",
      note: "Suggested road seat-tube length (centre-to-top).",
    },
    {
      label: "Handlebar reach",
      value: reach,
      unit: "mm",
      note: "Horizontal saddle nose to handlebar centre — your cockpit.",
    },
    {
      label: "Bar drop",
      value: Math.abs(drop),
      unit: "mm",
      note: dropText,
    },
    {
      label: "Stem length",
      value: stem,
      unit: "mm",
      note: "Starting stem length to dial in the reach above.",
    },
  ];
}

/* ---------- 4. Render ---------- */

function recalc() {
  const p = PROFILES[activeProfile];
  const items = calcFit(p, readInputs());

  document.getElementById("result-profile-name").textContent = p.name;
  document.getElementById("result-profile-blurb").textContent = p.blurb;

  document.getElementById("result-grid").innerHTML = items
    .map(
      (it) => `
      <div class="result-item">
        <div class="result-label">${it.label}</div>
        <div class="result-value">${it.value}<span class="ru">${it.unit}</span></div>
        <div class="result-note">${it.note}</div>
      </div>`
    )
    .join("");
}

/* ---------- 5. Profile tab switching ---------- */

document.querySelectorAll(".profile-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".profile-tab")
      .forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");
    activeProfile = tab.dataset.profile;
    recalc();
  });
});

/* ---------- 6. Init ---------- */
recalc();
