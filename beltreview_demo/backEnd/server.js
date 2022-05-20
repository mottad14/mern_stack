const express = require("express");
const app = express();
const port = 8000;
app.use(express.json(), express.urlencoded({extended:true})); // for Post
//connecting with front end
const cors = require("cors");
app.use(cors());


require("./server/config/mongoose.config") // Gets our Mongoose communicating with MongoDb
require("./server/routes/recipe.routes")(app);

app.listen(port, ()=> console.log(`Time to serve up some hot recipes on port ${port}!!`));
