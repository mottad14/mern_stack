//TODO IMport model
const Recipe = require("../models/recipe.model")

module.exports.testEndpoint = (req, res) =>{
    res.json({message: "Hello from the recipe controller"});
}


module.exports.findAllRecipes = (req, res) => {
    Recipe.find({})
    .then(results=> res.json(results))
    .catch(err=> res.status(400).json({message:"That didn't quite work", err})) // we need to finish creating these controller routes - copy past most of them
}

