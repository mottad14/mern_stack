const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
require("./server/routes/user.routes")(app);
require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());


// app.get("/api", (req, res) => {
//   res.json({
//     message: "Our express api server is now sending this over to the browser"
//   });
// });

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
