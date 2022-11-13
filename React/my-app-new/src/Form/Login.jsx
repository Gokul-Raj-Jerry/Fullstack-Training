import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  emailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log(event.this.state);
  };
  render() {
    return (
      <div>
        <h1>Form Handleing</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                onChange={this.emailHandler}
              />
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="password"
                onChange={this.passwordHandler}
              />
              <br />
              <input type="submit" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
