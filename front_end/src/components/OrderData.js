import React, { useState } from "react";

import OrderSummery from "./OrderSummery";

export default function OrderData({ data }) {
  const [summery, setSummery] = useState(false);
  const {
    createdAt,
    city,
    orderId,
    price,
    storeLocation,
    storePhone,
    totalItems,
    products
  } = data;
  const s = new Date(createdAt).toLocaleString(undefined, {
    timeZone: "Asia/Kolkata",
  });
  const time = s.split(", ")[1];
  const date = s.split(", ")[0];
  const dateSplit = date.split("/");
  let month;
  switch (parseInt(dateSplit[1])) {
    case 1:
      month = "JAN";
      break;
    case 2:
      month = "FEB";
      break;
    case 3:
      month = "MAR";
      break;
    case 4:
      month = "APR";
      break;
    case 5:
      month = "MAY";
      break;
    case 6:
      month = "JUN";
      break;
    case 7:
      month = "JULY";
      break;
    case 8:
      month = "AUG";
      break;
    case 9:
      month = "SEPT";
      break;
    case 10:
      month = "OCT";
      break;
    case 11:
      month = "NOV";
      break;
    case 12:
      month = "DEC";
      break;
    default:
      month = "DEC";
  }

  function toggleSummery(){
    setSummery(!summery)
  }

  return (
    <tr>
      <td>{orderId}</td>
      <td>
        {dateSplit[0]} {month} {dateSplit[2]} {time}{" "}
      </td>
      <td>{storeLocation}</td>
      <td>{city}</td>
      <td>{storePhone}</td>
      <td>{totalItems}</td>
      <td
        className="table-price"
        style={{
          font: "normal normal bold 15px/48px Open Sans",
          letterSpacing: "0px",
          color: "#5861AE",
        }}>
        {price} Rs
      </td>
      <td>
        <img onClick={toggleSummery} className="eye-icon" src="/eye-icon.png" alt="eye icon" />
      </td>
      {summery && <OrderSummery onCancel={toggleSummery} data={products}/> }
    </tr>
  );
}
