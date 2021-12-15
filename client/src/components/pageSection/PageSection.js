import React, { useState } from "react";
import "./PageSection.css";
import Button from "../sectionButton/SectionButton";
import testVideo from "./assets/testVideo.mp4";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Modal from "../modal/Modal"
import Bubbles from "./bubbles/Bubbles";

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
    bubblesData
  } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  const showModal = () => {
    setModalOpen(true);
  };

  const showVideo = () => {
    navigate("/video");
  };

  const showTeam = () => {
    navigate("/team");
  };

  const showArchives = () => {
    navigate("/archives");
  };
  
  return (
    <div id={pageId} className="section-view">
      <div className={`section-container ${sectionBg}`}>
        <div className="section-content">
          <div className="heading">
            <h1>{sectionHeading}</h1>
          </div>
          <div className="section-para">{sectionPara}</div>
          <div className="section-intro-btn">
            {!isTeam ? (
              <Button
                onClick={
                  hasModal
                    ? showModal
                    : hasVideo
                    ? showVideo
                    : hasArchives
                    ? showArchives
                    : null
                }
                buttonStyle={`${sectionButtonStyle}`}
              >
                {sectionButtonName}
              </Button>
            ) : (
              <HashLink smooth to="/team#team">
                <Button buttonStyle={`${sectionButtonStyle}`}>
                  {sectionButtonName}
                </Button>
              </HashLink>
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
      {isAbout ? (
        <div className="sn-heading">
          <h1>Skills <br /> Nights </h1>
        </div>
      ) : null}
    </div>
  );
};

export default PageSection;
