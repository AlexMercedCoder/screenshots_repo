////////////////////////////////////
// Get request to index route
////////////////////////////////////

//.then

fetch("/model")
  .then((response) => response.json())
  .then((data) => {
    // use data here
  });

axios("/model").then((data) => {
  // use data here, api response in data.data
});

// async/await - await is only used in an async function

const index = async () => {
  const response = await fetch("/model");
  const data = await response.json();
  // use the data here
};
index();

const index = async () => {
  const data = await axios("/model");
  // use the data here
};
index();

////////////////////////////////////////////
// Create Post Request
////////////////////////////////////////////
//.then

fetch("/model", {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
})
  .then((response) => response.json())
  .then((data) => {
    // use data here
  });

axios({
  url: "/model",
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  data: JSON.stringify(body),
}).then((data) => {
  // use data here, api response in data.data
});

// async/await - await is only used in an async function

const create = async () => {
  const response = await fetch("/model", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  // use the data here
};
create();

const create = async () => {
  const data = await axios({
    url: "/model",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(body),
  });
  // use the data here
};
create();

////////////////////////////////////////////
// Update Put Request
////////////////////////////////////////////
//.then

fetch("/model/:id", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      // use data here
    });
  
  axios({
    url: "/model/:id",
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(body),
  }).then((data) => {
    // use data here, api response in data.data
  });
  
  // async/await - await is only used in an async function
  
  const update = async () => {
    const response = await fetch("/model/:id", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    // use the data here
  };
  update();
  
  const update = async () => {
    const data = await axios({
      url: "/model/:id",
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(body),
    });
    // use the data here
  };
  update();

  ////////////////////////////////////////////
// UDestroy Delete Request
////////////////////////////////////////////
//.then

fetch("/model/:id", {
    method: "delete"
  })
    .then((response) => response.json())
    .then((data) => {
      // use data here
    });
  
  axios({
    url: "/model/:id",
    method: "delete"
  }).then((data) => {
    // use data here, api response in data.data
  });
  
  // async/await - await is only used in an async function
  
  const destroy = async () => {
    const response = await fetch("/model/:id", {
      method: "delete"
    });
    const data = await response.json();
    // use the data here
  };
  destroy();
  
  const destroy = async () => {
    const data = await axios({
      url: "/model/:id",
      method: "delete"
    });
    // use the data here
  };
  destroy();