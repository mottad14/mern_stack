const mongoose = require("mongoose");


//Below is the Database that we connect to with Mongoose 

mongoose.connect("mongodb://localhost/belt_exam_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to Belt Exam's backend & database"))
	.catch(err => console.log("Something went wrong when connecting to the Belt exam's backend & database", err));
