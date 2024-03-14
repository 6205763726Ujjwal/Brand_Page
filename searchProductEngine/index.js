function searchInput() {
  let inputField = document.getElementById("inpField").value.toUpperCase();
  let productItem = document.querySelectorAll(".product");
  let productList = document.querySelector(".productList");

  let searchProduct = productList.getElementsByTagName("h2");

  for (var i = 0; i < searchProduct.length; i++) {
    let match = productItem[i].getElementsByTagName("h2")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(inputField) > -1) {
        productItem[i].style.display = "";
      } else {
        productItem[i].style.display = "none";
      }
    }
  }
}
