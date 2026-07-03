import { saveToLocalStorage, loadArrayFromLocalStorage } from './storage.js';
import { escapeHTML, fetchAllRobots, resolveImagePath } from '../utils/format.js';

let favorites = loadArrayFromLocalStorage('robotFavorites');

function toggleFavorite(robotId) {
  const idx = favorites.indexOf(robotId);
  if (idx === -1) favorites.push(robotId);
  else favorites.splice(idx, 1);
  saveToLocalStorage('robotFavorites', favorites);
  updateFavoritesUI();
  updateCardStates();
  if (window.__refreshCatalog__) window.__refreshCatalog__();
}

function updateFavoritesUI() {
  ['favoritesCount', 'favoritesCountMobile'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = favorites.length;
      el.classList.toggle('hidden', favorites.length === 0);
    }
  });

  const grid = document.getElementById('favoritesGrid');
  const empty = document.getElementById('noFavorites');
  if (!grid) return;

  if (favorites.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.classList.remove('hidden');
    return;
  }

  if (empty) empty.classList.add('hidden');
  const robots = fetchAllRobots().filter((r) => favorites.includes(r.id));

  grid.innerHTML = robots
    .map((r) => {
      const img = escapeHTML(resolveImagePath(r.image));
      const safeId = escapeHTML(r.id);
      return `<a href="/robot/${safeId}/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-bg transition-colors no-underline">
      <img src="${img}" alt="${escapeHTML(r.model)}" class="w-12 h-12 rounded-lg object-contain bg-bg" />
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-text-base truncate">${escapeHTML(r.model)}</p>
        <p class="text-xs text-text-muted truncate">${escapeHTML(r.manufacturer)}</p>
      </div>
      <button class="shrink-0 text-danger hover:text-danger/70 transition-colors fav-remove-btn" data-robot-id="${safeId}" aria-label="Remove from favorites">
        <i class="fas fa-heart"></i>
      </button>
    </a>`;
    })
    .join('');

  grid.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => {
      img.src = '/images/image-not-found.webp';
    });
  });

  grid.querySelectorAll('.fav-remove-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      window.__toggleFavorite(btn.dataset.robotId);
    });
  });
}

function updateCardStates() {
  document.querySelectorAll('.favorite-btn, .favorite-btn-detail').forEach((btn) => {
    const id = btn.dataset.robotId;
    if (!id) return;
    const isFav = favorites.includes(id);
    btn.classList.toggle('active', isFav);
    const icon = btn.querySelector('i');
    if (icon) icon.className = isFav ? 'fas fa-heart' : 'far fa-heart';
  });
}

function openDrawer() {
  const drawer = document.getElementById('favoritesDrawer');
  const overlay = document.getElementById('favoritesOverlay');
  if (drawer) drawer.classList.add('active');
  if (overlay) overlay.classList.add('active');
  updateFavoritesUI();
}

function closeDrawer() {
  const drawer = document.getElementById('favoritesDrawer');
  const overlay = document.getElementById('favoritesOverlay');
  if (drawer) drawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
}

function init() {
  window.__toggleFavorite = toggleFavorite;

  ['favoritesToggle', 'favoritesToggleMobile'].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', openDrawer);
  });

  const closeBtn = document.getElementById('favoritesClose');
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  const overlay = document.getElementById('favoritesOverlay');
  if (overlay) overlay.addEventListener('click', closeDrawer);

  const clearBtn = document.getElementById('clearFavorites');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      favorites = [];
      saveToLocalStorage('robotFavorites', favorites);
      updateFavoritesUI();
      updateCardStates();
      if (window.__refreshCatalog__) window.__refreshCatalog__();
    });
  }

  document.querySelectorAll('.favorite-btn-detail').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleFavorite(btn.dataset.robotId);
    });
  });

  updateFavoritesUI();
  updateCardStates();

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const drawer = document.getElementById('favoritesDrawer');
    if (drawer && drawer.classList.contains('active')) closeDrawer();
  });
}

document.addEventListener('DOMContentLoaded', init);
