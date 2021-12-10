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
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            voluptate tempore eveniet. Excepturi nesciunt laudantium dolore
            accusamus maxime quo iure ipsum com
          </h2>
        </div>
        <div className="modal-register-button">
          <a href="https://forms.gle/zdumabeotwpNHdcN9" target="_blank" className="linky">
            <button>Register For Event</button>
          </a>
        </div>
      </div>
  );
}

export default Modal;