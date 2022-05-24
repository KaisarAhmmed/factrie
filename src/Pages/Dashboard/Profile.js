import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import useProfile from "../../Hooks/useProfile";
import UserImage from "../../Images/user-placeholder.png";

const Profile = () => {
    const [currentUser] = useOutletContext();

    const {
        email,
        name,
        img,
        phone,
        streetAddress,
        district,
        postcode,
        linkedIn,
        education,
    } = useProfile(currentUser);

    return (
        <div className="container mx-auto flex justify-center gap-7">
            <div className="w-4/12 text-center">
                <img
                    className="w-32 rounded-full mx-auto mb-8"
                    src={img ? img : UserImage}
                    alt="userphoto"
                />
                <Link
                    to="/dashboard/profile/edit"
                    className="bg-[#FE5D15] rounded py-3 px-8 text-white duration-300 hover:bg-[#000]"
                >
                    Edit Profile
                </Link>
            </div>
            <div className="w-8/12 flex justify-start gap-7">
                <div className="w-1/2">
                    <div className="mb-5">
                        <h4 className="text-sm font-semibold mb-1 text-[#777]">
                            Full Name
                        </h4>
                        <p className="text-[18px] text-black">
                            {name ? name : "Please set name"}
                        </p>
                    </div>
                    <div className="mb-5">
                        <h4 className="text-sm font-semibold mb-1 text-[#777]">
                            Email Address
                        </h4>
                        <p className="text-[18px] text-black">
                            {email ? email : "Add your active email address"}
                        </p>
                    </div>
                    <div className="mb-5">
                        <h4 className="text-sm font-semibold mb-1 text-[#777]">
                            Phone Number
                        </h4>
                        <p className="text-[18px] text-black">
                            {phone ? phone : "Not available"}
                        </p>
                    </div>
                    <div className="mb-5">
                        <h4 className="text-sm font-semibold mb-1 text-[#777]">
                            Education Level
                        </h4>
                        <p className="text-[18px] text-black">
                            {education ? education : "Not available"}
                        </p>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="mb-5">
                        <h4 className="text-sm font-semibold mb-1 text-[#777]">
                            Street Address
                        </h4>
                        <p className="text-[18px] text-black">
                            {streetAddress ? streetAddress : "Not available"}
                        </p>
                    </div>
                    <div className="mb-5">
                        <h4 className="text-sm font-semibold mb-1 text-[#777]">
                            District
                        </h4>
                        <p className="text-[18px] text-black">
                            {district ? district : "Not available"}
                        </p>
                    </div>
                    <div className="mb-5">
                        <h4 className="text-sm font-semibold mb-1 text-[#777]">
                            PostCode
                        </h4>
                        <p className="text-[18px] text-black">
                            {postcode ? postcode : "Not available"}
                        </p>
                    </div>
                    <div className="mb-5">
                        <h4 className="text-sm font-semibold mb-1 text-[#777]">
                            LinkedIn Profile Url
                        </h4>
                        <p className="text-[18px] text-black">
                            {linkedIn ? linkedIn : "Not available"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
