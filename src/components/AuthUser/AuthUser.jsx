import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const AuthUser = () => {
  return (
    <>
      <div
        className={`border-top border-light-gray-2 d-flex flex-column justify-content-center d-lg-none`}
      >
        <Button
          text="Entrar"
          style="btn btn-primary text-white py-2 w-100 mt-2"
          customStyle={{ fontSize: "14px" }}
        />
        <span
          className={`text-center mt-3 text-decoration-underline text-dark-gray-2`}
        >
          Cadastre-se
        </span>
      </div>
      <div className={` gap-4 d-none d-lg-flex`}>
        <Link
          className={`text-decoration-underline text-dark-gray-2 align-self-center`}
        >
          Cadastre-se
        </Link>
        <Button
          text="Entrar"
          style="btn btn-primary text-white py-2 px-5"
          customStyle={{ fontSize: "14px" }}
        />
      </div>
    </>
  );
};

export default AuthUser;
