import React from "react";
import styles from "./ProductCardd.module.scss";
import DiscountBadge from "../DiscountBadge/DiscountBadge";
import { Link } from "react-router-dom";
const ProductCardd = ({
  imgSrc,
  category,
  name,
  price,
  discount,
  discountAmount,
  alt,
  path,
}) => {
  return (
    <Link to={path} className=" text-reset text-decoration-none">
      <div
        className={`d-flex flex-column align-items-start mb-3 ${styles.containerCard} `}
      >
        <div
          className={`${styles.containerImg} bg-white p-3 position-relative`}
        >
          {discount && (
            <div className={`position-absolute ${styles.badgeContainer}`}>
              <DiscountBadge discountAmount={30} />
            </div>
          )}
          <img src={imgSrc} alt={alt} className={`${styles.img} img-fluid`} />
        </div>
        <p className={`${styles.category} my-2`}>{category}</p>
        <div className="d-flex flex-column w-100">
          <h3
            className={` pb-0 text-truncate w-100 h-100 ${styles.productName}`}
          >
            {name}
          </h3>
          <span className={`fw-bold ${styles.price}`}>
            <span
              className={`${
                discount
                  ? "fw-normal text-light-gray text-decoration-line-through"
                  : "fw-bold"
              }`}
            >
              R${price}
            </span>
            {discount && `  R$ ${Math.round(price - price * (discountAmount / 100))}`}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCardd;
