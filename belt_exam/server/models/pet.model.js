const { timeStamp } = require("console");
const mongoose = require("mongoose");

//mongoose.Schema takes an object as its parameter - the structure of this obejct is how each new document in the collection (in our Db will be formatted.)
const PetSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please give your pet a name"], 
        minlength:[3, "Pet's name must be at least 3 characters in length."]
	},
    type: {
        type: String,
		required: true, 
        minlength:[3, "Pet type must be at least 3 characters in length."] 
    },
    description: {
        type: String,
		required: true, 
        minlength:[3, "Pet description must be at least 3 characters in length."] 
    }, 
    skill1: String,
    skill2: String,
    skill3: String
}, 
{timestamps: true});

//.model takes a blueprint object and creates the necessary database collection out of the model
const Pet = mongoose.model("Pet", PetSchema)
module.exports = Pet;