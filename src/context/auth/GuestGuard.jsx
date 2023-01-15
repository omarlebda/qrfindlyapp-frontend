import React, {useContext}from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import AuthContext from './AuthContext';

function GuestGuard({children}) {
    const {isAuthenticated} = useContext(AuthContext)
    
    if (!isAuthenticated) {
        return (
          <Redirect to='/sign-in' />
        );
    }

    return (
      <>{children}</>
    )
}

export default GuestGuard