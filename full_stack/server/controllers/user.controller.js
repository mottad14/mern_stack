const { response } = require("express");
const User = require("../models/user.model");


//This is a test
module.exports.index = (request, response)=>{
  response.json({
    message: "Hello World"
  });
}


module.exports.findAllUsers = (req, res) => {
  User.find()
    .then(allUsers => res.json({ users: allUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findRandomUser = (req, res) => {
  //to find a random joke first - Get the count of all jokes
  User.count().exec(function (err, count) {
    // Get a random entry
    var random = Math.floor(Math.random() * count)
    // Again query all Users but only fetch one offset by our random #
    User.findOne().skip(random).exec((err, result) =>{
        // Tada! random User
        console.log("THIS IS THE RESULT",result) 
        if (err){
          return res.json(err)
        }
        return res.json(result)
    })
})
}

module.exports.findOneSingleUser = (req, res) => {
	User.findOne({ _id: req.params.id })
		.then(oneSingleUser => res.json({ user: oneSingleUser }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
  User.create(req.body)
    .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAllUsers = (req, res) =>{
  User.remove()
  .then(deletedUsers =>{
    //Logic if any for successfully removed deletedUsers object      
    })
}