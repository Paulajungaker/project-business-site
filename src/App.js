import "./index.css";
import React from "react";
import AppRoutes from "AppRoutes";
import AboutSection from "components/AboutSection";
import CoursesSection from "components/CoursesSection";

export const App = () => {
  return (
    <div>
      <AppRoutes />
      <AboutSection />
      <CoursesSection />
    </div>
  );
};
