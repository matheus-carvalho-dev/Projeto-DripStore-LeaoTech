import React from "react";
import styles from "./TrendingProducts.module.scss";
import { Link } from "react-router-dom";
import Icon from "../../../../components/Icons/Icons";

import ProductCardd from "../../../../components/ProductCardd/ProductCardd";
const TrendingProducts = ({ activeCategory, data }) => {
  const products = data.filter(
    (dataItem) => dataItem.category == activeCategory
  );
  
  return (
    <section className="py-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="pt-2 fs-4 text-dark-gray-2 fw-bold">Produtos em alta</h2>
        <Link to={`/search?q=${activeCategory}`} className="text-decoration-none text-primary d-flex align-items-center gap-1">
          <p className="p-0 m-0 text-center">Ver todos</p>
          <Icon name="arrowRight" size="24" />
        </Link>
      </div>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-lg-3">
            <Link className="text-decoration-none text-reset">
              <ProductCardd
                imgSrc={product.image}
                category={product.category}
                name={product.name}
                price={product.price}
                discount={product.discount}
                discountAmount={product.discountAmount}
                alt={product.name}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
