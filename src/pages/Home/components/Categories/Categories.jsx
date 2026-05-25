import React, { useState } from "react";
import styles from "./Categories.module.scss";
import CategoriesIcon from "../CategoriesIcon/CategoriesIcon";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
const Categories = ({activeCategory,setActiveCategory}) => {
  
  const categories = ['camisetas','calcas','headphones','bones','tenis']
  return (
    <section className={`${styles.container}`}>
      <SectionTitle text={'Categorias'} className={'text-center'}/>
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
