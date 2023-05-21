import React from "react";
// function component
// parent component
function Home() {
  return (
    <div>
      <h1>This is Parent Component</h1>
      <Mysec />
      <Mythr />
    </div>
  );
}
// child component
function Mysec() {
  return (
    <div>
      <h1>This is Second Component</h1>
      <div>
        <MyNest />
      </div>
    </div>
  );
}

function Mythr() {
  return (
    <div>
      <h1>This is Third Component</h1>
    </div>
  );
}

function MyNest() {
  return (
    <div>
      <h1>This is My Nested Component</h1>
    </div>
  );
}

export default Home;
