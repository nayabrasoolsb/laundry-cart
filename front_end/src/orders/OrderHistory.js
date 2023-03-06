import "../styles/order-history.css";

import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";

import Aside from "../components/Aside";
import OrderData from "../components/OrderData";
import { PriceContext } from "../App";

export default function OrderHistory() {
  const navigate = useNavigate();
  const prices = useContext(PriceContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      await fetch("https://laundry-service-app-by-nayabrasool-server.onrender.com/api/v1/user/order-history", options)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data.orders);
          console.log(data.orders);
        })
        .catch((err) => {
          console.log("error is ", err);
        });
      setLoading(false);
    };
    fetchOrders();
  }, []);
  const loadingStyle = {
    marginLeft: "20px",
    marginTop: "20px",
  };

  return (
    <div className="order-history">
      <Aside path="history" />
      <div id="main-div">
        <div id="body-header">
          <div id="orders-div">
            <h2>Orders | {orders.length} </h2>
          </div>
          <div>
            <ul>
              <li>
                <div className="create-link">
                  <Link to="/user/create-order">Create</Link>
                </div>
              </li>
              <li id="search-li">
                <div>
                  <input type="text" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* if there are no order we will render this div*/}

        {loading ? (
          <div style={loadingStyle}>Loading....</div>
        ) : orders.length === 0 ? (
          <div className="create-order-div">
            <div>
              <p>No Orders available</p>
              <div className="create-link">
                <Link to="/user/create-order">Create</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="orders-table">
            <table>
              <thead>
                <tr>
                  <th>OrderId</th>
                  <th>Order Date & Time</th>
                  <th>Store Location</th>
                  <th>City</th>
                  <th>Store Phone</th>
                  <th>Total Items</th>
                  <th>Price</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((obj, i) => (
                  <OrderData key={i} data={obj} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
