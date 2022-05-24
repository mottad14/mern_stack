const { response } = require("express");
const {Author} = require("../models/author.model");


//This is a test
module.exports.index = (request, response)=>{
  response.json({
    message: "Hello World"
  });
}


module.exports.findAllAuthors = (req, res) => {
  Author.find()
    .then(allAuthors => res.json({ authors: allAuthors }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// UNLESS IT'S NEEDED, WILL PULL A RANDOM DOCUMENT 
// module.exports.findRandomAuthor = (req, res) => {
//   //to find a random joke first - Get the count of all jokes
//   Author.count().exec(function (err, count) {
//     // Get a random entry
//     var random = Math.floor(Math.random() * count)
//     // Again query all Authors but only fetch one offset by our random #
//     Author.findOne().skip(random).exec((err, result) =>{
//         // Tada! random Author
//         console.log("THIS IS THE RESULT",result) 
//         if (err){
//           return res.json(err)
//         }
//         return res.json(result)
//     })
// })
// }

module.exports.findOneSingleAuthor = (req, res) => {
	Author.findOne({ _id: req.params._id })
		.then(oneSingleAuthor => res.json(oneSingleAuthor))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
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

module.exports.createNewAuthor = (request, response) => {
    console.log(request, request.body);
    Author.create(request.body)
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}

module.exports.updateExistingAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
  // .then(console.log("This is the requested Id:", req.params._id, "This is the body of the request:", req.body) )
    .then(updatedAuthor => res.json(updatedAuthor))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params._id })
    .then(result => res.json(result))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

//Unless it's needed
// module.exports.deleteAllAuthors = (req, res) =>{
//   Author.remove()
//   .then(result => res.json({result: result}))
//   .catch(err => res.json({message: "Something went wrong", error: err}));
// };