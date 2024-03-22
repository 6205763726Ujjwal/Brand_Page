const cursor = document.querySelector(".cursor");
var timeout;

// cursor movemnt

document.addEventListener("mousemove", function (e) {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  //stop animation
  function mouseStopped() {
    cursor.style.display = "none";
  }

  // cursor hide
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

// stop animation off the screen

document.addEventListener("mouseout", function () {
  cursor.style.display = "none";
});
