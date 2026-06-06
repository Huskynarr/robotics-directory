import { escapeHTML, formatPrice, getPriceValue } from '../utils/format.js';
import { matchesSubcategoryFilter, getSubcategoryDef, getUseCaseDef } from '../data/subcategory-filters.js';
import { trapFocus } from './focus-trap.js';

const ROBOTS_PER_PAGE = 24;
let allRobots = [];
let filteredRobots = [];
let currentPage = 1;
let currentCategory = 'all';
let currentSubcategory = null;
let currentUseCase = null;
let currentManufacturer = '';
let currentPrice = '';
let currentSort = '';
let currentSearch = '';
let currentSize = '';
let advancedFilters = { weight: '', battery: '', ipRating: '', video: '' };
let currentLang = 'en';
let searchTimeout = null;

function getLang() {
  return localStorage.getItem('lang') || 'en';
}

function serializeStateToURL(replace = false) {
  const params = new URLSearchParams();

  const currentParams = new URLSearchParams(window.location.search);
  const lang = currentParams.get('lang');
  if (lang) params.set('lang', lang);

  if (currentCategory && currentCategory !== 'all') params.set('category', currentCategory);
  if (currentSubcategory) params.set('sub', currentSubcategory);
  if (currentUseCase) params.set('usecase', currentUseCase);
  if (currentSearch) params.set('q', currentSearch);
  if (currentSort) params.set('sort', currentSort);
  if (currentPage > 1) params.set('page', String(currentPage));
  if (currentManufacturer) params.set('mfr', currentManufacturer);
  if (currentPrice) params.set('price', currentPrice);
  if (currentSize) params.set('size', currentSize);

  if (advancedFilters.weight) params.set('weight', advancedFilters.weight);
  if (advancedFilters.battery) params.set('battery', advancedFilters.battery);
  if (advancedFilters.ipRating) params.set('ipRating', advancedFilters.ipRating);
  if (advancedFilters.video) params.set('video', advancedFilters.video);

  const qs = params.toString();
  const url = qs ? '?' + qs : window.location.pathname;

  if (replace) {
    window.history.replaceState(null, '', url);
  } else {
    window.history.pushState(null, '', url);
  }
}

function restoreStateFromURL() {
  const params = new URLSearchParams(window.location.search);

  currentCategory = params.get('category') || 'all';
  currentSubcategory = params.get('sub') || null;
  currentUseCase = params.get('usecase') || null;
  currentSearch = params.get('q') || '';
  currentSort = params.get('sort') || '';
  currentManufacturer = params.get('mfr') || '';
  currentPrice = params.get('price') || '';
  currentSize = params.get('size') || '';

  const page = parseInt(params.get('page'), 10);
  currentPage = (page && page > 0) ? page : 1;

  advancedFilters.weight = params.get('weight') || '';
  advancedFilters.battery = params.get('battery') || '';
  advancedFilters.ipRating = params.get('ipRating') || '';
  advancedFilters.video = params.get('video') || '';

  syncDOMToState();
}

function syncDOMToState() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = currentSearch;

  const mf = document.getElementById('manufacturerFilter');
  if (mf) mf.value = currentManufacturer;

  const sf = document.getElementById('sortFilter');
  if (sf) sf.value = currentSort;

  document.querySelectorAll('[data-category]').forEach(b => {
    if (b.tagName !== 'A') b.classList.toggle('active', b.dataset.category === currentCategory);
  });

  document.querySelectorAll('.mobile-nav-item').forEach(b => {
    b.classList.toggle('active', b.dataset.category === currentCategory);
  });

  document.querySelectorAll('[data-megatab]').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.category === currentCategory);
  });
  // The "All" tab doesn't have data-megatab, so handle it via data-category
  const allTab = document.querySelector('header .mega-tab[data-category="all"]');
  if (allTab) allTab.classList.toggle('active', currentCategory === 'all');

  document.querySelectorAll('[data-usecase]').forEach(b => {
    b.classList.toggle('active', b.dataset.usecase === currentUseCase);
  });

  document.querySelectorAll('[data-price]').forEach(b => {
    b.classList.toggle('active', b.dataset.price === currentPrice);
  });

  document.querySelectorAll('[data-size]').forEach(b => {
    b.classList.toggle('active', b.dataset.size === currentSize);
  });

  ['weightFilter', 'batteryFilter', 'ipRatingFilter', 'videoFilter'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const key = id.replace('Filter', '');
      el.value = advancedFilters[key] || '';
    }
  });

  const hasAdvanced = Object.values(advancedFilters).some(v => v);
  if (hasAdvanced) {
    const advancedPanel = document.getElementById('advancedFilters');
    if (advancedPanel) advancedPanel.classList.remove('hidden');
  }
}

