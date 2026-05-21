import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navb = () => {
  const [currentPage, setCurrentPage] = useState("/");
  function handleClick(path) {
    setCurrentPage(path);
  }
  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/Product", text: "Produtos" },
    { path: "/Categories", text: "Categories" },
    { path: "/Orders", text: "Meus pedidos" },
  ];
return (
  <Nav className="justify-content-end flex-grow-1 gap-5">
    {navLinks.map((link) => (
      <Link
        onClick={() => handleClick("/")}
        className="text-decoration-none"
        to={link.path}
      >
        <span
          className={`${currentPage === link.path ? 'text-primary text-decoration-underline':'text-dark-gray-2'}`}
          style={{ lineHeight: "1.75rem", letterSpacing: "0.75px" }}
        >
          {link.text}
        </span>
      </Link>
    ))}
  </Nav>
);
}
export default Navb;
