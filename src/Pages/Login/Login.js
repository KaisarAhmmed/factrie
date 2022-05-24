import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import Loading from "../../Components/Loading/Loading";
import useToken from "../../Hooks/useToken";

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user);

    let logInError;
    let from = location.state?.from?.pathname || "/";

    if (loading) {
        return <Loading></Loading>;
    }

    if (error) {
        logInError = (
            <p className="text-red-500 text-center font-sm mt-2">
                {error?.message}
            </p>
        );
    }

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <>
            <Breadcrumb pageTitle={"Login"} />
            <div className="container py-20 mx-auto flex justify-center">
                <div className="w-5/12 border-solid border shadow-sm p-7 rounded-sm">
                    <h3 className="text-center text-2xl font-semibold mb-8">
                        Please Login
                    </h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="py-3 px-4 border border-solid rounded-none text-base focus:outline-none"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required",
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid Email",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="border border-solid py-3 px-4 input-bordered rounded-none text-base focus:outline-none"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required",
                                    },
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Password must be 6 characters or longer",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        <input
                            className="w-full bg-[#FE5D15] text-white text-center p-3 uppercase duration-300 cursor-pointer hover:bg-black"
                            type="submit"
                            value="Login"
                        />
                        {logInError}
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-[#333] font-[14px] font-light">
                            New In Factrie?
                            <Link className="pl-2 underline" to="/register">
                                Register Here
                            </Link>
                        </p>
                        <p className="text-[#333] font-[14px] font-light ">
                            Forget Password?
                            <Link
                                className="pl-2 underline"
                                to="/reset-password"
                            >
                                Reset Password
                            </Link>
                        </p>
                    </div>
                    <div className="divider my-8">OR</div>
                    <div>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
