import React, { useState } from "react";
import "./signUp.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  async function postData() {
    // const { name, lastName, phNumber, email, password, cPassword } = use;

    const res = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: {
        name: name,
        lastName: lastName,
        phNumber: phNumber,
        email: email,
        password: password,
        cPassword: cPassword,
      },
    });

    const data = await res.json();
    console.log(data);
  }

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
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
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
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
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
                  value={phNumber}
                  onChange={(e) => {
                    setPhNumber(e.target.value);
                  }}
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
                  value={cPassword}
                  onChange={(e) => {
                    setCPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            {/* end of form filed */}
            <div>
              <button type="submit" className="ID" onClick={postData}>
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
