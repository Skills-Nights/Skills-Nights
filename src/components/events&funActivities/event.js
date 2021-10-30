import React, { useState } from "react";
import "./event.css";
import Modal from "./Modal";

function Events() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
    <img src=".././BG_LIGHT.png" className="imgg" alt="" />
      <div className="app_body">
        <h1 className="heading">Events &amp; Fun Activities</h1>
        <p className="heading1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui porro alias optio tempore ratione quidem corporis est quod, omnis nemo laboriosam sequi adipisci cumque officia consequuntur fugit ipsam fuga!</p>
      
        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
        Upcoming Event &gt;
        </button>

      </div>
      
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Events;