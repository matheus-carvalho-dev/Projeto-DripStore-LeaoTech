import React from "react";
import styles from "./Categories.module.scss";
import { Icon } from "../../../../../public/assets/Icons/Icons";
import CategoriesIcon from "../CategoriesIcon/CategoriesIcon";
const Categories = () => {
  return (
    <div>
      <h2>Categorias</h2>
      <ul
        className={`d-flex justify-content-center ${styles.categories}`}
        style={{ backgroundColor: "chocolate" }}
      >
        <CategoriesIcon name={"camisetas"} color={"#C92071"} />
        <CategoriesIcon name={"calcas"} color={"#C92071"} />
        <CategoriesIcon name={"headphones"} color={"#C92071"} />
        <CategoriesIcon name={"bones"} color={"#C92071"} />
        <CategoriesIcon name={"tenis"} color={"#C92071"} />
      </ul>
    </div>
  );
};

export default Categories;
