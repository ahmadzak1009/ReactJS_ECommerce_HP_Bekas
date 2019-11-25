import React from "react";
import { Link } from "react-router-dom";

const Product = props => {
  const { img, title, price, inCart, id } = props.product;

  return (
    <div className="col-lg-3 my-3 float-left">
      <div className="card p-0">
        <img height="250" src={require("../../" + img)} alt={title} className="card-img-top" />
        <div className="show-when-hover">
          <button style={{ background: inCart ? "red" : "" }} className="btn btn-primary btn-sm" onClick={props.addToCart.bind(this, id)}>
            {inCart ? "Delete from Cart" : "Add to Cart"}
          </button>
        </div>
        <div className="card-body">
          <Link to={`/details/${id}`} className="text-decoration-none">
            <h5 className="card-title text-center mb-0">{title}</h5>
          </Link>
          <p className="card-text text-center">Rp. {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
