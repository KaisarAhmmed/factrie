import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../Images/logo-footer.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ImMap2 } from "react-icons/im";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import useProducts from "../../Hooks/useProducts";

const Footer = () => {
    const [products] = useProducts();

    return (
        <>
            <div className="bg-black py-20">
                <div className="container mx-auto flex gap-8">
                    <div className="w-3/12">
                        <Link to="/">
                            <img
                                className="h-[30px]"
                                src={LOGO}
                                alt="Footer Logo"
                            />
                        </Link>
                        <p className="text-[#999] text-[15px] leading-7 mt-8">
                            We are leader in the Factory and Industrial area. We
                            do not believe in the sales culture, but instead we
                            believe in the service culture. Because we love our
                            customers.
                        </p>
                        <h3 className="text-white font-semibold text-xl tracking-wider my-8">
                            Follow Us
                        </h3>
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
                    <div className="w-3/12">
                        <h3 className="text-white text-2xl font-semibold tracking-wider mb-8">
                            Useful Links
                        </h3>
                        <ul>
                            <li>
                                <Link
                                    className="uppercase text-[#999] mb-3 inline-block font-normal hover:text-[#FE5D15] duration-300 text-sm"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="uppercase text-[#999] mb-3 inline-block font-normal hover:text-[#FE5D15] duration-300 text-sm"
                                    to="/products"
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="uppercase text-[#999] mb-3 inline-block font-normal hover:text-[#FE5D15] duration-300 text-sm"
                                    to="/reviews"
                                >
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="uppercase text-[#999] mb-3 inline-block font-normal hover:text-[#FE5D15] duration-300 text-sm"
                                    to="/login"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="uppercase text-[#999] mb-3 inline-block font-normal hover:text-[#FE5D15] duration-300 text-sm"
                                    to="/register"
                                >
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="uppercase text-[#999] inline-block font-normal hover:text-[#FE5D15] duration-300 text-sm"
                                    to="/login"
                                >
                                    Cotnact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/12">
                        <h3 className="text-white text-2xl font-semibold tracking-wider mb-8">
                            Recent Products
                        </h3>
                        {products.slice(0, 3).map((item) => (
                            <div
                                key={item._id}
                                className="mb-4 flex flex-row items-center"
                            >
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-14 mr-3 h-14 object-cover"
                                />
                                <div className="text-[#999]">
                                    <p>{item.name.slice(0, 25)}...</p>
                                    <p className="text-[#FD5C16]">
                                        {" "}
                                        ${item.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-3/12">
                        <h3 className="text-white text-2xl font-semibold tracking-wider mb-8">
                            Contact Us
                        </h3>
                        <p className="text-[#999] text-[15px] leading-7 mb-4">
                            We are leader in the Factory and Industrial area. We
                            do not believe in the sales culture.
                        </p>
                        <ul>
                            <li className="flex mb-4">
                                <ImMap2 className="text-[#FE5D15] mr-6 text-[22px] mt-1" />
                                <p className="text-[#999] text-[15px] leading-6 font-normal">
                                    143 Castle Road 517 district, kiyev port
                                    south Canada
                                </p>
                            </li>
                            <li className="flex mb-4">
                                <BsTelephone className="text-[#FE5D15] mr-6 text-[20px] mt-1" />
                                <p className="text-[#999] text-[15px] leading-6 font-normal">
                                    +880 1712 001122
                                </p>
                            </li>
                            <li className="flex">
                                <MdOutlineEmail className="text-[#FE5D15] mr-6 text-[20px] mt-1" />
                                <p className="text-[#999] text-[15px] leading-6 font-normal">
                                    info@themecafe.net
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-7 bg-[#111111]">
                <div className="container mx-auto flex text-[#999]">
                    <div className="w-6/12">
                        <p className="text-sm font-light">
                            Copyright &copy; 2022 Factrie. All rights reserved.
                        </p>
                    </div>
                    <div className="w-6/12 flex justify-end">
                        <p className="text-sm font-light">
                            Design and Developed By{" "}
                            <Link className="text-[#FE5D15]" to="/">
                                ThemeCafe
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
