const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

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

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.imei(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(faker.name.gender()),
        _id: (Math.floor(Math.random()*9999))
    };
    return newUser;
};

const createCompany = () => {
    const newComp = {
        _id: (Math.floor(Math.random()*9999)),
        name: faker.company.companyName(),
        address:{
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state() ,
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    };
    return newComp;
};
// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeUser = createUser();
const newFakeComp = createCompany();
const newFakeProduct = createProduct();
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */

// req is short for request
// res is short for response

app.get("/api/users/new", (req, res) => {
  res.json({ newFakeUser });
});

app.get("/api/companies/new", (req, res) => {
  res.json({ newFakeComp });
});

app.get("/api/user/company", (req, res) => {
  res.json({ newFakeUser, newFakeComp });
});
