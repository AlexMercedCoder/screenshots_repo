/////////////////////////////////////
//Event Emitters
//Events Work By One Function Emitting an Event
//Then Related functions being executed
//Below is a simplified events class
/////////////////////////////////////
class Evntr {
  events = {};
  on(event, handler) {
    if (this.events[event]) {
      // check if event has an array
      this.events[event].push(handler); // if so, push handler into array
    } else {
      this.events[event] = [handler]; //if not, create fresh array with handler
    }
  }

  emit(event) {
    if (this.events[event]) {
      // check if handlers exist for this event
      this.events[event].forEach((handler) => handler()); // run each handler
    }
  }
}
const eventr = new Evntr();
eventr.on("click", () => {
  console.log("I respond when click is emitted");
});
eventr.emit("click");
