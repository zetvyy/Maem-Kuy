import RestaurantSource from "../../data/restautant-source";
import UrlParser from "../../routes/url-parser";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import { createRestoDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
            <div id="resto" class="resto"></div>
            <div id="likeButtonContainer"></div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailResto(url.id);
    const restoContainer = document.querySelector("#resto");
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        address: resto.address,
        city: resto.city,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
