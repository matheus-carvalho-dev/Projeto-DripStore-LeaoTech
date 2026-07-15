import { useState } from "react";
import Button from "../Button/Button";
import RegisterModal from "../RegisterModal/Register";

const AuthUser = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {/* Mobile */}
      <div className="border-top border-light-gray-2 d-flex flex-column justify-content-center d-lg-none">
        <Button
          text="Entrar"
          style="btn btn-primary text-white py-2 w-100 mt-2"
          customStyle={{ fontSize: "14px" }}
        />

        <span
          className="text-center mt-3 text-decoration-underline text-dark-gray-2"
          style={{ cursor: "pointer" }}
          onClick={() => setShowRegister(true)}
        >
          Cadastre-se
        </span>
      </div>

      {/* Desktop */}
      <div className="gap-4 d-none d-lg-flex">
        <span
          className="text-decoration-underline text-dark-gray-2 align-self-center"
          style={{ cursor: "pointer" }}
          onClick={() => setShowRegister(true)}
        >
          Cadastre-se
        </span>

        <Button
          text="Entrar"
          style="btn btn-primary text-white py-2 px-5"
          customStyle={{ fontSize: "14px" }}
        />
      </div>

      <RegisterModal
        show={showRegister}
        handleClose={() => setShowRegister(false)}
      />
    </>
  );
};

export default AuthUser;