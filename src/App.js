
/*    Official Lib Imports */
import React from 'react';
import {Router} from 'react-router-dom'
import history from './history';
import { useState,useEffect } from 'react';
import _ from 'lodash';
/*    Components Imports  */
import Header from './components/common/header';
import ErrorBoundary from './components/errorBoundary';
import AllRoutes from './components/routes/index';
/*    Components Imports */
import './App.css'; // CSS Import 
import 'reactjs-popup/dist/index.css';
import { AppStrings } from './components/common/strings/strings'; //Strings

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [user,setUser] = useState('aditya');
    useEffect(() => {
      console.log('tada',history)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_.range(0,2)])
    return (
    <Router history={history}>
        <div className="App">
            <ErrorBoundary>
                <Header title={AppStrings.App_title}/>
                <AllRoutes user={user}/>
            </ErrorBoundary>
        </div>
    </Router>
  );
}

export default App;
