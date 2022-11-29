import { Link } from "react-router-dom";
import React from "react";

export default function LeftHalf() {
  return (
    <div className="child-reg">
      <div className="flex-children">
        <div id="title">Laundry Service</div>
        <div id="title-about">Doorstep Wash & Dryclean Service</div>
        <div id="account-login">Already Have An Account?</div>
        <div id="sign-in-button">
          <Link to="/sign-in">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
