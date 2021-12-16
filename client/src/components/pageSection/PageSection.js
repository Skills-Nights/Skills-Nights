import React, { useState } from "react";
import "./PageSection.css";
import Button from "../sectionButton/SectionButton";
import testVideo from "./assets/testVideo.mp4";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Modal from "../modal/Modal";
import Bubbles from "./bubbles/Bubbles";
import bubble from "./bubbles/assets/bubble.png"

import { useSpring, animated } from "react-spring";

const PageSection = (props) => {
  const {
    sectionHeading,
    sectionPara,
    sectionButtonStyle,
    sectionButtonName,
    sectionBg,
    hasModal,
    hasVideo,
    hasArchives,
    pageId,
    isTeam,
    isAbout,
    isArchives,
    bubblesData,
    contentAnim
  } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [rotate, setRotate] = useState(false)

  const navigate = useNavigate();

  const showModal = () => {
    setModalOpen(true);
  };

  const showVideo = () => {
    navigate("/video");
  };

  const showArchives = () => {
    navigate("/archives");
  };

  const styles = useSpring({
    transform: "scale(1)",
    delay: 2000,
    config:{
      duration:"800"
    },
    from: {
      transform: "scale(0)",
    },
  });

  return (
    <div id={pageId} className="section-view">
      <div className={`section-container ${sectionBg}`}>
        {isAbout ? (
          <div className="sn-heading">
            <animated.div style={styles}>
              <h1>
                Skills <br /> Nights{" "}
              </h1>
            </animated.div>
            <div
              onMouseOut={() => setRotate(false)}
              onMouseOver={() => setRotate(true)}
              className={
                rotate ? "sn-heading-mask animateHover" : "sn-heading-mask"
              }
            >
              <div className="mask-bubble">
                <img src={bubble} alt="" />
              </div>
              <div className="mask-bubble">
                <img src={bubble} alt="" />
              </div>
              <div className="mask-bubble">
                <img src={bubble} alt="" />
              </div>
              <div className="mask-bubble">
                <img src={bubble} alt="" />
              </div>
              <div className="mask-bubble">
                <img src={bubble} alt="" />
              </div>
              <div className="mask-bubble">
                <img src={bubble} alt="" />
              </div>
              <div className="mask-bubble">
                <img src={bubble} alt="" />
              </div>
              <div className="mask-bubble">
                <img src={bubble} alt="" />
              </div>
            </div>
          </div>
        ) : null}
        <div data-aos={contentAnim} className="section-content">
          <div className="heading">
            <h1>{sectionHeading}</h1>
          </div>
          <div className="section-para">{sectionPara}</div>
          <div className="section-intro-btn">
            {isTeam ? (
              <HashLink smooth to="/team#team">
                <Button buttonStyle={`${sectionButtonStyle}`}>
                  {sectionButtonName}
                </Button>
              </HashLink>
            ) : isArchives ? <HashLink smooth to="/archives#archives">
                <Button buttonStyle={`${sectionButtonStyle}`}>
                  {sectionButtonName}
                </Button>
              </HashLink> : (
              <Button
                onClick={hasModal ? showModal : hasVideo ? showVideo : null}
                buttonStyle={`${sectionButtonStyle}`}
              >
                {sectionButtonName}
              </Button>
            )}
          </div>
        </div>
      </div>
      <Bubbles bubblesData={bubblesData}></Bubbles>
      {hasModal && (
        <div
          className={`modal-background ${modalOpen ? "pop-up-smooth" : null}`}
        >
          <Modal setModalOpen={setModalOpen}></Modal>
        </div>
      )}
    </div>
  );
};

export default PageSection;
