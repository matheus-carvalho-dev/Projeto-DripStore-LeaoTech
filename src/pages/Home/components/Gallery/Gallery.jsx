import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import SlideContent from "../SlideContent/SlideContent";
import styles from "./Gallery.module.scss";
function Gallery() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className={styles.carousel}
      activeIndex={index}
      onSelect={handleSelect}
      controls={false}
    >
      <Carousel.Item>
        <SlideContent />
      </Carousel.Item>
      <Carousel.Item>
        <SlideContent />
      </Carousel.Item>
      <Carousel.Item>
        <SlideContent />
      </Carousel.Item>
    </Carousel>
  );
}

export default Gallery;
