// root file
// App Component

import Navbar from "./Navbar/Navbar";
import CompA from "./Components/CompA";

let App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <Navbar />
      <CompA />
    </div>
  );
};
export default App;
