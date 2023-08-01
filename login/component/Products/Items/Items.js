import Image from 'next/image'
import styles from './Items.module.css'
import React from 'react'
import pic2 from '../../../image/m-51vs1058kr-vasant-apparel-original-imaggjekg2nug2ex-bb.webp'
import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';

const Items = () => {
  return (
    <>
      <div className={styles.items} >

        <Link href={'/filter'} className={styles.ItemsCard} >
          <div className={styles.ItemImg} ><Image src={pic2} /></div>
          <div className={styles.ImgDetails} >
            <div>Women ethics cloths that wear by a single womens</div>

            <div className={styles.price} >
              <span> ₹ 300 </span>
              <small>onwards</small>
            </div>

            <div className={styles.delivery} > free delivery </div>

            <div className={styles.rating} >
              <span>3.8 <AiFillStar /> </span>
              <small>12546 Review</small>
            </div>
          </div>
        </Link>

        <Link href={'/filter'} className={styles.ItemsCard} >
          <div className={styles.ItemImg} ><Image src={pic2} /></div>
          <div className={styles.ImgDetails} >
            <div>Women ethics cloths that wear by a single womens</div>

            <div className={styles.price} >
              <span> ₹ 300 </span>
              <small>onwards</small>
            </div>

            <div className={styles.delivery} > free delivery </div>

            <div className={styles.rating} >
              <span>3.8 <AiFillStar /> </span>
              <small>12546 Review</small>
            </div>
          </div>
        </Link>

        <Link href={'/filter'} className={styles.ItemsCard} >
          <div className={styles.ItemImg} ><Image src={pic2} /></div>
          <div className={styles.ImgDetails} >
            <div>Women ethics cloths that wear by a single womens</div>

            <div className={styles.price} >
              <span> ₹ 300 </span>
              <small>onwards</small>
            </div>

            <div className={styles.delivery} > free delivery </div>

            <div className={styles.rating} >
              <span>3.8 <AiFillStar /> </span>
              <small>12546 Review</small>
            </div>
          </div>
        </Link>

        <Link href={'/filter'}  className={styles.ItemsCard} >
          <div className={styles.ItemImg} ><Image src={pic2} /></div>
          <div className={styles.ImgDetails} >
            <div>Women ethics cloths that wear by a single womens</div>

            <div className={styles.price} >
              <span> ₹ 300 </span>
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
