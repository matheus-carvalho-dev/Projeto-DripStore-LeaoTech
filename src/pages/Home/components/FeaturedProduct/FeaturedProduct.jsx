import React from "react";
import styles from "./FeaturedProduct.module.scss";
import supreme from "../../../../../public/assets/Supreme-Tshirt.png";
const FeaturedProduct = () => {
  return (
    <div className={`col-12 bg-secondary ${styles.featuredProduct}`}>
      <div className={`row align-items-center ${styles.productContentContainer}`}>
        <div className="col-8 align-items-center">
          <div className="d-flex flex-column align-items-start">
            <p className={`${styles.label} text-center px-2 m-0`}>30% OFF</p>
            <h3 className={`${styles.title} fw-bold`}>Novo drop supreme</h3>
            <button className="btn bg-light-gray-3 text-primary w-75">
              Comprar
            </button>
          </div>
        </div>
        <div className={`col-2 ${styles.imageContainer} p-0`} >
          <img src={supreme} alt="" className={`img-fluid ${styles.image} position-relative`} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
