import React from "react";
import "./PageSection.css";
import Button from "../sectionButton/SectionButton";
import testVideo from "./assets/testVideo.mp4"

const PageSection = (props) => {

  const {sectionHeading, sectionPara, sectionButtonStyle, sectionButtonName, sectionBg} = props

  return (
    <div className={`section-container ${sectionBg}`}>
      <div className="section-content">
        <div class="heading">
          <h1>{sectionHeading}</h1>
        </div>
        <div className="section-para">
         {sectionPara}
        </div>
        <div className="section-intro-btn">
          <Button buttonStyle={`${sectionButtonStyle}`}>{sectionButtonName}</Button>
        </div>
      </div>
    </div>
  );
};

export default PageSection;
