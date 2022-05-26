import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Loading from "../../Components/Loading/Loading";
import useProfile from "../../Hooks/useProfile";
import auth from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import useProductDetail from "../../Hooks/useProductDetail";
import { toast } from "react-toastify";

const Purchase = () => {
    const { productId, orderAmount } = useParams();
    const [productDetail, productLoading] = useProductDetail(productId);
    const [user] = useAuthState(auth);
    const userData = useProfile(user.email);
    const navigate = useNavigate();

    const [billingData, setBillingData] = useState({});
    useEffect(() => {
        setBillingData({
            name: userData.name ? userData.name : "",
            email: userData.email,
            phone: userData.phone ? userData.phone : "",
            streetAddress: userData.streetAddress ? userData.streetAddress : "",
            district: userData.district ? userData.district : "",
            postcode: userData.postcode ? userData.postcode : "",
        });
    }, [userData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setBillingData({
            ...billingData,
            [name]: value,
        });
    };

    const {
        _id,
        name,
        img,
        price,
        minOrder,
        description,
        stock: availableStock,
    } = productDetail;

    let { stock, ...rest } = productDetail;

    let newStock = parseFloat(stock) - parseFloat(orderAmount);

    const orderPrice = parseInt(orderAmount) * parseInt(price);
    let orderDate = new Date().toISOString();

    let updatedStock = { stock: newStock, ...rest };

    const handlePayButton = (event) => {
        event.preventDefault();
        const orderData = {
            productName: name,
            productPrice: price,
            productImage: img,
            totalPrice: orderPrice,
            quantity: orderAmount,
            productId: _id,
            paid: false,
            createdAt: orderDate,
            ...billingData,
        };

        const orderQuantity = parseInt(orderAmount);
        const miniOrder = parseInt(minOrder);
        const readyStock = parseInt(availableStock);

        if (orderQuantity < miniOrder) {
            toast.error("Order quanity is wrong...!");
            return;
        }

        if (orderQuantity > readyStock) {
            toast.error("Order quanity is wrong...!");
            return;
        }

        fetch("http://localhost:4000/place-order", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(orderData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("Order placed successfully.");
                if (data.acknowledged) {
                    console.log(updatedStock);
                    fetch(`http://localhost:4000/product/${_id}`, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(updatedStock),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(`updated stock ${data}`);
                            navigate("/dashboard/my-order-history");
                        });
                }
            });
    };

    return (
        <>
            <Breadcrumb pageTitle={`Purchase - ${name}`} />
            <div className="container mx-auto py-20 flex justify-center gap-8">
                {productLoading ? (
                    <Loading></Loading>
                ) : (
                    <>
                        <div className="w-1/2 border border-solid">
                            <h3 className="text-center font-semibold text-black text-2xl py-3 border-b border-solid">
                                Billing Details
                            </h3>
                            <div className="p-5">
                                <form onSubmit={handlePayButton}>
                                    <div className="form-control mb-2.5">
                                        <label className="label">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Name"
                                            value={billingData.name}
                                            onChange={handleInputChange}
                                            className="py-3 px-4 border border-solid rounded text-base focus:outline-none w-full"
                                        />
                                    </div>
                                    <div className="form-control mb-2.5">
                                        <label className="label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            value={billingData.email}
                                            readOnly
                                            onChange={handleInputChange}
                                            className="py-3 px-4 border border-solid rounded text-base focus:outline-none w-full"
                                        />
                                    </div>
                                    <div className="form-control mb-2.5">
                                        <label className="label">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            placeholder="Phone"
                                            value={billingData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="py-3 px-4 border border-solid rounded text-base focus:outline-none w-full"
                                        />
                                    </div>
                                    <div className="form-control mb-2.5">
                                        <label className="label">
                                            Street Address
                                        </label>
                                        <input
                                            type="text"
                                            name="streetAddress"
                                            id="address"
                                            value={billingData.streetAddress}
                                            onChange={handleInputChange}
                                            placeholder="Street Address"
                                            required
                                            className="py-3 px-4 border border-solid rounded text-base focus:outline-none w-full"
                                        />
                                    </div>
                                    <div className="form-control mb-2.5">
                                        <label className="label">
                                            District
                                        </label>
                                        <input
                                            type="text"
                                            name="district"
                                            id="district"
                                            placeholder="District"
                                            required
                                            value={billingData.district}
                                            onChange={handleInputChange}
                                            className="py-3 px-4 border border-solid rounded text-base focus:outline-none w-full"
                                        />
                                    </div>
                                    <div className="form-control mb-2.5">
                                        <label className="label">
                                            Postcode
                                        </label>
                                        <input
                                            type="text"
                                            name="postcode"
                                            id="postcode"
                                            placeholder="Postcode"
                                            required
                                            value={billingData.postcode}
                                            onChange={handleInputChange}
                                            className="py-3 px-4 border border-solid rounded text-base focus:outline-none w-full"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className=" bg-[#FE5D15] rounded text-white text-center py-4 px-10 uppercase duration-300 cursor-pointer mt-2 hover:bg-black"
                                    >
                                        Pay Now
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="w-1/2 border border-solid">
                            <h3 className="text-center font-semibold mb-4 text-black text-2xl py-3 border-b border-solid">
                                Your selected product
                            </h3>
                            <div>
                                <img
                                    src={img}
                                    alt={name}
                                    className="w-1/2 mx-auto mb-6"
                                />
                            </div>
                            <div className="p-5">
                                <p className="text-[#666] mb-4">
                                    {description}
                                </p>
                                <p className="text-xl mb-1.5">
                                    Product Name: {name}
                                </p>
                                <p className="text-xl mb-1.5">
                                    Order Quantity: {orderAmount}
                                </p>
                                <p className="text-xl mb-1.5">
                                    Per unit price: ${price}
                                </p>
                                <p className="text-xl mb-1.5">
                                    Total Price: ${orderPrice}
                                </p>
                                <p className="text-xl">
                                    Available Stock: {availableStock}
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Purchase;
