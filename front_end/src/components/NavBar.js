import "../styles/nav-bar.css";

import { Link, Outlet } from "react-router-dom";

import React from "react";

export default function NavBar() {
  return (
    <>
      <header id="nav-bar">
        <h2 id="heading">laundry</h2>
        <ul>
          <li className="nav-right">Home</li>
          <li className="nav-right">Pricing</li>
          <li className="nav-right">Career</li>
          <li id="sign-in">
            <Link to="sign-in">Sign In</Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
}
