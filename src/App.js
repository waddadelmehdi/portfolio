import React, { useState, createContext } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div id={theme}>
        <NavbarMobileView changeTheme={changeTheme} theme={theme} />
        <Sidebar changeTheme={changeTheme} theme={theme} />
        
        {/* Wrapper for all main content */}
        <div className="content-wrapper">
          <About />
          <WorkExperience />
          <TechStack />
          <Education />
          <Project />
          <Testimonial />
          <Contact />
        </div>
        
        {/* Footer at the bottom */}
        
      </div>

      <ScrollToTop
        smooth={true}
        top="20"
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#000000" }}
      />
    </ThemeContext.Provider>
  );
}

export default App;
