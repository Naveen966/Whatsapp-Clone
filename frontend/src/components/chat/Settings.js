import React from "react";
import "./settings.css";
import { Link, Navigate } from "react-router-dom";

function Settings(Props) {
  return (
    <div
      id="mainSettingBox"
      style={{
        display: Props.displayProperty,
      }}
    >
      <div
        style={{
          zIndex: "2",
          position: "absolute",
          backgroundColor: "#222",
          height: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "1rem",
          borderRadius: "5px",
        }}
      >
        <h3 className="options">
          <span className="material-symbols-outlined">account_circle</span>
          &nbsp; Profile
        </h3>
        <h3 className="options">
          <span className="material-symbols-outlined">group_add</span>&nbsp; New
          Group
        </h3>
        <h3 className="options">
          <span className="material-symbols-outlined">dataset_linked</span>
          &nbsp; Linked Devices
        </h3>
        <h3 className="options">
          <span className="material-symbols-outlined">settings_suggest</span>
          &nbsp; Advance Settings
        </h3>
        <Link to="/login">
          <h3 className="options">
            <span className="material-symbols-outlined">logout</span>
            &nbsp; Logout
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default Settings;
