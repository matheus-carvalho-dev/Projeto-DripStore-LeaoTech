import React from "react";
import Icon from "../../../public/assets/Icons/Icons";
const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-white bg-dark-gray"
      
    >
      <div className="container-fluid p-4 pb-0">
        <section>
          <div className="row">
            <div>
              <div
                href="#"
                className="d-flex me-0 align-items-center text-white fw-bold gap-2"
              >
                <Icon
                  name="logo"
                  size="clamp(18px, 2vw + 0.5rem, 28px)"
                  color="#FFFFFF"
                />
                <span
                  style={{
                    paddingTop: "1px",
                    fontSize: "clamp(20px, 1.5vw + 0.5rem, 24px)",
                  }}
                >
                  Digital Store
                </span>
              </div>
              <p className="text-start" style={{fontSize:'12px'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            
          </div>
        </section>


        <hr className="mb-4" />

      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", fontSize: "13px" }}
      >
        © 2020 Copyright: Digital College
      </div>
    </footer>
  );
};

export default Footer;
