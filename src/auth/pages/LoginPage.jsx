import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Authcontext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext( Authcontext )

  const navigate = useNavigate(); 

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';


    login( 'Daniela' ); 
    
    navigate(lastPath, {
      replace: true
    });
  }
  return (
    <>
     <div className='container mt-5'>
      <h1>Login</h1>
      <hr/>

      <button 
      className='btn btn-primary'
      onClick={ onLogin }>
        Login
      </button>
     </div>
    </>
  )
}


