import React from "react";
import Banner from "./Banner";
import Business from "./Business";
import Contact from "./Contact";
import Mission from "./Mission";
import Review from "./Review";
import Tools from "./Tools";

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <Tools />
            <Business />
            <Review />
            <Contact />
            <Mission />
        </div>
    );
};

export default Home;
