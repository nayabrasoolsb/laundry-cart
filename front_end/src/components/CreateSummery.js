import "../styles/create-summery.css";

import React, { useContext, useRef, useState } from "react";

import DataIterator from "./DataIterator";
import { PriceContext } from "../App";

export default function CreateSummery({ data, response, onCancel }) {
  let subTotal = useRef(0);
  const prices = useContext(PriceContext);

  const [loading, setLoading] = useState(false);

  function orderId() {
    let orId = "OR";
    orId += Math.ceil(Math.random() * 199_999_999) + 100_000_000;
    return orId;
  }

  const pickupCharges = 90;
  const dataIterator = data.map((product, index) => {
    let total = 0;
    const { type, towel, bleach, quantity, ironing } = product;
    if (towel) total += Number(prices[type]["towel"]);
    if (bleach) total += Number(prices[type]["bleach"]);
    if (ironing) total += Number(prices[type]["ironing"]);
    if (product["washing-machine"])
      total += Number(prices[type]["washing-machine"]);
    subTotal.current += quantity * total;
    return (
      <DataIterator total={total} key={`key is ${index}`} product={product} />
    );
  });

  const storeLocation = "Near Phone booth 10th road";
  const city = "Bangalore";
  const storePhone = "+91 9988776655";
  let totalItems = 0;
  const totalPrice = parseInt(subTotal.current) + pickupCharges;

  data.forEach((product) => {
    const { quantity, ironing, towel, bleach } = product;
    if (product["washing-machine"] || towel || ironing || bleach) {
      totalItems += parseInt(quantity);
    }
  });

  const userData = JSON.parse(localStorage.getItem("user"));
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      products: data,
      storeLocation: "Jp Nagar",
      city,
      storePhone,
      totalItems,
      price: totalPrice,
      orderId: orderId(),
    }),
  };
  async function creatingOrder() {
    setLoading(true);
    await fetch("http://localhost:3004/api/v1/user/create", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          response();
        }
      })
      .catch((err) => {
        console.log("error is ", err);
      });
    setLoading(false);
  }

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
            <div className="detail-text">{storeLocation} </div>
          </div>
          <div>
            <div className="location-text">Phone</div>
            <div className="detail-text">{storePhone} </div>
          </div>
        </div>
        <div className="order-details">
          <div className="text">Order Details</div>
          {dataIterator}
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
          <div style={{ marginBottom: "15px" }}>
            <div className="address-text">Address</div>
          </div>
          <div className="address">
            <h3>Home</h3>
            <div>
              {userData.address}, {userData.district}, {userData.state},{" "}
              {userData.pincode}
            </div>
          </div>
        </div>
        {loading ? (
          <div>loading...</div>
        ) : (
          <div className="confirm">
            <button
              style={{ cursor: "pointer" }}
              disabled={totalPrice === 90}
              onClick={creatingOrder}>
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
