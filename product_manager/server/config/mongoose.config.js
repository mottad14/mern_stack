const mongoose = require("mongoose");


//Below is the Database that we connect to with Mongoose 

mongoose.connect("mongodb://localhost/product_manager_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to product_manager database"))
	.catch(err => console.log("Something went wrong when connecting to the product manager database", err));