function init() {
  allRobots = window.__ROBOTS_DATA__ || [];
  currentLang = getLang();

  restoreStateFromURL();

  const searchInput = document.getElementById('searchInput');
  const manufacturerFilter = document.getElementById('manufacturerFilter');
  const sortFilter = document.getElementById('sortFilter');
  const resetBtn = document.getElementById('resetFilters');
  const advancedToggle = document.getElementById('advancedToggle');
  const advancedPanel = document.getElementById('advancedFilters');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        currentSearch = searchInput.value.trim().toLowerCase();
        currentPage = 1;
        applyFilters();
        serializeStateToURL();
      }, 300);
    });
  }

  if (manufacturerFilter) {
    manufacturerFilter.addEventListener('change', () => {
      currentManufacturer = manufacturerFilter.value;
      currentPage = 1;
      applyFilters();
      serializeStateToURL();
    });
  }

  if (sortFilter) {
    sortFilter.addEventListener('change', () => {
      currentSort = sortFilter.value;
      applyFilters();
      serializeStateToURL();
    });
  }

  document.querySelectorAll('[data-category]').forEach(btn => {
    if (btn.tagName === 'A') return; // skip link cards
    // Skip mega-tab buttons with megatab (handled by mega-menu.js)
    if (btn.dataset.megatab) return;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      currentCategory = btn.dataset.category;
      currentSubcategory = null;
      currentUseCase = null;
      currentPage = 1;
      document.querySelectorAll('[data-usecase]').forEach(b => b.classList.remove('active'));

      document.querySelectorAll('[data-category]').forEach(b => {
        if (b.tagName !== 'A') b.classList.toggle('active', b.dataset.category === currentCategory);
      });
      document.querySelectorAll('.mobile-nav-item').forEach(b => {
        b.classList.toggle('active', b.dataset.category === currentCategory);
      });
      updateMegaTabActiveStates();

      applyFilters();
      serializeStateToURL();

      const drawer = document.getElementById('mobileDrawer');
      const overlay = document.getElementById('drawerOverlay');
      if (drawer) drawer.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
    });
  });

  document.querySelectorAll('[data-usecase]').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.usecase;
      if (currentUseCase === val) {
        currentUseCase = null;
      } else {
        currentUseCase = val;
        currentCategory = 'all';
        currentSubcategory = null;
        document.querySelectorAll('[data-category]').forEach(b => {
          if (b.tagName !== 'A') b.classList.toggle('active', b.dataset.category === 'all');
        });
        document.querySelectorAll('.mobile-nav-item').forEach(b => {
          b.classList.toggle('active', b.dataset.category === 'all');
        });
        updateMegaTabActiveStates();
      }
      currentPage = 1;
      document.querySelectorAll('[data-usecase]').forEach(b => b.classList.toggle('active', b.dataset.usecase === currentUseCase));
      applyFilters();
      serializeStateToURL();
    });
  });

  document.querySelectorAll('[data-price]').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.price;
      currentPrice = currentPrice === val ? '' : val;
      currentPage = 1;
      document.querySelectorAll('[data-price]').forEach(b => b.classList.toggle('active', b.dataset.price === currentPrice));
      applyFilters();
      serializeStateToURL();
    });
  });

  document.querySelectorAll('[data-size]').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.size;
      currentSize = currentSize === val ? '' : val;
      currentPage = 1;
      document.querySelectorAll('[data-size]').forEach(b => b.classList.toggle('active', b.dataset.size === currentSize));
      applyFilters();
      serializeStateToURL();
    });
  });

  if (advancedToggle && advancedPanel) {
    advancedToggle.addEventListener('click', () => {
      advancedPanel.classList.toggle('hidden');
    });
  }

  ['weightFilter', 'batteryFilter', 'ipRatingFilter', 'videoFilter'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const key = id.replace('Filter', '');
      el.addEventListener('change', () => {
        advancedFilters[key] = el.value;
        currentPage = 1;
        applyFilters();
        serializeStateToURL();
      });
    }
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', resetFilters);
  }

  setupMobileMenu();

  // Initial render - use replaceState to avoid extra history entry
  applyFilters();
  serializeStateToURL(true);

  document.addEventListener('languageChanged', (e) => {
    currentLang = e.detail.lang;
    renderCards();
    updateActiveChips();
  });

  document.addEventListener('subcategorySelected', (e) => {
    const { category, subcategory } = e.detail;
    currentCategory = category;
    currentSubcategory = subcategory;
    currentUseCase = null;
    currentPage = 1;
    document.querySelectorAll('[data-usecase]').forEach(b => b.classList.remove('active'));

    document.querySelectorAll('[data-category]').forEach(b => {
      if (b.tagName !== 'A') b.classList.toggle('active', b.dataset.category === currentCategory);
    });
    document.querySelectorAll('.mobile-nav-item').forEach(b => {
      b.classList.toggle('active', b.dataset.category === currentCategory);
    });
    updateMegaTabActiveStates();

    applyFilters();
    serializeStateToURL();

    const section = document.getElementById('filtersSection');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  window.addEventListener('popstate', () => {
    restoreStateFromURL();
    applyFilters();
  });
}

function updateMegaTabActiveStates() {
  document.querySelectorAll('[data-megatab]').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.category === currentCategory);
  });
  // The "All" tab in header doesn't have data-megatab
  const allTab = document.querySelector('header .mega-tab[data-category="all"]');
  if (allTab) allTab.classList.toggle('active', currentCategory === 'all');
}

