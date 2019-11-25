import React from "react";
import "./App.css";
import Products from "./component/products/Products";
import Navbar from "./component/layout/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Products />
    </React.Fragment>
  );
}

export default App;
