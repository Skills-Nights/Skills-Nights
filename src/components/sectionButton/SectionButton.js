import React from "react";
import "./SectionButton.css";
import arrowBlack from "./assets/arrow-black.png";
import arrowGrey from "./assets/arrow-grey.png";
import {ReactComponent as Polygon} from "./assets/polygon.svg"

const STYLES = ["btn-white", "btn-black", "btn-intro"]

const Button = ({ children, onClick, buttonStyle}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

  return (
    <button className={checkButtonStyle} onClick={onClick}>
      {children}
      <span>
        {buttonStyle === "btn-white" ? (
          <img src={arrowBlack} alt="sectionButton" />
        ) : null}
        {
          buttonStyle === "btn-black" ?  <img src={arrowGrey} alt="sectionButton" /> : null
        }
        {
          buttonStyle === "btn-intro" ? <Polygon></Polygon> : null
        }
      </span>
    </button>
  );
};

export default Button;
