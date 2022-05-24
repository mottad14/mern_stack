const mongoose = require("mongoose");


//Below is the Database that we connect to with Mongoose 

mongoose.connect("mongodb://localhost/authors_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to Author's backend & database"))
	.catch(err => console.log("Something went wrong when connecting to the Author's backend & database", err));
