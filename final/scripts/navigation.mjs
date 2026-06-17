// Responsive navigation

const navButton = document.querySelector("#hamburger-button");
const navBar = document.querySelector("#nav-bar");

const onClickNavButton = () => {
  navButton.addEventListener("click", () => {
    navButton.classList.toggle("show");
    navBar.classList.toggle("show");
  });
};

export default onClickNavButton;
