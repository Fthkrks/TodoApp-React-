import React from "react";
import "../signin.css";

export default function Login() {
  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <a href="#">Log In</a>
        </form>
        <br />
        <p className="create-account">
          Don't have an account? <br /> <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
