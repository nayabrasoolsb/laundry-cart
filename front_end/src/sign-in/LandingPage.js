import React ,{ useEffect }from "react";
import { useSessionContext } from "../components/UserSessionContext";
import { useNavigate } from "react-router-dom";
export default function Landingpage(){
    const { userDetails } = useSessionContext()
    const navigate = useNavigate()
    useEffect(() => {
        console.log(userDetails)
        if (!userDetails) {
            alert('youre not logged in taking you to the sign in page' )
            navigate('/')
        }
    },[])
    return <div>
        {/* <button onClick={localStorage.removeItem('session')}>LOG OUT</button> */}
        hey, let's create order now
    </div>
}