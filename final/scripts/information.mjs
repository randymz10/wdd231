const params = new URLSearchParams(window.location.search);

const paramName = params.get("formName");
const paramEmail = params.get("formEmail");
const paramDescription = params.get("formDescription");

const nameElement = document.querySelector("#name");
const emailElement = document.querySelector("#email");
const descriptionElement = document.querySelector("#description");

const renderFormResult = () => {
  nameElement.innerHTML = /*html */ `
    <p><strong>Name:</strong></p>
    <p>${paramName}</p>
    `;
  emailElement.innerHTML = /*html */ `
    <p><strong>Email:</strong></p>
    <p>${paramEmail}</p>
    `;
  descriptionElement.innerHTML = /*html */ `
    <p><strong>Description:</strong></p>
    <p>${paramDescription}</p>
    `;
};

export default renderFormResult;
