import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";
import { auth } from "../../utils/firebase/Firebase";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import {
  selectCurrenUser,
  selectCartHidden
} from "../../redux/selectors/userSelector";
import "../../utils/animations.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container hvr-bounce-in" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option hvr-underline-from-center" to="/shop">
          SHOP
        </Link>
        <Link className="option hvr-underline-from-center" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option hvr-underline-from-center"
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div>
        ) : (
          <Link to="/signinup" className="option hvr-underline-from-center">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrenUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
