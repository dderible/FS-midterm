/* was this supposed to be named weather utils? or leftover code? */
const { Cuisines, Dishes } = require("../../utils/data");
const { generateRandomMenuItem, generateMenu, selectRandomCuisine } = require("../../utils/restaurantUtils");

describe('Restaurant Functions', () => {
    describe('generateRandomMenuItem', () => {
      test ('Generate A Menu Item At Random', () => {
        let testItem = selectRandomCuisine();
        let testGenerateItem = generateRandomMenuItem(testItem);
        const dishArray = Dishes[testItem];

        let validDishes = dishArray.some(dish => 
          dish.name === testGenerateItem.dish.name &
          dish.description === testGenerateItem.dish.description &
          dish.price === testGenerateItem.dish.price
        );
        expect(validDishes).toBe(true); 
      });
    });

    describe('generateMenu', () => {
      test ('Generate A Full Menu', () => {
        const testMenu = generateMenu(selectRandomCuisine());

        expect(Array.isArray(testMenu)).toBe(true);
        testMenu.items.forEach((item) => {
          expect(item).toHaveProperty('name');
          expect(item).toHaveProperty('descriptiom');
          expect(item).toHaveProperty('price');
          expect(item).toHaveProperty('dailySpecial');
        });
      });
    });

    describe('selectRandomCuisine', () => {
      test ('Generate A Cuisine At Random', () => {
        const testCuisine = selectRandomCuisine
        expect(Cuisines).toContain(testCuisine);
      });
    });
});
