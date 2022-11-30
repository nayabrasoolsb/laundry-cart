import "../styles/info.css";

import { Link } from "react-router-dom";
import React from "react";

export default function Info() {
  return (
    <div id="info">
      <div>
        <ul className="flex-wrap">
          <li className="li-margin-right ">
            <span>ABOUT US</span>
            <br />
            <p>Doorstep Wash & Dryclean Service</p>
          </li>
          <li>
            <ul className="sub-list">
              <li id="bold1">Home</li>
              <li>
                <Link to="/sign-in">Sign In</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </li>
          <li id="bold2">Pricing</li>
          <li id="career">
            <ul  className="sub-list">
              <li id="bold3">Career</li>
              <li>Blogs</li>
              <li>Create</li>
            </ul>
          </li>
          <li id="bold4">Contact</li>
          <li className="li-margin-left">
            <div>
              <p id="bold5">SOCIAL MEDIA</p>
              <div id="social-media">
                <div className="images">
                  <img src="./facebook.png" alt="facbook social" />
                </div>
                <div className="images">
                  <img src="./instagram.png" alt="instagram social" />
                </div>
                <div className="images">
                  <img src="./linkedin.png" alt="linkedIn social" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
