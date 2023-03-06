import NavBarUser from "../components/Navbar-user";
import { Outlet } from "react-router-dom";
import React from "react";
import SmallFooter from "../components/SmallFooter";

export default function User() {
  return (
    <div>
      <NavBarUser />

      <Outlet />

      <SmallFooter />
    </div>
  );
}
