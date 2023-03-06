import "../styles/success-popup.css";

import React from "react";
import { useNavigate } from "react-router-dom";

export default function SuccessPopup() {
  const navigate = useNavigate();
  function toOrders() {
    navigate("/user/order-history");
  }
  return (
    <div className="success-popup">
      <div className="success-content">
        <div>
          <div>
            <img src="/success-tick.png" alt="success tick" />
          </div>
          <div className="success-msg">Your order is Successful.</div>
          <div className="success-goto">
            You can track the delivery in the "Orders" section.
          </div>
          <div className="goto-btn">
            <button  onClick={toOrders}>Go to Orders</button>
          </div>
        </div>
      </div>
    </div>
  );
}
