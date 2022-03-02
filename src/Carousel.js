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
}

// for example --
console.log(Carousel.defaultProps);
// this will always be the same
// notice that the property is of the class Carousel, not referring to a specific instance of that class

export default Carousel;
