import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../Icons/Icons";
import styles from "./CartWidget.module.scss";
import { CartContext } from "../../contexts/CartContext";
import { clearCart } from "../../api/cart";

const CartWidget = () => {
  const { totalItems, cartItems, loadCart, MOCK_USER_ID } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  const subtotal = cartItems.reduce((acc, item) => acc + (Number(item.price_at_addition) * item.quantity), 0);

  const handleClear = async () => {
    await clearCart(MOCK_USER_ID);
    loadCart();
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="position-relative" ref={widgetRef}>
      <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
        <Icon
          name="cart"
          color="#C92071"
          size="18px"
          attributes={{
            stroke: "#C92071",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none",
          }}
        />
        {totalItems > 0 && (
          <div className={`d-flex bg-error rounded-circle justify-content-center align-content-center ${styles.badge}`}>
            <span className={`align-self-center fw-bold ${styles.badgeNumber}`}>{totalItems}</span>
          </div>
        )}
      </div>

      {isOpen && (
        <div className={styles.cartModal}>
          <h5 className={styles.modalTitle}>Meu Carrinho</h5>
          
          <div className={styles.itemList}>
            {cartItems.length === 0 ? (
              <p className="text-muted small text-center my-3">Seu carrinho está vazio</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className={styles.itemRow}>
                  <div className={styles.itemImgContainer}>
                    <img src={item.products.image} alt={item.products.name} />
                  </div>
                  <div className={styles.itemDetails}>
                    <p className={styles.itemName}>{item.products.name}</p>
                    <span className={styles.itemPrice}>
                      R$ {Number(item.price_at_addition).toFixed(2).replace('.', ',')}
                      {item.products.discount && (
                        <span className={styles.itemOldPrice}>R$ {Number(item.products.price).toFixed(2).replace('.', ',')}</span>
                      )}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className={styles.modalFooter}>
            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>Valor total:</span>
              <span className={styles.totalValue}>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
            </div>
            <div className={styles.actionRow}>
              <button onClick={handleClear} className={styles.emptyLink}>Esvaziar</button>
              <Link 
                to="/carrinho" 
                onClick={() => setIsOpen(false)} 
                className="btn text-white fw-bold px-4 py-2" 
                style={{ backgroundColor: "#C92071", fontSize: "14px", borderRadius: "8px" }}
              >
                Ver Carrinho
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartWidget;