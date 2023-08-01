import React, { useState } from 'react'
import styles from './Register.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '@/Redux/actions/userActions';

const Register = () => {
  const [passShow, setPassshow] = useState(false);
  const [cpassShow, setCPassshow] = useState(false);

  const dispatch = useDispatch();
  const userRegister = useSelector(state => state.user);
  // get user data from response
  const { userInfo, error } = userRegister

  console.log(userInfo, error)
  const Registeruser = (e) => {
    e.preventDefault();
    dispatch(register('email8', 'password'))
  }

  return (
    <>
      <section className={styles.login}>
        <div className={styles.loginimg}>
          <h2>Welcome to Register</h2>
          <p>Hi, we are you glad you are back.<br /> Please Register</p>
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

            <div className={styles.form_input}>
              <label htmlFor='password'>Confirm Password</label>
              <div className={styles.two}>
                <input type={!cpassShow ? "password" : "text"} name="password" id='password' placeholder='Enter Your password' />
                <div className={styles.showpass} onClick={() => setCPassshow(!cpassShow)}>
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className={styles.btn} onClick={Registeruser} >Register</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register
