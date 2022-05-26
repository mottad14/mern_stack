const RecipeController = require("../controllers/recipe.controller")

module.exports = app => {
    app.get("/api/test", RecipeController.testEndpoint); //our controller file will need to know what this does
    app.get("/api/recipes/all", RecipeController.findAllRecipes);
    app.post("api/recipes/create", RecipeController.createRecipe);
    app.get("/api/recipes/:_id", RecipeController.findOneRecipe)
    app.delete("api/recipes/:_id/delete", RecipeController.deleteOneRecipe);
    app.patch("/api/recipes/:_id/update", RecipeController.updateOneRecipe);

}

// Copy and Paste your routes here