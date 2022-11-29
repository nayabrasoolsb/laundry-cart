import React from "react";

export default function RightHalf() {
  return (
    <div id="right-half" className="child">
      <div className="flex-children">
        <div id="sign-in-text">Sign in</div>
        <div>
          <input type="text" placeholder="Mobile/Email" />
        </div>
        <div>
          <input type="text" placeholder="Password" />
        </div>
        <div id="password-reset">Forgot Password?</div>
      </div>
      <div id="sign-in-btn">
        <div >Sign In</div>
      </div>
    </div>
  );
}
