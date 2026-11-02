import { saveToLocalStorage, loadArrayFromLocalStorage } from './storage.js';
import { loadProductEvidence } from '../utils/load-product-evidence.js';
import {
  escapeHTML,
  fetchAllRobots,
  resolveImagePath,
  formatPrice,
  formatSpec,
} from '../utils/format.js';

const MAX_COMPARE = 4;
let compareIds = loadArrayFromLocalStorage('compareRobots');
let renderVersion = 0;

function sourceLink(source, label) {
  if (!source || !/^https?:\/\//i.test(source.url)) return '';
  return `<a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:no-underline">${escapeHTML(label)} · <time datetime="${escapeHTML(source.checkedAt)}">${escapeHTML(source.checkedAt)}</time></a>`;
}

function getCompareRobots() {
  return fetchAllRobots().filter((r) => compareIds.includes(r.id));
}

function addToCompare(robotId) {
  if (compareIds.includes(robotId) || compareIds.length >= MAX_COMPARE) return;
  compareIds.push(robotId);
  saveToLocalStorage('compareRobots', compareIds);
  updateCompareUI();
}

function removeFromCompare(robotId) {
  compareIds = compareIds.filter((id) => id !== robotId);
  saveToLocalStorage('compareRobots', compareIds);
  updateCompareUI();
}

function clearCompare() {
  compareIds = [];
  saveToLocalStorage('compareRobots', compareIds);
  updateCompareUI();
}

function updateCompareUI() {
  syncCompareButtons();
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
    barItems.innerHTML = robots
      .map((r) => {
        const img = escapeHTML(resolveImagePath(r.image));
        return `<div class="relative shrink-0">
        <img src="${img}" alt="${escapeHTML(r.model)}" class="w-10 h-10 rounded-lg object-contain bg-bg border border-border" />
        <button class="absolute -top-1 -right-1 w-4 h-4 bg-danger text-white rounded-full text-[10px] flex items-center justify-center" data-remove="${escapeHTML(r.id)}">&times;</button>
      </div>`;
      })
      .join('');

    barItems.querySelectorAll('img').forEach((img) => {
      img.addEventListener('error', () => {
        img.src = '/images/image-not-found.webp';
      });
    });

    barItems.querySelectorAll('[data-remove]').forEach((btn) => {
      btn.addEventListener('click', () => removeFromCompare(btn.dataset.remove));
    });
  }
  const modal = document.getElementById('compareModal');
  if (modal && !modal.classList.contains('hidden')) renderCompareTable();
}

function syncCompareButtons() {
  const lang = window.__I18N__?.currentLang?.() || localStorage.getItem('lang') || 'en';
  const table = window.__I18N__?.translations?.[lang] || {};
  document.querySelectorAll('[data-compare-id]').forEach((button) => {
    const selected = compareIds.includes(button.dataset.compareId);
    button.setAttribute('aria-pressed', String(selected));
    button.disabled = !selected && compareIds.length >= MAX_COMPARE;
    button.title = button.disabled
      ? table['compare.limit'] || 'Compare up to four robots at a time'
      : '';
  });
}

