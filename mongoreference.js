//////////////////////////////////
// Mongo/Mongoose Reference
// Video: https://youtu.be/_nvIGmI_zS0
/////////////////////////////////
require("dotenv").config() // <-- load ENV variables from .env file
const mongoose = require("mongoose")

// get database url from env variables
const DATABASE_URL = process.env.DATABASE_URL

// Mongoose config object to avoid deprecation warnings
const config = {useNewUrlParser: true, useUnifiedTopology: true}

// Connect to Mongo Database
mongoose.connect(DATABASE_URL, config)

// Setup Events for when connection opens and close
mongoose.connection
.on("open", () => console.log("Mongo Connection is Open"))
.on("close", () => console.log("Mongo Connection is Closed"))
.on("error", (error) => console.log("error ------- \n", error, "\n error ------- "))

// Pull out the Schema class and model functions from mongoose
const {Schema, model} = mongoose

// create a Schema that describes the shape our Dog data model
// we'll also togged on "created_at" and "updated_at" timestamps
const DogSchema = new Schema({
    name: {type: String, required: false, unique: false},
    age: {type: Number, required: false, unique: false}
}, {timestamps: true})

// Create a Dog model we can then use in server routes to interact with database
const Dog = model("dog", DogSchema)

// export the model to be used in other files
module.exports = Dog