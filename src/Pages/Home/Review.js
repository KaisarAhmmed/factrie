import React from "react";
import useReviews from "../../Hooks/useReviews";
import SingleReview from "../Reviews/SingleReview";

const Review = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className="lg:py-20 py-16 container mx-auto ">
            <div className="w-full">
                <h2 className="text-center lg:text-[30px] text-[24px] font-bold uppercase pb-9">
                    Recent Reviews
                </h2>
            </div>
            <div className="w-full grid lg:grid-cols-4  grid-cols-1 gap-5">
                {reviews.map((item) => (
                    <SingleReview key={item._id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Review;
