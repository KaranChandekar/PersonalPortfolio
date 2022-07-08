"use strict";

const navLinks = document.querySelector("#nav__links");

// Page navigation
navLinks.addEventListener("click", function (e) {
  console.log(e.target);
  e.preventDefault();
  // Matching Strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
