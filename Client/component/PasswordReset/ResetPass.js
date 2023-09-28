import Link from 'next/link'
import styles from './ResetPass.module.css'
import { useState } from 'react';

const ResetPass = () => {

  const [passShow, setPassshow] = useState(false);
  const [cpassShow, setCPassshow] = useState(false);

  const loginuser = () => {

  }

  return (
    <>
      <section className={styles.login}>
        <div className={styles.loginimg}>
          <h2>Reset Your Password</h2>
          <p>Hi, we are you glad you are back.<br /> Please login</p>
        </div>
        <div className={styles.form_data}>
          <form>
            <div className={styles.form_input}>
              <label htmlFor='password'>Password</label>
              <div className={styles.two}>
                <input type={!passShow ? "password" : "text"} name="password" id='password' placeholder='Enter Your password' />
                <div className={styles.showpass} onClick={() => setPassshow(!passShow)}>
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <div className={styles.form_input}>
              <label htmlFor='password'>Confirm Password</label>
              <div className={styles.two}>
                <input type={!cpassShow ? "password" : "text"} name="password" id='password' placeholder='Enter Your password' />
                <div className={styles.showpass} onClick={() => setCPassshow(!cpassShow)}>
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className={styles.btn} onClick={loginuser} >Reset Password</button>
            <p>Don't have an Account? <Link href="/signup"> Sign Up</Link></p>
          </form>
        </div>
      </section>
    </>
  )
}

export default ResetPass
