// Guided robot finder: a small wizard that scores every robot in the catalog
// against the visitor's answers and shows the best matches with reasons.
import { formatPrice, getPriceValue, resolveImagePath, escapeHTML } from '../utils/format.js';

// Mirror i18n.js language detection so the wizard matches the rest of the page.
// Only en/de have dedicated copy here; every other language falls back to en.
function detectLang() {
  try {
    const stored = localStorage.getItem('lang');
    if (stored) return stored;
    const url = new URLSearchParams(location.search).get('lang');
    if (url) return url;
    return (navigator.language || 'en').toLowerCase().split('-')[0] || 'en';
  } catch { return 'en'; }
}
let lang = detectLang();
const L = (o) => (o && (o[lang] || o.en)) || '';

const UI = {
  stepOf: { en: 'Question', de: 'Frage' },
  of: { en: 'of', de: 'von' },
  back: { en: 'Back', de: 'Zurück' },
  next: { en: 'Continue', de: 'Weiter' },
  skip: { en: 'Skip', de: 'Überspringen' },
  showResults: { en: 'Show my matches', de: 'Treffer anzeigen' },
  resultsTitle: { en: 'Your best matches', de: 'Deine besten Treffer' },
  resultsLead: {
    en: 'Ranked from the whole catalog based on your answers.',
    de: 'Aus dem ganzen Katalog nach deinen Antworten sortiert.',
  },
  match: { en: 'match', de: 'Treffer' },
  restart: { en: 'Start over', de: 'Neu starten' },
  refine: { en: 'Change answers', de: 'Antworten ändern' },
  viewAll: { en: 'Browse all in the catalog', de: 'Alle im Katalog ansehen' },
  inBudget: { en: 'in budget', de: 'im Budget' },
  forAge: { en: 'right age', de: 'passendes Alter' },
  recent: { en: 'recent model', de: 'aktuelles Modell' },
  noneTitle: { en: 'No strong matches', de: 'Keine starken Treffer' },
  noneBody: {
    en: 'Try removing a filter or widening your budget.',
    de: 'Entferne ein Kriterium oder weite dein Budget aus.',
  },
  multiHint: { en: 'Pick any that matter — or skip.', de: 'Wähle, was dir wichtig ist — oder überspringe.' },
};

const CAT_LABELS = {
  humanoid: { en: 'Humanoid', de: 'Humanoid' },
  quadruped: { en: 'Robot dog', de: 'Roboterhund' },
  companion: { en: 'Companion', de: 'Begleiter' },
  cleaning: { en: 'Cleaning', de: 'Reinigung' },
  outdoor: { en: 'Outdoor', de: 'Außenbereich' },
  educational: { en: 'Educational', de: 'Bildung' },
  smarthome: { en: 'Smart home', de: 'Smart Home' },
};

// Step 1 — what kind of robot you're after (maps to category, or "any").
// Ordered humanoid-first: humanoids and other "real" robots lead; home-helper
// appliances (cleaning/outdoor/smart home) follow as the nice-to-have tail.
const NEED_OPTIONS = [
  { value: 'humanoid', icon: 'fa-person', color: '#2563eb', label: { en: 'Humanoid robot', de: 'Humanoider Roboter' }, desc: { en: 'General-purpose, work & research', de: 'Allzweck, Arbeit & Forschung' } },
  { value: 'quadruped', icon: 'fa-dog', color: '#d97706', label: { en: 'Four-legged robot', de: 'Vierbeiner-Roboter' }, desc: { en: 'Robot dogs & inspection', de: 'Roboterhunde & Inspektion' } },
  { value: 'companion', icon: 'fa-heart', color: '#db2777', label: { en: 'Companion & social', de: 'Begleiter & Sozial' }, desc: { en: 'Emotion, assistance, fun', de: 'Emotion, Hilfe, Spaß' } },
  { value: 'educational', icon: 'fa-graduation-cap', color: '#10b981', label: { en: 'Learn & build', de: 'Lernen & Bauen' }, desc: { en: 'STEM, coding, kids', de: 'MINT, Coding, Kinder' } },
  { value: 'smarthome', icon: 'fa-house-signal', color: '#ea580c', label: { en: 'Smart home & service', de: 'Smart Home & Service' }, desc: { en: 'Kitchen, delivery, security', de: 'Küche, Lieferung, Sicherheit' } },
  { value: 'cleaning', icon: 'fa-broom', color: '#0d9488', label: { en: 'Home cleaning', de: 'Reinigung zuhause' }, desc: { en: 'Vacuum, mop, windows', de: 'Saugen, Wischen, Fenster' } },
  { value: 'outdoor', icon: 'fa-tree', color: '#059669', label: { en: 'Garden & outdoors', de: 'Garten & Außen' }, desc: { en: 'Lawn, pool, garden', de: 'Rasen, Pool, Garten' } },
  { value: 'any', icon: 'fa-shuffle', color: '#6b7280', label: { en: 'Just show me robots', de: 'Zeig mir einfach Roboter' }, desc: { en: 'Browse everything', de: 'Alles durchstöbern' } },
];

