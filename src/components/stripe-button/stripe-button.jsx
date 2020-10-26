import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    // Stripe wants values sent through in cents, so we have to convert the charge amount before sending it through.
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HgYQ0FGSkNLlSQFjgd9l45DsDuLHcDBOJ6f8oPgWGziI0ePVD2yylFLOUwsNYTiqkeQWoqeBuJAqpMoEEfP6UYa00fBFsB1ez';

    const onToken = token => {
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}.`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;