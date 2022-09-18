import React from "react";

function Header(Props) {
  return (
    <>
      {/* menu is here */}
      <div
        style={{
          backgroundColor: "#222",
          display: "flex",
          justifyContent: "space-between",
          height: "7%",
          alignItems: "center",
          color: "white",
        }}
      >
        <div>
          <span
            id={Props.id}
            onClick={Props.menu}
            className="material-symbols-outlined"
            style={{
              fontSize: "2.5rem",
              transition: "ease-in 0.3s",
              cursor: "pointer",
            }}
          >
            menu
          </span>
        </div>

        {/* Add persons from here */}
        <div>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "2rem" }}
          >
            person_add
          </span>

          <span
            className="material-symbols-outlined"
            style={{ fontSize: "2rem" }}
          >
            group_add
          </span>
        </div>
      </div>
    </>
  );
}
export default Header;
