
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Tooltip = (props,...rest) => {
    const mycontent = props.content;
    return(
        <React.Fragment>
            <Popup trigger={props.children} {...rest}
            closeOnDocumentClick on={['hover', 'focus']} arrow={'center center'} nested>
                {mycontent}
            </Popup>
        </React.Fragment>
    )
}
export default Tooltip;