import React from "react";
import BusinessImage from "../../Images/Business.jpeg";
import { FaUsers, FaPencilAlt } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { BsTools } from "react-icons/bs";

const Business = () => {
    return (
        <div className="lg:py-20 py-10 bg-[#f9f9f9] relative">
            <div
                className="lg:absolute lg:block hidden relative lg:w-[47%] w-full h-full right-0 top-0 bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${BusinessImage})` }}
            ></div>
            <div className="container mx-auto flex justify-start py-20 items-center gap-10">
                <div className="lg:w-6/12 w-full">
                    <h2 className="text-3xl font-semibold text-black mb-4">
                        25+ Years Of Experiences For Give You Better Results.
                    </h2>
                    <p className="text-[#777] mb-6">
                        Bring to the table win-win survival strategies to ensure
                        proactive domination. At the end of the day, going
                        forward, a new normal that has evolved from generation X
                        is on the runway heading towards a streamlined cloud
                        solution. Bring to the table win-win survival strategies
                        to ensure proactive domination.
                    </p>
                    <div className="w-full grid lg:grid-cols-4 grid-cols-2 gap-3">
                        <div className="text-center p-3 bg-white duration-300 hover:shadow-lg">
                            <FaUsers className="mx-auto text-4xl mb-2 text-[#FD5C16]" />
                            <p className="font-semibold tex-[18px]">
                                10000+ Customer
                            </p>
                        </div>
                        <div className="text-center p-3 bg-white duration-300 hover:shadow-lg">
                            <BiDollar className="mx-auto text-4xl mb-2 text-[#FD5C16]" />
                            <p className="font-semibold tex-[18px]">
                                120M+ Annual revenue
                            </p>
                        </div>
                        <div className="text-center p-3 bg-white duration-300 hover:shadow-lg">
                            <FaPencilAlt className="mx-auto text-4xl mb-2 text-[#FD5C16]" />
                            <p className="font-semibold tex-[18px]">
                                33K+ Reviews
                            </p>
                        </div>
                        <div className="text-center p-3 bg-white duration-300 hover:shadow-lg">
                            <BsTools className="mx-auto text-4xl mb-2 text-[#FD5C16]" />
                            <p className="font-semibold tex-[18px]">
                                50+ tools
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;