// Step 2 — budget buckets (USD), matched against getPriceValue
const BUDGET_OPTIONS = [
  { value: 'b1', min: 0, max: 300, icon: 'fa-piggy-bank', label: { en: 'Under $300', de: 'Unter 300 $' } },
  { value: 'b2', min: 300, max: 700, icon: 'fa-wallet', label: { en: '$300 – $700', de: '300 – 700 $' } },
  { value: 'b3', min: 700, max: 1500, icon: 'fa-credit-card', label: { en: '$700 – $1,500', de: '700 – 1.500 $' } },
  { value: 'b4', min: 1500, max: 5000, icon: 'fa-sack-dollar', label: { en: '$1,500 – $5,000', de: '1.500 – 5.000 $' } },
  { value: 'b5', min: 5000, max: Infinity, icon: 'fa-gem', label: { en: 'Over $5,000', de: 'Über 5.000 $' } },
  { value: 'any', min: 0, max: Infinity, icon: 'fa-infinity', label: { en: 'Budget doesn’t matter', de: 'Budget egal' } },
];

// Step 3 — how recent the model should be (uses the releaseDate field, ~92% filled)
const RECENCY_OPTIONS = [
  { value: 'r1', minYear: 2024, icon: 'fa-bolt', label: { en: 'Latest models', de: 'Neueste Modelle' }, desc: { en: 'Released 2024 or newer', de: 'Erschienen ab 2024' } },
  { value: 'r2', minYear: 2021, icon: 'fa-clock-rotate-left', label: { en: 'Fairly recent', de: 'Relativ aktuell' }, desc: { en: 'Released 2021 or newer', de: 'Erschienen ab 2021' } },
  { value: 'any', minYear: null, icon: 'fa-infinity', label: { en: 'Age doesn’t matter', de: 'Alter egal' }, desc: { en: 'Classics welcome too', de: 'Auch Klassiker willkommen' } },
];

// Step 5 — child age, only shown for the educational path
const AGE_OPTIONS = [
  { value: 'a1', age: 5, icon: 'fa-baby', label: { en: 'Under 6', de: 'Unter 6' } },
  { value: 'a2', age: 8, icon: 'fa-child', label: { en: '6 – 9 years', de: '6 – 9 Jahre' } },
  { value: 'a3', age: 12, icon: 'fa-child-reaching', label: { en: '10 – 13 years', de: '10 – 13 Jahre' } },
  { value: 'a4', age: 16, icon: 'fa-user-graduate', label: { en: '14+ / adult', de: '14+ / Erwachsen' } },
  { value: 'any', age: null, icon: 'fa-users', label: { en: 'Any age', de: 'Jedes Alter' } },
];

