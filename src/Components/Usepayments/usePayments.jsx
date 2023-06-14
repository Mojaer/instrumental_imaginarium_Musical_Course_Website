import { useQuery } from "react-query";
import useAxiosAction from "../AxiosAction/useAxiosAction";



const UsePayments = () => {

    const AxiosAction = useAxiosAction()

    const { data: allPayments = [], isLoading: paymentsLoading, refetch } = useQuery(['payments'], async () => {
        const res = await AxiosAction.get('/payments');
        const data = res.data
        // console.log(data)
        return data;
    })
    return [allPayments, paymentsLoading, refetch]

};

export default UsePayments;