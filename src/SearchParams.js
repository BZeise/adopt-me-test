import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const breeds = ["poodle", "Goldendoodle", "Mutt"];

const SearchParams = () => {
  //   const location = "Seattle, WA";
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          {/* React hooks simulate browser events.
          They can perform the work much faster than browsers can. */}
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}

            {/* NOTE:  Any time you have a list of data that you're turning into a list of components, use .map(). */}
          </select>
        </label>

        <label htmlFor="breed">
          breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((allBreed) => {
              return (
                <option key={allBreed} value={allBreed}>
                  {allBreed}
                </option>
              );
            })}

            {/* NOTE:  Any time you have a list of data that you're turning into a list of components, use .map(). */}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
