import React from 'react'
import Items from './Items/Items'
import styles from './Product.module.css'
import Filter from './Filter/Filter'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { fetchQueryProducts } from '@/Redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
  const router = useRouter()
  const { data } = router.query
  const dispatch = useDispatch()
  const productData = useSelector(state => state.products)
  const { error, loading, queryItems } = productData;

  useEffect(() => {
    dispatch(fetchQueryProducts(data))
  }, [data])

  return (
    <>
      <div className={styles.filterProducts} >
        <div className={styles.filter} >
          <Filter />
        </div>
        <div className={styles.ItemsProducts} >
          {queryItems?.map((products, idx) => {
            return (
              <>
                <Items product={products} key={idx} />
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Product
