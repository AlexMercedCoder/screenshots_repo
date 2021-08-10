//////////////////////////////////////
// One To Many Schema/Models
//////////////////////////////////////
// Parents have many babies and babies have many parents

// Schemas
const ParentSchema = new Schema({
    name: String,
    age: Number
})
const BabySchema = new Schema({
    name: String,
    age: Number,
})
const ParentBabySchema = new Schema({
    parent: {type: Schema.Types.ObjectId, ref: "Parent"},
    baby: {type: Schema.Types.ObjectId, ref: "Baby"}
})
// Models
const Parent = model("Parent", ParentSchema)
const Baby = model("Baby", BabySchema)
const ParentBaby = model("ParentBaby", ParentBabySchema)

// Express Route to get all babies of a parent
app.get("/children/:parentID", async (req, res) => {
    const parent = await Parent.findById(req.params.parentID)
    const babies = await ParentBaby.find({parent}).populate("baby")
    res.json(babies)
})

// Express Route to get all parents of a baby
app.get("/parents/:babyID", async (req, res) => {
    const baby = await Baby.findById(req.params.babyID)
    const parents = await ParentBaby.find({baby}).populate("parent")
    res.json(parents)
})