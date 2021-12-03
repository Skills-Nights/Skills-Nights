import React, { useState } from "react";
import Dialog from './Dialog';
import "./App.css";

function App() {
  const [showtaskDialog, setshowtaskDialog] = useState(false);
  
  const cancel = () => {
    setshowtaskDialog(false);
  };

  return (
    <div id="div div-main">
      <h2>Tracks</h2>
      <div className="head">
        <div className="div-cards">
          <h4 className="heading">
            IIITN &nbsp;&nbsp;&nbsp;
            <i class="fa fa-desktop" style={{ fontSize: 20 }}></i>
          </h4>
    

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!
          </p>
          <div className="mt-10 text-center">
            <button className="btn" onClick={()=> {setshowtaskDialog(true)}}>More</button>
          </div>
          <Dialog show={showtaskDialog} title="IIITN" description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!" cancel={cancel}/>
        </div>
        <div className="div-cards">
          <h4 className="heading">
            IIITN &nbsp;&nbsp;&nbsp;
            <i class="fa fa-desktop" style={{ fontSize: 20 }}></i>
          </h4>
     
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!
          </p>
          <div className="mt-10 text-center">
            <button className="btn" onClick={()=> {setshowtaskDialog(true)}}>More</button>
          </div>
          <Dialog show={showtaskDialog} title="IIITN" description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!" cancel={cancel}/>
        </div>
        <div className="div-cards">
          <h4 className="heading">
            IIITN &nbsp;&nbsp;&nbsp;
            <i class="fa fa-desktop" style={{ fontSize: 20 }}></i>
          </h4>
         
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!
          </p>
          <div className="mt-10 text-center">
            <button className="btn" onClick={()=> {setshowtaskDialog(true)}}>More</button>
          </div>
          <Dialog show={showtaskDialog} title="IIITN" description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!" cancel={cancel}/>
        </div>
      </div>
      <div className="head">
        <div className="div-cards">
          <h4 className="heading">
            IIITN &nbsp;&nbsp;&nbsp;
            <i class="fa fa-desktop" style={{ fontSize: 20 }}></i>
          </h4>
    
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!
          </p>
          <div className="mt-10 text-center">
            <button className="btn" onClick={()=> {setshowtaskDialog(true)}}>More</button>
          </div>
          <Dialog show={showtaskDialog} title="IIITN" description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!" cancel={cancel}/>
        </div>
        <div className="div-cards">
          <h4 className="heading">
            IIITN &nbsp;&nbsp;&nbsp;
            <i class="fa fa-desktop" style={{ fontSize: 20 }}></i>
          </h4>
     
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!
          </p>
          <div className="mt-10 text-center">
            <button className="btn" onClick={()=> {setshowtaskDialog(true)}}>More</button>
          </div>
          <Dialog show={showtaskDialog} title="IIITN" description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!" cancel={cancel}/>
        </div>
        <div className="div-cards">
          <h4 className="heading">
            IIITN &nbsp;&nbsp;&nbsp;
            <i class="fa fa-desktop" style={{ fontSize: 20 }}></i>
          </h4>
       
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!
          </p>
          <div className="mt-10 text-center">
            <button className="btn" onClick={()=> {setshowtaskDialog(true)}}>More</button>
          </div>
          <Dialog show={showtaskDialog} title="IIITN" description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!" cancel={cancel}/>
        </div>
      </div>
      <div className="head">
        <div className="div-cards">
          <h4 className="heading">
            IIITN &nbsp;&nbsp;&nbsp;
            <i class="fa fa-desktop" style={{ fontSize: 20 }}></i>
          </h4>
      
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!
          </p>
          <div className="mt-10 text-center">
            <button className="btn" onClick={()=> {setshowtaskDialog(true)}}>More</button>
          </div>
          <Dialog show={showtaskDialog} title="IIITN" description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!" cancel={cancel}/>
        </div>
        <div className="div-cards">
          <h4 className="heading">
            IIITN &nbsp;&nbsp;&nbsp;
            <i class="fa fa-desktop" style={{ fontSize: 20 }}></i>
          </h4>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!
          </p>
          <div className="mt-10 text-center">
            <button className="btn" onClick={()=> {setshowtaskDialog(true)}}>More</button>
          </div>
          <Dialog show={showtaskDialog} title="IIITN" description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!" cancel={cancel}/>
        </div>
        <div className="div-cards">
          <h4 className="heading">
            IIITN &nbsp;&nbsp;&nbsp;
            <i class="fa fa-desktop" style={{ fontSize: 20 }}></i>
          </h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!
          </p>
          <div className="mt-10 text-center">
            <button className="btn" onClick={()=> {setshowtaskDialog(true)}}>More</button>
          </div>
          <Dialog show={showtaskDialog} title="IIITN" description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            numquam placeat repellendus similique error voluptas nam magnam
            vero, excepturi enim obcaecati mollitia esse iusto? Enim molestias
            officiis sed similique adipisci!" cancel={cancel}/>
        </div>
      </div>
      
    </div>
    
  );
}
export default App;
