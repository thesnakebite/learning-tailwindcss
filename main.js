const html = document.documentElement;
// Themes
// const sunIcon = document.getElementById("sun-icon");
// const moonIcon = document.getElementById("moon-icon");
// const systemIcon = document.getElementById("system-icon");

const icons = {
  light: document.getElementById("sun-icon"),
  dark: document.getElementById("moon-icon"),
  system: document.getElementById("system-icon"),
};

const themeMenu = document.getElementById("theme-menu");
const themeOptions = document.querySelectorAll("[data-theme-option]");
// Consultamos si el usuario tiene el sistema activado darkmode
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

let currentTheme = localStorage.getItem("theme") || "system";
localStorage.setItem("theme", "system");

updateTheme(currentTheme);
updateThemeUI(currentTheme);

function updateThemeUI(theme) {
  Object.entries(icons).forEach(([key, icon]) =>
    key === theme
      ? icon.classList.remove("hidden")
      : icon.classList.add("hidden")
  );

  // Finalmente ocultamos el menu
  themeMenu.classList.add("hidden");
  localStorage.setItem("theme", theme);
}

function updateTheme(theme) {
  if (theme === "dark" || (theme === "system" && isDarkMode.matches)) {
    html.classList.add("dark");
  } else if (theme === "light" || (theme === "system" && !isDarkMode.matches)) {
    html.classList.remove("dark");
  }

  currentTheme = theme;
}

isDarkMode.addEventListener("change", ({ matches }) => {
  if (currentTheme === "system") {
    matches ? html.classList.add("dark") : html.classList.remove("dark");
  }
});

themeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const theme = option.dataset.themeOption;

    // Ocultamos todos los iconos dentro del botón y mostramos el icono asociado a la opción elegida
    // sunIcon.classList("hidden");
    // moonIcon.classList("hidden");
    // systemIcon.classList("hidden");

    // [sunIcon, moonIcon, systemIcon].forEach((icon) =>
    //   icon.classList.add("hidden")
    // );

    updateThemeUI(theme);
    updateTheme(theme);
  });
});

document
  .getElementById("toggle-theme-menu")
  .addEventListener("click", () => themeMenu.classList.toggle("hidden"));

// Botón móvil menu
const toggleMobileMenu = document.getElementById("toggle-mobile-menu");

toggleMobileMenu.addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");

  document.getElementById("open-menu-icon").classList.toggle("hidden");

  document.getElementById("close-menu-icon").classList.toggle("hidden");
});
