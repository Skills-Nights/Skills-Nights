import React, {useState} from "react";
import "./PageSection.css";
import Button from "../sectionButton/SectionButton";
import testVideo from "./assets/testVideo.mp4"
import Modal from "../modal/Modal";
// import Archives from "../archives/Archives";

const PageSection = (props) => {

  const {sectionHeading, sectionPara, sectionButtonStyle, sectionButtonName, sectionBg, hasModal, hasArchives} = props
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = ()=>{
    setModalOpen(true)
  }

  return (
    <div className="section-view">
      <div className={`section-container ${sectionBg}`}>
        <div className="section-content">
          <div className="heading">
            <h1>{sectionHeading}</h1>
          </div>
          <div className="section-para">{sectionPara}</div>
          <div className="section-intro-btn">
            <Button
              onClick={hasModal ? showModal : null}
              buttonStyle={`${sectionButtonStyle}`}
            >
              {sectionButtonName}
            </Button>
          </div>
        </div>
      </div>
      {hasModal && (
        <div className={`modal-background ${modalOpen ? "pop-up-smooth" : null}`}>
          <Modal setModalOpen={setModalOpen}></Modal>
        </div>
      )}
      {
        hasArchives && (
          <div>
            {/* <Archives></Archives> */}
          </div>
        )
      }
    </div>
  );
};

export default PageSection;
