import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";
import { auth } from "../firebase/Firebase";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signinup" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
  return { currentUser, hidden };
};

export default connect(mapStateToProps)(Header);
