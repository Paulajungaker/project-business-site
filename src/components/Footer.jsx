import React from "react";
import "./styling/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer-logo">Femine Essence</h2>
      <div className="media-container">
        <img
          src="./icons/icon-instagram.png"
          alt="instagram"
          className="social-media-icon"
        />
        <img
          src="./icons/icon-twitter.png"
          alt="twitter"
          className="social-media-icon"
        />
        <img
          src="./icons/icon-facebook.png"
          alt="facebook"
          className="social-media-icon"
        />
      </div>
      <ul className="footer-links">
        <li>Home</li>
        <li>Courses</li>
        <li>Incense</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Footer;
