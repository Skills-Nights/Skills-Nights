import React, { useState, useEffect } from "react";
import "./Card.css";
import { ReactComponent as LinkedinLogo } from "super-tiny-icons/images/svg/linkedin.svg";
import { ReactComponent as InstagramLogo } from "super-tiny-icons/images/svg/instagram.svg";
import { ReactComponent as GithubLogo } from "super-tiny-icons/images/svg/github.svg";
import { ReactComponent as EmailLogo } from "super-tiny-icons/images/svg/email.svg";

const Card = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const { name, image, linkedinLink, instagramLink, githubLink, email } = props;

  let x = window.matchMedia("(min-width: 850px)");

  useEffect(() => {
    if (!x.matches) {
      setIsHovering(true);
    }
  }, [])

  return (
    <div
      className={
        isHovering ? `member-card-container hovering` : "member-card-container"
      }
      onMouseOver={x.matches ? () => setIsHovering(true) : null}
      onMouseOut={x.matches ? () => setIsHovering(false) : null}
    >
      <div className="card-content">
        <div className="image">
          <img src={image} alt="image" />
        </div>
        <div className="name">
          <h1>{name}</h1>
        </div>
      </div>
      <div className="card-links">
        <div className="card-social-links">
          <a target="_blank" href={linkedinLink}>
            <LinkedinLogo></LinkedinLogo>
          </a>
          <a target="_blank" href={instagramLink}>
            <InstagramLogo></InstagramLogo>
          </a>
          <a target="_blank" href={githubLink}>
            <GithubLogo></GithubLogo>
          </a>
          <a target="_blank" href={`mailto:${email}`}>
            <EmailLogo></EmailLogo>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
