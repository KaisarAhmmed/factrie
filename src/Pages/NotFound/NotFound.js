import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import NotFoundImage from "../../Images/not-found.webp";

const NotFound = () => {
    return (
        <>
            <Breadcrumb pageTitle={"Not Found"} />
            <div className="py-20 container mx-auto flex justify-center">
                <div className="w-1/2 text-center">
                    <img
                        src={NotFoundImage}
                        alt="not found"
                        className="w-1/2 mx-auto"
                    />
                    <Link
                        to="/"
                        className="bg-[#FE5D15] inline-block mt-20 rounded text-white text-center py-4 px-10 uppercase duration-300 cursor-pointer hover:bg-black"
                    >
                        Back To Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;
