import React, { useEffect } from "react";
import PageSection from "./components/pageSection/PageSection";
import ConnectWithUs from "./components/connectWithUs/ConnectWithUs";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroVideo from "./components/introVideo/IntroVideo";
import "./App.css";

// importing sections data
import sectionsData from "./sectionsData";

import Archives from "./components/archives/Archives";
import OurTeam from "./components/ourTeam/OurTeam";

import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <div className="main-container">
                {sectionsData.map((section) => {
                  return (
                    <PageSection key={section.id} {...section}></PageSection>
                  );
                })}
                <ConnectWithUs></ConnectWithUs>
              </div>
            }
          />
          <Route path="/video" element={<IntroVideo />}></Route>
          <Route path="/team" element={<OurTeam />}></Route>
          <Route path="/archives" element={<Archives />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
