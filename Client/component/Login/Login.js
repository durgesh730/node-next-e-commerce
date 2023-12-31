import Link from 'next/link';
import styles from './Login.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userlogin } from '@/Redux/actions/userActions';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

const Login = () => {
  const dispatch = useDispatch()
  const router = useRouter()

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
      toast.error("Email is required")
    } else if (password == '') {
      toast.error("Password is required")
    } else if (!isValid) {
      toast.error("email is not valid")
    } else {
      dispatch(userlogin(login))
      if (!error && userInfo) {
        localStorage.setItem("token", userInfo?.token);
        toast.success(userInfo?.msg)
        if (userInfo?.existingUser?.addresses?.length == 0) {
          router.push(`/userdetails`)
        } else {
          router.push(`/`);
        }
      } 
      // else {
      //   toast.success(error?.msg)
      // }
    }
  }

  // useEffect(() => {
  //   if (!error) {
  //     localStorage.setItem("token", userInfo?.token);
  //     toast.success(userInfo?.msg)
  //     if (userInfo?.existingUser.addresses.length == 0) {
  //       router.push(`/userdetails`)
  //     } else {
  //       router.push(`/`);
  //     }
  //   } else {
  //     toast.success(error?.msg)
  //   }
  // }, [userInfo, error])

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
              <input
                type='email'
                name="email"
                id='email'
                placeholder='Enter Your Email Address'
                value={login.email}
                onChange={(e) => {
                  setLogin((prev) => ({
                    ...prev,
                    email: e.target.value
                  }))
                }}
              />
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
