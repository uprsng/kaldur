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
    "r.saddle.note": "Bottom bracket centre to top of saddle, along the seat tube.",
    "r.setback.label": "Saddle setback",
    "r.setback.note": "Saddle nose set behind the bottom bracket (horizontal).",
    "r.frame.label": "Frame size",
    "r.frame.note": "Suggested road seat-tube length (centre-to-top).",
    "r.reach.label": "Handlebar reach",
    "r.reach.note": "Horizontal saddle nose to handlebar centre — your cockpit.",
    "r.drop.label": "Bar drop",
    "r.drop.below": "{v} mm below saddle",
    "r.drop.above": "{v} mm above saddle",
    "r.drop.level": "level with saddle",
    "r.stem.label": "Stem length",
    "r.stem.note": "Starting stem length to dial in the reach above.",
    "r.bar.label": "Bar width",
    "r.bar.note": "Centre-to-centre handlebar width from your shoulders.",
    "r.effsaddle.label": "Eff. saddle height",
    "r.effsaddle.note": "Saddle height adjusted for crank length and cleat stack.",
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
    "r.saddle.note": "От центра каретки до верха седла вдоль подседельной трубы.",
    "r.setback.label": "Вылет седла",
    "r.setback.note": "Нос седла за кареткой (по горизонтали).",
    "r.frame.label": "Размер рамы",
    "r.frame.note": "Рекомендуемая длина подседельной трубы (центр-верх).",
    "r.reach.label": "Вылет до руля",
    "r.reach.note": "Горизонталь от носа седла до центра руля — ваш кокпит.",
    "r.drop.label": "Перепад руля",
    "r.drop.below": "{v} мм ниже седла",
    "r.drop.above": "{v} мм выше седла",
    "r.drop.level": "на уровне седла",
    "r.stem.label": "Длина выноса",
    "r.stem.note": "Стартовая длина выноса для настройки вылета выше.",
    "r.bar.label": "Ширина руля",
    "r.bar.note": "Ширина руля (центр-центр) по вашим плечам.",
    "r.effsaddle.label": "Эфф. высота седла",
    "r.effsaddle.note": "Высота седла с учётом длины шатуна и стека шипа.",
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
  recalc(); // results + bike labels are language-dependent
}

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

// Returns { values, items } so both the bike drawing and the grid stay in sync.
function calcFit(profileKey, inp) {
  const p = PROFILES[profileKey];
  const { height, inseam, torso, arm } = inp;
  const reachArm = torso + arm;

  const saddleHeight = round(inseam * p.saddle * 10); // mm
  const setback = round(inseam * p.setback * 10); // mm
  const frame = (inseam * 0.65).toFixed(1); // cm
  const reach = round(reachArm * p.reach * 10, 5); // mm
  const drop = round(height * p.drop * 10); // mm (+below / -above)
  const stem = clampN(round(reachArm * p.stem, 5), 70, 140); // mm

  const dropText =
    drop > 0 ? t("r.drop.below", { v: drop })
    : drop < 0 ? t("r.drop.above", { v: Math.abs(drop) })
    : t("r.drop.level");

  const items = [
    { label: t("r.saddle.label"), value: saddleHeight, unit: "mm", note: t("r.saddle.note") },
    { label: t("r.setback.label"), value: setback, unit: "mm", note: t("r.setback.note") },
    { label: t("r.frame.label"), value: frame, unit: "cm", note: t("r.frame.note") },
    { label: t("r.reach.label"), value: reach, unit: "mm", note: t("r.reach.note") },
    { label: t("r.drop.label"), value: Math.abs(drop), unit: "mm", note: dropText },
    { label: t("r.stem.label"), value: stem, unit: "mm", note: t("r.stem.note") },
  ];

  // Detailed extras
  let barWidth = null;
  let effSaddle = saddleHeight;
  if (detailedOn) {
    const { crank, cleat, shoulder } = inp;
    // Handlebar width ≈ shoulder width, rounded to nearest 20mm (38/40/42/44…)
    barWidth = clampN(round(shoulder * 10, 20), 360, 480);
    // Effective saddle height accounts for crank length (relative to a 172.5 ref)
    // and cleat stack: longer cranks raise the foot at BDC, so lower the saddle;
    // extra cleat stack adds reach to the pedal, so raise the saddle.
    effSaddle = round(saddleHeight - (crank - 172.5) + cleat);

    items.push({ label: t("r.bar.label"), value: barWidth, unit: "mm", note: t("r.bar.note") });
    items.push({ label: t("r.effsaddle.label"), value: effSaddle, unit: "mm", note: t("r.effsaddle.note") });
  }

  return {
    items,
    values: { saddleHeight, setback, frame, reach, drop, stem, barWidth, effSaddle },
  };
}

