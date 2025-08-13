const spanDate = document.querySelector("footer span");
const currentDate = new Date();
spanDate.innerHTML = currentDate.getFullYear();

export default spanDate;
