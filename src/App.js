const Pet = () => {
    return (
        React.createElement("div", {}, [
            React.createElement("h1", {}, "Lenny!"),
            React.createElement("h2", {}, "Dog"),
            React.createElement("h2", {}, "Goldendoodle"),
        ])
    )
}

// code goes here
// ohhhh yeah that's way better
// ohhhhh so hot
//  Command+/ to comment
const App = () => {
    //  React wants to re-render these very frequently
    // So, these functions have to be fast.
    // They should be "pure", in functional programming lingo.
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet)
        ]
    );
};

// we'll call ReactDOM.render exactly once
// but we'll call React.createElement thousands of times
// heads up:  This will be renamed 'ReactDOM.createRoot' in React v18
ReactDOM.render(React.createElement(App), document.getElementById("root"));