const html = document.documentElement;
const toggleThemeButton = document.getElementById("toggle-dark-mode");
// SVG
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

toggleThemeButton.addEventListener("click", () => {
  // Toggle dark class
  html.classList.toggle("dark");
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
});
