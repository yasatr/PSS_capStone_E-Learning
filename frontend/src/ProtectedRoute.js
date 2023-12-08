import Cookies from "universal-cookie";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoute = ({ path, element, ...rest }) => {
  const cookies = new Cookies();
  const user = cookies.get("user") || {};
  const location = useLocation();
  const publicPaths = ['/aboutUs', '/contactUs','/profile']; 
  if((user && path.startsWith(`${user.role}`)) ||  publicPaths.includes(path)){
    return element;
  } else {
    cookies.remove("user");
    return <Navigate to="/signin" state={{ from: location }} />
  }
};

export default ProtectedRoute;
