import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/mainComponents/Login";
import SignUp from "./components/mainComponents/SignUp";
import "./App.css";
import Chats from "./components/chat/Chats";
import Header from "./components/Header";

// side bar menu button functions are below
function App() {
  let [ChatShowerCSS, setChatShowerCSS] = useState("25%");
  let [menuShowerCSS, setMenuShowerCSS] = useState("75%");

  function menu() {
    const menuBar = document.getElementById("menuShower");
    const mainSettingBox = document.getElementById("mainSettingBox");
    if (ChatShowerCSS === "25%") {
      menuBar.style.transform = "rotate(180deg)";
      setTimeout(() => {
        mainSettingBox.style.display = "none";
      }, 500);
      setMenuShowerCSS("100%");
      setChatShowerCSS("0%");
    } else {
      menuBar.style.transform = "rotate(0deg)";
      setMenuShowerCSS("75%");
      setChatShowerCSS("25%");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Header id="menuShower" menu={menu} />
        <Routes>
          <Route
            path="/"
            element={
              <Chats
                contactWidth={ChatShowerCSS}
                inputLocation={menuShowerCSS}
              />
            }
          />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
