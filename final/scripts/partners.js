const BASE_URL = "https://fakelogo.com";
const numOfPartners = 6;

const getPartnersData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/random?count=${numOfPartners}`);
        const data = await response.json();
        console.log(data)
        
    } catch (error) {
        console.error(error)
    }
};
