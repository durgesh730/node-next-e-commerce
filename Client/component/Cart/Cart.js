import styles from './Cart.module.css'
import { useDispatch } from "react-redux"
import Image from 'next/image';

const Cart = ({
  data,
  handleDelete,
  DecreaseItems,
  IncreaseItems,
}) => {

  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.cart} >
        <div className={styles.CartItems} >
          <div className={styles.productanddetails} >
            <div className={styles.cartImg} >
              <Image src={data.productId?.image[0]} alt={data?.title || 'Product Image'} width={500} height={600} />
            </div>

            <div className={styles.ItemDetalis} >
              <div className={styles.title} >{data.productId?.title}</div>
              <div className={styles.sizecart} >Size: M </div>
              <div className={styles.exactPrice} >
                <span> ₹{data.productId?.price}</span>
                <small className={styles.discoutdetails} >20% off</small>
              </div>
            </div>
          </div>

          <div className={styles.someCartbtn} >
            <div className={styles.Increasebtns} >
              <button className={styles.Incbtn} onClick={DecreaseItems} >-</button>
              <span>{data.totalItem}</span>
              <button className={styles.Decbtn} onClick={IncreaseItems} >+</button>
            </div>

            <div className={styles.removebtn} >
              <button onClick={() => { handleDelete(data.productId._id) }} >REMOVE </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
