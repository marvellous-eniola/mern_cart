import "../src/Styles/Home.css";
import React, { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

export default function Home() {
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [cart, setCart] = useState([]);

  const addItem = (product) => {
    console.log("in cart");
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const goToCart = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <div className="app">
      <header>
        <button onClick={() => goToCart(PAGE_CART)}>
          Go to Cart ({cart.length})
        </button>
        <button onClick={() => goToCart(PAGE_PRODUCTS)}>View Product</button>
      </header>
      {page === PAGE_PRODUCTS && <Products addItem={addItem} />}
      {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  );
}
