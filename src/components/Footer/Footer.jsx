import React from "react";
import Icon from "../Icons/Icons";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
const categories = ["Camisetas", "Calças", "Bonés", "Headphones", "Tênis"];
const information = [
  "Sobre Drip Store",
  "Segurança",
  "Wishlist",
  "Blog",
  "Trabalhe conosco",
  "Meus Pedidos",
];
const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white bg-dark-gray py-4">
      <div className="container-fluid p-4 pb-0">
        <section className="container-lg py-3">
          <div className="row d-lg-flex align-items-start">
            <div className="col-lg-4">
              <div>
                <div className="d-flex me-0 align-items-center text-white fw-bold gap-2 mb-4">
                  <Icon
                    name="logo"
                    size="clamp(18px, 2vw + 0.5rem, 33px)"
                    color="#FFFFFF"
                  />
                  <span
                    style={{
                      paddingTop: "1px",
                      fontSize: "clamp(20px, 3vw, 44px)",
                    }}
                  >
                    Digital Store
                  </span>
                </div>
              </div>
              <div>
                <p className="text-start pe-5">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
              <div
                className={`d-flex justify-content-start align-content-center gap-3`}
              >
                <Icon name="facebook" color={"#ffffff"} size="23" />
                <Icon name="instagram" color={"#ffffff"} size="23" />
                <Icon name="twitter" color={"#ffffff"} size="23" />
              </div>
            </div>
            <div className="d-flex mt-5 mt-lg-0 col-lg-4">
              <div className="col-6 text-start fw-bold">
                <h3
                  style={{ fontSize: "1.125rem" }}
                  className="fw-bold mb-lg-5"
                >
                  Informação
                </h3>
                {information.map((informationLink) => (
                  <Link
                  to={informationLink}
                    key={informationLink}
                    style={{ textDecoration: "none" }}
                    className="fw-lighter mb-2 text-white d-block py-1"
                  >
                    {informationLink}
                  </Link>
                ))}
              </div>
              <div className="col-6 text-start fw-bold">
                <h3
                  style={{ fontSize: "1.125rem" }}
                  className="fw-bold mb-lg-5"
                >
                  Categorias
                </h3>
                <div>
                  {categories.map((category) => (
                    <Link
                    to={category}
                      key={category}
                      style={{ textDecoration: "none" }}
                      className="fw-lighter mb-2 text-white d-block py-1  "
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-start fw-bold mt-4 mt-lg-0 col-lg-4 pe-5">
              <h3 style={{ fontSize: "1.125rem" }} className="fw-bold mb-lg-5">
                Contato
              </h3>
              <div className="w-100 pe-lg-5">
                <p className="fw-light pe-lg-5" style={{ fontSize: "16px" }}>
                  Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                  60150-161
                </p>
                <p className="fw-light mt-5">(85) 3051-3411</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="m-0" />
      </div>

      <div className="text-center py-5 py-lg-4" style={{ fontSize: "13px" }}>
        © 2020 Digital College
      </div>
    </footer>
  );
};

export default Footer;
