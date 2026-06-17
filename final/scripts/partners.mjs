const BASE_URL = "https://fakelogo.com";
const numOfPartners = 4;
const partnersElement = document.querySelector("#partners");

const getPartnersData = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/random?count=${numOfPartners}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const createPartnerCard = (partner) => {
  const partnertCard = document.createElement("div");
  partnertCard.classList.add("card");
  partnertCard.classList.add("partner");
  partnertCard.innerHTML = /*html*/ `
  <a href="${partner.company_url}" target="_blank">
    <img class="partner-logo" src="${partner.image_url}" alt="${partner.name} logo" loading="lazy"/>
  </a>      
  
        
    `;
  return partnertCard;
};

const renderPartners = async () => {
  const partners = await getPartnersData();
  partners.map((partner) => {
    const partnerCard = createPartnerCard(partner);
    partnersElement.appendChild(partnerCard);
  });
};

export default renderPartners;
