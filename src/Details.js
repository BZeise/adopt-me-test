import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

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
  // constructor(props) {
  //   super(props); // SUPERPROPSSSSS

  //   this.state = { loading: true };
  // }

  //replace above with:
  state = { loading: true, showModal: false };
  // we can do this because we've begun to use .babelrc with the class-properties transpiler

  async componentDidMount() {
    // after the initial Render is complete, we'll call componentDidMount

    // fetch is a function built-in to browsers
    // more than powerful enough for simple GETs
    // it's a little funny to call `await` twice, but we get used to it
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );

    const json = await res.json();

    // we used to call useState.  but now we just have one function, "setState"
    //this.setState(Object.assign({ loading: false }, json.pets[0]));

    //replace Object.assign with the spread operator:
    this.setState({ loading: false, ...json.pets[0] });

    // this.setState({
    //   loading: false,
    // });

    // this.setState(json.pets[0]);
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  // the only rule of class components is that they must have a Render function
  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    // desconstruct here
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} -- {breed} -- {city}, {state}
          </h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                {" "}
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <button>Another button to Adopt {name}</button>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <a href="https://bit.ly/pet-adopt">Yes</a>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  // return <Details params={params} />;
  return (
    <ErrorBoundary>
      <Details params={params} />;
    </ErrorBoundary>
  );
};

//export default Details;
export default WrappedDetails;

// this is a lot more direct than higher-order components
// just using a hook and passing the params through there
