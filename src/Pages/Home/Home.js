import React from "react";
import Banner from "./Banner";
import Business from "./Business";
import Contact from "./Contact";
import Mission from "./Mission";
import Tools from "./Tools";

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <Tools />
            <Business />
            <Contact />
            <Mission />
        </div>
    );
};

export default Home;
