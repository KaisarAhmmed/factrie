import { useEffect, useState } from "react";

const useProfile = (email) => {
    const [curUser, setCurUser] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/user/${email}`)
            .then((res) => res.json())
            .then((data) => setCurUser(data));
    }, [email]);

    return curUser;
};

export default useProfile;
