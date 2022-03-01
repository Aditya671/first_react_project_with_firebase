import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './../notfound';
import Home from './../home';
import DetailedBlog from './../detailed_blog';
import ProtectedRoute from './protectedRoute';
import AddNewBook from './../forms/addNewBook';
import EditBook from "../forms/editBook";
// import SearchBook from './../forms/SearchBook/index';

const AllRoutes = ({user}) => {
    return ( 
        <React.Fragment>
            <Switch>
                <Route exact path="/">
                    <Redirect to='/books' />
                    {/* <Home/> */}
                </Route>
                <Route exact path="/books">
                    <Home/>
                </Route>
                <Route exact path="/books/:id" render={props => <DetailedBlog {...props} user={user}/>}/>
                {/* <Route path='/books/:bookname?' component={SearchBook}/> */}
                <Route exact path={`/books/addNewBook/:id`}>
                    <AddNewBook/>
                </Route>
                <ProtectedRoute user={user} path='/books/editBook/:id' component={EditBook} />
                {/* This route added below will check if the user is logged in Or not */}
                {/* <Route exact path='/books/edit/:id'
                    render={props => user !== 'admin' ? <Redirect to='/'/> : <EditBlog {...props} user={user}/> }/> */}
                {/* 
                **** This route added below will is used to pass values to a route 
                **** <Route exact path='/books/edit/:id' render={props => <EditBlog {...props} user="admin"/>}/> 
                */}
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </React.Fragment>
    );
}
 
export default AllRoutes;