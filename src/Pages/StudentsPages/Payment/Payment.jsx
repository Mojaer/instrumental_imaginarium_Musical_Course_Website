import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";
import useAllSelectedClass from "../../../Components/AllSelectedClasses/useAllSelectedClass";
import { useParams } from "react-router-dom";



const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
    const selectedClasses = useAllSelectedClass()
    const { id } = useParams()
    const currentClass = selectedClasses.find(Class => Class.id === id)
    if (!currentClass) {
        return
    }
    const price = currentClass.price
    // console.log(import.meta.env.VITE_Payment_PK)


    return (
        <section className="ms-5">
            <h1 className="my-10 text-3xl font-bold uppercase text-center">Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutPage price={price} currentClass={currentClass}></CheckoutPage>
            </Elements>
        </section>
    );
};

export default Payment;