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
  const [emainExist, setEmailExist] = useState(false);
  const [passLen, setPassLen] = useState(false);
  function changeHandler(e) {
    if (e.target.name === "email") {
      setEmailExist(false);
    }
    if (e.target.name === "password") {
      if (e.target.value.length < 6) {
        setPassLen(true);
      } else {
        setPassLen(false);
      }
    }
    setUserData((oldUserData) => ({
      ...oldUserData,
      [e.target.name]: e.target.value,
    }));
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
    if (!check) {
      return alert("please agree to the terms and conditions");
    }
    // Axios.post("http://localhost:3004/api/v1/register", userData)
    //   .then((res) => console.log(res.data))
    //   .catch(err=>console.log(err))
    // // if(userData.success){
    // //   navigate('/sign-in');
    // // }
    fetch("http://localhost:3004/api/v1/register", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.status && data.status === "success") {
          navigate("/sign-in");
        } else if (data.message && data.message === "email already exists") {
          setEmailExist(true);
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
                />
              </div>
              <div>
                <input
                  value={userData.email}
                  name="email"
                  placeholder="Email"
                  type="text"
                  onChange={(e) => changeHandler(e)}
                />
                {emainExist && (
                  <div className="err">
                    Email already exists, please try to login
                  </div>
                )}
              </div>
              <div>
                <input
                  value={userData.phone}
                  name="phone"
                  placeholder="Phone"
                  type="text"
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              <div>
                <input
                  value={userData.state}
                  name="state"
                  placeholder="State"
                  type="text"
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              <div>
                <input
                  value={userData.district}
                  name="district"
                  placeholder="District"
                  type="text"
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              <div>
                <input
                  value={userData.address}
                  name="address"
                  placeholder="Address"
                  type="text"
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              <div>
                <input
                  value={userData.pincode}
                  name="pincode"
                  placeholder="Pincode"
                  type="text"
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              <div>
                <input
                  value={userData.password}
                  name="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => changeHandler(e)}
                />
                <span id="lock">
                  <img
                    onClick={() => setShowPassword(!showPassword)}
                    src="./padlock.png"
                    alt="lock img"
                  />
                  {passLen && (
                    <div className="err">
                      Password should not be less than 6 characters
                    </div>
                  )}
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
              <button type="submit">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
