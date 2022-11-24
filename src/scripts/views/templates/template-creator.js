import CONFIG from "../../global/config";

const createRestoItemTemplate = (resto) => {
  `
    <article class="katalog__item" key="${resto.id}">
        <img
          src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"
          alt="${resto.name}"
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
};

export default createRestoItemTemplate;
