const url = "https://randymz10.github.io/wdd231/chamber/data/members.json";

const cards = document.querySelector("#cards");

const displayCompanies = (companies) => {
  companies.forEach((company) => {
    const card = document.createElement("div");
    const logo = document.createElement("img");
    const name = document.createElement("h2");
    const dateBirth = document.createElement("p");
    const placeBirth = document.createElement("p");

    logo.src = `images/companies/${company.icon_filename}`
    logo.loading = "lazy";
    logo.width = "250";
    logo.height = "250";

    card.appendChild(logo);
    cards.appendChild(card);
  });
};

const getCompaniesData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data);
  displayCompanies(data);
};

getCompaniesData();
