import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosAction from "../../../Components/AxiosAction/useAxiosAction";
import AuthProvider, { authContext } from "../../../Authentication/authProvider/AuthProvider";
import './checkout.css'
import Swal from "sweetalert2";

const CheckoutPage = ({ price, currentClass }) => {
    // console.log(price);

    const stripe = useStripe();
    const elements = useElements();
    const axiosAction = useAxiosAction();
    const { user } = AuthProvider(authContext)
    const [cardError, setError] = useState(null)
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axiosAction.post("/create-payment-intent", { price })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
        // fetch("/create-payment-intent", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ price }),
        // })
        //     .then((res) => res.json())
        //     .then((data) => setClientSecret(data.clientSecret));
    }, [price, axiosAction])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
        }


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );

        if (confirmError) {
            setError(confirmError);
        }

        // console.log(paymentIntent)
        if (paymentIntent.status === "succeeded") {
            setLoading(true);
            // console.log(paymentIntent.currency)
            delete currentClass._id
            currentClass.transactionId = paymentIntent.id;
            // console.log(currentClass, paymentIntent)
            axiosAction.post('/payment', currentClass)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'payment complete',
                            showConfirmButton: false,
                        })
                    }
                })


        }

        // console.log(transID)
        // console.log(cardError)




    }
    return (
        <section className="ms-5">
            <form className="w-3/4" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-success btn-sm my-6" type="submit" disabled={!stripe || !clientSecret || loading}>
                    Pay
                </button>
                {cardError && <p className="text-red-600 font-bold text-center">{cardError.message}</p>}
            </form>



        </section>
    );
};

export default CheckoutPage;