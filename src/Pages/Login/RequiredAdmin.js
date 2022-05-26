import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.config";
import useAdmin from "../../Hooks/useAdmin";
import { signOut } from "firebase/auth";
import Loading from "../../Components/Loading/Loading";

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading></Loading>;
    }

    if (!user || !admin) {
        signOut(auth);
        return (
            <Navigate to="/login" state={{ from: location }} replace></Navigate>
        );
    }
    return children;
};

export default RequireAdmin;
