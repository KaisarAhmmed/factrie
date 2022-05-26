import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

const NotFound = () => {
    return (
        <>
            <Breadcrumb pageTitle={"Not Found"} />
            <div className="py-20 container mx-auto flex justify-center">
                <h2>Not Found</h2>
            </div>
        </>
    );
};

export default NotFound;
