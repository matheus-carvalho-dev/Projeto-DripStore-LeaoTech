import React from "react";
import Gallery from "./components/Gallery/Gallery";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";
import Categories from "./components/Categories/Categories";
import styles from "./Home.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SpecialOffer from "./components/SpecialOffer/SpecialOffer";
import ProductCardd from "../../components/ProductCardd/ProductCardd";
const Home = () => {
  return (
    <div className={`${styles.body}`}>
      {/* <Gallery />
      <main className="container">
        <FeaturedCollection />
        <Categories />
        <SpecialOffer />
      </main> */}
      <ProductCardd/>
    </div>
  );
};

export default Home;
