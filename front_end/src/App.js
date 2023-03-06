import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";

import CreateOrder from "./orders/CreateOrder";
import NavBar from "./components/NavBar";
import NoMatch from "./components/NoMatch";
import OrderHistory from "./orders/OrderHistory";
import Register from "./sign-up/Register";
import SignInPage from "./sign-in/SignInPage";
import User from "./orders/User";

export const PriceContext = createContext();
function App() {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    (async () => {
      await fetch("http://localhost:3004/api/v1/prices", {
        method: "get",
      })
        .then((res) => res.json())
        .then((data) => setPrices(data.prices[0]));
    })();
  }, []);
  return (
    <>
      <PriceContext.Provider value={prices}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<NavBar />}>
                <Route index element={<SignInPage />} />
                <Route path="sign-in" element={<SignInPage />} />
                <Route path="register" element={<Register />} />
              </Route>
              <Route path="/user" element={<User />}>
                <Route index element={<OrderHistory />} />
                <Route path="order-history" element={<OrderHistory />} />
                <Route path="create-order" element={<CreateOrder />} />
              </Route>

              <Route path="*" element={<NoMatch />} />
            </Routes>
          </BrowserRouter>
      </PriceContext.Provider>
    </>
  );
}

export default App;
