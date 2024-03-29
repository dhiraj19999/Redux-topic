import React from "react";
import{useSelector,useDispatch} from 'react-redux'
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../redux/auth/auth.actions";

const Navbar = () => {
  const { isLoggedin}=useSelector((store)=>store.authManager) 
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const handleLoginClick = () => {
    // login screen
    if (isLoggedin) {
      dispatch(logout());
      // he wants to logout
    } else {
      // he wants to login
      navigate("/login");
    }
  };
  return (
    <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
      Navbar:
      <Link to="">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/feeds">Feeds</Link>
      <button onClick={handleLoginClick}>
        {/* Spacer */}
        {isLoggedin ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
