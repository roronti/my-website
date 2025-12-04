document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('themeToggle');

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') document.body.classList.add('light-theme');

  // Toggle theme
  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    });
  }
});
