import React, {useState} from 'react'
import "./Card.css"
import { ReactComponent as LinkedinLogo } from "super-tiny-icons/images/svg/linkedin.svg";
import { ReactComponent as InstagramLogo } from "super-tiny-icons/images/svg/instagram.svg";
import { ReactComponent as GithubLogo } from "super-tiny-icons/images/svg/github.svg";
import { ReactComponent as EmailLogo } from "super-tiny-icons/images/svg/email.svg";

const Card = (props) => {

    const [isHovering, setIsHovering] = useState(false)
    const {name, image, linkedinLink, InstagramLink , GithubLink, email} = props

    return (
      <div
        className={
          isHovering
            ? `member-card-container hovering`
            : "member-card-container"
        }
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
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
            <a href="">
              <LinkedinLogo></LinkedinLogo>
            </a>
            <a href="">
              <InstagramLogo></InstagramLogo>
            </a>
            <a href="">
              <GithubLogo></GithubLogo>
            </a>
            <a href={`mailto:${email}`}>
              <EmailLogo></EmailLogo>
            </a>
          </div>
        </div>
      </div>
    );
}

export default Card
