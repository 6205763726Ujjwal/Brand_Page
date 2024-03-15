(function () {
  let btns = document.querySelectorAll(".btn");
  let storeItems = document.querySelectorAll(".store-item");

  btns.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const filter = e.target.dataset.filter;

      storeItems.forEach(function (storeItem) {
        if (filter === "all") {
          storeItem.style.display = "block";
        } else {
          if (storeItem.classList.contains(filter)) {
            storeItem.style.display = "block";
          } else {
            storeItem.style.display = "none";
          }
        }
      });
    });
  });
})();
