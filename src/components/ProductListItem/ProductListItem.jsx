import React from 'react'
import { Link } from 'react-router-dom'
import ProductCardd from '../ProductCardd/ProductCardd'
const ProductListItem = ({product}) => {
  
  return (
    <div className="col-6 col-lg-3">
            <Link className="text-decoration-none text-reset">
              <ProductCardd
                imgSrc={product.image}
                category={product.category}
                name={product.name}
                price={product.price}
                discount={product.discount}
                discountAmount={product.discountAmount}
                alt={product.name}
              />
            </Link>
          </div>
  )
}

export default ProductListItem