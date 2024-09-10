import React from 'react';
import './CSS/LoginSignup.css';
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign-Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Your password" />
          <button>Continue</button>
      </div>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>I agree to the terms and conditions</p>
        </div>
        </div>
    </div>
  );
};

export default LoginSignup;
