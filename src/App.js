const Pet = (props) => {
return (
React.createElement("div", {}, [
React.createElement("h1", {}, props.name),
React.createElement("h2", {}, props.animal),
React.createElement("h2", {}, props.breed),
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
React.createElement(Pet, {
name: "Lenny!!",
animal: "Dog",
breed: "Goldendoodle",
}),
React.createElement(Pet, {
name: "Saorise!!",
animal: "Dog",
breed: "Mutt",
}),
React.createElement(Pet, {
name: "Bruce!!",animal: "Cat",breed: "Batman",
}),
]
);
};

// we'll call ReactDOM.render exactly once
// but we'll call React.createElement thousands of times
// heads up:  This will be renamed 'ReactDOM.createRoot' in React v18
ReactDOM.render(React.createElement(App), document.getElementById("root"));

// adding comments to fire Prettier