import React from "react";
// props parent and child relationship
// Myprops is parent
// Data can be only shared by parent component
const Myprops = () => {
  return (
    <div>
      <h1>Hello, Hi i am Chitty</h1>
      <Childprop name="The Robot" />
      <Childprop name="Speed on Terabyte" />
      <Childprop name="Memory one Gegabyte" />
    </div>
  );
};
// Childprop is child component
// child data is constant
// child data can not be shared
function Childprop(props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}

export default Myprops;
