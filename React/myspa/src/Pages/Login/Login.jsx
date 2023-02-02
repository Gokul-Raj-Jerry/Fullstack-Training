import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  return (
    <div>
      <section>
        <div className="m-5" style={{ backgroundColor: "white" }}>
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card bg-black text-white"
                  style={{ borderRadius: "1rem" }}
                >
                  <form>
                    <div className="card-body p-5 text-center">
                      <div className="mb-md-5 mt-md-4 pb-5">
                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                        <p className="text-white-50 mb-5">
                          Buddy enter your login and password!
                        </p>
                        <h1>onchange Event:{name}</h1>
                        <div className="form-outline form-white mb-4">
                          <input
                            onChange={handleChange}
                            value={name}
                            type="email"
                            placeholder="Enter your Gmail"
                            id="typeEmailX"
                            className="form-control form-control-lg border border-white"
                            borderradius="1rem white "
                          />
                          <label className="form-label" htmlFor="typeEmailX">
                            Email
                          </label>
                        </div>
                        <div className="form-outline form-white mb-4">
                          <input
                            type="password"
                            id="typePasswordX"
                            className="form-control form-control-lg border border-white"
                          />
                          <label className="form-label" htmlFor="typePasswordX">
                            Password
                          </label>
                        </div>
                        <p className="small mb-5 pb-lg-2">
                          <a className="text-white-50" href="#!">
                            Forgot password? Maradheteya
                          </a>
                        </p>
                        <button
                          className="btn btn-outline-light btn-lg px-5"
                          type="submit"
                        >
                          Login
                        </button>
                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                          <a href="#!" className="text-white">
                            <i className="fab fa-facebook-f fa-lg" />
                          </a>
                          <a href="#!" className="text-white">
                            <i className="fab fa-twitter fa-lg mx-4 px-2" />
                          </a>
                          <a href="#!" className="text-white">
                            <i className="fab fa-google fa-lg" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0">
                          Don't have an account?{" "}
                          <a href="#!" className="text-white-50 fw-bold">
                            Sign Up
                          </a>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  Katu boochi <br />
                  <span className="text-primary">for your business</span>
                </h1>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                  this is kaatu boochi store, all type of products vangum oraa
                  edam kattu pochi store. bla bla bla,{" "}
                  <b>Nambi vanga sandhoshama ponaga!</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
