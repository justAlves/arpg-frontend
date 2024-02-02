import { AuthContext } from '@/contexts/authContext';
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';

export default function Public({children}) {
  const { isAuthenticated } = useContext(AuthContext);

  return (
      <>        
          {
              isAuthenticated
              ?
              <Navigate to={"/"} /> 
              :
              children
          }
      </>
  )
}
