import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import App from "./views/app";

const hamburgerButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__list");

hamburgerButton.addEventListener("click", (event) => {
  hamburgerButton.classList.toggle("active");
  navMenu.classList.toggle("active");

  event.stopPropagation();
});

const app = new App({
  content: document.querySelector("#maincontent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
