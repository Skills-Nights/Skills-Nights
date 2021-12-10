import React, { useState } from "react";
import "./ConnectWithUs.css";
import mailIcon from "./assets/mailIcon.png";
import axios from "axios";

const ConnectWithUs = () => {
  const [msg, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        message: msg,
        email: email,
      },
      url: "http://localhost:5000/send",
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="connect-with-us-container whiteBg">
      <div className="container-mask">
        <div className="connect-with-us-content">
          <div className="heading">
            <h1>Connect with us !</h1>
          </div>
          <div className="content">
            <h3>Mail for collaboration</h3>
            <form onSubmit={handleSubmit}>
              <div className="message">
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  spellCheck={false}
                ></textarea>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="btn-container">
                <button type="submit" className="mail-btn">
                  Mail
                  <span>
                    <img src={mailIcon} alt="" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
