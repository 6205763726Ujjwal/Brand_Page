const accessKey = `Vdm4o5P6wilOkjSS-bxo7nSwQbTfGxBVlKfWRJjaxcY`;

const submitForm = document.querySelector(".submitForm");
const inputField = document.getElementById("searchImage");
const buttonField = document.getElementById("searchButton");
const showMoreBtn = document.getElementById("btn");
const itemSection = document.querySelector(".itemSection");

let inputData = "";
let page = 1;

async function searchFunction() {
  const inputData = inputField.value;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  if (page === 1) {
    itemSection.innerHTML = "";
  }

  results.map((result) => {
    const divElement = document.createElement("div");
    divElement.classList.add("imgSection");
    const img = document.createElement("img");
    img.src = result.urls.small;
    img.alt = result.alt_description;

    const anchor = document.createElement("a");
    anchor.href = result.links.html;
    anchor.target = "_blank";
    anchor.textContent = result.alt_description;

    divElement.appendChild(img);
    divElement.appendChild(anchor);
    itemSection.appendChild(divElement);
  });
  page++;

  if (page > 1) {
    showMoreBtn.style.display = "block";
  }
}

submitForm.addEventListener("click", (e) => {
  e.preventDefault();
  searchFunction();
});

showMoreBtn.addEventListener("click", () => {
  searchFunction();
});
