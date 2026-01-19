const url = "https://randymz10.github.io/wdd231/chamber/data/members.json";
// const url = "http://127.0.0.1:5500/chamber/data/members.json";

const cards = document.querySelector("#cards");

const displayCompanies = (companies) => {
  companies.forEach((company) => {
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardImage = document.createElement("div");
    const logo = document.createElement("img");
    const name = document.createElement("h2");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("a");
    const membershipLevel = document.createElement("p");
    const category = document.createElement("p");
    const founded = document.createElement("p");

    name.textContent = company.name;
    address.textContent = company.address;
    phone.textContent = company.phone;
    website.innerHTML = company.website;
    website.href = company.website;
    membershipLevel.textContent = company.membership_level;
    category.textContent = company.category;
    founded.textContent = company.founded;

    switch (company.membership_level) {
      case 1:
        membershipLevel.textContent = "Member";
        break;
      case 2:
        membershipLevel.textContent = "Silver";
        break;
      case 3:
        membershipLevel.textContent = "Gold";
        break;
      default:
        break;
    }

    logo.src = `images/companies/${company.icon_filename}`;
    logo.alt = `logo image of ${company.name}`;
    logo.loading = "lazy";
    logo.width = "250";
    logo.height = "250";

    card.classList.add("card");
    cardBody.classList.add("card-body");
    cardImage.classList.add("card-image");
    name.classList.add("card-title");
    logo.classList.add("card-image");

    card.appendChild(name);
    card.appendChild(cardImage);
    card.appendChild(cardBody);
    cardImage.appendChild(logo);
    cardBody.appendChild(address);
    cardBody.appendChild(phone);
    cardBody.appendChild(membershipLevel);
    cardBody.appendChild(category);
    cardBody.appendChild(founded);
    cardBody.appendChild(website);

    cards.appendChild(card);
  });
};

function displayBcards(data) {
  console.log(data);
}

const getCompaniesData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayCompanies(data);
};

getCompaniesData();
