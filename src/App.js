import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./component/Index";
import Navbar from "./component/layout/Navbar";
import ProductDetail from "./component/products/ProductDetail";
import MyCart from "./component/cart/MyCart";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={Index} />
        <Route path={"/details/:id"} component={ProductDetail} />
        <Route path={"/my-cart"} component={MyCart} />
      </Switch>
    </Router>
  );
}

export default App;
