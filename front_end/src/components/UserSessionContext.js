import React, { Children, useContext, useEffect, useState } from "react";



function getUserSessionDetails(){
    const token = localStorage.getItem('session') 
    return new Promise((resolve, reject) =>{
        if(!token){
            return reject()
        }
        return fetch(`http://localhost:5000/api/v1/users?token=${token}`)
        .then(res => res.json())
        .then(data=>{
            if(data.user){
                resolve(data.user)
                return
            }
            return(new Error('User not logged in'))
        }).catch(err=> {
            reject(err)
        })
    })
    
}

const UserSessionContext = React.createContext();
export default function UserSessionContextProvider({children}){

    const [userDetails, setUserDetails] = useState(null)

    useEffect(()=>{
    getUserSessionDetails()
    .then(userDetails =>{
        setUserDetails(userDetails)
    } )
},[])
return <UserSessionContext.Provider value={{
    userDetails
}}>
    {children}
    </UserSessionContext.Provider>
}


const useSessionContext = () => useContext(UserSessionContext)