import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [submit, submitState] = useState("");

  function onchangeHandler(e) {
    setName(e.target.value);
  }

  function submitHandler(e) {
    submitState(name);
    e.preventDefault();  // important to give default prevent to browser
  }

  return (
    <>
      <div className="container pt-5 col-md-6">
        <form onSubmit={submitHandler}>
          <h1>Input Value: {name}</h1>
          <h1>After Submit Value: {submit}</h1>
          <input
            onChange={onchangeHandler}
            type="text"
            placeholder="Enter your Name"
            className="form-control"
            value={name}
          />
          <br />
          <button type="submit" className="btn btn-success">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
