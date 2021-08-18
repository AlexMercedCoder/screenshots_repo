class Renderer {
  // use contstructor to set state
  constructor(state) {
    this.state = state || {};
  }
  // function to parse and rebuild template string
  parse(strings, ...injections) {
    return strings.reduce((acc, item, index) => {

      if (injections[index]) {
        return acc + item + this.state[injections[index]];
      } else {
        return acc + item;
      }
    }, "");
  }
}
// create a renderer instance
const C = new Renderer({ name: "Alex", word: "world"});
// tag a template literal with the parse function
const result = C.parse`Hey ${"name"} this is the ${"word"}, yeah!`;
// log the result
console.log(result)
