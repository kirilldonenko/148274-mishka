/* Активизация меню main-nav*/
var mainNav = document.querySelector(".main-nav");
var toggle = document.querySelector(".main-nav__toggle");
mainNav.classList.remove("main-nav--nojs");
toggle.addEventListener("click", function() {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
  }
});

/* Активизация модального окна*/

var modal = document.querySelector(".modal");
var buttonOrder = document.querySelector(".product-of-week__order");
var buttons = document.querySelectorAll(".order");
var buttonSubmit = document.querySelector(".form-modal__submit");

buttonOrder.addEventListener("click", function() {
  modal.classList.remove("visually-hidden");
});

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    modal.classList.remove("visually-hidden");
  });
};
addEventListener("keydown", function() {
  if (event.keyCode == 27) {
    modal.classList.add("visually-hidden");
  };
});
buttonSubmit.addEventListener("click", function() {
  modal.classList.add("visually-hidden");
});
