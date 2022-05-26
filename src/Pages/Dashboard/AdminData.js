import React from "react";
import useProducts from "../../Hooks/useProducts";
import useReviews from "../../Hooks/useReviews";

const AdminData = () => {
    const [products] = useProducts();
    const [reviews] = useReviews();
    return (
        <div className="container mx-auto border border-solid p-6 rounded">
            <h3 className="mb-5 font-bold text-xl">Dashboard</h3>
            <div className="w-full grid grid-cols-3 gap-7">
                <div className="card bg-base-100 shadow-xl p-6">
                    <h3 className="text-2xl font-bold">Total Products</h3>
                    <p className="text-6xl mt-3 text-[#FE5D15] font-bold">
                        {products?.length}
                    </p>
                </div>
                <div className="card bg-base-100 shadow-xl p-6">
                    <h3 className="text-2xl font-bold">Total Reviews</h3>
                    <p className="text-6xl mt-3 text-[#FE5D15] font-bold">
                        {reviews?.length}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminData;
