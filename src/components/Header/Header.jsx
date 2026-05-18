import React from 'react';
import { Navbar,Container,Nav,NavDropdown,Form } from 'react-bootstrap';
import Button from '../Button/Button'
import Icon from '../../../public/assets/Icons/Icons';
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-white py-3 shadow-sm" collapseOnSelect>
      <Container className="d-flex flex-column align-items-start">
        {/* LINHA SUPERIOR (Logo, Busca, Ações) */}
        <div className="d-flex w-100 justify-content-between align-items-center">
          {/* Esquerda: Hamburguer (Mobile) + Logo */}
          <div className="d-flex align-items-center gap-3">
            <Navbar.Toggle
              aria-controls="main-navbar-nav"
              className="border-0 p-0"
            />
            <Navbar.Brand
              href="/"
              className="d-flex align-items-center gap-2 m-0"
            >
              <Icon size="18px" name="logo" color="#C92071" />
              <span
                className="fs-5 fw-bold text-primary"
                style={{ color: "var(--primary)" }}
              >
                Digital Store
              </span>
            </Navbar.Brand>
          </div>

          <div className="d-none d-lg-block flex-grow-1 mx-5">
            <Form className="position-relative">
              <Form.Control
                type="search"
                placeholder="Pesquisar produto..."
                className="bg-light border-0 rounded-1 py-2 px-3 w-100"
                style={{ outline: "none", boxShadow: "none" }}
              />
              <svg
                className="position-absolute top-50 translate-middle-y text-muted"
                style={{ right: "15px" }}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#8F8F8F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="#8F8F8F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Form>
          </div>

          <div className="d-flex align-items-center gap-3 gap-lg-4">

            <div className="d-lg-none" style={{ cursor: "pointer" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#8F8F8F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="#8F8F8F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Cadastre-se e Entrar (Visível apenas no Desktop lg+) */}
            <a
              href="#"
              className="d-none d-lg-block text-dark text-decoration-underline"
              style={{ whiteSpace: "nowrap" }}
            >
              Cadastre-se
            </a>
            <Button
              style="d-none d-lg-block fw-bold border-0 px-4 py-2" text='Entrar'
            />
            <div className="position-relative" style={{ cursor: "pointer" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                  fill="#C92071"
                />
                <path
                  d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                  fill="#C92071"
                />
                <path
                  d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                  stroke="#C92071"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                style={{
                  backgroundColor: "#EE4266",
                  fontSize: "0.65rem",
                  transform: "translate(-30%, -30%)",
                }}
              >
                2
              </span>
            </div>
          </div>
        </div>

        {/* LINHA INFERIOR / MENU COLAPSÁVEL (Links de Navegação) */}
        <Navbar.Collapse id="main-navbar-nav" className="w-100 mt-3 mt-lg-4">
          <Nav className="me-auto gap-lg-4">
            <Nav.Link
              href="/"
              className="fw-bold"
              style={{
                color: "var(--primary)",
                borderBottom: "2px solid var(--primary)",
                paddingBottom: "2px",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link href="/produtos" className="text-dark-gray-2">
              Produtos
            </Nav.Link>
            <Nav.Link href="/categorias" className="text-dark-gray-2">
              Categorias
            </Nav.Link>
            <Nav.Link href="/pedidos" className="text-dark-gray-2">
              Meus Pedidos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;