// const url = "https://randymz10.github.io/wdd231/chamber/data/companies.json";
const localCompanies = document.querySelector("#local-companies");

import localCompaniesData from "../data/companies.mjs";

async function getCardsData() {
  // const response = await fetch(url);
  // // const data = await response.json();
  
  let localCompaniesString = "";
  
  localCompaniesData.map((company) => {
    localCompaniesString += /*html*/ `
    <section class="companyCard">
        <h2 class="companyCard-title">${company.name}</h2>
        <figure class="companyCard-image">
          <img src="images/local-companies/${company.icon_filename}" alt="${company.name}" width="300px" height="200px"/>
        </figure>
        <address class="companyCard-address">${company.address}</address>
        <p class="companyCard-description">${company.description}</p>
        <div class="companyCard-button">
          <button class="btn">learn more</button>
        </div>
    </section>
    `;
  });

  localCompanies.innerHTML = localCompaniesString;
}

getCardsData();
