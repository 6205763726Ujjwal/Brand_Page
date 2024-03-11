const apiKey = `8d49d3c2c3524faba6fb0542ed6b308a`;

const blogContainer = document.querySelector(".blogContainer");
const main = document.querySelector(".main");
const inpSearch = document.getElementById("inputSearch");
const btnSearch = document.getElementById("btnSearch");

async function getInformation() {
  const filterValue = inpSearch.value;
  if (filterValue !== "") {
    try {
      const article = await filterData(filterValue);
      displayBlogs(article);
    } catch (error) {
      console.log("plz search on input Field...");
    }
  }
}

btnSearch.addEventListener("click", getInformation);

async function filterData(filterValue) {
  try {
    const apiURL = `https://newsapi.org/v2/everything?q=${filterValue}&pageSize=10&apiKey=${apiKey}`;

    const response = await fetch(apiURL);
    const data = await response.json();
    // console.log(data);
    return data.articles;
  } catch (error) {
    console.error("fetching news data while error", error);
    return [];
  }
}

async function fetchDataFromServer() {
  try {
    const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;

    const response = await fetch(apiURL);
    const data = await response.json();
    // console.log(data);
    return data.articles;
  } catch (error) {
    console.error("fetching news data while error", error);
    return [];
  }
}

function displayBlogs(articles) {
  blogContainer.innerHTML = "";
  articles.forEach((article) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blogCards");
    const img = document.createElement("img");
    img.alt = article.title;
    img.src = article.urlToImage;

    const titles = document.createElement("h2");

    const truncatedTitle =
      article.title.length > 30
        ? article.title.slice(0, 30) + " ...."
        : article.title;
    titles.textContent = truncatedTitle;

    const para = document.createElement("p");
    const truncatedPara =
      article.title.length > 120
        ? article.description.slice(0, 120) + " ...."
        : article.description;

    para.textContent = truncatedPara;

    blogCard.appendChild(img);
    blogCard.appendChild(titles);
    blogCard.appendChild(para);
    blogCard.addEventListener("click", () => {
      window.open(article.url, "_blank");
    });

    blogContainer.appendChild(blogCard);
    main.appendChild(blogContainer);
  });
}

(async () => {
  try {
    const articles = await fetchDataFromServer();
    displayBlogs(articles);
  } catch (error) {
    console.error("fetching data while error,", error);
  }
})();
