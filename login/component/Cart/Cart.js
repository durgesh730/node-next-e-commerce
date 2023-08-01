import Image from "next/image"
import Total from "./Total/Total"
import styles from './Cart.module.css'
import pic from '../../image/m-auk0166-ausk-original-imagzbp8nmczhvxg.webp'
import { Button } from "@mui/material"

const Cart = () => {
  return (
    <>
      <div className={styles.cart} >
        <div>
          <div className={styles.CartItems} >
            <div className={styles.productanddetails} >
              <div className={styles.cartImg} >
                <Image src={pic} />
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
                <button>REMOVE </button>
              </div>
            </div>
          </div>

          <div className={styles.buybothbtn} >
            <Button className={styles.backtoshopbtn} variant="contained">
              Back to shop
            </Button>
            <Button className={styles.buybtn} variant="contained">
              place order
            </Button>
          </div>
        </div>

        <div className={styles.sidetotalCom} >
          <Total />
        </div>
      </div>
    </>
  )
}

export default Cart
