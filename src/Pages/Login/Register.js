import React from "react";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Loading from "../../Components/Loading/Loading";
import auth from "../../firebase.config";
import SocialLogin from "./SocialLogin";

const Register = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (loading || updating) {
        return <Loading></Loading>;
    }

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log("updated");
    };

    return (
        <>
            <Breadcrumb pageTitle={"Register"} />
            <div className="container mx-auto py-20 flex justify-center">
                <div className="w-5/12 border-solid border shadow-sm p-7 rounded-sm">
                    <h3 className="text-center text-2xl font-semibold mb-8">
                        Please Register
                    </h3>
                    <form onClick={handleSubmit(onSubmit)}>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Type your name"
                                className="py-3 px-4 border border-solid rounded-none text-base focus:outline-none"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.name.message}
                                    </span>
                                )}
                            </label>
                        </div>
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
                            value="Register"
                        />
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-[#333] font-[14px] font-light">
                            Already have an account?
                            <Link className="pl-2 underline" to="/login">
                                Login Here
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

export default Register;
