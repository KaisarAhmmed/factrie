import React from "react";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

const Product = ({ data }) => {
    const { _id, name, img, stock, minOrder, price, description, createdAt } =
        data;

    const navigate = useNavigate();

    const navigateToProductDetail = (id) => {
        navigate(`/product-detail/${id}`);
    };

    return (
        <div className="border border-solid border-[#ddd] p-4 hover:shadow-lg duration-300 hover:-translate-y-[2px] group">
            <div className="mb-5">
                <img
                    className="w-auto h-40 object-cover mx-auto duration-300"
                    src={img}
                    alt={name}
                />
            </div>
            <div className="">
                <h3 className="text-base font-medium tracking-wide text-blackt">
                    {name}
                </h3>
                <div className="flex flex-row justify-between my-1.5">
                    <p className="text-[#777]">In Stock: {stock}</p>
                    <p className="text-[#FE5D15] font-semibold text-[18px]">
                        $ {price}
                    </p>
                </div>
                <button
                    className="inline-block text-[#FE5D15] font-semibold text-sm uppercase relative before:absolute before:content-[''] before:h-0.5 before:w-0 before:bg-gradient-to-r before:from-[#FE5D15] before:left-0 before:bottom-0 before:duration-300 group-hover:before:w-full"
                    onClick={() => navigateToProductDetail(_id)}
                >
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default Product;
