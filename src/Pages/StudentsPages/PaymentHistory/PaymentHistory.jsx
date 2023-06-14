import { useContext } from "react";
import { authContext } from "../../../Authentication/authProvider/AuthProvider";
import UsePayments from "../../../Components/Usepayments/usePayments";


const PaymentHistory = () => {
    const { user, userLoading } = useContext(authContext)
    const [allPayments, paymentsLoading] = UsePayments();
    if (paymentsLoading || userLoading) {
        return <>loading...</>
    }

    const payments = allPayments.filter(payment => payment.studentEmail === user.email)
    payments.reverse()
    // console.log(payments)
    return (
        <div className="overflow-x-auto">
            <h1 className="text-3xl font-semibold my-10 uppercase text-center">Payment History </h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Class Name</th>
                        <th>Instructor </th>
                        <th>Price </th>
                        <th>Transaction Id</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        payments.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>{payment.ClassName}</td>
                            <td>{payment.InstructorName || payment.InstructorEmail}</td>
                            <td>{payment.price}</td>
                            <td>{payment.transactionId}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;