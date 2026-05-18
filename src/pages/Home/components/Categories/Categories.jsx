import React, { useState } from "react";
import styles from "./Categories.module.scss";
import CategoriesIcon from "../CategoriesIcon/CategoriesIcon";
const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("");
  return (
    <div>
      <h2 className="text-start text-sm-center fw-bold text-dark-gray-2">
        Categorias
      </h2>
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
    </div>
  );
};

export default Categories;
