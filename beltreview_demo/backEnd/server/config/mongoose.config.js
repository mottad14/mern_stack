const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost.recipes_may2022",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("You're connected to the mongo databse"))
    .catch(err=>console.log("Your database connection failed", err))