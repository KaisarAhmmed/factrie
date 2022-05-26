import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useProfile from "../../Hooks/useProfile";

const AddReview = () => {
    const { pId } = useParams();
    const [{ email }] = useOutletContext();
    const curUser = useProfile(email);
    const [rating, setRating] = useState(5);
    const [reviewData, setReviewData] = useState({});

    useEffect(() => {
        setReviewData({
            reviewerName: curUser.name ? curUser.name : "",
            reviewerEmail: curUser.email ? curUser.email : "",
            reviewerImg: curUser.img ? curUser.img : "",
            productId: pId ? pId : "",
            rating: rating ? rating : "",
        });
    }, [curUser]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setReviewData({
            ...reviewData,
            [name]: value,
        });
    };

    const handleAddReview = (event) => {
        event.preventDefault();
        console.log(reviewData);

        fetch("https://mysterious-oasis-06902.herokuapp.com/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(reviewData),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("Review added successfully.");
                event.target.reset();
            });
    };
    return (
        <div className="container mx-auto flex justify-center">
            <div className="w-1/2  border border-solid p-6 rounded">
                <h3 className="mb-5 font-bold text-xl">Add Reivew</h3>
                <div className="">
                    <form onSubmit={handleAddReview}>
                        <div className="form-control mb-2.5">
                            <label className="label">Name</label>
                            <input
                                type="text"
                                name="reviewerName"
                                id="name"
                                placeholder="Name"
                                value={reviewData.reviewerName}
                                onChange={handleInputChange}
                                className="py-3 px-4 border border-solid rounded text-base focus:outline-none w-full"
                            />
                        </div>
                        <div className="form-control mb-2.5">
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name="reviewerEmail"
                                id="email"
                                placeholder="Email"
                                value={reviewData.reviewerEmail}
                                onChange={handleInputChange}
                                disabled
                                className="py-3 px-4 border border-solid rounded text-base focus:outline-none w-full"
                            />
                        </div>
                        <div className="form-control mb-2.5">
                            <label className="label">Rating</label>
                            <select
                                name="rating"
                                id="rating"
                                onChange={(e) => setRating(e.target.value)}
                                required
                                className="py-3 px-4 border border-solid rounded text-base focus:outline-none w-full"
                            >
                                <option value="">Choose Rating</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div className="form-control mb-2.5">
                            <label className="label">Review Text</label>
                            <textarea
                                name="reviewText"
                                id="rareviewTextting"
                                onChange={handleInputChange}
                                className="py-3 px-4 border border-solid rounded text-base focus:outline-none w-full"
                            />
                        </div>
                        <button
                            type="submit"
                            className=" bg-[#FE5D15] rounded text-white text-center py-4 px-10 uppercase duration-300 cursor-pointer mt-2 hover:bg-black"
                        >
                            Add Review
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
