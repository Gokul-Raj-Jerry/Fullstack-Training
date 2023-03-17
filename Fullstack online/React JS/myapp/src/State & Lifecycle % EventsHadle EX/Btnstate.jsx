import React, { Component } from "react";

class Btnstate extends Component {
  constructor() {
    super();
    this.state = {
      btntxt: "Hello State",
    };
    this.btnclick = this.btnclick.bind(this);
  }
  btnclick() {
    this.setState({
      btntxt: "World set State",
    });
  }

  render() {
    const { btntxt } = this.state;
    return (
      <div>
        <button className="btn btn-danger" onMouseOver={this.btnclick}>
          {btntxt}
        </button>
      </div>
    );
  }
}

export default Btnstate;
