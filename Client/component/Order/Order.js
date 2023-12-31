import styles from './Order.module.css'
import Img from './Image/Img';
import { Button, Divider, Typography } from '@mui/material';

const Order = ({ data, setActive}) => {
  return (
    <>
      <div className={styles.cart} >
        <div className={styles.addresshead}  >
          <Typography sx={{ fontWeight: 600 }} > Details</Typography>
        </div>
        {data?.map((item, indx) => {
          return (
            <>
              <div key={indx} className={styles.CartItems} >
                <div className={styles.productanddetails} >
                  <div className={styles.cartImg} >
                    <Img images={item.productId.image} />
                  </div>

                  <div className={styles.ItemDetalis} >
                    <div className={styles.title} >{item?.productId.title}</div>
                    <div className={styles.sizecart} >Size: M </div>
                    <div className={styles.exactPrice} >
                      <span> ₹{item?.productId.price}</span>
                      <small className={styles.discoutdetails} >20% off</small>
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
            </>
          )
        })
        }
        <div className={styles.someCartbtn} >
          <Button variant='contained' onClick={()=>{setActive(3)}} >Continue</Button>
        </div>
      </div>
    </>
  )
}

export default Order
