import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
const Navb = () => {
  const location = useLocation()
  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/Products", text: "Produtos" },
    { path: "/Categories", text: "Categories" },
    { path: "/Orders", text: "Meus pedidos" },
  ];
  console.log(location)
return (
  <Nav className="justify-content-end flex-grow-1 gap-5">
    {navLinks.map((link) => (
      <Link
      key={link.text}
        className="text-decoration-none"
        to={link.path}
      >
        <span
          className={`${location.pathname === link.path ? 'text-primary text-decoration-underline':'text-dark-gray-2'}`}
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
