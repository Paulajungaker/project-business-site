import "./index.css";
import React from "react";
import AppRoutes from "AppRoutes";
import AboutSection from "components/AboutSection";
import CoursesSection from "components/CoursesSection";
import IncenseSection from "components/IncenseSection";
import QuoteSection from "components/QuoteSection";
import SignUpSection from "components/SignUpSection";
import Footer from "components/Footer";

export const App = () => {
  return (
    <div>
      <AppRoutes />
      <AboutSection />
      <CoursesSection />
      <IncenseSection />
      <QuoteSection />
      <SignUpSection />
      <Footer />
    </div>
  );
};
