import React from "react";
import Btnstate from "./Btnstate";

class CounterState extends React.Component {
  constructor(props) {
    super(props);
    // must initialiize state first
    this.state = { count: 0 }; // State - Object data.
    // This binding is necessary to make `this` work in the callback
    this.funClick = this.funClick.bind(this);
    this.misClick = this.misClick.bind(this);
  }

  funClick() {
    this.setState({ count: this.state.count + 5 });
  }
  misClick() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button className="btn btn-success" onClick={this.funClick}>
          CLICK
        </button>
        <button className="btn btn-warning" onMouseOver={this.misClick}>
          Minus
        </button>
        <br /> <hr />
        <Btnstate />
      </>
    );
  }
}

export default CounterState;
