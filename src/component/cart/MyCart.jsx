import React, { useContext } from "react";
import { ProductContext } from "../../ProductContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const MyCart = props => {
  const value = useContext(ProductContext);
  const { products, countMinus, countPlus, deleteItem, clearAll } = value;

  const totalPrice = value.products.map(product => product.price * product.count).reduce((acc, curr) => acc + curr);
  const tax = Math.floor(totalPrice * 0.1);

  const cartItems = products.filter(product => product.inCart === true);

  return (
    <div className="container my-3">
      <h1 className="mb-3 d-inline-block">My Cart</h1>
      <h5 className="float-right mt-3">
        <Link to="/" className="text-decoration-none text-dark">
          <i className="fa fa-chevron-left"></i> Back
        </Link>
      </h5>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            {cartItems.length === 0 ? (
              <div className="text-center">
                <p>Your Cart is empty, Go Shopping?</p>
                <Link to="/" className="btn btn-primary">
                  Go
                </Link>
              </div>
            ) : (
              cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} countMinus={countMinus} countPlus={countPlus} deleteItem={deleteItem} />)
            )}
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Price</strong> : <span className="float-right">Rp. {totalPrice}</span>
            </li>
            <li className="list-group-item">
              <strong>Tax</strong> : <span className="float-right">Rp. {tax}</span>
            </li>
            <li className="list-group-item">
              <strong>
                Total Price : <span className="float-right">Rp. {totalPrice + tax}</span>
              </strong>
            </li>
          </ul>
          <button className="btn btn-primary w-100 mt-3">Checkout</button>
          <button className="btn btn-danger w-100 mt-3" onClick={clearAll}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
