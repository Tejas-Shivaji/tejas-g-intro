// ==========================================
// GDG WEBCRAFT — JAVASCRIPT DARK MODE TOGGLE
// Speaker: Chinmay (Segment 4 — 20 mins)
// ==========================================

// 1. Select the button element from HTML
const themeBtn = document.getElementById('theme-btn');

// 2. Listen for the user's click event
themeBtn.addEventListener('click', function() {
  // Toggle the 'dark' CSS class on the body
  document.body.classList.toggle('dark');

  // Change the button text based on current theme
  if (document.body.classList.contains('dark')) {
    themeBtn.textContent = '☀️ Light Mode';
  } else {
    themeBtn.textContent = '🌙 Dark Mode';
  }
});

console.log("Dark mode script initialized!");