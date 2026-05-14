import React from "react";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";

const FeaturedCollection = () => {
  const featuredProducts = [
    {
      id: "Supreme",
      srcImage: "/assets/Supreme-Tshirt.png",
      title: "Novo drop Supreme",
      customStyles: {
        transform: "scale(0.78) rotate(-21.92deg)",
        top: "25px",
        left: "112px",
      },
    },
    {
      id: "Sneaker-Black-White",
      srcImage: "/assets/Sneaker-Black-White.png",
      title: "Coleção\nAdidas",
      customStyles: {
        transform: "scaleX(-1) scale(0.6) rotate(12.18deg)",
        top: "5px",
        left: "97px", 
      },
    },
    {
      id: "Headphones",
      srcImage: "/assets/Headphones.png",
      title: "Novo\nBeats Bass",
      customStyles: {
        transform: "scale(0.45) rotate(30deg)",
        top: "-65px",
        left: "102px", 
      },
    },
  ];

  return (
    <section>
      <h2 className="pt-2 fs-6 text-dark-gray-2 fw-bold ms-2">
          Coleções em destaque
        </h2>
      <div className="container-fluid px-0">
      
        <div className="row gy-2 g-0 justify-content-center">
          {featuredProducts.map((product) => {
            return (
              <div
                className="col-12 col-lg-4 d-flex justify-content-center"
                key={product.id}
              >
                <FeaturedProduct
                  title={product.title}
                  srcImage={product.srcImage}
                  customStyles={product.customStyles}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
