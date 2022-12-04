import "../styles/sign-up.css"

import Footer from "../components/Footer";
import LeftHalf from "./LeftHalf";
import React,{useEffect} from "react";
import RightHalf from "./RightHalf";
import { useSessionContext } from "../components/UserSessionContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { userDetails } = useSessionContext()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(userDetails)
    if (userDetails) {
      alert('Already logged in taking you to the profile')
      navigate('/landingpage')
    }
  })
  return (
    <>
      <div id="parent-reg">
        <LeftHalf />
        <RightHalf />
      </div>
      <Footer />
    </>
  );
}
