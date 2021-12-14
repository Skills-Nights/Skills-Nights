import React from 'react'
import "./Navbar.css"
import logo from "./assets/logo.jpg"
import {HashLink} from "react-router-hash-link"

const Navbar = () => {
    return (
      <div className="navbar-container">
        <nav className="navbar">
          <div className="nav-logo">
            <img src={logo} alt="sn-logo" />
          </div>
          <div className="nav-links">
            <ul>
              <HashLink smooth to="/#about-us">
                <li>ABOUT US</li>
              </HashLink>
              <HashLink smooth to="/#events" >
                <li>EVENTS</li>
              </HashLink>
              <HashLink smooth to="/#archives" >
                <li>ARCHIVES</li>
              </HashLink>
              <HashLink smooth to="/#our-team" >
                <li>OUR TEAM</li>
              </HashLink>
              <HashLink smooth to="/#connect-with-us" >
                <li>CONNECT WITH US</li>
              </HashLink>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Navbar
