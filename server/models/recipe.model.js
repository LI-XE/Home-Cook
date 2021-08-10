const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Name is required for Recipes" ],
        minlength: [ 3, "Naem must be at least 3 characters long" ],
    },
    categories: {
        type: String,
        required: [ true, "Category is requied for Recipe" ],
        enum: [
            'Breakfirst',
            'Lunch',
            'Dinner',
            'Bbeef',
            'Vhicken',
            'Dessert',
            'Bakery',
            'Pork',
            'Seafood',
            'Vegetarian',
            'Side',
        ],
    },
    image:{
        type: String,
    },
    rating: {
        type: String,
        required: [ true, "Rating is requied for Movies" ],
        enum: [
            "1",
            "2",
            "3",
            "4",
            "5",
        ],
    }
}, {timestamps: true});

module.exports = mongoose.model('Recipe', RecipeSchema);