import React, { useState } from "react";

const Todoapp = () => {
  // state hook - useState
  const [newItem, setNewItem] = useState("");
  const [items, setItem] = useState([]);

  // helper fuction
  function addItem() {
    if (!newItem) {
      alert("Enter Item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItem((oldList) => [...oldList, item]);
    setNewItem("");
    console.log(item);
  }

  function delitem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItem(newArray);
  }

  return (
    <>
      <div className="App container col-md-6 mt-2">
        {/* 1. Header */}
        <h1 className="text-center">TODO LIST APP</h1>

        {/* 2. Input & button */}
        <div className="input-group  mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add Items...."
            aria-label="Add Items..."
            aria-describedby="button-addon2"
            onChange={(e) => setNewItem(e.target.value)}
            value={newItem}
          />
          <button
            className="btn btn-outline-primary"
            type="button"
            id="button-addon2"
            onClick={addItem}
          >
            Add ITEMS
          </button>
        </div>

        {/* 3. LIst of items ul with items */}
        <ul className="list-group list-group-flush">
          {items.map((item) => {
            return (
              <li className="list-group-item" key={item.id}>
                {item.value}{" "}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => delitem(item.id)}
                >
                  Delete
                </button>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Todoapp;
