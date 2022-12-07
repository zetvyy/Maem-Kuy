import FavoriteRestoIdb from "../../data/favorite-resto-idb";
import { createRestoItemTemplate } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
    <section class="content">
      <div class="katalog">
        <h1 class="katalog__label">Your Liked Resto </h1>
        <div class="resto-item__not-found">
         <h1>Tidak ada restoran untuk ditampilkan</h1>
        </div>
        <div class="katalog__resto"></div>
      </div>
    </section>
          `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector(".katalog__resto");
    const restoNotFound = document.querySelector(".resto-item__not-found");

    if (restaurant.length !== 0) {
      restoNotFound.innerHTML = "";
    }

    restaurant.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorite;
