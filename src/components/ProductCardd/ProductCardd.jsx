import React from "react";
import styles from "./ProductCardd.module.scss";
const ProductCardd = ({
  imgSrc,
  category,
  name,
  price,
  discount,
  discountAmount,alt
}) => {
  return (
    <div
      className={`d-flex flex-column align-items-start ${styles.containerCard}`}
    >
      <div className={`${styles.containerImg} bg-white p-3`}>
        <img src={imgSrc} alt={alt} className={`${styles.img} img-fluid`} />
      </div>
      <p className={`${styles.category} my-2`}>{category}</p>
      <div className="d-flex flex-column w-100">
        <h3 className={` pb-0 text-truncate w-100 h-100 ${styles.productName}`}>
          {name}
        </h3>
        <p className={`fw-bold ${styles.price}`}>
          <span
            className={`${
              discount
                ? "fw-normal text-light-gray text-decoration-line-through"
                : "fw-bold"
            }`}
          >
            R${price}
          </span>
          {discount && `R$ ${price - price * (discountAmount / 100)}`}
        </p>
      </div>
    </div>
  );
};

export default ProductCardd;
