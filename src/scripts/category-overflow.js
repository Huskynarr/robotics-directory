/**
 * Priority+ category navigation: tabs that do not fit the desktop category row
 * are hidden from the end and offered in the "More" menu instead of being clipped.
 */

function init() {
  const nav = document.getElementById('categoryNav');
  const more = document.getElementById('categoryMore');
  const toggle = document.getElementById('categoryMoreToggle');
  const menu = document.getElementById('categoryMoreMenu');
  if (!nav || !more || !toggle || !menu) return;

  const tabs = [...nav.querySelectorAll('[data-megatab]')];
  const items = [...menu.querySelectorAll('[data-more-for]')];
  const tabFor = (id) => tabs.find((tab) => tab.dataset.megatab === id);

  function syncState() {
    let overflowActive = false;
    items.forEach((item) => {
      const tab = tabFor(item.dataset.moreFor);
      const isActive = Boolean(tab?.classList.contains('active'));
      item.classList.toggle('active', isActive);
      if (isActive && tab.classList.contains('is-overflowed')) overflowActive = true;
    });
    toggle.classList.toggle('active', overflowActive);
  }

  function layout() {
    if (!nav.offsetParent) return; // category row hidden (mobile)
    const overflows = () => nav.scrollWidth > nav.clientWidth + 1;
    tabs.forEach((tab) => tab.classList.remove('is-overflowed'));
    nav.classList.remove('is-compact');
    more.classList.add('is-collapsed');

    // First drop the decorative icons, then move trailing tabs into "More".
    if (overflows()) nav.classList.add('is-compact');
    if (overflows()) {
      more.classList.remove('is-collapsed');
      for (let i = tabs.length - 1; i >= 0 && overflows(); i--) {
        tabs[i].classList.add('is-overflowed');
      }
    }

    items.forEach((item) => {
      const tab = tabFor(item.dataset.moreFor);
      item.classList.toggle('is-inline', !tab?.classList.contains('is-overflowed'));
    });
    if (more.classList.contains('is-collapsed')) closeMenu();
    syncState();
  }

  function openMenu() {
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    if (menu.hidden) openMenu();
    else closeMenu();
  });

  items.forEach((item) => {
    item.addEventListener('click', () => {
      closeMenu();
      tabFor(item.dataset.moreFor)?.click();
    });
  });

  menu.addEventListener('keydown', (event) => {
    const visible = items.filter((item) => !item.classList.contains('is-inline'));
    const index = visible.indexOf(document.activeElement);
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const step = event.key === 'ArrowDown' ? 1 : -1;
      visible[(index + step + visible.length) % visible.length]?.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!menu.hidden && !more.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menu.hidden) {
      closeMenu();
      toggle.focus();
    }
  });

  new ResizeObserver(layout).observe(nav.parentElement);
  new MutationObserver(syncState).observe(nav, {
    subtree: true,
    attributes: true,
    attributeFilter: ['class'],
  });
  document.addEventListener('languageChanged', () => requestAnimationFrame(layout));
  document.fonts?.ready.then(layout);
  layout();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
