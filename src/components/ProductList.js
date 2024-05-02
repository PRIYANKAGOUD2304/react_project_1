import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return props.productList.length > 0 ?props.productList.map((product, i) => {
    return (
      <Product
        product={product}
        key={i}
        IncrementQuantity={props.IncrementQuantity}
        index={i}
        DecrementQuantity={props.DecrementQuantity}
        removeQuantity={props.removeQuantity}
      />
    );
  })
  :
  <h1>No Product Exits in Cart</h1>
}
