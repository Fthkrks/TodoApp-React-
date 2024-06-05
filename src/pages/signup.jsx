import React from "react";
import "../signup.css";

export default function Signup() {
  return (
    <div className="w-[100vw">
      <div className="container ">
        <div className="signup-box">
          <h2>Sign Up</h2>
          <form>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="email" name="" required="" />
              <label>Mail</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <a href="#">Sign Up</a>
          </form>
        </div>
      </div>
    </div>
  );
}
