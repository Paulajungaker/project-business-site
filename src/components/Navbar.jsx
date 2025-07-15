import React from "react";
import "./styling/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-group">
        <h2 className="logotype">Femine Essence</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>Courses</li>
          <li>Incense</li>
          <li>Join us</li>
        </ul>
      </div>
      <img
        className="nav-icon"
        src="/icons/icon-hamburger.svg"
        alt="hamburgerbar"
      />
    </nav>
  );
};

export default Navbar;
