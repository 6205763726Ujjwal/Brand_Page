const memeGeneratorButton = document.querySelector(".memeGeneratorButton");
const memeTitle = document.querySelector(".memeTitle");
const memeAuthor = document.querySelector(".memeAuthor");
const memeImage = document.querySelector(".memeImage");

function generateMeme(title, url, author) {
  memeTitle.innerHTML = title;
  memeImage.setAttribute("src", url);
  memeAuthor.innerHTML = author;
}

async function updateMeme() {
  const url = "https://meme-api.com/gimme/wholesomememes";
  const response = await fetch(url);
  const data = await response.json();
  generateMeme(data.title, data.url, data.author);
}

memeGeneratorButton.addEventListener("click", updateMeme);
