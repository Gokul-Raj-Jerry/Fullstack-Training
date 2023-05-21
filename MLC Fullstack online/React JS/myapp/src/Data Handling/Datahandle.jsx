import React from "react";

const Datahandle = () => {
  // array data
  /*   let uData = [
    { id: 1, name: "John" },
    { id: 2, name: "Harry" },
    { id: 3, name: "Peter" },
    {
      id: 4,
      name: "Peter",
      skill: [{ Tech: "Front end" }, { Tech: "Front end" }],
    },
  ]; */
  /*   <h1>
    {uData.map((user, index) => (
      <ul key={index}>{user.name}</ul>
    ))}
  </h1>; */

  // object data
  const person = {
    name: "John",
    age: 30,
    location: "NY",
  };
  return (
    <>
      <div className="container-fluid">{Object.values(person)}</div>
    </>
  );
};

export default Datahandle;
