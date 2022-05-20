const RecipeController = require("../controllers/recipe.controller")

module.exports = app => {
    app.get("/api/test", RecipeController.testEndpoint); //our controller file will need to know what this does
    app.get("/api/recipe/all", RecipeController.findAllRecipes)
}

// Copy and Paste your routes here