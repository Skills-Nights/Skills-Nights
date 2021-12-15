import React from "react";
import "./Bubbles.css";

import bubbleImage from "./assets/bubble.png";

const Bubbles = (props) => {
  const { bubblesData } = props;

  const animationArray = [
    "fade-up",
    "fade-in",
    "fade-right",
    "fade-left",
    "fade-up-right",
    "fade-down-right",
    "flip-left",
    "flip-right",
    "slide-up",
    "slide-down",
    "slide-left",
    "slide-right",
    "zoom-in",
    "zoom-in-up",
    "zoom-in-left",
    "zoom-in-right",
    "zoom-out",
    "zoom-out-up",
    "zoom-out-left",
    "zoom-out-right",
  ];

  console.log(bubblesData);

  return (
    <div className="bubbles">
      {bubblesData.map((bubble, index) => {
        return (
          <>
            <div key={index} className="bubble">
              <img
                style={{
                  width: bubble.size,
                  marginLeft: bubble.marginLeft,
                  marginTop: bubble.marginTop,
                }}
                data-aos={
                  animationArray[
                    Math.floor(Math.random() * animationArray.length)
                  ]
                }
                src={bubbleImage}
                alt=""
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Bubbles;
