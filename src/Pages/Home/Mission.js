import React from "react";
import { AiFillTool, AiOutlineHome } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { SiHandshake } from "react-icons/si";

const Mission = () => {
    return (
        <div className="py-20 bg-[#f9f9f9]">
            <div className="container mx-auto">
                <div className="w-full">
                    <h2 className="text-center text-[30px] font-bold uppercase pb-9">
                        Our Mission
                    </h2>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-4 gap-7">
                <div className="px-4 py-6 text-center hover:shadow-lg duration-300 hover:-translate-y-[4px] hover:bg-white">
                    <AiFillTool className="mx-auto text-4xl mb-4 text-[#FE5D15]" />
                    <h3 className="text-[20px] font-semibold mb-4">
                        Best Quality Product
                    </h3>
                    <p className="text-[#777]">
                        We are manufacture best quality product for our valuable
                        customers. No compromise with quality.
                    </p>
                </div>
                <div className="px-4 py-6 text-center hover:shadow-lg duration-300 hover:-translate-y-[4px] hover:bg-white">
                    <BsCurrencyDollar className="mx-auto text-4xl mb-4 text-[#FE5D15]" />
                    <h3 className="text-[20px] font-semibold mb-4">
                        Fair Price
                    </h3>
                    <p className="text-[#777]">
                        We are selling our products with cheap prrice all over
                        the world. Price will be fair always.
                    </p>
                </div>
                <div className="px-4 py-6 text-center hover:shadow-lg duration-300 hover:-translate-y-[4px] hover:bg-white">
                    <AiOutlineHome className="mx-auto text-4xl mb-4 text-[#FE5D15]" />
                    <h3 className="text-[20px] font-semibold mb-4">Trusted</h3>
                    <p className="text-[#777]">
                        Customer trust is our main goal. We always care about
                        our customer with trust.
                    </p>
                </div>
                <div className="px-4 py-6 text-center hover:shadow-lg duration-300 hover:-translate-y-[4px] hover:bg-white">
                    <SiHandshake className="mx-auto text-4xl mb-4 text-[#FE5D15]" />
                    <h3 className="text-[20px] font-semibold mb-4">
                        Long Term Relation
                    </h3>
                    <p className="text-[#777]">
                        We are believe in long term business with our customer.
                        So quality is the main focus of our business.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Mission;
