function SidebarFilter() {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h4 className="fw-bold mb-4">Filtrar por</h4>

      <div className="mb-4">
        <h6 className="fw-bold">Marca</h6>

        <div className="form-check">
          <input id="adidas" className="form-check-input" type="checkbox" />
          <label htmlFor="adidas" className="form-check-label">
            Adidas
          </label>
        </div>

        <div className="form-check">
          <input id="calenciaga" className="form-check-input" type="checkbox" />
          <label htmlFor="calenciaga" className="form-check-label">
            Calenciaga
          </label>
        </div>

        <div className="form-check">
          <input id="k-swiss" className="form-check-input" type="checkbox" />
          <label htmlFor="k-swiss" className="form-check-label">
            K-Swiss
          </label>
        </div>

        <div className="form-check">
          <input id="nike" className="form-check-input" type="checkbox" />
          <label htmlFor="nike" className="form-check-label">
            Nike
          </label>
        </div>

        <div className="form-check">
          <input id="puma" className="form-check-input" type="checkbox" />
          <label htmlFor="puma" className="form-check-label">
            Puma
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h6 className="fw-bold">Categoria</h6>

        <div className="form-check">
          <input id="esporteelazer" className="form-check-input" type="checkbox" />
          <label htmlFor="esporteelazer" className="form-check-label">
            Esporte e lazer
          </label>
        </div>

        <div className="form-check">
          <input id="casual" className="form-check-input" type="checkbox" />
          <label htmlFor="casual" className="form-check-label">
            Casual
          </label>
        </div>

        <div className="form-check">
          <input id="utilitario" className="form-check-input" type="checkbox" />
          <label htmlFor="utilitario" className="form-check-label">
            Utilitário
          </label>
        </div>

        <div className="form-check">
          <input id="corrida" className="form-check-input" type="checkbox" />
          <label htmlFor="corrida" className="form-check-label">
            Corrida
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h6 className="fw-bold">Gênero</h6>

        <div className="form-check">
          <input id="masculino" className="form-check-input" type="checkbox" />
          <label htmlFor="masculino" className="form-check-label">
            Masculino
          </label>
        </div>

        <div className="form-check">
          <input id="feminino" className="form-check-input" type="checkbox" />
          <label htmlFor="feminino" className="form-check-label">
            Feminino
          </label>
        </div>

        <div className="form-check">
          <input id="unisex" className="form-check-input" type="checkbox" />
          <label htmlFor="unisex" className="form-check-label">
            Unisex
          </label>
        </div>
      </div>

      <div>
        <h6 className="fw-bold">Estado</h6>

        <div className="form-check">
          <input
            id="novo"
            className="form-check-input"
            type="radio"
            name="estado"
          />
          <label htmlFor="novo" className="form-check-label">
            Novo
          </label>
        </div>

        <div className="form-check">
          <input
            id="usado"
            className="form-check-input"
            type="radio"
            name="estado"
          />
          <label htmlFor="usado" className="form-check-label">
            Usado
          </label>
        </div>
      </div>
    </div>
  );
}

export default SidebarFilter;
