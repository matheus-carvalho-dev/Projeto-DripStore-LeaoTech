import React from "react";
import { Link } from "react-router-dom";
import Icon from "../Icons/Icons";
import ProductListItem from "../ProductListItem/ProductListItem";
import SectionTitle from "../SectionTitle/SectionTitle";

const ProductList = ({ activeCategory, data, limit, text, loading }) => {
  const filteredData = data.filter(
    (product) => product.category === activeCategory
  );
  const productsToRender = filteredData.slice(0, limit);
  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5 py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }
  return (
    <section className="">
      <div className="d-flex justify-content-between align-items-center">
        <SectionTitle text={text} />
        <Link
          to={`/search?q=${activeCategory}`}
          className="text-decoration-none text-primary d-flex align-items-center gap-1"
        >
          <p className="p-0 m-0 text-center">Ver todos</p>
          <Icon name="arrowRight" size="24" />
        </Link>
      </div>
      <div className="row">
        {productsToRender.length > 0 ? (
          productsToRender.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="text-muted">
              Nenhum produto encontrado para esta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
