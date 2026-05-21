import React from "react";
import Gallery from "./components/Gallery/Gallery";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";
import Categories from "./components/Categories/Categories";
import styles from "./Home.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SpecialOffer from "./components/SpecialOffer/SpecialOffer";
import ProductCardd from "../../components/ProductCardd/ProductCardd";
import ProductCard from "../../components/ProductCard/ProductCard";
import Produtos from "../Produtos/Produtos";
import { href } from "react-router-dom";
const Home = () => {
  return (
    <>
      {/* <Gallery /> */}
      <main className="container">
        {/* <FeaturedCollection />
        <Categories />
        <SpecialOffer /> */}
      </main>
    </>
  );
};

export default Home;
