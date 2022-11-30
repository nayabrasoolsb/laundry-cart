import "../styles/sign-up.css"

import Footer from "../components/Footer";
import LeftHalf from "./LeftHalf";
import React from "react";
import RightHalf from "./RightHalf";

export default function Register() {
  return (
    <>
      <div id="parent-reg">
        <LeftHalf />
        <RightHalf />
      </div>
      <Footer />
    </>
  );
}
