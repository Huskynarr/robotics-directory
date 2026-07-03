function init() {
  const shareBtn = document.getElementById('shareButton');
  const dropdown = document.getElementById('shareDropdown');
  const copyBtn = document.getElementById('copyLinkBtn');

  if (shareBtn && dropdown) {
    shareBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && e.target !== shareBtn) {
        dropdown.classList.remove('active');
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const url = copyBtn.dataset.url || window.location.href;
      navigator.clipboard
        .writeText(url)
        .then(() => {
          const span = copyBtn.querySelector('span');
          if (span) {
            const orig = span.textContent;
            const i18n = window.__I18N__;
            const lang = i18n ? i18n.currentLang() : 'en';
            const tbl = i18n ? i18n.translations[lang] || i18n.translations.en : {};
            span.textContent = tbl['share.linkCopied'] || '\u2713 Copied!';
            setTimeout(() => {
              span.textContent = orig;
            }, 2000);
          }
        })
        .catch(() => {
          console.error('Failed to copy link');
        });
      if (dropdown) dropdown.classList.remove('active');
    });
  }
}

document.addEventListener('DOMContentLoaded', init);
