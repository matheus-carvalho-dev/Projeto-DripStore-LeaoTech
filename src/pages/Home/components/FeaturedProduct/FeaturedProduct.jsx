import React from "react";
import styles from "./FeaturedProduct.module.scss";
import supreme from "../../../../../public/assets/Supreme-Tshirt.png";
import Button from "../../../../components/Button/Button";
const FeaturedProduct = ({ title, srcImage, customStyles }) => {
  return (
    <div className={`p-0 ps-3 ${styles.featuredProduct}`}>
      <div
        className={`row align-items-center py-4 ps-2 g-0 ${styles.productContentContainer} h-100`}
      >
        <div className={`col-9 align-items-center ${styles.textContainer}`}>
          <div className="d-flex flex-column justify-content-center align-items-start gap-2 h-100">
            <span
              className={`py-1 px-3 m-0 text-dark-gray fw-bold ${styles.badge}`}
            >
              30% OFF
            </span>

            <h3 className={`${styles.title} fw-bold m-0 p-0 mb`}>{title}</h3>

            
            <Button
              text="Comprar"
              style={`btn bg-light-gray-3 text-primary fw-bold ${styles.Button}`}
            />
          </div>
        </div>
        <div className={`col-3 ${styles.imageContainer} p-0`}>
          <img
            src={srcImage}
            alt=""
            className={`img-fluid ${styles.image}`}
            style={{ ...customStyles }}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
