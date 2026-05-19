import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Icon from "../../../public/assets/Icons/Icons";
import styles from "./Header.module.scss";
function Header() {
  return (
    <header>
      <Navbar
        expand="lg"
        className="bg-body-tertiary position-relative d-flex justify-content-around"
        style={{ zIndex: 1050 }}
      >
        <Container fluid className="justify-content-between">
          <Navbar.Toggle
            className="border-0 p-0 shadow-none justify-content-center me-0"
            aria-controls={`offcanvasNavbar-expand-lg`}
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
            />
          </Navbar.Toggle>
          <Navbar.Brand
            href="#"
            className="d-flex me-0 align-items-center text-primary fw-bold"
          >
            <Icon name="logo" size="18px" color="#C92071" />
            Digital Store
          </Navbar.Brand>

          <Navbar.Offcanvas
            className={`${styles.offCanvas}`}
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
          >
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="d-flex align-items-center gap-2">
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
            <div>
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
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
