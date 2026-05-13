import React from "react";
import { useState } from "react";

import styles from './ConteudoSlide.module.css'
function ConteudoSlide() {
  return (
    <div className="bg-light-gray-3 w-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="d-flex flex-column gap-2 align-items-start">
              <p className='text-warning fw-bold m-0'>Melhores ofertas personalizadas</p>
              <h1 className="display-3 fw-bolder text-dark-gray lh-1">Queima de stoque Nike 🔥</h1>
              <p className="text-dark-gray-2">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
              <button className="btn btn-primary text-white px-5 py-2">Ver Ofertas</button>
            </div>
          </div>
        
          <div className="col-7 position-relative" >
            <img 
              className={`px-0 ${styles.productImg} w-75`} 
              src="/assets/Sneaker-Red-White.png"
              alt="Sneaker"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default ConteudoSlide;
