import React from "react";
import "./Dialog.css";
export default function Dialog({show,title,description,cancel}){

    if(!show)
        return <></>
    
    return(
        <div className="overlay">
            <div className="dialog">
                <div className="dialog__content">
                    <h2 className="dialog__title">{title}</h2>
                    <p className="dialog_description">
                        {description}
                    </p>
                </div>
         
                <div className="dialog__footer">
                    <button className="dialog__cancel" onClick={cancel}>Close</button>
                </div>

            </div>
        </div>
    );
    

}