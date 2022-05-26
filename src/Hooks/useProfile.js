import { useEffect, useState } from "react";

const useProfile = (email) => {
    const [curUser, setCurUser] = useState({});

    useEffect(() => {
        fetch(`https://mysterious-oasis-06902.herokuapp.com/user/${email}`)
            .then((res) => res.json())
            .then((data) => setCurUser(data));
    }, [email]);

    return curUser;
};

export default useProfile;
