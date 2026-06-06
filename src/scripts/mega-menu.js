/**
 * Mega Menu interaction - desktop hover/click/keyboard + mobile accordion
 */

let openPanel = null;
let hoverTimeout = null;
let closeTimeout = null;

const HOVER_DELAY = 150;
const CLOSE_GRACE = 300;

function init() {
  setupDesktop();
  setupMobileAccordion();
  setupSubcategoryClicks();
}

function setupDesktop() {
  const tabs = document.querySelectorAll('[data-megatab]');
  const megaMenu = document.getElementById('megaMenu');
  if (!megaMenu) return;

  tabs.forEach((tab) => {
    tab.addEventListener('mouseenter', () => {
      clearTimeout(closeTimeout);
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => openMegaPanel(tab.dataset.megatab), HOVER_DELAY);
    });

    tab.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimeout);
      closeTimeout = setTimeout(closeMegaMenu, CLOSE_GRACE);
    });

    tab.addEventListener('click', (e) => {
      e.preventDefault();
      clearTimeout(hoverTimeout);
      clearTimeout(closeTimeout);
      const catId = tab.dataset.megatab;
      if (openPanel === catId) {
        closeMegaMenu();
      } else {
        openMegaPanel(catId);
      }
    });
  });

  // Hover on mega menu itself keeps it open
  megaMenu.addEventListener('mouseenter', () => {
    clearTimeout(closeTimeout);
  });
  megaMenu.addEventListener('mouseleave', () => {
    closeTimeout = setTimeout(closeMegaMenu, CLOSE_GRACE);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && openPanel) {
      closeMegaMenu();
      const activeTab = document.querySelector(`[data-megatab="${openPanel}"]`);
      if (activeTab) activeTab.focus();
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!openPanel) return;
    const header = e.target.closest('header');
    const menu = e.target.closest('.mega-menu');
    if (!header && !menu) closeMegaMenu();
  });

  // Close on scroll (beyond a small threshold)
  let lastScrollY = window.scrollY;
  window.addEventListener(
    'scroll',
    () => {
      if (openPanel && Math.abs(window.scrollY - lastScrollY) > 50) {
        closeMegaMenu();
      }
      lastScrollY = window.scrollY;
    },
    { passive: true },
  );

  setupKeyboardNav(tabs);
}

function openMegaPanel(catId) {
  const megaMenu = document.getElementById('megaMenu');
  if (!megaMenu) return;

  megaMenu.querySelectorAll('.mega-panel').forEach((p) => {
    p.hidden = true;
  });

  const panel = megaMenu.querySelector(`[data-panel="${catId}"]`);
  if (panel) {
    panel.hidden = false;
    megaMenu.classList.add('open');
    openPanel = catId;

    panel.querySelectorAll('.mega-subcategory').forEach((card, i) => {
      card.style.animationDelay = `${i * 40}ms`;
      card.classList.remove('mega-fade-up');
      void card.offsetWidth; // force reflow for re-animation
      card.classList.add('mega-fade-up');
    });
  }

  document.querySelectorAll('[data-megatab]').forEach((tab) => {
    const isActive = tab.dataset.megatab === catId;
    tab.classList.toggle('mega-tab-open', isActive);
    tab.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  });
}

function closeMegaMenu() {
  const megaMenu = document.getElementById('megaMenu');
  if (!megaMenu) return;

  megaMenu.classList.remove('open');
  megaMenu.querySelectorAll('.mega-panel').forEach((p) => {
    p.hidden = true;
  });
  openPanel = null;

  document.querySelectorAll('[data-megatab]').forEach((tab) => {
    tab.classList.remove('mega-tab-open');
    tab.setAttribute('aria-expanded', 'false');
  });
}

function setupKeyboardNav(tabs) {
  const tabArray = Array.from(tabs);

  tabArray.forEach((tab, idx) => {
    tab.addEventListener('keydown', (e) => {
      let target = null;

      if (e.key === 'ArrowRight') {
        target = tabArray[(idx + 1) % tabArray.length];
      } else if (e.key === 'ArrowLeft') {
        target = tabArray[(idx - 1 + tabArray.length) % tabArray.length];
      } else if (e.key === 'ArrowDown' && openPanel) {
        e.preventDefault();
        const panel = document.querySelector(`[data-panel="${openPanel}"]`);
        const firstCard = panel?.querySelector('.mega-subcategory');
        if (firstCard) firstCard.focus();
        return;
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const catId = tab.dataset.megatab;
        if (openPanel === catId) {
          closeMegaMenu();
        } else {
          openMegaPanel(catId);
        }
        return;
      }

      if (target) {
        e.preventDefault();
        target.focus();
      }
    });
  });

  // Within panel: arrow navigation between subcategory cards
  document.querySelectorAll('.mega-panel').forEach((panel) => {
    const cards = () => Array.from(panel.querySelectorAll('.mega-subcategory'));
    panel.addEventListener('keydown', (e) => {
      const c = cards();
      const idx = c.indexOf(document.activeElement);
      if (idx < 0) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        c[(idx + 1) % c.length]?.focus();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        c[(idx - 1 + c.length) % c.length]?.focus();
      } else if (e.key === 'Escape') {
        closeMegaMenu();
        const activeTab = document.querySelector(`[data-megatab="${openPanel || panel.dataset.panel}"]`);
        if (activeTab) activeTab.focus();
      }
    });
  });
}

function setupMobileAccordion() {
  document.querySelectorAll('.mobile-accordion-trigger').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const accordion = trigger.closest('.mobile-accordion');
      if (!accordion) return;

      const panel = accordion.querySelector('.mobile-accordion-panel');
      if (!panel) return;

      const isOpen = !panel.hidden;

      document.querySelectorAll('.mobile-accordion-panel').forEach((p) => {
        p.hidden = true;
        p.closest('.mobile-accordion')
          ?.querySelector('.mobile-accordion-trigger')
          ?.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        panel.hidden = false;
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function setupSubcategoryClicks() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-subcategory]');
    if (btn) {
      e.preventDefault();
      const subcatId = btn.dataset.subcategory;
      const catId = btn.dataset.subcategoryCategory;
      document.dispatchEvent(
        new CustomEvent('subcategorySelected', {
          detail: { category: catId, subcategory: subcatId },
        }),
      );
      closeMegaMenu();
      closeMobileDrawer();
      return;
    }

    // "View All" in mega menu
    const viewAll = e.target.closest('.mega-view-all');
    if (viewAll) {
      e.preventDefault();
      const catId = viewAll.dataset.category;
      document.dispatchEvent(
        new CustomEvent('subcategorySelected', {
          detail: { category: catId, subcategory: null },
        }),
      );
      closeMegaMenu();
      return;
    }

    // Mobile "View All" button
    const mobileViewAll = e.target.closest('[data-mobile-viewall]');
    if (mobileViewAll) {
      e.preventDefault();
      const catId = mobileViewAll.dataset.category;
      document.dispatchEvent(
        new CustomEvent('subcategorySelected', {
          detail: { category: catId, subcategory: null },
        }),
      );
      closeMobileDrawer();
    }
  });
}

function closeMobileDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (drawer) drawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', init);
