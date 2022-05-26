import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../Images/banner.jpeg";

const Banner = () => {
    return (
        <div
            className="bg-[#f5f5f5] w-full bg-cover bg-center relative bg-no-repeat before:absolute before:content-[''] before:h-full before:w-full before:bg-black before:opacity-70 before:z-10 before:left-0 before:top-0"
            style={{ backgroundImage: `url(${BannerImage})` }}
        >
            <div className="container mx-auto py-20 flex justify-center text-center gap-8 items-center h-[700px] relative z-20">
                <div className="w-8/12">
                    <h1 className="text-[50px] font-bold leading-12 uppercase text-white mb-5">
                        Your trusted motorcycle spare parts manufacturer
                    </h1>
                    <p className="text-white font-light text-[18px] mb-5">
                        We are manufacture best motorycycle spare parts for all
                        popular brands. We are ISO certified manufacturer. We
                        supplied our tools in all over the world.
                    </p>
                    <Link
                        className="bg-[#FE5D15] rounded inline-block text-white text-center py-4 px-10 uppercase duration-300 cursor-pointer mt-2 hover:bg-black"
                        to="/products"
                    >
                        Our Products
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
