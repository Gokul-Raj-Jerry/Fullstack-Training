import React, { Component } from "react";

class State extends Component {
  state = {
    name: "Tesla",
    img: (
      <img
        width={200}
        height={300}
        src="https://www.lifewire.com/thmb/gI4cjptrifkXEhzBLE5QtBww8_Q=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Teslaphonerenderingsideandbackview_AntonioDeRosa_ADRStudio-e696473bff454836a145b8adf45ac321.jpg"
        alt="Img"
      />
    ),
    imgt: (
      <img
        width={200}
        height={300}
        src="https://www.lifewire.com/thmb/3Z16IndWRRC7rqp3KYzspvXiqAI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TeslaStarlinkrendering_AntonioDeRosa_ADRStudio-29b07628742f4a41a29a462c699c0ccd.jpg"
        alt="Img"
      />
    ),
    price: 2000,
    qty: 1,
  };

  incplus = () => {
    this.setState({ qty: this.state.qty + 1 });
    console.log("Hello");
  };
  incminus = () => {
    this.setState({ qty: this.state.qty - 1 });
  };

  render() {
    return (
      <div>
        <h2 className="pt-2 m-2 bg-secondary text-white text-center">
          Tesla Satellite Phone
        </h2>
        <div className="card">
          <div className="row">
            <div className="col-md-4">
              {this.state.img}
              {this.state.imgt}
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h2 className="card-title">Tesla Phone Features</h2>
                <p className="card-text">
                  <ul>
                    <li>Satellite internet</li>
                    <li>Solar charging</li>
                    <li>Vehicle control</li>
                    <li>Astrophotography</li>
                    <li>Crypto mining</li>
                    <li>Neuralink support</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="table">
                  <thead className="table table-dark">
                    <tr>
                      <th>Brand</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total Price</th>
                      <th>Discount 25%</th>
                    </tr>
                  </thead>
                  <tbody className="table table-info">
                    <tr>
                      <td>{this.state.name}</td>
                      <td>{this.state.price}</td>
                      <td>
                        <i
                          className="fa fa-minus-circle"
                          onClick={this.incminus}
                        ></i>
                        {this.state.qty}
                        <i
                          className="fa fa-plus-circle"
                          onClick={this.incplus}
                        ></i>
                      </td>
                      <td>{this.state.qty * this.state.price}</td>
                      <td>{this.state.qty * this.state.price * 0.25}</td>
                    </tr>
                  </tbody>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default State;
