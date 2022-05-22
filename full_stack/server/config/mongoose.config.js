const mongoose = require("mongoose");


//Below is the Database that we connect to with Mongoose 

mongoose.connect("mongodb://localhost/full_stack_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));