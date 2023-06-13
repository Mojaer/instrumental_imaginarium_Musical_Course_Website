import { useEffect, useState } from "react";
import useAxiosAction from "../AxiosAction/useAxiosAction";

// all selected classes by students 

const useAllSelectedClass = () => {
    const axiosAction = useAxiosAction()
    const [selectedClasses, setClasses] = useState([])
    useEffect(() => {
        axiosAction.get(`/selectedClasses`)
            .then(res => {
                setClasses(res.data)
            })
    }, [axiosAction]);
    return selectedClasses

};

export default useAllSelectedClass;