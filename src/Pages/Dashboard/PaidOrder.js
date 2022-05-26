import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const PaidOrder = () => {
    const [{ email }] = useOutletContext();
    const [paidOrder, setPaidOrder] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:4000/get-orders/${email}`;
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setPaidOrder(data));
    }, [email]);

    const handleReviewRoute = (id) => {
        navigate(`/dashboard/add-review/${id}`);
    };

    return (
        <div className="container mx-auto border border-solid p-6 rounded">
            <h3 className="mb-5 font-bold text-xl">Add Review</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Payment Status</th>
                            <th>transaction ID</th>
                            <th>Total Price</th>
                            <th>Add Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paidOrder.map((item) => (
                            <tr key={item._id}>
                                <td>
                                    <div className="flex flex-row justify-start items-center">
                                        <img
                                            className="w-16 mb-1.5 mr-2"
                                            src={item.productImage}
                                            alt={item.productName}
                                        />
                                        <p>{item.productName}</p>
                                    </div>
                                </td>
                                <td>{item.paid ? "Paid" : "Unpaid"}</td>
                                <td>
                                    {item.transactionId
                                        ? item.transactionId
                                        : ""}
                                </td>
                                <td>${item.totalPrice}</td>
                                <td>
                                    {item.paid ? (
                                        <button
                                            onClick={() =>
                                                handleReviewRoute(item._id)
                                            }
                                            className="py-2 px-6 inline-block rounded duration-300 border border-solid text-black hover:border-black hover:bg-black hover:text-white"
                                        >
                                            Add Review
                                        </button>
                                    ) : (
                                        ""
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaidOrder;
