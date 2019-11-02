import React from "react";
import { ReactComponent as ShippmentLogo } from "../../assets/paper-plane-color.svg";
import { ReactComponent as CardLogo } from "../../assets/card.svg";
import { ReactComponent as DeliveryLogo } from "../../assets/delivery-truck.svg";
import { ReactComponent as LocationLogo } from "../../assets/location.svg";
import "./OrderSummery.scss";

//TODO::Very ugly page (code wise), need to refactor after finishing functionality.

const OrderSummery = ({ location }) => {
  const { card } = location.state.token;
  console.log(location.state.token);
  return (
    <div className="order-container">
      <div className="order-summery">
        <div className="user-message">
          <ShippmentLogo className="shippment-logo" />
          <h1 className="title">
            Congratulations {card.name}, Your order has been placed!
          </h1>
        </div>
        <div className="order-details">
          <div className="shipping">
            <LocationLogo className="logo" />
            <span className="section-title">Shippment</span>
            <span className="country">Country: {card.address_country}</span>
            <span className="city">City: {card.address_city}</span>
            <span className="street">Street: {card.address_line1}</span>
            <span className="zip-code">Zipcode {card.address_zip}</span>
          </div>
          <div className="vl" />
          <div className="billing">
            <CardLogo className="logo" />
            <span className="section-title">Billing</span>
            <span className="country">Country: {card.address_country}</span>
            <span className="city">City: {card.address_city}</span>
            <span className="street">Street: {card.address_line1}</span>
            <span className="zip-code">Zipcode: {card.address_zip}</span>
          </div>
          <div className="vl" />
          <div className="method">
            <DeliveryLogo className="logo" />
            <span className="section-title">Shippment method</span>
            <span>
              US. Standard <br /> (normally 4-5 business days)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
