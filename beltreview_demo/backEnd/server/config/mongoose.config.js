const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/recipes_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("You're connected to the recipes databse"))
    .catch(err=>console.log("Your database connection failed", err))