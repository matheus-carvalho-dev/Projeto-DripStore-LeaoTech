import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ConteudoSlide from "../ConteudoSlide/ConteudoSlide";
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
        <ConteudoSlide />
      </Carousel.Item>
      <Carousel.Item>
        <ConteudoSlide />
      </Carousel.Item>
      <Carousel.Item>
        <ConteudoSlide />
      </Carousel.Item>
    </Carousel>
  );
}

export default Gallery;
