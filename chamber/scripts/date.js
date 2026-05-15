const currentYear = new Date();
const lastModified = `Last Modification: ${document.lastModified}`;

document.querySelector("#currentyear").innerHTML = currentYear.getFullYear();
document.querySelector("#lastModified").innerHTML = lastModified;
const timestamp = document.querySelector("#timestamp");

if (timestamp) timestamp.innerHTML = currentYear.toLocaleString();
