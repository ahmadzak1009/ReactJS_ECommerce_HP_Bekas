import React from "react";

const CartItem = props => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img src={require("../../" + props.cartItem.img)} alt={props.cartItem.title} className="img-fluid" />
        </div>
        <div className="col-6">
          <strong className="mr-2">{props.cartItem.title}</strong>
          <small className="text-secondary">Rp. {props.cartItem.price} </small>
          <div className="font-italic small">
            <strong>total :</strong> Rp. {props.cartItem.total}
          </div>
        </div>
        <div className="col-4">
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
        </div>
      </div>
    </li>
  );
};

export default CartItem;
