import React from "react";
import HomePage from "../pages/homepage/HomePage";
import ShopPage from "../pages/shop/shop";
import Header from "./header/Header";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
