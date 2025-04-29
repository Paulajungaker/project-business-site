import React from "react";
import "./styling/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logotype">Femine Essence</h1>
      <img
        className="nav-icon"
        src="/icons/icon-hamburger.svg"
        alt="hamburgerbar"
      />
    </nav>
  );
};

export default Navbar;
