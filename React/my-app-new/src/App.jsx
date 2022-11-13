// root file
// App Component

import Navbar from "./Navbar/Navbar";
import Card from "./Props & State/Card";
import Product from "./Props & State/Product";
import Navbart from "./Navbar/Navbart";
import State from "./Props & State/State";
import Dtime from "./Digital Time/Dtime";
import Digtime from "./Digital Time/Digtime";
import Login from "./Form/Login";
import Regfm from "./Form/Regfm";
import Users from "./AxiosiUser/Users";
// import Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Link Components/Home";


// import About from "./Link Components/About";
// import Products from "./Link Components/Products";
// import Contact from "./Link Components/Contact";
// import Services from "./Link Components/Services";

let App = () => {
  return (
    <div className="container-fluid">
      <Router>
        <Navbart />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Product />
      <State />
      <Card />
      <Dtime />
      <Digtime />
      <br />
      <hr />
      <Login />
      <Regfm />
      <Users />
    </div>
  );
};
export default App;
