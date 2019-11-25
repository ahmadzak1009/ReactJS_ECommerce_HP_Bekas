import React, { useContext } from "react";
import { ProductContext } from "../../ProductContext";

const Navbar = props => {
  const value = useContext(ProductContext);
  const cartLength = value.products.filter(product => product.inCart === true).length;
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={require("../../logo.svg")} width="30" height="30" className="d-inline-block align-top mr-2" alt="" />
          HP Bekas
        </a>
        <a href="#" className="btn btn-primary active" role="button" aria-pressed="true">
          <i className="fa fa-shopping-cart mr-2"></i>My Cart <span className="badge badge-light">{cartLength}</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
