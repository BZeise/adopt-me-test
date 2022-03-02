// NOTE:  This is a valid pattern, but we won't follow it.  Let's extend individual components
// import React from 'react';

// class Carousel extends React.Component {

// }

import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  // if we have nothing, we want to show a placeholder
  // all Carousels will share one `defaultProps` here
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  //   handleIndexClick(event) {
  //     console.log(this); // shows that `this` is undefined
  //   }

  handleIndexClick = (event) => {
    console.log(this); // works because function was declared with arrow notation
    this.setState({
      active: +event.target.dataset.index,
    });
    // using unary + to force a number instead of string
    // could also use Number.Parse(int, xyz), and many others
  };

  //always need a render, right?  For WHICH types of components?  TODO:  Answer this
  render() {
    // remember -- child components don't affect things on the parents.  that's a feature of React.
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // for accessibility, this shouldn't be a clickable <img>
            // it should be wrapped in a <button> or something
            // but for now...
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

// for example --
console.log(Carousel.defaultProps);
// this will always be the same
// notice that the property is of the class Carousel, not referring to a specific instance of that class

export default Carousel;
