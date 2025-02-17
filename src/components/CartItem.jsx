import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <span>
        {item.name} (x{item.quantity}) - ${(item.price * item.quantity).toFixed(2)}
      </span>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;