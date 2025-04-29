// Helpers
function savePreference(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getPreference(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

// Theme Toggle Logic
function applyTheme(theme) {
  document.body.className = theme;
  const icon = document.getElementById('themeIcon');
  if (theme === 'dark') {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
  savePreference('theme', theme);
}

function toggleTheme() {
  const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(newTheme);
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  const storedTheme = getPreference('theme') || 'light';
  applyTheme(storedTheme);

  document.getElementById('toggleThemeBtn').addEventListener('click', toggleTheme);
});
