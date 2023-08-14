import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-link">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Skills</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
