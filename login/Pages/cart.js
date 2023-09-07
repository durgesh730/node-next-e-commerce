import { FetchUsercart } from "@/Redux/actions/cartActions"
import Cart from "@/component/Cart/Cart"
import Total from "@/component/Cart/Total/Total"
import Footer from "@/component/Footer/Footer"
import { useEffect, useState } from "react"
import styles from '../component/Cart/Cart.module.css'
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@mui/material"
import { DeleteProductsCarts } from '@/Redux/actions/cartActions'
import Nodata from "@/component/NoData/Nodata"
import { useRouter } from "next/router"
import { fetchProductsById } from "@/Redux/actions/productActions"

const cart = () => {
    const dispatch = useDispatch()
    const route = useRouter()
    const [price, setPrice] = useState([])

    const selector = useSelector(state => state.cart)
    const select = useSelector(state => state.products);
    const { loading, error, dataCart } = selector;
    const { idItems } = select;
    const [products, setProducts] = useState([]);

    const handleDelete = (id) => {
        dispatch(DeleteProductsCarts(id));
        dispatch(FetchUsercart());
    }

    const handleRelocation = () => {
        route.push('/userdetails')
    }
        
    useEffect(() => {
        dataCart.map((element) => {
            return dispatch(fetchProductsById(element.ProductId))
        })
    }, [dataCart])

    useEffect(() => {
        idItems.forEach(element => {
            const exists = products.some(product => product.Id === element.Id);
            if (!exists) {
                setProducts(prevProducts => [...prevProducts, element]);
            }
        });
    }, [idItems])

    useEffect(() => {
        dispatch(FetchUsercart())
    }, [dispatch]);

    return (
        <>
            {products === null || products?.length === 0 ? <Nodata /> :
                <div className={styles.buttonProducts} >

                    <div className={styles.placeOrder} >
                        {products?.map((items, ide) => {
                            return (
                                <Cart data={items} key={ide} handleDelete={handleDelete} setPrice={setPrice} />
                            )
                        })}
                        <div className={styles.buybothbtn} >
                            {/* <Button className={styles.backtoshopbtn} variant="contained">
                                Back to shop
                            </Button> */}
                            <Button onClick={handleRelocation} className={styles.buybtn} variant="contained">
                                place order
                            </Button>
                        </div>
                    </div>

                    <div className={styles.sidetotalCom}>
                        <Total />
                    </div>
                </div>
            }
            <Footer />
        </>
    )
}

export default cart
