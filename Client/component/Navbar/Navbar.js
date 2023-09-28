import React from 'react'
import styles from './Navbar.module.css'
import Seachbar from './Search/Seachbar'
import { BsCart3 } from 'react-icons/bs';
import { PiUserLight } from 'react-icons/pi';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div className={styles.english} >
        <div className={styles.offertext} >
          <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!ShopNow</span> </div>
        <div className={styles.lang} > <span>English</span></div>
      </div>

      <div className={styles.topnav} >
        <Link href={'/'}><span className={styles.logo} >Durgesh</span><br /> <small className={styles.alpha} >Alpha e-commerces</small> </Link>
        <div> <Seachbar /> </div>
        <div className={styles.RegSigCart} >
          <Link href={'/signup'}>Register</Link>
          <Link href={'/login'} className={styles.navSign} ><PiUserLight /> Sign in</Link>
          <Link href={'/cart'} className={styles.navcart} ><BsCart3 />  Cart </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
