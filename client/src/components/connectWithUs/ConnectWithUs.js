import React, { useState } from "react";
import "./ConnectWithUs.css";
import mailIcon from "./assets/mailIcon.png";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { ReactComponent as ConnectSvg } from "./assets/connect.svg";

import { ReactComponent as YoutubeLogo } from "super-tiny-icons/images/svg/youtube.svg";
import { ReactComponent as LinkedinLogo } from "super-tiny-icons/images/svg/linkedin.svg";
import { ReactComponent as TelegramLogo } from "super-tiny-icons/images/svg/telegram.svg";
import { ReactComponent as InstagramLogo } from "super-tiny-icons/images/svg/instagram.svg";

const ConnectWithUs = () => {
  const [msg, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (someEmail) => {
    return String(someEmail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (validateEmail(email) && msg != "") {
      axios({
        method: "POST",
        data: {
          message: msg,
          email: email,
        },
        url: "https://skills-nights.herokuapp.com/send",
      })
        .then((response) => {
          // console.log(response);
          setIsLoading(false);
          setIsSuccess(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("message not valid");
      setIsLoading(false);
    }

    setMessage("");
    setEmail("");
  };

  return (
    <div
      id="connect-with-us"
      className="connect-with-us-container whiteBg"
    >
      <div className="container-mask">
        <div className="media">
          <ConnectSvg></ConnectSvg>
        </div>
        <div className="connect-with-us-content">
          <div className="heading">
            <h1>Connect with us !</h1>
          </div>
          <div className="content">
            <h3>Message for collaboration</h3>
            <form onSubmit={handleSubmit}>
              <div className="message">
                <input
                  value={email}
                  type="email"
                  placeholder="Enter your email..."
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  value={msg}
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  spellCheck={false}
                ></textarea>
              </div>
              <div className="btn-container">
                <button
                  type="submit"
                  className={
                    msg === "" || email === "" ? "mail-btn muted" : "mail-btn"
                  }
                  title={isSuccess ? "Message Already Sent" : null}
                  disabled={isSuccess ? true : false}
                >
                  {isLoading ? (
                    <PulseLoader size={10}></PulseLoader>
                  ) : (
                    <>
                      {isSuccess ? (
                        <>
                          Sent Successfully{" "}
                          <span
                            style={{
                              fontSize: "20px",
                              marginRight: "5px",
                              color: "green",
                            }}
                          >
                            &#10003;
                          </span>{" "}
                        </>
                      ) : (
                        <>
                          Send{" "}
                          <span>
                            <img src={mailIcon} alt="mail-icon" />
                          </span>{" "}
                        </>
                      )}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="social-media-links">
        <div className="social-media-link">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCzCSePZZ1IqwvSplOF4K1fQ"
          >
            <YoutubeLogo></YoutubeLogo>
          </a>
        </div>
        <div className="social-media-link">
          <a target="_blank" href="https://www.linkedin.com/in/skills-nights/">
            <LinkedinLogo></LinkedinLogo>
          </a>
        </div>
        <div className="social-media-link">
          <a target="_blank" href="https://t.me/+000RhiRN8LhlMmZl">
            <TelegramLogo></TelegramLogo>
          </a>
        </div>
        <div className="social-media-link">
          <a
            target="_blank"
            href="https://www.instagram.com/skills_nights_iiitn/"
          >
            <InstagramLogo></InstagramLogo>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
