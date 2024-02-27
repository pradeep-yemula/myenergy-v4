import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="text">
                Sign Up
            </div>
            <div className="underline">
            </div>
            <div className="inputs">
            <div className="input">
                    <input type="text" />
                </div>
                <div className="input">
                    <input type="email" />
                </div><div className="input">
                    <input type="password" />
                </div>
                </div>
                <div className="forgot-password">Forgot Password? <span>Click here!</span></div>
                <div className="submit-container">
<div className="submit">Sign Up</div>
<div className="login">Login</div>
                    </div>
            
        </div>
    </div>
  )
}

export default LoginSignup