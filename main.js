// Select the button
const btn = document.getElementById("theme-toggle");
// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");
const imgButtonSwitch = document.getElementById("icon-switch");

// If the current theme in localStorage is "dark"...
if (currentTheme == "dark") {
  // ...then use the .dark-theme class
  document.body.classList.add("dark-theme");
}

// Listen for a click on the button 
btn.addEventListener("click", function() {
  // Toggle the .dark-theme class on each click
  document.body.classList.toggle("dark-theme");
  
  // Let's say the theme is equal to light
  let theme = "light";
  // If the body contains the .dark-theme class...
  if (document.body.classList.contains("dark-theme")) {
    // ...then let's make the theme dark
    theme = "dark";
    imgButtonSwitch.setAttribute(
      "src",
      "./resources/icons/dark-mode-icon.svg"
    );
  } else {
    imgButtonSwitch.setAttribute(
      "src",
      "./resources/icons/light-mode-icon.svg"
    );
  }
  // Then save the choice in localStorage
  localStorage.setItem("theme", theme);
});