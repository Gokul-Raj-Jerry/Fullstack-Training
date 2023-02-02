import React from "react";

export class Bind extends React.Component {
  state = {
    price: 20000,
  };

  btnHandler(value) {
    console.log("Reading button Data ......", value);
    this.setState({ price: 20000 + value });
  }

  render() {
    return (
      <div>
        <h1>Kiran payment : {this.state.price}</h1>
        <button onClick={this.btnHandler.bind(this, 10000)}>
          Increase 10K
        </button>
        <hr />
        <button onClick={this.btnHandler.bind(this, 20000)}>
          Increase 20k
        </button>
        <hr />
        <button onClick={this.btnHandler.bind(this, 0)}>Increase 0k</button>
      </div>
    );
  }
}

export default Bind;
