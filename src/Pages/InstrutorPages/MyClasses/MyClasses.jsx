import { useContext, useEffect, useState } from "react";
import useAxiosAction from "../../../Components/AxiosAction/useAxiosAction";
import { authContext } from "../../../Authentication/authProvider/AuthProvider";


const MyClasses = () => {
    const axiosAction = useAxiosAction()
    const { user } = useContext(authContext)
    const [classes, setClasses] = useState([])

    useEffect(() => {
        axiosAction.get(`classes?email=${user.email}`)
            .then(res => setClasses(res.data))
    }, [axiosAction, user.email]);

    console.log(classes)
    return (
        <div>

        </div>
    );
};

export default MyClasses;