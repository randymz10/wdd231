const caseStudiesElement = document.querySelector("#case-studies");
const url = "https://randymz10.github.io/wdd231/final/data/case-studies.json";

const getCaseStudies = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const createCaseStudyElement = (caseStudy) => {
  const caseStudyElement = document.createElement("div");
  caseStudyElement.classList.add("card");
  caseStudyElement.classList.add("case-study");
  caseStudyElement.innerHTML = /*html*/ `
  <h3>${caseStudy.title}</h3>
  <small class="case-study-problem-label">Problem</small>
  <p>${caseStudy.problem}</p>
  <small class="case-study-solution-label">Solution</small>
  <p>${caseStudy.solution}</p>
  `;
  return caseStudyElement;
};

const renderCaseStudies = async () => {
  const caseStudies = await getCaseStudies();
  caseStudies.map((caseStudy) => {
    const caseStudyElement = createCaseStudyElement(caseStudy);
    caseStudiesElement.appendChild(caseStudyElement);
  });
};

export default renderCaseStudies;
