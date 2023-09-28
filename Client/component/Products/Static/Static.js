import React from 'react'
import styles from './Static.module.css'
import Image from 'next/image'
import { CiDeliveryTruck } from 'react-icons/ci';
import { GiTakeMyMoney } from 'react-icons/gi';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { MdOutlineSwipeDownAlt } from 'react-icons/md';
import { FaShopify } from 'react-icons/fa';
import '../../../app/globals.css'

const Static = ({ heading, pic }) => {
    return (
        <>
            <div className={styles.imglandingPageText} >
                <div className={styles.durgesh} >
                    <div><span className={styles.landingPageTextheading} > Lowest Prices <br />Best Quality Shopping </span> </div>
                    <div><span className={styles.landingPageTextsmall} >Get 50% off Per day on Every Products  </span> </div>
                    <div className={styles.someIcons}> <CiDeliveryTruck className={styles.IconsBrd} />  Free delivery | <GiTakeMyMoney className={styles.IconsBrd} /> Cash on delivery | <FaHandHoldingUsd className={styles.IconsBrd} /> Easy return</div>
                    <div className={styles.landingbtn} > <button>Purchase now</button> </div>
                    <div className={styles.socialsIcons} >
                        <MdOutlineSwipeDownAlt className={styles.exclamation} />
                    </div>
                </div>
                <div className={styles.Shopify} ><FaShopify /></div>
            </div>

            <div className={styles.chooseItems} >
                <div><span>{heading ? heading : ''}</span> </div>
                <div className={styles.StatImg} >
                    <Image src={pic} className={styles.imageStatic} />
                </div>
            </div>
        </>
    )
}

export default Static
