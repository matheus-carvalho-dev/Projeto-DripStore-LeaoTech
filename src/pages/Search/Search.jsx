import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCardd from "../../components/ProductCardd/ProductCardd";
import SidebarFilter from "../../components/SidebarFilter/SidebarFilter";
import { fetchProductSearch, fetchProduct } from "../../api/products";
import { Offcanvas } from "react-bootstrap";
import Head from "../../components/Head/Head";
function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        let resp;

        if (query) {
          resp = await fetchProductSearch(query);
        } else {
          resp = await fetchProduct();
        }
        setProducts(resp);
        setCurrentPage(1);
      } catch (error) {
        console.log("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [query]);
  const currentProducts = products.slice(startIndex, endIndex);
  return (
    <>
    <Head title={'Search'}/>
      <div className="container py-4 mb-5">
        <div className="bg-light p-4 mb-4 rounded d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
          <div>
            <span className="fw-bold">
              {query ? `Resultados para "${query}"` : "Todos os produtos"}
            </span>
            <span className="text-secondary ms-2">
              - {products.length}{" "}
              {products.length === 1 ? "produto" : "produtos"}
            </span>
          </div>

          <div
            className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2 w-100"
            style={{ maxWidth: "350px" }}
          >
            <span className="text-nowrap">Ordenar por:</span>
            <select className="form-select w-100">
              <option>Mais relevantes</option>
              <option>Menor preço</option>
              <option>Maior preço</option>
            </select>
            <button
              className="btn btn-outline-primary d-md-none w-100"
              onClick={() => setShowMobileFilter(true)}
            >
              Filtrar
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 d-none d-lg-block">
            <SidebarFilter />
          </div>
          <Offcanvas
            show={showMobileFilter}
            onHide={() => setShowMobileFilter(false)}
            placement="start"
            className="d-md-none w-75"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="fw-bold">Filtros</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <SidebarFilter />
            </Offcanvas.Body>
          </Offcanvas>
          <div className="col-md-9">
            {loading ? (
              <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">A carregar...</span>
                </div>
              </div>
            ) : products.length > 0 ? (
              <div className="row g-4">
                {currentProducts.map((product) => (
                  <div key={product.id} className="col-6 col-md-4">
                    <ProductCardd
                      imgSrc={product.image}
                      category={product.category}
                      name={product.name}
                      price={product.price}
                      discount={product.discount}
                      discountAmount={product.discountAmount}
                      alt={product.name}
                      path={`/product/${product.id}`}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <h4 className="text-muted">
                  Nenhum produto encontrado para "{query}".
                </h4>
              </div>
            )}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-5 gap-2">
                <button
                  className="btn btn-outline-primary"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  Anterior
                </button>
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`btn ${
                      currentPage === page
                        ? "btn-primary text-white"
                        : "btn-outline-primary"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  className="btn btn-outline-primary"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  Próximo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
