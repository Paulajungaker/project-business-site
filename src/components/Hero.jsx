import React from "react";
import "./styling/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/soul-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <div className="hero-text-container">
          <h1 className="hero-title">Awaken your inner light</h1>
          <h3 className="hero-text">
            Courses & Rituals for Feminine Spiritual Growth
          </h3>
          <button className="hero-button" type="button">
            Join the journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
