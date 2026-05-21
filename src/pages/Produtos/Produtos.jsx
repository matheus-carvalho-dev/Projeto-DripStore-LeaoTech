import { useState } from "react";

import ProductCard from "../../components/ProductCard/ProductCard";
import SidebarFilter from "../../components/SidebarFilter/SidebarFilter";

import { products as productsData } from "../../api/products";
import ProductCardd from "../../components/ProductCardd/ProductCardd";
function Produtos() {

  const [products] = useState(productsData);

  return (

    <div className="container py-4 mb-5">

      
      <div
        className="bg-light p-4 mb-4 rounded d-flex justify-content-between align-items-center"
      >

        
        <div>

          <span className="fw-bold">
            Resultados para "Tênis"
          </span>

          <span className="text-secondary ms-2">
            - 389 produtos
          </span>

        </div>

        
        <select
          className="form-select"
          style={{
            width: '220px'
          }}
        >

          <option>
            Ordenar por: mais relevantes
          </option>

          <option>
            Menor preço
          </option>

          <option>
            Maior preço
          </option>

        </select>

      </div>

      
      <div className="row">

        
        <div className="col-md-3">

          <SidebarFilter />

        </div>

      
        <div className="col-md-9">

          <div className="row g-4">

            {products.map((product) => (

              <div
                key={product.id}
                className="col-md-4"
              >

                <ProductCard
                  product={product}
                />

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  )
}

export default Produtos