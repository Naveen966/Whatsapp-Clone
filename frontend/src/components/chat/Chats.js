import React from "react";
import ChatBoxHeader from "./ChatBoxHeader";
import Contacts from "./Contact";

function Chats(props) {
  return (
    <>
      <div className="mainBoxes">
        <Contacts widthNum={props.contactWidth} />

        <div
          style={{
            width: "100vw",
            height: "93vh",
            background:
              "url(https://i.pinimg.com/600x315/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg)",
            transition: "ease-in 0.3s",
          }}
        >
          {/* Chat Header */}
          <div className="chatHeader">
            <ChatBoxHeader />
          </div>

          {/* Chat mechanism 👇🏻👇🏻*/}
          <div
            className="inputs"
            style={{
              position: "absolute",
              bottom: "1rem",
              width: props.inputLocation,
              height: "7vh",
              display: "flex",
              justifyContent: "center",
              transition: "ease-in 0.3s",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "75%",
                height: "7vh",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "2rem", position: "relative", left: "2rem" }}
              >
                mood
              </span>
              <input
                type="text"
                style={{
                  width: "65%",
                  height: "80%",
                  border: "none",
                  borderRadius: "25px",
                  paddingLeft: "2.5rem",
                }}
                placeholder="Say Hi! To Your Best Friend"
              />
              <div
                className="buttons"
                style={{ position: "relative", right: "4rem" }}
              >
                <span className="material-symbols-outlined">attach_file</span>
                <span className="material-symbols-outlined">photo_camera</span>
              </div>
              <span
                className="material-symbols-outlined"
                style={{
                  position: "relative",
                  right: "2rem",
                  fontSize: "2rem",
                }}
              >
                send
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chats;
