const html = document.documentElement;
const toggleThemeButton = document.getElementById("toggle-dark-mode");
// Themes
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// Consultamos si el usuario tiene el sistema activado darkmode
const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
const systemDarkMode = matchMedia.matches;

toggleThemeButton.addEventListener("click", () => {
  // Toggle dark class
  html.classList.toggle("dark");
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
});

function updatedTheme(darkmode) {
  if (darkmode) {
    html.classList.add("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  } else {
    html.classList.remove("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }
}

updatedTheme(systemDarkMode);

// Ahora si queremos escuchar cuando el usuario aplica el darkmode del sistema
matchMedia.addEventListener("change", ({ matches }) => {
  updatedTheme(matches);
});
