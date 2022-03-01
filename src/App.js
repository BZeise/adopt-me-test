import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

// code goes here
// Command+/ to comment
const App = () => {
  return (
    <div>
      <h1>Adopt Mey!</h1>
      <SearchParams />

      {/* <Pet name="Lenneh!" animal="Dog" breed="Goldendoodle" />
      <Pet name="Saorise" animal="Dog" breed="Mutt" />
      <Pet name="Bruce Wayne" animal="Cat" breed="Batman" /> */}
      {/* NOTE:  In JSX, we need the closing / at the end of the Pet tag */}
    </div>
  );
};

render(<App />, document.getElementById("root"));

// const App = () => {
//   //  React wants to re-render these very frequently
//   // So, these functions have to be fast.
//   // They should be "pure", in functional programming lingo.
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Lenny!!",
//       animal: "Dog",
//       breed: "Goldendoodle",
//     }),
//     React.createElement(Pet, {
//       name: "Saorise!!",
//       animal: "Dog",
//       breed: "Mutt",
//     }),
//     React.createElement(Pet, {
//       name: "Bruce!!",
//       animal: "Cat",
//       breed: "Batman",
//     }),
//   ]);
// };

// we'll call ReactDOM.render exactly once
// but we'll call React.createElement thousands of times
// heads up:  This will be renamed 'ReactDOM.createRoot' in React v18
// ReactDOM.render(React.createElement(App), document.getElementById("root"));
// render(React.createElement(App), document.getElementById("root"));

// adding comments to fire Prettier
