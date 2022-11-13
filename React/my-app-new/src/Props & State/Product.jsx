import React, { Component } from "react";
import "../Props & State/prd.css";

class Product extends Component {
  render() {
    return (
      <div>
        <div className="row bg-secondary p-4">
          {/* Samsung */}
          <div className="col-md-3">
            <div className="card border border-5 border-primary text-center bg-light">
              <img
                src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-m536bzbeinu/gallery/in-galaxy-m53-5g-sm-m536-sm-m536bzbeinu-thumb-532180215?$320_320_PNG$"
                alt="/"
                width={200}
                className="mx-auto psize"
              />
              <div className="card-body">
                <h4 className="card-title">Samsung</h4>
                <p class="text-muted">Discover a wide range</p>
                <div className="price pb-3">From $1200</div>
                <a href="/" className="btn btn-primary">
                  Buy
                </a>
              </div>
            </div>
          </div>
          {/* Iphone */}
          <div className="col-md-3">
            <div className="card border border-5 border-primary text-center bg-light">
              <img
                src="https://www.pngmart.com/files/22/iPhone-14-PNG-Transparent.png"
                alt="/"
                width={175}
                className="mx-auto psize"
              />
              <div className="card-body">
                <h4 className="card-title">Iphone 14</h4>
                <p class="text-muted">The Ultimate Iphone</p>
                <div className="price pb-3">From $1600</div>
                <a href="/" className="btn btn-primary">
                  Buy
                </a>
              </div>
            </div>
          </div>
          {/* HUAWEI */}
          <div className="col-md-3">
            <div className="card border border-5 border-primary text-center bg-light">
              <img
                src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p30/P30_orange.png"
                alt="/"
                width={200}
                className="mx-auto psize"
              />
              <div className="card-body">
                <h4 className="card-title">HUAWEI</h4>
                <p class="text-muted">Leading global provider</p>
                <div className="price pb-3">From $1000</div>
                <a href="/" className="btn btn-primary">
                  Buy
                </a>
              </div>
            </div>
          </div>
          {/* OPPO */}
          <div className="col-md-3">
            <div className="card border border-5 border-primary text-center bg-light">
              <img
                src="https://www.pngmart.com/files/22/iPhone-14-PNG-Transparent.png"
                alt="/"
                width={200}
                className="mx-auto psize"
              />
              <div className="card-body">
                <h4 className="card-title">OPPO</h4>
                <p class="text-muted">Explore the latest innovative</p>
                <div className="price pb-3">From $800</div>
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

export default Product;
