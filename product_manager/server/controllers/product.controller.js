const { response } = require("express");
const {Product} = require("../models/product.model");


//This is a test
module.exports.index = (request, response)=>{
  response.json({
    message: "Hello World"
  });
}


module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then(allProducts => res.json({ products: allProducts }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// UNLESS IT'S NEEDED, WILL PULL A RANDOM DOCUMENT 
// module.exports.findRandomProduct = (req, res) => {
//   //to find a random joke first - Get the count of all jokes
//   Product.count().exec(function (err, count) {
//     // Get a random entry
//     var random = Math.floor(Math.random() * count)
//     // Again query all Products but only fetch one offset by our random #
//     Product.findOne().skip(random).exec((err, result) =>{
//         // Tada! random Product
//         console.log("THIS IS THE RESULT",result) 
//         if (err){
//           return res.json(err)
//         }
//         return res.json(result)
//     })
// })
// }

module.exports.findOneSingleProduct = (req, res) => {
	Product.findOne({ _id: req.params.id })
		.then(oneSingleProduct => res.json({ product: oneSingleProduct }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewProduct = (request, response) => {
    console.log(request, request.body);
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.updateExistingProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedProduct => res.json({ product: updatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

//Unless it's needed
// module.exports.deleteAllProducts = (req, res) =>{
//   Product.remove()
//   .then(result => res.json({result: result}))
//   .catch(err => res.json({message: "Something went wrong", error: err}));
// };