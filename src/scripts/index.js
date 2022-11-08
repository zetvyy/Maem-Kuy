import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import Data from "../DATA.json";

const hamburgerButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__list");

hamburgerButton.addEventListener("click", (event) => {
  hamburgerButton.classList.toggle("active");
  navMenu.classList.toggle("active");

  event.stopPropagation();
});

document.addEventListener("DOMContentLoaded", () => {
  const rcontainer = document.querySelector(".katalog__resto");

  rcontainer.innerHTML = `
    ${Data.restaurants
      .map((resto) => {
        return `
      <article class="katalog__item" key="${resto.id}">
        <img
          src="${resto.pictureId}"
          alt="gambar restoran bring your phone cafe"
          class="katalog__image"
        />
        <div class="katalog__body">
          <p class="katalog__rating">Rating : ${resto.rating}</p>
          <h1 class="katalog__title">${resto.name}</h1>
          <div class="katalog__content">
            <p class="katalog__city">City : ${resto.city}</p>
            <p class="katalog__description">
            ${resto.description}
            </p>
          </div>
        </div>
      </article>
      `;
      })
      .join("")}
  `;
});
