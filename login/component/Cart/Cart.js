import styles from './Cart.module.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsById } from "@/Redux/actions/productActions"
import CartImg from "./CartImage/CartImg"
import { toast } from 'react-hot-toast'
import { IncreaseItemFromCart } from '@/Redux/actions/cartActions'

const Cart = ({ data, totaltem, handleDelete, setPrice }) => {

  console.log(totaltem, "total tem")

  const dispatch = useDispatch();
  const selector = useSelector(state => state.products);
  const { loading, error, idItems } = selector;
  const [Increase, setIncrease] = useState(totaltem);

  const IncreaseItems = () => {
    let cnt = Increase;
    if (Increase < 5) {
      cnt = cnt + 1;
      dispatch(IncreaseItemFromCart(data, cnt));
      setIncrease(cnt);
    } else {
      toast.success('Items Not More than 5')
    }
  }

  const DecreaseItems = () => {
    let cnt = Increase
    if (Increase > 1 && Increase <= 5) {
      cnt = cnt - 1;
      setIncrease(cnt)
      dispatch(IncreaseItemFromCart(data, cnt));
    }
    else { return }
  }

  useEffect(() => {
    dispatch(fetchProductsById(data))
  }, [dispatch])

  useEffect(() => {
    setPrice(idItems)
  }, [idItems])

  return (
    <>
      <div className={styles.cart} >
        <div>
          {idItems?.map((item, index) => {
            console.log(item, "price")
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
                        <span>{item.Price}</span>
                        <small className={styles.discoutdetails} >20% off</small>
                      </div>
                    </div>
                  </div>

                  <div className={styles.someCartbtn} >
                    <div className={styles.Increasebtns} >
                      <button className={styles.Incbtn} onClick={DecreaseItems} >-</button>
                      <span>{Increase}</span>
                      <button className={styles.Decbtn} onClick={IncreaseItems} >+</button>
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
