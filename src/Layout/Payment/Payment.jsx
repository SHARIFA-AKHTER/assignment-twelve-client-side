import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { loadStripe } from 'react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe('import.meta.env.VITE_Payment_Gateway_PK');
    return (
        <div>
            <h2 className="text-4xl">Payment This</h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;