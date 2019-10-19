import React from "react";
import HomePage from "../pages/homepage/HomePage";
import ShopPage from "../pages/shop/shop";
import Header from "./header/Header";
import SignInUp from "../pages/SignInOut/SignInUp";
import Checkout from "../pages/checkout/Checkout";
import { auth, createUserDocument } from "../utils/firebase/Firebase";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "../redux/actions/userAction";
import { selectCurrenUser } from "../redux/selectors/userSelector";
import { createStructuredSelector } from "reselect";
import "./App.scss";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userFromAuth => {
      if (userFromAuth) {
        const userRef = await createUserDocument(userFromAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: { id: snapshot.id, ...snapshot.data() }
          });
        });
      }
      setCurrentUser(null);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signinup"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrenUser
});

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
