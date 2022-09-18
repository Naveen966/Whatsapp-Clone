import React from "react";
import "./login.css";
import { BrowserRouter, Link } from "react-router-dom";

export default function Logging() {
  return (
    <>
      <div className="LoginBox">
        <div className="innerBox">
          <h1 className="logo">Login</h1>

          <div className="details">
            {/* Email input is here */}
            <div className="emailInfo">
              <b>
                <span className="inputEmail">Email</span>
              </b>
              <input type="email" name="email" id="email" />
            </div>

            {/* Password input is here  */}
            <div className="passwordInfo">
              <b>
                <span className="inputPassword">Password</span>
              </b>
              <input type="password" name="password" id="password" />
            </div>
          </div>
          <div className="loggingButton">
            <button type="submit" className="ID">
              LOGIN
            </button>
            <div className="innerLoggingButton">
              <h5>Forgot Password?</h5>
            </div>
            <h3>Or</h3>
            <hr style={{ width: "100%" }} />
          </div>

          {/* more options to login */}
          <div className="otherOptions">
            <i className="fa fa-google"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-linkedin"></i>
          </div>
          <h4 className="formality">
            Need an account?
            <Link to="/signup">
              <u> SIGN-UP</u>
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
}