async function renderCompareTable() {
  const container = document.getElementById('compareTableContainer');
  if (!container) return;
  const version = ++renderVersion;

  const robots = getCompareRobots();
  const lang = window.__I18N__?.currentLang?.() || localStorage.getItem('lang') || 'en';
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
    { key: 'size', labelKey: 'spec.size', fb: 'Size' },
    { key: 'payload', labelKey: 'spec.payload', fb: 'Payload' },
    { key: 'dof', labelKey: 'spec.dof', fb: 'Degrees of freedom' },
    { key: 'ipRating', labelKey: 'spec.ipRating', fb: 'IP rating' },
    { key: 'depthRating', labelKey: 'spec.depthRating', fb: 'Depth rating' },
    { key: 'flightTime', labelKey: 'spec.flightTime', fb: 'Flight time' },
    { key: 'maxTakeoffWeight', labelKey: 'spec.maxTakeoffWeight', fb: 'Maximum takeoff mass' },
    { key: 'cookingCapacity', labelKey: 'spec.cookingCapacity', fb: 'Cooking capacity per batch' },
    { key: 'heatSource', labelKey: 'spec.heatSource', fb: 'Heat source' },
    { key: 'workingWidth', labelKey: 'spec.workingWidth', fb: 'Working width' },
    { key: 'areaRate', labelKey: 'spec.areaRate', fb: 'Area rate' },
    { key: 'throughput', labelKey: 'spec.throughput', fb: 'Throughput' },
    { key: 'stackingHeight', labelKey: 'spec.stackingHeight', fb: 'Stacking height' },
    { key: 'assistPower', labelKey: 'spec.assistPower', fb: 'Assistance power' },
    { key: 'assistancePace', labelKey: 'spec.assistancePace', fb: 'Assistance pace' },
    { key: 'assistanceRange', labelKey: 'spec.assistanceRange', fb: 'Assistance range' },
    { key: 'waterTankCapacity', labelKey: 'spec.waterTankCapacity', fb: 'Water tank capacity' },
    { key: 'navigationAccuracy', labelKey: 'spec.navigationAccuracy', fb: 'Navigation accuracy' },
    { key: 'dockingAccuracy', labelKey: 'spec.dockingAccuracy', fb: 'Docking accuracy' },
    { key: 'driveMode', labelKey: 'spec.driveMode', fb: 'Drive mode' },
    { key: 'liftStroke', labelKey: 'spec.liftStroke', fb: 'Lift travel' },
    { key: 'maxLiftHeight', labelKey: 'spec.maxLiftHeight', fb: 'Maximum fork height' },
    { key: 'armReach', labelKey: 'spec.armReach', fb: 'Arm reach' },
    { key: 'armRepeatability', labelKey: 'spec.armRepeatability', fb: 'Arm repeatability' },
    { key: 'weldSpeed', labelKey: 'spec.weldSpeed', fb: 'Welding feed rate' },
    { key: 'workTableSize', labelKey: 'spec.workTableSize', fb: 'Work table dimensions' },
    { key: 'minAisleWidth', labelKey: 'spec.minAisleWidth', fb: 'Minimum aisle width' },
    { key: 'turningRadius', labelKey: 'spec.turningRadius', fb: 'Turning radius' },
    { key: 'transportPayload', labelKey: 'spec.transportPayload', fb: 'Transport payload' },
    {
      key: 'visionPrecision',
      labelKey: 'spec.visionPrecision',
      fb: 'Vision localization precision',
    },
    { key: 'batteryLife', labelKey: 'spec.batteryLife', fb: 'Battery Life' },
    { key: 'handType', labelKey: 'spec.hands', fb: 'Hands' },
    { key: 'connectivity', labelKey: 'spec.connectivity', fb: 'Connectivity' },
    { key: 'maxRuntime', labelKey: 'spec.maxRuntime', fb: 'Max Runtime' },
    { key: 'chargingTime', labelKey: 'spec.chargingTime', fb: 'Charging time' },
    { key: 'speed', labelKey: 'spec.speed', fb: 'Speed' },
    { key: 'terrain', labelKey: 'spec.terrain', fb: 'Terrain' },
  ];

  const renderTable = (evidence) => {
    const rows = specs
      .filter((spec) => robots.some((r) => r[spec.key] && r[spec.key].trim()))
      .map((spec) => {
        const cells = robots.map((r) => {
          const val = r[spec.key] || '-';
          let cell = escapeHTML(
            spec.key === 'price' ? formatPrice(val, lang, t) : formatSpec(val, lang),
          );
          const review = evidence?.specifications[r.id];
          const field = review?.fields[spec.key];
          if (field && r[spec.key]?.trim()) {
            const label =
              field.status === 'documented'
                ? t('spec.sourceReview', 'Source review')
                : t(`compare.status.${field.status}`, field.status);
            cell += `<div class="mt-2 text-xs" data-comparison-review="${escapeHTML(spec.key)}" data-review-status="${escapeHTML(field.status)}">${sourceLink(review.sources[0], label)}`;
            if (field.note) cell += `<p class="mt-1 text-text-muted">${escapeHTML(field.note)}</p>`;
            cell += '</div>';
          }
          return cell;
        });
        return `<tr><td>${escapeHTML(t(spec.labelKey, spec.fb))}</td>${cells.map((c) => `<td>${c}</td>`).join('')}</tr>`;
      })
      .join('');

    const headers = `<th scope="col">${escapeHTML(t('compare.specification', 'Specification'))}</th>${robots.map((r) => `<th scope="col"><a class="text-primary hover:underline" href="/robot/${escapeHTML(r.id)}/">${escapeHTML(r.model)}</a></th>`).join('')}`;

    let evidenceRows = '';
    if (evidence) {
      const highlights = robots.map((robot) => {
        const product = evidence.products[robot.id];
        return product
          ? `<ul class="list-disc pl-4 space-y-2">${product.highlights.map((highlight) => `<li>${escapeHTML(highlight)}</li>`).join('')}</ul>`
          : escapeHTML(t('compare.noHighlights', 'No primary-source highlight review recorded.'));
      });
      const sources = robots.map((robot) => {
        const combined = [
          ...(evidence.products[robot.id]?.sources || []),
          ...(evidence.specifications[robot.id]?.sources || []),
        ];
        const unique = [
          ...new Map(
            combined.map((source) => [`${source.url}|${source.checkedAt}|${source.type}`, source]),
          ).values(),
        ];
        return unique.length
          ? `<ul class="space-y-2">${unique.map((source) => `<li>${sourceLink(source, `${t(`compare.source.${source.type}`, source.type)}: ${source.name}`)}</li>`).join('')}</ul>`
          : escapeHTML(
              t('compare.noSources', 'No dated primary sources recorded for this comparison.'),
            );
      });
      evidenceRows = `<tr data-comparison-highlights><td>${escapeHTML(t('compare.highlights', 'Product highlights'))}</td>${highlights.map((value) => `<td>${value}</td>`).join('')}</tr><tr data-comparison-sources><td>${escapeHTML(t('compare.sources', 'Sources and review dates'))}</td>${sources.map((value) => `<td>${value}</td>`).join('')}</tr>`;
    }
    return `<table><caption class="sr-only">${escapeHTML(t('compare.title', 'Compare Robots'))}</caption><thead><tr>${headers}</tr></thead><tbody>${rows}${evidenceRows}</tbody></table>`;
  };

  container.innerHTML = `<p role="status" class="mb-4 text-sm text-text-muted" data-comparison-state="loading">${escapeHTML(t('compare.loadingSources', 'Loading product sources…'))}</p>${renderTable()}`;
  try {
    const evidence = await loadProductEvidence();
    if (version !== renderVersion) return;
    container.innerHTML = `<p class="mb-4 text-sm text-text-muted" data-comparison-state="ready">${escapeHTML(t('compare.evidenceScope', 'Sources support the listed claims and marked fields. Other specifications, availability and performance are not certified.'))}</p>${renderTable(evidence)}`;
  } catch {
    if (version !== renderVersion) return;
    container.innerHTML = `<p role="status" class="mb-4 text-sm text-text-muted" data-comparison-state="error">${escapeHTML(t('compare.sourcesFailed', 'Sources could not be loaded. Open the model pages for product evidence.'))} <button type="button" class="text-primary underline" data-comparison-retry>${escapeHTML(t('compare.retrySources', 'Retry loading sources'))}</button></p>${renderTable()}`;
    container
      .querySelector('[data-comparison-retry]')
      .addEventListener('click', renderCompareTable);
  }
}

