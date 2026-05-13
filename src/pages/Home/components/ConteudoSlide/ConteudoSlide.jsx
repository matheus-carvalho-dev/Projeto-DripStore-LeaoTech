import React from "react";
import { useState } from "react";

import styles from "./ConteudoSlide.module.css";
function ConteudoSlide() {
  return (
    <div className="bg-light-gray-3 w-100 pb-5 pb-lg-0 flex-lg-row">
      <div className="container">
        <div className="row align-items-center gap-3 gap-lg-0">
          <div className="col-12 col-lg-5 order-2 order-lg-1">
            <div className="d-flex flex-column gap-2 pb-4 align-items-lg-start">
              <p
                id={styles.upperText}
                className="fw-bold m-0 text-center text-lg-start "
              >
                Melhores ofertas personalizadas
              </p>
              <h1 className="fw-bolder text-dark-gray lh-1 text-center text-lg-start px-4 px-lg-0">
                Queima de stoque Nike 🔥
              </h1>
              <p
                id={styles.bottomText}
                className="text-dark-gray-2 text-center text-lg-start px-4 px-lg-0 pe-lg-5"
              >
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
              <button className="btn btn-primary text-white py-3 fw-bold">
                Ver Ofertas
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-7 position-relative text-center order-lg-1">
            <img
              className={`px-0 ${styles.productImg} w-75`}
              src="/assets/Sneaker-Red-White.png"
              alt="Sneaker"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConteudoSlide;
// return (
//   <div className="bg-light-gray-3 w-100">
//     <div className="container">
//       <div className="row align-items-center">
//         <div className="col-5">
//           <div className="d-flex flex-column gap-2 align-items-start">
//             <p className="text-warning fw-bold m-0">
//               Melhores ofertas personalizadas
//             </p>
//             <h1 className="display-3 fw-bolder text-dark-gray lh-1">
//               Queima de stoque Nike 🔥
//             </h1>
//             <p className="text-dark-gray-2">
//               Consequat culpa exercitation mollit nisi excepteur do do tempor
//               laboris eiusmod irure consectetur.
//             </p>
//             <button className="btn btn-primary text-white px-5 py-2">
//               Ver Ofertas
//             </button>
//           </div>
//         </div>
// 
//         <div className="col-7 position-relative">
//           <img
//             className={`px-0 ${styles.productImg} w-75`}
//             src="/assets/Sneaker-Red-White.png"
//             alt="Sneaker"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// );
