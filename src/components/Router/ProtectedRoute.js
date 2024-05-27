import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
 
const ProtectedRoute = ({ children }) => {
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);
 
    return isLoggedIn ? children : <Navigate to="/" replace={true} />;
}
 



// import React from "react";
// // import {Route, redirect} from 'react-router-dom';
// import { Outlet, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";


// const ProtectedRoute = ({ component: Component, ...props }) => {

//     const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);

//     return(
//        <>
//             {isLoggedIn ? <Outlet /> : <Navigate to="/login" />}
//        </>
//     )
// }
export default ProtectedRoute