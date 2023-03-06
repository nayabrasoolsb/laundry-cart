import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function RightHalf() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  async function changeHandler(e) {
    setData((oldData) => ({ ...oldData, [e.target.name]: e.target.value }));
  }
  async function submitHandler(e) {
    e.preventDefault();

    await fetch("https://laundry-service-app-by-nayabrasool-server.onrender.com/api/v1/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/user");
          alert(data.message);
          return;
        }
        alert(data.message);
      });
  }
  const navigate = useNavigate();
  return (
    <div id="right-half" className="child">
      <form action="#" method="POST" onSubmit={(e) => submitHandler(e)}>
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
          <button style={{ cursor: "pointer" }} type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
