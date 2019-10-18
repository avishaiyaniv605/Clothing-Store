import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/actions/cartAction";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-counter">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return { toggleCartHidden: () => dispatch(toggleCartHidden()) };
};

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
