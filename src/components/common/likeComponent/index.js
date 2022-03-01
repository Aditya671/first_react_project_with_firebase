import React from 'react';
const LikeComponent = (props) => {
    let classes = "iLike";
        if (!props.liked) classes += " active";
    return ( 
        <React.Fragment>
            <span style={{cursor:'pointer'}} className={classes} onClick={props.onClick}> 
                <span className="po-relative">
                    {props.liked ? <span className='no'></span> : <span className='yes'></span>}{props.children}
                </span>
            </span>
        </React.Fragment>
     );
}
 

export default LikeComponent;