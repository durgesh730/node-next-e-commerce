import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './Nodata.module.css'

const Nodata = () => {
    return (
        <>
            <Box className = {styles.Nodatafound} >
                <Typography>
                    No Data Found
                </Typography>
            </Box>
        </>
    )
}

export default Nodata