// Step 3 — curated, data-backed feature tags per category (real catalog tags)
const FEATURES = {
  cleaning: [
    { tag: 'mop', icon: 'fa-droplet', label: { en: 'Mops too', de: 'Wischt auch' } },
    { tag: 'auto-empty', icon: 'fa-trash-can-arrow-up', label: { en: 'Self-emptying dock', de: 'Selbstentleerende Station' } },
    { tag: 'lidar', icon: 'fa-satellite-dish', label: { en: 'Laser navigation', de: 'Lasernavigation' } },
    { tag: 'obstacle-avoidance', icon: 'fa-eye', label: { en: 'Obstacle avoidance', de: 'Hinderniserkennung' } },
    { tag: 'app-control', icon: 'fa-mobile-screen', label: { en: 'App control', de: 'App-Steuerung' } },
    { tag: 'self-wash', icon: 'fa-soap', label: { en: 'Self-cleaning mop', de: 'Mopp-Selbstreinigung' } },
    { tag: 'window-clean', icon: 'fa-window-maximize', label: { en: 'Cleans windows', de: 'Fensterreinigung' } },
    { tag: 'pet', icon: 'fa-paw', label: { en: 'Good with pet hair', de: 'Tierhaar-geeignet' } },
  ],
  outdoor: [
    { tag: 'lawn-mow', icon: 'fa-seedling', label: { en: 'Mows the lawn', de: 'Rasenmähen' } },
    { tag: 'pool-clean', icon: 'fa-water', label: { en: 'Cleans the pool', de: 'Poolreinigung' } },
    { tag: 'garden', icon: 'fa-leaf', label: { en: 'Garden care', de: 'Gartenpflege' } },
    { tag: 'autonomous-nav', icon: 'fa-route', label: { en: 'Autonomous nav', de: 'Autonome Navigation' } },
    { tag: 'obstacle-avoidance', icon: 'fa-eye', label: { en: 'Obstacle avoidance', de: 'Hinderniserkennung' } },
    { tag: 'app-control', icon: 'fa-mobile-screen', label: { en: 'App control', de: 'App-Steuerung' } },
  ],
  companion: [
    { tag: 'voice-control', icon: 'fa-microphone', label: { en: 'Voice control', de: 'Sprachsteuerung' } },
    { tag: 'emotion-recognition', icon: 'fa-face-smile', label: { en: 'Reads emotions', de: 'Emotionserkennung' } },
    { tag: 'pet', icon: 'fa-paw', label: { en: 'Robot pet', de: 'Roboter-Haustier' } },
    { tag: 'therapeutic', icon: 'fa-hand-holding-heart', label: { en: 'Therapeutic', de: 'Therapeutisch' } },
    { tag: 'toy', icon: 'fa-gamepad', label: { en: 'Fun & play', de: 'Spiel & Spaß' } },
    { tag: 'app-control', icon: 'fa-mobile-screen', label: { en: 'App control', de: 'App-Steuerung' } },
  ],
  educational: [
    { tag: 'programmable', icon: 'fa-code', label: { en: 'Programmable', de: 'Programmierbar' } },
    { tag: 'stem', icon: 'fa-flask', label: { en: 'STEM learning', de: 'MINT-Lernen' } },
    { tag: 'robotic-arm', icon: 'fa-robot', label: { en: 'Robotic arm', de: 'Roboterarm' } },
    { tag: 'ai-powered', icon: 'fa-brain', label: { en: 'AI features', de: 'KI-Funktionen' } },
    { tag: 'dev-platform', icon: 'fa-screwdriver-wrench', label: { en: 'Dev platform', de: 'Entwicklerplattform' } },
    { tag: 'app-control', icon: 'fa-mobile-screen', label: { en: 'App control', de: 'App-Steuerung' } },
  ],
  humanoid: [
    { tag: 'industrial', icon: 'fa-industry', label: { en: 'Industrial work', de: 'Industrie/Arbeit' } },
    { tag: 'service', icon: 'fa-bell-concierge', label: { en: 'Service & reception', de: 'Service/Empfang' } },
    { tag: 'research', icon: 'fa-flask', label: { en: 'Research', de: 'Forschung' } },
    { tag: 'dev-platform', icon: 'fa-screwdriver-wrench', label: { en: 'Dev platform', de: 'Entwicklerplattform' } },
    { tag: 'ai-powered', icon: 'fa-brain', label: { en: 'AI-driven', de: 'KI-gesteuert' } },
    { tag: 'consumer', icon: 'fa-house', label: { en: 'For the home', de: 'Für Zuhause' } },
  ],
  quadruped: [
    { tag: 'inspection', icon: 'fa-magnifying-glass', label: { en: 'Inspection', de: 'Inspektion' } },
    { tag: 'all-terrain', icon: 'fa-mountain', label: { en: 'All-terrain', de: 'Geländegängig' } },
    { tag: 'stair-climbing', icon: 'fa-stairs', label: { en: 'Climbs stairs', de: 'Treppensteigen' } },
    { tag: 'security', icon: 'fa-shield-halved', label: { en: 'Security', de: 'Sicherheit' } },
    { tag: 'research', icon: 'fa-flask', label: { en: 'Research', de: 'Forschung' } },
    { tag: 'pet', icon: 'fa-paw', label: { en: 'Fun robot dog', de: 'Roboterhund (Spaß)' } },
  ],
  smarthome: [
    { tag: 'kitchen', icon: 'fa-utensils', label: { en: 'Kitchen & cooking', de: 'Küche & Kochen' } },
    { tag: 'delivery', icon: 'fa-box', label: { en: 'Delivery & transport', de: 'Lieferung/Transport' } },
    { tag: 'security', icon: 'fa-shield-halved', label: { en: 'Security & monitoring', de: 'Sicherheit/Überwachung' } },
    { tag: 'voice-control', icon: 'fa-microphone', label: { en: 'Voice control', de: 'Sprachsteuerung' } },
    { tag: 'home-assistant', icon: 'fa-house-signal', label: { en: 'Home assistant', de: 'Smart-Home-Assistent' } },
    { tag: 'service', icon: 'fa-bell-concierge', label: { en: 'Service & reception', de: 'Service/Empfang' } },
  ],
  any: [
    { tag: 'ai-powered', icon: 'fa-brain', label: { en: 'AI-powered', de: 'KI-gestützt' } },
    { tag: 'voice-control', icon: 'fa-microphone', label: { en: 'Voice control', de: 'Sprachsteuerung' } },
    { tag: 'app-control', icon: 'fa-mobile-screen', label: { en: 'App control', de: 'App-Steuerung' } },
    { tag: 'autonomous-nav', icon: 'fa-route', label: { en: 'Autonomous', de: 'Autonom' } },
    { tag: 'consumer', icon: 'fa-house', label: { en: 'For consumers', de: 'Für Verbraucher' } },
    { tag: 'programmable', icon: 'fa-code', label: { en: 'Programmable', de: 'Programmierbar' } },
  ],
};

