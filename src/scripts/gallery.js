/**
 * Image gallery with lightbox for robot detail pages.
 */
import { trapFocus } from './focus-trap.js';

let currentIndex = 0;
let images = [];
let removeFocusTrap = null;

function init() {
  images = window.__GALLERY_DATA__ || [];
  if (images.length === 0) return;

  const mainImg = document.getElementById('mainImage');
  const mainWrap = document.getElementById('mainImageWrap');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxLabel = document.getElementById('lightboxLabel');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  function setMainImage(index) {
    currentIndex = index;
    const img = images[index];
    if (!img || !mainImg) return;
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = img.src;
      mainImg.style.opacity = '1';
    }, 150);

    const counter = document.getElementById('imageCounter');
    if (counter) counter.textContent = `${index + 1} / ${images.length}`;

    document.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
      if (i === index) {
        thumb.classList.add('border-primary', 'ring-1', 'ring-primary/30');
        thumb.classList.remove('border-transparent');
      } else {
        thumb.classList.remove('border-primary', 'ring-1', 'ring-primary/30');
        thumb.classList.add('border-transparent');
      }
    });
  }

  document.querySelectorAll('.gallery-thumb').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.dataset.galleryIndex, 10);
      setMainImage(idx);
    });
  });

  function openLightbox(index) {
    if (!lightbox || !lightboxImg) return;
    currentIndex = index;
    const img = images[index];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.label || `Image ${index + 1}`;
    if (lightboxLabel) lightboxLabel.textContent = img.label || '';
    if (lightboxCounter && images.length > 1)
      lightboxCounter.textContent = `${index + 1} / ${images.length}`;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
    removeFocusTrap = trapFocus(lightbox);
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = '';
    if (removeFocusTrap) {
      removeFocusTrap();
      removeFocusTrap = null;
    }
    if (mainWrap) mainWrap.focus();
  }

  function navigateLightbox(delta) {
    const next = (currentIndex + delta + images.length) % images.length;
    currentIndex = next;
    const img = images[next];
    if (lightboxImg) lightboxImg.src = img.src;
    if (lightboxLabel) lightboxLabel.textContent = img.label || '';
    if (lightboxCounter) lightboxCounter.textContent = `${next + 1} / ${images.length}`;
    setMainImage(next);
  }

  if (mainWrap) {
    mainWrap.addEventListener('click', () => openLightbox(currentIndex));
    mainWrap.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(currentIndex);
      }
    });
  }
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => navigateLightbox(1));

  document.addEventListener('keydown', (e) => {
    if (!lightbox || lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
}

document.addEventListener('DOMContentLoaded', init);
