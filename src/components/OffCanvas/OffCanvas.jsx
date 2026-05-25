import styles from './OffCanvas.module.scss'
import { Offcanvas } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import Navb from "../Navbar/Navbar";
import AuthUser from "../AuthUser/AuthUser";
function OffCanvas({ offCanvas,setOffCanvas }) {;

  return (<Offcanvas
            className={`${styles.offCanvas} w-75 justify-content-between d-lg-none order-lg-2`}
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={offCanvas}
            onHide={() => setOffCanvas(false)}
          >
            <Offcanvas.Header className={`p-0`}>
              <Offcanvas.Title
                className={`fs-5 p-0 fw-bold text-dark-gray-2 mb-3`}
                id={`offcanvasNavbarLabel-expand-lg`}
              >
                Páginas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={`p-0`}>
              <Navb />
            </Offcanvas.Body>
            <AuthUser />
          </Offcanvas>
  );
}

export default OffCanvas;
