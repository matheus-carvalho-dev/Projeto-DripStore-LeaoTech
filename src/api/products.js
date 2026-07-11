const BASE_URL = "http://localhost:3000";

export const fetchProduct = async () => {
  const response = await fetch(`${BASE_URL}/listarproducts`);
  return response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/buscarproduct/${id}`);
  return response.json();
};

export const fetchProductSearch = async (term) => {
  const response = await fetch(`${BASE_URL}/buscarproducts?term=${term}`);
  return response.json();
};