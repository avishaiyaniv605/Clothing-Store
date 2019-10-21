import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./StripeButton.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceAsCents = price * 100;
  const publishableKey = "pk_test_JUjWNzVg2xfrHfktMqwAwMyi000akHXYB7";

  const onToken = token => {
    console.log("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="A&A Clothins Lts."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}$`}
      amount={priceAsCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="ILS"
    />
  );
};

export default StripeCheckoutButton;
