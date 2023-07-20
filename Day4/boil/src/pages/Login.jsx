import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import{useSelector,useDispatch} from 'react-redux'
import { getauth } from "../redux/auth/auth.actions";

import { useEffect } from "react";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const { isLoggedin}=useSelector((store)=>store.authManager) 
const dispatch=useDispatch()
const navigate = useNavigate();
const { state } = useLocation();

useEffect(()=>{
if(isLoggedin){
if(state.from){
  navigate(state.from,{replace:true})
}else{
  navigate("/")
}
}

},[isLoggedin])

const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
   dispatch(getauth(loginCreds))
  };
  return (
    <div>
      Login
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          onChange={hanldeChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password..."
          onChange={hanldeChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
