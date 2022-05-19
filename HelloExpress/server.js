const { request } = require("express");
const express = require("express");
const app = express();
const port = 8000; // This may not be needed


const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
    
app.get("/api/users", (req, res) => {
    res.json( users );
});

// This is how we get our post/form data
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json( { status: "Form data has been received" } );
});

// Different Type of Route Parameters Below


// Getting Data from a URL
// Any data you wish to pass via the URL must be indicated by a ':'.  
// It will then be available in the req.params object:
// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.id);
    // assuming this id is the index of the users array we could return one user this way
    res.json( "This is a response that GETs the User Id Param Route" , users[req.params.id] );
});

// Update Data
// With a put request, we can update data
app.put("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body;
    // we always need to respond with something
    res.json( { status: "ok" } );
});


// Deleting Data
// deleting data using a delete request.

app.delete("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    // we always need to respond with something
    res.json( { status: "ok" } );
});