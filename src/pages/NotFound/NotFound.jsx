import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const NotFound = () => {
  return (
    <div className="container py-5 my-5 d-flex flex-column align-items-center justify-content-center text-center w-75">
      <h1 className="fw-bold display-1 text-primary mb-0">404</h1>
      <h2 className="fw-bold text-dark-gray mb-3">
        Ops! Página não encontrada
      </h2>
      <p className="text-muted mb-4 px-0 px-lg-5">
        Desculpe, não conseguimos encontrar a página que você está procurando.
        Ela pode ter sido removida ou o endereço está incorreto.
      </p>

      <Link to="/" className="text-decoration-none">
        <Button
          text="Voltar para Home"
          style="btn btn-primary text-white py-2 px-5 fw-bold"
        />
      </Link>
    </div>
  );
};

export default NotFound;
