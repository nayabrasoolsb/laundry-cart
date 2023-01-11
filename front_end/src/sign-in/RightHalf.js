import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function login(data) {
  return fetch("http://localhost:5000/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
export default function RightHalf() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  async function changeHandler(e) {
    setData((oldData) => ({ ...oldData, [e.target.name]: e.target.value }));
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log(data);
  }
  // console.log(data.password)
  // console.log(data);

  const navigate = useNavigate();
  return (
    <div id="right-half" className="child">
      <form
        action="#"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          login(data).then((data) => {
            if (data.success) {
              localStorage.setItem("session", data.token);
              navigate("/landingpage");
              return;
            }
            alert("Login failed");
          });
        }}>
        <div className="flex-children">
          <div id="sign-in-text">Sign in</div>
          <div>
            <input
              value={data.email}
              name="email"
              type="text"
              placeholder="Mobile/Email"
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div>
            <input
              value={data.password}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => {
                changeHandler(e);
              }}
            />
            <span id="lock">
              <img
                onClick={() => setShowPassword(!showPassword)}
                src="./padlock.png"
                alt="lock img"
              />
            </span>
          </div>
          <div id="password-reset">Forgot Password?</div>
        </div>

        <div id="sign-in-btn">
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
}
