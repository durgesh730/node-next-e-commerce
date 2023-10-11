import { Divider } from '@mui/material'
import React, { useEffect } from 'react'
import styles from './Total.module.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

const Total = () => {

  const select = useSelector((state) => state.products);
  const { totalItems, totalPrice } = select

  console.log(totalItems, totalPrice, "durgesh chaudhary")
  
  return (
    <>
      <div className={styles.total} >
        <div className={styles.Pricedetails} > PRICE DETAILS</div>
        <Divider />
        <TableContainer className={styles.detailstable} sx={{ width: 350, boxShadow: "none" }} component={Paper}>
          <Table size="small" aria-label="simple table">
            <TableHead>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0, paddingTop: "1rem" } }} >
                <TableCell>Price</TableCell>
                <TableCell>₹{ }</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0, paddingTop: "1rem" } }}>
                <TableCell component="th" scope="row">Delivery Charges</TableCell>
                <TableCell>Fee</TableCell>
              </TableRow>
            </TableBody>

            <TableBody>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0, paddingTop: "1rem", paddingBottom: "1rem" } }}>
                <TableCell component="th" scope="row">Total Item</TableCell>
                <TableCell>{ }</TableCell>
              </TableRow>
            </TableBody>

            <TableBody>
              <TableRow sx={{ '&:last-child td, &:last-child th': { borderTop: 1, borderColor: "#F1F3F6" } }}>
                <TableCell className={styles.totalrupee} >Total</TableCell>
                <TableCell className={styles.totalrupee} >₹{ }</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>


        {/* <div className={styles.grandtotal} >
          <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
            <Table size="small" aria-label="simple table">
              <TableHead>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          </div> */}
        {/* <Divider /> */}
      </div>
    </>
  )
}

export default Total