/* ============================================================
   5. Road-bike illustration (drawn from the calculated fit)
   ============================================================ */

function bikeSVG(v) {
  // Fixed schematic frame; overlays scale slightly with the computed numbers so
  // the picture visibly responds to the fit. Same dashed-accent style as the
  // body diagrams: measurement line + end ticks + labelled points.
  const BBx = 250, BBy = 250;            // bottom bracket (crank centre)
  const rearX = 110, frontX = 470, wheelY = 300, wheelR = 56;

  // saddle height -> seat height above BB (scaled), capped for the canvas
  const seatLen = clampN((v.saddleHeight - 600) * 0.28 + 78, 70, 120);
  const seatTopX = BBx - 16, seatTopY = BBy - seatLen;
  // reach -> horizontal distance BB->bars; drop -> bars relative to saddle top
  const reachPx = clampN((v.reach - 380) * 0.22 + 150, 110, 210);
  const barX = BBx + reachPx;
  const dropPx = v.drop * 0.20; // +below saddle
  const barY = seatTopY + dropPx;
  const headTopX = barX - 14, headTopY = barY;

  const saddleHalf = 22;
  const setbackPx = clampN(v.setback * 0.10, 4, 22);

  return `
  <svg viewBox="0 0 560 360" role="img" aria-label="road bike fit">
    <!-- wheels -->
    <circle class="bike-wheel" cx="${rearX}" cy="${wheelY}" r="${wheelR}"/>
    <circle class="bike-wheel" cx="${frontX}" cy="${wheelY}" r="${wheelR}"/>
    <circle class="bike-frame" cx="${rearX}" cy="${wheelY}" r="3"/>
    <circle class="bike-frame" cx="${frontX}" cy="${wheelY}" r="3"/>

    <!-- frame: BB -> rear axle, BB -> seat, seat -> rear, seat -> head, BB -> head, fork -->
    <path class="bike-frame" d="
      M${BBx} ${BBy} L${rearX} ${wheelY}
      M${BBx} ${BBy} L${seatTopX} ${seatTopY}
      M${seatTopX} ${seatTopY} L${rearX} ${wheelY}
      M${seatTopX} ${seatTopY} L${headTopX} ${headTopY}
      M${BBx} ${BBy} L${headTopX} ${headTopY}
      M${headTopX} ${headTopY} L${frontX} ${wheelY}
    "/>

    <!-- saddle -->
    <line class="bike-frame" x1="${seatTopX - saddleHalf - setbackPx}" y1="${seatTopY}" x2="${seatTopX + saddleHalf - setbackPx}" y2="${seatTopY}"/>
    <!-- handlebar (drop bar) -->
    <path class="bike-frame" d="M${headTopX - 4} ${headTopY} q22 0 22 18 q0 14 -14 18"/>
    <!-- crank -->
    <line class="bike-frame" x1="${BBx}" y1="${BBy}" x2="${BBx - 6}" y2="${BBy + 34}"/>

    <!-- ===== measurement overlays ===== -->

    <!-- saddle height: BB -> saddle top -->
    <line class="bike-measure" x1="${BBx}" y1="${BBy}" x2="${seatTopX}" y2="${seatTopY}"/>
    ${bikePoint(BBx, BBy, "")}
    ${bikePoint(seatTopX, seatTopY, "")}
    ${bikeLabel((BBx + seatTopX) / 2 - 64, (BBy + seatTopY) / 2, `${t("r.saddle.label")}: ${v.saddleHeight}mm`)}

    <!-- reach: saddle top -> bars (horizontal) -->
    <line class="bike-measure" x1="${seatTopX}" y1="${seatTopY - 24}" x2="${barX}" y2="${seatTopY - 24}"/>
    <line class="bike-tick" x1="${seatTopX}" y1="${seatTopY - 30}" x2="${seatTopX}" y2="${seatTopY - 18}"/>
    <line class="bike-tick" x1="${barX}" y1="${seatTopY - 30}" x2="${barX}" y2="${seatTopY - 18}"/>
    ${bikeLabel((seatTopX + barX) / 2 - 36, seatTopY - 30, `${t("r.reach.label")}: ${v.reach}mm`)}

    <!-- drop: saddle top level -> bar level -->
    <line class="bike-measure" x1="${barX + 18}" y1="${seatTopY}" x2="${barX + 18}" y2="${barY}"/>
    <line class="bike-tick" x1="${barX + 12}" y1="${seatTopY}" x2="${barX + 24}" y2="${seatTopY}"/>
    <line class="bike-tick" x1="${barX + 12}" y1="${barY}" x2="${barX + 24}" y2="${barY}"/>
    ${bikeLabel(barX + 26, (seatTopY + barY) / 2 + 3, `${t("r.drop.label")}: ${Math.abs(v.drop)}mm`, null, "end-safe")}

    <!-- setback marker at saddle nose -->
    ${bikePoint(seatTopX - saddleHalf - setbackPx, seatTopY, "")}
    ${bikeLabel(seatTopX - saddleHalf - setbackPx - 78, seatTopY + 14, `${t("r.setback.label")}: ${v.setback}mm`)}

    ${detailedOn ? bikeDetailOverlay(v, BBx, BBy) : ""}
  </svg>`;
}