const STEP_META = {
  need: { icon: 'fa-compass', title: { en: 'What kind of robot are you after?', de: 'Welche Art Roboter suchst du?' } },
  budget: { icon: 'fa-wallet', title: { en: 'What’s your budget?', de: 'Wie hoch ist dein Budget?' } },
  recency: { icon: 'fa-bolt', title: { en: 'How recent should it be?', de: 'Wie aktuell soll er sein?' } },
  features: { icon: 'fa-sliders', title: { en: 'What matters most?', de: 'Was ist dir wichtig?' } },
  age: { icon: 'fa-child', title: { en: 'Who is it for?', de: 'Für wen ist er?' } },
};

const FEATURE_WEIGHT = 12;
const BUDGET_BONUS = 30;
const AGE_BONUS = 25;
const RECENCY_BONUS = 20;

let ROBOTS = [];
const answers = { need: null, budget: null, recency: null, features: [], age: null };
let index = 0;

function steps() {
  const s = ['need', 'budget', 'recency', 'features'];
  if (answers.need === 'educational') s.push('age');
  return s;
}

function budgetDef() {
  return BUDGET_OPTIONS.find((b) => b.value === answers.budget) || null;
}
function recencyDef() {
  return RECENCY_OPTIONS.find((r) => r.value === answers.recency) || null;
}
function ageDef() {
  return AGE_OPTIONS.find((a) => a.value === answers.age) || null;
}

function parseAgeRange(raw) {
  if (!raw) return null;
  const nums = String(raw).match(/\d+/g);
  if (!nums) return null;
  const min = parseInt(nums[0], 10);
  const max = nums[1] ? parseInt(nums[1], 10) : 99;
  return { min, max };
}

