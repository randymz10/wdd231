const BASE_URL = "https://fakelogo.com";
const numOfPartners = 4;

const getPartnersData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/random?count=${numOfPartners}`);
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error)
    }
};

const createPartnerCard = (partner) => {
    const partnertCard = document.createElement('div');
    partnertCard.classList.add('card');
    partnertCard.innerHTML = html
 };

getPartnersData();