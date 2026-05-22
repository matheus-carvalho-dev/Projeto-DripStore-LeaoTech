import Card from 'react-bootstrap/Card'
import styles from './ProductCard.module.css'

function ProductCard({ product }) {

  return (

    <Card className={styles.card}>

      {product.discount && (

        <div className={styles.discount}>
          30% OFF
        </div>

      )}

      <div className={styles.imageContainer}>

        <Card.Img
          src={product.image}
          className={styles.image}
        />

      </div>

      <Card.Body>

        <small className={styles.old}>
          Tênis
        </small>

        <Card.Title className={styles.title}>
          {product.name}
        </Card.Title>

        <div className="d-flex gap-2 align-items-center">

          <span className={styles.oldPrice}>
            $200
          </span>

          <span className={styles.price}>
            ${product.price}
          </span>

        </div>

      </Card.Body>

    </Card>

  )
}

export default ProductCard