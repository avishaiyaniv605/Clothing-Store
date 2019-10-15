import React from "react";
import HomePage from "../pages/homepage/HomePage";
import ShopPage from "../pages/shop/shop";
import { Route } from "react-router-dom";
import "./App.scss"

const App = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/Shop" component={ShopPage} />
    </div>
  );
};

export default App;
