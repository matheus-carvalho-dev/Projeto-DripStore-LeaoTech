import React, { useState } from "react";
import styles from "./Categories.module.scss";
import CategoriesIcon from "../CategoriesIcon/CategoriesIcon";
const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("");
  return (
    <section>
      <h2 className="pt-2 fs-4 text-dark-gray-2 fw-bold text-center py-2">Categorias</h2>
      <ul
        className={`d-flex ps-0 justify-content-sm-center ${styles.categories}`}
      >
        <CategoriesIcon
          onClick={() => {
            setActiveCategory("camisetas");
          }}
          isActive={activeCategory === "camisetas"}
          name={"camisetas"}
          color={"#8F8F8F"}
        />
        <CategoriesIcon
          onClick={() => {
            setActiveCategory("calcas");
          }}
          isActive={activeCategory === "calcas"}
          name={"calcas"}
          color={"#8F8F8F"}
        />
        <CategoriesIcon
          onClick={() => {
            setActiveCategory("headphones");
          }}
          isActive={activeCategory === "headphones"}
          name={"headphones"}
          color={"#8F8F8F"}
        />
        <CategoriesIcon
          onClick={() => {
            setActiveCategory("bones");
          }}
          isActive={activeCategory === "bones"}
          name={"bones"}
          color={"#8F8F8F"}
        />
        <CategoriesIcon
          onClick={() => {
            setActiveCategory("tenis");
          }}
          isActive={activeCategory === "tenis"}
          name={"tenis"}
          color={"#8F8F8F"}
        />
      </ul>
    </section>
  );
};

export default Categories;
