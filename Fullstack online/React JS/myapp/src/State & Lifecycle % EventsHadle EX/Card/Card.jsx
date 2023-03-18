import React, { Component } from "react";

export class Card1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: "Kick",
      info: [
        { title: "Rider", text: "Single Bike stunt rider" },
        { title: "Artist", text: "Best Artist" },
        { title: "Creator", text: "Inovative creator" },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="container pt-4 w-50">
          <div className="card-container square bg-secondary rounded-9 text-white ">
            <div className="fw-bold card-header text-bold bg-primary text-gradient">
              State & Lifecyle method
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  TOM:{" "}
                  <span>
                    {this.state.info[0].title}
                    {this.state.info[0].text}
                  </span>
                </li>
                <li className="list-group-item">
                  Jerry:
                  <span>
                    {this.state.info[1].title}
                    {this.state.info[1].text}
                  </span>{" "}
                </li>
                <li className="list-group-item">
                  Popeye:{" "}
                  <span>
                    {this.state.info[2].title}
                    {this.state.info[2].text}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card1;
