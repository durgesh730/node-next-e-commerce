import React from 'react'
import Items from './Items/Items'
import styles from './Product.module.css'
import Filter from './Filter/Filter'

const Product = () => {
  return (
    <>
      <div className={styles.filterProducts} >
        <div className={styles.filter} >
          <Filter />
        </div>
        <div className={styles.ItemsProducts} >
          <Items />
          <Items />
          <Items />
        </div>
      </div>
    </>
  )
}

export default Product
