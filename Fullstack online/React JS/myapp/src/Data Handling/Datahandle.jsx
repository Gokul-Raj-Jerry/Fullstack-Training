import React from "react";

const Datahandle = () => {
  let uData = ["John", "Harry", "Peter"];
  return (
    <>
      <div className="container">
        <div>
          {uData.map((user) => (
            <li>{user.name}</li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Datahandle;
