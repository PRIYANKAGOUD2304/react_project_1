import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h1>
          {props.product.name}
          <span className="badge text-bg-secondary">{props.product.price}</span>
        </h1>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-danger"
          onClick={()=>{
            props.DecrementQuantity(props.index)
          }}>
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.IncrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.quantity * props.product.price}
      </div>
      <div className="col-2">
        <button className="btn btn-danger " onClick={()=>{
          props.removeQuantity(props.index)
        }}>remove</button>
      </div>
    </div>
  );
}
