// Cart.js
import React, { useState } from 'react';

import ShoppingCart from './ShoppingCart';
import Products from './Product';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "product 1", description: "description1" },
    { id: 2, name: "product 2", description: "description2" }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove));
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <Products products={products} addToCart={addToCart} />
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Cart;
