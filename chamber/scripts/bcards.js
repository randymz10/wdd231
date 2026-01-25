const url = "https://randymz10.github.io/wdd231/chamber/data/members.json";

const bCards = document.querySelector(".bcards");
let bcardsStrings = "";

bCards.html;

async function getbCardsData() {
  const response = await fetch(url);
  const data = await response.json();

  const dataFilteredByMembership = data.filter(
    (company) => company.membership_level > 1
  );

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(
      Math.random() * dataFilteredByMembership.length
    );
    const company = dataFilteredByMembership[randomIndex];

    bcardsStrings += /* html */ `
    <section class="bcard">
          <div class="bcard-header">
            <h2 class="bcard-title">${company.name}</h2>
            <p class="bcard-subtitle">${company.category}</p>
          </div>
          <div class="bcard-body">
            <img src="images/companies/${company.icon_filename}" alt="${company.name} icon" width="150px" height= "150px"/>
            <div>
              <p><b>ADDRESS:</b> ${company.address}</p>
              <p><b>PHONE:</b> ${company.phone}</p>
              <p><b>URL:</b> ${company.website}</p>
            </div>
          </div>
        </section>
    `;
  }
  bCards.innerHTML = bcardsStrings;
}

function getUniqueRandomNumbers(count, max) {
  const numbers = new Set();
  while (numbers.size < count) {
    numbers.add(Math.floor(Math.random() * max) + 1);
  }
  return Array.from(numbers);
}

const displayBcards = (data) => {
  console.log(data);
};

getbCardsData();
