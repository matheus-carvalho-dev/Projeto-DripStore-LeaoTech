import React, { useState, useEffect } from "react";
import StarRating from "./components/StarRating/StarRating";
import Icon from "../../components/Icons/Icons";
import ProductListItem from "../../components/ProductListItem/ProductListItem";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";
import { fetchProduct, fetchProductById } from "../../api/products";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const Product = ({ id = 19 }) => {
  const [product, setProduct] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentColor, setCurrentColor] = useState("rosa");
  const [currentSize, setCurrentSize] = useState(39);
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
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
        setProduct(resp);
        console.log(resp);
      } catch (error) {
        console.log(error);
      }
    };

    loadData();
    loadProduct();
    setLoading(false);
  }, []);
  const products = data.filter(
    (dataItem) => dataItem.category == product.category,
  );
  if (loading || !product || !product.productDetails) {
    return <div className="text-center py-5">Carregando produto...</div>;
  }
  return (
    <div className="min-vh-100 bg-light container p-0">
      <main className="">
        <BreadCrumb
          paths={[
            "Home",
            "Produtos",
            product.category,
            product.brand,
            product.name,
          ]}
        />
      <ProductDetails product={product} currentColor={currentColor} setCurrentColor={setCurrentColor} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
        
      </main>
      <section className="container">
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
