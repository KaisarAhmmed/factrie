import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import Moment from "react-moment";
import { toast } from "react-toastify";

const OrderHistory = () => {
    const [{ email }] = useOutletContext();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        const url = `https://mysterious-oasis-06902.herokuapp.com/get-orders/${email}`;
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, [email]);

    const handleOrderDelete = (id) => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `https://mysterious-oasis-06902.herokuapp.com/delete-order/${id}`;
            fetch(url, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = myOrders.filter(
                        (item) => item._id !== id
                    );
                    setMyOrders(remaining);
                    toast.success("Product deleted successfully.");
                });
        }
    };

    return (
        <div className="container mx-auto border border-solid p-6 rounded">
            <h3 className="mb-5 font-bold text-xl">
                My orders <span>{myOrders.length}</span>
            </h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th className="text-center">Payment Status</th>
                            <th>Order Date</th>
                            <th className="w-10">Transaction Id</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myOrders?.map((order) => (
                            <tr key={order._id}>
                                <td>
                                    <div className="flex flex-row justify-start items-center">
                                        <img
                                            className="w-16 mb-1.5 mr-2"
                                            src={order.productImage}
                                            alt={order.productName}
                                        />
                                        <p>
                                            {order.productName.slice(0, 20)}...
                                        </p>
                                    </div>
                                </td>
                                <td>${order.productPrice}</td>
                                <td>{order.quantity}</td>
                                <td>${order.totalPrice}</td>
                                <td className="text-center">
                                    {order?.paid ? (
                                        <p className="bg-green-100 text-black inline-block py-2 px-6 rounded">
                                            Paid
                                        </p>
                                    ) : (
                                        <>
                                            <p className="text-sm text-center mb-1">
                                                Not Paid
                                            </p>
                                            <Link
                                                to={`/dashboard/payment/${order._id}`}
                                                className="py-2 px-6 inline-block rounded duration-300 border border-solid text-black hover:border-black hover:bg-black hover:text-white"
                                            >
                                                Pay Now
                                            </Link>
                                        </>
                                    )}
                                </td>
                                <td>
                                    <Moment format="MMM DD, YYYY">
                                        {order.createdAt}
                                    </Moment>
                                </td>
                                <td className="text-sm">
                                    {order?.transactionId
                                        ? order.transactionId
                                        : ""}
                                </td>
                                <td>
                                    {order?.paid ? (
                                        "Not Available"
                                    ) : (
                                        <button
                                            onClick={() =>
                                                handleOrderDelete(order._id)
                                            }
                                            className="py-2 px-6 inline-block rounded duration-300 bg-red-600 text-white hover:bg-red-700 "
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th className="text-center">Payment Status</th>
                            <th>Order Date</th>
                            <th>Transaction Id</th>
                            <th>Cancel</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default OrderHistory;