function setupMobileMenu() {
  const toggle = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const close = document.getElementById('mobileMenuClose');
  let removeDrawerTrap = null;

  function openMenu() {
    if (drawer) drawer.classList.add('active');
    if (overlay) overlay.classList.add('active');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    if (drawer) {
      removeDrawerTrap = trapFocus(drawer);
      if (close) close.focus();
    }
  }
  function closeMenu() {
    if (drawer) drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    if (removeDrawerTrap) {
      removeDrawerTrap();
      removeDrawerTrap = null;
    }
    if (toggle) toggle.focus();
  }

  if (toggle) toggle.addEventListener('click', openMenu);
  if (close) close.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('active')) closeMenu();
  });
}

function applyFilters() {
  let robots = [...allRobots];

  if (currentSearch) {
    robots = robots.filter(r =>
      r.model.toLowerCase().includes(currentSearch) ||
      r.manufacturer.toLowerCase().includes(currentSearch) ||
      (r.description && r.description.toLowerCase().includes(currentSearch)) ||
      (r.tagsArray && r.tagsArray.some(tag => tag.toLowerCase().includes(currentSearch)))
    );
  }

  if (currentUseCase) {
    const ucDef = getUseCaseDef(currentUseCase);
    if (ucDef) {
      robots = robots.filter(r => matchesSubcategoryFilter(r, ucDef.filter));
    }
  }

  if (currentCategory && currentCategory !== 'all') {
    robots = robots.filter(r => r.category === currentCategory);
  }

  if (currentSubcategory) {
    const def = getSubcategoryDef(currentSubcategory);
    if (def) {
      robots = robots.filter(r => matchesSubcategoryFilter(r, def.subcategory.filter));
    }
  }

  if (currentManufacturer) {
    robots = robots.filter(r => r.manufacturer === currentManufacturer);
  }

  if (currentPrice) {
    robots = robots.filter(r => {
      const price = parseFloat((r.price || '').replace(/[^\d.-]/g, ''));
      if (isNaN(price)) return currentPrice === 'request';
      switch (currentPrice) {
        case 'low': return price < 5000;
        case 'medium': return price >= 5000 && price <= 50000;
        case 'high': return price > 50000;
        default: return true;
      }
    });
  }

  if (currentSize) {
    robots = robots.filter(r => {
      const size = (r.size || '').trim().toLowerCase();
      if (!size) return false;
      const target = currentSize.toLowerCase();
      // Handle cm values for humanoids
      const cmMatch = size.match(/(\d+)\s*cm/);
      if (cmMatch) {
        const cm = parseInt(cmMatch[1], 10);
        if (target === 'small') return cm < 120;
        if (target === 'medium') return cm >= 120 && cm <= 165;
        if (target === 'large') return cm > 165;
        return false;
      }
      // Handle text values
      if (target === 'verysmall') return size === 'very small';
      return size === target;
    });
  }

  robots = applyAdvancedFilters(robots);

  if (currentSort) {
    const val = (r) => {
      switch (currentSort) {
        case 'name': return r.model.toLowerCase();
        case 'manufacturer': return r.manufacturer.toLowerCase();
        case 'price': return getPriceValue(r.price);
        case 'weight': return parseFloat(r.weight) || Infinity;
        default: return 0;
      }
    };
    robots.sort((a, b) => { const va = val(a), vb = val(b); return va < vb ? -1 : va > vb ? 1 : 0; });
  }

  filteredRobots = robots;
  renderCards();
  updateActiveChips();
}

