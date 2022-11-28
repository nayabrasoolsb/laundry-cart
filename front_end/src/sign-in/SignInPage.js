import Footer from "../components/Footer";
import Info from "../components/Info";
import { Link } from "react-router-dom";
import React from "react";
import RightHalf from "./RightHalf";
import SmallFooter from "../components/SmallFooter";

export default function SignInPage() {
  return (
    <>
    <div id="sign-in-main">
      <div id="sign-in-row">
        <div id="left-half" className="inline">
          <div id="title-div">
            <div id="title">Laundry Service</div>
            <div id="title-about">Doorstep Wash & Dryclean Service</div>
            <div id="account-creation">Don't Have An Account?</div>
            <div id="reg-button"><Link to="/register">Register</Link></div>
          </div>
        </div>
        <div id="right-half" className="inline">
          <RightHalf />
        </div>
      </div>
    </div>
    <Footer />
    <Info />
    <SmallFooter />
    </>
  );
}
