const { Dishes, Cuisines, Restaurants } = require("./data");

/**
 * Generates a random menu item based on a given cuisine.
 * @param {string} cuisine - The desired cuisine for the menu item.
 * @returns {*} A random menu item with a name, description, price, and special status.
 */
function generateRandomMenuItem(cuisine) {
  const randomMenuItem = Dishes[cuisine][Math.floor(Math.random() * Dishes[cuisine].length)];
  const price = (Math.random() * 20 + 5 ).toFixed(2);
  const dailySpecialChance = Math.random() > 0.42;
  return {...randomMenuItem, price, dailySpecialChance};
}

/**
 * Selects a random cuisine type for a restaurant.
 * @returns {*} A random cuisine type.
 */
function selectRandomCuisine() {
  const randomCuisine = Cuisines[Math.floor(Math.random() * Cuisines.length)];
  return randomCuisine;
}

/**
 * Generates a menu for a restaurant, including a random cuisine type and a list of menu items.
 * @returns {*} An object representing the restaurant's menu, including the cuisine type and items.
 */
function generateMenu() {
  const menu = [];
  const menuSize = Math.floor(Math.random() * (10 - 5) + 5);
  for (i = 0; i < menuSize; i++) {
    menu.push(generateRandomMenuItem(cuisine));
  }

  console.log(menu);
  return menu;
}

/**
 * Additional utility functions can be defined here if needed.
 */

module.exports = { generateRandomMenuItem, selectRandomCuisine, generateMenu };
