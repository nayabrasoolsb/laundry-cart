import "../styles/aside.css";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function Aside({ path }) {
  const [BG, setBG] = useState(false);
  useEffect(() => {
    if (path === "create") {
      setBG(true);
    } else {
      setBG(false);
    }
  }, []);
  return (
    <div id="aside">
      <div>
        <div>
          <img alt="home img" src="/home-run.png" />
        </div>
      </div>
      <div className={`more-img ${BG ? "color-white" : ""}`}>
        <div>
          <Link to="/user/create-order">
            <img alt="more img" src="/more.png" />
          </Link>
        </div>
      </div>
      <div className={`list-img ${!BG ? "color-white" : ""}`}>
        <div>
          <Link to="/user/order-history">
            <img alt="list img" src="/list.png" />
          </Link>
        </div>
      </div>
    </div>
  );
}
