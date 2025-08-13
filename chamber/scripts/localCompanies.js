const url = "https://randymz10.github.io/wdd231/chamber/data/companies.json";
const localCompanies = document.querySelector("#local-companies");

async function getCardsData() {
  let localCompaniesString = "";
  const response = await fetch(url);
  const data = await response.json();

  localCompanies.map((company) => {
    localCompaniesString += /*html*/ `
    <section class="bcard">
        <h2>${data.name}</h2>
        <figure>
        <img src="images/local-companies/${data.icon_filename}" alt="${data.name}" width="300px" height="200px"/>
        </figure>
        <address>${data.address}</address>
        <p>${data.description}</p>
        <button>learn more</button>
    </section>
    `;
  });
}

getCardsData();

// const title = document.createElement("h2");
// const figure = document.createElement("figure");
// const image = document.createElement("img");
// const address = document.createElement("address");
// const description = document.createElement("p");
// const button = document.createElement("button");
