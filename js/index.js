const burger = document.querySelector(".burger"),
  nav = document.querySelector(".nav"),
  buttonHeader = document.querySelector(".button"),
  buttonMenu = document.querySelector(".button__menu"),
  socialMenu = document.querySelector(".social__menu"),
  header = document.querySelector(".header"),
  section = document.querySelector(".black");

arrSection = document.querySelectorAll(".black");
arrNavList = document.querySelectorAll(".nav__item");

burger.addEventListener("click", function () {
  burger.classList.toggle("js-active");
  nav.classList.toggle("js-active");
  buttonHeader.classList.toggle("js-active");
  buttonMenu.classList.toggle("js-active");
  socialMenu.classList.toggle("js-active");
  arrNavList.forEach((item) => {
    item.classList.toggle("js-active");
  });
});

//scrolling animation
let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function () {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

arrAnimItems = document.querySelectorAll(".js-anim");

function scrolling(e) {
  for (let i = 0; i < arrAnimItems.length; i++) {
    const listItem = arrAnimItems[i];

    if (isFullyVisible(listItem)) {
      listItem.classList.add("js-active");
    } else {
      listItem.classList.remove("js-active");
    }
  }
}

function isFullyVisible(el) {
  const elementBoundary = el.getBoundingClientRect();

  const top = elementBoundary.top;
  const bottom = elementBoundary.bottom;

  return top >= 0 && bottom <= window.innerHeight;
}

//fixed header
let scrollpos = window.scrollY;

const scrollChange = 100;
window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;
  if (scrollpos >= scrollChange) {
    header.classList.add("js-fixed");
  } else {
    header.classList.remove("js-fixed");
  }

  arrSection.forEach((el, i) => {
    if (el.offsetTop - (1 / 2) * header.clientHeight <= scrollpos) {
      burger.classList.add("js-fixed-black");
      buttonHeader.classList.add("js-fixed-black");
    } else if (el.offsetTop <= header.clientHeight * 10) {
      burger.classList.remove("js-fixed-black");
      buttonHeader.classList.remove("js-fixed-black");
    }
  });
});

//scroll
const downScroll = document.querySelector("#down");
downScroll.addEventListener("click", function () {
  section.scrollIntoView(top);
});
