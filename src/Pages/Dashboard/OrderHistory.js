import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const OrderHistory = () => {
    const [{ email }] = useOutletContext();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:4000/get-orders/${email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, [email]);

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
                            <th>Delivered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myOrders.map((order) => (
                            <tr key={order._id}>
                                <td>
                                    <div className="flex flex-row justify-start items-center">
                                        <img
                                            className="w-16 mb-1.5 mr-2"
                                            src={order.productImage}
                                            alt={order.productName}
                                        />
                                        <p>{order.productName}</p>
                                    </div>
                                </td>
                                <td>${order.productPrice}</td>
                                <td>{order.quantity}</td>
                                <td>${order.totalPrice}</td>
                                <td className="text-center">
                                    {order?.payment ? (
                                        "Paid"
                                    ) : (
                                        <>
                                            <p className="text-sm text-center mb-1">
                                                Not Paid
                                            </p>
                                            <button className="py-2 px-6 rounded duration-300 border border-solid text-black hover:border-black hover:bg-black hover:text-white">
                                                Pay Now
                                            </button>
                                        </>
                                    )}
                                </td>
                                <td>
                                    {order.shipping
                                        ? order.shipping
                                        : "Not available"}
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
                            <th>Delivered</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default OrderHistory;
