import React from 'react'
import styles from './Details.module.css'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { AddtoCart } from '@/Redux/actions/cartActions';

const Details = ({ product }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const selector = useSelector(state=> state.cart)
  const {loading, error, cart} = selector

  console.log(loading, error, cart, "three of sum")

  const handlecart = (id) => {
    dispatch(AddtoCart(id))
    // router.push('/cart')
  }

  return (
    <>
      <div className={styles.Details}>
        <div className={styles.Imgdetails} >

          <div className={styles.onlyImgs}>
            <div className={styles.Imgs} >
              <div className={styles.SmallImg} >
                <Image className={styles.SmallSingle} src={product?.Images[0]} width={500} height={500} alt='img' />
                <Image className={styles.SmallSingle} src={product?.Images[1]} width={500} height={500} alt='img' />
                <Image className={styles.buttonImg} src={product?.Images[2]} width={500} height={500} alt='img' />
              </div>
              <div className={styles.BigestImg} >
                <Image src={product?.Images[0]} width={500} height={500} alt='img' />
              </div>
            </div>

            <div className={styles.Cartbtnboth} >
              <button className={styles.crtbtn} onClick={() => handlecart(product.Id)} >ADD TO CART</button>
              <button className={styles.buybtn} >BUY NOW</button>
            </div>
          </div>

          <div className={styles.SideDetails} >
            <div className={styles.brandName} >{product?.Brand.toUpperCase()}</div>

            <div className={styles.title} >
              <span>{product?.Title}</span>
            </div>
            <div className={styles.priceSpecial}> <span>Price</span></div>
            <div className={styles.exactPrice} >
              <span>₹{product?.Price}</span>
              <small className={styles.discoutdetails} >{product?.Discount} % off</small>
            </div>
            <div className={styles.rating} >
              <span>3.8 <AiFillStar /> </span>
              <small className={styles.ratingdetails} >431 ratings and 6352 Review</small>
            </div>

            <div className={styles.size} >
              <div className={styles.Sizeheading} ><span>Size</span> </div>
              <div>
                <small className={styles.small} >S</small>
                <small className={styles.small} >M</small>
                <small className={styles.small} >L</small>
                <small className={styles.small} >XL</small>
                <small className={styles.small} >XXL</small>
              </div>
            </div>

            <div className={styles.productDetails}>
              <h4> Product Details</h4>
              <TableContainer sx={{ width: 350, boxShadow: "none" }} component={Paper}>
                <Table size="small" aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                      <TableCell>Desert</TableCell>
                      <TableCell>Type</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">Size</TableCell>
                      <TableCell>M</TableCell>
                    </TableRow>
                  </TableBody>

                  <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row"> Pack of </TableCell>
                      <TableCell>1</TableCell>
                    </TableRow>
                  </TableBody>

                  <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">Neck</TableCell>
                      <TableCell>Round Neck</TableCell>
                    </TableRow>
                  </TableBody>

                  <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row"> Fabric </TableCell>
                      <TableCell>Pure Cotton</TableCell>
                    </TableRow>
                  </TableBody>

                  <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row"> Fit </TableCell>
                      <TableCell>OverSized</TableCell>
                    </TableRow>
                  </TableBody>

                </Table>
              </TableContainer>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Details
