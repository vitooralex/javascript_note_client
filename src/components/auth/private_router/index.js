import React from 'react';
import { Redirect, Route } from 'react-router';

const privateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest} render={props => (
            localStorage.getItem('user') 
            ? <Component {...props} /> 
            : <Redirect to={{ pathname: '/login'}} />
        )} 
    />
)

export default privateRoute;