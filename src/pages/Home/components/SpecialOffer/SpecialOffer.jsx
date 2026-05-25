import React from "react";
import styles from "./SpecialOffer.module.scss";
import Button from "../../../../components/Button/Button";
import { Link } from "react-router-dom";
const SpecialOffer = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-5">
        <div
          className={`bg-gradient-secondary rounded-circle d-flex justify-content-center align-items-center ${styles.containerImg}`}
        >
          <img
            src="/assets/Sneaker-Black-White-Green.png"
            className="img-fluid"
          />
        </div>

        <div
          className={`d-flex flex-column align-items-start ${styles.text}`}
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
          <Link to='/product/jordan'>
            <Button
              text="Ver Oferta"
              style="btn btn-primary px-5 py-2 fw-bold text-white"
              customStyle={{ fontSize: "14px" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
