function SidebarFilter() {

  return (

    <div className="bg-white p-4 rounded shadow-sm">

      <h4 className="fw-bold mb-4">
        Filtrar por
      </h4>

      
      <div className="mb-4">

        <h6 className="fw-bold">
          Marca
        </h6>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="adidas"
          />
          <label className="form-check-label" htmlFor="adidas">
            Adidas
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="balenciaga"
          />
          <label className="form-check-label" htmlFor="balenciaga">
            Calenciaga
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="kswiss"
          />
          <label className="form-check-label" htmlFor="kswiss">
            K-Swiss
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="nike"
          />
          <label className="form-check-label" htmlFor="nike">
            Nike
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="puma"
          />
          <label className="form-check-label" htmlFor="puma">
            Puma
          </label>
        </div>

      </div>


      <div className="mb-4">

        <h6 className="fw-bold">
          Categoria
        </h6>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="esporte"
          />
          <label className="form-check-label" htmlFor="esporte">
            Esporte e lazer
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="casual"
          />
          <label className="form-check-label" htmlFor="casual">
            Casual
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="utilitario"
          />
          <label className="form-check-label" htmlFor="utilitario">
            Utilitário
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="corrida"
          />
          <label className="form-check-label" htmlFor="corrida">
            Corrida
          </label>
        </div>

      </div>

      
      <div className="mb-4">

        <h6 className="fw-bold">
          Gênero
        </h6>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="masculino"
          />
          <label className="form-check-label" htmlFor="masculino">
            Masculino
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="feminino"
          />
          <label className="form-check-label" htmlFor="feminino">
            Feminino
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="unisex"
          />
          <label className="form-check-label" htmlFor="unisex">
            Unisex
          </label>
        </div>

      </div>

    
      <div>

        <h6 className="fw-bold">
          Estado
        </h6>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="estado"
            id="novo"
          />

          <label className="form-check-label" htmlFor="novo">
            Novo
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="estado"
            id="usado"
          />

          <label className="form-check-label" htmlFor="usado">
            Usado
          </label>
        </div>

      </div>

    </div>

  )
}

export default SidebarFilter