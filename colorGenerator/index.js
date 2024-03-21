const body = document.querySelector("body");
const button = document.querySelector("button");
const color = ["violet", "pink", "red", "green", "orange", "blue", "yellow"];

button.addEventListener("click", changeColor);

function changeColor() {
  const indexColor = parseInt(Math.random() * color.length);
  body.style.background = color[indexColor];
}
