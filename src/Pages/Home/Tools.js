import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";

const Tools = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate();

    const navigateToProductDetail = (id) => {
        navigate(`/product-detail/${id}`);
    };

    return (
        <div className="lg:py-20 py-12 container mx-auto ">
            <div className="w-full">
                <h2 className="text-center lg:text-[30px] text-[24px] font-bold uppercase pb-9">
                    Our Recent Tools/Parts
                </h2>
            </div>
            <div className="w-full">
                <div className="container grid lg:grid-cols-3 grid-cols-1 gap-7">
                    {products.slice(0, 6).map((product) => (
                        <div
                            key={product._id}
                            className="border border-solid border-[#ddd] p-4 hover:shadow-lg duration-300 hover:-translate-y-[2px] group"
                        >
                            <div className="mb-5">
                                <img
                                    className="w-auto h-40 object-cover mx-auto duration-300"
                                    src={product.img}
                                    alt={product.name}
                                />
                            </div>
                            <div className="">
                                <h3 className="text-[18px] mb-3 font-medium tracking-wide text-blackt">
                                    {product.name}
                                </h3>
                                <div className="flex flex-row justify-between my-1.5">
                                    <p className="text-[#777]">
                                        In Stock - {product.stock}
                                    </p>
                                    <p className="text-[#FE5D15] font-semibold text-[18px]">
                                        $ {product.price}
                                    </p>
                                </div>
                                <p className="text-[#777] mb-2">
                                    Minimum Order - {product.minOrder}
                                </p>
                                <p className="text-[#777] mb-2">
                                    {product.description.slice(0, 100)}...
                                </p>
                                <button
                                    className="inline-block text-[#FE5D15] font-semibold text-sm uppercase relative before:absolute before:content-[''] before:h-0.5 before:w-0 before:bg-gradient-to-r before:from-[#FE5D15] before:left-0 before:bottom-0 before:duration-300 group-hover:before:w-full"
                                    onClick={() =>
                                        navigateToProductDetail(product._id)
                                    }
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tools;
