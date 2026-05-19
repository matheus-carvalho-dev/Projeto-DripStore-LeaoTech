import React from 'react';
import { Nav } from 'react-bootstrap';
const Navb = () => {
  return (
    <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  className={`text-dark-gray-2`}
                  href="#action1" style={{lineHeight: '1.75rem',
    letterSpacing: '0.75px'}}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className={`text-dark-gray-2`}
                  href="#action2" style={{lineHeight: '1.75rem',
    letterSpacing: '0.75px'}}
                >
                  Produtos
                </Nav.Link>
                <Nav.Link
                  className={`text-dark-gray-2`}
                  href="#action3" style={{lineHeight: '1.75rem',
    letterSpacing: '0.75px'}}
                >
                  Categorias
                </Nav.Link>
                <Nav.Link
                  className={`text-dark-gray-2`}
                  href="#action4" style={{lineHeight: '1.75rem',
    letterSpacing: '0.75px'}}
                >
                  Meus Pedidos
                </Nav.Link>
              </Nav>
  );
};

export default Navb;