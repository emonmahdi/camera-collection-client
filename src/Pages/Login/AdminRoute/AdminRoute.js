 
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {user, admin, isLoading} = useAuth();
    if(isLoading) { return <CircularProgress color="success" /> }
    return (
        <Route
        {...rest}
        render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      } 
        >
            
        </Route>
    );
};

export default AdminRoute;