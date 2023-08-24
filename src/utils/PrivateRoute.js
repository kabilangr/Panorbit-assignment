import React, { useEffect, useState } from 'react'
import { IS_USER_LOGGED_IN } from './Constant'
import { Navigate } from 'react-router-dom'


function PrivateRoute(component, toNavigation) {
    const [auth, setAuth] = useState(false)
    useEffect(() => {
        setAuth(window.sessionStorage.getItem(IS_USER_LOGGED_IN)) 
    },[auth][component])
    return  auth ? component : toNavigation 
}

export default PrivateRoute