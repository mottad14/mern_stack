const  Pet = require("../models/pet.model");
const { response } = require("express");


//This is a test
module.exports.index = (request, response)=>{
  response.json({
    message: "Hello World"
  });
}


module.exports.findAllPets = (req, res) => {
  Pet.find()
    .then(allPets => res.json({ pets: allPets }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

// UNLESS IT'S NEEDED, WILL PULL A RANDOM MONGODb-DOCUMENT 
// module.exports.findRandomPet = (req, res) => {
//   //to find a random joke first - Get the count of all jokes
//   Pet.count().exec(function (err, count) {
//     // Get a random entry
//     var random = Math.floor(Math.random() * count)
//     // Again query all Pets but only fetch one offset by our random #
//     Pet.findOne().skip(random).exec((err, result) =>{
//         // Tada! random Pet
//         console.log("THIS IS THE RESULT",result) 
//         if (err){
//           return res.json(err)
//         }
//         return res.json(result)
//     })
// })
// }

module.exports.findOneSinglePet = (req, res) => {
	Pet.findOne({ _id: req.params._id })
		.then(oneSinglePet => res.json(oneSinglePet))
		.catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

// Here's different syntax introduced by the Platform to create and validate our 
// chosen model: 
// const Book = require('../models/book.model');
// module.exports = {
//     create: (request, response) => {
//         const { title, pages } = request.body;
//         Book.create({
//             title,
//             pages
//         })
//             .then(book => response.json(book))
//             .catch(err => response.status(400).json(err))
//     }
// }

module.exports.createNewPet = (request, response) => {
    console.log(request, request.body);
    Pet.create(request.body)
        .then(pet => response.json(pet))
        .catch(err => response.status(400).json(err));
}

module.exports.updateOnePet = (req, res) => {
  Pet.updateOne({ _id: req.params._id }, req.body,{runValidators: true})
  // .then(console.log("This is the requested Id:", req.params._id, "This is the body of the request:", req.body) )
    .then(updatedPet => res.json(updatedPet))
    .catch(err => res.status(400).json(err ));
};

module.exports.deleteAnExistingPet = (req, res) => {
  Pet.deleteOne({ _id: req.params._id })
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
};

//Unless it's needed
// module.exports.deleteAllPets = (req, res) =>{
//   Pet.remove()
//   .then(result => res.json({result: result}))
//   .catch(err => res.json({message: "Something went wrong", error: err}));
// };