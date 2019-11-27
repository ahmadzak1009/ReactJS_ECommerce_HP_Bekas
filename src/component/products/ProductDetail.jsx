import React, { useContext } from "react";
import { ProductContext } from "../../ProductContext";
import { Link } from "react-router-dom";

const ProductDetail = props => {
  const value = useContext(ProductContext);

  const idProduct = Number(props.match.params.id);
  const getProduct = value.products.filter(product => product.id === idProduct);
  const { title, id, img, info, inCart, price, company } = getProduct[0];

  return (
    <div className="container my-3">
      <h1 className="mb-3 d-inline-block">Product Details</h1>
      <h5 className="float-right mt-3">
        <Link to="/" className="text-decoration-none text-dark">
          <i className="fa fa-chevron-left"></i> Back
        </Link>
      </h5>
      <div className="row">
        <div className="col-md-5 mb-3">
          <img src={require("../../" + img)} alt={title} className="img-fluid img-thumbnail w-100" />
        </div>
        <div className="col-md-5">
          <ul className="list-group">
            <li className="list-group-item">
              <strong>
                Merk : <span className="float-right">{title}</span>
              </strong>
            </li>
            <li className="list-group-item">
              <strong>Brand :</strong> <span className="float-right">{company}</span>
            </li>
            <li className="list-group-item">
              <strong>Camera :</strong> <span className="float-right">-</span>
            </li>
            <li className="list-group-item">
              <strong>RAM :</strong> <span className="float-right">-</span>
            </li>
            <li className="list-group-item">
              <strong>Memory :</strong> <span className="float-right">-</span>
            </li>
            <li className="list-group-item">
              <strong>Price :</strong> <span className="float-right">Rp. {price}</span>
            </li>
            <li className="list-group-item">
              <button style={{ background: inCart ? "red" : "" }} className="btn btn-primary btn-sm float-right" onClick={value.addToCart.bind(this, id)}>
                {inCart ? "Delete from Cart" : "Add to Cart"}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <h5>Description</h5>
      <p>{info}</p>
    </div>
  );
};

export default ProductDetail;
