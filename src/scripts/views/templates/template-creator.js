import CONFIG from "../../global/config";

const createRestoDetailTemplate = (resto) => `
  <h2 class="katalog-detail__title">${resto.name}</h2>
  <img class="katalog-detail__poster" src="${
    CONFIG.BASE_IMAGE_URL + resto.pictureId
  }" alt="${resto.name}" />
  <div class="katalog-detail__info">
    <h3>Information</h3>
    <h4>Rating : ${resto.rating} </h4>
    <h4>City </h4>
    <p>${resto.city}</p>
    <h4>Address </h4>
    <p>${resto.address}</p>
    <h4>Description </h4>
    <p>${resto.description}</p>
    <h4>Menu Makanan</h4>
    ${resto.menus.foods.map((food) => `<p> - ${food.name}</p>`).join("")}
    <h4>Menu Minuman</h4>
    ${resto.menus.drinks.map((drink) => `<p> - ${drink.name}</p>`).join("")}
    <h4>Customer Reviews</h4>
    ${resto.customerReviews
      .map(
        (review) =>
          `<p> - ${review.name}, ${review.date}, ${review.review}</p> `
      )
      .join("")}
  </div>
  
`;

const createRestoItemTemplate = (resto) => {
  return `
    <article class="katalog__item" key="${resto.id}">
        <img
          src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"
          alt="${resto.name}"
          class="katalog__image"
        />
        <div class="katalog__body">
          <p class="katalog__rating">Rating : ${resto.rating}</p>
          <h1 class="katalog__title">
            <a href="/#/detail/${resto.id}">${resto.name}</a>
          </h1>
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

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
