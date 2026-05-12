import React from "react";
import { useState } from "react";

import styles from './ConteudoSlide.module.css'
function ConteudoSlide() {
  return (
    <div className="row p-5 h-100 align-items-center" >
      <div className="col-7 p-5">
        <p>Melhores ofertas personalizadas</p>
        <h1>Queima de stoque Nike 🔥</h1>
        <p>Queima de stoque Nike 🔥</p>
        <button className="btn">Ver Ofertas</button>
      </div>
      <div className="col-5 p-5">
          <img className={`px-0 ${styles.productImg}`} 
          src="/assets/Sneaker-Red-White.png"
        />
      </div >

    </div>
  );
}

export default ConteudoSlide;
