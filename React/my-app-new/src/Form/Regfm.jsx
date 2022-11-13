import React, { Component } from "react";

class Regfm extends Component {
  state = {
    userName: "",
    email: "",
    mobile: "",
  };
  updateHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = () => {};

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <h1>Regestration From</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="col-md-6">
              <form className="form">
                <input
                  type="text"
                  onChange={this.updateHandler}
                  name="userName"
                />{" "}
                <br />
                <br />
                <input
                  type="email"
                  onChange={this.updateHandler}
                  name="email"
                />
                <br />
                <br />
                <input
                  type="number"
                  onChange={this.updateHandler}
                  mobile="mobile"
                />
                <br />
                <br />
                <input
                  className="btn btn-primary"
                  type="submit"
                  onSubmit={this.submitHandler}
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Regfm;
