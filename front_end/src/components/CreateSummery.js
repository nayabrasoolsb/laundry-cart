import "../styles/create-summery.css";

import React, { useContext, useRef } from "react";

import DataIterator from "./DataIterator";
import { UserContext } from "../App";

export default function CreateSummery({ data, onCancel, prices }) {
  let subTotal = useRef(0);
  const userData = useContext(UserContext);
  const pickupCharges = 90;
  let totalItems = 0;
  data.forEach((product) => {
    const { quantity, ironing, towel, bleach } = product;
    if (product["washing-machine"] || towel || ironing || bleach) {
      totalItems += parseInt(quantity);
    }
  });
  const totalPrice = subTotal.current + pickupCharges;
  const phone = "+91 9988776655";
  const city = "Bangalore";
  const storeLocation = "Near Phone booth 10th road";
  return (
    <div className="summery-main">
      <div className="content">
        <div className="summery-head">
          <div className="text">Summery</div>
          <div className="cancel">
            <span onClick={onCancel}>X</span>
          </div>
        </div>
        <div className="store-info">
          <div>
            <input type="text" value="Jp Nagar" disabled />
          </div>
          <div>
            <div className="location-text">Store Location:</div>
            <div className="detail-text">Near Phone booth 10th road</div>
          </div>
          <div>
            <div className="location-text">Phone</div>
            <div className="detail-text">+91 9988776655</div>
          </div>
        </div>
        <div className="order-details">
          <div className="text">Order Details</div>
          {data.map((product, index) => {
            let total = 0;
            const { type, towel, bleach, quantity, ironing } = product;
            if (towel) total += Number(prices[type]["towel"]);
            if (bleach) total += Number(prices[type]["bleach"]);
            if (ironing) total += Number(prices[type]["ironing"]);
            if (product["washing-machine"])
              total += Number(prices[type]["washing-machine"]);
            subTotal.current = subTotal.current + quantity * total;
            return (
              <DataIterator
                total={total}
                key={`key is ${index}`}
                product={product}
              />
            );
          })}
          <div className="sub-total">
            <span>Sub total:</span>
            <span> {subTotal.current}</span>
            <hr className="last" />
          </div>
          <div className="sub-total">
            <span>Pickup Charges:</span>
            <span>{pickupCharges}</span>
          </div>
          <div className="total">
            <div>
              <span>Total </span>
              <span> Rs {totalPrice}</span>
            </div>
          </div>
          <hr style={{ margin: "10px 0" }} />
          <div>
            <div className="address-text">Address</div>
          </div>
          <div className="address">
            <h3>Home</h3>
            <div>
              {userData.address}, {userData.district}, {userData.state},{" "}
              {userData.pincode}{" "}
            </div>
          </div>
        </div>

        <div className="confirm">
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
}
