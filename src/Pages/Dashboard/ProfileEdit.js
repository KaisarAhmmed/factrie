import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ProfileEdit = () => {
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="container mx-auto border border-solid p-4 rounded">
            <h3>Edit Profile</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <input
                        type="text"
                        placeholder="Type your name"
                        className="py-3 px-4 border border-solid rounded text-base focus:outline-none"
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
            </form>
        </div>
    );
};

export default ProfileEdit;
