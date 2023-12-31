import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { DeleteProductsCarts, FetchUsercart, IncreaseItemFromCart } from "@/Redux/actions/cartActions";
import Cart from "@/component/Cart/Cart";
import Total from "@/component/Cart/Total/Total";
import Footer from "@/component/Footer/Footer";
import Nodata from "@/component/NoData/Nodata";
import Address from "@/component/Address/Address";
import Progress from "@/component/Address/Stepper/Progress";
import Order from "@/component/Order/Order";
import PaymentOpt from "@/component/Payment/PaymentOpt";
import styles from "../component/Cart/Cart.module.css";
import toast from "react-hot-toast";

const CartComponent = () => {
    const dispatch = useDispatch();
    const route = useRouter();
    const [active, setActive] = useState(0);
    const selector = useSelector((state) => state.cart);
    const { loading, error, dataCart } = selector;

    const handleDelete = (id) => {
        dispatch(DeleteProductsCarts(id));
        dispatch(FetchUsercart());
    };

    useEffect(() => {
        dispatch(FetchUsercart());
    }, [dispatch]);

    const handleRelocation = () => {
        setActive(1);
    };

    const IncreaseItems = (id, item) => {
        let cnt = item
        if (cnt < 5) {
            cnt++;
            dispatch(IncreaseItemFromCart(id, cnt));
        } else {
            toast.error('Item should not greater then 5')
        }
    };

    const DecreaseItems = (id, item) => {
        let cnt = item;
        if (cnt > 1 && cnt <= 5) {
            cnt--;
            dispatch(IncreaseItemFromCart(id, cnt));
        }
    };

    let sum = 0;
    if (dataCart && dataCart.length > 0) {
        sum = dataCart.reduce((acc, item) => acc + item.productId.price * item.totalItem, 0);
    }

    let totalItem = 0;
    if (dataCart && dataCart.length > 0) {
        totalItem = dataCart.reduce((acc, item) => acc + item.totalItem, 0);
    }

    return (
        <>
            {dataCart === null || dataCart?.length === 0 ? (
                <Nodata />
            ) : (
                <>
                    <div className={styles.progress}>
                        {active > 0 ? <Progress active={active} /> : ""}

                        <div className={styles.buttonProducts}>
                            {active === 0 && (
                                <div className={styles.placeOrder}>
                                    {dataCart.map((items, ide) => (
                                        <Cart
                                            key={ide}
                                            data={items}
                                            handleDelete={handleDelete}
                                            IncreaseItems={() => IncreaseItems(items.productId._id, items.totalItem)}
                                            DecreaseItems={() => DecreaseItems(items.productId._id, items.totalItem)}
                                        />
                                    ))}
                                    <div className={styles.buybothbtn}>
                                        <Button onClick={handleRelocation} className={styles.buybtn} variant="contained">
                                            Place Order
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {active === 1 && <Address setActive={setActive} />}
                            {active === 2 && <Order data={dataCart} setActive={setActive} sum={sum} />}
                            {active === 3 && <PaymentOpt />}

                            <div className={styles.sidetotalCom}>
                                <Total
                                 total={sum}
                                 totalItem={totalItem}
                                  />
                            </div>
                        </div>
                    </div>
                </>
            )}
            <Footer />
        </>
    );
};

export default CartComponent;
