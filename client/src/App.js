import React, { useRef, useState, useEffect } from "react";
import PageSection from "./components/pageSection/PageSection";
import ConnectWithUs from "./components/connectWithUs/ConnectWithUs";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import bubble from "./assets/bubble.png";
import IntroVideo from "./components/introVideo/IntroVideo";
import "./App.css";

// importing sections data
import sectionsData from "./sectionsData";

// import { FullScreen, useFullScreenHandle } from "react-full-screen";
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
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="main-container">
                {sectionsData.map((section) => {
                  return (
                    <PageSection
                      // passHandle={handle}
                      key={section.id}
                      {...section}
                    ></PageSection>
                  );
                })}
                <ConnectWithUs></ConnectWithUs>
                {/* <div className="bubbles">
                  <div className="bubble1">
                    <img
                      data-aos="fade-right"
                      src={bubble}
                      alt=""
                    />
                  </div>
                  <img className="bubble-2" src={bubble} alt="" />
                  <img className="bubble-3" src={bubble} alt="" />
                  <img className="bubble-4" src={bubble} alt="" />
                  <img className="bubble-5" src={bubble} alt="" />
                </div> */}
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
