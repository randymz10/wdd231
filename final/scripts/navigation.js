const navButton = document.querySelector(".menu-navbar > button");
const navbar = document.querySelector(".navbar");

navButton.addEventListener("click", (e) => {
  navbar.classList.toggle("active");
});

export default navButton;
