const URL ="https://6a0fc97cd2a985707035d6b1.mockapi.io/DripStoreLeao/products";

export const fetchProduct = async ()=>{
    const response = await fetch(URL)
    return response.json()
    console.log(response)
}
export const fetchProductSearch = async (term) => {
  const response = await fetch(`${URL}?search=${term}`);
  return response.json();
}; 
