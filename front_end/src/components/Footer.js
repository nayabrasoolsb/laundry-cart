import "../styles/footer.css";

import Info from "./Info";
import React from "react";
import SmallFooter from "./SmallFooter";

export default function Footer() {
  return (
    <footer>
      <div id="footer">
        <span id="footer-head">Now Refer & Earn ₹500 for every referral*</span>
        <br />
        <span id="footer-terms">* Terms and conditions will be applied</span>
      </div>
      <Info />
      <SmallFooter />
    </footer>
  );
}
