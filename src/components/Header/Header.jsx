
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Icon from "../Icons/Icons";
import styles from "./Header.module.scss";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Navb from "../Navbar/Navbar";
import AuthUser from "../AuthUser/AuthUser";
import { Link } from "react-router-dom";
function Header() {
  const [search, setSearch] = useState(false);
  const [offCanvas, setOffCanvas] = useState(false);

  return (
    <header className="container-fluid bg-white" style={{ zIndex: 1050 }}>
      <Navbar
        expand="lg"
        className="bg-white position-relative d-flex flex-column container-lg"
      >
        <Container fluid className="justify-content-between">
          <Navbar.Toggle
            className="border-0 p-0 shadow-none justify-content-center me-0"
            aria-controls={`offcanvasNavbar-expand-lg`}
            onClick={() => {
              setOffCanvas(!offCanvas);
              setSearch(false);
            }}
          >
            <Icon
              name="hamburguer"
              size="20px"
              color="#C92071"
              attributes={{
                stroke: "#1F1F1F",
                strokeWidth: "2",
                strokeLinecap: "round",
              }}
              className="me-2"
            />
          </Navbar.Toggle>
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand
              className="d-flex me-0 align-items-center text-primary fw-bold gap-2"
            >
              <Icon name="logo" size="clamp(18px, 3vw, 33px)" color="#C92071" />
              <span
                style={{
                  paddingTop: "1px",
                  fontSize: "clamp(20px, 5vw, 36px)",
                }}
              >
                Digital Store
              </span>
            </Navbar.Brand>
          </Link>

          <Navbar.Offcanvas
            className={`${styles.offCanvas} w-75 justify-content-between d-lg-none order-lg-2`}
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={offCanvas}
            onHide={() => setOffCanvas(false)}
          >
            <Offcanvas.Header className={`p-0`}>
              <Offcanvas.Title
                className={`fs-5 p-0 fw-bold text-dark-gray-2`}
                id={`offcanvasNavbarLabel-expand-lg`}
              >
                Páginas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={`p-0`}>
              <Navb />
            </Offcanvas.Body>
            <AuthUser />
          </Navbar.Offcanvas>
          <div className=" mx-1 d-none d-lg-block w-50">
            <SearchBar />
          </div>
          <div className="d-none d-lg-block">
            <AuthUser />
          </div>
          <div className="d-flex align-items-center gap-2  me-1">
            <div
              className={`d-lg-none`}
              onClick={() => {
                setSearch(!search);
                setOffCanvas(false);
              }}
            >
              <Icon
                name="search"
                size="15px"
                attributes={{
                  stroke: "#CCCCCC",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "none",
                }}
              />
            </div>
            <div className="position-relative">
              <Icon
                name="cart"
                color="#C92071"
                size="18px"
                attributes={{
                  stroke: "#C92071",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "none",
                }}
              />
              <div
                className={`d-flex bg-error rounded-circle justify-content-center  ${styles.badge}`}
              >
                <span className={`${styles.badgeNumber}`} style={{}}>
                  2
                </span>
              </div>
            </div>
          </div>
          {search && (
            <div className="w-100 mt-lg-0 my-2 d-lg-none">
              <SearchBar />
            </div>
          )}
        </Container>
        <div className="align-self-start d-none d-lg-block mt-2">
          <Navb />
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
