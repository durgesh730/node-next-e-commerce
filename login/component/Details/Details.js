import React from 'react'
import styles from './Details.module.css'
import pic from '../../image/m-51vs1058kr-vasant-apparel-original-imaggjekg2nug2ex-bb.webp'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Details = () => {

  return (
    <>
      <div className={styles.Details}>
        <div className={styles.Imgdetails} >

          <div className={styles.onlyImgs}>
            <div className={styles.Imgs} >
              <div className={styles.SmallImg} >
                <Image className={styles.SmallSingle} src={pic} />
                <Image className={styles.SmallSingle} src={pic} />
                <Image className={styles.buttonImg} src={pic} />
              </div>
              <div className={styles.BigestImg} >
                <Image src={pic} />
              </div>
            </div>

            <div className={styles.Cartbtnboth} >
              <button className={styles.crtbtn} >ADD TO CART</button>
              <button className={styles.buybtn} >BUY NOW</button>
            </div>
          </div>

            <div className={styles.SideDetails} >
              <div className={styles.brandName} > BRAND</div>

              <div className={styles.title} >
                <span> title of cloths and women whose cloths title of cloths and women whose cloths </span>
              </div>
              <div className={styles.priceSpecial}> <span>Price</span></div>
              <div className={styles.exactPrice} >
                <span>₹500</span>
                <small className={styles.discoutdetails} >20% off</small>
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
