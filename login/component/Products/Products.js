import React from 'react'
import Static from './Static/Static'
import Items from './Items/Items'
import styles from "./Products.module.css"
import pic1 from '../../image/durgesh.png'
// import pic2 from '../../image/Untitled design (6).png'

const Products = () => {
    return (
        <>
            <Static pic={pic1} heading={"Top Categories to choose from"} />
            
            <div className={styles.ItemsHeading} ><span>Products For You</span></div>
            <Items />
            <Items />
            <Items />

            <div className={styles.ItemsHeading} > <span>Top Produts For You</span> </div>
            <Items />
            <Items />
            <div className={styles.foronlyMergin} ></div>
        </>
    )
}

export default Products
