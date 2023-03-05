import "../styles/nav-bar.css";

import React, { useContext } from "react";

import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate()
  const userData = useContext(UserContext)
  return (
    <header id="nav-bar">
      <h2 id="heading">laundry</h2>
      <ul>
        <li className="nav-right">Pricing</li>
        <li className="nav-right">Career</li>
        <li id="sign-in">
          <div>{userData.name}</div>
        </li>
        <li
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/")
          }}>
          Logout
        </li>
      </ul>
    </header>
  );
}
