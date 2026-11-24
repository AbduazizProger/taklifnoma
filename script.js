// Elementlarni birin-ketin sekin ko'rsatish
document.querySelectorAll('.card > *').forEach((el, i) => {
  setTimeout(() => el.classList.add('show'), 150 + i * 150);
});
