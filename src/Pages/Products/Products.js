import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Product from "./Product";
import useProducts from "../../Hooks/useProducts";

const Products = () => {
    const [products, setProducts] = useProducts();

    return (
        <>
            <Breadcrumb pageTitle={"All Products"} />
            <div className="container mx-auto grid lg:grid-cols-4 grid-cols-1 py-20 gap-7">
                {products.map((item) => (
                    <Product key={item._id} data={item} />
                ))}
            </div>
        </>
    );
};

export default Products;
