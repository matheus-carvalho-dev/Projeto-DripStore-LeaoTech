import React, { useState, useEffect, useContext } from "react"; 
import CartItem from "./components/CartItem/CartItem";
import CartSummary from "./components/CartSummary/CartSummary";
import TrendingProducts from "../../components/ProductList/ProductList";
import { fetchProduct } from "../../api/products"; 
import { updateCartItemQuantity, removeCartItem } from "../../api/cart";
import { CartContext } from "../../contexts/CartContext";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { cartItems, loadCart } = useContext(CartContext);
  const [trendingData, setTrendingData] = useState([]);
  const [loadingTrending, setLoadingTrending] = useState(true);
  const activeCategory = "tenis"; 

  const shipping = 0.00;

// Subtotal = Soma dos preços originais (sem desconto)
const subtotal = cartItems.reduce((acc, item) => {
  return acc + (Number(item.products.price) * item.quantity);
}, 0);

// Total dos itens = Soma dos preços salvos no carrinho (com desconto)
const totalItens = cartItems.reduce((acc, item) => {
  return acc + (Number(item.price_at_addition) * item.quantity);
}, 0);

// Desconto = Subtotal original - Total pago
const discount = subtotal - totalItens;

  useEffect(() => {
    loadTrending();
    loadCart(); // Força atualização ao entrar na página
  }, []);

  const loadTrending = async () => {
    try {
      setLoadingTrending(true);
      const resp = await fetchProduct();
      setTrendingData(resp);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingTrending(false);
    }
  };

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    await updateCartItemQuantity(itemId, newQuantity);
    await loadCart();
  };

  const handleRemoveItem = async (itemId) => {
    await removeCartItem(itemId);
    await loadCart();
  };

  

  return (
    <div className="container py-4 mb-5">
      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="bg-white p-4 rounded shadow-sm mb-4">
            <div className="d-none d-lg-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
              <h4 className="fw-bold fs-6 m-0 text-dark-gray-2">MEU CARRINHO</h4>
              <div className="d-flex gap-5 text-dark-gray-2 small">
                <span style={{ width: "100px", textAlign: "center" }}>QUANTIDADE</span>
                <span style={{ width: "100px", textAlign: "center" }}>UNITÁRIO</span>
                <span style={{ width: "100px", textAlign: "center" }}>TOTAL</span>
              </div>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-5 text-muted">Seu carrinho está vazio.</div>
            ) : (
              cartItems.map((item) => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemoveItem}
                />
              ))
            )}

            {/* Cupons e Frete */}
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <span className="fw-bold text-dark-gray-2 small d-block mb-2">Cupom de desconto</span>
                <div className="d-flex gap-2">
                  <input type="text" className={`form-control bg-light-gray-3 border-0 ${styles.inputField}`} placeholder="Insira seu código" />
                  <button className="btn bg-light-gray-3 text-primary fw-bold border-0 px-4">OK</button>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <span className="fw-bold text-dark-gray-2 small d-block mb-2">Calcular frete</span>
                <div className="d-flex gap-2">
                  <input type="text" className={`form-control bg-light-gray-3 border-0 ${styles.inputField}`} placeholder="Insira seu CEP" />
                  <button className="btn bg-light-gray-3 text-primary fw-bold border-0 px-4">OK</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <CartSummary subtotal={subtotal} discount={cartItems.length > 0 ? discount : 0} shipping={shipping} />
        </div>
      </div>

      <div className="mt-5">
         <TrendingProducts
          text={"Produtos em alta"}
          activeCategory={activeCategory}
          data={trendingData}
          limit={8}
          loading={loadingTrending}
        />
      </div>
    </div>
  );
};

export default Cart;