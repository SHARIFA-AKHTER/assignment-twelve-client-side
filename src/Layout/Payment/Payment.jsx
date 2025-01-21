

import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { loadStripe } from 'react-stripe-js';
import CheckoutForm from './CheckoutForm';

// Load the publishable key for Stripe
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK || '');

const Payment = () => {
    if (!import.meta.env.VITE_Payment_Gateway_PK) {
        console.error("Stripe publishable key is missing. Please set VITE_Payment_Gateway_PK in your .env file.");
    }

    return (
        <div className="payment-container min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 text-gray-800">
                Complete Your Payment
            </h2>
            <div className="payment-form w-full max-w-xs sm:max-w-md lg:max-w-lg bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;