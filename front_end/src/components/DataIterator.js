import "../styles/iterator.css";

import React, { memo } from "react";

export default memo(function DataIterator({ product, total }) {
  const { type, quantity, towel, bleach, ironing } = product;
  let str = "";
  if (product["washing-machine"]) str += str ? ", Washing" : "Washing";
  if (ironing) str += str ? ", Ironing" : "Ironing";
  if (towel) str += str ? ", Drying" : "Drying";
  if (bleach) str += str ? ", Chemical Wash" : "Chemical Wash";

  if (quantity > 0 && str) {
    return (
      <>
        <div className="iterator-main">
          <div className="product-type">{type}</div>
          <div className="wash-types">{str} </div>
          <div className="calc">
            <span>
              {quantity} x {total} =
            </span>
            <span>{quantity * total}</span>
          </div>
        </div>
        <hr />
      </>
    );
  }
});
