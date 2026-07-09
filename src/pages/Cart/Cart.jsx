import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import styles from "./Cart.module.scss";
import ProductListItem from "../../components/ProductListItem/ProductListItem";
import TrendingProducts from "../../components/ProductList/ProductList";
const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 219.00;
  const total = unitPrice * quantity;

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

            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center border-bottom pb-4 mb-4 gap-3 gap-lg-0">

              <div className="d-flex gap-3 align-items-center w-100" style={{ maxWidth: "350px" }}>
                <div className={`bg-light-gray-3 rounded ${styles.imgContainer}`}>
                  <img src="/assets/Sneaker-Red-White.png" alt="Tênis Nike" className="img-fluid" />
                </div>
                <div className="d-flex flex-column">
                  <h5 className="fw-bold fs-6 text-dark-gray-2">Tênis Nike Revolution 6 Next Nature Masculino</h5>
                  <span className="text-muted small">Cor: <span className="text-dark-gray-2">Vermelho / Branco</span></span>
                  <span className="text-muted small">Tamanho: <span className="text-dark-gray-2">42</span></span>
                </div>
              </div>


              <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-4 w-100 justify-content-lg-end">

                <div className="d-flex flex-column align-items-lg-center gap-1">
                  <span className="d-lg-none text-muted small mb-1">QUANTIDADE</span>
                  <div className="d-flex align-items-center gap-2">
                    <button 
                      className={`btn btn-outline-secondary d-flex align-items-center justify-content-center ${styles.qtyBtn}`}
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="fw-bold px-2">{quantity}</span>
                    <button 
                      className={`btn btn-outline-secondary d-flex align-items-center justify-content-center ${styles.qtyBtn}`}
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button className="btn btn-link text-decoration-underline text-muted p-0 small mt-1 w-100 text-start text-lg-center" style={{ fontSize: "12px" }}>
                    Remover item
                  </button>
                </div>


                <div className="d-flex justify-content-between w-100 d-lg-none">
                  <span className="text-muted small">UNITÁRIO</span>
                  <div className="d-flex flex-column align-items-end">
                    <span className="text-light-gray-2 text-decoration-line-through small">R$ 219,00</span>
                    <span className="fw-bold text-dark-gray-2">R$ {unitPrice.toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>

                <div className="d-flex justify-content-between w-100 d-lg-none">
                  <span className="text-muted small">TOTAL</span>
                  <div className="d-flex flex-column align-items-end">
                    <span className="text-light-gray-2 text-decoration-line-through small">R$ 219,00</span>
                    <span className="fw-bold text-dark-gray-2">R$ {total.toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>


                <div className="d-none d-lg-flex gap-5">
                  <div className="d-flex flex-column align-items-center" style={{ width: "100px" }}>
                    <span className="text-light-gray-2 text-decoration-line-through small">R$ 219,00</span>
                    <span className="fw-bold text-dark-gray-2">R$ {unitPrice.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="d-flex flex-column align-items-center" style={{ width: "100px" }}>
                    <span className="text-light-gray-2 text-decoration-line-through small">R$ 219,00</span>
                    <span className="fw-bold text-dark-gray-2">R$ {total.toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>
              </div>
            </div>

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
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="fw-bold fs-6 border-bottom pb-3 text-dark-gray-2 mb-4">RESUMO</h4>
            <div className="d-flex justify-content-between mb-3 text-muted">
              <span>Subtotal:</span>
              <span>R$ {total.toFixed(2).replace('.', ',')}</span>
            </div>
            <div className="d-flex justify-content-between mb-3 text-muted">
              <span>Frete:</span>
              <span>R$ 0,00</span>
            </div>
            <div className="d-flex justify-content-between mb-4 text-muted">
              <span>Desconto:</span>
              <span>R$ 30,00</span>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mb-1">
              <span className="fw-bold fs-5 text-dark-gray-2">Total</span>
              <div className="text-end">
                <span className="fw-bold fs-5" style={{ color: "#ee4266" }}>
                  R$ {(total - 30).toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>
            <p className="text-end text-muted small mb-4">ou 10x de R$ 21,00 sem juros</p>
            
            <Button
              text="Continuar"
              style="btn text-white w-100 py-2 fw-bold text-uppercase border-0"
              customStyle={{ backgroundColor: "#f19c3a", letterSpacing: "1px" }}
            />
          </div>
        </div>
      </div>


      <div className="mt-5">
         <TrendingProducts
          text={"Produtos em alta"}
          activeCategory={activeCategory}
          data={data}
          limit={8}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Cart;