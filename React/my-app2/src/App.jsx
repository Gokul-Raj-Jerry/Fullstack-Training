// root file
// App Component

import Navbar from "./Navbar/Navbar";
import CompA from "./Components/CompA";
import Card from "./State/Card";
import Products from "./State/Products";

let App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <Navbar />
      <Products />
      {/* <CompA /> */}
      <Card />
    </div>
  );
};
export default App;
