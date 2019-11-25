import React from "react";

const Product = props => {
  const { img, title, price, inCart } = props.product;
  return (
    <div className="col-lg-3 my-3 float-left">
      <div className="card p-0">
        <img height="250" src={require("../../" + img)} alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-center mb-0">{title}</h5>
          <p className="card-text text-center">Rp. {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
