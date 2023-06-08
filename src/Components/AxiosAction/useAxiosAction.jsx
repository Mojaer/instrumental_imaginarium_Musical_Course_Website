import axios from "axios";
import { useEffect } from "react";

const axiosAction = axios.create({
    baseURL: 'http://localhost:3000',
})

const useAxiosAction = () => {

    useEffect(() => {
        axiosAction.interceptors.request.use((config) => {
            return config
        })
    }, [])
    axiosAction.interceptors.response.use((response) => {
        return response
    })

    return axiosAction
};

export default useAxiosAction;