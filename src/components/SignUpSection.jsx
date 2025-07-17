import React from "react";
import "./styling/SignUpSection.css";

const SignUpSection = () => {
  return (
    <section className="signup-section">
      <h3 className="signup-title">
        Ready to reconnect with your inner light?
      </h3>
      <img
        src="./icons/icon-star.svg"
        alt="Star icon"
        className="signup-icon"
      />
      <p className="signup-subtitle">
        Join our newsletter for rituals, insights & inspiration.
      </p>

      <form className="signup-form">
        <input
          type="email"
          placeholder="Email Address"
          className="signup-input"
          required
        />

        <input
          type="password"
          placeholder="Create a password"
          className="signup-input"
          required
        />

        <label className="signup-checkbox" htmlFor="updates">
          <input id="updates" type="checkbox" />I want to receive updates about
          rituals
        </label>

        <label className="signup-checkbox" htmlFor="terms">
          <input id="terms" type="checkbox" />I accept the terms & privacy
          policy
        </label>

        <p className="signup-question">
          How would you like to receive content?
        </p>

        <div className="signup-options">
          <label htmlFor="pref-email">
            <input
              id="pref-email"
              type="radio"
              name="preference"
              value="email"
            />{" "}
            Email
          </label>
          <label htmlFor="pref-sms">
            <input id="pref-sms" type="radio" name="preference" value="sms" />{" "}
            SMS
          </label>
          <label htmlFor="pref-both">
            <input id="pref-both" type="radio" name="preference" value="both" />{" "}
            Both
          </label>
        </div>

        <button type="submit" className="signup-button">
          Join the circle
        </button>
      </form>
    </section>
  );
};

export default SignUpSection;
