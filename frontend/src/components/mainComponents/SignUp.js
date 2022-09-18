import React from "react";
import "./signUp.css";
import { BrowserRouter, Link } from "react-router-dom";

export default function signUp() {
  return (
    <>
      <div className="mainContainer">
        <div className="form">
          <div className="allInputs">
            <h1 className="logo">Sign-Up</h1>

            <div className="info">
              {/* user name */}
              <div className="innerBoxData">
                <div className="formsName">
                  <span>
                    <b className="nameOfForm">First Name</b>
                  </span>
                </div>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="inputs"
                />
              </div>

              <div className="innerBoxData">
                <div className="formsName">
                  <span>
                    <b className="nameOfForm">Last Name</b>
                  </span>
                </div>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="inputs"
                />
              </div>
            </div>

            <div className="info">
              {/* personal details */}
              <div className="innerBoxData">
                <div className="formsName">
                  <span>
                    <b className="nameOfForm">Phone Number</b>
                  </span>
                </div>
                <input
                  type="text"
                  name="phNumber"
                  id="phNumber"
                  className="inputs"
                />
              </div>

              <div className="innerBoxData">
                <div className="formsName">
                  <span>
                    <b className="nameOfForm">Email</b>
                  </span>
                </div>
                <input
                  type="email"
                  name="email"
                  id="emailID"
                  className="inputs"
                />
              </div>
            </div>

            <div className="info">
              {/* very personal data */}
              <div className="innerBoxData">
                <div className="formsName">
                  <span>
                    <b className="nameOfForm">Password</b>
                  </span>
                </div>
                <input
                  type="password"
                  name="password"
                  id="hiddenPassword"
                  className="inputs"
                />
              </div>

              <div className="innerBoxData">
                <div className="formsName">
                  <span>
                    <b className="nameOfForm">Confirm Password</b>
                  </span>
                </div>
                <input
                  type="password"
                  name="confirm"
                  id="confirmPassword"
                  className="inputs"
                />
              </div>
            </div>
            {/* end of form filed */}
            <div>
              <button type="submit" className="ID">
                Create
              </button>
            </div>

            <h4 className="Formality2nd">
              Already have an Account?
              <Link to="/login">
                <u>Login</u>
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
