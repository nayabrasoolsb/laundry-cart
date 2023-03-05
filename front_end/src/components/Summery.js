import "../styles/summery.css";

import React from "react";

export default function summery({ name, change }) {
  // console.log(change)
  return (
    <div className="summery">
      <h2 className="summery-heading"
        
        onClick={() => {
          // console.log("change happened")
          change();
        }}>
        <img className="cancel-btn" src="/cancel.png" alt="cancel img" />
      </h2>
      <div id="content">
        summery
        <br /> {name}
        <div></div>
      </div>
    </div>
  );
}
