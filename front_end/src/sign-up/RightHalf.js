import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

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
  function changeHandler(e) {
    e.preventDefault();
    setUserData((oldUserData) => ({
      ...oldUserData,
      [e.target.name]: e.target.value,
    }));
  }

  const submithandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/v1/register", {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      state: userData.state,
      district: userData.district,
      address: userData.address,
      pincode: userData.pincode,
      password: userData.password,
    }).then((res) => console.log(res.data));
    if(userData.sucsess){
      navigate('/sign-in');
    }
    alert("Please enter Correct Details")
    
  };

  // console.log(userData);
  return (
    <div id="reg-right-half" className="child-reg">
      <div>
      <form action="" method="" onSubmit={submithandler}>
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
                  type={showPassword?"text": "password"}
                  onChange={(e) => changeHandler(e)}
                />
                <span id="lock">
                  <img
                    onClick={() => setShowPassword(!showPassword)}
                    src="./padlock.png"
                    alt="lock img"
                  />
                </span>
              </div>
            </div>
          </div>

          <div id="reg-right-btm-flex">
            <div id="terms">
              <div>
                <input type="checkbox" />
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
