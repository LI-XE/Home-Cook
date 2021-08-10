const RecipeController = require('../controllers/recipe.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = function(app) {
	// get all recipes
	app.get("/api/recipes",RecipeController.getAllRecipes);
	// create recipe
	app.post("/api/recipes", RecipeController.createRecipe);
	// get one recipe
	// create a param variable called "id"
	app.get("/api/recipes/:id", RecipeController.getOneRecipe);
	// update recipe
	app.put("/api/recipes/:id", RecipeController.updateRecipe);
	// delete recipe
	app.delete("/api/recipes/:id", RecipeController.deleteRecipe);
}
