import React from "react";

let Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="/" className="navbar-brand">Meeco</a>
      <div className="navbar ms-auto">
        <ul className="navbar-nav navbar-dark">
          <li className="nav-item">
            <a href="/" className="nav-link">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Serivce
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
