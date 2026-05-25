import React from "react";
import StarRating from "../StarRating/StarRating";
import Icon from "../../../../components/Icons/Icons";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import Button from "../../../../components/Button/Button";

const ProductInfo = ({
  product,
  currentSize,
  currentColor,
  setCurrentColor,
  setCurrentSize,
}) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  return (
    <div className="h-100 d-flex flex-column justify-content-between align-content-between ms-lg-3">
      <div className="d-flex flex-column mb-1 mb-lg-0">
        <h1 className="fw-bold text-dark fs-2">{product.name}</h1>
        <span className="small text-muted">
          {product.productDetails.brand} | REF: {product.productDetails.ref}
        </span>
      </div>
      <div className="d-flex gap-2 mb-1 mb-lg-0">
        <StarRating rating={product.productDetails.rating} />
        <div className="d-flex align-items-center justify-content-center  gap-2">
          <span className="d-flex align-items-center bg-warning text-light px-2 rounded-2">
            {product.productDetails.rating}
            <Icon name="star" size="13" color="#FFFFFF" />
          </span>
          <span className="text-light-gray">
            ({product.productDetails.reviews} avaliações )
          </span>
        </div>
      </div>
      <div className="d-flex align-items-baseline gap-2 mb-3 mb-lg-0">
        <span className=" fw-bold text-dark">
          <span className="fs-6">R$</span>
          <span className="fs-2">
            {product.discount
              ? Math.round(
                  product.price - product.price * (product.discountAmount / 100)
                )
              : product.price}
          </span>
          <span className="fs-6">,00</span>
        </span>
        {product.discount && (
          <span className="fs-6 text-decoration-line-through text-light-gray-2">
            {product.price},00
          </span>
        )}
      </div>
      <div className="justify-content-center align-content-center mb-3 mb-lg-0">
        <h3 className="text-light-gray fs-6">Descrição do produto</h3>
        <span className="text-muted mb-3" style={{ fontSize: "0.9rem" }}>
          {product.productDetails.description}
        </span>
      </div>

      <div className="d-flex flex-column">
        <h6 className="fw-semibold text-secondary small text-uppercase">
          Tamanho
        </h6>
        <div className="d-flex gap-2 mb-3 mb-lg-0">
          {product.productDetails.availableSizes.map((size) => (
            <button
              onClick={() => {
                setCurrentSize(size);
              }}
              key={size}
              className="text-center btn rounded-3 fw-bold"
              style={{
                width: "fit-content",
                height: "40px",
                backgroundColor:
                  size === currentSize ? "#C92071" : "transparent",
                color: size === currentSize ? "#fff" : "#333",
                border: `1px solid ${
                  size === currentSize ? "#C92071" : "#ced4da"
                }`,
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="d-flex flex-column mb-3 mb-lg-0">
        <h6 className="fw-semibold text-secondary small text-uppercase">Cor</h6>
        <div className="d-flex gap-3">
          {product.productDetails.availableColors.map((color) => (
            <button
              onClick={() => {
                setCurrentColor(color.name);
              }}
              key={color.name}
              className="btn p-0 rounded-circle"
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: color.hex,
                border:
                  currentColor === color.name
                    ? `3px solid ${color.hex}`
                    : "3px solid transparent",
                outline:
                  currentColor === color.name
                    ? `3px solid ${color.hex}`
                    : "none",
                outlineOffset: "2px",
                transformBox: "border-box",
                transition: "all 0.2s ease",
              }}
              title={`Color ${color.name}`}
            />
          ))}
        </div>
      </div>
      <Button text={'Comprar'} style={"btn text-white w-100 ounded-1 py-2 fw-bold text-uppercase border-0 mt-1"} customStyle={{ backgroundColor: "#f19c3a", letterSpacing: "3px" }}/>
    </div>
  );
};

export default ProductInfo;
