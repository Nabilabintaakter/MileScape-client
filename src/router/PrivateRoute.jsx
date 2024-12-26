import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import LoadingSpinner from "../components/shared/LoadingSpinner";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) return <LoadingSpinner></LoadingSpinner>
    if (user) return children
    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivateRoute;