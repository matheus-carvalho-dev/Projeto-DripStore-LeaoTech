import styles from "./SlideContent.module.scss";
import Button from "../../../../components/Button/Button";
import { Link } from "react-router-dom";
function ContentSlide({upperText,title,description,imageSrc}) {
  return (
    <div className="bg-light-gray-3 w-100 pb-5 pb-lg-4 flex-lg-row">
      <div className="container">
        <div className="row align-items-center gap-3 gap-lg-0">
          <div className="col-12 col-lg-5 order-2 order-lg-1">
            <div className="d-flex flex-column gap-2 pb-4 align-items-lg-start align-items-center pt-5">
              <p
                className={`fw-bold m-0 text-center text-lg-start ${styles.upperText}`}
              >
                {upperText}
              </p>
              <h1
                className={`fw-bolder text-dark-gray lh-1 text-center text-lg-start px-4 px-lg-0 ${styles.title}`}
              >
                {title}
              </h1>
              <p
                className={`text-dark-gray-2 text-center text-lg-start px-4 px-lg-0 pe-lg-5 ${styles.bottomText}`}
              >
                {description}
              </p>
              <Link to='/search' className="w-50 text-reset text-decoration-none">
                <Button
                  text="Ver Ofertas"
                  style=" btn btn-primary text-white py-2 w-50 mt-2"
                />
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-7 position-relative text-center order-lg-1">
            <img
              className={`px-0 ${styles.productImg} w-75`}
              src={imageSrc}
              alt="Sneaker"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSlide;