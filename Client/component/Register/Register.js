'use client'
import React, { useEffect, useState } from 'react'
import styles from './Register.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '@/Redux/actions/userActions';

const Register = () => {
  const dispatch = useDispatch();
  
  const [exst, setExist] = useState(false);
  const [passShow, setPassshow] = useState(false);
  const [cpassShow, setCPassshow] = useState(false);
  const [logg, setLogg] = useState({ email: "", password: "", cpassword: "" })

  const userRegister = useSelector(state => state.user);
  // get user data from response/redux
  const { userInfo, error } = userRegister;

  const Registeruser = (e) => {
    e.preventDefault();
    const { email, password, cpassword } = logg;
      // Check if the email is valid using a regular expression
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid = emailPattern.test(email);
    if (email === '') {
      alert("Email is required")
    } else if (password == '') {
      alert("Password is required")
    } else if (cpassword == '') {
      alert("Confirm Password required")
    } else if(!isValid) {
      alert("email is not valid")
    }else if(password !== cpassword) {
      alert("Password not matched")
    }else{
      dispatch(register(logg))
      setExist(true);
    }
  }  

  useEffect(() => {

    if (userInfo?.status === 201 && exst === true) {
      localStorage.setItem("user", userInfo?._id);
      localStorage.setItem("token", userInfo?.token);
      alert("Registed successfully")
      setExist(false)

    } else if (userInfo?.status === 409 && exst === true) {
      alert("user already exist")
      setExist(false)
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
