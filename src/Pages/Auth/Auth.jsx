import React from "react";

import "./Auth.scss";

export default function Auth() {
  return (
    <div className="auth">
      <div className="auth-content">
        <div className="text">
          <h2>Welcome to Blizly, Please login.</h2>
          <p>
            New member? <a href="/register">Register</a> here.
          </p>
        </div>
        <form>
          <div className="left">
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
            <p>
              <a href="/auth">Forget password?</a>
            </p>
          </div>
          <div className="right">
            <button className="btn-primary">Log In</button>
            <p>Or, Log in with</p>
            <button className="facebook-btn">Facebook</button>
            <button className="google-btn">Google</button>
          </div>
        </form>
      </div>
    </div>
  );
}
