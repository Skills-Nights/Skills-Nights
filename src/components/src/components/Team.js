import React from 'react'
import './team.css'
import './cards.css'
// import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaGithub,FaTwitter, FaInstagram, FaMedium } from "react-icons/fa";

function Team() {
    return (
        <div>
        <div className="scroll animated fadeInUp" />
        <div className="members" id="members">
          <h1 className="title">Our Team</h1>
          <div className="members-contaner">
            <h2 className="heading" style={{textAlign: 'center', color: 'white'}}>Coordinators</h2>
            <div className="container">        
              <div className="coordinators">
                <div className="profile-card-holder">
                  <div className="profile-container cord1">
                    <div className="profile-wrapper">
                      <div className="profile-card">
                        {/* Profile-Picture */}
                        <img src="dummy.png" alt="profile pics" />
                        <h2>Lorem Ipsum</h2>
                        <h4>Coordinator</h4>
                        <p style={{padding: '0 1px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit cumque, similique ipsa ut maxime iste!</p>
                        {/* Social Icons */}
                        <div className="icons">
                        <a href="https://www.facebook.com"><FaFacebookF color="white"/></a>
                        <a href="https://www.facebook.com"><FaTwitter color="white"/></a>
                        <a href="https://www.facebook.com"><FaInstagram color="white"/></a>
                        <a href="https://www.facebook.com"><FaGithub color="white"/></a>
                        <a href="https://www.facebook.com"><FaLinkedinIn color="white"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-card-holder">
                  <div className="profile-container cord2">
                    <div className="profile-wrapper">
                      <div className="profile-card">
                        {/* Profile-Picture */}
                        <img src="dummy.png" alt="profile pics" />
                        <h2>Lorem Ipsum</h2>
                        <h4>Coordinator</h4>
                        <p style={{padding: '0 1px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit cumque, similique ipsa ut maxime iste!</p>
                        {/* Social Icons */}
                        <div className="icons">
                        <a href="https://www.facebook.com"><FaFacebookF color="white"/></a>
                        <a href="https://www.facebook.com"><FaTwitter color="white"/></a>
                        <a href="https://www.facebook.com"><FaInstagram color="white"/></a>
                        <a href="https://www.facebook.com"><FaGithub color="white"/></a>
                        <a href="https://www.facebook.com"><FaLinkedinIn color="white"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
              <h2 className="heading" style={{textAlign: 'center', color: 'white'}}>Team Leads</h2>
              <div className="teamLeads">
                <div className="profile-card-holder">
                  <div className="profile-container lead1">
                    <div className="profile-wrapper">
                      <div className="profile-card">
                        {/* Profile-Picture */}
                        <img src="dummy.png" alt="profile pics" />
                        <h2>Lorem Ipsum</h2>
                        <h4>Coordinator</h4>
                        <p style={{padding: '0 1px'}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit cumque, similique ipsa ut maxime iste!
                        </p>
                        {/* Social Icons */}
                        <div className="icons">
                        <a href="https://www.facebook.com"><FaFacebookF color="white"/></a>
                        <a href="https://www.facebook.com"><FaTwitter color="white"/></a>
                        <a href="https://www.facebook.com"><FaInstagram color="white"/></a>
                        <a href="https://www.facebook.com"><FaGithub color="white"/></a>
                        <a href="https://www.facebook.com"><FaLinkedinIn color="white"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <h3>Member</h3> */}
                </div>
                <div className="profile-card-holder">
                  <div className="profile-container lead2">
                    <div className="profile-wrapper">
                      <div className="profile-card">
                        {/* Profile-Picture */}
                        <img src="dummy.png" alt="profile pics" />
                        <h2>Lorem Ipsum</h2>
                        <h4>Team Lead</h4>
                        <p style={{padding: '0 1px'}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit cumque, similique ipsa ut maxime iste!
                        </p>
                        {/* Social Icons */}
                        <div className="icons">
                        <a href="https://www.facebook.com"><FaFacebookF color="white"/></a>
                        <a href="https://www.facebook.com"><FaTwitter color="white"/></a>
                        <a href="https://www.facebook.com"><FaInstagram color="white"/></a>
                        <a href="https://www.facebook.com"><FaGithub color="white"/></a>
                        <a href="https://www.facebook.com"><FaLinkedinIn color="white"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <h3>Coordinator</h3> */}
                </div>
                <div className="profile-card-holder">
                  <div className="profile-container lead3">
                    <div className="profile-wrapper">
                      <div className="profile-card">
                        {/* Profile-Picture */}
                        <img src="dummy.png" alt="profile pics" />
                        <h2>Lorem Ipsum</h2>
                        <h4>Team Lead</h4>
                        <p style={{padding: '0 1px'}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit cumque, similique ipsa ut maxime iste!
                        </p>
                        {/* Social Icons */}
                        <div className="icons">
                        <a href="https://www.facebook.com"><FaFacebookF color="white"/></a>
                        <a href="https://www.facebook.com"><FaTwitter color="white"/></a>
                        <a href="https://www.facebook.com"><FaInstagram color="white"/></a>
                        <a href="https://www.facebook.com"><FaGithub color="white"/></a>
                        <a href="https://www.facebook.com"><FaLinkedinIn color="white"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <h3>Member</h3> */}
                </div>
                <div className="profile-card-holder">
                  <div className="profile-container lead4">
                    <div className="profile-wrapper">
                      <div className="profile-card">
                        {/* Profile-Picture */}
                        <img src="dummy.png" alt="profile pics" />
                        <h2>Lorem Ipsum</h2>
                        <h4>Team Lead</h4>
                        <p style={{padding: '0 1px'}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit cumque, similique ipsa ut maxime iste!
                        </p>
                        {/* Social Icons */}
                        <div className="icons">
                        <a href="https://www.facebook.com"><FaFacebookF color="white"/></a>
                        <a href="https://www.facebook.com"><FaTwitter color="white"/></a>
                        <a href="https://www.facebook.com"><FaInstagram color="white"/></a>
                        <a href="https://www.facebook.com"><FaGithub color="white"/></a>
                        <a href="https://www.facebook.com"><FaLinkedinIn color="white"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <h3>Member</h3> */}
                </div>
                <div className="profile-card-holder">
                  <div className="profile-container lead5">
                    <div className="profile-wrapper">
                      <div className="profile-card">
                        {/* Profile-Picture */}
                        <img src="dummy.png" alt="profile pics" />
                        <h2>Lorem Ipsum</h2>
                        <h4>Team Lead</h4>
                        <p style={{padding: '0 1px'}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit cumque, similique ipsa ut maxime iste!
                        </p>
                        {/* Social Icons */}
                        <div className="icons">
                        <a href="https://www.facebook.com"><FaFacebookF color="white"/></a>
                        <a href="https://www.facebook.com"><FaTwitter color="white"/></a>
                        <a href="https://www.facebook.com"><FaInstagram color="white"/></a>
                        <a href="https://www.facebook.com"><FaGithub color="white"/></a>
                        <a href="https://www.facebook.com"><FaLinkedinIn color="white"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <h3>Member</h3> */}
                </div>
                <div className="profile-card-holder">
                  <div className="profile-container lead6">
                    <div className="profile-wrapper">
                      <div className="profile-card">
                        {/* Profile-Picture */}
                        <img src="dummy.png" alt="profile pics" />
                        <h2>Lorem Ipsum</h2>
                        <h4>Team Lead</h4>
                        <p style={{padding: '0 1px'}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit cumque, similique ipsa ut maxime iste!
                        </p>
                        {/* Social Icons */}
                        <div className="icons">
                        <a href="https://www.facebook.com"><FaFacebookF color="white"/></a>
                        <a href="https://www.facebook.com"><FaTwitter color="white"/></a>
                        <a href="https://www.facebook.com"><FaInstagram color="white"/></a>
                        <a href="https://www.facebook.com"><FaGithub color="white"/></a>
                        <a href="https://www.facebook.com"><FaLinkedinIn color="white"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <h3>Member</h3> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer" id="footer">
          <hr className="hrline" id="fill" />
          <h2>Follow Us For Regular Updates</h2>
          <div className="contects">
            <a href="https://www.facebook.com">
            <FaLinkedinIn color="white"/>
            </a>
            <a href="https://www.facebook.com">
            <FaInstagram color="white"/>
            </a>
            <a href="https://www.facebook.com">
            <FaLinkedinIn color="white"/>
            </a>
            <a href="https://www.facebook.com">
            <FaFacebookF color="white"/>
            </a>
            <a href="https://www.facebook.com">
            <FaMedium color="white"/>
            </a>
          </div>
          <div className="copy">©Skills Nights</div>
        </footer>
      </div>
    )
}

export default Team;
