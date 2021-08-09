///////////////////////////////////
//EXPRESS REFERENCE
// Express Video 1: https://youtu.be/6eW8cHXg7ow
// Express Video 2: https://youtu.be/sTseIaapIBM
//////////////////////////////////
require("dotenv").config() // <--- load environmental variables from .env file
const express = require("express"); //<--- import express library
const morgan = require("morgan"); // <--- import morgan library for logging
const cors = require("cors"); // <---- import cors middleware
const Dog = require("./models/dog.js"); // hypothetical Dog model made with Mongo/Mongoose


// create express application
const app = express();

// Express Middleware, registered using "use" method
app.use(cors()); // set cors headers so frontend app can make requests to api without cors errors
app.use(morgan("dev")); // server logging for debugging
app.use(express.json()); //middleware for parsing incoming JSON request bodies
app.use(express.urlencoded({ extended: false })); // middleware for parsing urlencoded bodies from html forms
app.use(express.static("public")); // middleware to statically serve files from a "public" folder

// root route, returning hello world as text
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Mongoose code can be written using callbacks, async/await or .then, examples of each below

// Index Route - Return All Dogs as JSON
// Using Mongoose with Async/Await
app.get("/dogs", async (req, res) => {
  // Try/Catch block for error handling
  try {
    const allDogs = await Dog.find({}); // query all dogs
    res.json(allDogs); // send all dogs back as json
  } catch (error) {
    res.status(400).json(error); // if error, send error back as json
  }
});

// Show Route - Return a Single Dog as JSON
// Using Mongoose with .then syntax
app.get("/dogs/:id", (req, res) => {
  Dog.findById(req.params.id) // pass the id from params to find dog by it's DB id
    .then((dog) => {
      res.json(dog);
    }) // send dog as json
    .catch((error) => {
      res.status(400).json(error);
    }); // if query errors send error as json
});

// Create Route - Create a dog from data in request body
// using mongoose with callback syntax
app.post("/dogs", (req, res) => {
  // create a new dog from the request body, then in callback return new dog as json
  Dog.create(req.body, (error, success) => {
    if (error) {
      res.status(400).json(error); // return error from json
    } else {
      res.json(success); // send back dog from successful creation
    }
  });
});

// Update Route - update a dog from data in the request, which dog based on param
// using async/await
app.put("/dogs/:id", async (req, res) => {
  // get id
  const id = req.params.id;
  // try/catch block for error handling
  try {
    // update dog, pass new option to get back updated version
    const updatedDog = await Dog.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedDog); // return updated dog as json
  } catch (error) {
    res.status(400).json(error);
  }
});

// Destroy Route - delete a dog, which dog based on param
// using async/await
app.delete("/dogs/:id", async (req, res) => {
  // get id
  const id = req.params.id;
  // try/catch block for error handling
  try {
    // delete dog and save deleted dog in a variable
    const deletedDog = await Dog.findByIdAndRemove(id);
    res.json(deletedDog); // return updated dog as json
  } catch (error) {
    res.status(400).json(error);
  }
});

// Turning on the application server, setting it to listen to the
// environment variable "PORT"
const PORT = process.env.PORT || 4000 // use PORT env variable or 4000 if doesn't exist
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))