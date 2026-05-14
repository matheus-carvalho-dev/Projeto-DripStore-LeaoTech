import React from "react";
import styles from "./FeaturedCollection.module.scss";
import supreme from "../../../../../public/assets/Supreme-Tshirt.png";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
const FeaturedCollection = () => {
  return (
    <div className="container-fluid">
      <div className="row gy-2">
        <FeaturedProduct/>
        <FeaturedProduct/>
        <FeaturedProduct/>
      </div>
    </div>
  );
};

export default FeaturedCollection;
