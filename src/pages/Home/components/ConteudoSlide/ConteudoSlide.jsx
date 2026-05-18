import React from "react";
import { useState } from "react";

import styles from "./ConteudoSlide.module.scss";
import Button from "../../../../components/Button/Button";
function ConteudoSlide() {
  return (
    <div className="bg-light-gray-3 w-100 pb-5 pb-lg-0 flex-lg-row">
      <div className="container">
        <div className="row align-items-center gap-3 gap-lg-0">
          <div className="col-12 col-lg-5 order-2 order-lg-1">
            <div className="d-flex flex-column gap-2 pb-4 align-items-lg-start pt-5">
              <p
                id={styles.upperText}
                className="fw-bold m-0 text-center text-lg-start "
              >
                Melhores ofertas personalizadas
              </p>
              <h1
                id={styles.title}
                className="fw-bolder text-dark-gray lh-1 text-center text-lg-start px-4 px-lg-0"
              >
                Queima de estoque Nike 🔥
              </h1>
              <p
                id={styles.bottomText}
                className="text-dark-gray-2 text-center text-lg-start px-4 px-lg-0 pe-lg-5"
              >
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
              <Button
                text="Ver Ofertas"
                style=" btn btn-primary text-white py-2 w-50 mt-2"
              />
            </div>
          </div>

          <div className="col-12 col-lg-7 position-relative text-center order-lg-1">
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