function bikePoint(x, y) {
  return `<circle class="bike-point-ring" cx="${x}" cy="${y}" r="5"/>
          <circle class="bike-point" cx="${x}" cy="${y}" r="2.6"/>`;
}
function bikeLabel(x, y, text, w = null, mode = "start") {
  // Auto-size background to text (~5px/char at 9px Space Grotesk) so labels
  // never clip — important since RU strings are longer than EN.
  const width = w != null ? w : Math.round(text.length * 4.9 + 8);
  let bx = x - 3;
  // Keep the label box inside the 560-wide canvas.
  if (mode === "end-safe" && bx + width > 556) bx = 556 - width;
  if (bx < 4) bx = 4;
  return `<rect class="bike-label-bg" x="${bx}" y="${y - 9}" width="${width}" height="13" rx="3"/>
          <text class="bike-label" x="${bx + 3}" y="${y}">${text}</text>`;
}
function bikeDetailOverlay(v, BBx, BBy) {
  // crank length drawn from BB downward + extra labels for detailed values
  const crankPx = 34;
  return `
    <line class="bike-measure" x1="${BBx}" y1="${BBy}" x2="${BBx - 6}" y2="${BBy + crankPx}"/>
    ${bikePoint(BBx - 6, BBy + crankPx, "")}
    ${bikeLabel(BBx - 8, BBy + crankPx + 18, `${t("r.bar.label")}: ${v.barWidth}mm`)}
    ${bikeLabel(BBx + 16, BBy + 22, `${t("r.effsaddle.label")}: ${v.effSaddle}mm`)}`;
}

/* ============================================================
   6. Render
   ============================================================ */

function recalc() {
  const { items, values } = calcFit(activeProfile, readInputs());

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

  const bike = document.getElementById("bike-illu");
  if (bike) bike.innerHTML = bikeSVG(values);

  const grid = document.getElementById("result-grid");
  if (grid) {
    grid.innerHTML = items
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
