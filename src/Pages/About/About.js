import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Kaisar from "../../Images/kaisar.JPG";

const About = () => {
    return (
        <>
            <Breadcrumb pageTitle={"My Portfolio"} />
            <div className="container py-20 mx-auto flex gap-8 justify-center">
                <div className="w-3/12">
                    <img src={Kaisar} alt="kaisar" />
                </div>
                <div className="w-9/12">
                    <h2 className="text-2xl font-bold uppercase mb-4">
                        Hello, I am Kaisar Ahmmed
                    </h2>
                    <p className="text-[#777]">
                        I'm working on web designer & front‑end developer
                        focused on crafting clean & user‑friendly experiences, I
                        am passionate about building excellent software that
                        improves the lives of those around me.
                    </p>
                    <h3 className="mt-10 mb-4 text-xl font-bold uppercase">
                        My Skill
                    </h3>
                    <div className="grid grid-cols-6 gap-4">
                        <div className="flex flex-col p-4 border border-solid text-center">
                            <div
                                className="radial-progress mx-auto"
                                style={{ "--value": 95 }}
                            >
                                95%
                            </div>
                            <p className="text-xl mt-3">HTML</p>
                        </div>
                        <div className="flex flex-col p-4 border border-solid text-center">
                            <div
                                className="radial-progress mx-auto"
                                style={{ "--value": 90 }}
                            >
                                90%
                            </div>
                            <p className="text-xl mt-3">CSS</p>
                        </div>
                        <div className="flex flex-col p-4 border border-solid text-center">
                            <div
                                className="radial-progress mx-auto"
                                style={{ "--value": 80 }}
                            >
                                80%
                            </div>
                            <p className="text-xl mt-3">jQuery</p>
                        </div>
                        <div className="flex flex-col p-4 border border-solid text-center">
                            <div
                                className="radial-progress mx-auto"
                                style={{ "--value": 50 }}
                            >
                                50%
                            </div>
                            <p className="text-xl mt-3">React</p>
                        </div>
                        <div className="flex flex-col p-4 border border-solid text-center">
                            <div
                                className="radial-progress mx-auto"
                                style={{ "--value": 40 }}
                            >
                                40%
                            </div>
                            <p className="text-xl mt-3">Node Js</p>
                        </div>
                        <div className="flex flex-col p-4 border border-solid text-center">
                            <div
                                className="radial-progress mx-auto"
                                style={{ "--value": 40 }}
                            >
                                40%
                            </div>
                            <p className="text-xl mt-3">MongoDB</p>
                        </div>
                    </div>
                    <h3 className="mt-10 mb-4 text-xl font-bold uppercase">
                        Live Site
                    </h3>
                    <p className="text-[#777] duration-300 hover:text-[#FE5D15] mb-2">
                        <Link to="https://react-movie-app9.netlify.app/">
                            React Move App
                        </Link>
                    </p>
                    <p className="text-[#777] duration-300 hover:text-[#FE5D15] mb-2">
                        <Link to="https://traval.healthyhairplan.com/">
                            Google Traval Guide
                        </Link>
                    </p>
                    <p className="text-[#777] duration-300 hover:text-[#FE5D15] mb-2">
                        <Link to="https://inventory-bfc3e.web.app/">
                            Inventory Management
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
