import React, { useState } from "react";

const Register = () => {
  const [typeValue, setTypeValue] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const changeHandle = (event) => {
    setTypeValue({ ...typeValue, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className="container-mt-3">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header bg-primary text-dark text-center">
                <h1>Login Form</h1>
              </div>

              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label className="h3">First Name</label>
                    <input
                      className="form-control"
                      type="firstname"
                      name="firstname"
                      placeholder="Enter Full Name"
                      onChange={changeHandle}
                      value={typeValue.firstName}
                      autoComplete= "on"
                    />
                    {/* <input
                      className="form-control"
                      type="firstname"
                      name="firstname"
                      placeholder="Enter Full Name"
                      onChange={changeHandle}
                      value={typeValue.firstName}
                    /> */}
                  </div>
                  <div className="form-group">
                    <label className="h3">Last Name</label>
                    <input
                      className="form-control"
                      type="lastname"
                      name="lastname"
                      placeholder="Enter Last Name"
                      onChange={changeHandle}
                      value={typeValue.lastName}
                    />
                  </div>
                  <div className="form-group">
                    <label className="h3">Username</label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Username"
                      onChange={changeHandle}
                      value={typeValue.username}
                    />
                  </div>
                  <div className="form-group">
                    <label className="h3">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      onChange={changeHandle}
                      value={typeValue.password}
                    />
                  </div>
                  <div className="form-group form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="h5 form-check-label">Accept</label>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
