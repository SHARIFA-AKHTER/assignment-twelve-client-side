

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axios from "axios";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState(""); 
  const stripe = useStripe();
  const elements = useElements();

  // Fetch the PaymentIntent client secret on component mount
  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        const response = await axios.post(
          "https://assignment-twelve-server-iota.vercel.app/requests/create-payment-intent",
          {
           
            amount: 1000, 
            currency: "usd", 
          }
        );
        setClientSecret(response.data.clientSecret); 
      } catch (err) {
        console.error("Error creating payment intent:", err.message || err);
      }
    };

    fetchPaymentIntent();
  }, []); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // Create a payment method using the card details
    const { error: paymentError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card,
      });

    if (paymentError) {
      console.log("Payment error:", paymentError);
      setError(paymentError.message);
      return;
    } else {
      console.log("Payment method:", paymentMethod);
      setError("");
    }

    // Confirm the card payment using the client secret
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            // Optionally include billing details
            name: "Test User",
            email: "test@example.com",
          },
        },
      });

    if (confirmError) {
      console.log("Payment confirmation error:", confirmError);
      setError(confirmError.message);
      return;
    }

    console.log("Payment successful:", paymentIntent);
    setError(""); // Clear any errors
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <button
        className="btn btn-sm btn-primary my-4"
        type="submit"
        disabled={!stripe}
      >
        Pay Now
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default CheckoutForm;
