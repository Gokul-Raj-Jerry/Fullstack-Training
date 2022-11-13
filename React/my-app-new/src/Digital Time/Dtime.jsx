import React, { Component } from "react";

class Dtime extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }
  componentDidMount = () => {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  };

  render() {
    return (
      <div>
        <h1>Digial Time {this.state.time}</h1>
      </div>
    );
  }
}

export default Dtime;
