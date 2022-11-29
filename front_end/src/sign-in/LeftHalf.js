import { Link } from "react-router-dom";
import React from "react";

export default function LeftHalf() {
  return (
    <div className="child">
      <div className="flex-children">
        <div id="title">Laundry Service</div>
        <div id="title-about">Doorstep Wash & Dryclean Service</div>
        <div id="account-creation">Don't Have An Account?</div>
        <div id="reg-button">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
