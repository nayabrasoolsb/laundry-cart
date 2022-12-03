import React from "react";
import "../styles/HeaderwithUsername.css"

export default function HeaderWithUsername(){
    
    return (<div id="head">
    <ul>
    <li id="laundry">LAUNDRY</li>
    <li id="user"><img src="./images/Login.png" id="userImg"/><span id="userText">User Name</span></li>
    <button className="rightbtn"><li id="career">Career</li></button>
    <button className="rightbtn"><li id="pricing">Pricing</li></button>
    </ul>
    </div>)
}
