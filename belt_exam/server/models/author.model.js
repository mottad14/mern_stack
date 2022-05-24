const { timeStamp } = require("console");
const mongoose = require("mongoose");

//mongoose.Schema takes an object as its parameter - the structure of this obejct is how each new document in the collection (in our Db will be formatted.)
const AuthorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Author's name is required"], 
        minlength:[3, "Author's name must be at least 3 characters in length."]
	}
}, 
{timestamps: true});

//.model takes a blueprint object and creates the necessary database collection out of the model

module.exports.Author = mongoose.model("Author", AuthorSchema);