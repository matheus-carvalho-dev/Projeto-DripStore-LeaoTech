import { createContext, useState } from "react";
import { useEffect } from 'react'
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("CartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const totalItems = Array.isArray(cartItems)
    ? cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)
    : 0;
  useEffect(() => {
    localStorage.setItem("CartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};
