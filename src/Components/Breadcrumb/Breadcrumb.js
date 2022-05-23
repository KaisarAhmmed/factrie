import React from "react";
import { Link } from "react-router-dom";
import BGImage from "../../Images/breadcrumb.jpeg";

const Breadcrumb = ({ pageTitle }) => {
    return (
        <div
            className="py-20 bg-slate-100 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${BGImage})` }}
        >
            <span className="absolute bg-[#0d3ca0] h-full w-full opacity-50 top-0 left-0"></span>
            <div className="container mx-auto flex justify-center text-white z-20 relative">
                <div className="breadcrumbs text-center">
                    <h2 className="text-[50px] font-bold mb-6">{pageTitle}</h2>
                    <ul className="flex justify-center">
                        <li>
                            <Link
                                className="hover:text-[#FE5D15] no-underline duration-300"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>{pageTitle}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
