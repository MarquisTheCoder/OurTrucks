window.onload = function () {
  let navButton = document.getElementById("navToggle");
  let navModal = document.getElementById("navbar-default");
  navButton.onclick = function () {
    navModal.classList.toggle("hidden");
  };
};
