import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_zEMcYMCYJGnC4SFipK7K8D1P");

const Payment = () => {
    const { orderId } = useParams();

    const url = `http://localhost:4000/booking-order/${orderId}`;

    const { data: orderDetail, isLoading } = useQuery(
        ["booking", orderId],
        () =>
            fetch(url, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    //console.log(orderDetail);

    return (
        <div className="container mx-auto border border-solid flex flex-col p-10 rounded justify-center">
            <div className="w-1/2 border border-solid p-5 mb-5 rounded">
                <h3>Hello, {orderDetail.name}</h3>
                <p>
                    Your ordered {orderDetail.quantity} unit of
                    {orderDetail.productName}
                </p>
                <p>Per unit price ${orderDetail.productPrice}</p>
                <p>Please pay: ${orderDetail.totalPrice}</p>
            </div>

            <div className="w-1/2 border border-solid p-5 rounded">
                <Elements stripe={stripePromise}>
                    <CheckoutForm orderDetail={orderDetail} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
