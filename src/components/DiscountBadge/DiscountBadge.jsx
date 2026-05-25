import React from 'react'
import styles from './DiscountBadge.module.scss'
const DiscountBadge = ({discountAmount}) => {
  return (
    <span
                  className={`py-1 px-3 m-0 text-dark-gray fw-bold ${styles.badge}`}
                >
                  {discountAmount}% OFF
                </span>
  )
}

export default DiscountBadge