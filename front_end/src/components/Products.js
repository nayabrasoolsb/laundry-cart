import "../styles/products.css";

import React, {memo, useCallback, useEffect, useState} from "react";

function Products({ product: [product, name], prices, reset, change }) {
  let x = "/images/";
  const [washingMachine, setWashingMachine] = useState(false);
  const [ironing, setIroning] = useState(false);
  const [towel, setTowel] = useState(false);
  const [bleach, setBleach] = useState(false);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (reset) {
      resetHandler();
    }
  }, [reset]);
  useEffect(() => {
    change("quantity", qty, name);
  }, [qty]);
  useEffect(() => {
    change("washing-machine", washingMachine, name);
  }, [washingMachine]);
  useEffect(() => {
    change("ironing", ironing, name);
  }, [ironing]);
  useEffect(() => {
    change("towel", towel, name);
  }, [towel]);
  useEffect(() => {
    change("bleach", bleach, name);
  }, [bleach]);
  const resetHandler = useCallback(() => {
    setBleach(false);
    setIroning(false);
    setQty(0);
    setWashingMachine(false);
    setTowel(false);
    setTotal(0);
  }, [bleach, washingMachine, ironing, qty, towel, total]);

  function onChangeSetTotal(type, state) {
    if (state) {
      setTotal((prevQty) => prevQty + parseInt(prices[name][type]));
    } else {
      setTotal((prevQty) => prevQty - parseInt(prices[name][type]));
    }
  }
  return (
    <div className="product-flex">
      <div className="product-img">
        <div className="img-div">
          <div>
            <img src={product} alt="product" />
          </div>
          <div className="product-name">{name}</div>
        </div>
      </div>
      <div className="product-qty">
        <div>
          <input
            className="qty-input"
            value={qty}
            onChange={(e) => {
              setQty(e.target.value);
            }}
            min="0"
            type="number"
          />
        </div>
      </div>
      <div className="wash-type">
        <div title="washing">
          <img
            onClick={() => {
              setWashingMachine(!washingMachine);
              onChangeSetTotal("washing-machine", washingMachine);
            }}
            src={
              !washingMachine
                ? x + "washing-machine.svg"
                : x + "washing-machine1.svg"
            }
            alt="washing machine img"
          />
        </div>
        <div title="ironing">
          <img
            onClick={() => {
              setIroning(!ironing);
              onChangeSetTotal("ironing", ironing);
            }}
            src={!ironing ? x + "ironing.svg" : x + "ironing1.svg"}
            alt="ironing img"
          />
        </div>
        <div title="towel">
          <img
            onClick={() => {
              setTowel(!towel);
              onChangeSetTotal("towel", towel);
            }}
            src={!towel ? x + "towel.svg" : x + "towel1.svg"}
            alt="towel img"
          />
        </div>
        <div title="bleach">
          <img
            onClick={() => {
              setBleach(!bleach);
              onChangeSetTotal("bleach", bleach);
            }}
            src={!bleach ? x + "bleach.svg" : x + "bleach1.svg"}
            alt="bleach img"
          />
        </div>
      </div>
      <div className="price-div">
        {total ? (
          <div className="calc">
            <span className="calc-num">
              {qty}x{-total}
            </span>{" "}
            = <span className="total">{qty * -total}</span>
          </div>
        ) : (
          <div className="hyphon">—</div>
        )}
        {(qty > 0 || bleach || washingMachine || towel || ironing) && (
          <div className="reset-right">
            <div className="reset-btn">
              <input value="Reset" type="button" onClick={resetHandler} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default memo(Products);
