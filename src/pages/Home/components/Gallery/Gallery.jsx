import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import SlideContent from "../SlideContent/SlideContent";
import styles from "./Gallery.module.scss";
const slides = [
  {
    id:1,
    upperText: "Melhores ofertas personalizadas",
    title: "Queima de estoque Nike 🔥",
    description:
      "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",imageSrc:'assets/Sneaker-Red-White.png'
  },
  {
    id:2,
    upperText: "Melhores ofertas personalizadas",
    title: "Queima de estoque Nike 🔥",
    description:
      "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",imageSrc:'assets/Sneaker-Red-White.png'
  },
  {
    id:3,
    upperText: "Melhores ofertas personalizadas",
    title: "Queima de estoque Nike 🔥",
    description:
      "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",imageSrc:'assets/Sneaker-Red-White.png'
  },
];
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
      {slides.map(({upperText,title,description,imageSrc,id}) => (
        <Carousel.Item key={id}>
          <SlideContent upperText={upperText} title={title} description={description} imageSrc={imageSrc}/>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Gallery;
