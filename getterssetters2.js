// +& Screenshot by AlexMerced of AlexMercedCoder.com
// +^ How to create property getters and setters to improve use of closures

const createValue = (initial, callback) => {
    valueObject = {
        rawValue: initial, // the actual property that stores the state
        get value(){
            return this.rawValue // returns raw value when you access value
        },
        set value(newVal){
            // when you assign to value, updates rawValue and runs render function
            this.rawValue = newVal
            this.render(this.value)
        },
        render(value){
            // logs the value passed
            console.log("render function runs:", value)
            callback(value)
        }
    }

    return valueObject
}

let item = createValue(1, (v) => console.log("callback runs:", v))
console.log(item.value)
item.value = 2
console.log(item.value)