import React from "react";
import { useParams } from "react-router-dom";
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

        const orderData = {
            productName: name,
            productPrice: price,
            productImage: img,
            totalPrice: orderPrice,
            quantity: orderAmount,
            productId: _id,
            buyerName: userData.name,
            buyerEmail: userData.email,
            payment: false,
            shipping: "",
            createdAt: orderDate,
        };

        fetch("http://localhost:4000/place-order", {
            method: "POST",
            headers: {
                "content-type": "application/json",
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
                        });
                }
            });
    };

    return (
        <>
            <Breadcrumb pageTitle={`Purchase - ${name}`} />
            <div className="container mx-auto py-20 flex justify-center">
                {productLoading ? (
                    <Loading></Loading>
                ) : (
                    <div className="w-full p-6 border border-solid flex justify-start">
                        <div className="w-2/12">
                            <img
                                src={img}
                                alt={name}
                                className="w-40 mx-auto"
                            />
                        </div>
                        <div className="w-2/12">{name}</div>
                        <div className="w-2/12">Price ${price}</div>
                        <div className="w-2/12">Quanity {orderAmount}</div>
                        <div className="w-2/12">Total Price ${orderPrice}</div>
                        <div className="w-2/12">
                            <button onClick={handlePayButton}>Pay Now</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Purchase;
