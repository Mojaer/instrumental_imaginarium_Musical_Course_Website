import { useEffect, useState } from "react";
import useAxiosAction from "../AxiosAction/useAxiosAction";



const useAllClasses = () => {
    const axiosAction = useAxiosAction()
    const [classes, setClasses] = useState([])
    useEffect(() => {
        axiosAction.get(`/allClasses`)
            .then(res => {
                setClasses(res.data)
            })
    }, [axiosAction]);
    return classes
};

export default useAllClasses;