import React from "react";

const Araycondition = () => {
  const dataCollection = [
    {
      id: 1,
      title: "Mechanical",
      label: "Tech Deptd",
    },
  ];
  return (
    <div>
      <div className="container">
        <ul>
          {dataCollection.length ? (
            dataCollection.map((item, index) => (
              <li key={index}>{item.title}{item.id}</li>
            ))
          ) : (
            <li>No Message found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Araycondition;
