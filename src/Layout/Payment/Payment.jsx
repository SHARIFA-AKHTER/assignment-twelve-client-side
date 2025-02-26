
import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { loadStripe } from 'react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useNavigate, useLocation } from 'react-router-dom';  
import Swal from 'sweetalert2';

// Load the publishable key for Stripe
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK || '');

const Payment = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    if (!import.meta.env.VITE_Payment_Gateway_PK) {
        console.error("Stripe publishable key is missing. Please set VITE_Payment_Gateway_PK in your .env file.");
    }
    // Function to handle successful payment and navigate to dashboard
    const handlePaymentSuccess = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successful! Redirecting to Dashboard...",
            showConfirmButton: false,
            timer: 1500,
        });
        navigate('/dashboard'); 
    };

    return (
        <div className="payment-container min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-6 text-white">
                Complete Your Payment
            </h2>
            <div className="payment-form w-full max-w-xs sm:max-w-md lg:max-w-lg bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-2xl transform transition-all hover:scale-105 space-y-6">
                {/* Pass the formData to the CheckoutForm component */}
                <Elements stripe={stripePromise}>
                    <CheckoutForm formData={state?.formData?.package} onSuccess={handlePaymentSuccess} />
                </Elements>
                <div className="text-center text-gray-600">
                    <p className="text-sm">Package Selected: {state?.formData?.package ? `${state.formData.package} Members` : 'No package selected'}</p>
                </div>
            </div>
        </div>
    );
};

export default Payment;
