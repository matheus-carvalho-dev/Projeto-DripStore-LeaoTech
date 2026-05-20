import React from "react";
import styles from "./SpecialOffer.module.scss";
import Button from "../../../../components/Button/Button";

const SpecialOffer = () => {
  return (
    <div className="container-fluid py-5">
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-5">
        <div
          className={`bg-gradient-secondary rounded-circle d-flex justify-content-center align-items-center ${styles.containerImg}`}
        >
          <img
            src="/assets/Sneaker-Black-White-Green.png"
            className="img-fluid"
            alt="Sneaker Air Jordan"
          />
        </div>

        <div
          className="d-flex flex-column align-items-start"
          style={{ maxWidth: "500px" }}
        >
          <p className="text-warning fw-bold m-0">Oferta especial</p>
          <h4 className="fw-bold text-dark-gray-2 fs-1 my-3">
            Air Jordan edição de colecionador
          </h4>
          <p className="text-dark-gray-2 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <Button
            text="Ver Oferta"
            style="btn btn-primary px-5 py-2 fw-bold text-white"
            customStyle={{ fontSize: "14px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
