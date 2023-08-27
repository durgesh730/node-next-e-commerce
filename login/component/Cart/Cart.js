import styles from './Cart.module.css'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsById } from "@/Redux/actions/productActions"
import CartImg from "./CartImage/CartImg"

const Cart = ({ data, handleDelete }) => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state.products)
  const { loading, error, idItems } = selector

  useEffect(() => {
    dispatch(fetchProductsById(data))
  }, [dispatch])

  return (
    <>
      <div className={styles.cart} >
        <div>
          {idItems?.map((item, index) => {
            return (
              <>
                <div className={styles.CartItems} >
                  <div className={styles.productanddetails} >
                    <div className={styles.cartImg} >
                      <CartImg item={item?.Images} />
                    </div>

                    <div className={styles.ItemDetalis} >
                      <div className={styles.title} >Products name not larger than 50 words</div>
                      <div className={styles.sizecart} >Size: M </div>
                      <div className={styles.exactPrice} >
                        <span>₹500</span>
                        <small className={styles.discoutdetails} >20% off</small>
                      </div>
                    </div>
                  </div>

                  <div className={styles.someCartbtn} >
                    <div className={styles.Increasebtns} >
                      <button className={styles.Incbtn} >-</button>
                      <span>1</span>
                      <button className={styles.Decbtn} >+</button>
                    </div>

                    <div className={styles.removebtn} >
                      <button onClick={() => { handleDelete(item.Id) }} >REMOVE </button>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Cart
