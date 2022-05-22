const { timeStamp } = require("console");
const mongoose = require("mongoose");

//mongoose.Schema takes an object as its parameter - the structure of this obejct is how each new document in the collection (in our Db will be formatted.)
const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	price: {
		type: Number,
	},
	description: {
		type: String,
	}
}, 
{timestamps: true});

//.model takes a blueprint object and creates the necessary database collection out of the model

module.exports.Product = mongoose.model("Product", ProductSchema);;
