import React, { Component } from "react";

// function class component
// this.props.children can print data from tag content in parent class
class Myclass extends Component {
  render() {
    return (
      <>
        <div className="container pt-4 w-50">
          <div className="card-container square bg-dark rounded-9 text-white ">
            <div className="fw-bold card-header text-bold bg-warning text-gradient">
              Class Props Child
            </div>
            <div className="card-body">
              <span className="card-title">{this.props.title}</span>
              <h6 className="card-text">{this.props.text}</h6>
              <h6 className="card-text">{this.props.children}</h6>
              <button className="btn btn-info rounded-pill">SUBMIT</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Myclass;
