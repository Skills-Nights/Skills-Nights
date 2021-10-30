import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          className="closse" >
            X
          </button>
        </div>
        <div className="s">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate tempore eveniet. Excepturi nesciunt laudantium dolore accusamus maxime quo iure ipsum com</h1>
        </div>
        <div className="body">
           <a href="https://forms.gle/zdumabeotwpNHdcN9" className="linky"><button className="hello">Register For Event</button></a> 
          
        </div>
       
      </div>
    </div>
  );
}

export default Modal;