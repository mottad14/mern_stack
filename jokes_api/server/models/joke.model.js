const { timeStamp } = require("console");
const mongoose = require("mongoose");

//mongoose.Schema takes an object as its parameter - the structure of this obejct is how each new document in the collection (in our Db will be formatted.)
const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "A setup line is required"],
		minlength: [2, "Your set up must be at least 2 characters long."]
	},
	punchline: {
		type: String,
		required: [true, "A punch line is required"],
		minlength: [2, "Your punch line must be at least 2 characters long."]
	},
}
, {timestamps: true});

//.model takes a blueprint object and creates the necessary database collection out of the model
const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;