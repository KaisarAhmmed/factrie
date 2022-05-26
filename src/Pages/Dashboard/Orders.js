import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Moment from "react-moment";

const OrderHistory = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        const url = `https://mysterious-oasis-06902.herokuapp.com/all-orders/`;
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setAllOrders(data));
    }, []);

    return (
        <div className="container mx-auto border border-solid p-6 rounded">
            <h3 className="mb-5 font-bold text-xl">
                My orders <span>{allOrders.length}</span>
            </h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th className="text-center">Payment Status</th>
                            <th>Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders?.map((order) => (
                            <tr key={order._id}>
                                <td>
                                    <div className="flex flex-col justify-start items-start">
                                        <img
                                            className="w-16 mb-1.5 mr-2"
                                            src={order.productImage}
                                            alt={order.productName}
                                        />
                                        <p>{order.productName}</p>
                                    </div>
                                </td>
                                <td>{order.name}</td>
                                <td>${order.productPrice}</td>
                                <td>{order.quantity}</td>
                                <td>${order.totalPrice}</td>
                                <td className="text-center">
                                    {order?.paid ? (
                                        <p className="bg-green-100 text-black inline-block py-2 px-6 rounded">
                                            Paid
                                        </p>
                                    ) : (
                                        <p className="bg-red-100 text-black inline-block py-2 px-3 rounded">
                                            Pending
                                        </p>
                                    )}
                                </td>
                                <td>
                                    <Moment format="MMM DD, YYYY - HH:MM a">
                                        {order.createdAt}
                                    </Moment>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th className="text-center">Payment Status</th>
                            <th>Order Date</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default OrderHistory;
