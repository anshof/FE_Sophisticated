import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import store from "../store";
import StartSelling from "../pages/StartSelling";
import Products from "../pages/Products";
import ProductDetailLast from "../pages/ProductDetailLast";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";
import RegisterCustomer from "../pages/RegisterCustomer";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/shopnow" component={Products} />
          <Route exact path="/startselling" component={StartSelling} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/registercustomer" component={RegisterCustomer} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/:category" component={Products} />
          <Route exact path="/detail/:id" component={ProductDetailLast} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </Provider>
  );
};

export default MainRoutes;
