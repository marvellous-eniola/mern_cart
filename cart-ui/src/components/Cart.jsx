import React from "react";

export default function Cart({ removeFromCart, cart }) {

  return (
    <div>
      <>
        <h1>Cart</h1>
        <div className="products">
          {cart.map((product, index) => (
            <div className="product" key={index}>
              <h3>{product.name}</h3>
              <h4>{product.cost}</h4>
              <img height={"100px"} src={product.image} alt={product.name} />
              <button onClick={() => removeFromCart(product)}>Remove</button>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}
