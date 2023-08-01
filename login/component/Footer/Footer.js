import React from 'react';
import styles from './Footer.module.css';
import { BsLinkedin } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { GrYoutube } from 'react-icons/gr'
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className={styles.Main_pagebottomNav}>
                <div className={styles.logotext} ><span className={styles.logo} >Durgesh</span><br /> <small className={styles.alpha} >Alpha e-commerces</small> </div>
                <ul className={styles.nav_itemlist}>
                    <div className={styles.about} >
                        <h5 href='#'>About</h5>

                        <a>Contact Us</a><br />
                        <a>About Us</a><br />
                        <a>Careers</a><br />
                        <a>Press</a><br />
                        <a>Flipkart Wholesale</a><br />
                        <a>Corporate Information</a><br />
                    </div>
                    
                    <div className={styles.about} >
                        <h5 href='#about'>Help</h5>
                        <a>Payments</a><br />
                        <a>Shipping</a><br />
                        <a>Cancellation & Returns</a><br />
                        <a>FAQ</a><br />
                        <a>Report Infringement</a><br />
                    </div>
                    <div className={styles.about} >
                        <h5 href='#experiance'>CONSUMER POLICY</h5>
                        <a>Cancellation & Returns</a><br />
                        <a>Terms Of Use</a><br />
                        <a>Security</a><br />
                        <a>Privacy</a><br />
                        <a>Sitemap</a><br />
                        <a>Grievance Redressal</a><br />
                        <a>EPR Compliance</a><br />
                    </div>
                    <div>
                        <h5 href='#contact'>SOCIAL</h5>
                        <div className={styles.footer_socials_MainPage}>
                            <a href="https://www.linkedin.com/in/durgesh-chaudhary-535a76211/" target="_blank"><BsLinkedin /></a>
                            <a href="https://www.instagram.com/_durgesh.chaudhary/" target="_blank"><FiInstagram /></a>
                            <a href="https://www.youtube.com/@nanochat" target="_blank"><GrYoutube /></a>
                            <a href="https://www.youtube.com/@nanochat" target="_blank"><FaTwitter /></a>
                        </div>
                    </div>
                </ul>

                <div className={styles.line}></div>
                <div className={styles.footer_copyright_MainPage}>
                    <small>&copy; Durgesh Chaudhary. ALL rights reserved</small>
                </div>
            </div>
        </>
    )
}

export default Footer
