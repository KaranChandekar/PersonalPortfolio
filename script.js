"use strict";

const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");

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

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

// Passing 'argument' into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

// Sticky navigation: Intersection observer API
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = entries => {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
