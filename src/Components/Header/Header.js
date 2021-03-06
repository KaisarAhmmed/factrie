import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../../Images/logo-v1.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";
import { signOut } from "firebase/auth";
import UserPlaceholder from "../../Images/user-placeholder.png";
import useProfile from "../../Hooks/useProfile";
import { BiMenu } from "react-icons/bi";

const Header = () => {
    const [user] = useAuthState(auth);
    const curUser = useProfile(user?.email);
    const [menu, setMenu] = useState(false);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };

    const handleMobileMenu = () => {
        setMenu(!menu);
    };

    return (
        <>
            <div className="bg-[#292929] hidden lg:block">
                <div className="container py-3.5 mx-auto flex text-white font-light">
                    <div className="w-6/12 font-[15px] text-white">
                        Welcome to our{" "}
                        <span className="text-[#FE5D15]">Manufacturer</span>{" "}
                        website.
                    </div>
                    <div className="w-6/12 flex justify-end font-[15px] text-white">
                        <div className="flex text-white items-center">
                            <Link
                                className="mr-3 inline-block hover:text-[#FE5D15] duration-300"
                                to="/"
                            >
                                <FaFacebookF />
                            </Link>
                            <Link
                                className="mr-3 inline-block hover:text-[#FE5D15] duration-300"
                                to="/"
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                className="mr-3 inline-block hover:text-[#FE5D15] duration-300"
                                to="/"
                            >
                                <FaTwitter />
                            </Link>
                            <Link
                                className="mr-3 inline-block hover:text-[#FE5D15] duration-300"
                                to="/"
                            >
                                <FaYoutube />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-7 mx-auto flex">
                <div className="lg:w-4/12 w-full flex items-center justify-between">
                    <Link className="inline" to="/">
                        <img
                            className="h-[37px]"
                            src={LOGO}
                            alt="manufacturer"
                        />
                    </Link>
                </div>
                <div
                    className={`lg:w-8/12 w-full hidden lg:block duration-300 ${
                        menu ? "active" : ""
                    }`}
                >
                    <ul className="flex justify-end items-center">
                        <li>
                            <Link className="menu-url" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-url" to="/my-portfolio">
                                My Protfolio
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-url" to="/products">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-url" to="/reviews">
                                Reviews
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-url" to="/blog">
                                Blog 2
                            </Link>
                        </li>

                        {user ? (
                            <>
                                <li className="menu-url">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <div className="avatar relative group">
                                        <div className="w-10 rounded-full">
                                            <img
                                                src={
                                                    curUser.img
                                                        ? curUser.img
                                                        : UserPlaceholder
                                                }
                                                alt={curUser.name}
                                                title={curUser.name}
                                            />
                                        </div>
                                        <ul className="absolute w-28 top-12 bg-white text-black text-sm py-2 shadow-sm z-50 border border-solid -left-9 text-center opacity-0 invisible duration-300 group-hover:opacity-100 group-hover:visible group-hover:top-10">
                                            <li className="border-b pb-1 mb-1 border-solid">
                                                {curUser.name}
                                            </li>
                                            <li>
                                                <button
                                                    className="hover:text-[#FE5D15] duration-300"
                                                    onClick={handleSignOut}
                                                >
                                                    Sign Out
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link className="menu-url" to="/login">
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;
