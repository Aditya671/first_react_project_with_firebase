import React from 'react';
import {Route,Redirect } from 'react-router-dom';
const ProtectedRoute = ({path,user,component:Component,render,...rest}) => {
    return ( 
        <Route exact path={path} {...rest}
            render={props => user !== 'admin' ? 
                <Redirect to={{ pathname:'/books/',state:{from:props.location}}}/> :  
                (Component ? <Component {...props}/> : render(props) ) 
            }
        />
     );
}
 
export default ProtectedRoute;