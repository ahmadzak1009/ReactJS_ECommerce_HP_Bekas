import React, { useContext } from "react";
import { ProductContext } from "../../ProductContext";
import CartItem from "./CartItem";

const MyCart = props => {
  const value = useContext(ProductContext);
  const { products, countMinus, countPlus, deleteItem } = value;

  const cartItems = products.filter(product => product.inCart === true);

  return (
    <div className="container my-3">
      <h1 className="mb-3">My Cart</h1>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            {cartItems.map(cartItem => (
              <CartItem key={cartItem.id} cartItem={cartItem} countMinus={countMinus} countPlus={countPlus} deleteItem={deleteItem} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
