import React from "react";

// function child component
// props.children can print data from tag content in parent class
const Myfun = (props) => {
  return (
    <>
      <div className="container pt-4 w-50">
        <div className="card-container square bg-primary rounded-9 text-white ">
          <div className="fw-bold card-header text-bold bg-info text-gradient">
            Function Props Child
          </div>
          <div className="card-body">
            <span className="card-title">{props.title}</span>
            <h6 className="card-text">{props.text}</h6>
            <h6 className="card-text">{props.children}</h6>
            <button className="btn btn-info rounded-pill">SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myfun;
