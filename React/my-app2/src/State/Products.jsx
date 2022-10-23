import React, { Component } from "react";

class Products extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            <div className="card text-center h-100">
              <img
                src="https://www.pngmart.com/files/22/iPhone-14-PNG-Transparent.png"
                alt="/"
                width={200}
              />
              <div className="card-body">
                <h5 className="card-title">Iphone 14</h5>
                <p class="text-muted">The Ultimate Iphone</p>
                <div className="price pb-3">From $1200</div>
                <a href="/" className="btn btn-primary">
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
