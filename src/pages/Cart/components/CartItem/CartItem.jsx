import React from 'react';
import styles from '../../Cart.module.scss';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const product = item.products;
  const unitPrice = Number(item.price_at_addition);
  const total = unitPrice * item.quantity;

  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center border-bottom pb-4 mb-4 gap-3 gap-lg-0">
      <div className="d-flex gap-3 align-items-center w-100" style={{ maxWidth: "350px" }}>
        <div className={`bg-light-gray-3 rounded ${styles.imgContainer}`}>
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="d-flex flex-column">
          <h5 className="fw-bold fs-6 text-dark-gray-2">{product.name}</h5>
          <span className="text-muted small">Categoria: <span className="text-dark-gray-2">{product.category}</span></span>
        </div>
      </div>

      <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-4 w-100 justify-content-lg-end">
        <div className="d-flex flex-column align-items-lg-center gap-1">
          <span className="d-lg-none text-muted small mb-1">QUANTIDADE</span>
          <div className="d-flex align-items-center gap-2">
            <button 
              className={`btn btn-outline-secondary d-flex align-items-center justify-content-center ${styles.qtyBtn}`}
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <span className="fw-bold px-2">{item.quantity}</span>
            <button 
              className={`btn btn-outline-secondary d-flex align-items-center justify-content-center ${styles.qtyBtn}`}
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
          <button 
            className="btn btn-link text-decoration-underline text-muted p-0 small mt-1 w-100 text-start text-lg-center" 
            style={{ fontSize: "12px" }}
            onClick={() => onRemove(item.id)}
          >
            Remover item
          </button>
        </div>

        {/* Layout Mobile */}
        <div className="d-flex justify-content-between w-100 d-lg-none">
          <span className="text-muted small">UNITÁRIO</span>
          <div className="d-flex flex-column align-items-end">
            <span className="fw-bold text-dark-gray-2">R$ {unitPrice.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>
        <div className="d-flex justify-content-between w-100 d-lg-none">
          <span className="text-muted small">TOTAL</span>
          <div className="d-flex flex-column align-items-end">
            <span className="fw-bold text-dark-gray-2">R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>

        {/* Layout Desktop */}
        <div className="d-none d-lg-flex gap-5">
          <div className="d-flex flex-column align-items-center" style={{ width: "100px" }}>
            <span className="fw-bold text-dark-gray-2">R$ {unitPrice.toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="d-flex flex-column align-items-center" style={{ width: "100px" }}>
            <span className="fw-bold text-dark-gray-2">R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;