import "./index.css";
import React from "react";
import AppRoutes from "AppRoutes";
import AboutSection from "components/AboutSection";

export const App = () => {
  return (
    <div>
      <AppRoutes />
      <AboutSection />
    </div>
  );
};