function openCompareModal() {
  const modal = document.getElementById('compareModal');
  if (modal) {
    modal.classList.remove('hidden');
    renderCompareTable();
  }
}

function closeCompareModal() {
  renderVersion++;
  const modal = document.getElementById('compareModal');
  if (modal) modal.classList.add('hidden');
}

function init() {
  window.__addToCompare = addToCompare;
  window.__removeFromCompare = removeFromCompare;
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-compare-id]');
    if (!button) return;
    const id = button.dataset.compareId;
    if (compareIds.includes(id)) removeFromCompare(id);
    else addToCompare(id);
  });
  document.addEventListener('robotCardsRendered', syncCompareButtons);
  document.addEventListener('languageChanged', () => {
    syncCompareButtons();
    const modal = document.getElementById('compareModal');
    if (modal && !modal.classList.contains('hidden')) renderCompareTable();
  });

  const barBtn = document.getElementById('compareBarBtn');
  if (barBtn) barBtn.addEventListener('click', openCompareModal);

  const barClear = document.getElementById('compareBarClear');
  if (barClear) barClear.addEventListener('click', clearCompare);

  const closeBtn = document.getElementById('compareClose');
  if (closeBtn) closeBtn.addEventListener('click', closeCompareModal);

  const modalOverlay = document.getElementById('compareModalOverlay');
  if (modalOverlay) modalOverlay.addEventListener('click', closeCompareModal);

  const modalClear = document.getElementById('compareClear');
  if (modalClear)
    modalClear.addEventListener('click', () => {
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
