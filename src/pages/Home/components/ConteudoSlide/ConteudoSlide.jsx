import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from './ConteudoSlide.module.css'
function ConteudoSlide() {
  return (
    <div className="row">
      <div className="col-7">
        <p>Melhores ofertas personalizadas</p>
        <h2>Queima de stoque Nike 🔥</h2>
        <p>Queima de stoque Nike 🔥</p>
        <button className="btn">Ver Ofertas</button>
      </div>
      <div className="col-5">
          <img className={`px-0 ${styles.productImg}`} 
          src="/assets/Sneaker-Red-White.png"
        />
      </div >

    </div>
  );
}

export default ConteudoSlide;
