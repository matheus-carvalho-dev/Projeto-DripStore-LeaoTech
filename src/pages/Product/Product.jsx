import React, { useState, useEffect } from "react";
import TrendingProducts from "../../components/ProductList/ProductList";
import { fetchProduct, fetchProductById } from "../../api/products";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentColor, setCurrentColor] = useState("");
  const [currentSize, setCurrentSize] = useState("");
  useEffect(() => {
    const loadData = async () => {
      try {
        const resp = await fetchProduct();
        setData(resp);
      } catch (error) {
        console.log(error);
      }
    };

    const loadProduct = async () => {
      try {
        setLoading(true);
        const resp = await fetchProductById(id);

        if (resp && resp.productDetails) {
          setProduct(resp);
          setCurrentColor(resp.productDetails.availableColors[0].name);
          setCurrentSize(resp.productDetails.availableSizes[0]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
    loadProduct();
  }, [id]);
  const products = data.filter(
    (dataItem) => dataItem.category == product.category
  );
  if (loading) {
    return <div className="text-center py-5">Carregando produto...</div>;
  }

  // 2. Após o loading terminar (loading === false), validamos se o produto existe
  // Se o produto estiver vazio ou faltar detalhes, mostramos o NotFound
  if (
    !product ||
    Object.keys(product).length === 0 ||
    !product.productDetails
  ) {
    return <NotFound />;
  }
  return (
    <div className="min-vh-100 bg-light container">
      <main>
        <BreadCrumb
          paths={[
            "Home",
            "Produtos",
            product.category,
            product.brand,
            product.name,
          ]}
        />
        <ProductDetails
          product={product}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
        />
      </main>
      <section className="">
        <TrendingProducts
          limit={4}
          data={products}
          activeCategory={product.category}
          text={"Produtos Relacionados"}
        />
      </section>
    </div>
  );
};

export default Product;
