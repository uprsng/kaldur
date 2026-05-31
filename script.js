/* ============================================================
   bikefit.me — i18n, animated header, measurement diagrams,
   detailed-fit toggle, fit math & road-bike illustration
   ============================================================ */

/* ============================================================
   0. Translations (English default, Russian)
   ============================================================ */

const I18N = {
  en: {
    "nav.how": "How it works",
    "nav.measure": "Measurements",
    "hero.eyebrow": "Precision fitting · No studio required",
    "hero.h1": 'Your body sets the<br /><span class="accent">geometry.</span>',
    "hero.lede":
      "Four measurements. Three riding philosophies. One position that fits you perfectly. bikefit.me turns your height, inseam, torso and arm length into a complete cockpit setup — saddle height, setback, reach, drop and stem.",
    "hero.cta1": "Calculate my fit →",
    "hero.cta2": "See how it works",
    "hero.stat1": "measurements",
    "hero.stat2": "fit profiles",
    "hero.stat3": "output values",
    "how.title": "How it works",
    "how.s1t": "Measure",
    "how.s1p":
      "Grab a tape measure and a wall. Each field below shows exactly where to measure — start point to end point.",
    "how.s2t": "Choose a vibe",
    "how.s2p":
      "Endurance, aero or relaxed. Each profile shifts your position to match how and how long you ride.",
    "how.s3t": "Get your numbers",
    "how.s3p":
      "Instant cockpit setup you can dial into any bike — in millimetres, ready to translate to the workshop.",
    "fit.title": "Your measurements",
    "fit.sub":
      "Stand barefoot against a wall for the best accuracy. Drag the slider or type the exact value in centimetres.",
    "m.height.label": "Height",
    "m.height.hint":
      "From the <b>floor</b> (heels together) to the <b>top of your head</b>. Stand tall against a wall.",
    "m.inseam.label": "Inseam",
    "m.inseam.hint":
      "From the <b>floor</b> up to your <b>crotch</b> — press a book up between your legs like a saddle and measure to its top edge.",
    "m.torso.label": "Torso",
    "m.torso.hint":
      "From the <b>top of your hip bone</b> up to the <b>sternal notch</b> (the dip at the base of your throat), measured along the front.",
    "m.arm.label": "Arm",
    "m.arm.hint":
      "From the <b>tip of your shoulder</b> (acromion) down to the <b>wrist crease</b>, arm relaxed and slightly bent.",
    "detail.btn": "Want detailed bikefit",
    "m.crank.label": "Crank length",
    "m.crank.hint":
      "Centre of the <b>bottom-bracket axle</b> to the centre of the <b>pedal axle</b> — usually stamped on the back of the crank arm.",
    "m.cleat.label": "Cleat height",
    "m.cleat.hint":
      "Stack height added under the shoe — from the <b>sole</b> to the <b>pedal-axle centre</b> (cleat + pedal spacers).",
    "m.shoulder.label": "Shoulder width",
    "m.shoulder.hint":
      "Across the back from the <b>tip of one shoulder</b> (acromion) to the <b>other</b> — sets your handlebar width.",
    "profiles.title": "Choose your riding profile",
    "p.endurance.name": "Endurance",
    "p.endurance.desc": "Balanced · all-day comfort",
    "p.aero.name": "Aero",
    "p.aero.desc": "Low & fast · racing",
    "p.relaxed.name": "Relaxed",
    "p.relaxed.desc": "Upright · easy on the back",
    "bike.caption": "Your fit on a road bike",
    "disclaimer":
      "These figures are calculated estimates to get you 90% of the way to a great position. Treat them as a starting point, ride a few sessions, and fine-tune for comfort. For medical conditions or persistent pain, see a professional bike fitter.",
    "footer.tag": "Built for riders who'd rather be on the bike. © 2026 bikefit.me",

    // profile names + blurbs (used in results headline)
    "profile.endurance": "endurance",
    "profile.aero": "aero",
    "profile.relaxed": "relaxed",
    "blurb.endurance":
      "A balanced, sustainable position — moderate drop and reach for long days in the saddle without giving up efficiency.",
    "blurb.aero":
      "Low and stretched for speed. More drop, a longer reach and a forward saddle to cut through the wind. Rewards good flexibility.",
    "blurb.relaxed":
      "Upright and forgiving. Bars near or above the saddle and a shorter reach to keep pressure off your back, neck and hands.",
    "result.headline": "Your {name} fit",

    // result rows
    "r.saddle.label": "Saddle height",
    "r.saddle.note": "Bottom bracket centre to top of saddle, along the seat tube. Add detailed measurements for an exact figure.",
    "r.saddle.note.adj": "Adjusted for your crank length and cleat stack.",
    "r.setback.label": "Saddle setback",
    "r.setback.note": "Saddle nose set behind the bottom bracket (horizontal).",
    "r.reach.label": "Handlebar reach",
    "r.reach.note": "Horizontal saddle nose to handlebar centre — your cockpit.",
    "r.drop.label": "Bar drop",
    "r.drop.below": "{v} mm below saddle",
    "r.drop.above": "{v} mm above saddle",
    "r.drop.level": "level with saddle",
    "r.stem.label": "Stem length",
    "r.stem.note": "Starting stem length to dial in the reach above.",
    "r.bar.label": "Bar width",
    "r.bar.note.approx": "Estimated from your height. Add detailed measurements for an exact figure.",
    "r.bar.note.adj": "Centre-to-centre handlebar width from your measured shoulders.",
    "r.adjusted": "adjusted",
  },

  ru: {
    "nav.how": "Как это работает",
    "nav.measure": "Замеры",
    "hero.eyebrow": "Точный фит · Без студии",
    "hero.h1": 'Ваше тело задаёт<br /><span class="accent">геометрию.</span>',
    "hero.lede":
      "Четыре замера. Три философии езды. Одна посадка, идеально подходящая вам. bikefit.me превращает ваш рост, длину ног, торса и руки в полную настройку кокпита — высоту седла, вынос, вылет, перепад и длину выноса руля.",
    "hero.cta1": "Рассчитать фит →",
    "hero.cta2": "Как это работает",
    "hero.stat1": "замеров",
    "hero.stat2": "профиля посадки",
    "hero.stat3": "значений на выходе",
    "how.title": "Как это работает",
    "how.s1t": "Замерьте",
    "how.s1p":
      "Возьмите рулетку и встаньте у стены. Каждое поле ниже показывает, откуда и докуда мерить — от точки до точки.",
    "how.s2t": "Выберите стиль",
    "how.s2p":
      "Endurance, аэро или расслабленный. Каждый профиль подстраивает посадку под то, как и сколько вы едете.",
    "how.s3t": "Получите цифры",
    "how.s3p":
      "Мгновенная настройка кокпита, которую можно перенести на любой велосипед — в миллиметрах, готово для мастерской.",
    "fit.title": "Ваши замеры",
    "fit.sub":
      "Для точности встаньте босиком у стены. Двигайте ползунок или введите точное значение в сантиметрах.",
    "m.height.label": "Рост",
    "m.height.hint":
      "От <b>пола</b> (пятки вместе) до <b>макушки</b>. Встаньте прямо у стены.",
    "m.inseam.label": "Длина ног (инсим)",
    "m.inseam.hint":
      "От <b>пола</b> до <b>промежности</b> — прижмите книгу между ног как седло и измерьте до её верхнего края.",
    "m.torso.label": "Торс",
    "m.torso.hint":
      "От <b>верха тазовой кости</b> до <b>яремной впадины</b> (ямка у основания шеи), по передней части.",
    "m.arm.label": "Рука",
    "m.arm.hint":
      "От <b>края плеча</b> (акромион) до <b>складки запястья</b>, рука расслаблена и слегка согнута.",
    "detail.btn": "Хочу детальный фит",
    "m.crank.label": "Длина шатуна",
    "m.crank.hint":
      "От центра <b>оси каретки</b> до центра <b>оси педали</b> — обычно выбита на тыльной стороне шатуна.",
    "m.cleat.label": "Высота шипа",
    "m.cleat.hint":
      "Высота стека под обувью — от <b>подошвы</b> до <b>центра оси педали</b> (шип + проставки педали).",
    "m.shoulder.label": "Ширина плеч",
    "m.shoulder.hint":
      "По спине от <b>края одного плеча</b> (акромион) до <b>другого</b> — задаёт ширину руля.",
    "profiles.title": "Выберите профиль посадки",
    "p.endurance.name": "Endurance",
    "p.endurance.desc": "Баланс · комфорт на весь день",
    "p.aero.name": "Аэро",
    "p.aero.desc": "Низко и быстро · гонка",
    "p.relaxed.name": "Расслабленный",
    "p.relaxed.desc": "Прямая посадка · бережёт спину",
    "bike.caption": "Ваш фит на шоссейном велосипеде",
    "disclaimer":
      "Эти значения — расчётные оценки, которые приближают вас к отличной посадке на 90%. Используйте их как отправную точку, прокатитесь несколько раз и подстройте под комфорт. При болях или заболеваниях обратитесь к профессиональному байкфиттеру.",
    "footer.tag": "Сделано для тех, кто предпочитает быть в седле. © 2026 bikefit.me",

    "profile.endurance": "endurance",
    "profile.aero": "аэро",
    "profile.relaxed": "расслабленный",
    "blurb.endurance":
      "Сбалансированная, выносливая посадка — умеренный перепад и вылет для долгих часов в седле без потери эффективности.",
    "blurb.aero":
      "Низко и вытянуто ради скорости. Больше перепад, длиннее вылет и седло вперёд, чтобы резать ветер. Требует хорошей гибкости.",
    "blurb.relaxed":
      "Прямая и щадящая посадка. Руль около или выше седла и короче вылет, чтобы снять нагрузку со спины, шеи и рук.",
    "result.headline": "Ваш фит: {name}",

    "r.saddle.label": "Высота седла",
    "r.saddle.note": "От центра каретки до верха седла вдоль подседельной трубы. Добавьте детальные замеры для точного значения.",
    "r.saddle.note.adj": "Скорректировано под длину шатуна и стек шипа.",
    "r.setback.label": "Вылет седла",
    "r.setback.note": "Нос седла за кареткой (по горизонтали).",
    "r.reach.label": "Вылет до руля",
    "r.reach.note": "Горизонталь от носа седла до центра руля — ваш кокпит.",
    "r.drop.label": "Перепад руля",
    "r.drop.below": "{v} мм ниже седла",
    "r.drop.above": "{v} мм выше седла",
    "r.drop.level": "на уровне седла",
    "r.stem.label": "Длина выноса",
    "r.stem.note": "Стартовая длина выноса для настройки вылета выше.",
    "r.bar.label": "Ширина руля",
    "r.bar.note.approx": "Оценка по вашему росту. Добавьте детальные замеры для точного значения.",
    "r.bar.note.adj": "Ширина руля (центр-центр) по вашим измеренным плечам.",
    "r.adjusted": "уточнено",
  },
};

