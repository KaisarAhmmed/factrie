import React from "react";
import { Link, Outlet } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import auth from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import useProfile from "../../Hooks/useProfile";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const userData = useProfile(user.email);

    return (
        <>
            <Breadcrumb pageTitle={"Dashboard"} />
            <div className="px-20 mx-auto py-20 flex justify-center items-start gap-8">
                <div className="w-3/12">
                    <ul className="border border-solid rounded">
                        <li className="group">
                            <Link
                                className="p-4 block border-b group-hover:bg-[#f0f0f0] duration-300"
                                to="/dashboard"
                            >
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="p-4 block border-b"
                                to="/dashboard/profile"
                            >
                                My Profile
                            </Link>
                        </li>
                        {!admin && (
                            <>
                                <li>
                                    <Link
                                        className="p-4 block border-b"
                                        to="/dashboard/my-order-history"
                                    >
                                        My Order History
                                    </Link>
                                </li>
                            </>
                        )}
                        {admin && (
                            <>
                                <li>
                                    <Link
                                        className="p-4 block border-b"
                                        to="/dashboard/users"
                                    >
                                        Users
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="p-4 block border-b"
                                        to="/dashboard/order-history"
                                    >
                                        Orders History
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="p-4 block border-b"
                                        to="/dashboard/add-product"
                                    >
                                        Add New Product
                                    </Link>
                                </li>
                            </>
                        )}
                        <li>
                            <Link className="p-4 block" to="/dashboard/payment">
                                Payment
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-9/12">
                    <Outlet context={[userData]}></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
