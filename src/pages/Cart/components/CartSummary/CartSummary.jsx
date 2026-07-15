import React from 'react';
import Button from "../../../../components/Button/Button";

const CartSummary = ({ subtotal, discount, shipping }) => {
  const total = subtotal + shipping - discount;

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h4 className="fw-bold fs-6 border-bottom pb-3 text-dark-gray-2 mb-4">RESUMO</h4>
      <div className="d-flex justify-content-between mb-3 text-muted">
        <span>Subtotal:</span>
        <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
      </div>
      <div className="d-flex justify-content-between mb-3 text-muted">
        <span>Frete:</span>
        <span>R$ {shipping.toFixed(2).replace('.', ',')}</span>
      </div>
      <div className="d-flex justify-content-between mb-4 text-muted">
        <span>Desconto:</span>
        <span>R$ {discount.toFixed(2).replace('.', ',')}</span>
      </div>
      
      <div className="d-flex justify-content-between align-items-center mb-1">
        <span className="fw-bold fs-5 text-dark-gray-2">Total</span>
        <div className="text-end">
          <span className="fw-bold fs-5" style={{ color: "#ee4266" }}>
            R$ {Math.max(0, total).toFixed(2).replace('.', ',')}
          </span>
        </div>
      </div>
      <p className="text-end text-muted small mb-4">ou 10x de R$ {(Math.max(0, total)/10).toFixed(2).replace('.', ',')} sem juros</p>
      
      <Button
        text="Continuar"
        style="btn text-white w-100 py-2 fw-bold text-uppercase border-0"
        customStyle={{ backgroundColor: "#f19c3a", letterSpacing: "1px" }}
      />
    </div>
  );
};

export default CartSummary;