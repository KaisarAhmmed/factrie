import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import useReviews from "../../Hooks/useReviews";
import SingleReview from "./SingleReview";

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <>
            <Breadcrumb pageTitle={"All Reviews"} />
            <div className="py-20 container mx-auto grid grid-cols-3 gap-6">
                {reviews?.map((review) => (
                    <SingleReview key={review._id} data={review} />
                ))}
            </div>
        </>
    );
};

export default Reviews;
