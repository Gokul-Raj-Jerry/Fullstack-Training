import React, { Component } from "react";

class Digtime extends Component {
  state = { msg: "FIRE", msgg: "Water" };

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ msg: this.state.msg.toLowerCase() });
    }, 2000);
    setTimeout(() => {
      this.setState({ msgg: this.state.msgg.toString() });
    }, 2000);
  };
  render() {
    return (
      <div>
        <h1>Upper to Lower Case: {this.state.msg}</h1>
        <h1>Third Print: {this.state.msgg}</h1>
      </div>
    );
  }
}

export default Digtime;
