// Responsive navigation

const navButton = document.querySelector("#hamburger-button");
const navBar = document.querySelector("#nav-bar");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("show");
  navBar.classList.toggle("show");
});

// Dates

const currentYear = new Date();
const currentYearElement = document.querySelector("#currentyear");

currentYearElement.innerHTML = currentYear.getFullYear();
