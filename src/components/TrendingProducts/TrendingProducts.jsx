import React from "react";
import styles from "./TrendingProducts.module.scss";
import { Link } from "react-router-dom";
import Icon from "../Icons/Icons";

import ProductCardd from "../ProductCardd/ProductCardd";
import ProductList from "../ProductListItem/ProductListItem";
import ProductListItem from "../ProductListItem/ProductListItem";
import SectionTitle from "../SectionTitle/SectionTitle";
const TrendingProducts = ({ activeCategory, data, limit, text }) => {
  const productsToRender = data.slice(0, limit);

  return (
    <section className="">
      <div className="d-flex justify-content-between align-items-center">
        <SectionTitle text={'Produtos em alta'}/>
        <Link
          to={`/search?q=${activeCategory}`}
          className="text-decoration-none text-primary d-flex align-items-center gap-1"
        >
          <p className="p-0 m-0 text-center">Ver todos</p>
          <Icon name="arrowRight" size="24" />
        </Link>
      </div>
      <div className="row">
        {productsToRender.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
