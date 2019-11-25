import React from "react";

const CartItem = props => {
  return (
    <li className="list-group-item">
      <strong className="mr-2">{props.cartItem.title}</strong>
      <button className="btn btn-light btn-sm rounded-circle mr-1" onClick={props.countMinus.bind(this, props.cartItem.id)}>
        <i className="fa fa-minus"></i>
      </button>
      x{props.cartItem.count}
      <button className="btn btn-light btn-sm rounded-circle ml-1" onClick={props.countPlus.bind(this, props.cartItem.id)}>
        <i className="fa fa-plus"></i>
      </button>
      <button className="btn btn-danger btn-sm rounded-circle float-right" onClick={props.deleteItem.bind(this, props.cartItem.id)}>
        <i className="fa fa-times"></i>
      </button>
    </li>
  );
};

export default CartItem;
