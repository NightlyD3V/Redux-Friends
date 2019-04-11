import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//create private route 
export const PrivateRoute = ({ component: Component, ...rest}) => {
    console.log(localStorage.getItem('token'));
    return (
        <Route 
            {...rest}
            render={props => localStorage.getItem('token') ? <Component {...props} /> : <Redirect to='/login'/>}
        />
    )
} 
