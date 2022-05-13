const express = require("express");
//Above line imports express
const app = express()
//We're importing express - and everything that runs in the server is going to run 
// through this app variable
const port = 8000;

//You can decide what kind of route the User will receive - it can be a Get route (app.get) - or a post route (app.post), put, patch, delete
app.get("/api/test", (req, res)=>{
    //take in request, send out response
    console.log("hey it's the function here!");


    res.json({message:"hey I'm responding here!"}) //this should go at the end and only once - it will be what you send out - this could send out an array or objects
})
// In the above function call - the First parameter is the route, second is a callback function with request & response parameters

//Below, a new route - repeater function the ':' acts as an input
app.get("/repeater/:word", (req, res)=> {
    res.json({repeat: `your word was: ${req.params.word}`}) //this line requests to use the word that was passed into the route - it places it in an object with key called "Repeat"
})



//When we start our server - makes sure it looks good, and runs this function when server finally runs 
//Tells us a message to make sure we know server is running
app.listen(port, ()=>console.log(`Running on port ${port} - let's go, my dude.`));

