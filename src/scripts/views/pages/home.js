import RestaurantSource from "../../data/restautant-source";
import createRestoItemTemplate from "../templates/template-creator";

const Home = {
  async render() {
    return `
      <section class="content">
        <div class="katalog">
          <h1 class="katalog__label">Katalog Restoran</h1>
          <div class="katalog__resto" ></div>
        </div>
      </section>
        `;
  },

  async afterRender() {
    const restaurant = await RestaurantSource.getListRestaurant();
    const restoContainer = document.querySelector(".katalog__resto");
    restaurant.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
