import styles from './Cart.module.css'
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from 'react-hot-toast'
import { IncreaseItemFromCart } from '@/Redux/actions/cartActions'
import Image from 'next/image';

const Cart = ({ data, handleDelete, index, setTotal, total, setIncrease, Increase, totalp }) => {
  const dispatch = useDispatch();


  // console.log()

  const IncreaseItems = () => {
    let cnt = Increase;
    if (Increase < 5) {
      cnt = cnt + 1;
      dispatch(IncreaseItemFromCart(data?.Id, cnt));
      setIncrease(cnt);
      setTotal(totalp)
    } else {
      toast.success('Items Not More than 5')
    }
  }

  const DecreaseItems = (id) => {
    let cnt = Increase
    if (Increase > 1 && Increase <= 5) {
      cnt = cnt - 1;
      setIncrease(cnt)
      setTotal(totalp)
      dispatch(IncreaseItemFromCart(data?.Id, cnt));
    }
    else { return }
  }

  return (
    <>
      <div className={styles.cart} >
        <div className={styles.CartItems} >
          <div className={styles.productanddetails} >
            <div className={styles.cartImg} >
              <Image src={data?.Images[0]} alt={data?.title || 'Product Image'} width={500} height={600} />
            </div>

            <div className={styles.ItemDetalis} >
              <div className={styles.title} >{data?.Title}</div>
              <div className={styles.sizecart} >Size: M </div>
              <div className={styles.exactPrice} >
                <span> ₹{data?.Price}</span>
                <small className={styles.discoutdetails} >20% off</small>
              </div>
            </div>
          </div>

          <div className={styles.someCartbtn} >
            <div className={styles.Increasebtns} >
              <button className={styles.Incbtn} onClick={() => DecreaseItems(index)} >-</button>
              <span>{Increase}</span>
              <button className={styles.Decbtn} onClick={() => IncreaseItems()} >+</button>
            </div>

            <div className={styles.removebtn} >
              <button onClick={() => { handleDelete(data.Id) }} >REMOVE </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
