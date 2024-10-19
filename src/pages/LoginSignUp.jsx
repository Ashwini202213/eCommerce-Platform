import React from 'react'
import './css/LoginSignUp.css'
const LoginSignUp = () => {
  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fields">
          <input type="text" name="name" placeholder='Your Name' />
          <input type="email" name="email" placeholder='Your Email' />
          <input type="password" name="pasword" placeholder='Enter password' />

        </div>
        <button className='continue'>Continue</button>

        <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing I agree to the terms of use and privacy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp