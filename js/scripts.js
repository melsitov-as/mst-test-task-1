const headerMenu = document.querySelector(".header__menu");
const headerLogoLink = document.querySelector(".header__menu-logo-link");
const headerUserNavLinks = document.querySelectorAll(".header__user-nav-link");

const userMenuOpenButton = document.querySelector(".header__hamburger-btn");
const headerUserNav = document.querySelector(".header__user-nav");

window.addEventListener("wheel", () => {
  headerMenu.style.background = "#222222";
  headerLogoLink.style.opacity = "0.6";
  headerUserNavLinks.forEach((elem) => (elem.style.opacity = "0.6"));

  if (window.scrollY === 0) {
    headerMenu.style.background = `linear-gradient(
      to right,
      #222222 0,
      #222222 1145px,
      transparent 500px,
      transparent 100%
    )`;
    headerLogoLink.style.opacity = "1";
    headerUserNavLinks.forEach((elem) => (elem.style.opacity = "1"));
  }
});

if (window.scrollY > 0) {
  headerMenu.style.background = "#222222";
  headerLogoLink.style.opacity = "0.6";
  headerUserNavLinks.forEach((elem) => (elem.style.opacity = "0.6"));
}

const addOpenListener = () => {
  userMenuOpenButton.addEventListener("click", addActiveClass);
};

const addCloseListener = () => {
  if (document.querySelector(".header__close-button")) {
    const closeUserNavMenuButton = document.querySelector(
      ".header__close-button"
    );

    closeUserNavMenuButton.addEventListener("click", removeActiveClass);
  }
};

const removeOpenListener = () => {
  userMenuOpenButton.removeEventListener("click", addActiveClass);
};

const removeCloseListener = () => {
  if (document.querySelector(".header__close-button")) {
    const closeUserNavMenuButton = document.querySelector(
      ".header__close-button"
    );

    closeUserNavMenuButton.removeEventListener("click", removeActiveClass);
  }
};

const addActiveClass = () => {
  headerUserNav.classList.add("header__user-nav--active");
  removeOpenListener();
  addCloseListener();
};

const removeActiveClass = () => {
  removeCloseListener();
  addOpenListener();
  headerUserNav.classList.remove("header__user-nav--active");
};

addOpenListener();
