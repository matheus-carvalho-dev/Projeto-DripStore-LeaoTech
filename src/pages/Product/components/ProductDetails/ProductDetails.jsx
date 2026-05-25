import { useState, useEffect } from "react";
import styles from "./ProductDetails.module.scss";
import ProductInfo from "../ProductInfo/ProductInfo";

const ProductDetails = ({
  product,
  currentSize,
  currentColor,
  setCurrentColor,
  setCurrentSize,
}) => {
  const images = product.productDetails.images;
  const [mainImage, setMainImage] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images[0]);
      setActiveIndex(0);
    }
  }, [images]);

  if (images.length === 0) {
    return <div className="text-center py-5">Carregando produto...</div>;
  }

  const handleClick = (src, index) => {
    setMainImage(images[index]);
    setActiveIndex(index);
  };

  return (
    <div className="row rounded-4 align-items-stretch mb-5 g-0 ">
      <div className="col-12 col-lg-7 mb-lg-0">
        <div className={` text-center ${styles.carouselContainer}`}>
          <div
            className={`${styles.mainImageWrapper}`}
            style={{ backgroundColor: mainImage.color }}
          >
            <img
              src={mainImage.src}
              alt="Produto selecionado"
              className={`img-fluid ${styles.mainImage}`}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-5  order-2 mt-2 mt-lg-0 align-items-stretch">
        <ProductInfo product={product} />
      </div>
      <div
        className={`col-12 col-lg-7 ${styles.thumbnailList} justify-content-between mt-2`}
      >
        {images.map(({ src, color, index }) => (
          <div
            key={index}
            className={`${styles.thumbnail} d-flex flex-column ${index === activeIndex ? styles.active : ""}`}
            onClick={() => handleClick(src, index)}
            style={{ backgroundColor: color }}
          >
            <img
              src={src}
              alt={`Miniatura ${index + 1}`}
              className="img-fluid"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
