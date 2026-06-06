import { saveToLocalStorage } from './storage.js';

function getTranslation(key, fallback) {
  const i18n = window.__I18N__;
  if (!i18n || !i18n.translations) return fallback;
  const lang = typeof i18n.currentLang === 'function' ? i18n.currentLang() : 'en';
  const table = i18n.translations[lang] || i18n.translations.en || {};
  return table[key] || fallback;
}

function init() {
  const toggleDesktop = document.getElementById('darkModeToggle');
  const toggleMobile = document.getElementById('darkModeToggleMobile');

  function applyState() {
    const isDark = document.documentElement.classList.contains('dark');

    const ariaLabel = isDark
      ? getTranslation('darkMode.light', 'Switch to light mode')
      : getTranslation('darkMode.dark', 'Switch to dark mode');

    const mobileLabel = isDark
      ? getTranslation('darkMode.lightLabel', 'Light Mode')
      : getTranslation('darkMode.darkLabel', 'Dark Mode');

    [toggleDesktop, toggleMobile].forEach((btn) => {
      if (!btn) return;
      const icon = btn.querySelector('i');
      if (icon) icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
      btn.setAttribute('aria-label', ariaLabel);
    });

    if (toggleMobile) {
      const textSpan = toggleMobile.querySelector('span');
      if (textSpan) textSpan.textContent = mobileLabel;
    }
  }

  function toggle() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    saveToLocalStorage('darkMode', isDark);
    applyState();
  }

  applyState();

  if (toggleDesktop) toggleDesktop.addEventListener('click', toggle);
  if (toggleMobile) toggleMobile.addEventListener('click', toggle);

  // Re-apply aria-labels when language changes
  document.addEventListener('languageChanged', () => {
    applyState();
  });
}

document.addEventListener('DOMContentLoaded', init);
