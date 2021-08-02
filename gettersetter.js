////////////////////////////////////////////
// Automating Tasks when Changing Values
////////////////////////////////////////////
// +& Do you want other tasks to be triggered when you update a variable?
// +& Use functions closures to create getters and setters
// +& The setter can do other things when it updates the value
// +& This is how frameworks like React and SolidJS work

const createValue = (initialValue) => {

    // Variable
    let value = initialValue

    // getter
    const getValue = () => value

    // setter
    const setValue = (newValue) => {
        // check if the value actually changed
        if (newValue !== value){
            value = new value // set the new value
            console.log("the value changed") // put any additional logic here
        }
    }

    // return the functions as an array to destructure
    return [getValue, setValue]
}

const [getValue, setValue] = createValue(5)

console.log(getValue()) // retrieve value
setValue(6) // change the value along with additional logic
console.log(getValue())