import axios from "axios";
import React, { useRef } from 'react';
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import './Register.css';

function Register() {
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password.current.value !== passwordAgain.current.value)
    {
      // password.current.setCustomValidity("Password doesn't match!")
      alert("Password doesn't match");
    }
    else
    {
      const userCredential = {
        username : username.current.value,
        email : email.current.value,
        password : password.current.value
      }
      try{
        await axios.post("/auth/register",userCredential);
        navigate("/login")
      }catch(err){
        console.log(err);
      }
      
    }
  }

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
                <input type="text" className="LoginInput" placeholder='UserName' required ref={username}/>
                <input type="email" className="LoginInput" placeholder='Email' required ref={email}/>
                <input type="password" className="LoginInput" placeholder='Password' required ref={password}/>
                <input type="password" className="LoginInput" placeholder='Reenter Password' required ref={passwordAgain}/>
                <button className='loginbutton'>Sign Up</button>
                <button className='loginRegister'>
                  <NavLink
                      to="/login"
                      className="anchor-item"
                      alt="login-button"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      Already Registered?
                    </NavLink>
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register
