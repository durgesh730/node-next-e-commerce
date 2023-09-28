import React from 'react'
import styles from './Filter.module.css'
import Checkbox from '@mui/material/Checkbox';

const Filter = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
            <div className={styles.filter} >
                <div className={styles.filterOptions} >
                    <div>Filters</div>
                    <div className={styles.clearAll} >CLEAR ALL</div>
                </div>

                <div className={styles.pricefilter} >
                    <h2>Price</h2>
                    <div className={styles.minmax} >
                        <select className={styles.select} >
                            <option>below ₹500</option>
                            <option>below ₹1000</option>
                            <option>below ₹1500</option>
                            <option>below ₹2000</option>
                        </select>
                    </div>
                </div>

                <div className={styles.brandfilter} >
                    <h5 className={styles.headstext}  >Brand</h5><br />
                    <div className={styles.minmax} >
                        <div ><Checkbox
                            {...label}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 23 } }}
                        /></div>
                        <div className={styles.pricecheck} ><label for="vehicle1">Aurelia</label></div>
                    </div>
                    <div className={styles.minmax} >
                        <div ><Checkbox
                            {...label}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 23 } }}
                        /></div>
                        <div className={styles.pricecheck} ><label for="vehicle1">Puma</label></div>
                    </div>
                    <div className={styles.minmax} >
                        <div ><Checkbox
                            {...label}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 23 } }}
                        /></div>
                        <div className={styles.pricecheck} ><label for="vehicle1">U.S Polo</label></div>
                    </div>
                    <div className={styles.minmax} >
                        <div ><Checkbox
                            {...label}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 23 } }}
                        /></div>
                        <div className={styles.pricecheck} ><label for="vehicle1">Adidas</label></div>
                    </div>
                </div>

                <div className={styles.filterdiscount} >
                    <h2 className={styles.headstext}  >Discount</h2><br />
                    <div className={styles.minmax} >
                        <div ><Checkbox
                            {...label}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 23 } }}
                        /></div>
                        <div className={styles.pricecheck} ><label for="vehicle1">20%</label></div>
                    </div>

                    <div className={styles.minmax} >
                        <div ><Checkbox
                            {...label}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 23 } }}
                        /></div>
                        <div className={styles.pricecheck} ><label for="vehicle1">30%</label></div>
                    </div>

                    <div className={styles.minmax} >
                        <div ><Checkbox
                            {...label}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 23 } }}
                        /></div>
                        <div className={styles.pricecheck} ><label for="vehicle1">40%</label></div>
                    </div>

                    <div className={styles.minmax} >
                        <div ><Checkbox
                            {...label}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 23 } }}
                        /></div>
                        <div className={styles.pricecheck} ><label for="vehicle1">50%</label></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter
