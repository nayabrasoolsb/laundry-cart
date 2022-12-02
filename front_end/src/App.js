import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import React from "react";
import Register from "./sign-up/Register";
import SignInPage from "./sign-in/SignInPage";
import  LandingPage  from "./sign-in/LandingPage";
import UserSessionContextProvider from "./components/UserSessionContext"

function App() {
  return (
    <>
      <BrowserRouter>
      <UserSessionContextProvider>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<SignInPage />} />
              <Route path="sign-in" element={<SignInPage />} />
              <Route path="register" element={<Register />} />
              <Route path="landingPage" element={<LandingPage />} />
            </Route>
          </Routes>
      </UserSessionContextProvider>
        
      </BrowserRouter>
    </>
  );
}

export default App;
