import React from "react";
import UserPlaceholder from "../../Images/user-placeholder.png";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";

const SingleReview = ({ data }) => {
    const { reviewText, reviewerImg, reviewerEmail, reviewerName, rating } =
        data;
    return (
        <div className="border border-solid p-5 rounded flex flex-col justify-between">
            <p className="text-[#777] mb-4">{reviewText}</p>
            <div className="flex justify-start items-center">
                <img
                    src={reviewerImg ? reviewerImg : UserPlaceholder}
                    alt={reviewerName}
                    className="w-20 h-20 object-cover rounded-full mr-3 border border-solid p-1 "
                />
                <div>
                    <p>{reviewerName}</p>
                    <p>{reviewerEmail}</p>
                    <p className="flex mt-1 text-yellow-500">
                        {rating === 5 ? (
                            <>
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                            </>
                        ) : (
                            ""
                        )}
                        {rating === 4 ? (
                            <>
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiOutlineStar />
                            </>
                        ) : (
                            ""
                        )}
                        {rating === 3 ? (
                            <>
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                            </>
                        ) : (
                            ""
                        )}
                        {rating === 2 ? (
                            <>
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                            </>
                        ) : (
                            ""
                        )}
                        {rating === 1 ? (
                            <>
                                <AiTwotoneStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                            </>
                        ) : (
                            ""
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;
