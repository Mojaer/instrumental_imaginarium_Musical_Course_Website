import { useContext, useEffect, useState } from "react";
import useAxiosAction from "../../../Components/AxiosAction/useAxiosAction";
import { authContext } from "../../../Authentication/authProvider/AuthProvider";
import ClassCard from "../../../Components/ClassCard/ClassCard";


const MyClasses = () => {
    const axiosAction = useAxiosAction()
    const { user } = useContext(authContext)
    const [classes, setClasses] = useState([])

    useEffect(() => {
        axiosAction.get(`classes?email=${user.email}`)
            .then(res => {
                setClasses(res.data)
            })
    }, [axiosAction, user.email]);


    return (
        <section className="ms-4 grid grid-cols-2 gap-4">
            {classes.map(eachClass => <ClassCard key={eachClass._id} eachClass={eachClass} ></ClassCard>)}
        </section>
    );
};

export default MyClasses;