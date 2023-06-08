import { useQuery } from "react-query";
import useAxiosAction from "../AxiosAction/useAxiosAction";



const UseAllUsers = () => {

    const AxiosAction = useAxiosAction()

    const { data: allUsers = [], isLoading: allUserLoading, refetch } = useQuery(['users'], async () => {
        const res = await AxiosAction.get('/users');
        const data = res.data
        // console.log(data)
        return data;
    })
    return [allUsers, allUserLoading, refetch]

};

export default UseAllUsers;