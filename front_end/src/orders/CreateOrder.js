import "../styles/create-order.css";

import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import Aside from "../components/Aside";
import CreateSummery from "../components/CreateSummery";
import { PriceContext } from "../App";
import Products from "../components/Products";
import SuccessPopup from "../components/SuccessPopup";
import { useNavigate } from "react-router-dom";

export default memo(function CreateOrder() {
  const navigate = useNavigate();

  const prices = useContext(PriceContext);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const [reset, setReset] = useState(false);
  const [summery, setSummery] = useState(false);
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState([
    {
      type: "Shirts",
      quantity: 0,
      "washing-machine": false,
      ironing: false,
      towel: false,
      bleach: false,
    },
    {
      type: "T shirts",
      quantity: 0,
      "washing-machine": false,
      ironing: false,
      towel: false,
      bleach: false,
    },
    {
      type: "Trousers",
      quantity: 0,
      "washing-machine": false,
      ironing: false,
      towel: false,
      bleach: false,
    },
    {
      type: "Jeans",
      quantity: 0,
      "washing-machine": false,
      ironing: false,
      towel: false,
      bleach: false,
    },
    {
      type: "Boxers",
      quantity: 0,
      "washing-machine": false,
      ironing: false,
      towel: false,
      bleach: false,
    },
    {
      type: "Joggers",
      quantity: 0,
      "washing-machine": false,
      ironing: false,
      towel: false,
      bleach: false,
    },
    {
      type: "Others",
      quantity: 0,
      "washing-machine": false,
      ironing: false,
      towel: false,
      bleach: false,
    },
  ]);

  let productArr = [
    ["/images/shirt.jpg", "Shirts"],
    ["/images/t-shirt.jpg", "T shirts"],
    ["/images/trousers.jpg", "Trousers"],
    ["/images/jeans.jpg", "Jeans"],
    ["/images/joggers.jpg", "Joggers"],
    ["/images/boxers.png", "Boxers"],
    ["/images/others.jpg", "Others"],
  ];
  const typeChangeHandler = useCallback(
    (washType, value, nameOfProduct) => {
      setReset(false);
      setData((oldData) => {
        let newData = oldData.map((obj) => {
          if (obj["type"] === nameOfProduct) {
            obj[washType] = value;
          }
          return obj;
        });
        return newData;
      });
    },
    [reset, data],
  );
  function resetEverything() {
    setReset(true);
  }
  const response = useCallback(() => {
    setSummery(false);
    setPopup(true);
  }, [summery]);
  return (
    <div className="create-order">
      <Aside path="create" />
      <div id="main-create">
        <div id="body-header">
          <div id="orders-div">
            <h2>Create Order</h2>
          </div>
          <div>
            <ul>
              <li id="search-li">
                <div>
                  <input type="text" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div id="table-div">
          <div>
            <table>
              <thead>
                <tr id="table-head">
                  <th className="product-types">Product Types</th>
                  <th className="quantity">Quantity</th>
                  <th className="wash-types">Wash Type</th>
                  <th>Price</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div className="product-div">
          {productArr.map((product, index) => (
            <Products
              change={typeChangeHandler}
              reset={reset}
              product={product}
              key={index}
            />
          ))}
        </div>
        <div className="order-ctrl">
          <div className="cancel">
            <button title="reset everything" onClick={resetEverything}>
              Cancel
            </button>
          </div>
          <div className="proceed">
            <button title="proceed to summery" onClick={() => setSummery(true)}>
              Proceed
            </button>
          </div>
        </div>
      </div>
      {summery && (
        <CreateSummery
          onCancel={() => setSummery(false)}
          data={data}
          response={response}
        />
      )}
      {popup && <SuccessPopup />}
    </div>
  );
});
