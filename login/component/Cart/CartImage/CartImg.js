import React from 'react'
import Image from 'next/image';

const CartImg = ({ item }) => {
    return (
        <>
            <Image src={item[0]} alt={item?.title || 'Product Image'} width={500} height={600} />

        </>
    )
}

export default CartImg
