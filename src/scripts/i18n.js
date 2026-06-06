import { translations, t as tFn } from '../data/translations.js';
import { formatPrice, formatSpec } from '../utils/format.js';
import { SITE_TAGLINE } from '../config/site.js';

let currentLang = 'en';

function getInitialLanguage() {
  const stored = localStorage.getItem('lang');
  if (stored && translations[stored]) return stored;

  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang && translations[urlLang]) return urlLang;

  const browser = (navigator.language || 'en').toLowerCase();
  const langCode = browser.split('-')[0];
  if (translations[langCode]) return langCode;
  return 'en';
}

function applyTranslations(lang) {
  const table = translations[lang] || translations.en;
  const resolve = (key) => table[key] || translations.en[key];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = resolve(el.getAttribute('data-i18n'));
    if (value) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const value = resolve(el.getAttribute('data-i18n-placeholder'));
    if (value) el.setAttribute('placeholder', value);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const value = resolve(el.getAttribute('data-i18n-aria'));
    if (value) el.setAttribute('aria-label', value);
  });

  document.documentElement.lang = lang;

  // Update page title (catalog page only - detected by data-catalog-page on body)
  if (table['app.title'] && document.body.hasAttribute('data-catalog-page')) {
    document.title = table['app.title'] + ' - ' + SITE_TAGLINE;
  }

  // Update prices with correct locale
  document.querySelectorAll('[data-raw-price]').forEach(el => {
    const raw = el.getAttribute('data-raw-price');
    if (raw) {
      el.textContent = formatPrice(raw, lang, (k, fb) => tFn(k, lang, fb));
    }
  });

  // Update spec values
  document.querySelectorAll('[data-raw-value]').forEach(el => {
    const raw = el.getAttribute('data-raw-value');
    const specKey = el.getAttribute('data-spec-key');
    if (raw) {
      el.textContent = specKey === 'price'
        ? formatPrice(raw, lang, (k, fb) => tFn(k, lang, fb))
        : formatSpec(raw, lang);
    }
  });
}

function setLanguage(lang) {
  const safeLang = translations[lang] ? lang : 'en';
  currentLang = safeLang;
  localStorage.setItem('lang', safeLang);
  applyTranslations(safeLang);

  const url = new URL(window.location.href);
  if (safeLang === 'en') {
    url.searchParams.delete('lang');
  } else {
    url.searchParams.set('lang', safeLang);
  }
  window.history.replaceState({}, '', url.toString());

  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: safeLang } }));
}

function init() {
  const initial = getInitialLanguage();
  currentLang = initial;

  window.__I18N__ = { translations, currentLang: () => currentLang };

  document.querySelectorAll('#languageSelect, #languageSelectMobile').forEach(select => {
    select.value = initial;
    select.addEventListener('change', () => {
      setLanguage(select.value);
      document.querySelectorAll('#languageSelect, #languageSelectMobile').forEach(s => {
        s.value = select.value;
      });
    });
  });

  applyTranslations(initial);

  if (initial !== 'en') {
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: initial } }));
  }
}

document.addEventListener('DOMContentLoaded', init);
