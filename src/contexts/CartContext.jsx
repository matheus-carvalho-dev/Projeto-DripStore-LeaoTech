import { createContext, useState, useEffect } from "react";
import { fetchCart } from "../api/cart";

export const CartContext = createContext();

const MOCK_USER_ID = "e73fee17-9c80-426e-a069-9ead5f65f994"; 

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartId, setCartId] = useState(null);

  const loadCart = async () => {
    try {
      const resp = await fetchCart(MOCK_USER_ID);
      setCartItems(resp.items || []);
      setCartId(resp.cartId);
    } catch (error) {
      console.error("Erro ao carregar o carrinho do banco:", error);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const totalItems = Array.isArray(cartItems)
    ? cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)
    : 0;

  return (
    <CartContext.Provider value={{ cartItems, loadCart, totalItems, MOCK_USER_ID, cartId }}>
      {children}
    </CartContext.Provider>
  );
};