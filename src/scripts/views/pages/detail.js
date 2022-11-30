import RestaurantSource from "../../data/restautant-source";
import UrlParser from "../../routes/url-parser";
import LikeButtonInitiator from "../../utils/like-button-initiator";
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

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      resto,
    });
  },
};

export default Detail;
