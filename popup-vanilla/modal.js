var longText = `Contrary to popular belief, Lorem Ipsum is not simply random text. It
has roots in a piece of classical Latin literature from 45 BC, making
it over 2000 years old. Richard McClintock, a Latin professor at
Hampden-Sydney College in Virginia, looked up one of the more obscure
Latin words, consectetur, from a Lorem Ipsum passage, and going
through the cites of the word in classical literature, discovered the
undoubtable source.`;

window.onload = function () {
  var modal = document.getElementById("simpleModal");
  var modalBtn = document.getElementById("modal-btn");
  var closeBtn = document.getElementsByClassName("cross-btn")[0];
  var bodyText = document.getElementById("body-text");
  bodyText.innerHTML = longText.repeat(50);

  function openModal() {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "unset";
  }

  function outsideClick(e) {
    if (e.target == modal) {
      closeModal();
    }
  }

  modalBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  document.body.addEventListener("click", outsideClick);
  document.body.onkeydown = function (e) {
    e = e || window.event;
    if (e.key === "Escape") {
      closeModal();
    }
  };
};
