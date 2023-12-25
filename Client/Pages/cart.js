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
import Address from "@/component/Address/Address"
import Progress from "@/component/Address/Stepper/Progress"
import Order from "@/component/Order/Order"
import PaymentOpt from "@/component/Payment/PaymentOpt"

const cart = () => {
    const dispatch = useDispatch()
    const route = useRouter()
    const [active, setActive] = useState(0)
    const [total, setTotal] = useState()
    const selector = useSelector(state => state.cart)
    const select = useSelector(state => state.products);
    const { loading, error, dataCart } = selector;
    const { idItems } = select;
    const [products, setProducts] = useState([]);
    const [Increase, setIncrease] = useState(1);
    let totalp = 0;

    const calculateTotal = () => {
        totalp += data.Price * Increase;
        setTotal(totalp)
    };

    useEffect(() => {
        calculateTotal()
    }, [Increase])

    const handleDelete = (id) => {
        dispatch(DeleteProductsCarts(id));
        dispatch(FetchUsercart());
    }

    const handleRelocation = () => {
        setActive(1)
    }

    useEffect(() => {
        dataCart?.map((element) => {
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
            {products === null || products?.length === 0 ? <Nodata />
                :
                <>
                    <div className={styles.progress} >

                        {active > 0 ? <Progress active={active} /> : ""}

                        <div className={styles.buttonProducts} >
                            {active == 0 ?
                                <div className={styles.placeOrder} >
                                    {products?.map((items, ide) => {
                                        return (
                                            <Cart
                                                data={items}
                                                setTotal={setTotal}
                                                setProducts={setProducts}
                                                key={ide}
                                                index={ide}
                                                handleDelete={handleDelete}
                                                total={total}
                                                Increase={Increase}
                                                setIncrease={setIncrease}
                                                totalp={totalp}
                                            />
                                        )
                                    })}
                                    <div className={styles.buybothbtn} >
                                        <Button onClick={handleRelocation} className={styles.buybtn} variant="contained">
                                            place order
                                        </Button>
                                    </div>
                                </div>
                                :
                                ""}
                            {active == 1 ? <Address setActive={setActive} /> : ""}
                            {active == 2 ? <Order data={products} setActive={setActive} /> : ""}
                            {active == 3 ? <PaymentOpt /> : ""}

                            <div className={styles.sidetotalCom}>
                                <Total
                                    totalPrice={totalp}
                                />
                            </div>
                        </div>
                    </div>
                </>
            }
            <Footer />
        </>
    )
}

export default cart
