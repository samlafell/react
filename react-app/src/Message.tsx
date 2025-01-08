// PascalCasing -- for components
function Message () {
    // What will the UI look like whenever we render this component
    const name = 'Sam';
    if (name)
        return <h1> Hello {name}!</h1>;
    return <h1> Hello World!</h1>;
}

export default Message;