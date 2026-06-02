/**
 * Minimal focus trap utility for modals and drawers.
 * Keeps Tab / Shift+Tab cycling within the given container.
 *
 * @param {HTMLElement} container - The element to trap focus inside.
 * @returns {() => void} cleanup - Call to remove the keydown listener.
 */
const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function trapFocus(container) {
  function onKeyDown(e) {
    if (e.key !== 'Tab') return;

    const focusable = [...container.querySelectorAll(FOCUSABLE)].filter(
      (el) => el.offsetParent !== null,
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  container.addEventListener('keydown', onKeyDown);
  return () => container.removeEventListener('keydown', onKeyDown);
}
