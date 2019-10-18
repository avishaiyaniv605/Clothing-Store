import React from "react";
import HomePage from "../pages/homepage/HomePage";
import ShopPage from "../pages/shop/shop";
import Header from "./header/Header";
import SignInUp from "../pages/SignInOut/SignInUp";
import { auth, createUserDocument } from "./firebase/Firebase";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "../redux/actions/userAction";
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

const mapStateToProps = ({ user }) => {
  return { currentUser: user.currentUser };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