function applyAdvancedFilters(robots) {
  let result = robots;

  if (advancedFilters.weight) {
    result = result.filter(r => {
      const m = (r.weight || '').match(/(\d+(\.\d+)?)/);
      if (!m) return false;
      const w = parseFloat(m[0]);
      switch (advancedFilters.weight) {
        case 'light': return w < 10;
        case 'medium': return w >= 10 && w <= 50;
        case 'heavy': return w > 50;
        default: return true;
      }
    });
  }

  if (advancedFilters.battery) {
    result = result.filter(r => {
      const m = (r.batteryLife || '').match(/(\d+(\.\d+)?)/);
      if (!m) return false;
      const h = parseFloat(m[0]);
      switch (advancedFilters.battery) {
        case 'short': return h < 2;
        case 'medium': return h >= 2 && h <= 5;
        case 'long': return h > 5;
        default: return true;
      }
    });
  }

  if (advancedFilters.ipRating) {
    result = result.filter(r => {
      const ip = (r.ipRating || '').trim();
      return ip !== '' && ip !== 'N/A';
    });
  }

  if (advancedFilters.video) {
    result = result.filter(r => {
      const v = (r.video || '').trim();
      return v !== '' && v !== 'N/A';
    });
  }

  return result;
}

function renderCards() {
  const grid = document.getElementById('robotsGrid');
  const noResults = document.getElementById('noResults');
  if (!grid) return;

  const totalPages = Math.ceil(filteredRobots.length / ROBOTS_PER_PAGE);
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  if (filteredRobots.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.classList.remove('hidden');
    renderPagination(0);
    return;
  }

  if (noResults) noResults.classList.add('hidden');

  const start = (currentPage - 1) * ROBOTS_PER_PAGE;
  const pageRobots = filteredRobots.slice(start, start + ROBOTS_PER_PAGE);

  let favs = [];
  try { favs = JSON.parse(localStorage.getItem('robotFavorites') || '[]'); } catch { /* ignore */ }

  const { translations } = window.__I18N__ || { translations: {} };
  const lang = currentLang;
  const tbl = (translations && translations[lang]) || {};
  const tFn = (key, fb) => tbl[key] || fb || key;
  const catLabel = (cat) => tbl[`nav.${cat}`] || cat;

  grid.innerHTML = pageRobots.map(robot => {
    const imgPath = robot.image ? (robot.image.startsWith('images/') ? '/' + robot.image : robot.image) : '/images/placeholder.svg';
    const isFav = favs.includes(robot.id);
    const price = formatPrice(robot.price, lang, tFn);
    const safeId = escapeHTML(robot.id);
    const safeModel = escapeHTML(robot.model);
    const safeManufacturer = escapeHTML(robot.manufacturer);
    const safeCategory = escapeHTML(robot.category);
    const safeImg = escapeHTML(imgPath);
    const safePrice = escapeHTML(price);
    const safeCatLabel = escapeHTML(catLabel(robot.category));

    return `<a href="/robot/${safeId}/" class="robot-card block no-underline" data-category="${safeCategory}" data-robot-id="${safeId}" role="listitem">
      <div class="card-image">
        <span class="category-badge">${safeCatLabel}</span>
        <button class="favorite-btn${isFav ? ' active' : ''}" data-robot-id="${safeId}" aria-label="Add to favorites" type="button">
          <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
        </button>
        <img src="${safeImg}" alt="${safeModel} by ${safeManufacturer}" loading="lazy" width="400" height="300" onerror="this.src='/images/image-not-found.webp';" />
      </div>
      <div class="card-info">
        <h3>${safeModel}</h3>
        <p class="manufacturer">${safeManufacturer}</p>
        <p class="price">${safePrice}</p>
      </div>
    </a>`;
  }).join('');

  grid.querySelectorAll('.favorite-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (window.__toggleFavorite) window.__toggleFavorite(btn.dataset.robotId);
    });
  });

  renderPagination(filteredRobots.length);
}

