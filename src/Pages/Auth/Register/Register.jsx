import React from "react";

import "./Register.scss";

export default function Register() {
  return (
    <div className="register">
      <div className="register-content">
        <div className="text">
          <h2>Create Your Blizly Account</h2>
          <p>
            Already member? <a href="/auth">Log in</a> here.
          </p>
        </div>
        <form>
          <div className="left">
            <div className="row">
              <label>First Name*</label>
              <input
                type="text"
                placeholder="Please Enter Your First Name"
                required={true}
              />
            </div>
            <div className="row">
              <label>Phone Number or Email*</label>
              <input
                type="text"
                placeholder="Please Enter Your Number or Email"
                required={true}
              />
            </div>
            <div className="row">
              <label>Password*</label>
              <input
                type="password"
                placeholder="Please Enter Your Password"
                required={true}
              />
            </div>
          </div>
          <div className="right">
            <button className="btn-primary">Sign up</button>
            <p className="agreement">
              By clicking “SIGN UP”, I agree to Blizly’s
              <a href="/register"> Terms of Use </a> and
              <a href="/register"> Privacy Plicy</a>
            </p>
            <p>Or, Sign Up with</p>
            <button className="facebook-btn">Facebook</button>
            <button className="google-btn">Google</button>
          </div>
        </form>
      </div>
    </div>
  );
}
