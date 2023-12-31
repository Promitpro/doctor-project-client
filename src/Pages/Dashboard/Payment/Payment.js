import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../../shared/Loading/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { slot, appointmentDate, price, treatment } = booking;
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p className="text-2xl">Please pay <strong>${price}</strong> for your treatment on {appointmentDate} at {slot}</p>
            <div  className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;