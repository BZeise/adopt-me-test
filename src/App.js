import React, { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Pet from "./Pet"; // now obsolete, only called by Results
import ThemeContext from "./ThemeContext";
import SearchParams from "./SearchParams";
import Details from "./Details";

// code goes here
// Command+/ to comment
const App = () => {
  const theme = useState("green");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Mehhhhhy!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
      {/* NOTE:  In JSX, we need the closing / at the end of the Pet tag */}
    </StrictMode>
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
