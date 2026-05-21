import React from 'react'
import styles from './ProductCardd.module.scss'
const ProductCardd = () => {
  return (
    <div className={`d-flex flex-column align-items-start ${styles.containerCard}`}>
      <div className={`${styles.containerImg} bg-white`}>
        <img
          src="/assets/Sneaker-White-Blue-Orange.png
        "
          alt=""
          className={`${styles.img} img-fluid`}
        />
      </div>
      <p>Tênis</p>
      <div className='d-flex flex-column align w-100'>
        <h3 className={` pb-0 text-truncate w-100 h-100 ${styles.productName}`}>K-Swiss V8 - Masculino</h3>
        <p className='fs-4 fw-bold'><span className={`${styles.originalPrice} text-decoration-line-through`}>$200</span> $100</p>
      </div>
    </div>
  );
}

export default ProductCardd