'use client'
import React, { useEffect } from 'react'
import Static from './Static/Static'
import Items from './Items/Items'
import styles from "./Products.module.css"
import pic1 from '../../image/durgesh.png'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '@/Redux/actions/productActions'

const Products = () => {
    const dispatch = useDispatch();
    const productsData = useSelector(state => state.products)
    const { error, loading, items } = productsData;

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    return (
        <>
            <Static pic={pic1} heading={"Top Categories to choose from"} />
            {items.length == 0 || items === null ?
                <div className={styles.nodatafound} >
                    <h1>Product Loading...</h1>
                </div>
                :
                <>
                    <div className={styles.ItemsHeading} ><span>Products For You</span></div>
                    <div className={styles.items} >
                        {
                            items?.reverse()?.map((products, idx) => {
                                return (
                                    <>
                                        {products?.Count <= 0 ? (" ") :
                                                <Items product={products} key={idx} />
                                        }
                                    </>
                                )
                            })
                        }
                    </div>
                </>
            }
        </>
    )
}

export default Products
