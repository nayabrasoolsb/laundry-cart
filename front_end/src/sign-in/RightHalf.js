import React, { useState } from "react";

export default function RightHalf() {
  const [data, setData] = useState({
    mobile: "",
    password: "",
  });
  function changeHandler(e) {
    setData((oldData) => ({ ...oldData, [e.target.name]: e.target.value }));
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log(data)
  }
  // console.log(data);
  return (
    <div id="right-half" className="child">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="flex-children">
          <div id="sign-in-text">Sign in</div>
          <div>
            <input
              value={data.mobile}
              name="mobile"
              type="text"
              placeholder="Mobile/Email"
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div>
            <input
              value={data.password}
              name="password"
              type="text"
              placeholder="Password"
              onChange={(e) => changeHandler(e)}
            />
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
