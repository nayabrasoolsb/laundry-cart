import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function RightHalf() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    district: "",
    address: "",
    pincode: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [check, setCheck] = useState(false);
  const [err, setErr] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    district: "",
    address: "",
    pincode: "",
    password: "",
  });
  function changeHandler(e) {
    // setting the changes
    setUserData((oldUserData) => ({
      ...oldUserData,
      [e.target.name]: e.target.value,
    }));
    // to check empty fields
    if (!e.target.value) {
      let finalStr = e.target.name.split("");
      finalStr[0] = finalStr[0].toUpperCase();
      finalStr = finalStr.join("");
      setErr((prevErr) => ({
        ...prevErr,
        [e.target.name]: `${finalStr} cannot be empty`,
      }));
    } else {
      setErr((prevErr) => ({
        ...prevErr,
        [e.target.name]: "",
      }));
    }
    // mail validation
    if (e.target.name === "email" && !e.target.value.includes("@")) {
      setErr((prevErr) => ({ ...prevErr, email: "email should include @" }));
      return;
    }
    // password validation
    if (e.target.name === "password") {
      if (e.target.value.length < 8) {
        setErr((prevErr) => ({
          ...prevErr,
          password: "Password cannot be less than 8 characters",
        }));
      } else {
        setErr((prevErr) => ({ ...prevErr, password: "" }));
      }
      return;
    }
  }
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };
  const submithandler = (e) => {
    e.preventDefault();
    let errCheck = false;
    for (const key in err) {
      if (err[key]) {
        errCheck = true;
      }
    }
    if (errCheck) {
      return alert("please resolve the errors");
    }
    if (!check) {
      return alert("please agree to the terms and conditions");
    }
    fetch("https://laundry-service-app-by-nayabrasool-server.onrender.com/api/v1/register", options)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.status && data.status === "success") {
          alert("registration succesful");
          navigate("/sign-in");
        } else if (data.message && data.message === "email already exists") {
          setErr((prevErr) => ({ ...prevErr, email: data.message }));
          // alert("email already exists please login from the sign in page");
        } else {
          alert("Please enter Correct Details");
        }
      })
      .catch((err) => {
        console.log("error is ", err);
      });
  };
  return (
    <div id="reg-right-half" className="child-reg">
      <div>
        <form action="#" method="POST" onSubmit={submithandler}>
          <div id="reg-content">
            <div id="reg-title">REGISTER</div>
            <div id="reg-grid">
              <div>
                <input
                  value={userData.name}
                  name="name"
                  placeholder="Name"
                  type="text"
                  onChange={(e) => changeHandler(e)}
                  className={err.name ? "error" : ""}
                />
                {err.name && <div className="err">{err.name}</div>}
              </div>
              <div>
                <input
                  value={userData.email}
                  name="email"
                  placeholder="Email"
                  type="text"
                  onChange={(e) => changeHandler(e)}
                  className={err.email ? "error" : ""}
                />
                {err.email && <div className="err">{err.email}</div>}
              </div>
              <div>
                <input
                  value={userData.phone}
                  name="phone"
                  placeholder="Phone"
                  type="text"
                  onChange={(e) => changeHandler(e)}
                  className={err.phone ? "error" : ""}
                />
                {err.phone && <div className="err">{err.phone}</div>}
              </div>
              <div>
                <input
                  value={userData.state}
                  name="state"
                  placeholder="State"
                  type="text"
                  onChange={(e) => changeHandler(e)}
                  className={err.state ? "error" : ""}
                />
                {err.state && <div className="err">{err.state}</div>}
              </div>
              <div>
                <input
                  value={userData.district}
                  name="district"
                  placeholder="District"
                  type="text"
                  onChange={(e) => changeHandler(e)}
                  className={err.district ? "error" : ""}
                />
                {err.district && <div className="err">{err.district}</div>}
              </div>
              <div>
                <input
                  value={userData.address}
                  name="address"
                  placeholder="Address"
                  type="text"
                  onChange={(e) => changeHandler(e)}
                  className={err.address ? "error" : ""}
                />
                {err.address && <div className="err">{err.address}</div>}
              </div>
              <div>
                <input
                  value={userData.pincode}
                  name="pincode"
                  placeholder="Pincode"
                  type="text"
                  onChange={(e) => changeHandler(e)}
                  className={err.pincode ? "error" : ""}
                />
                {err.pincode && <div className="err">{err.pincode}</div>}
              </div>
              <div>
                <input
                  value={userData.password}
                  name="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => changeHandler(e)}
                  className={err.password ? "error" : ""}
                />
                <span id="lock">
                  <img
                    onClick={() => setShowPassword(!showPassword)}
                    src="./padlock.png"
                    alt="lock img"
                  />
                  {err.password && <div className="err">{err.password}</div>}
                </span>
              </div>
            </div>
          </div>
          <div id="reg-right-btm-flex">
            <div id="terms">
              <div>
                <input type="checkbox" onClick={() => setCheck(!check)} />
                <label id="terms-text">
                  I agree to Terms & Condition receiving marketing and
                  promotional materials
                </label>
              </div>
            </div>
            <div id="reg-btn">
              <button style={{ cursor: "pointer" }} type="submit">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
