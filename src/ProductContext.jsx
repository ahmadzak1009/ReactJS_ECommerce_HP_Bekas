import React, { useState, createContext } from "react";
import { storeProducts } from "./data";

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [products, setProducts] = useState(storeProducts);
  return <ProductContext.Provider value={{ products, setProducts }}>{props.children}</ProductContext.Provider>;
};

export const ProductConsumer = ProductContext.Consumer;
