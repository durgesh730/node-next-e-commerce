import { Divider } from '@mui/material'
import React from 'react'
import styles from './Total.module.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Total = () => {
  return (
    <>
      <div className={styles.total} >
        <div className={styles.Pricedetails} > PRICE DETAILS</div>
        <Divider />
        <div className={''} >
          <TableContainer className={styles.detailstable} sx={{ width: 300, boxShadow: "none" }} component={Paper}>
            <Table size="small" aria-label="simple table">
              <TableHead>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                  <TableCell>Price</TableCell>
                  <TableCell>₹500</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">Delivery Charges</TableCell>
                  <TableCell>Fee</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">Total Item</TableCell>
                  <TableCell>1</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Divider />

          <div className={styles.grandtotal} >
          <TableContainer sx={{ width: 370, boxShadow: "none" }} component={Paper}>
            <Table size="small" aria-label="simple table">
              <TableHead>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                  <TableCell className={styles.totalrupee} >Total</TableCell>
                  <TableCell className={styles.totalrupee} >12563</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          </div>
          <Divider />
        </div>
      </div>
    </>
  )
}

export default Total
