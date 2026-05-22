import React, { useState } from "react";
import styles from "./Categories.module.scss";
import CategoriesIcon from "../CategoriesIcon/CategoriesIcon";
const Categories = ({activeCategory,setActiveCategory}) => {
  
  const categories = ['camisetas','calcas','headphones','bones','tenis']
  return (
    <section className={`${styles.container}`}>
      <h2 className="pt-2 fs-4 text-dark-gray-2 fw-bold text-center py-2">Categorias</h2>
      <ul
        className={`d-flex ps-0 justify-content-sm-center gap-5 ${styles.categories}`}
      >
        {categories.map((category)=>(<CategoriesIcon
          onClick={() => {
            setActiveCategory(category);
          }}
          isActive={activeCategory === category}
          name={category}
          color={"#8F8F8F"}
          key={category}
        />))}
      </ul>
    </section>
  );
};

export default Categories;
