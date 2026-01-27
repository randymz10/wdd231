// Params
const params = new URLSearchParams(window.location.search);

const firstName = params.get("firstName");
const lastName = params.get("lastName");
const organizationTitle = params.get("organizationTitle");
const email = params.get("email");
const phone = params.get("phone");
const bName = params.get("bName");
const membershipLevel = params.get("membershipLevel");
const description = params.get("description");
const timestamp = params.get("timestamp");

// Containers
const fullnameElement = document.querySelector("#fullname");
const organizationTitleElement = document.querySelector("#organizationTitle");
const emailElement = document.querySelector("#email");
const phoneElement = document.querySelector("#phone");
const bNameElement = document.querySelector("#bName");
const membershipLevelElement = document.querySelector("#membershipLevel");
const descriptionElement = document.querySelector("#description");
const timestampElement = document.querySelector("#timestamp");

fullnameElement.innerHTML = `${firstName} ${lastName}`;
organizationTitleElement.innerHTML = organizationTitle;
emailElement.innerHTML = email;
phoneElement.innerHTML = phone;
bNameElement.innerHTML = bName;
membershipLevelElement.innerHTML = membershipLevel;
descriptionElement.innerHTML = description
timestampElement.innerHTML = timestamp;