function scoreRobot(r) {
  const reasons = [];
  let score = 0;

  // Features
  const tags = r.tagsArray || [];
  for (const tag of answers.features) {
    if (tags.includes(tag)) {
      score += FEATURE_WEIGHT;
      const def = (FEATURES[answers.need] || FEATURES.any).find((f) => f.tag === tag);
      if (def) reasons.push({ icon: def.icon, text: L(def.label) });
    }
  }

  // Budget
  const b = budgetDef();
  if (b && b.value !== 'any') {
    const v = getPriceValue(r.price);
    if (v !== Infinity) {
      if (v >= b.min && v < b.max) {
        score += BUDGET_BONUS;
        reasons.push({ icon: 'fa-wallet', text: L(UI.inBudget) });
      } else {
        score -= 20;
      }
    } else {
      score -= 2; // unknown price ranks just below in-budget priced ones
    }
  }

  // Recency (release year)
  const rec = recencyDef();
  if (rec && rec.minYear != null) {
    const y = parseInt(r.releaseDate, 10);
    if (Number.isFinite(y)) {
      if (y >= rec.minYear) {
        score += RECENCY_BONUS;
        reasons.push({ icon: 'fa-bolt', text: L(UI.recent) });
      } else {
        score -= 15;
      }
    } else {
      score -= 5; // unknown year ranks below confirmed-recent models
    }
  }

  // Age (educational)
  const a = ageDef();
  if (a && a.age != null) {
    const ar = parseAgeRange(r.ageRange);
    if (ar && a.age >= ar.min && a.age <= ar.max) {
      score += AGE_BONUS;
      reasons.push({ icon: 'fa-child', text: L(UI.forAge) });
    }
  }

  // Gentle tiebreakers: newer + has a photo
  const year = parseInt(r.releaseDate, 10);
  if (Number.isFinite(year)) score += (year - 2000) * 0.08;
  if ((r.image || '').trim()) score += 0.5;

  return { score, reasons };
}

function bestPossible() {
  let max = answers.features.length * FEATURE_WEIGHT;
  if (answers.budget && answers.budget !== 'any') max += BUDGET_BONUS;
  if (answers.recency && answers.recency !== 'any') max += RECENCY_BONUS;
  if (answers.need === 'educational' && answers.age && answers.age !== 'any') max += AGE_BONUS;
  return max;
}

function computeResults() {
  let pool = ROBOTS;
  if (answers.need && answers.need !== 'any') pool = pool.filter((r) => r.category === answers.need);
  const scored = pool.map((r) => ({ r, ...scoreRobot(r) }));
  scored.sort((x, y) => y.score - x.score);
  return scored;
}

// ---- Rendering ----
const stepEl = () => document.getElementById('finderStep');
const navEl = () => document.getElementById('finderNav');

function optionButton({ value, icon, color, title, desc, selected }) {
  return `<button type="button" class="finder-option${selected ? ' is-selected' : ''}" data-value="${escapeHTML(value)}">
    <span class="finder-option-icon"${color ? ` style="color:${color}"` : ''}><i class="fas ${icon}"></i></span>
    <span class="finder-option-body">
      <span class="finder-option-title">${escapeHTML(title)}</span>
      ${desc ? `<span class="finder-option-desc">${escapeHTML(desc)}</span>` : ''}
    </span>
    ${selected ? '<span class="finder-option-check"><i class="fas fa-check"></i></span>' : ''}
  </button>`;
}

function renderProgress() {
  const order = steps();
  const total = order.length;
  const cur = Math.min(index, total - 1);
  const bar = document.getElementById('finderProgressBar');
  const lbl = document.getElementById('finderProgressLabel');
  if (bar) bar.style.width = Math.round(((cur + 1) / total) * 100) + '%';
  if (lbl) lbl.textContent = `${L(UI.stepOf)} ${cur + 1} ${L(UI.of)} ${total}`;
}

