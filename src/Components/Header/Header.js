import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../Images/logo-v1.png";

const Header = () => {
    return (
        <>
            <div className="bg-[#292929]">
                <div className="container py-2 mx-auto flex text-white font-light">
                    <div className="w-6/12">Welcome to our website.</div>
                    <div className="w-6/12 flex justify-end">Call Us</div>
                </div>
            </div>
            <div className="container py-6 mx-auto flex">
                <div className="w-4/12">
                    <Link className="inline" to="/">
                        <img
                            className="h-[37px]"
                            src={LOGO}
                            alt="manufacturer"
                        />
                    </Link>
                </div>
                <div className="w-8/12">
                    <ul className="flex justify-end">
                        <li>
                            <Link className="theme-btn" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="theme-btn" to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="theme-btn" to="/products">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link className="theme-btn" to="/reviews">
                                Reviews
                            </Link>
                        </li>
                        <li>
                            <Link className="theme-btn" to="/blog">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link className="theme-btn" to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;
