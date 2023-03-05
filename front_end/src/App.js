import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import CreateOrder from "./orders/CreateOrder";
import NavBar from "./components/NavBar";
import NoMatch from "./components/NoMatch";
import OrderHistory from "./orders/OrderHistory";
import React from "react";
import Register from "./sign-up/Register";
import SignInPage from "./sign-in/SignInPage";
import User from "./orders/User";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
