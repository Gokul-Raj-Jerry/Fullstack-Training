// main file
import React from "react";
import Mailbox from "./Conditional Rendering/Mail Box/Mailbox";

function App() {
  const messages = ["React", "Re: React", "Re:Re: React"];
  return (
    <React.StrictMode>
      <Mailbox unreadMessages={messages} />
    </React.StrictMode>
  );
}

export default App;
