//////////////////////////////////////
// Many To Many Schema/Models
//////////////////////////////////////
// One Owner has many dogs

// Schemas
const OwnerSchema = new Schema({
    name: String,
    age: Number
})
const DogSchema = new Schema({
    name: String,
    age: Number,
    owner: {type: Schema.Types.ObjectId, ref: "Owner"}
})
// Join Model
// Models
const Owner = model("Owner", OwnerSchema)
const Dog = model("Dog", DogSchema)

// Express Route to get all dogs from same owner
app.get("/dogs/:ownerID", async (req, res) => {
    const owner = await Owner.findById(req.params.ownerID)
    const dogs = await Dog.find({owner})
    res.json(dogs)
})

// Express Route to get all dogs with owner data
app.get("/dogs/", async (req, res) => {
    res.json(await Dog.find({}).populate("owner"))
})