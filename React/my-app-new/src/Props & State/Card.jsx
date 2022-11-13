import React, { Component } from "react";

class Card extends Component {
  state = {
    name: "Punching Bag",
    price: 5000,
    qty: 1,
    img: (
      <img
        src="https://images.pexels.com/photos/980437/pexels-photo-980437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="puncing bag"
        width={200}
      />
    ),
  };

  incPrice = () => {
    this.setState({ qty: this.state.qty + 1 });
  };
  dcrPrice = () => {
    this.setState({ qty: this.state.qty - 1 });
  };

  render() {
    return (
      <div>
        <h1>Punching Bag</h1>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <table className="table">
                <thead className="table table-dark">
                  <tr>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Discount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.name}</td>
                    <td>{this.state.img}</td>
                    <td>
                      <i
                        className="fa fa-minus-circle"
                        onClick={this.dcrPrice}
                      ></i>
                      {this.state.qty}
                      <i
                        className="fa fa-plus-circle"
                        onClick={this.incPrice}
                      ></i>
                    </td>
                    <td>{this.state.price}</td>
                    <td>{this.state.qty * this.state.price}</td>
                    <td>{this.state.qty * this.state.price * 0.25}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
