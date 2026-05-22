import React from "react";
import styles from "./TrendingProducts.module.scss";
import { Link } from "react-router-dom";
import Icon from "../../../../components/Icons/Icons";


import ProductCardd from '../../../../components/ProductCardd/ProductCardd'
const TrendingProducts = () => {
  const produtos = ['1','2','3','4','5','6','7','8']
  return (
    <section className="py-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="pt-2 fs-4 text-dark-gray-2 fw-bold">Produtos em alta</h2>
        <Link className="text-decoration-none text-primary d-flex align-items-center gap-1">
          <p className="p-0 m-0 text-center">Ver todos</p>
          <Icon name="arrowRight" size="24" />
        </Link>
      </div>
      <div className="row">
        {produtos.map((produto) => (
          <div key={produto} className="col-6 col-lg-3">
            <Link className="text-decoration-none text-reset">
              <ProductCardd />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
