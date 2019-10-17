import React from "react";
import HomePage from "../pages/homepage/HomePage";
import ShopPage from "../pages/shop/shop";
import Header from "./header/Header";
import SignInUp from "../pages/SignInOut/SignInUp";
import { auth } from "./firebase/Firebase";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

class App extends React.Component {
  state = { currentUser: null };
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
    console.log(this.unsubscribeFromAuth);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Shop" component={ShopPage} />
          <Route exact path="/signinup" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
