import React, { useContext } from "react";
import { ProductContext } from "../../ProductContext";
import { Link } from "react-router-dom";

const Navbar = props => {
  const value = useContext(ProductContext);
  const cartLength = value.products.filter(product => product.inCart === true).length;
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={require("../../logo.svg")} width="30" height="30" className="d-inline-block align-top mr-2" alt="" />
          HP Bekas
        </Link>
        <Link to="/my-cart" className="btn btn-primary active" role="button" aria-pressed="true">
          <i className="fa fa-shopping-cart mr-2"></i>My Cart <span className="badge badge-light">{cartLength}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
