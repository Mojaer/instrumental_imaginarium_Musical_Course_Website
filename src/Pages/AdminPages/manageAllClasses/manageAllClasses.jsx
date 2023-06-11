import { useEffect, useState } from "react";
import useAxiosAction from "../../../Components/AxiosAction/useAxiosAction";
import ClassCard from "../../../Components/ClassCard/ClassCard";



const ManageAllClasses = () => {
    const axiosAction = useAxiosAction()
    const [classes, setClasses] = useState([])

    useEffect(() => {
        axiosAction.get(`/allClasses`)
            .then(res => {
                setClasses(res.data)
            })
    }, [axiosAction]);

    console.log(classes)

    return (
        <section className="ms-4 grid grid-cols-2 gap-4">
            {classes.map(eachClass => <ClassCard key={eachClass._id} eachClass={eachClass} ></ClassCard>)}
        </section>

    );
};

export default ManageAllClasses