let lang = "en";
const t = (key, vars) => {
  let s = (I18N[lang] && I18N[lang][key]) || (I18N.en[key] ?? key);
  if (vars) for (const k in vars) s = s.replace(`{${k}}`, vars[k]);
  return s;
};

function applyI18n() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  // The bike diagram is static, but its callout labels are translated, so it
  // is (re)drawn here on init and on every language switch — never on input.
  const bike = document.getElementById("bike-illu");
  if (bike) bike.innerHTML = bikeSVG();
  recalc(); // result grid values are language-dependent
}

/* ============================================================
   0b. Hero chainring — build teeth + crank arms procedurally
   ============================================================ */

(function buildChainring() {
  const teeth = document.getElementById("ring-teeth");
  const arms = document.getElementById("ring-arms");
  if (!teeth) return;
  const cx = 100, cy = 100, R = 92, N = 44;
  let tg = "";
  for (let i = 0; i < N; i++) {
    const a = (Math.PI * 2 * i) / N;
    const x1 = cx + R * Math.cos(a), y1 = cy + R * Math.sin(a);
    const x2 = cx + (R + 7) * Math.cos(a), y2 = cy + (R + 7) * Math.sin(a);
    tg += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>`;
  }
  teeth.innerHTML = tg;
  // five crank/spider arms from the centre out to the inner ring
  let ag = "";
  for (let i = 0; i < 5; i++) {
    const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    ag += `<line x1="${cx}" y1="${cy}" x2="${(cx + 34 * Math.cos(a)).toFixed(1)}" y2="${(cy + 34 * Math.sin(a)).toFixed(1)}" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>`;
  }
  arms.innerHTML = ag;
})();

/* ============================================================
   1. Animated header — hide on scroll down, show on scroll up
   ============================================================ */

(function headerScroll() {
  const nav = document.getElementById("nav");
  let lastY = window.scrollY;
  let ticking = false;

  function update() {
    const y = window.scrollY;
    nav.classList.toggle("nav-scrolled", y > 8);

    const goingDown = y > lastY;
    // Don't hide while near the very top; require a small delta to avoid jitter.
    if (goingDown && y > 90 && y - lastY > 4) {
      nav.classList.add("nav-hidden");
    } else if (!goingDown && lastY - y > 4) {
      nav.classList.remove("nav-hidden");
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
})();

/* ============================================================
   2. Body measurement illustrations (inline SVG)
   ============================================================ */

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
    <svg viewBox="0 0 120 215" role="img" aria-label="height">
      ${BODY}
      <line class="illu-measure" x1="104" y1="10" x2="104" y2="198"/>
      <line class="illu-tick" x1="98" y1="10" x2="110" y2="10"/>
      <line class="illu-tick" x1="98" y1="198" x2="110" y2="198"/>
      ${point(60, 10, "TOP", "middle", 0, -4)}
      ${point(60, 198, "FLOOR", "middle", 0, 12)}
    </svg>`,

  inseam: `
    <svg viewBox="0 0 120 215" role="img" aria-label="inseam">
      ${BODY}
      <line class="illu-measure" x1="60" y1="120" x2="60" y2="198"/>
      <line class="illu-tick" x1="50" y1="120" x2="70" y2="120"/>
      <line class="illu-tick" x1="50" y1="198" x2="70" y2="198"/>
      ${point(60, 120, "CROTCH", "start", 14, 2)}
      ${point(60, 198, "FLOOR", "middle", 0, 12)}
    </svg>`,

  torso: `
    <svg viewBox="0 0 120 215" role="img" aria-label="torso">
      ${BODY}
      <line class="illu-measure" x1="60" y1="42" x2="60" y2="108"/>
      <line class="illu-tick" x1="52" y1="42" x2="68" y2="42"/>
      <line class="illu-tick" x1="52" y1="108" x2="68" y2="108"/>
      ${point(60, 42, "NOTCH", "start", 14, 0)}
      ${point(60, 108, "HIP", "start", 16, 4)}
    </svg>`,

  arm: `
    <svg viewBox="0 0 120 215" role="img" aria-label="arm">
      ${BODY}
      <polyline class="illu-measure" points="80,47 89,82 91,114"/>
      ${point(80, 47, "SHOULDER", "end", -8, 0)}
      ${point(91, 114, "WRIST", "start", 8, 4)}
    </svg>`,

  // ---- detailed-fit diagrams (same visual vocabulary) ----
  crank: `
    <svg viewBox="0 0 120 215" role="img" aria-label="crank length">
      <!-- chainring + crank arm + pedal -->
      <circle class="illu-body" cx="56" cy="120" r="26"/>
      <circle class="illu-body" cx="56" cy="120" r="3"/>
      <line class="illu-measure" x1="56" y1="120" x2="56" y2="170"/>
      <line class="illu-body" x1="44" y1="172" x2="68" y2="172"/>
      ${point(56, 120, "BB", "end", -8, 2)}
      ${point(56, 170, "PEDAL", "start", 8, 4)}
    </svg>`,

  cleat: `
    <svg viewBox="0 0 120 215" role="img" aria-label="cleat height">
      <!-- shoe sole, cleat block, pedal axle -->
      <path class="illu-body" d="M28 108 L92 108 L96 120 L70 124 L24 122 Z"/>
      <rect class="illu-body" x="50" y="124" width="24" height="9"/>
      <circle class="illu-body" cx="62" cy="146" r="6"/>
      <line class="illu-measure" x1="104" y1="110" x2="104" y2="146"/>
      <line class="illu-tick" x1="98" y1="110" x2="110" y2="110"/>
      <line class="illu-tick" x1="98" y1="146" x2="110" y2="146"/>
      ${point(92, 110, "SOLE", "end", -8, 0)}
      ${point(62, 146, "AXLE", "start", 10, 4)}
    </svg>`,

  shoulder: `
    <svg viewBox="0 0 120 215" role="img" aria-label="shoulder width">
      ${BODY}
      <line class="illu-measure" x1="40" y1="47" x2="80" y2="47"/>
      <line class="illu-tick" x1="40" y1="41" x2="40" y2="53"/>
      <line class="illu-tick" x1="80" y1="41" x2="80" y2="53"/>
      ${point(40, 47, "L", "end", -6, -6)}
      ${point(80, 47, "R", "start", 6, -6)}
    </svg>`,
};

document.querySelectorAll("[data-illu]").forEach((el) => {
  el.innerHTML = ILLU[el.dataset.illu] || "";
});

/* ============================================================
   3. Inputs — slider <-> number sync (base + detailed)
   ============================================================ */

const BASE_FIELDS = ["height", "inseam", "torso", "arm"];
const DETAIL_FIELDS = ["crank", "cleat", "shoulder"];
const ALL_FIELDS = [...BASE_FIELDS, ...DETAIL_FIELDS];

function syncPair(id) {
  const range = document.getElementById(id);
  const num = document.getElementById(id + "-num");
  if (!range || !num) return;

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
ALL_FIELDS.forEach(syncPair);

/* ---- detailed-fit toggle ---- */
let detailedOn = false;
const detailToggle = document.getElementById("detail-toggle");
const detailWrap = document.getElementById("detail-wrap");

detailToggle.addEventListener("click", () => {
  detailedOn = !detailedOn;
  detailToggle.setAttribute("aria-expanded", String(detailedOn));
  if (detailedOn) {
    detailWrap.hidden = false;
  } else {
    detailWrap.hidden = true;
  }
  recalc(); // refresh fit + bike with/without the extra measurements
});

/* ============================================================
   4. Fit profiles & formulas
   ============================================================ */

const PROFILES = {
  endurance: { setback: 0.075, reach: 0.505, drop: 0.035, stem: 0.82, saddle: 0.883 },
  aero:      { setback: 0.06,  reach: 0.53,  drop: 0.065, stem: 0.92, saddle: 0.885 },
  relaxed:   { setback: 0.085, reach: 0.48,  drop: -0.005, stem: 0.72, saddle: 0.88 },
};

let activeProfile = "endurance";

function readInputs() {
  const v = {};
  ALL_FIELDS.forEach((f) => {
    const el = document.getElementById(f);
    if (el) v[f] = Number(el.value);
  });
  return v;
}

const round = (n, step = 1) => Math.round(n / step) * step;
const clampN = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

// Returns { items } for the result grid. The bike diagram is static and does
// not consume these values.
function calcFit(profileKey, inp) {
  const p = PROFILES[profileKey];
  const { height, inseam, torso, arm } = inp;
  const reachArm = torso + arm;

  let saddleHeight = round(inseam * p.saddle * 10); // mm
  const setback = round(inseam * p.setback * 10); // mm
  const reach = round(reachArm * p.reach * 10, 5); // mm
  const drop = round(height * p.drop * 10); // mm (+below / -above)
  const stem = clampN(round(reachArm * p.stem, 5), 70, 140); // mm

  // Bar width — always shown. Without detailed inputs it is approximated from
  // height; with a measured shoulder width it is recalculated and highlighted.
  // Estimate shoulder width from height (~0.234 x height in cm), convert to mm
  // and snap to the nearest 20mm bar size (38/40/42/44…).
  let barWidth = clampN(round(0.234 * height * 10, 20), 380, 460); // approx from height
  let barAdjusted = false;
  let saddleAdjusted = false;

  if (detailedOn) {
    const { crank, cleat, shoulder } = inp;
    // Measured shoulder width -> nearest 20mm bar (38/40/42/44…)
    barWidth = clampN(round(shoulder * 10, 20), 360, 480);
    barAdjusted = true;
    // Saddle height adjusted for crank length (vs 172.5 ref) and cleat stack.
    saddleHeight = round(saddleHeight - (crank - 172.5) + cleat);
    saddleAdjusted = true;
  }

  const dropText =
    drop > 0 ? t("r.drop.below", { v: drop })
    : drop < 0 ? t("r.drop.above", { v: Math.abs(drop) })
    : t("r.drop.level");

  const items = [
    {
      label: t("r.saddle.label"),
      value: saddleHeight,
      unit: "mm",
      note: saddleAdjusted ? t("r.saddle.note.adj") : t("r.saddle.note"),
      adjusted: saddleAdjusted,
    },
    {
      label: t("r.bar.label"),
      value: barWidth,
      unit: "mm",
      note: barAdjusted ? t("r.bar.note.adj") : t("r.bar.note.approx"),
      adjusted: barAdjusted,
    },
    { label: t("r.setback.label"), value: setback, unit: "mm", note: t("r.setback.note") },
    { label: t("r.reach.label"), value: reach, unit: "mm", note: t("r.reach.note") },
    { label: t("r.drop.label"), value: Math.abs(drop), unit: "mm", note: dropText },
    { label: t("r.stem.label"), value: stem, unit: "mm", note: t("r.stem.note") },
  ];

  return { items };
}

/* ============================================================
   5. Road-bike illustration (drawn from the calculated fit)
   ============================================================ */

/* The road bike is a STATIC reference diagram — its geometry never changes
   with the entered measurements. It illustrates *which* part of the bike each
   calculated value refers to; the actual numbers live in the result grid
   below. Only the label text is language-dependent (re-rendered on EN/RU). */

/* The diagram is now a real road-bike photo (assets/bike.png) with the fit
   measurements drawn on top. The SVG viewBox matches the image aspect ratio
   (1586 x 992 ≈ 600 x 375) so the overlay strokes/labels keep their tuned size.
   Anchor points below are calibrated to pixel features of the photo in that
   600 x 375 space. Only the label text is language-dependent (re-rendered). */
const IMG_W = 600, IMG_H = 375;
const BB = { x: 274, y: 259 };     // bottom bracket / crank centre
const SAD = { x: 201, y: 44 };     // saddle top
const SADNOSE = { x: 231, y: 46 }; // saddle nose (front tip)
const BAR = { x: 460, y: 60 };     // handlebar (top of bars / hoods)
const PEDAL = { x: 308, y: 316 };  // pedal axle (end of crank)

function bikeSVG() {
  const reachY = 30;            // horizontal reach guide, above the bike
  const setbackY = 42;          // horizontal setback guide, above the saddle
  const dropX = BAR.x + 30;     // vertical drop guide, right of the bars
  return `
  <svg viewBox="0 0 ${IMG_W} ${IMG_H}" role="img" aria-label="road bike fit reference">
    <!-- the bike photo -->
    <image href="assets/bike.png" x="0" y="0" width="${IMG_W}" height="${IMG_H}"
           preserveAspectRatio="xMidYMid meet"/>

    <!-- ===== measurement callouts (drawn over the photo) ===== -->

    <!-- saddle height: BB -> saddle top -->
    <line class="bike-measure" x1="${BB.x}" y1="${BB.y}" x2="${SAD.x}" y2="${SAD.y}"/>
    ${bikePoint(BB.x, BB.y)}
    ${bikePoint(SAD.x, SAD.y)}
    ${bikeLabel(60, 150, t("r.saddle.label"))}

    <!-- handlebar reach: saddle nose -> bars (horizontal) -->
    <line class="bike-measure" x1="${SAD.x}" y1="${reachY}" x2="${BAR.x}" y2="${reachY}"/>
    <line class="bike-tick" x1="${SAD.x}" y1="${reachY - 6}" x2="${SAD.x}" y2="${reachY + 6}"/>
    <line class="bike-tick" x1="${BAR.x}" y1="${reachY - 6}" x2="${BAR.x}" y2="${reachY + 6}"/>
    ${bikeLabel((SAD.x + BAR.x) / 2 - 30, reachY - 8, t("r.reach.label"))}

    <!-- bar drop: saddle level -> bar level -->
    <line class="bike-measure" x1="${dropX}" y1="${SAD.y}" x2="${dropX}" y2="${BAR.y}"/>
    <line class="bike-tick" x1="${dropX - 6}" y1="${SAD.y}" x2="${dropX + 6}" y2="${SAD.y}"/>
    <line class="bike-tick" x1="${dropX - 6}" y1="${BAR.y}" x2="${dropX + 6}" y2="${BAR.y}"/>
    ${bikeLabel(dropX + 10, (SAD.y + BAR.y) / 2 + 3, t("r.drop.label"), null, "end-safe")}

    <!-- saddle setback: BB plumb line -> saddle nose -->
    <line class="bike-measure" x1="${BB.x}" y1="${BB.y}" x2="${BB.x}" y2="${setbackY}"/>
    <line class="bike-measure" x1="${BB.x}" y1="${setbackY}" x2="${SADNOSE.x}" y2="${setbackY}"/>
    <line class="bike-tick" x1="${SADNOSE.x}" y1="${setbackY - 6}" x2="${SADNOSE.x}" y2="${setbackY + 6}"/>
    ${bikePoint(SADNOSE.x, SADNOSE.y)}
    ${bikeLabel((BB.x + SADNOSE.x) / 2 - 26, setbackY - 8, t("r.setback.label"))}

    <!-- crank length: BB -> pedal -->
    <line class="bike-measure" x1="${BB.x}" y1="${BB.y}" x2="${PEDAL.x}" y2="${PEDAL.y}"/>
    ${bikePoint(PEDAL.x, PEDAL.y)}
    ${bikeLabel(PEDAL.x + 12, PEDAL.y - 2, t("m.crank.label"))}
  </svg>`;
}

function bikePoint(x, y) {
  return `<circle class="bike-point-ring" cx="${x}" cy="${y}" r="5"/>
          <circle class="bike-point" cx="${x}" cy="${y}" r="2.6"/>`;
}
function bikeLabel(x, y, text, w = null, mode = "start") {
  // Auto-size background to text (~4.9px/char at 9px Space Grotesk) so labels
  // never clip — important since RU strings are longer than EN.
  const width = w != null ? w : Math.round(text.length * 4.9 + 8);
  let bx = x - 3;
  // Keep the label box inside the 560-wide canvas.
  if (mode === "end-safe" && bx + width > 556) bx = 556 - width;
  if (bx < 4) bx = 4;
  return `<rect class="bike-label-bg" x="${bx}" y="${y - 9}" width="${width}" height="13" rx="3"/>
          <text class="bike-label" x="${bx + 3}" y="${y}">${text}</text>`;
}

/* ============================================================
   6. Render
   ============================================================ */

function recalc() {
  const { items } = calcFit(activeProfile, readInputs());

  const name = t("profile." + activeProfile);
  const headlineEl = document.getElementById("result-headline");
  if (headlineEl) {
    // capitalise first letter of the profile name within the headline
    const cap = name.charAt(0).toUpperCase() + name.slice(1);
    headlineEl.innerHTML = t("result.headline", {
      name: `<span class="accent">${cap}</span>`,
    });
  }
  const blurbEl = document.getElementById("result-profile-blurb");
  if (blurbEl) blurbEl.textContent = t("blurb." + activeProfile);

  const grid = document.getElementById("result-grid");
  if (grid) {
    grid.innerHTML = items
      .map(
        (it) => `
        <div class="result-item${it.adjusted ? " is-adjusted" : ""}">
          <div class="result-label">${it.label}${
            it.adjusted ? `<span class="adj-badge">${t("r.adjusted")}</span>` : ""
          }</div>
          <div class="result-value">${it.value}<span class="ru">${it.unit}</span></div>
          <div class="result-note">${it.note}</div>
        </div>`
      )
      .join("");
  }
}

/* ============================================================
   7. Profile tabs + language switch
   ============================================================ */

document.querySelectorAll(".profile-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".profile-tab").forEach((x) => x.classList.remove("is-active"));
    tab.classList.add("is-active");
    activeProfile = tab.dataset.profile;
    recalc();
  });
});

document.querySelectorAll(".lang-opt").forEach((btn) => {
  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    document.querySelectorAll(".lang-opt").forEach((x) =>
      x.classList.toggle("is-active", x.dataset.lang === lang)
    );
    applyI18n();
  });
});

/* ============================================================
   8. Init (English default)
   ============================================================ */
applyI18n();
