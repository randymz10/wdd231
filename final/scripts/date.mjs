const currentYear = new Date();

const insertCurrentYear = () => {
  document.querySelector("#currentyear").innerHTML = currentYear.getFullYear();
};

export default insertCurrentYear;
