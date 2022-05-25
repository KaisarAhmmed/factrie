import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Loading from "../../Components/Loading/Loading";
import useProductDetail from "../../Hooks/useProductDetail";

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [productDetail, productLoading] = useProductDetail(productId);

    const { name, img, price, description, stock, minOrder } = productDetail;

    const [orderAmount, setOrderAmount] = useState(0);

    useEffect(() => {
        setOrderAmount(minOrder);
    }, [minOrder, productId]);

    const handlePurchaseRoute = (productId, orderAmount) => {
        const oA = parseInt(orderAmount);
        const mO = parseInt(minOrder);
        const sT = parseInt(stock);
        if (oA < mO) {
            toast.error(`You can't order less than ${minOrder} item.`);
        } else if (oA > sT) {
            toast.error(`You can't order more than ${stock} item.`);
        } else {
            navigate(`/purchase/${productId}/${orderAmount}`);
        }
    };

    return (
        <>
            <Breadcrumb pageTitle={name} />
            {productLoading ? (
                <Loading></Loading>
            ) : (
                <div className="container mx-auto flex justify-start py-20 gap-10">
                    <div className="w-5/12 border border-solid p-7 duration-300 border-[#f9f9f9] hover:border-[#f0f0f0] group">
                        <img
                            src={img}
                            alt={name}
                            className="duration-300 group-hover:scale-105 "
                        />
                    </div>
                    <div className="w-7/12">
                        <h1 className="font-bold text-4xl text-black mb-5 uppercase">
                            {name}
                        </h1>
                        <p className="text-[#FE5D15] font-bold text-3xl mb-4">
                            $ {price}
                        </p>
                        <p className="text-lg mb-2">
                            Available in stock:
                            <span className="font-bold text-black inline-block ml-2">
                                {stock}
                            </span>
                        </p>
                        <p className="text-lg mb-2">
                            Minimum order quantity:
                            <span className="font-bold text-black inline-block ml-2">
                                {minOrder}
                            </span>
                        </p>
                        <h4 className="font-semibold text-black text-lg mb-2">
                            Description
                        </h4>
                        <p className="mb-5">{description}</p>

                        <div className="mb-5">
                            <button></button>
                            <input
                                type="number"
                                name="minOrder"
                                min={minOrder}
                                max={stock}
                                className="py-3 px-4 border border-solid rounded text-base w-40 text-center appearance-none focus:outline-none"
                                value={orderAmount}
                                onChange={(e) => setOrderAmount(e.target.value)}
                            />
                            <button></button>
                        </div>
                        <button
                            onClick={() =>
                                handlePurchaseRoute(productId, orderAmount)
                            }
                            className="bg-[#FE5D15] rounded text-white text-center py-3.5 px-16 uppercase duration-300 cursor-pointer hover:bg-black"
                        >
                            Purchase Now
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetail;
