import React, {useState} from "react";
import "./Modal.css";

function Modal({ setModalOpen}) {

  return (
    <div className="modal-container">
      <div className="title-close-btn">
        <button
          onClick={() => {
            setModalOpen(false);
          }}
          className="close-btn"
        >
          X
        </button>
      </div>
      <div className="modal-details">
        <h2 className="glow" style={{ textAlign: "center", fontSize: "3rem" }}>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            voluptate tempore eveniet. Excepturi nesciunt laudantium dolore
            accusamus maxime quo iure ipsum com */}
          Coming Soon !
        </h2>
      </div>
      <div className="modal-register-button">
        <a
          href="https://dare2compete.com/workshop/open-source-as-a-career-session-tantrafiesta-2021-indian-institute-of-information-technology-iiit-nagpur-225601"
          target="_blank"
          className="linky"
        >
          <button>Past Events</button>
        </a>
      </div>
    </div>
  );
}

export default Modal;