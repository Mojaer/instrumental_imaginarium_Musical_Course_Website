import { useContext, useEffect, useState } from "react";
import useAllSelectedClass from "../../../Components/AllSelectedClasses/useAllSelectedClass";
import { authContext } from "../../../Authentication/authProvider/AuthProvider";
import SelectedClassCard from "./SelectedClassCard";



const SelectedClasses = () => {
    const selectedClasses = useAllSelectedClass()
    const { user } = useContext(authContext)

    const [updatedClasses, setClasses] = useState([])
    console.log(updatedClasses,)

    useEffect(() => {
        const userSelectedClasses = selectedClasses.filter(Class => Class.studentEmail === user.email)
        setClasses(userSelectedClasses)
    }, [selectedClasses, user.email]);

    return (
        <section className="grid grid-cols-2">
            {updatedClasses.map(Class => <SelectedClassCard key={Class._id}
                setClasses={setClasses} updatedClasses={updatedClasses}
                Class={Class}></SelectedClassCard>)
            }
        </section>
    );
};

export default SelectedClasses;