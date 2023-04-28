import React, { useContext } from 'react'
import { Authcontext } from '../auth/context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({children}) => {

    const { logged } = useContext(Authcontext); 
    const {pathname, search} = useLocation();
    

    const lastPath = pathname + search; 
    localStorage.setItem('lastPath', lastPath); 
    

  return (logged)?
        children :
        <Navigate to='/login'/>
}
