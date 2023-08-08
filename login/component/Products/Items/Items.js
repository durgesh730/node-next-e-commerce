import Image from 'next/image'
import styles from './Items.module.css'
import React from 'react'
import pic2 from '../../../image/m-51vs1058kr-vasant-apparel-original-imaggjekg2nug2ex-bb.webp'
import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';

const Items = ({product}) => {
  console.log(product, "lkck")
  return (
    <>
      <div className={styles.items} >
        <Link href={'/filter'} className={styles.ItemsCard} >
          <div className={styles.ItemImg} ><Image src={product?.Images[0]} width={500} height={500} alt='images' /></div>
          <div className={styles.ImgDetails} >
            <div>{product?.Title}</div>

            <div className={styles.price} >
              <span> ₹ {product?.Price} </span>
              <small>onwards</small>  
            </div>

            <div className={styles.delivery} > free delivery </div>

            <div className={styles.rating} >
              <span>3.8 <AiFillStar /> </span>
              <small>12546 Review</small>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Items
