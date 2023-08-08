import Link from 'next/link'
import styles from './Login.module.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userlogin } from '@/Redux/actions/userActions';

const Login = () => {
  const dispatch = useDispatch()

  const [exst, setExist] = useState(false);
  const [login, setLogin] = useState({ email: "", password: "" })
  const [passShow, setPassshow] = useState(false);

  const userlogged = useSelector(state => state.user);
  // get user data from response/redux
  const { userInfo, error } = userlogged;

  const loginuser = (e) => {
    e.preventDefault();
    const { email, password } = login;

    // Check if the email is valid using a regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email);
    if (email === '') {
      alert("Email is required")
    } else if (password == '') {
      alert("Password is required")
    } else if (!isValid) {
      alert("email is not valid")
    } else {
      dispatch(userlogin(login))
      setExist(true);
    }
  }

  useEffect(() => {

    if (userInfo?.status === 201 && exst === true) {
      localStorage.setItem("user", userInfo?.user._id);
      localStorage.setItem("token", userInfo?.token);
      alert("Logged in successfully")
      setExist(false)

    } else if (userInfo?.status === 404 && exst === true) {
      alert("Email not Exist")
      setExist(false)
    }

    else if(userInfo?.status === 401 && exst === true){
      alert("Password not correct")
      setExist(false)
    }
  }, [userInfo])

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
              <input type='email' name="email" id='email' placeholder='Enter Your Email Address' value={login.email} onChange={(e) => { setLogin((prev) => ({ ...prev, email: e.target.value })) }} />
            </div>

            <div className={styles.form_input}>
              <label htmlFor='password'>Password</label>
              <div className={styles.two}>
                <input type={!passShow ? "password" : "text"} name="password" id='password' placeholder='Enter Your password' value={login.password} onChange={(e) => { setLogin((prev) => ({ ...prev, password: e.target.value })) }} />
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
