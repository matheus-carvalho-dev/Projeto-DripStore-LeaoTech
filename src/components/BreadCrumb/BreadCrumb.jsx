import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const BreadCrumb = ({ paths }) => {
  return (
    <nav aria-label="breadcrumb" className="my-3">
      <ol className="breadcrumb small">
        {paths.map((item, idx) => (
          <li
            key={idx}
            className={`breadcrumb-item ${idx === 4 ? "active fw-bold" : ""}`}
          >
            {idx === 4 ? (
              item
            ) : (
              <a href="#" className="text-decoration-none text-muted">
                {item}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
