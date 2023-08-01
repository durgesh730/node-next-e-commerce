import Link from 'next/link'
import styles from './Login.module.css'
import { useState } from 'react';

const Login = () => {
  const [passShow, setPassshow] = useState(false);

  const loginuser =()=>{
    
  }

  return (
    <>
      <section className={styles.login}>
        <div className={styles.loginimg}>
          <h2>Welcome to Login</h2>
          <p>Hi, we are you glad you are back.<br /> Please login</p>
          {/* <img src={'/'} alt="img"></img> */}
        </div>
        <div className={styles.form_data}>
          <form>
            <div className={styles.form_input}>
              <label htmlFor='email'>Email</label>
              <input type='email' name="email" id='email' placeholder='Enter Your Email Address' />
            </div>

            <div className={styles.form_input}>
              <label htmlFor='password'>Password</label>
              <div className={styles.two}>
                <input type={!passShow ? "password" : "text"} name="password" id='password' placeholder='Enter Your password' />
                <div className={styles.showpass} onClick={() => setPassshow(!passShow)}>
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className={styles.btn} onClick={loginuser} >Login</button>
            <p>Don't have an Account? <Link href="/signup"> Sign Up</Link></p>
            <p>Forgot Password: <Link href="/resetpassword"> Click Here</Link></p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
