import React from "react";

function ChatBoxHeader() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "rgb(99 84 255)",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left hand side functions */}

        <div className="box" style={{ display: "flex", alignItems: "center" }}>
          <div className="image">
            <img
              style={{ borderRadius: "50%", width: "3vw" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjC0CZGGDJbJ4hH1_jLKaMzhL96cwCQ8OeQ&usqp=CAU"
            />
          </div>
          <div className="detail" style={{ marginLeft: "1rem" }}>
            <h3>name</h3>
            <p>last seen: time</p>
          </div>
        </div>

        {/* Right hand side functions */}
        <div
          className="callFunc"
          style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}
        >
          <div className="call">
            <span className="material-symbols-outlined">call</span>
          </div>

          <div className="videoC">
            <span className="material-symbols-outlined">video_call</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBoxHeader;
