import styles from './Order.module.css'
import Img from './Image/Img';
import { Button, Divider, Typography } from '@mui/material';


const Order = ({ data, setActive }) => {
  const pro = data
  return (
    <>
      <div className={styles.cart} >
        <div className={styles.addresshead}  >
          <Typography sx={{ fontWeight: 600 }} > Details</Typography>
        </div>
        {pro?.map((item, indx) => {
          return (
            <>
              <div key={indx} className={styles.CartItems} >
                <div className={styles.productanddetails} >
                  <div className={styles.cartImg} >
                    <Img images={item.Images} />
                  </div>

                  <div className={styles.ItemDetalis} >
                    <div className={styles.title} >{item?.Title}</div>
                    <div className={styles.sizecart} >Size: M </div>
                    <div className={styles.exactPrice} >
                      <span> ₹{item?.Price}</span>
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