function renderStep() {
  const order = steps();
  if (index >= order.length) return renderResults();
  const id = order[index];
  const meta = STEP_META[id];
  let optionsHTML = '';
  let isMulti = false;

  if (id === 'need') {
    optionsHTML = NEED_OPTIONS.map((o) => optionButton({
      value: o.value, icon: o.icon, color: o.color, title: L(o.label), desc: L(o.desc),
      selected: answers.need === o.value,
    })).join('');
  } else if (id === 'budget') {
    optionsHTML = BUDGET_OPTIONS.map((o) => optionButton({
      value: o.value, icon: o.icon, title: L(o.label), selected: answers.budget === o.value,
    })).join('');
  } else if (id === 'recency') {
    optionsHTML = RECENCY_OPTIONS.map((o) => optionButton({
      value: o.value, icon: o.icon, title: L(o.label), desc: L(o.desc), selected: answers.recency === o.value,
    })).join('');
  } else if (id === 'age') {
    optionsHTML = AGE_OPTIONS.map((o) => optionButton({
      value: o.value, icon: o.icon, title: L(o.label), selected: answers.age === o.value,
    })).join('');
  } else if (id === 'features') {
    isMulti = true;
    const list = FEATURES[answers.need] || FEATURES.any;
    optionsHTML = list.map((o) => optionButton({
      value: o.tag, icon: o.icon, title: L(o.label), selected: answers.features.includes(o.tag),
    })).join('');
  }

  stepEl().innerHTML = `
    <div class="finder-q-head">
      <span class="finder-q-icon"><i class="fas ${meta.icon}"></i></span>
      <h2 class="finder-q-title">${escapeHTML(L(meta.title))}</h2>
      ${isMulti ? `<p class="finder-q-hint">${escapeHTML(L(UI.multiHint))}</p>` : ''}
    </div>
    <div class="finder-options${isMulti ? ' is-multi' : ''}">${optionsHTML}</div>`;

  // Option clicks
  stepEl().querySelectorAll('.finder-option').forEach((btn) => {
    btn.addEventListener('click', () => onOption(id, btn.dataset.value));
  });

  renderNav(id, isMulti);
  renderProgress();
}

function renderNav(id, isMulti) {
  const showBack = index > 0;
  const optional = id === 'features';
  navEl().innerHTML = `
    <button type="button" id="finderBack" class="finder-btn finder-btn-ghost${showBack ? '' : ' invisible'}">
      <i class="fas fa-arrow-left"></i> ${escapeHTML(L(UI.back))}
    </button>
    <div class="finder-nav-right">
      ${optional ? `<button type="button" id="finderSkip" class="finder-btn finder-btn-ghost">${escapeHTML(L(UI.skip))}</button>` : ''}
      ${isMulti ? `<button type="button" id="finderNext" class="finder-btn finder-btn-primary">${escapeHTML(L(UI.next))} <i class="fas fa-arrow-right"></i></button>` : ''}
    </div>`;
  const back = document.getElementById('finderBack');
  if (back && showBack) back.addEventListener('click', goBack);
  const skip = document.getElementById('finderSkip');
  if (skip) skip.addEventListener('click', () => { advance(); });
  const next = document.getElementById('finderNext');
  if (next) next.addEventListener('click', () => { advance(); });
}

function onOption(stepId, value) {
  if (stepId === 'features') {
    const i = answers.features.indexOf(value);
    if (i >= 0) answers.features.splice(i, 1); else answers.features.push(value);
    renderStep(); // re-render to reflect toggles
    return;
  }
  if (stepId === 'need') {
    if (answers.need !== value) answers.features = []; // features depend on need
    answers.need = value;
  } else if (stepId === 'budget') {
    answers.budget = value;
  } else if (stepId === 'recency') {
    answers.recency = value;
  } else if (stepId === 'age') {
    answers.age = value;
  }
  // single-select auto-advances
  setTimeout(advance, 160);
}

function advance() {
  index += 1;
  if (index >= steps().length) renderResults();
  else renderStep();
}
function goBack() {
  index = Math.max(0, index - 1);
  renderStep();
}

