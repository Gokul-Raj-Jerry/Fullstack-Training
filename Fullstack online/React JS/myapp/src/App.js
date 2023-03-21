// main file
import React from "react";
import Form from "./Form/Form";

function App() {
  const messages = ["React", "Re: React", "Re:Re: React"];
  return (
    <React.StrictMode>
      <Form />
    </React.StrictMode>
  );
}

export default App;
