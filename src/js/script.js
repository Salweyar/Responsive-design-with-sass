const menu = document.querySelector("#btnHumburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElement = document.querySelectorAll(".has-fade");

menu.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    // Close menu

    body.classList.remove("noscroll");

    header.classList.remove("open");
    fadeElement.forEach((element) => {
      element.classList.add("fade-out");
      element.classList.remove("fade-in");
    });
  } else {
    // Open menu

    body.classList.add("noscroll");

    header.classList.add("open");
    fadeElement.forEach((element) => {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
});
