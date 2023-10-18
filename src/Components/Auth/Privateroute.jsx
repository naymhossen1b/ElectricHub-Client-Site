/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Components/Authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({children}) => {

    const {user, loding} = useContext(AuthContext);

    const location = useLocation();


    if(loding){
        return <span className="loading loading-dots loading-md"></span>

    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default Privateroute;