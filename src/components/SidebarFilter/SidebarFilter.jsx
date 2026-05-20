
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
          <input className="form-check-input" type="checkbox"  />
          <label className="form-check-label">
            Adidas
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label">
            Calenciaga
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label">
            K-Swiss
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label">
            Nike
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label">
            Puma
          </label>
        </div>

      </div>


      <div className="mb-4">

        <h6 className="fw-bold">
          Categoria
        </h6>

        <div className="form-check">
          <input className="form-check-input" type="checkbox"  />
          <label className="form-check-label">
            Esporte e lazer
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label">
            Casual
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label">
            Utilitário
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label">
            Corrida
          </label>
        </div>

      </div>

      
      <div className="mb-4">

        <h6 className="fw-bold">
          Gênero
        </h6>

        <div className="form-check">
          <input className="form-check-input" type="checkbox"  />
          <label className="form-check-label">
            Masculino
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox"  />
          <label className="form-check-label">
            Feminino
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label">
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
        
          />

          <label className="form-check-label">
            Novo
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="estado"
          />

          <label className="form-check-label">
            Usado
          </label>
        </div>

      </div>

    </div>

  )
}

export default SidebarFilter