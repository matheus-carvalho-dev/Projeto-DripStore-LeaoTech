import Card from 'react-bootstrap/Card'

function ProductCard({ product }) {

  return (

    <Card className="border-0 shadow-sm h-100">

      
      {product.discount && (

        <div
          className="position-absolute mt-2 ms-2 px-2 py-1 rounded bg-success"
          style={{
            backgroundColor: '#d8ffb2',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
        >
          30% OFF
        </div>

      )}

    
      <div
        className="bg-light d-flex justify-content-center align-items-center"
        style={{
          height: '200px'
        }}
      >

        <Card.Img
          src={product.image}
          style={{
            width: '90%',
            objectFit: 'contain'
          }}
        />

      </div>

    
      <Card.Body>

        
        <small className="text-secondary">
          Tênis
        </small>

      
        <Card.Title
          className="mt-2"
          style={{
            fontSize: '18px'
          }}
        >
          {product.name}
        </Card.Title>

        
        <div className="d-flex gap-2 align-items-center">

          
          <span
            className="text-secondary"
            style={{
              textDecoration: 'line-through'
            }}
          >
            $200
          </span>

          
          <span className="fw-bold fs-4">
            ${product.price}
          </span>

        </div>

      </Card.Body>

    </Card>

  )
}

export default ProductCard
