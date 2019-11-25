import React from "react";
import { ProductConsumer } from "../../ProductContext";
import Product from "./Product";

const Products = props => {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {value => {
            return value.products.map(product => <Product key={product.id} product={product} />);
          }}
        </ProductConsumer>
      </div>
    </div>
  );
};

export default Products;
