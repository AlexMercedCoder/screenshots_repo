// +& Screenshot from Alex Merced of AlexMercedCoder.com/devNursery.com
// The Child Components receive a single or array of items as props.children
function ChildComponent (props){
    return <div>
        <h1>Items within the open and closing tags will be below this</h1>
        {props.children}
        <h1>Items within the open and closing tags will be above this</h1>
    </div>
}

function ParentComponent (props){
    return <ChildComponent>
        <h1>I would be passed to Child Component as props.children</h1>
        <div>
            Since I'd be an adjacent tag, I'd get passed as a separate JSX element in
            the props.children array. The h1 would be the props.children[0] and this
            div would be props.children[1]
        </div>
        {
            // Non-JSX values can also be passed, just need to be wrapped in curly brackets
            () => <h1>I'm a function being passed through props.children[2]</h1>
        }
    </ChildComponent>
}