const { Restaurants, Cuisines } = require("./utils/data");
const express = require('express');
const path = require('path');
const { generateRandomMenuItem, generateMenu, selectRandomCuisine } = require("./utils/restaurantUtils");

const app = express();
let restaurantData = {}; //This should be populated soon

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

/**
 * GET /
 * Renders the homepage that lists cities and restaurant names.
 */
app.get('/', (request, response) => {

  const randomRestaurant =
    restaurantData[Math.floor(Math.random() * restaurantData.length)];

    const randomCuisine = randomRestaurant.cuisine;

    const restaurantName = randomRestaurant.name;

    const randomItem = generateRandomMenuItem(randomCuisine);

    response.render('index', { restaurants: Restaurants, randomCuisine, restaurantName, randomItem });
  });
  
  /**
   * GET /restaurant/:name
   * Displays a specific restaurant's random menu.
   * The cuisine is randomly selected and a menu is generated based on it.
   */
  app.get('/restaurantmenu', (request, response) => {
    const restaurantId = request.query.restaurantId;
    const restaurant = Restaurants.find((r) => r.id === restaurantId);
    if (restaurant) {
      const menuData = generateMenu();
      response.render("restaurantmenu", {restaurantId: restaurant.name, randomCuisine: restaurant.cuisine, randomMenu: restaurant.menu, specials,
      });
    } else {
      response.status(404).send('ERROR: Restaurant Not Found!');
    }
    //Get the restaurants menu, and then display the page
  });

  //Add any other required routes here
  app.get('/menualerts', (request, response) => {
    const specialmenu = restaurantData.map((restaurant) => {
      const specials = restaurant.menu.filter((item) => item.special);
    return {
      name: restaurant.name,
      specials,
      };
    });
    response.render("menualerts", { specialMenu });
  });

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});