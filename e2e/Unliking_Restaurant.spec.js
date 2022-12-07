const assert = require("assert");

Feature("Unliking Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurant", ({ I }) => {
  I.seeElement(".katalog");
  I.see("Tidak ada restoran untuk ditampilkan", ".resto-item__not-found");
});

Scenario("Unliking one movie", async ({ I }) => {
  I.see("Tidak ada restoran untuk ditampilkan", ".resto-item__not-found");
  I.amOnPage("/");

  I.seeElement(".katalog__title a");

  I.wait(2);

  const firstRestaurant = locate(".katalog__title a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");

  I.seeElement(".katalog__item");
  const likedRestaurantTitle = await I.grabTextFrom(".katalog__title");

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurantTitle);
  I.wait(2);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.see("Tidak ada restoran untuk ditampilkan", ".resto-item__not-found");
});
