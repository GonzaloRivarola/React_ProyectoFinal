// src/components/ItemCount/ItemCount.jsx
import React, { useState } from 'react';

const ItemCount = ({ stock, onAddToCart, productId }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    onAddToCart(quantity, productId);
  };

  return (
    <div className="item-count-container">
      <button className="item-count-btn" onClick={handleDecrement}>-</button>
      <span className="item-count">{quantity}</span>
      <button className="item-count-btn" onClick={handleIncrement}>+</button>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
