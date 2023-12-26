import Image from 'next/image'
import styles from './Items.module.css'
import { AiFillStar } from 'react-icons/ai';
import { useRouter } from 'next/router'

const Items = ({ product }) => {
  const router = useRouter()

  const navigateToAnotherPage = () => {
    router.push({
      pathname: '/details',
      query: { data: product._id },
    });
  }


  return (
    <>
      <div className={styles.items} >

        <div onClick={navigateToAnotherPage} className={styles.ItemsCard} >
          <div className={styles.ItemImg} ><Image src={product?.image[0]} width={500} height={500} alt='images' /></div>
          <div className={styles.ImgDetails} >
            <div>{product?.title}</div>

            <div className={styles.price} >
              <span> ₹ {product?.price} </span>
              <small>onwards</small>
            </div>

            <div className={styles.delivery} > free delivery </div>

            <div className={styles.rating} >
              <span>3.8 <AiFillStar /> </span>
              <small>12546 Review</small>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Items
