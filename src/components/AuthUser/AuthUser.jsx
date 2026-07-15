import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const AuthUser = () => {
  return (
    <>
      <div
        className={`border-top border-light-gray-2 d-flex flex-column justify-content-center d-lg-none`}
      >
        <Link to="/auth" className="text-decoration-none">
          <Button
            text="Entrar"
            style="btn btn-primary text-white py-2 w-100 mt-2"
            customStyle={{ fontSize: "14px" }}
          />
        </Link>
        <Link to="/auth" className="text-center mt-3 text-decoration-underline text-dark-gray-2">
          Cadastre-se
        </Link>
      </div>
      <div className={` gap-4 d-none d-lg-flex`}>
        <Link
          to="/auth"
          className={`text-decoration-underline text-dark-gray-2 align-self-center`}
        >
          Cadastre-se
        </Link>
        <Link to="/auth" className="text-decoration-none">
          <Button
            text="Entrar"
            style="btn btn-primary text-white py-2 px-5"
            customStyle={{ fontSize: "14px" }}
          />
        </Link>
      </div>
    </>
  );
};

export default AuthUser;
