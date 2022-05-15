const express = require("express");
const app = express();
const port = 8000;
//In order to accept post requests, we need to do the following:
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/api/test", (req, res) => {
    res.json({message: "hey it's the test right here!!"})
})

app.post("/api/post/repeat", (req, res) => {    //req.body in this case will print out 
    console.log(req.body);
    res.json({message: "MESSAGE RECEIVED"})
})


app.listen(port, ()=>console.log(`currently running on port ${port}`))