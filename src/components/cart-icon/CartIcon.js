import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/actions/cartAction";
import { selectCartItemsCount } from "../../redux/selectors/cartSelector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, sumOfCartItems }) => {
  return (
    <div className="icon-container hvr-buzz-out">
      <div className="cart-icon" onClick={toggleCartHidden}>
        <ShopingIcon className="shopping-icon" />
        <span className="item-counter">{sumOfCartItems}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return { toggleCartHidden: () => dispatch(toggleCartHidden()) };
};

const mapStateToProps = createStructuredSelector({
  sumOfCartItems: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
