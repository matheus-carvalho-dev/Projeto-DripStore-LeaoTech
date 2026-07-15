const BASE_URL = "http://localhost:3000/api/cart";

export const fetchCart = async (userId) => {
  const response = await fetch(`${BASE_URL}/${userId}`);
  return response.json();
};

export const addToCart = async (userId, productId, quantity, price) => {
  const response = await fetch(`${BASE_URL}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, productId, quantity, price })
  });
  return response.json();
};
export const updateCartItemQuantity = async (itemId, quantity) => {
  const response = await fetch(`${BASE_URL}/item/${itemId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quantity })
  });
  return response.json();
};
export const removeCartItem = async (itemId) => {
  const response = await fetch(`${BASE_URL}/item/${itemId}`, {
    method: 'DELETE'
  });
  return response.json();
};

export const clearCart = async (userId) => {
  const response = await fetch(`${BASE_URL}/clear/${userId}`, {
    method: 'DELETE'
  });
  return response.json();
};