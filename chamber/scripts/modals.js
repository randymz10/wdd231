// HTML Elements
const nonProfitModal = document.querySelector("#nonProfitModal");
const nonProfitButton = document.querySelector("#nonProfitButton");

const bronzeModal = document.querySelector("#bronzeModal");
const bronzeButton = document.querySelector("#bronzeButton");

const silverModal = document.querySelector("#silverModal");
const silverButton = document.querySelector("#silverButton");

const goldModal = document.querySelector("#goldModal");
const goldButton = document.querySelector("#goldButton");

// Listeners

nonProfitButton.addEventListener("click", () => {
  displayLevelsDetails(nonProfitModal, "#nonProfitModal");
});

bronzeButton.addEventListener("click", () => {
  displayLevelsDetails(bronzeModal, "#bronzeModal");
});

silverButton.addEventListener("click", () => {
  displayLevelsDetails(silverModal, "#silverModal");
});

goldButton.addEventListener("click", () => {
  displayLevelsDetails(goldModal, "#goldModal");
});

/**
 * Function to display the modals
 * @param {HtmlElement} levelCard
 * @param {string} id
 */

function displayLevelsDetails(levelCard, id) {
  levelCard.showModal();
  const closeBtn = document.querySelector(`${id} > div > button.closeBtn`);
  closeBtn.addEventListener("click", () => {
    levelCard.close();
  });
}
