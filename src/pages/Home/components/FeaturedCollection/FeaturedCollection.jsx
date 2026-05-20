import React from "react";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";

const FeaturedCollection = () => {
  const featuredProducts = [
    {
      id: "Supreme",
      srcImage: "/assets/Supreme-Tshirt.png",
      title: "Novo drop\nSupreme",
      customStyles: {
        transform: "scale(0.78) rotate(-21.92deg)",
        top: "11.91%",
        left: "31.89%",
      },
    },
    {
      id: "Sneaker-Black-White",
      srcImage: "/assets/Sneaker-Black-White.png",
      title: "Coleção\nAdidas",
      customStyles: {
        transform: "scaleX(-1) scale(0.6) rotate(12.18deg)",
        top: "2.38%",
        left: "27.57%",
      },
    },
    {
      id: "Headphones",
      srcImage: "/assets/Headphones.png",
      title: "Novo\nBeats Bass",
      customStyles: {
        transform: "scale(0.45) rotate(30deg)",
        top: "-30.98%",
        left: "28.99%",
      },
    },
  ];

  return (
    <section className="my-5">
      <h2 className="pt-2 fs-4 text-dark-gray-2 fw-bold ms-2">
          Coleções em destaque
        </h2>
      <div className="container">
      
        <div className="row gy-2 gx-2 justify-content-center">
          {featuredProducts.map((product) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-4"
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
