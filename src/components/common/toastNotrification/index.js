import React from "react";
import { ToastContainer } from "react-toastify";

const ToastNotrification = () => {
    return ( 
        <React.Fragment>
            <ToastContainer position="bottom-right" autoClose={2000} 
            hideProgressBar={false} newestOnTop={false} closeOnClick/>
        </React.Fragment>
     );
}
 
export default ToastNotrification;