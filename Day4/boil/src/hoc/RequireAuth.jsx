import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import{useSelector} from 'react-redux'


const RequireAuth = ({ children }) => {
  
  const { pathname } = useLocation();
  const { isLoggedin}=useSelector((store)=>store.authManager) 
  if (isLoggedin) {
    return children;
  } else {
    return (
      // Redirecting to Login page
      <Navigate
        to="/login"
        state={{ from: pathname }}
        replace
        // spacer
      />
    );
  }
};

export default RequireAuth;
