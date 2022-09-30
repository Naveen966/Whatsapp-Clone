import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Logging() {
  const [verifiedEmail, setVerifiedEmail] = useState("");
  const [verifiedPassword, setVerifiedPassword] = useState("");

  const check = () => {
    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        verifiedEmail: verifiedEmail,
        verifiedPassword: verifiedPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

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
              <input
                type="email"
                name="email"
                id="email"
                value={verifiedEmail}
                onChange={(e) => {
                  setVerifiedEmail(e.target.value);
                }}
              />
            </div>

            {/* Password input is here  */}
            <div className="passwordInfo">
              <b>
                <span className="inputPassword">Password</span>
              </b>
              <input
                type="password"
                name="password"
                id="password"
                value={verifiedPassword}
                onChange={(e) => {
                  setVerifiedPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="loggingButton">
            <button type="submit" className="ID" onClick={check}>
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
