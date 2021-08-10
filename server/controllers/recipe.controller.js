const Recipe = require("../models/recipe.model");

// get all recipes
module.exports.getAllRecipes = (req, res) => {
    console.log("Inside getAllRecipes");

	Recipe.find( { } )   // find all recipe documents
		.then((allRecipes) => {
			console.log(allRecipes);
			res.json(allRecipes);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		})
};

// create recipe
module.exports.createRecipe = (req, res) => {
	console.log("Inside createRecipe");
	console.log(req.body);

	Recipe.create(req.body)
		.then((newRecipe) => {
			console.log(newv);
			res.json(newRecipe);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		})
};

// get one recipe
module.exports.getOneRecipe = (req, res) => {
	console.log("inside getOneRecipe");
	console.log(req.params.id);

	Recipe.findById(req.params.id)
		.then((oneRecipe) => {
			console.log(oneRecipe);
			res.json(oneRecipe);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		})
};

// update eecipe
//		https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
module.exports.updateRecipe = (req, res) => {
	console.log("inside updateRecipe");
	console.log(req.params.id);  // the document we need to update
	console.log(req.body);       // the data we will be updating with

	// update by default will send back the ORIGINAL document....NOT the updated one!
	// Update will NOT validate your data by default
	Recipe.findByIdAndUpdate(req.params.id, req.body, {
		new: true,    // return the updated document instead of the original
		runValidators: true  // validate the json data just like the create
	})
		.then((updatedRecipe) => {
			console.log(updatedRecipe);
			res.json(updatedRecipe);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		})
};

// delete recipe
module.exports.deleteRecipe = (req, res) => {
	console.log("inside deleteRecipe");
	console.log(req.params.id);

	Recipe.findByIdAndDelete(req.params.id)
		.then((deletedRecipe) => {
			// this is the deleted document....your last chance!!!
			console.log(deletedRecipe);
			res.json(deletedRecipe);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		})
};
