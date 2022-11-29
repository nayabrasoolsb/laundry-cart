import { Link } from "react-router-dom";
import React from "react";

export default function RightHalf() {
  return (
    <div id="reg-right-half" className="child-reg">
      <div>
        <div id="reg-content">
          <div id="reg-title">REGISTER</div>
          <div id="reg-grid">
            <div>
              <input placeholder="Name" type="text" />
            </div>
            <div>
              <input placeholder="Email" type="text" />
            </div>
            <div>
              <input placeholder="Phone" type="text" />
            </div>
            <div>
              <input placeholder="State" type="text" />
            </div>
            <div>
              <input placeholder="District" type="text" />
            </div>
            <div>
              <input placeholder="Address" type="text" />
            </div>
            <div>
              <input placeholder="Pincode" type="text" />
            </div>
          </div>
        </div>

        <div id="reg-right-btm-flex">
          <div id="terms">
            <div>
              <input type="checkbox" />
              <label id="terms-text">
                I agree to Terms & Condition receiving marketing and promotional
                materials
              </label>
            </div>
          </div>
          <div id="reg-btn">
            <Link>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
