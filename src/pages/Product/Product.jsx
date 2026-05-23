import React, { useState } from "react";
import ProductCardd from "../../components/ProductCardd/ProductCardd";
import CarouselComponent from "./components/CarouselComponent/CarouselComponent";
import StarRating from "./components/StarRating/StarRating";
import Icon from "../../components/Icons/Icons";

const Product = () => {
  const [currentColor, setCurrentColor] = useState("rosa");
  const [currentSize, setCurrentSize] = useState(39)

  const relatedProducts = [
    {
      name: "Tênis Nike Revolution 6...",
      type: "Tênis",
      price: { original: 299, discounted: 100 },
      discount: "30% OFF",
    },
    {
      name: "Tênis Nike Revolution 6...",
      type: "Tênis",
      price: { original: 299, discounted: 100 },
      discount: "30% OFF",
    },
    {
      name: "Tênis Nike Revolution 6...",
      type: "Tênis",
      price: { original: 299, discounted: 100 },
      discount: null,
    },
    {
      name: "Tênis Nike Revolution 6...",
      type: "Tênis",
      price: { original: 299, discounted: 100 },
      discount: null,
    },
  ];

  return (
    <div className="min-vh-100 bg-light">
      <main className="container py-5">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb small">
            {[
              "Home",
              "Produtos",
              "Tênis",
              "Nike",
              "Tênis Nike Revolution 6",
            ].map((item, idx) => (
              <li
                key={idx}
                className={`breadcrumb-item ${idx === 4 ? "active fw-bold" : ""}`}
              >
                {idx === 4 ? (
                  item
                ) : (
                  <a href="#" className="text-decoration-none text-muted">
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="row bg-white rounded-4 shadow-sm align-items-center">
          <div className="col-12 col-lg-6">
            <CarouselComponent />
          </div>

          <div className="col-lg-6 mt-5">
            <h1 className="fw-bold text-dark h2">
              Tênis Nike Revolution 6 Next Nature Masculino
            </h1>
            <p className="small text-muted mb-3">
              Casual | Nike | REF: 3841611
            </p>
            <div className="d-flex gap-2">
              <StarRating rating={4.3} />
              <div className="d-flex align-items-center justify-content-center  gap-2">
                <span className="d-flex align-items-center bg-warning text-light px-2 rounded-2">
                  4.7
                  <Icon name="star" size="13" color="#FFFFFF" />
                </span>
                <span className="text-light-gray">(90 avaliações )</span>
              </div>
            </div>

            <div className="d-flex align-items-baseline gap-2 my-3">
              <span className="display-5 fw-bold text-dark">R$ 219,00</span>
            </div>

            <p className="text-muted mb-4" style={{ fontSize: "0.9rem" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco.
            </p>
            <h6 className="fw-semibold text-secondary mb-3 small text-uppercase">
              Tamanho
            </h6>
            <div className="d-flex gap-2 mb-4">
              {[39, 40, 41, 42, 43].map((size) => (
                <button
                  onClick={()=>{setCurrentSize(size)}}
                  key={size}
                  className="btn rounded-3 fw-bold"
                  style={{
                    width: "60px",
                    height: "40px",
                    backgroundColor: size === currentSize ? "#C92071" : "transparent",
                    color: size === currentSize ? "#fff" : "#333",
                    border: `1px solid ${size === currentSize ? "#C92071" : "#ced4da"}`,
                  }}
                >
                  {size}
                </button>
              ))}
            </div>

            <h6 className="fw-semibold text-secondary mb-3 small text-uppercase">
              Cor
            </h6>
            <div className="d-flex gap-3 mb-4">
              {[
                { nome: "azul", hex: "#66DFFF" },
                { nome: "rosa", hex: "#F14E6E" },
                { nome: "cinza", hex: "#666666" },
                { nome: "lilás", hex: "#8F8CAE" },
              ].map((cor) => (
                <button
                  onClick={() => {
                    setCurrentColor(cor.nome);
                  }}
                  key={cor.nome}
                  className="btn p-0 rounded-circle"
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: cor.hex,
                    border:
                      currentColor === cor.nome
                        ? `3px solid ${cor.hex}`
                        : "3px solid transparent",
                    outline:
                      currentColor === cor.nome
                        ? `3px solid ${cor.hex}`
                        : "none",
                    outlineOffset: "2px",
                    transformBox: "border-box",
                    transition: "all 0.2s ease",
                  }}
                  title={`Cor ${cor.nome}`}
                />
              ))}
            </div>

            {/* Botão de Comprar*/}
            <button
              className="btn text-white w-100 ounded-1 py-2 fw-bold text-uppercase border-0 mt-1"
              style={{ backgroundColor: "#f19c3a", letterSpacing: "3px" }}
            >
              Comprar
            </button>
          </div>
        </div>
      </main>

      {/* Seção inferior com a lista dos 4 cards (Tênis 2) */}
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold text-dark">Produtos Relacionados</h4>
          <a
            href="#"
            className="fw-semibold text-decoration-none small"
            style={{ color: '#C92071' }}
          >
            Ver todos →
          </a>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {relatedProducts.map((product, idx) => (
            <div className="col" key={idx}>
              {/* Passando a cor rosa personalizada também para dentro do card */}
              <ProductCardd />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