function renderPagination(total) {
  const el = document.getElementById('pagination');
  if (!el) return;

  const totalPages = Math.ceil(total / ROBOTS_PER_PAGE);
  if (totalPages <= 1) { el.innerHTML = ''; return; }

  const start = (currentPage - 1) * ROBOTS_PER_PAGE + 1;
  const end = Math.min(currentPage * ROBOTS_PER_PAGE, total);
  const pages = getPageNumbers(currentPage, totalPages);

  el.innerHTML = `
    <span class="pagination-info">${start}-${end} / ${total}</span>
    <button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">
      <i class="fas fa-chevron-left"></i>
    </button>
    <div class="flex gap-1">
      ${pages.map(p => p === '...'
        ? '<span class="pagination-dots">...</span>'
        : `<button class="pagination-btn${p === currentPage ? ' active' : ''}" data-page="${p}">${p}</button>`
      ).join('')}
    </div>
    <button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">
      <i class="fas fa-chevron-right"></i>
    </button>
  `;

  el.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPage = parseInt(btn.dataset.page, 10);
      renderCards();
      serializeStateToURL();
      const section = document.getElementById('filtersSection');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function getPageNumbers(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const p = [1];
  if (current > 3) p.push('...');
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) p.push(i);
  if (current < total - 2) p.push('...');
  p.push(total);
  return p;
}

