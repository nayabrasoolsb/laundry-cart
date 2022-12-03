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
            if(data.userDetails){
                resolve(data.userDetails)
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
    const [isUserLoaded, setIsUserLoaded] = useState(false)

    useEffect(()=>{
    getUserSessionDetails()
    .then(userDetails =>{
        setIsUserLoaded(true)
        setUserDetails(userDetails)
    } ).catch(err => {
        setIsUserLoaded(true)
    })
},[])
return <UserSessionContext.Provider value={{
    userDetails
}}>
    {isUserLoaded ? children : 'Loading...'}
    </UserSessionContext.Provider>
}


export const useSessionContext = () => useContext(UserSessionContext)