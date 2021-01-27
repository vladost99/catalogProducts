import React from 'react'
import {Route, Redirect} from 'react-router-dom';
function PrivateRoute({ auth,children,redirect, ...rest }) {
    return (
      <Route {...rest} render={({location}) => {
        return auth ? children : <Redirect  to={{pathname: redirect,state: {from : location}}}/>    
      }}
      />
    )
}

export default PrivateRoute;
