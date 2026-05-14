import React from "react";
import styles from "./FeaturedProduct.module.scss";
import supreme from "../../../../../public/assets/Supreme-Tshirt.png";
const FeaturedProduct = ({title,srcImage,customStyles}) => {
  return (
    <div className={`p-0 ps-3 ${styles.featuredProduct}`}>
      <div
        className={`row align-items-center py-4 ps-2 g-0 ${styles.productContentContainer}`}
      >
        <div className="col-9 align-items-center">
          <div className={`row  gap-2`}>
            <p className={`col-4 py-2 ${styles.label} text-center px-2 m-0`}>30% OFF</p>
            <h3 className={`${styles.title} fw-bold m-0`}>{title}</h3>
            <button
              className={`btn bg-light-gray-3 text-primary fw-bold col-6 ms-3 py-2 ${styles.Button}`}
            >
              Comprar
            </button>
          </div>
        </div>
        <div className={`col-3 ${styles.imageContainer} p-0`}>
          <img
            src={srcImage}
            alt=""
            className={`img-fluid ${styles.image}`}
            style={{...customStyles
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
