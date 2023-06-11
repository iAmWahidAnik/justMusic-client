import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
// TODO : have to sort payment history newest payment first

const Payment = () => {
    const {price, email, classId} = useParams();
    const amount = parseFloat(price)
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm amount={amount} email={email} classId={classId}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;