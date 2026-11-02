import { trapFocus } from './focus-trap.js';
import './mega-menu.js';

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
  document.addEventListener('closeMobileMenu', closeMenu);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('active')) closeMenu();
  });
}

function init() {
  setupMobileMenu();
  if (document.getElementById('robotsGrid')) return;

  document.addEventListener('subcategorySelected', (event) => {
    const params = new URLSearchParams();
    if (event.detail.category) params.set('category', event.detail.category);
    if (event.detail.subcategory) params.set('sub', event.detail.subcategory);
    window.location.href = '/?' + params.toString();
  });
  document
    .querySelectorAll('header [data-category="all"], #mobileDrawer [data-category="all"]')
    .forEach((button) => {
      button.addEventListener('click', () => {
        window.location.href = '/';
      });
    });
}

document.addEventListener('DOMContentLoaded', init);
