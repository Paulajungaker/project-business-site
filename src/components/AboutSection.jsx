import React from "react";
import "./styling/AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-section">
      <img src="./icons/icon-moon.png" className="moon-icon" alt="moon icon" />
      <div className="about-text-container">
        <h2 className="about-title">Femine Essence</h2>
        <p className="about-cursive">
          is a space where softness becomes strenght
        </p>
        <p className="about-text">
          Rooted in nature and feminine wisdom, we offer rituals, incense, and
          soulful practices that awaken the light within.{" "}
        </p>
        <p className="about-text">
          Whether your seeking stillness, sisterhood, or spiritual guidance -
          you’re exactly where you need to be.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
