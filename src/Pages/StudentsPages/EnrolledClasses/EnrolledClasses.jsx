import { useContext } from "react";
import UsePayments from "../../../Components/Usepayments/usePayments";
import { authContext } from "../../../Authentication/authProvider/AuthProvider";


const EnrolledClasses = () => {
    const { user, userLoading } = useContext(authContext)
    const [allPayments, paymentsLoading] = UsePayments();
    if (paymentsLoading || userLoading) {
        return <>loading...</>
    }

    const payments = allPayments.filter(payment => payment.studentEmail === user.email)
    // console.log(payments)


    return (<>
        <h1 className="text-3xl font-semibold my-10 text-center">Enrolled Courses</h1>
        <section className="grid md:grid-cols-3 gap-4 ms-2">

            {
                payments.map(payment => <div key={payment._id} >
                    <figure><img className="h-20" src={payment.ClassImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {payment.ClassName}
                        </h2>
                        <p> <strong>Instructor Email:</strong> {payment.InstructorEmail}</p>
                        <p> <strong>Price:</strong> {payment.price}$</p>
                    </div>
                </div>)
            }
        </section>
    </>

    );
};

export default EnrolledClasses;