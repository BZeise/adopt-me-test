import { Component, useEffect } from "react";
import { useParams } from "react-router-dom";

// const Details = () => {
//   const { id } = useParams();
//   // Using BrowserRouter
//   // because I'm a route, I know I can pull parameters from the URL
//   // so I know what my id is, because we've assigned it
//   return <h2>ohhhhh sweet! Check out these DEETS!! ID = {id}</h2>;
// };

class Details extends Component {
  // you can't use hooks in class components
  // so the first thing we do is write a constructor
  // constructor takes in `props`
  constructor(props) {
    super(props); // SUPERPROPSSSSS

    this.state = { loading: true };
  }

  async componentDidMount() {
    // after the initial Render is complete, we'll call componentDidMount

    // fetch is a function built-in to browsers
    // more than powerful enough for simple GETs
    // it's a little funny to call `await` twice, but we get used to it
    const res = await fetch()(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );

    const json = await res.json();

    // we used to call useState.  but now we just have one function, "setState"
    this.setState(Object.assign({ loading: false }, json.pets[0]));

    // this.setState({
    //   loading: false,
    // });

    // this.setState(json.pets[0]);
  }

  // the only rule of class components is that they must have a Render function
  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    // desconstruct here
    const { animal, breed, city, state, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} -- {breed} -- {city}, {state}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  return <Details params={params} />;
};

//export default Details;
export default WrappedDetails;

// this is a lot more direct than higher-order components
// just using a hook and passing the params through there
