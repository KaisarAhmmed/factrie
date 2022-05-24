import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import auth from "../../firebase.config";
import useToken from "../../Hooks/useToken";
import GoogleIcon from "../../Images/google-icon.png";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const [token] = useToken(user);

    let errorMessage;

    if (loading) {
        return <Loading />;
    }

    if (error) {
        errorMessage = (
            <p className="text-red-500 mt-2 text-center">
                Error: {error?.message}
            </p>
        );
    }

    let from = location.state?.from?.pathname || "/";

    if (user || token) {
        navigate(from, { replace: true });
    }

    return (
        <>
            <div className="mt-4 flex justify-center">
                <button
                    onClick={() => signInWithGoogle()}
                    className="flex justify-center items-center border border-solid py-2.5 px-10 bg-gray-100"
                >
                    <img
                        className="w-[25px] mr-2"
                        src={GoogleIcon}
                        alt="google"
                    />
                    <span className="text-center">SignIn With Google</span>
                </button>
            </div>
            {errorMessage}
        </>
    );
};

export default SocialLogin;
