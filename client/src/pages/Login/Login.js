import CircularProgress from '@mui/material/CircularProgress';
import React, { useContext, useRef } from 'react';
import { NavLink } from "react-router-dom";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import './Login.css';

function Login() {
  const email = useRef();
  const password = useRef();
  const {user,isFetching,error,dispatch} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email); will return a object where current will store the whole input field
    const em = email.current.value;
    const p = password.current.value;
    // console.log(em);
    // console.log(p);
    loginCall({email:em,password:p},dispatch);
  }

  console.log(user);
  
  return (
    <div className='Login'>
      <div className='LoginWrapper'>
        <div className='LoginLeft'>
            <h4 className='LoginLogo'>Logo</h4>
            <span className='LoginDesc'>
                Description of Website.
            </span>
        </div>
        <div className='LoginRight'>
            <form className='LoginBox' onSubmit={handleSubmit}>
                <input type="email" className="LoginInput" placeholder='Email' required ref={email}/>
                <input type="password" className="LoginInput" placeholder='Password' minLength="5" required ref={password}/>
                <button className='loginbutton' disabled={isFetching}>{isFetching? <CircularProgress color="inherit" size="19px" /> : "Log In"}</button>
                <span className='loginForgot'>Forgot Password?</span>
                <button className='loginRegister'>
                  <NavLink
                    to="/register"
                    className="anchor-item"
                    alt="register-button"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Create a new Account
                  </NavLink>
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
