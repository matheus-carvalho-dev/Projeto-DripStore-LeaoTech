import { useState } from "react";

import ProductCard from "../../components/ProductCard/ProductCard";
import SidebarFilter from "../../components/SidebarFilter/SidebarFilter";

import { products as productsData } from "../../api/products";

import styles from "./Produtos.module.css";

function Produtos() {

  const [products] = useState(productsData);

  return (

    <div className="container">

      <div className={styles.topBar}>
         

        <div className={styles.resultText}>

          <span className={styles.bold}>
           Resultados para "Tênis" -
          </span>

          <span className={styles.grayText}>
              389 produtos
          </span>

          

        </div>

        <select className={styles.select}>

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

                <ProductCard product={product} />

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  )
}

export default Produtos;