import React ,{ useEffect }from "react";
import { useSessionContext } from "../components/UserSessionContext";
import { useNavigate } from "react-router-dom";
export default function Landingpage(){
    const { userDetails } = useSessionContext()
    const navigate = useNavigate()
    useEffect(() => {
        console.log(userDetails)
        if (!userDetails) {
            navigate('/')
        }
    }, [])
    return <div>
        hey, let's create order now
    </div>
}