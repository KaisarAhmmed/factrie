import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

const ProfileEdit = () => {
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [userData] = useOutletContext();

    const {
        name,
        email,
        phone,
        education,
        streetAddress,
        district,
        postcode,
        linkedIn,
    } = userData;

    const [values, setValues] = useState({
        name: name ? name : "",
        email,
        phone: phone ? phone : "",
        education: education ? education : "",
        streetAddress: streetAddress ? streetAddress : "",
        district: district ? district : "",
        postcode: postcode ? postcode : "",
        linkedIn: linkedIn ? linkedIn : "",
    });

    const onSubmit = async (data) => {
        const image = data.userPhoto[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_UPLOAD}`;

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const img = result.data.url;
                    const udpateData = { ...values, img };
                    if (email) {
                        fetch(`http://localhost:4000/update-user/${email}`, {
                            method: "PUT",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(udpateData),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                toast.success("Profile updated successfully.");
                                navigate("/dashboard/profile");
                            });
                    }
                }
            });
    };

    return (
        <div className="container mx-auto border border-solid p-8 rounded">
            <h3>Edit Profile</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-start items-start gap-6">
                    <div className="w-1/2">
                        <div className="form-control w-full">
                            <label className="mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Type your name"
                                value={values.name}
                                className="py-3 px-4 border border-solid rounded text-base focus:outline-none"
                                {...register("name", {
                                    onChange: (e) => {
                                        const { name, value } = e.target;
                                        setValues({
                                            ...values,
                                            [name]: value,
                                        });
                                        //console.log(values);
                                    },
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
                        <div className="form-control w-full mb-4">
                            <label className="mb-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="Type your name"
                                value={values.email}
                                className="py-3 px-4 border border-solid rounded text-base focus:outline-none"
                                disabled
                                {...register("email")}
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="mb-1">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="Phone number"
                                value={values.phone}
                                className="py-3 px-4 border border-solid rounded text-base focus:outline-none"
                                {...register("phone", {
                                    onChange: (e) => {
                                        const { name, value } = e.target;
                                        setValues({
                                            ...values,
                                            [name]: value,
                                        });
                                        //console.log(values);
                                    },
                                    required: {
                                        value: true,
                                        message: "Phone is Required",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.phone?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.phone.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className="form-control w-full mb-4">
                            <label className="mb-1">Education Level</label>
                            <select
                                className="py-3 px-4 border border-solid rounded text-base focus:outline-none"
                                value={values.education}
                                {...register("education", {
                                    onChange: (e) => {
                                        const { name, value } = e.target;
                                        setValues({
                                            ...values,
                                            [name]: value,
                                        });
                                    },
                                })}
                            >
                                <option value="">Choose One</option>
                                <option value="Secondary">Secondary</option>
                                <option value="Higher Secondary">
                                    Higher Secondary
                                </option>
                                <option value="Diploma">Diploma</option>
                                <option value="Honours">Honours</option>
                                <option value="Masters">Masters</option>
                            </select>
                        </div>
                        <div className="form-control w-full mb-5">
                            <label className="mb-1">User Photo</label>
                            <input
                                type="file"
                                className=""
                                {...register("userPhoto")}
                            />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="form-control w-full">
                            <label className="mb-1">Street Address</label>
                            <input
                                type="text"
                                placeholder="Street Address"
                                value={values.streetAddress}
                                className="py-3 px-4 border border-solid rounded text-base focus:outline-none"
                                {...register("streetAddress", {
                                    onChange: (e) => {
                                        const { name, value } = e.target;
                                        setValues({
                                            ...values,
                                            [name]: value,
                                        });
                                    },
                                    required: {
                                        value: true,
                                        message: "Street address is required",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.streetAddress?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.streetAddress.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="mb-1">District</label>
                            <input
                                type="text"
                                placeholder="District"
                                value={values.district}
                                className="py-3 px-4 border border-solid rounded text-base focus:outline-none"
                                {...register("district", {
                                    onChange: (e) => {
                                        const { name, value } = e.target;
                                        setValues({
                                            ...values,
                                            [name]: value,
                                        });
                                    },
                                    required: {
                                        value: true,
                                        message: "District is required",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.district?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.district.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="mb-1">Post Code</label>
                            <input
                                type="text"
                                placeholder="Post code"
                                value={values.postcode}
                                className="py-3 px-4 border border-solid rounded text-base focus:outline-none"
                                {...register("postcode", {
                                    onChange: (e) => {
                                        const { name, value } = e.target;
                                        setValues({
                                            ...values,
                                            [name]: value,
                                        });
                                    },
                                    required: {
                                        value: true,
                                        message: "Post Code is required",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.postcode?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.postcode.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="mb-1">LinkedIn Profile Url</label>
                            <input
                                type="url"
                                placeholder="LinkedIn profile url"
                                value={values.linkedIn}
                                className="py-3 px-4 border border-solid rounded text-base focus:outline-none"
                                {...register("linkedIn", {
                                    onChange: (e) => {
                                        const { name, value } = e.target;
                                        setValues({
                                            ...values,
                                            [name]: value,
                                        });
                                    },
                                    required: {
                                        value: true,
                                        message:
                                            "LinkedIn profile url is required",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.linkedIn?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.linkedIn.message}
                                    </span>
                                )}
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full text-center mt-4">
                    <input
                        className="bg-[#FE5D15] rounded mr-4 text-white text-center py-3 px-20 uppercase duration-300 cursor-pointer hover:bg-black"
                        type="submit"
                        value="Update"
                    />
                    <Link
                        to="/dashboard/profile"
                        className="rounded text-black inline-block py-3 px-20 uppercase duration-300 border-solid border border-black hover:bg-black hover:text-white"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default ProfileEdit;
