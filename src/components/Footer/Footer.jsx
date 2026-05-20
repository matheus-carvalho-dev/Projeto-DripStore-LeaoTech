import React from "react";
import Icon from "../../../public/assets/Icons/Icons";
import { Link } from "react-router-dom";
const Footer = () => {
  const categories = ["Camisetas", "Calças", "Bonés", "Headphones", "Tênis"];
  const information = [
    "Sobre Drip Store",
    "Segurança",
    "Wishlist",
    "Blog",
    "Trabalhe conosco",
    "Meus Pedidos",
  ];

  return (
    <footer className="text-center text-lg-start text-white bg-dark-gray">
      <div className="container-fluid p-4 pb-0">
        <section className="container-lg">
          <div className="row">
            <div>
              <div
                href="#"
                className="d-flex me-0 align-items-center text-white fw-bold gap-2"
              >
                <Icon
                  name="logo"
                  size="clamp(18px, 2vw + 0.5rem, 33px)"
                  color="#FFFFFF"
                />
                <span
                  style={{
                    paddingTop: "1px",
                    fontSize: "clamp(20px, 1.5vw + 0.5rem, 36px)",
                  }}
                >
                  Digital Store
                </span>
              </div>
              <p className="text-start" style={{ fontSize: "12px" }}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <div
              className={`d-flex justify-content-start align-content-center gap-3`}
            >
              <Icon name="facebook" color={"#ffffff"} size="23" />
              <Icon name="instagram" color={"#ffffff"} size="23" />
              <Icon name="twitter" color={"#ffffff"} size="23" />
            </div>
            <div className="d-flex mt-5 ">
              <div className="col-6 text-start fw-bold">
                <h3 style={{ fontSize: "1.125rem" }} className="fw-bold">
                  Informação
                </h3>
                {information.map((informationLink) => (
                  <Link
                    style={{ textDecoration: "none" }}
                    className="fw-lighter mb-2 text-white d-block"
                  >
                    {informationLink}
                  </Link>
                ))}
              </div>
              <div className="col-6 text-start fw-bold">
                <h3 style={{ fontSize: "1.125rem" }} className="fw-bold">
                  Categorias
                </h3>
                <div>
                  {categories.map((category) => (
                    <Link
                      style={{ textDecoration: "none" }}
                      className="fw-lighter mb-2 text-white d-block"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-start fw-bold mt-4">
              <h3 style={{ fontSize: "1.125rem" }} className="fw-bold">
                Contato
              </h3>
              <div className="w-100 pe-5">
                <p className="fw-light">
                  Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                  60150-161
                </p>
                <p className="fw-light mt-5">(85) 3051-3411</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="mb-4" />
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", fontSize: "13px" }}
      >
        © 2020 Digital College
      </div>
    </footer>
  );
};

export default Footer;
