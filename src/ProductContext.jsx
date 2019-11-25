import React, { useState, createContext } from "react";
import { storeProducts } from "./data";

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [products, setProducts] = useState(storeProducts);

  const addToCart = id => {
    setProducts(
      products.map(product => {
        if (product.id === id) {
          product.inCart ? (product.count = 0) : (product.count = 1);
          product.inCart = !product.inCart;
        }
        return product;
      })
    );
  };

  const countMinus = id => {
    setProducts(
      products.map(product => {
        if (product.id === id) {
          product.count--;
          product.count === 0 ? (product.inCart = false) : (product.inCart = true);
        }
        return product;
      })
    );
  };

  const countPlus = id => {
    setProducts(
      products.map(product => {
        if (product.id === id) {
          product.count++;
        }
        return product;
      })
    );
  };

  const deleteItem = id => {
    setProducts(
      products.map(product => {
        if (product.id === id) {
          product.inCart = false;
        }
        return product;
      })
    );
  };

  return <ProductContext.Provider value={{ products, setProducts, addToCart, countMinus, countPlus, deleteItem }}>{props.children}</ProductContext.Provider>;
};

export const ProductConsumer = ProductContext.Consumer;
