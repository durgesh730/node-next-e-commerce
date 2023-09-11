import React from 'react'
import Footer from '@/component/Footer/Footer'
import Products from '@/component/Products/Products'
import '../app/globals.css'
import Navbar from '@/component/Navbar/Navbar'
import { Provider } from 'react-redux'
import store from '@/Redux/store'

const index = () => {
    return (
        <>
            <Provider store={store} >
                <Navbar />
                <Products />
                <div style={{paddingTop:"15rem"}} >
                <Footer />
                </div>
            </Provider>
        </>
    )
}

export default index
