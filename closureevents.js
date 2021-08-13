const createEvent = () => {
  const handlers = []; // holders handlers
  const on = (handler) => handlers.push(handler); // register handlers
  const emit = (data) => handlers.forEach((handler) => handler(data)); // emit event
  const clear = () => handlers.splice(0, handlers.length);

  return [on, emit, clear]; // return functions
};

const [on, emit, clear] = createEvent();

on((data) => console.log(data)); // register handler

emit({ cheese: "gouda" }); // emit event

clear(); // clear handlers
