import React from "react";
import ContactImage from "../../Images/contact.jpg";
import { BsTelephonePlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div
            className="bg-[#f5f5f5] w-full bg-cover bg-center py-20 relative bg-no-repeat before:absolute before:content-[''] before:h-full before:w-full before:bg-black before:opacity-70 before:z-10 before:left-0 before:top-0"
            style={{ backgroundImage: `url(${ContactImage})` }}
        >
            <div className="container mx-auto flex justify-center items-center relative z-20">
                <div className="lg:w-8/12 w-full text-center">
                    <BsTelephonePlus className="mx-auto text-5xl text-[#FE5D15] mb-6" />
                    <h4 className="text-white lg:text-3xl text-2xl mb-3 font-bold">
                        Any spare parts related issues? we are happy to help
                        you.
                    </h4>
                    <p className="text-xl text-white mb-4">
                        Call Us Now
                        <Link
                            to="tel:01712787878"
                            className="font-semibold text-[#FE5D15] inline-block ml-4"
                        >
                            +880 1712 000111
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
