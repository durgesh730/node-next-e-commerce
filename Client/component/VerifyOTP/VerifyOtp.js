import styles from './VerifyOtp.module.css'

const VerifyOtp = () => {

  const VerifyOTP = () => {
  }

  return (
    <>
      <section className={styles.login}>
        <div className={styles.loginimg}>
          <h2>Welcome <br/> for OTP <br/> Verification</h2>
          <p>Hi, we are you glad you are back.<br /> Please Verify</p>
        </div>
        <div className={styles.form_data}>
          <form>
            <div className={styles.form_input}>
              <label htmlFor='email'>Email</label>
              <input type='email' name="email" id='email' placeholder='Enter Your Email Address' />
            </div>

            <button className={styles.btn} onClick={VerifyOTP} >Register</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default VerifyOtp
