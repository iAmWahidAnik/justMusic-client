import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';

const CheckoutForm = ({ amount, email, classId }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user, loading } = useContext(AuthContext);
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState('');

    if (loading) {
        return <div>Loading...</div>
    }

    useEffect(() => {
        axios.post('http://localhost:3000/paymentintent', { price: amount })
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log(error.message);
            return Swal.fire({
                icon: 'error',
                title: error.message
            });
        }
        else {
            console.log(paymentMethod);
        }

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            return Swal.fire({
                icon: 'error',
                title: confirmError.message
            });
        }
        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            const transactionId = paymentIntent.id;

            axios.patch(`http://localhost:3000/paymentsuccess?email=${email}&classId=${classId}`, { transactionId, paymentStatus: 'successful', paymentDate: new Date() })
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            icon: 'success',
                            title: `payment succeeded with transaction ID : ${transactionId}`
                        });
                    }
                })
        }
    }
    return (
        <form className='w-1/2 mx-auto my-20' onSubmit={handleSubmit}>
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
            <button className='btn btn-primary btn-xs my-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;