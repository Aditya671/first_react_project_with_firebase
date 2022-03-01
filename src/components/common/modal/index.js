import React from 'react';
import Popup from 'reactjs-popup';

const Modal = (props) => {
    return(
        <Popup nested trigger={<button className="btn btn-OpenModal">{props.actionText} </button>} modal>
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>&times;</button>
                    <div className="header">{props.heading} </div>
                    <div className="content">{props.question}</div>
                    <div className="actions">
                        {props.children}
                        <button className="btn btn-cancel" onClick={() => close()}>Cancel</button>
                    </div>
                </div>
            )}
        </Popup>
    )
}
  
export default Modal;