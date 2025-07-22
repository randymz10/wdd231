const url =
  "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";

const cards = document.querySelector("#cards");

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement("section");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");
    const dateBirth = document.createElement("p");
    const placeBirth = document.createElement("p");

    fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
    dateBirth.innerHTML = `Date of Birth: ${prophet.birthdate}`;
    placeBirth.innerHTML = `Place of Birth: ${prophet.birthplace}`;
    portrait.src = prophet.imageurl;
    portrait.alt = `Portrait of ${prophet.name} ${prophet.lastname}`;
    portrait.loading = "lazy";
    portrait.width = "340";
    portrait.height = "440";

    card.appendChild(fullName);
    card.appendChild(dateBirth);
    card.appendChild(placeBirth);
    card.appendChild(portrait);

    card.addEventListener('click', () => { card.classList.toggle});

    cards.appendChild(card);
  });
};

const getProphetData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets);
  displayProphets(data.prophets);
};

getProphetData();
