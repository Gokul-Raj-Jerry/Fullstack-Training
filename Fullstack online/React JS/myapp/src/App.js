// main file
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Routing & Navigation/Pages/About";
import Contact from "./Routing & Navigation/Pages/Contact";
import Home from "./Routing & Navigation/Pages/Home";
import Navbar from "./Routing & Navigation/Pages/Navbar";
import Product from "./Routing & Navigation/Pages/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
