(function () {
  let form = document.getElementById("inputData"); 

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // let submitbutton = document.getElementById("btn");
    let feedback = document.querySelector(".feedback");
    let inputMessage = document.getElementById("inputMessage");
    let messageContent = document.getElementById("messageContent");

    if (inputMessage.value == "") {
      feedback.classList.add("show");
      setTimeout(function () {
        feedback.classList.remove("show");
      }, 4000);
    } else {
      messageContent.textContent = inputMessage.value;
    }
  });
})();   
