import React from "react";
import useProducts from "../../Hooks/useProducts";
import Moment from "react-moment";
import { toast } from "react-toastify";

const ManageProducts = () => {
    const [products, setProducts] = useProducts();

    const handleProductDelete = (id) => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `http://localhost:4000/delete-product/${id}`;
            fetch(url, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = products.filter(
                        (item) => item._id !== id
                    );
                    setProducts(remaining);
                    toast.success("Product deleted successfully.");
                });
        }
    };

    return (
        <div className="container mx-auto border border-solid p-6 rounded">
            <h3 className="mb-5 font-bold text-xl">Manage Products</h3>
            <div className="w-full">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Stock</th>
                                <th>Min Order</th>
                                <th>Added By</th>
                                <th>Added At</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((product) => (
                                <tr key={product._id}>
                                    <td>
                                        <div className="flex flex-col justify-start items-start">
                                            <img
                                                className="w-16 mb-1.5 mr-2"
                                                src={product.img}
                                                alt={product.name}
                                            />
                                            <p>{product.name}</p>
                                        </div>
                                    </td>
                                    <td>{product.stock}</td>
                                    <td>{product.minOrder}</td>
                                    <td>{product.authorName}</td>
                                    <td>
                                        <Moment format="MMM DD, YYYY">
                                            {product.createdAt}
                                        </Moment>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleProductDelete(product._id)
                                            }
                                            className="py-2 px-6 inline-block rounded duration-300 bg-red-600 text-white hover:bg-red-700"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;
