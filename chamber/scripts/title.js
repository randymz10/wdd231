const lastVisited = localStorage.getItem("lastVisited") ? new Date() : null;
const currentDay = new Date();
const diffHours = (lastVisited - currentDay) / (1000 * 60 * 60 * 24);
let title;


if (!lastVisited) {
  title = "Welcome! Let us know if you have any questions.";
  localStorage.setItem("lastVisited", currentDay.toDateString);
} else {
  if (diffHours < 1) {
    title = "Back so soon! Awesome!";
    localStorage.setItem("lastVisited", currentDay.toDateString);
  } else {
    title = `You last visited ${diffHours} days ago.`;
    localStorage.setItem("lastVisited", currentDay.toDateString);
  }
}

document.querySelector("#discover-title").innerHTML =
  /*html*/
  `<h1>${title}</h1>`;
