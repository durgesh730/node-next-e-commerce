'use client'
import React, { useEffect, useState } from 'react'
import styles from './Register.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '@/Redux/actions/userActions';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useDataValidation } from '@/Customhooks/useDataValidation';

const Register = () => {
  const dispatch = useDispatch();

  const [exist, setExist] = useState(false);
  const [passShow, setPassshow] = useState(false);
  const [cpassShow, setCPassshow] = useState(false);
  const [logg, setLogg] = useState({
    email: "",
    password: "",
    cpassword: ""
  })
  const route = useRouter()
  const userRegister = useSelector(state => state.user);
  // get user data from response/redux
  const { userInfo, error } = userRegister;

  // custom hook
  const { validateData } = useDataValidation()

  const Registeruser = (e) => {
    e.preventDefault();
    const valid = validateData(logg)
    if (valid) {
      dispatch(register(logg))
      setExist(true);
    }
  }

  useEffect(() => {
    if (!error) {
      localStorage.setItem("token", userInfo?.token);
      toast.success(userInfo?.msg)
      // if (userInfo?.user.addresses.length == 0) {
      //   route.push(`/userdetails`)
      // } else {
      //   route.push(`/`);
      // }
    } else {
      toast.success(error?.msg)
    }
  }, [userInfo])

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
              <input type='email' name="email" id='email' placeholder='Enter Your Email Address' value={logg.email} onChange={(event) => { setLogg((prev) => ({ ...prev, email: event.target.value })) }} />
            </div>

            <div className={styles.form_input}>
              <label htmlFor='password'>Password</label>
              <div className={styles.two}>
                <input type={!passShow ? "password" : "text"} name="password" id='password' placeholder='Enter Your password' value={logg.password} onChange={(event) => { setLogg((prev) => ({ ...prev, password: event.target.value })) }} />
                <div className={styles.showpass} onClick={() => setPassshow(!passShow)}>
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <div className={styles.form_input}>
              <label htmlFor='cpassword'>Confirm Password</label>
              <div className={styles.two}>
                <input type={!cpassShow ? "password" : "text"} name="cpassword" id='cpassword' placeholder='Enter Your password' value={logg.cpassword} onChange={(event) => { setLogg((prev) => ({ ...prev, cpassword: event.target.value })) }} />
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