function updateActiveChips() {
  const container = document.getElementById('activeFilters');
  if (!container) return;

  const { translations: trObj } = window.__I18N__ || { translations: {} };
  const tbl = (trObj && trObj[currentLang]) || {};

  const chips = [];

  if (currentUseCase) {
    const ucDef = getUseCaseDef(currentUseCase);
    const ucLabel = ucDef ? (tbl[ucDef.i18nKey] || ucDef.i18nKey) : currentUseCase;
    chips.push({ label: ucLabel, type: 'usecase' });
  }
  if (currentCategory && currentCategory !== 'all') {
    const catLabel = tbl['nav.' + currentCategory] || currentCategory;
    chips.push({ label: catLabel, type: 'category' });
  }
  if (currentSubcategory) {
    const def = getSubcategoryDef(currentSubcategory);
    const subLabel = def ? (tbl[def.subcategory.i18nKey] || def.subcategory.i18nKey) : currentSubcategory;
    chips.push({ label: subLabel, type: 'subcategory' });
  }
  if (currentManufacturer) {
    chips.push({ label: currentManufacturer, type: 'manufacturer' });
  }
  if (currentPrice) {
    const priceLabel = tbl['filters.price.' + currentPrice] || currentPrice;
    chips.push({ label: priceLabel, type: 'price' });
  }
  if (currentSize) {
    const sizeKeyMap = { verysmall: 'verySmall', small: 'small', medium: 'medium', large: 'large' };
    const sizeLabel = tbl['filter.size.' + (sizeKeyMap[currentSize] || currentSize)] || currentSize;
    chips.push({ label: sizeLabel, type: 'size' });
  }
  const advKeyMap = { weight: 'spec.weight', battery: 'spec.batteryLife', ipRating: 'spec.ipRating', video: 'filters.video' };
  Object.entries(advancedFilters).forEach(([key, val]) => {
    if (val) {
      const keyLabel = tbl[advKeyMap[key] || key] || key;
      const valLabel = tbl['filters.' + key + '.' + val] || val;
      chips.push({ label: `${keyLabel}: ${valLabel}`, type: key });
    }
  });

  container.innerHTML = chips.map(c =>
    `<span class="filter-chip">${escapeHTML(c.label)} <button data-clear="${escapeHTML(c.type)}" aria-label="Remove filter">&times;</button></span>`
  ).join('');

  container.querySelectorAll('[data-clear]').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.clear;
      if (type === 'usecase') {
        currentUseCase = null;
        document.querySelectorAll('[data-usecase]').forEach(b => b.classList.remove('active'));
      } else if (type === 'category') {
        currentCategory = 'all';
        currentSubcategory = null;
        document.querySelectorAll('[data-category]').forEach(b => {
          if (b.tagName !== 'A') b.classList.toggle('active', b.dataset.category === 'all');
        });
        updateMegaTabActiveStates();
      } else if (type === 'subcategory') {
        currentSubcategory = null;
      } else if (type === 'manufacturer') {
        currentManufacturer = '';
        const mf = document.getElementById('manufacturerFilter');
        if (mf) mf.value = '';
      } else if (type === 'price') {
        currentPrice = '';
        document.querySelectorAll('[data-price]').forEach(b => b.classList.remove('active'));
      } else if (type === 'size') {
        currentSize = '';
        document.querySelectorAll('[data-size]').forEach(b => b.classList.remove('active'));
      } else if (advancedFilters[type] !== undefined) {
        advancedFilters[type] = '';
        const el = document.getElementById(`${type}Filter`);
        if (el) el.value = '';
      }
      currentPage = 1;
      applyFilters();
      serializeStateToURL();
    });
  });
}

function resetFilters() {
  currentCategory = 'all';
  currentSubcategory = null;
  currentUseCase = null;
  currentManufacturer = '';
  currentPrice = '';
  currentSize = '';
  currentSort = '';
  currentSearch = '';
  advancedFilters = { weight: '', battery: '', ipRating: '', video: '' };
  currentPage = 1;

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';

  const mf = document.getElementById('manufacturerFilter');
  if (mf) mf.value = '';

  const sf = document.getElementById('sortFilter');
  if (sf) sf.value = '';

  document.querySelectorAll('[data-category]').forEach(b => {
    if (b.tagName !== 'A') b.classList.toggle('active', b.dataset.category === 'all');
  });
  document.querySelectorAll('[data-price]').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('[data-size]').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('[data-usecase]').forEach(b => b.classList.remove('active'));
  ['weightFilter', 'batteryFilter', 'ipRatingFilter', 'videoFilter'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  updateMegaTabActiveStates();
  applyFilters();
  serializeStateToURL();
}

window.__refreshCatalog__ = () => renderCards();

document.addEventListener('DOMContentLoaded', init);
