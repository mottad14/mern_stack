const { timeStamp } = require("console");
const mongoose = require("mongoose");

//mongoose.Schema takes an object as its parameter - the structure of this obejct is how each new document in the collection (in our Db will be formatted.)
const UserSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: [true, "First name is required"],
		minlength: [2, "First name must be at least 2 characters long."]
	},
	last_name: {
		type: String,
		required: [true, "Last name is required"],
		minlength: [2, "Last name must be at least 2 characters long."]
	},

	DOB: {
		type: Date,
		// max: (Date.now - 13)
		//Find a way to add the max age to be 13 years from today's date.
	},

	email: {
		type: String,
		required: [true, "Email is required"]
	}
}
, {timestamps: true});

//.model takes a blueprint object and creates the necessary database collection out of the model
const User = mongoose.model("User", UserSchema);

module.exports = User;