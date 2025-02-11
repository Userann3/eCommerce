import React, { useState } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const naviget = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleState = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('loginData',JSON.stringify(data))
    console.log('Login Data:', data);
    naviget("/Pages/Cart")
  };

  return (
    <>
      <div className="background">
        <div className="shape" />
        <div className="shape" />
      </div>
      <form className='login-form' onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          placeholder="Email or Phone" 
          id="username" 
          name='username' 
          value={data.username} 
          onChange={handleState} 
        />

        <label htmlFor="password">Password</label> 
        <input 
          type="password" 
          placeholder="Password" 
          id="password" 
          name='password' 
          value={data.password} 
          onChange={handleState} 
        />

      {/* <NavLink to={'/Pages/Cart'}> */}
      
      <button type='submit' className='mt-3 login-button'>Log In</button>
      
      {/* </NavLink>  */}

        <div className="social">
          <div className="go">
            <i className="fab fa-google" /> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook" /> Facebook
          </div>
        </div>
      </form>
    </>
  );
}
