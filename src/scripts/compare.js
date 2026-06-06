import { saveToLocalStorage, loadArrayFromLocalStorage } from './storage.js';
import { escapeHTML, fetchAllRobots, resolveImagePath, formatPrice, formatSpec } from '../utils/format.js';

const MAX_COMPARE = 4;
let compareIds = loadArrayFromLocalStorage('compareRobots');

function getCompareRobots() {
  return fetchAllRobots().filter(r => compareIds.includes(r.id));
}

function addToCompare(robotId) {
  if (compareIds.includes(robotId) || compareIds.length >= MAX_COMPARE) return;
  compareIds.push(robotId);
  saveToLocalStorage('compareRobots', compareIds);
  updateCompareUI();
}

function removeFromCompare(robotId) {
  compareIds = compareIds.filter(id => id !== robotId);
  saveToLocalStorage('compareRobots', compareIds);
  updateCompareUI();
}

function clearCompare() {
  compareIds = [];
  saveToLocalStorage('compareRobots', compareIds);
  updateCompareUI();
}

function updateCompareUI() {
  const bar = document.getElementById('compareBar');
  const barItems = document.getElementById('compareBarItems');
  const barCount = document.getElementById('compareBarCount');

  if (bar) {
    bar.classList.toggle('active', compareIds.length > 0);
  }

  if (barCount) {
    barCount.textContent = compareIds.length;
  }

  if (barItems) {
    const robots = getCompareRobots();
    barItems.innerHTML = robots.map(r => {
      const img = escapeHTML(resolveImagePath(r.image));
      return `<div class="relative shrink-0">
        <img src="${img}" alt="${escapeHTML(r.model)}" class="w-10 h-10 rounded-lg object-contain bg-bg border border-border" />
        <button class="absolute -top-1 -right-1 w-4 h-4 bg-danger text-white rounded-full text-[10px] flex items-center justify-center" data-remove="${escapeHTML(r.id)}">&times;</button>
      </div>`;
    }).join('');

    barItems.querySelectorAll('img').forEach(img => {
      img.addEventListener('error', () => { img.src = '/images/image-not-found.webp'; });
    });

    barItems.querySelectorAll('[data-remove]').forEach(btn => {
      btn.addEventListener('click', () => removeFromCompare(btn.dataset.remove));
    });
  }
}

function renderCompareTable() {
  const container = document.getElementById('compareTableContainer');
  if (!container) return;

  const robots = getCompareRobots();
  const lang = localStorage.getItem('lang') || 'en';
  const { translations } = window.__I18N__ || { translations: {} };
  const tbl = (translations && translations[lang]) || {};
  const t = (k, fb) => tbl[k] || fb || k;

  if (robots.length < 2) {
    container.innerHTML = `<p class="text-text-muted text-center py-8">${t('compare.minimum', 'Add at least two robots to compare them.')}</p>`;
    return;
  }

  const specs = [
    { key: 'manufacturer', labelKey: 'spec.manufacturer', fb: 'Manufacturer' },
    { key: 'price', labelKey: 'spec.price', fb: 'Price' },
    { key: 'weight', labelKey: 'spec.weight', fb: 'Weight' },
    { key: 'batteryLife', labelKey: 'spec.batteryLife', fb: 'Battery Life' },
    { key: 'handType', labelKey: 'spec.hands', fb: 'Hands' },
    { key: 'connectivity', labelKey: 'spec.connectivity', fb: 'Connectivity' },
    { key: 'maxRuntime', labelKey: 'spec.maxRuntime', fb: 'Max Runtime' },
    { key: 'speed', labelKey: 'spec.speed', fb: 'Speed' },
    { key: 'terrain', labelKey: 'spec.terrain', fb: 'Terrain' },
  ];

  const rows = specs
    .filter(spec => robots.some(r => r[spec.key] && r[spec.key].trim()))
    .map(spec => {
      const cells = robots.map(r => {
        const val = r[spec.key] || '-';
        return escapeHTML(spec.key === 'price' ? formatPrice(val, lang, t) : formatSpec(val, lang));
      });
      return `<tr><td>${escapeHTML(t(spec.labelKey, spec.fb))}</td>${cells.map(c => `<td>${c}</td>`).join('')}</tr>`;
    }).join('');

  const headers = `<th>${escapeHTML(t('compare.specification', 'Specification'))}</th>${robots.map(r => `<th>${escapeHTML(r.model)}</th>`).join('')}`;

  container.innerHTML = `<table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>`;
}

function openCompareModal() {
  const modal = document.getElementById('compareModal');
  if (modal) {
    modal.classList.remove('hidden');
    renderCompareTable();
  }
}

function closeCompareModal() {
  const modal = document.getElementById('compareModal');
  if (modal) modal.classList.add('hidden');
}

function init() {
  window.__addToCompare = addToCompare;
  window.__removeFromCompare = removeFromCompare;

  const barBtn = document.getElementById('compareBarBtn');
  if (barBtn) barBtn.addEventListener('click', openCompareModal);

  const barClear = document.getElementById('compareBarClear');
  if (barClear) barClear.addEventListener('click', clearCompare);

  const closeBtn = document.getElementById('compareClose');
  if (closeBtn) closeBtn.addEventListener('click', closeCompareModal);

  const modalOverlay = document.getElementById('compareModalOverlay');
  if (modalOverlay) modalOverlay.addEventListener('click', closeCompareModal);

  const modalClear = document.getElementById('compareClear');
  if (modalClear) modalClear.addEventListener('click', () => {
    clearCompare();
    closeCompareModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const modal = document.getElementById('compareModal');
    if (modal && !modal.classList.contains('hidden')) closeCompareModal();
  });

  updateCompareUI();
}

document.addEventListener('DOMContentLoaded', init);
