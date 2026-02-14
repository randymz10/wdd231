const currentYear = new Date();
const lastModified = `Last Modification: ${document.lastModified}`;

document.querySelector("#currentyear").innerHTML = currentYear.getFullYear();
document.querySelector("#lastModified").innerHTML = lastModified;
document.querySelector("#timestamp")?.innerHTML = currentYear.toLocaleString();
