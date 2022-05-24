import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.config";
import Moment from "react-moment";

const AddProduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    let createDate = new Date().toISOString();

    const [user] = useAuthState(auth);

    const onSubmit = async (data) => {
        const image = data.productImage[0];
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
                    const product = {
                        authorName: data.author,
                        authorEmail: data.authorEmail,
                        name: data.name,
                        img: img,
                        stock: data.stock,
                        minOrder: data.minOrder,
                        price: data.price,
                        description: data.description,
                        rating: "",
                        createdAt: createDate,
                    };
                    // send to your database
                    fetch("http://localhost:4000/products", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(product),
                    })
                        .then((res) => res.json())
                        .then((inserted) => {
                            if (inserted.insertedId) {
                                toast.success("Product added successfully.");
                                reset();
                            } else {
                                toast.error("Failed to add the new product.");
                            }
                        });
                }
            });
    };

    return (
        <div className="container mx-auto flex justify-center">
            <div className="w-7/12 border-solid border shadow-sm p-7 rounded">
                <h3 className="text-center text-2xl font-semibold mb-8">
                    Please Add Product
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <input
                            type="hidden"
                            placeholder="Author name"
                            value={user.displayName}
                            className="py-3 px-4 border border-solid rounded text-base focus:outline-none"
                            {...register("author")}
                        />
                    </div>
                    <input
                        placeholder="Author"
                        type="hidden"
                        className="py-3 px-4 border border-solid rounded text-base focus:outline-none w-full"
                        value={user.email}
                        {...register("authorEmail")}
                    />
                    <div className="form-control w-full">
                        <label className="mb-1">Product Name</label>
                        <input
                            type="text"
                            placeholder="Type product name"
                            className="py-3 px-4 border border-solid rounded text-base focus:outline-none"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Product name is Required",
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
                        <label className="mb-1">Price</label>
                        <input
                            type="number"
                            placeholder="Per unit price"
                            className="py-3 px-4 border border-solid rounded-none text-base focus:outline-none"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: "Product price is Required",
                                },
                            })}
                        />
                        <label className="label">
                            {errors.price?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.price.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="mb-1">Available Stock</label>
                        <input
                            type="number"
                            placeholder="Product stock"
                            className="py-3 px-4 border border-solid rounded-none text-base focus:outline-none"
                            {...register("stock", {
                                required: {
                                    value: true,
                                    message: "Product stock is Required",
                                },
                            })}
                        />
                        <label className="label">
                            {errors.stock?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.stock.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="mb-1">Minimum order amount</label>
                        <input
                            type="number"
                            placeholder="Minimum order amount"
                            className="py-3 px-4 border border-solid rounded-none text-base focus:outline-none"
                            {...register("minOrder", {
                                required: {
                                    value: true,
                                    message:
                                        "Product minimum order amount is Required",
                                },
                            })}
                        />
                        <label className="label">
                            {errors.minOrder?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.minOrder.message}
                                </span>
                            )}
                        </label>
                    </div>

                    <div className="form-control w-full mb-2">
                        <label className="mb-1">Description</label>
                        <textarea
                            placeholder="Description"
                            className="py-3 px-4 border h-20 border-solid rounded-none text-base focus:outline-none"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message:
                                        "Product short description is Required",
                                },
                            })}
                        />
                        <label className="mb-1">
                            {errors.description?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.description.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="form-control w-full mb-5">
                        <label className="mb-1">Product Image</label>
                        <input
                            type="file"
                            className=""
                            {...register("productImage")}
                        />
                    </div>
                    <input
                        className="w-full bg-[#FE5D15] rounded text-white text-center p-3 uppercase duration-300 cursor-pointer hover:bg-black"
                        type="submit"
                        value="Add Product"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
