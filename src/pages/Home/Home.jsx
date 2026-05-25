import Gallery from "./components/Gallery/Gallery";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";
import Categories from "./components/Categories/Categories";
import SpecialOffer from "./components/SpecialOffer/SpecialOffer";
import TrendingProducts from "../../components/ProductList/ProductList";
import { use, useEffect, useState } from "react";
import { fetchProduct } from "../../api/products";
import Head from "../../components/Head/Head";
const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("camisetas");
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const resp = await fetchProduct();
        setData(resp);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => setLoading(false), 2000);
      }
    };
    loadData();
  }, []);
  useEffect(() => {
    setActiveCategory("camisetas");
  }, []);
  return (
    <>
    <Head title='Digital Store'/>
      <Gallery />
      <main className={`container`}>
        <FeaturedCollection />
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setLoading={setLoading}
        />
        <TrendingProducts
          text={"Produtos em alta"}
          activeCategory={activeCategory}
          data={data}
          limit={8}
          loading={loading}
        />
        <SpecialOffer />
      </main>
    </>
  );
};

export default Home;
