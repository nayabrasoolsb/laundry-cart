import "../styles/sign-in.css";

import Footer from "../components/Footer";
import LeftHalf from "./LeftHalf";
import React from "react";
import RightHalf from "./RightHalf";

export default function SignInPage() {
  return (
    <>
      <div id="parent">
        <LeftHalf />

        <RightHalf />
      </div>
      <Footer />
    </>
  );
}