function resultCard(entry, pct) {
  const r = entry.r;
  const cat = CAT_LABELS[r.category] ? L(CAT_LABELS[r.category]) : r.category;
  const img = resolveImagePath(r.image);
  const price = formatPrice(r.price, lang, (k, fb) => fb || k);
  const chips = entry.reasons.slice(0, 3).map((why) =>
    `<span class="finder-why-chip"><i class="fas ${why.icon}"></i> ${escapeHTML(why.text)}</span>`).join('');
  return `<a href="/robot/${encodeURIComponent(r.id)}/" class="robot-card finder-result block no-underline">
    <div class="card-image">
      <span class="category-badge">${escapeHTML(cat)}</span>
      ${pct != null ? `<span class="finder-match-badge">${pct}% ${escapeHTML(L(UI.match))}</span>` : ''}
      <img src="${escapeHTML(img)}" alt="${escapeHTML(r.model + ' by ' + r.manufacturer)}" loading="lazy" width="400" height="300" />
    </div>
    <div class="card-info">
      <h3>${escapeHTML(r.model)}</h3>
      <p class="manufacturer">${escapeHTML(r.manufacturer)}</p>
      <p class="price">${price}</p>
      ${chips ? `<div class="finder-why">${chips}</div>` : ''}
    </div>
  </a>`;
}

function renderResults() {
  renderProgress();
  const bar = document.getElementById('finderProgressBar');
  if (bar) bar.style.width = '100%';
  const max = bestPossible();
  const scored = computeResults();
  const top = scored.slice(0, 12);

  const catLink = answers.need && answers.need !== 'any'
    ? '/?category=' + encodeURIComponent(answers.need) : '/';

  const cards = top.map((e) => {
    let pct = null;
    if (max > 0) pct = Math.max(5, Math.min(100, Math.round((e.score / max) * 100)));
    return resultCard(e, pct);
  }).join('');

  const wizard = document.getElementById('finderWizard');
  const results = document.getElementById('finderResults');
  wizard.classList.add('hidden');
  results.classList.remove('hidden');
  results.innerHTML = `
    <div class="finder-results-head">
      <h2 class="finder-q-title">${escapeHTML(L(UI.resultsTitle))}</h2>
      <p class="finder-q-hint">${escapeHTML(L(UI.resultsLead))}</p>
    </div>
    ${top.length ? `<div class="finder-result-grid">${cards}</div>` : `
      <div class="finder-empty">
        <i class="fas fa-robot"></i>
        <h3>${escapeHTML(L(UI.noneTitle))}</h3>
        <p>${escapeHTML(L(UI.noneBody))}</p>
      </div>`}
    <div class="finder-results-actions">
      <a href="${catLink}" class="finder-btn finder-btn-primary no-underline"><i class="fas fa-grip"></i> ${escapeHTML(L(UI.viewAll))}</a>
      <button type="button" id="finderRefine" class="finder-btn finder-btn-ghost"><i class="fas fa-sliders"></i> ${escapeHTML(L(UI.refine))}</button>
      <button type="button" id="finderRestart" class="finder-btn finder-btn-ghost"><i class="fas fa-rotate-left"></i> ${escapeHTML(L(UI.restart))}</button>
    </div>`;

  document.getElementById('finderRefine').addEventListener('click', () => {
    results.classList.add('hidden');
    wizard.classList.remove('hidden');
    index = steps().length - 1;
    renderStep();
  });
  document.getElementById('finderRestart').addEventListener('click', restart);
  results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restart() {
  answers.need = null; answers.budget = null; answers.recency = null; answers.features = []; answers.age = null;
  index = 0;
  document.getElementById('finderResults').classList.add('hidden');
  document.getElementById('finderWizard').classList.remove('hidden');
  renderStep();
  document.getElementById('finderWizard').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function rerender() {
  const results = document.getElementById('finderResults');
  if (results && !results.classList.contains('hidden')) renderResults();
  else renderStep();
}

function start() {
  ROBOTS = (window.__ROBOTS_DATA__ || []);
  if (!stepEl()) return;
  // Re-render in the new language when the visitor switches it in the header.
  document.addEventListener('languageChanged', (e) => {
    lang = (e.detail && e.detail.lang) || lang;
    rerender();
  });
  renderStep();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
