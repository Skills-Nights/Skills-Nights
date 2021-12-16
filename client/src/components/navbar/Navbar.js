import React, {useState} from 'react'
import "./Navbar.css"
import logo from "./assets/logo.jpg"
import {HashLink} from "react-router-hash-link"

const Navbar = () => {

    const [show, setShow] = useState(false);

    return (
      <div className="navbar-container">
        <nav className="navbar">
          <div className="nav-logo">
            <img src={logo} alt="sn-logo" />
          </div>
          <div
            onClick={() => setShow((prevState) => !prevState)}
            className={`${show ? "hamburger-btn open" : "hamburger-btn"}`}
          >
            <div className="hamburger"></div>
          </div>
          <div className={`${show ? "nav-links" : "nav-links hide"}`}>
            <ul>
              <li className="menu-title">Menu</li>
              <li>
                <HashLink
                  onClick={() => setShow((prevState) => !prevState)}
                  smooth
                  to="/#about-us"
                >
                  ABOUT US
                </HashLink>
              </li>
              <li>
                <HashLink
                  onClick={() => setShow((prevState) => !prevState)}
                  smooth
                  to="/#events"
                >
                  EVENTS
                </HashLink>
              </li>
              <li>
                <HashLink
                  onClick={() => setShow((prevState) => !prevState)}
                  smooth
                  to="/#archives"
                >
                  ARCHIVES
                </HashLink>
              </li>
              <li>
                <HashLink
                  onClick={() => setShow((prevState) => !prevState)}
                  smooth
                  to="/#our-team"
                >
                  OUR TEAM
                </HashLink>
              </li>
              <li>
                <HashLink
                  onClick={() => setShow((prevState) => !prevState)}
                  smooth
                  to="/#connect-with-us"
                >
                  CONNECT WITH US
                </HashLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Navbar
