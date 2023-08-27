import { FetchUsercart } from "@/Redux/actions/cartActions"
import Cart from "@/component/Cart/Cart"
import Total from "@/component/Cart/Total/Total"
import Footer from "@/component/Footer/Footer"
import { useEffect } from "react"
import styles from '../component/Cart/Cart.module.css'
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@mui/material"

const cart = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.cart)
    const { loading, error, dataCart } = selector

    useEffect(() => {
        dispatch(FetchUsercart())
    }, [dispatch]);

    return (
        <>
            <div className={styles.buttonProducts} >
                <div className={styles.placeOrder} >
                    {dataCart?.map((items, ide) => {
                        return (
                            <Cart data={items.ProductId} key={ide} />
                        )
                    })}
                    <div className={styles.buybothbtn} >
                        <Button className={styles.backtoshopbtn} variant="contained">
                            Back to shop
                        </Button>
                        <Button className={styles.buybtn} variant="contained">
                            place order
                        </Button>
                    </div>
                </div>

                <div className={styles.sidetotalCom}>
                    <Total />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default cart
