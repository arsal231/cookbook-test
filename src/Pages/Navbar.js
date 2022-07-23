import React from "react";
import logo from "../img/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
