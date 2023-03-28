import React, { useState } from "react";

const Todo = () => {
  const [first, setfirst] = useState("");
  const [data, setData] = useState([]);

  function inputhandler(e) {
    setfirst(e.target.value);
  }

  function btnHandler() {
    setData([...data, first]);
    setfirst("");
  }

  return (
    <>
      <div className="container">
        <h1 className="text-white bg-success text-center">TODO LIST</h1>
        <input
          type="text"
          value={first}
          onChange={inputhandler}
          placeholder="Enter Items"
        />
        <button onClick={btnHandler}>ADD ME</button>
        {data.map((data) => (
          <li key={data}>{data}</li>
        ))}
      </div>
    </>
  );
};

export default Todo;
