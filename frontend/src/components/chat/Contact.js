import React from "react";
import ContactInnerHeader from "./ContactInnerHeader";
import "./contact.css";
import Header from "../Header";

function Contacts(Props) {
  const dummy = {
    display: "flex",
    fontSize: "0.70rem",
    alignItems: "center",
    margin: "1rem",
    marginLeft: "0px",
  };

  return (
    <>
      {/* <Header id="menuShower" /> */}
      <div
        style={{
          transition: "ease-in 0.3s",
          width: Props.widthNum,
          height: "93vh",
          backgroundColor: "#d2d0d0",
        }}
      >
        {/* inner header has its own component */}

        <ContactInnerHeader />

        {/* all users data  */}
        <div>
          {/* all dummy contacts code are here */}

          {/* #1 */}
          <div className="dummyContacts">
            <div id="firstDummy" style={dummy}>
              <img
                className="DPImage"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjC0CZGGDJbJ4hH1_jLKaMzhL96cwCQ8OeQ&usqp=CAU"
              />
              <div className="details">
                <h1>Name-</h1>
                <p className="message">
                  Hello
                  <span className="material-symbols-outlined">done</span>
                </p>
              </div>
            </div>
          </div>

          {/* #2 */}
          <div className="dummyContacts">
            <div id="firstDummy" style={dummy}>
              <img
                className="DPImage"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjC0CZGGDJbJ4hH1_jLKaMzhL96cwCQ8OeQ&usqp=CAU"
              />
              <div className="details">
                <h1>Name-</h1>
                <p className="message">
                  Hello
                  <span className="material-symbols-outlined">done</span>
                </p>
              </div>
            </div>
          </div>

          {/* #3 */}
          <div className="dummyContacts">
            <div id="firstDummy" style={dummy}>
              <img
                className="DPImage"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjC0CZGGDJbJ4hH1_jLKaMzhL96cwCQ8OeQ&usqp=CAU"
              />
              <div className="details">
                <h1>Name-</h1>
                <p className="message">
                  Hello
                  <span className="material-symbols-outlined">done</span>
                </p>
              </div>
            </div>
          </div>

          {/* end of dummy data */}
        </div>
      </div>
    </>
  );
}

export default Contacts;
