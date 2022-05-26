import React from "react";
import Moment from "react-moment";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
    const { name, email, role, createdAt } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:4000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    toast.error("Failed to Make an admin");
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }
            });
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td className="capitalize">{role ? role : "Subscriber"}</td>
            <td>
                {role !== "admin" && (
                    <button
                        onClick={makeAdmin}
                        className="px-4 py-2 border border-solid border-black duration-300 rounded hover:text-white hover:bg-black"
                    >
                        Make Admin
                    </button>
                )}
            </td>
            <td>
                <Moment format="MMM DD, YYYY">{user.createdAt}</Moment>
            </td>
        </tr>
    );
};

export default UserRow;
