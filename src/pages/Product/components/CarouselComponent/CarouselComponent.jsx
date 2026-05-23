import { useState, useEffect } from "react";
import styles from "./CarouselComponent.module.scss";

const mockImages = [
  { src: "/assets/Sneaker-Red-White.png", color: "#E2E3FF", index: 1 },
  { src: "/assets/Sneaker-Red-White.png", color: "#FFE8BC", index: 2 },
  { src: "/assets/Sneaker-Red-White.png", color: "#FFC0BC", index: 3 },
  { src: "/assets/Sneaker-Red-White.png", color: "#DEC699", index: 4 },
  { src: "/assets/Sneaker-Red-White.png", color: "#E8DFCF", index: 5 },
];

const CarouselComponent = ({ images = mockImages }) => {
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
    setMainImage(images[index - 1]);
    setActiveIndex(index);
  };

  return (
    <div className={styles.carouselContainer}>
      <div style={{ backgroundColor: mainImage.color }}>
        <img
          src={mainImage.src}
          alt="Produto selecionado"
          className="img-fluid"
        />
      </div>

      <div className={styles.thumbnailList}>
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

export default CarouselComponent;
