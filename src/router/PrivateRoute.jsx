import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <>
            <div className="flex justify-center items-center min-h-screen ">
                <div className="flex items-center gap-2">
                    <h1 className="text-4xl">Loading</h1>
                    <span className="loading loading-dots loading-lg">
                    </span>
                </div>
            </div>
        </>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivateRoute;