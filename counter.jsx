import {useState} from "react"

function Counter(props){

    const [count, setCount] = useState(0)
    const addOne = () => setCount(count+1)

    return <div>
        <h1 style={{color: "red"}}>{count}</h1>
        <button onClick={addOne}>add one</button>
    </div>
}

export default Counter