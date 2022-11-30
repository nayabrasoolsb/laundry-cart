import React, { useState } from "react";

export default function RightHalf() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    district: "",
    address: "",
    pincode: "",
    password:""
  });
  function changeHandler(e) {
    e.preventDefault();
    setUserData((oldUserData) => ({
      ...oldUserData,
      [e.target.name]: e.target.value,
    }));
  }
  console.log(userData);
  return (
    <div id="reg-right-half" className="child-reg">
      <div>
        <form>
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
                  type="text"
                  onChange={(e) => changeHandler(e)}
                />
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
