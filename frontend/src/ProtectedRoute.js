import Cookies from 'js-cookie'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoute = () => {
    const userCookie = Cookies.get("user") || {};
    const user = JSON.parse(userCookie);
  return (
    user? <Outlet/> : <Navigate to="/signin"/>
  )
}

export default ProtectedRoute