///////////////////////////////////////
// Writing the Index Route all three ways
// (Callback,.then, async/await)
///////////////////////////////////////

// callback
app.get("/dogs", (req, res) => {
  Dog.find({}, (err, data) =>
    err ? res.status(400).json(err) : res.json(data)
  );
});

// .then
app.get("/dogs", (req, res) => {
  Dog.find({})
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

// async/await
app.get("/dogs", async (req, res) => {
  res.json(await Dog.find({}).catch((err) => res.status(400).json(err)));
});

///////////////////////////////////////
// Writing the Show Route all three ways
// (Callback,.then, async/await)
///////////////////////////////////////

// callback
app.get("/dogs/:id", (req, res) => {
  Dog.findById(req.params.id, (err, data) =>
    err ? res.status(400).json(err) : res.json(data)
  );
});

// .then
app.get("/dogs/:id", (req, res) => {
  Dog.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

// async/await
app.get("/dogs/:id", async (req, res) => {
  res.json(
    await Dog.findById(req.params.id).catch((err) => res.status(400).json(err))
  );
});

///////////////////////////////////////
// Writing the Create Route all three ways
// (Callback,.then, async/await)
///////////////////////////////////////

// callback
app.post("/dogs", (req, res) => {
  Dog.create(req.body, (err, data) =>
    err ? res.status(400).json(err) : res.json(data)
  );
});

// .then
app.post("/dogs", (req, res) => {
  Dog.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

// async/await
app.post("/dogs", async (req, res) => {
  res.json(
    await Dog.create(req.body).catch((err) => res.status(400).json(err))
  );
});

///////////////////////////////////////
// Writing the Update Route all three ways
// (Callback,.then, async/await)
///////////////////////////////////////

// callback
app.put("/dogs/:id", (req, res) => {
    Dog.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, data) =>
      err ? res.status(400).json(err) : res.json(data)
    );
  });
  
  // .then
  app.put("/dogs/:id", (req, res) => {
    Dog.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err));
  });
  
  // async/await
  app.put("/dogs/:id", async (req, res) => {
    res.json(
      await Dog.findByIdAndUpdate(req.params.id, req.body, {new: true}).catch((err) => res.status(400).json(err))
    );
  });

///////////////////////////////////////
// Writing the Destroy Route all three ways
// (Callback,.then, async/await)
///////////////////////////////////////

// callback
app.delete("/dogs/:id", (req, res) => {
    Dog.findByIdAndRemove(req.params.id, (err, data) =>
      err ? res.status(400).json(err) : res.json(data)
    );
  });
  
  // .then
  app.delete("/dogs/:id", (req, res) => {
    Dog.findByIdAndRemove(req.params.id)
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err));
  });
  
  // async/await
  app.delete("/dogs/:id", async (req, res) => {
    res.json(
      await Dog.findByIdAndRemove(req.params.id).catch((err) => res.status(400).json(err))
    );
  });
